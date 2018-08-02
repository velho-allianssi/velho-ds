(ns velho-ds.atoms.icon
  (:require [stylefy.core :refer [use-style]]
            [velho-ds.atoms.style.icon :as style]
            [stylefy.core :as stylefy]))

(defn icon [{:keys [name styles]}]
  [:i.material-icons (use-style (merge style/icon styles)) name])

(defn clickable [{:keys [name styles on-click-fn]}]
  (assert name)
  [:button (stylefy/use-style (merge style/clickable styles) {:on-click on-click-fn})
   [:i.material-icons (stylefy/use-sub-style (merge style/clickable styles) :i) name]])