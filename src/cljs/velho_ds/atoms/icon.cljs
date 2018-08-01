(ns velho-ds.atoms.icon
  (:require [stylefy.core :refer [use-style]]
            [velho-ds.atoms.style.icon :as style]
            [stylefy.core :as stylefy]))

(defn icon [{:keys [name styles]}]
  [:i.material-icons (use-style (merge style/icon styles)) name])

(defn clickable [{:keys [icon styles on-click-fn]}]
  (assert icon)
  [:button (stylefy/use-style (merge style/clickable styles) {:on-click on-click-fn})
   (if icon [:i.material-icons (stylefy/use-sub-style (merge style/clickable styles) :i) icon])])