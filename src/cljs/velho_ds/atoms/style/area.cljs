(ns velho-ds.atoms.style.area
  (:require [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]
            [stylefy.core :as stylefy]))

(def info-area
  {:background color/color-white
   :padding (str spacing/space-small-rem " " spacing/space-base-rem)})
