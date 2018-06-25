(ns velho-ds.atoms.icon
  (:require [stylefy.core :refer [use-style]]
            [velho-ds.atoms.style.icon :as style]))

(defn icon [{:keys [name styles]}]
  [:i.material-icons (use-style (merge style/icon styles)) name])