(ns velho-ds.organisms.grid
  (:require [stylefy.core :as stylefy]))

(defn- style-grid [{:keys [rows cols]}]
  {:display "grid"
   :margin 0
   :padding 0
   :grid-template-rows rows
   :grid-template-columns cols})

(defn grid-wrap [{:keys [rows cols styles]} & content]
  [:div (stylefy/use-style (merge (style-grid {:rows (apply str (butlast (apply str (repeat rows "1fr "))))
                                               :cols (apply str (butlast (apply str (repeat cols "1fr "))))})
                                  styles))
   (map-indexed #(with-meta %2 {:key %1}) content)          ;; add key metadata to each child -> https://github.com/reagent-project/reagent/issues/68
   ])

(defn grid-cell [{:keys [row-start row-end col-start col-end styles] :as options} & content]
  (if (map? options)
    (let [r-s (when row-start {:grid-row-start row-start})
          r-e (when row-end {:grid-row-end row-end})
          c-s (when col-start {:grid-column-start col-start})
          c-e (when col-end {:grid-column-end col-end})
          grid-spans (merge r-s r-e c-s c-e)]
      [:div (stylefy/use-style (merge grid-spans styles))
       (map-indexed #(with-meta %2 {:key %1}) content)])     ;; add key metadata to each child -> https://github.com/reagent-project/reagent/issues/68
    [:div
     options
     (map-indexed #(with-meta %2 {:key %1}) content)]))        ;; add key metadata to each child -> https://github.com/reagent-project/reagent/issues/68
