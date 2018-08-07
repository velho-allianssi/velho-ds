(ns velho-ds.atoms.style.divider
  (:require [velho-ds.tokens.border :as border]
            [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]
            [stylefy.core :as stylefy]))

(def line
  {:display "block"
   :border-bottom (str border/border-default " solid")
   :border-color color/color-neutral-3
   :box-sizing "border-box"
   :margin-bottom spacing/space-x-small-rem
   :margin-top spacing/space-x-small-rem})