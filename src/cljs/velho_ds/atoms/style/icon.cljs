(ns velho-ds.atoms.style.icon
  (:require [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.color :as color]
            [stylefy.core :as stylefy]))


(def icon
  {:position "relative"
   :top "7px"
   :font-size font-size/font-size-xx-large})

(def clickable
  {:cursor "pointer"
   :background "transparent"
   :user-select "none"
   :padding 0
   :box-sizing "border-box"
   :border "none"
   :color color/color-neutral-5
   :display "inline-table"
   :line-height font-size/font-size-xx-large
   ::stylefy/mode {:hover {:color color/color-primary}
                   :active {:outline "none"}
                   :focus {:outline "none"}}
   ::stylefy/sub-styles {:i {:font-size font-size/font-size-xx-large
                             :display "table-cell"
                             :vertical-align "middle"}}})
