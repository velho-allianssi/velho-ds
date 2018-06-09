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
                         (:value %))
                options))
    [:span (stylefy/use-style style/dropdown-heading) heading]
    [:i.material-icons (stylefy/use-style style/icon) "arrow_drop_down"]]])

;;;;;;;;;;;;;;;;;;;;;;

(defn is-number? [my-text]
  (def pat (re-pattern "\\d+"))
  (re-find pat my-text)
  )

(defn message-text [input-text]
  (let[valid-message "is text"
       invalid-message "not text"]
    (if(nil?(is-number? input-text))
      (do (println "nil") valid-message)
      (do (println "has numbers") invalid-message)
      )))

(defn input-field2 [{:keys [content on-change-fn]}]
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
        [:span (stylefy/use-style style/input-field-heading) (message-text @input-text)]]])))
