(ns velho-ds.molecules.style.notification
  (:require [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]
            [stylefy.core :as stylefy]))

(def notification-area
  {:margin "auto"
   :padding-top "6px"
   :padding-right spacing/space-large
   :padding-bottom (str "calc(" spacing/space-base " / 4)")
   :padding-left spacing/space-small
   :color color/color-white
   :position "relative"
   :background-color color/color-primary
   ::stylefy/sub-styles {:a {:width spacing/space-base
                             :cursor "pointer"
                             :position "absolute"
                             :top spacing/space-xx-small
                             :right spacing/space-xx-small}}})

(def error
  (merge notification-area
         {:background-color color/state-error}))

(def warning
  (merge notification-area
         {:background-color color/state-warning}))

(def success
  (merge notification-area
         {:background-color color/state-success}))