(ns velho-ds.atoms.style.icon
  (:require [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.line-height :as line-height]
            [velho-ds.tokens.color :as color]
            [stylefy.core :as stylefy]))


(def icon
  {:position "relative"
   :top "5px"
   :font-size font-size/font-size-xx-large})

(def clickable
  {:cursor "pointer"
   :background "transparent"
   :user-select "none"
   :box-sizing "border-box"
   :border "none"
   :padding 0
   :line-height line-height/line-height-heading
   :color color/color-neutral-5
   :font-size font-size/font-size-xx-large
   ::stylefy/mode {:hover {:color color/color-primary}
                   :active {:outline "none"}
                   :focus {:outline "none"}}
   ::stylefy/sub-styles {:i {:font-size "inherit"}}})

(def clickable-disabled
  (merge clickable
         {:cursor "default"
          :color color/color-neutral-3
          :font-size font-size/font-size-xx-large
          ::stylefy/mode {:hover {:color color/color-neutral-3}
                          :active {:outline "none"}
                          :focus {:outline "none"}}
          ::stylefy/sub-styles {:i {:font-size "inherit"}}}))