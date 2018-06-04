(ns velho-ds.molecules.style.field
  (:require [velho-ds.tokens.color :as color]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.spacing :as spacing]
            [stylefy.core :as stylefy]
            [velho-ds.tools.measures :as measures]))

(def keyvalue-content
  {:width "100%"
   :padding "0"
   :margin "0"
   :line-height font-size/font-size-base})

(def keyvalue-label
  {:color color/color-neutral-4})

(def labeless-icon
  {:vertical-align "middle"
   :font-size font-size/font-size-xx-large
   :padding-right spacing/space-xx-small
   :height spacing/space-base})

(def labeless-content
  {:display "inline-block"
   :vertical-align "middle"})