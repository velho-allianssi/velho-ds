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
            [velho-ds.atoms.icon :as icon]))

(defn keyvalue [{:keys [content label]}]
  [:div
   [:small (stylefy/use-style style/keyvalue-label) label]
   [:p (stylefy/use-style style/keyvalue-content) content]])

(defn input-field [{:keys [label content placeholder icon icon-click-fn on-change-fn on-blur-fn error-messages]}]
  (let [input-text (r/atom content)
        change (fn [val]
                 (reset! input-text val)
                 (when on-change-fn (on-change-fn @input-text)))
        blur (fn []
               (when on-blur-fn (on-blur-fn @input-text)))]
    (fn []
      [:div
       [:label (stylefy/use-style style/element)
        [:input (stylefy/use-style (merge (if error-messages style/input-field-error
                                                             style/input-field) (when icon {:width "calc(100% - 2.5rem)"
                                                                                            :padding-right "2.5rem"})) {:required "required"
                                                                                                                        :on-change #(-> % .-target .-value change)
                                                                                                                        :on-blur blur
                                                                                                                        :value @input-text
                                                                                                                        :placeholder placeholder})]
        [:span (if error-messages (stylefy/use-style style/input-field-label-error)
                                  (stylefy/use-style (if (and label placeholder) style/input-field-label-static style/input-field-label))) label]
        (when icon [:i.material-icons (stylefy/use-style (merge style/icon (when icon-click-fn {:pointer-events "auto"
                                                                                                :cursor "pointer"}))) icon])]
       (when error-messages
         [:div (stylefy/use-style style/validation-errors)
          (for [message error-messages]
            (into ^{:key message} [:p (stylefy/use-sub-style style/validation-errors :p) message]))])])))

(defn multiline-field
  ([content]
   (multiline-field content nil))
  ([content args]
   [:div
    [:label (stylefy/use-style style/element)
     [:textarea (stylefy/use-style style/text-field {:required "required"})]
     [:span (stylefy/use-style style/input-field-label) content]]]))

(defn dropdown-menu [{:keys [label selected-fn options default-value no-selection-text]}]
  [:div
   [:label (stylefy/use-style style/element)
    (into [:select (stylefy/use-style style/dropdown {:defaultValue "value"
                                                      :on-change #(-> % .-target .-value selected-fn)})
           (when (not default-value)
             [:option
              {:value "value"
               :disabled "disabled"}
              no-selection-text])]
          (mapv #(vector :option (merge {:value (:id %)}
                                        (when (= default-value %)
                                          {:selected "selected"}))
                         (:value %)) options))
    [:span (stylefy/use-style style/dropdown-label) label]
    [:i.material-icons (stylefy/use-style style/icon) "arrow_drop_down"]]])

(defn- list-item [{:keys [on-click-fn content is-selected?]}]
  [:li (stylefy/use-style {:background-color (if is-selected? color/color-primary color/color-neutral-1)
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
                           :margin "4px 4px 4px 0px"
                           :padding "0.5rem"}
                          {:on-mouse-down #(on-click-fn content)
                           :key content
                           :class "dropdown-multi"})
   [:span (stylefy/use-style {:margin-right "0.5rem"}) content]
   [icon/icon {:name "cancel"
               :styles {:top "3px"
                        :font-size "1rem"}}]])

(defn- search-in-list [collection search-word]
  (filter #(string/includes? (string/lower-case %) search-word) collection))

(defn- remove-from-vector [vect values]
  (assert (vector? vect))
  (let [remove-from (into #{} vect)
        to-be-removed (if (coll? values)
                        (into #{} values)
                        #{values})]
    (into [] (set/difference remove-from to-be-removed))))

(defn dropdown-multiple [{:keys [label selected-fn options preselected-values]}]
  (assert (fn? selected-fn) ":selected-fn function is required for dropdown-multiple")
  (assert (vector? options) ":options vector is required for dropdown-multiple")
  (let [state (r/atom {:options options
                       :input-text ""
                       :selected-items (if preselected-values preselected-values [])
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
                                          (selected-fn (:selected-items @state))
                                          (println @state)
                                          (println state))
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
      [:div (stylefy/use-style {:position "relative"}
                               {:class "dropdown-multi"})
       [:div (stylefy/use-style {:padding-top "1rem"}{:class "dropdown-multi"})
        [:div {:class "dropdown-multi"}
         (into [:ul (stylefy/use-style {:list-style-type "none"
                                        :margin 0
                                        :padding 0}
                                       {:class "dropdown-multi"})]
               (mapv #(vector selected-list-items {:on-click-fn selected-list-item-selected-fn
                                                   :content %}) (:selected-items @state)))]
        [:div (stylefy/use-style {:background-color color/color-neutral-1
                                  :border-bottom (str "1px solid " color/color-neutral-5)}
                                 {:class "dropdown-multi"})
         [:input (stylefy/use-style {:background "none"
                                     :border 0
                                     :box-sizing "border-box"
                                     :display "inline-block"
                                     :font-family font/font-family-text
                                     :font-weight font/font-weight-base
                                     :font-size font-size/font-size-base
                                     :padding "0.5rem 0.5rem 0.5rem 0"
                                     :width "calc(100% - 1.5rem)"
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
                                     :class "dropdown-multi"})]
         [:span (stylefy/use-style style/dropdown-label) label]
         [icon/icon {:name "arrow_drop_down"}]]]
       [:div (stylefy/use-style {:box-shadow "0 2px 2px 0 rgba(0,0,0,.5)"
                                 :max-height (str "calc(4*" font-size/font-size-base " + 8*0.5rem + 4*1px)")
                                 :overflow-y "auto"
                                 :position "absolute"
                                 :width "100%"
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
