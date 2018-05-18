(ns velho-ds.atoms.buttons
  (:require [velho-ds.tokens.color :as color]))

(def button-style {:style {:font-size     "1rem"
                           :padding       "0.5rem 1rem"
                           :border        "1px solid rgba(50, 50, 50, .5)"
                           :border-radius "7%"}})
(def primary-style {:style {:backgroundColor color/color-primary}})
(def danger-style {:style {:backgroundColor color/color-neutral-3}})

(defn merge-styles [a b]
  {:style (merge (:style a) (:style b))})

(defn button
  ([content]
   (button content nil))
  ([content args]
   (let [styles (merge-styles button-style args)]
     [:button styles content])))

(defn button-primary [content & args]
  (button content primary-style))

(defn button-danger [content & args]
  (button content danger-style))
