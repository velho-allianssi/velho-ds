(ns velho-ds.atoms.icon
  (:require [stylefy.core :refer [use-style]]
            [velho-ds.atoms.style.icon :as s]))

(defn icon [{:keys [name styles]}]
  [:i.material-icons (use-style (merge s/icon styles)) name])