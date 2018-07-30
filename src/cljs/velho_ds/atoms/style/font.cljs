(ns velho-ds.atoms.style.font
  (:require [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.font :as font]
            [velho-ds.tokens.line-height :as line-height]))


(def p
  {:font-family font/font-family-text
   :font-size font-size/font-size-base
   :font-weight font/font-weight-base
   :line-height line-height/line-height-base})

(def small
  {:font-family font/font-family-text
   :font-size font-size/font-size-small
   :font-weight font/font-weight-base
   :line-height line-height/line-height-base})

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

(def td
  p)