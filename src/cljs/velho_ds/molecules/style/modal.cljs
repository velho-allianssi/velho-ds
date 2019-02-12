(ns velho-ds.molecules.style.modal
  (:require [stylefy.core :as stylefy]
            [velho-ds.tokens.timing :as timing]
            [velho-ds.tokens.box-shadow :as box-shadow]
            [velho-ds.tokens.color :as color]))

(def fade
  {:position "fixed"
   :top "0"
   :right "0"
   :bottom "0"
   :left "0"
   :z-index "1050"
   :overflow-x "hidden"
   :overflow-y "auto"
   :outline "0"
   :padding ".5rem"
   :background "hsla(0, 0%, 20%, 0.85)"})

(def wrapper
  {:position "relative"
   :display "table"
   :min-width "calc(100% / 3)"
   :max-width "calc(200% / 3)"
   :margin "0 auto"
   :pointer-events "none"
   :transition (str "max-width " timing/duration-slow " ease-in-out")
   ::stylefy/media {{:max-width "768px"} {:max-width "calc(100% - 1rem)"}}
   ::stylefy/auto-prefix #{:transition}})

(def bg
  {:position "relative"
   :display "flex"
   :flex-direction "column"
   :pointer-events "auto"
   :background-color "#fff"
   :background-clip "padding-box"
   :border "1px solid rgba(0,0,0,.2)"
   :border-radius ".3rem"
   :outline "0"})

(def header
  {:position "relative"
   :display "flex"
   :justify-content "space-between"
   :align-items "center"
   :pointer-events "auto"
   :background-clip "padding-box"
   :outline "0"
   :min-height "4rem"
   :box-sizing "border-box"
   :border "none"
   :margin "0 0 0.25rem 0"
   :box-shadow box-shadow/box-shadow-small
   :padding "0 1.5rem"})

(def content
  {:position "relative"
   :flex "1 1 auto"
   :padding "1rem"})

(def footer
  {:display "flex"
   :align-items "center"
   :justify-content "flex-end"
   :padding "1rem"
   :border-top (str "1px solid " color/color-neutral-2)})
