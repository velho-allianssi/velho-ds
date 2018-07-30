(ns velho-ds.molecules.style.modal
  (:require [stylefy.core :as stylefy]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.z-index :as z-index]
            [velho-ds.tokens.box-shadow :as box-shadow]
            [velho-ds.tokens.border-radius :as border-radius]
            [velho-ds.tokens.border :as border]
            [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]
            [velho-ds.tokens.opacity :as opacity]))

(def background
  {:display "flex"
   :align-items "center"
   :justify-content "center"
   :position "fixed"
   :top 0
   :left 0
   :padding spacing/space-base-rem
   :width (str "calc(100% - " spacing/space-large-rem ")")
   :height (str "calc(100% - " spacing/space-large-rem ")")
   :z-index z-index/z-index-modal
   :background-color (clojure.string/replace color/color-neutral-5 "1)" (str opacity/opacity-light")"))
   :opacity 1
   :visibility "visible"
   :-webkit-backface-visibility "visible"
   :backface-visibility "visible"
   :cursor "default"})

(def modal-box
  {:display "block"
   :position "relative"
   :margin "0 auto"
   :background-color color/color-white
   :border-radius border-radius/border-radius-default
   :opacity 1
   :overflow-y "auto"
   :visibility "visible"
   :box-shadow box-shadow/box-shadow
   :-webkit-backface-visibility "visible"
   :backface-visibility "visible"})

(def modal-header
  {:display "flex"
   :align-items "center"
   :min-height spacing/space-x-large-rem
   :box-sizing "border-box"
   :border "none"
   :box-shadow box-shadow/box-shadow-small
   :padding-left spacing/space-base-rem
   :background color/color-white
   ::stylefy/sub-styles {:h2 {:align-self "center"
                              :margin 0}}})

(def modal-content
  {:padding spacing/space-base-rem
   :margin 0})

(def modal-footer
  {:padding-top spacing/space-base-rem
   :border-top (str border/border-default " solid " color/color-neutral-3)
   :margin (str "0 " spacing/space-base-rem " " spacing/space-base-rem " " spacing/space-base-rem)
   :justify-content "flex-end"
   :display "flex"
   :flex-wrap "wrap"})

(def modal-header-btn-area
  {:padding-left spacing/space-base-rem
   :padding-right spacing/space-small-rem
   :margin-left "auto"
   :display "flex"
   :width "auto"})

(def modal-header-btn
  {:box-shadow "none"
   :padding (str "0rem " spacing/space-x-small-rem)
   ::stylefy/mode {:active {:outline "none"
                            :box-shadow "none"
                            :transform "none"}
                   :focus {:outline "none"}}})
