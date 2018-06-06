(ns velho-ds.organisms.grid
  (:require [stylefy.core :as stylefy]))

(defn- style-grid [{:keys [rows cols]}]
  {:display "grid"
   :grid-template-rows rows
   :grid-template-columns cols})

(defn grid-wrap [{:keys [rows cols style]} & content]
  [:div (stylefy/use-style (merge (style-grid {:rows (apply str (butlast (apply str (repeat rows "1fr "))))
                                               :cols (apply str (butlast (apply str (repeat cols "1fr "))))})
                                  style))
   (map-indexed #(with-meta %2 {:key %1}) content) ;; add key metadata to each child -> https://github.com/reagent-project/reagent/issues/68
   ])

(defn grid-cell [{:keys [row-start row-end col-start col-end style]} & content]
  (let [r-s (if row-start {:grid-row-start row-start})
        r-e (if row-end {:grid-row-end row-end})
        c-s (if col-start {:grid-column-start col-start})
        c-e (if col-end {:grid-column-end col-end})
        grid-spans (merge r-s r-e c-s c-e)]
    [:div (stylefy/use-style (merge grid-spans style))
     (map-indexed #(with-meta %2 {:key %1}) content) ;; add key metadata to each child -> https://github.com/reagent-project/reagent/issues/68
     ]))