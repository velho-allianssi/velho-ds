(ns velho-ds.molecules.field
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy]
            [velho-ds.molecules.style.field :as style]))

(defn keyvalue [{:keys [content label]}]
 [:div
  [:small (stylefy/use-style style/keyvalue-label) label]
  [:p (stylefy/use-style style/keyvalue-content) content]])

(defn labeless-value [{:keys [content icon]}]
 (assert content)
 [:div
  (if icon [:i.material-icons (stylefy/use-style style/labeless-icon) icon])
  [:p (stylefy/use-style style/labeless-content) content]])