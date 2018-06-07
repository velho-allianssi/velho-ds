(ns velho-ds.molecules.field
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy]
            [velho-ds.molecules.style.field :as style]))

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
        [:input (stylefy/use-style style/input-field {:required "required"
                                                      :on-change #(-> % .-target .-value update-and-send)
                                                      :value @input-text})]
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
              {:value "value"
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

(defn dropdown-multiple [{:keys [heading selected-fn options default-value no-selection-text]}]
  (let [open? (r/atom false)]
  [:div
    [:label (stylefy/use-style style/element)
     [:div (stylefy/use-style style/input-field)
      [:ul (stylefy/use-sub-style style/input-field-multiple :ul)
       [:li (stylefy/use-sub-style style/input-field-multiple :li)
        [:input (stylefy/use-sub-style style/input-field-multiple :input)
          {:on-focus (fn [_]
                       (reset! open? true))}]]]]
     [:div (stylefy/use-style style/droplist)
      {:style (if open? {:display "inline"} {:display "none"})}
      (into [:ul]
            (mapv #(vector :li (:value %)) options))]
     [:span (stylefy/use-style style/dropdown-heading) heading]
     [:i.material-icons (stylefy/use-style style/icon) "arrow_drop_down"]]]))