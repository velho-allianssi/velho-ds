(ns velho-ds.molecules.field
  (:require [reagent.core :as r]
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
