(ns velho-ds.atoms.divider
  (:require [velho-ds.atoms.style.divider :as style]
            [stylefy.core :as stylefy]))

(defn default [{:keys [styles]}]
  [:span (stylefy/use-style (merge style/line styles))])
