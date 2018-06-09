(ns velho-ds.molecules.field
  (:require-macros [cljs.core.async.macros :as m :refer [go]])
  (:require [clojure.string :as string]
            [clojure.set :as set]
            [cljs.core.async :refer [chan close!]]
            [reagent.core :as r]
            [stylefy.core :as stylefy]
            [velho-ds.tokens.color :as color]
            [velho-ds.tokens.font :as font]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.z-index :as z-index]
            [velho-ds.molecules.style.field :as style]
            [velho-ds.atoms.button :as buttons]))

(defn merge-styles [a b]
  {:style (merge (:style a) (:style b))})

(defn keyvalue [{:keys [content label]}]
  [:div
   [:small (stylefy/use-style style/keyvalue-label) label]
   [:p (stylefy/use-style style/keyvalue-content) content]])

(defn input-field [{:keys [content label on-change-fn]}]
  (let [input-text (r/atom content)
        update-and-send (fn [val]
                          (reset! input-text val)
                          (on-change-fn @input-text))]
    (fn []
      [:div
       [:label (stylefy/use-style style/element)
        [:input (stylefy/use-style style/input-field {:required  "required"
                                                      :on-change #(-> % .-target .-value update-and-send)
                                                      :value     @input-text})]
        [:span (stylefy/use-style style/input-field-heading) label]]])))

(defn multiline-field
  ([content]
   (multiline-field content nil))
  ([content args]
   [:div
    [:label (stylefy/use-style style/element)
     [:textarea (stylefy/use-style style/text-field {:required "required"})]
     [:span (stylefy/use-style style/input-field-heading) content]]]))

(defn dropdown-menu [{:keys [heading selected-fn options default-value no-selection-text]}]
  [:div
   [:label (stylefy/use-style style/element)
    (into [:select (stylefy/use-style
                     style/dropdown
                     {:on-change #(-> % .-target .-value selected-fn)})
           (when (not default-value)
             [:option
              {:value    "value"
               :selected "selected"
               :disabled "disabled"}
              no-selection-text])
           (stylefy/use-style style/dropdown)]
          (mapv #(vector :option (merge {:value (:id %)}
                                        (when (= default-value %)
                                          {:selected "selected"}))
                         (:value %)) options))
    [:span (stylefy/use-style style/dropdown-heading) heading]
    [:i.material-icons (stylefy/use-style style/icon) "arrow_drop_down"]]])


(defn dropdown-multiple [{:keys [heading selected-fn options preselected-values default-value no-selection-text]}]
  (let [selected-options (r/atom (or preselected-values []))
        dropdown-multiple-open? (r/atom false)]

    (fn []
      [:div
       [:label (stylefy/use-style style/element)
        [:div (stylefy/use-style style/input-field)
         (into [:ul (stylefy/use-sub-style style/input-field-multiple :ul)]
               (conj (mapv #(vector :li (merge (stylefy/use-sub-style style/input-field-multiple :li)
                                               {:on-mouseDown (fn [_] (println "click"))})
                                    [buttons/secondary-small {:content (:value %)}]) @selected-options)

                     [:input (merge (stylefy/use-style style/input-field-multiple-input)
                                    {:on-focus (fn [_] (reset! dropdown-multiple-open? true))
                                     :on-blur  (fn [_] (reset! dropdown-multiple-open? false))})]))]
        [:div (merge (stylefy/use-style style/droplist) (if @dropdown-multiple-open? {:style {:display "inline"}} {:style {:display "none"}}))
         (into [:ul (stylefy/use-sub-style style/droplist :ul)]
               (mapv #(vector :li (merge (stylefy/use-sub-style style/droplist :li)
                                         {:on-mouseDown (fn [_]
                                                          (println "--->>> selected options" (pr-str @selected-options))
                                                          (println "--->>> %" (pr-str %))
                                                          (reset! selected-options (conj @selected-options %))
                                                          (println @selected-options))})
                              (:value %)) options))]
        [:span (stylefy/use-style style/dropdown-heading) heading]
        [:i.material-icons (stylefy/use-style style/icon) "arrow_drop_down"]]])))




;; ---------------
;; FILTERABLE-LIST
;; ---------------
(defn- list-item [{:keys [on-click-fn content is-selected?]}]
  [:li (stylefy/use-style {:background-color (if is-selected? color/color-primary color/color-neutral-1)
                           :border-bottom "1px solid lightgray"
                           :color (if is-selected? color/color-neutral-2 color/color-black)
                           :cursor "pointer"
                           :display "block"
                           :padding "0.5rem"
                           ::stylefy/mode {:hover {:background-color color/color-primary
                                                   :color color/color-neutral-2}}}
                          {:on-click #(on-click-fn content)
                           :key content
                           :class "dropdown-multi"}) content])

(defn- selected-list-items [{:keys [on-click-fn content]}]
  [:li (stylefy/use-style {:background-color color/color-neutral-5
                           :color color/color-neutral-2
                           :cursor "pointer"
                           :display "inline-block"
                           :margin "4px"
                           :padding "0.5rem"}
                          {:on-mouse-down #(on-click-fn content)
                           :key content
                           :class "dropdown-multi"}) content])

(defn- search-in-list [collection search-word]
  (filter #(string/includes? (string/lower-case %) search-word) collection))

(defn- remove-from-vector [vect values]
  (assert (vector? vect))
  (let [remove-from (into #{} vect)
        to-be-removed (if (coll? values)
                        (into #{} values)
                        #{values})]
    (into [] (set/difference remove-from to-be-removed))))

(defn dropdown-multiple2 [{:keys [heading selected-fn options preselected-values default-value no-selection-text]}]
  (assert (fn? selected-fn) ":selected-fn function is required for dropdown-multiple")
  (assert (vector? options) ":options vector is required for dropdown-multiple")
  (let [state (r/atom {:options options
                       :input-text ""
                       :selected-items []
                       :selected-idx nil
                       :selected-from-filter ""
                       :focus false})
        input-value-changed-fn #(swap! state assoc :input-text %)
        list-item-selected-fn #(do
                                 (swap! state update-in [:selected-items] conj %)
                                 (swap! state assoc :input-text "")
                                 (swap! state assoc :selected-idx nil)
                                 (selected-fn (:selected-items @state)))
        selected-list-item-selected-fn #(do
                                          (swap! state update-in [:selected-items] remove-from-vector %)
                                          (selected-fn (:selected-items @state)))
        selectable-items #(remove-from-vector (:options @state) (:selected-items @state))
        filtered-selections #(into []
                                   (apply sorted-set
                                          (search-in-list
                                            (selectable-items)
                                            (:input-text @state))))
        key-press-handler-fn (fn [key]
                               (when (and (= key "ArrowDown")
                                          (or (and (nil? (:selected-idx @state)) ; For the case there is only one item in the suggestion list
                                                   (= (count (filtered-selections)) 1))
                                              (< (:selected-idx @state) (dec (count (filtered-selections))))))
                                 (if (nil? (:selected-idx @state))
                                   (swap! state assoc :selected-idx 0)
                                   (swap! state update-in [:selected-idx] inc))
                                 (swap! state assoc :selected-from-filter (nth (filtered-selections) (:selected-idx @state))))
                               (when (and (= key "ArrowUp") (> (:selected-idx @state) 0))
                                 (swap! state update-in [:selected-idx] dec)
                                 (swap! state assoc :selected-from-filter (nth (filtered-selections) (:selected-idx @state))))
                               (when (and (= key "Enter"))
                                 (when (not (nil? (:selected-idx @state)))
                                   (list-item-selected-fn (nth (filtered-selections) (:selected-idx @state))))
                                 (swap! state assoc :selected-idx nil)
                                 (swap! state assoc :selected-from-filter ""))
                               (when (= key "Tab")
                                 (swap! state assoc :focus false)))
        global-click-handler #(let [target (.-target %)]
                                (if (empty? (search-in-list (string/split (-> target .-className) #" ") "dropdown-multi"))
                                    (swap! state assoc :focus false)))
        addEventListener #(.addEventListener (.getElementById js/document "app") "click" global-click-handler)] ;; Do global eventlistener for catching the click outside
    (fn []
      [:div (stylefy/use-style {:border "1px solid black"
                                :position "relative"}
                               {:class "dropdown-multi"})

       [:div {:class "dropdown-multi"}
        [:div {:class "dropdown-multi"}
         (into [:ul (stylefy/use-style {:list-style-type "none"
                                        :margin 0
                                        :padding 0}
                                       {:class "dropdown-multi"})]
               (mapv #(vector selected-list-items {:on-click-fn selected-list-item-selected-fn
                                                   :content %}) (:selected-items @state)))]
        [:div {:class "dropdown-multi"}
         [:input (stylefy/use-style {:background "none"
                                     :border (str "1px solid " color/color-neutral-3)
                                     :box-sizing "border-box"
                                     :display "inline-block"
                                     :font-family font/font-family-text
                                     :font-weight font/font-weight-base
                                     :font-size font-size/font-size-base
                                     :margin "0.5rem"
                                     :padding "0.5rem"
                                     :width "calc(100% - 1rem)"
                                     ::stylefy/mode {:focus {:outline "none"}}
                                     ::stylefy/vendors ["webkit" "moz" "o"]
                                     ::stylefy/auto-prefix #{:outline}}
                                    {:type "text"
                                     :on-change #(-> % .-target .-value input-value-changed-fn)
                                     :on-key-down #(-> % .-key key-press-handler-fn)
                                     :on-focus #(do
                                                  (swap! state assoc :focus true)
                                                  (addEventListener))
                                     :value (:input-text @state)
                                     :class "dropdown-multi"})]]]
       [:div (stylefy/use-style {:border (str "1px solid " color/color-neutral-5)
                                 :border-top (str "1px solid " color/color-primary)
                                 :max-height (str "calc(4*" font-size/font-size-base " + 8*0.5rem + 4*1px)")
                                 :overflow-y "auto"
                                 :position "absolute"
                                 :width "calc(100% - 2px)"
                                 :z-index z-index/z-index-sticky
                                 :display (if (:focus @state) "block" "none")}
                                {:class "dropdown-multi"})
        (into [:ul (stylefy/use-style {:list-style-type "none"
                                       :margin 0
                                       :padding 0}
                                      {:class "dropdown-multi"})]
              (mapv #(do
                       (vector list-item {:on-click-fn list-item-selected-fn
                                          :is-selected? (= (:selected-from-filter @state) %)
                                          :content %})) (filtered-selections)))]])))
