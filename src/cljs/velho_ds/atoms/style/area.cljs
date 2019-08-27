(ns velho-ds.atoms.style.area
  (:require [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]
            [velho-ds.tokens.border :as border]
            [stylefy.core :as stylefy]
            [velho-ds.tokens.box-shadow :as box-shadow]))

(def info-area
  {:background color/color-white
   :padding (str spacing/space-small-rem " " spacing/space-base-rem)})

(def dotted-header
  {:margin "auto"
   :border (str border/border-default " solid " color/color-neutral-4)
   :padding-top "6px"
   :padding-right spacing/space-large-rem
   :padding-bottom (str "calc(" spacing/space-base-rem " / 4)")
   :padding-left spacing/space-small-rem
   :color color/color-white
   :position "relative"
   :background-color color/color-neutral-4})

(def dotted-content
  {:background color/color-neutral-2
   :padding spacing/space-x-small-rem
   :border (str border/border-default " dashed " color/color-neutral-4)})

(def drag-n-drop-helparea
  {:text-align "center"
   :padding (str spacing/space-x-small-rem " 0")
   :cursor "pointer"
   :color color/color-neutral-4
   ::stylefy/sub-styles {:p {:margin 0}}})

(def shadow-area
  {:background color/color-white
   :padding spacing/space-xx-small-rem
   :box-shadow box-shadow/box-shadow-small})
