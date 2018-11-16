(ns velho-ds.atoms.style.font
  (:require [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.font :as font]
            [velho-ds.tokens.color :as color]
            [velho-ds.tokens.line-height :as line-height]))


(def text
  {:font-family font/font-family-text
   :line-height line-height/line-height-base
   :font-weight font/font-weight-base
   :font-size font-size/font-size-base})

(def p text)
(def span text)
(def td text)
(def li text)

(def a
  (merge text
         {:cursor "pointer"
          :color color/color-primary}))

(def small
  (merge text
         {:font-size font-size/font-size-small}))

(def h1
  {:font-family font/font-family-text
   :font-size font-size/font-size-xx-large
   :font-weight font/font-weight-bold
   :line-height line-height/line-height-heading})

(def h2
  {:font-family font/font-family-heading
   :font-size font-size/font-size-x-large
   :font-weight font/font-weight-light
   :line-height line-height/line-height-heading})

(def h3
  {:font-family font/font-family-heading
   :font-size font-size/font-size-large
   :font-weight font/font-weight-bold
   :line-height line-height/line-height-heading})

(def h4
  {:font-family font/font-family-heading
   :font-size font-size/font-size-base
   :font-weight font/font-weight-bold
   :line-height line-height/line-height-heading})

(def th
  {:font-family font/font-family-heading
   :font-size font-size/font-size-large
   :font-weight font/font-weight-semi-bold
   :line-height line-height/line-height-base})
