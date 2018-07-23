(ns velho-ds.atoms.font
  (:require [stylefy.core :as stylefy]
            [velho-ds.atoms.style.font :as style]))

(defn font-styles []
  (stylefy/tag "p" style/p)
  (stylefy/tag "small" style/small)
  (stylefy/tag "h1" style/h1)
  (stylefy/tag "h2" style/h2)
  (stylefy/tag "h3" style/h3)
  (stylefy/tag "h4" style/h4)
  (stylefy/tag "th" style/th)
  (stylefy/tag "td" style/td))
