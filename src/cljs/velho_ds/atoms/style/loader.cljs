(ns velho-ds.atoms.style.loader
  (:require [stylefy.core :as stylefy]
            [velho-ds.tokens.spacing :as spacing]
            [velho-ds.tokens.timing :as timing]
            [velho-ds.tokens.color :as color]
            [velho-ds.tokens.border :as border]
            [velho-ds.tokens.border-radius :as border-radius]))

(stylefy/keyframes "bar-calculating"
                   [:0%
                    {:opacity "0.0"
                     :transform "scaleX(0)"}]
                   [:30%
                    {:opacity "1.0"
                     :transform "scaleX(1)"}]
                   [:100%
                    {:opacity "0.0"
                     :transform "scaleX(0)"}])

(stylefy/keyframes "box-spinner"
                   [:0%
                    {:transform "scale(0)"}]
                   [:30%
                    {:transform "scale(1)"}]
                   [:100%
                    {:transform "scale(0)"
                     :opacity "0"}])

(def line-area
  {:height spacing/space-xx-small
   :width "100%"})

(def bar
  {:height spacing/space-xx-small
   :background color/color-primary
   :animation-duration timing/duration-x-slow
   :animation-iteration-count "infinite"
   :animation-timing-function "ease-in-out"
   :transition (str "width " timing/duration-x-slow)
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:transition}})

(def bar-unknown
  (merge bar
         {:animation-name "bar-calculating"}))

(def pulse-animated
  {:width spacing/space-base-rem
   :height spacing/space-base-rem
   :box-sizing "border-box"
   :border (str border/border-large " solid " color/color-neutral-3)
   :border-radius border-radius/border-radius-circle
   :margin "auto"
   :animation-name "box-spinner"
   :animation-duration timing/duration-x-slow
   :animation-iteration-count "infinite"
   })