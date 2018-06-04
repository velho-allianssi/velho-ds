(ns velho-ds.molecules.style.field
  (:require [velho-ds.tokens.color :as color]
            [velho-ds.tokens.font-size :as font-size]
            [stylefy.core :as stylefy]
            [velho-ds.tools.measures :as measures]))

(def keyvalue-content
  {:width "100%"
   :padding "0"
   :margin "0"
   :line-height  (measures/rem-times font-size/font-size-base 2)
   :min-height (measures/rem-times font-size/font-size-base 2)})

(def keyvalue-label
  {:color color/color-neutral-4})