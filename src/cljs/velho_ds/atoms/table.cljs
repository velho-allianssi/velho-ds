(ns velho-ds.atoms.table
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy]
            [velho-ds.atoms.style.table :as style]))

(defn default [{:keys [headers content footers styles]}]
  (let [cols (r/atom (for [val headers] (get val :key-path)))]
    [:table (merge (stylefy/use-style style/table-default) styles)
     [:thead (stylefy/use-style style/thead-default)
      (into [:tr (doall (for [item headers] ^{:key item} [:th (stylefy/use-sub-style style/thead-default :th) (get item :label)]))])]
     (when footers
       [:tfoot (stylefy/use-style style/tfoot-default)
        (into [:tr (doall (for [item footers] ^{:key item} [:td (stylefy/use-sub-style style/tfoot-default :td) (get item :value)]))])])
     [:tbody (stylefy/use-style style/tbody-default)
      (doall (for [row content]
               (into ^{:key row} [:tr (doall (for [col @cols]
                                               (into ^{:key col} [:td (stylefy/use-sub-style style/tbody-default :td) (get-in row col)])))])))]]))
