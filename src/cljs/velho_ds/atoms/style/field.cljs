(ns velho-ds.atoms.style.field
  (:require [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.border :as border]
            [velho-ds.tokens.timing :as timing]
            [stylefy.core :as stylefy]
            [velho-ds.tools.measures :as measures]))


(def element
  {:position "relative"
   :display "block"
   :min-height spacing/space-x-large
   :margin spacing/space-base})

(def input-field
  {:position "absolute"
   :top spacing/space-small-rem
   :width "100%"
   :font-size font-size/font-size-base
   :transition (str "border-color " timing/duration-slow " ease-in-out")
   :outline "none"
   :padding "0"
   :margin "0"
   :min-height (measures/rem-times font-size/font-size-base 2)
   :background "none"
   :border-top "0"
   :border-left "0"
   :border-right "0"
   :border-bottom (str border/border-default " solid")
   :border-color color/color-neutral-3
   ::stylefy/mode {:focus {:border-bottom (str border/border-large " solid")
                           :border-color color/color-primary}
                   :valid {:border-bottom (str border/border-default " solid")
                           :border-color color/color-neutral-3}
                   :valid+span {:top "0"
                                :cursor "inherit"
                                :font-size font-size/font-size-small}
                   :focus+span {:top "0"
                                :cursor "inherit"
                                :font-size font-size/font-size-small
                                :color color/color-primary}}
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:transition}})

(def text-field
  (merge input-field
         {:overflow-y "scroll"
          :resize "none"}))

(def input-field-heading
  {:position "absolute"
   :display "block"
   :top spacing/space-base-rem
   :font-size font-size/font-size-base
   :transition (str "all " timing/duration-slow " ease-in-out")
   :width "100%"
   :cursor "text"
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:transition}})

(def dropdown-heading
  {:position "absolute"
   :display "block"
   :top "0"
   :font-size font-size/font-size-small
   :cursor "inherit"
   :transition (str "all " timing/duration-slow " ease-in-out")
   :width "100%"
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:transition}})

(def dropdown
  {:appearance "none"
   :font-family "inherit"
   :background-color "transparent"
   :width "100%"
   :height (measures/rem-times font-size/font-size-base 2)
   :padding (str spacing/space-xx-small-rem " 0")
   :color color/text-default
   :border-top "0"
   :border-left "0"
   :border-right "0"
   :border-bottom (str border/border-default " solid")
   :border-color color/color-neutral-3
   :border-radius "0"
   :margin-top spacing/space-small-rem
   :font-size font-size/font-size-base
   ::stylefy/mode {:focus {:outline "none"}}
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:appearance}})

(def icon
  {:position "absolute"
   :padding spacing/space-xx-small-rem
   :top spacing/space-small-rem
   :right spacing/space-xx-small-rem
   :pointer-events "none"})