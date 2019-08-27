(ns velho-ds.molecules.style.notification
  (:require [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]
            [stylefy.core :as stylefy]))

(def notification-area
  {:margin "auto"
   :padding-top "6px"
   :padding-right spacing/space-large-rem
   :padding-bottom (str "calc(" spacing/space-base " / 4)")
   :padding-left spacing/space-small-rem
   :color color/color-white
   :position "relative"
   :background-color color/color-primary
   ::stylefy/sub-styles {:div {:width spacing/space-base-rem
                               :cursor "pointer"
                               :position "absolute"
                               :top spacing/space-xx-small-rem
                               :right spacing/space-xx-small-rem}}})

(def error
  (merge notification-area
         {:background-color color/state-error}))

(def warning
  (merge notification-area
         {:background-color color/state-warning}))

(def success
  (merge notification-area
         {:background-color color/state-success}))
