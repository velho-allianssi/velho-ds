(ns velho-ds.atoms.field
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy]
            [velho-ds.atoms.style.field :as style]))

(defn merge-styles [a b]
  {:style (merge (:style a) (:style b))})

(defn input-field [{:keys [content label]}]
  (let [input-text (r/atom content)]
    (fn []
      [:div
       [:label (stylefy/use-style style/element)
        [:input (stylefy/use-style style/input-field {:required "required"
                                                      :on-change #(reset! input-text (-> % .-target .-value))
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
                         (:value %))
                options))
    [:span (stylefy/use-style style/dropdown-heading) heading]
    [:i.material-icons (stylefy/use-style style/icon) "arrow_drop_down"]]])