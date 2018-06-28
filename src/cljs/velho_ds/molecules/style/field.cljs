(ns velho-ds.molecules.style.field
  (:require [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.border :as border]
            [velho-ds.tokens.timing :as timing]
            [stylefy.core :as stylefy]
            [velho-ds.tools.measures :as measures]))


(def element
  {:position "relative"
   :display "block"
   :min-height spacing/space-x-large})

(def input-field
  {:position "absolute"
   :top spacing/space-small-rem
   :width "100%"
   :font-size font-size/font-size-base
   :transition (str "border-color " timing/duration-slow " ease-in-out")
   :outline "none"
   :padding "0"
   :margin "0"
   :min-height (measures/rem-times font-size/font-size-base 2)
   :background color/color-neutral-1
   :border-top "0"
   :border-left "0"
   :border-right "0"
   :border-bottom (str border/border-default " solid")
   :border-color color/color-neutral-4
   ::stylefy/mode {:focus {:border-bottom (str border/border-default " solid")
                           :border-color color/color-primary}
                   :valid+span {:top "0"
                                :cursor "inherit"
                                :font-size font-size/font-size-small}
                   :focus+span {:top "0"
                                :cursor "inherit"
                                :font-size font-size/font-size-small
                                :color color/color-primary}}
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:transition}})

(def input-field-error
  (merge input-field
         { ::stylefy/mode {:focus {:border-bottom (str border/border-large " solid")
                                   :border-color color/state-error}
                           :valid {:border-color color/state-error}
                           :valid+span {:top "0"
                                        :cursor "inherit"
                                        :font-size font-size/font-size-small}
                           :focus+span {:top "0"
                                        :cursor "inherit"
                                        :font-size font-size/font-size-small}}}))

(def text-field
  (merge input-field
         {:overflow-y "scroll"
          :resize "none"}))

(def input-field-heading
  {:position "absolute"
   :display "block"
   :top spacing/space-base-rem
   :font-size font-size/font-size-base
   :transition (str "all " timing/duration-slow " ease-in-out")
   :width "100%"
   :cursor "text"
   :color color/color-neutral-4
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:transition}})

(def input-field-heading-error
  (merge input-field-heading {:color color/state-error}))

(def validation-message-error
  {:bottom "0px"
   :position "absolute"
   :font-size "14px"
   :color "red"})

(def dropdown-heading
  {:position "absolute"
   :display "block"
   :top "0"
   :font-size font-size/font-size-small
   :cursor "inherit"
   :transition (str "all " timing/duration-slow " ease-in-out")
   :width "100%"
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:transition}})

(def dropdown
  {:appearance "none"
   :font-family "inherit"
   :background-color "transparent"
   :width "100%"
   :height (measures/rem-times font-size/font-size-base 2)
   :padding (str spacing/space-xx-small-rem " 0")
   :color color/text-default
   :border-top "0"
   :border-left "0"
   :border-right "0"
   :border-bottom (str border/border-default " solid")
   :border-color color/color-neutral-3
   :border-radius "0"
   :margin-top spacing/space-small-rem
   :font-size font-size/font-size-base
   ::stylefy/mode {:focus {:outline "none"}}
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:appearance}})

(def icon
  {:position "absolute"
   :padding spacing/space-xx-small-rem
   :top spacing/space-small-rem
   :right spacing/space-xx-small-rem
   :pointer-events "none"})

(def keyvalue-content
  {:width "100%"
   :padding "0"
   :margin "0"
   :line-height font-size/font-size-base})

(def keyvalue-label
  {:color color/color-neutral-4})

(def dropdown-multiple
  (merge dropdown 
   {:display "none"}))

(def input-field-multiple
  (merge input-field
         {:background "none"
          :border-bottom "0"
          :top "0"
          ::stylefy/sub-styles {:ul {:position "relative"
                                     :overflow "hidden"
                                     :margin "0"
                                     :padding "0"
                                     :min-height "2rem"}
                                :li {:display "inline-block"
                                     :position "relative"
                                     :margin "0"
                                     :padding "0 8px 0 0"
                                     :min-height "2rem"}}}))

(def input-field-multiple-last
  (merge input-field-multiple
         {:position "relative"
          :display "inline-block"
          :min-width spacing/space-large
          :width "auto"
          :top spacing/space-xx-small-rem}))

(def input-field-multiple-input
  (merge input-field
         {:top "0"
          :border-bottom "0"
          ::stylefy/mode {:valid {:border-bottom "0"}}}))

(def droplist
  {:position "absolute"
   :top "77%"
   :z-index "1010"
   :width "100%"
   :border "1px solid #aaa"
   :border-top "0"
   :background "#fff"
   :-webkit-box-shadow "0 4px 5px rgba(0, 0, 0, 0.15)"
   :box-shadow "0 4px 5px rgba(0, 0, 0, 0.15)"
   ::stylefy/sub-styles {:ul {:margin "0"
                              :padding "0"}
                         :li {:list-style "none"
                              :cursor "pointer"
                              :padding spacing/space-x-small-rem
                              ::stylefy/mode {:hover {:background color/color-primary
                                                      :color color/color-white}}}}})
