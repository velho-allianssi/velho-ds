(ns velho-ds.molecules.style.tab
  (:require [velho-ds.tokens.color :as color]
            [stylefy.core :as stylefy]))

(def tab
  {:margin "0"
   :list-style "none"
   :height "48px"
   :line-height "48px"
   :color color/color-primary
   :cursor "pointer"
   :box-sizing "border-box"
   :display "inline-block"
   :white-space "nowrap"
   :user-select "none"
   ::stylefy/sub-styles {:a {:padding-right "16px"}}
   ::stylefy/mode {:hover {:color color/color-primary-dark}
                   :active {:border-bottom (str "2px solid " color/color-primary-dark)}}})

(def tab-active
  (merge tab
         {:margin "0"
          :color color/color-neutral-5
          :border-bottom (str "2px solid " color/color-neutral-5)
          ::stylefy/sub-styles {:a {:padding-right "16px"}}
          ::stylefy/mode {:hover {:color color/color-neutral-5}
                          :active {:border-bottom (str "2px solid " color/color-neutral-5)}}}))

(def tabset
  {:margin "0"
   :padding "0"})
