(ns velho-ds.molecules.style.tab
  (:require [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]
            [stylefy.core :as stylefy]))

(def tab
  {:margin 0
   :padding (str spacing/space-x-small-rem " 0")
   :list-style "none"
   :height spacing/space-large-rem
   :color color/color-primary
   :cursor "pointer"
   :box-sizing "border-box"
   :display "inline-block"
   :white-space "nowrap"
   :user-select "none"
   ::stylefy/sub-styles {:a {:padding (str "0 " spacing/space-small-rem " 0 " spacing/space-x-small-rem)
                             :color "inherit"}}
   ::stylefy/mode {:hover {:color color/color-primary-dark}}})

(def tab-active
  (merge tab
         {:margin 0
          :color color/color-neutral-5
          ::stylefy/sub-styles {:a {:padding (str "0 0 0 " spacing/space-x-small-rem)}}
          ::stylefy/mode {:hover {:color color/color-neutral-5}}}))

(def tabset
  {:margin 0
   :padding 0})
