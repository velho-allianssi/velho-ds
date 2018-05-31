(ns velho-ds.atoms.style.font
  (:require [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.font :as font]))


(def p
  {:font-size font-size/font-size-base
   :font-weight font/font-weight-base})

(def small
  {:font-size font-size/font-size-small
   :font-weight font/font-weight-base})

(def h1
  {:font-size font-size/font-size-xx-large
   :font-weight font/font-weight-bold})

(def h2
  {:font-size font-size/font-size-x-large
   :font-weight font/font-weight-light})

(def h3
  {:font-size font-size/font-size-large
   :font-weight font/font-weight-bold})

(def h4
  {:font-size font-size/font-size-base
   :font-weight font/font-weight-bold})