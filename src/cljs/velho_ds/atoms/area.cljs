(ns velho-ds.atoms.area
  (:require [velho-ds.atoms.style.area :as style]
            [velho-ds.tools.style :as tools-style]
            [stylefy.core :as stylefy]))

(defn info [{:keys [styles] :as options} & content]
  (if (map? options)
    [:div (stylefy/use-style (merge style/info-area styles))
     (map-indexed #(with-meta %2 {:key %1}) content)]
    [:div (stylefy/use-style style/info-area)
     options
     (map-indexed #(with-meta %2 {:key %1}) content)]))

(defn info-center [{:keys [styles] :as options} & content]
  [info (tools-style/merge-styles options style/info-area-center) content])
