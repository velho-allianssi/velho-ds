(ns velho-ds.molecules.style.modal
  (:require [stylefy.core :as stylefy]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.timing :as timing]
            [velho-ds.tokens.z-index :as z-index]
            [velho-ds.tokens.box-shadow :as box-shadow]
            [velho-ds.tokens.border-radius :as border-radius]
            [velho-ds.tokens.border :as border]
            [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]))

(def modal-area
  {:position "fixed"
   :top 0
   :right 0
   :left 0
   :bottom 0
   :z-index z-index/z-index-modal
   :overflow-y "auto"
   :overflow-x "hidden"
   :text-align "center"
   :background-color "hsla(0, 0%, 20%, 0.8)" ;; Needs token or function for alpha changes?
   ::stylefy/mode {:before {:content "''"
                            :display "inline-block"
                            :height "100%"
                            :vertical-align "middle"
                            :margin (str "0 0 -" spacing/space-xx-small " 0")
                            :box-sizing "border-box"}}
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:box-sizing}})

(def modal-dialog
  {:background color/color-white
   :display "inline-block"
   :text-align "left"
   :vertical-align "middle"
   :width "50%"
   :position "relative"
   :box-sizing "border-box"
   :margin (str "0 " spacing/space-small-rem)
   :border-radius border-radius/border-radius-default
   :box-shadow box-shadow/box-shadow
   :transition (str "all " timing/duration-slow " ease-in-out")
   ::stylefy/media {{:max-width "640px"} {:width "calc(100% - 2rem)"}}
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:box-sizing :transition}})

(def modal-box
  {:width "100%"
   :overflow "hidden"
   :position "relative"
   :text-align "left"
   :margin (str "0 0 -" spacing/space-xx-small " 0")
   :display "inline-block"})


(def modal-header
  {:display "flex"
   :align-items "center"
   :min-height spacing/space-x-large-rem
   :box-sizing "border-box"
   :border "none"
   :margin (str "0 0 " spacing/space-xx-small " 0")
   :box-shadow box-shadow/box-shadow-small
   :padding-left spacing/space-base-rem
   :background color/color-white
   ::stylefy/sub-styles {:h2 {:align-self "center"
                              :margin 0}}})

(def modal-content
  {:height "auto"
   :max-height (str "calc(100vh - (" spacing/space-large-rem" * 6))")
   :overflow-y "auto"
   :padding spacing/space-base-rem
   :margin 0})

(def modal-footer
  {:padding-top spacing/space-small-rem
   :border-top (str border/border-default " solid " color/color-neutral-3)
   :margin (str "0 " spacing/space-small-rem " " spacing/space-small-rem " " spacing/space-small-rem)
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
   :padding (str "0 " spacing/space-x-small-rem)
   ::stylefy/mode {:active {:outline "none"
                            :box-shadow "none"
                            :transform "none"}
                   :focus {:outline "none"}}})
