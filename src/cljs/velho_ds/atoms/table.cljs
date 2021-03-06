(ns velho-ds.atoms.table
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy]
            [velho-ds.atoms.style.table :as style]))

(defn table-header [{:keys [label on-click-fn sub-content] :as header}]
  ^{:key header}
  [:th
   (cond-> (stylefy/use-sub-style style/thead-default :th)
           on-click-fn (assoc :on-click on-click-fn))
   label
   sub-content])

(defn table-headers [headers]
  [:thead (stylefy/use-style style/thead-default)
   (into [:tr] (doall (for [header headers] (table-header header))))])

(defn table-footers [footers]
  [:tfoot (stylefy/use-style style/tfoot-default)
   (into [:tr] (doall (for [item footers]
                        ^{:key item}
                        [:td
                         (stylefy/use-sub-style style/tfoot-default :td)
                         (get item :value)])))])

(defn table-content [headers content row-key-fn]
  (let [cols (r/atom (for [val headers] (get val :key-path)))]
    [:tbody (stylefy/use-style style/tbody-default)
     (doall (for [row content]
              ^{:key ((or row-key-fn identity) row)}
              [:tr
               (doall
                 (for [col @cols]
                   ^{:key col}
                   [:td
                    (stylefy/use-sub-style style/tbody-default :td)
                    (get-in row col)]))]))]))

(defn default [{:keys [headers content footers styles]}]
  [:table (merge (stylefy/use-style style/table-default) styles)
   [table-headers headers]
   [table-content headers content]
   (when footers
     [table-footers])])
