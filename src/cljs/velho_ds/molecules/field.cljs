(ns velho-ds.molecules.field
  (:require [clojure.string :as string]
            [clojure.set :as set]
            [reagent.core :as r]
            [stylefy.core :as stylefy]
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


(defn dropdown-multiple2 [{:keys [heading selected-fn options preselected-values default-value no-selection-text]}]
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
(defn- list-item [{:keys [on-click-fn content]}]
  [:li (stylefy/use-style {:border-bottom "1px solid lightgray"
                           :display "block"
                           :padding "0.5rem"}
                          {:on-click #(on-click-fn content)
                           :key content}) content])

(defn- selected-list-items [{:keys [on-click-fn content]}]
  [:li (stylefy/use-style {:background-color "cyan"
                           :margin "4px 0.5rem"}
                          {:on-click #(on-click-fn content)
                           :key content}) content])

(defn- search-in-list [collection search-word]
  (filter #(string/includes? (string/lower-case %) search-word) collection))

(defn dropdown-multiple [{:keys [heading selected-fn options preselected-values default-value no-selection-text]}]
  (let [items #{"Nina" "Kimmo" "Mikko" "Saara" "Jaakko" "Tuomas" "Ville" "Heikki"}
        state (r/atom {:items items
                       :selectable items
                       :filtered-selectable items
                       :typed-text ""
                       :selected-items []})
        input-value-changed-fn #(do
                                  (swap! state assoc :typed-text %)
                                  (swap! state assoc :filtered-selectable (search-in-list (:selectable @state) %)))
        list-item-selected-fn (fn [selected]
                                (do
                                  (swap! state assoc :selected-items (conj (:selected-items @state) selected))
                                  (swap! state assoc :typed-text "")
                                  (swap! state assoc :selectable (set/difference (:selectable @state) (into #{} (:selected-items @state))))
                                  (swap! state assoc :filtered-selectable (:selectable @state))))
        selected-list-item-selected-fn (fn [selected]
                                         (do
                                           (swap! state assoc :selected-items (set/difference (into #{} (:selected-items @state)) #{selected}))
                                           (swap! state assoc :selectable (conj (:selectable @state) selected))
                                           (swap! state assoc :filtered-selectable (conj (:filtered-selectable @state) selected))))]
    (fn []
      [:div (stylefy/use-style {:border "1px solid black"})
       [:div (stylefy/use-style {:border "1px solid red"})
        [:div (stylefy/use-style {:display "inline-block"})
         (into [:ul]
               (mapv #(vector selected-list-items {:on-click-fn selected-list-item-selected-fn
                                                   :content %}) (:selected-items @state)))]
        [:div (stylefy/use-style {:display "block"
                                  :background-color "springgreen"})
         [:input (stylefy/use-style {:background "none"
                                     :border 0
                                     :display "inline-block"
                                     :height "1rem"
                                     :width "100%"}
                                    {:type "text"
                                     :on-change #(-> % .-target .-value input-value-changed-fn)
                                     :value (:typed-text @state)})]]]
       [:div (stylefy/use-style {:border "1px solid yellow"})
        (into [:ul (stylefy/use-style {:list-style-type "none"
                                       :margin 0
                                       :padding 0})]
              (mapv #(vector list-item {:on-click-fn list-item-selected-fn
                                        :content %}) (apply sorted-set (:filtered-selectable @state))))]])))
