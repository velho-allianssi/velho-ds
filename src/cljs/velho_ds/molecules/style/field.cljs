(ns velho-ds.molecules.style.field
  (:require [stylefy.core :as stylefy]
            [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]
            [velho-ds.tokens.line-height :as line-height]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.z-index :as z-index]
            [velho-ds.tokens.border :as border]
            [velho-ds.tokens.timing :as timing]
            [velho-ds.tokens.font :as font]
            [velho-ds.tokens.box-shadow :as box-shadow]
            [velho-ds.tools.measures :as measures]))


(def element
  {:line-height line-height/line-height-heading
   :position "relative"
   :display "block"})

(def input-field
  {:top spacing/space-small-rem
   :width "100%"
   :font-size font-size/font-size-base
   :font-family font/font-family-text
   :transition (str "border-color " timing/duration-slow " ease-in-out")
   :outline "none"
   :padding 0
   :margin 0
   :min-height (measures/rem-times font-size/font-size-base 2)
   :background color/color-white
   :box-sizing "border-box"
   :border-top 0
   :border-left 0
   :border-right 0
   :border-bottom (str border/border-default " solid")
   :border-color color/color-neutral-4
   :resize "vertical"
   ::stylefy/mode {:focus {:border-bottom (str border/border-default " solid")
                           :border-color color/color-primary}
                   "::-ms-clear" {:display "none"}}
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:transition}})

(def input-field-error
  (merge input-field
         {::stylefy/mode {:focus {:border-bottom (str border/border-large " solid")
                                  :border-color color/state-error}
                          :valid {:border-color color/state-error}}}))

(def text-field
  (merge input-field
         {:height (measures/rem-times spacing/space-small-rem 2)
          :overflow-y "scroll"
          :resize "none"}))

(def input-field-label
  {:line-height "1"
   :position "relative"
   :top spacing/space-base-rem
   :font-size font-size/font-size-base
   :transition (str "all " timing/duration-slow " ease-in-out")
   :width "100%"
   :cursor "text"
   :color color/color-neutral-4
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:transition}})

(def input-field-label-static
  (merge input-field-label
         {:top 0
          :font-size font-size/font-size-small}))

(def input-field-label-error
  (merge input-field-label {:color color/state-error}))

(def validation-errors
  {:font-size font-size/font-size-small
   :color color/state-error
   ::stylefy/sub-styles {:p {:color color/state-error
                             :line-height font-size/font-size-small
                             :font-size font-size/font-size-small
                             :padding "1px 0"
                             :margin 0}}})

(def dropdown-label
  {:display "block"
   :color color/color-neutral-4
   :font-size font-size/font-size-small
   :cursor "inherit"
   :transition (str "all " timing/duration-slow " ease-in-out")
   :width "100%"
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:transition}})

(def dropdown
  {:appearance "none"
   :background-color color/color-white
   :width "100%"
   :height (measures/rem-times font-size/font-size-base 2)
   :padding (str spacing/space-xx-small-rem " 0")
   :color color/text-default
   :border-top 0
   :border-left 0
   :border-right 0
   :border-bottom (str border/border-default " solid")
   :border-color color/color-neutral-4
   :border-radius 0
   :font-size font-size/font-size-base
   ::stylefy/mode {:focus {:outline "none"}}
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:appearance}})

(def icon
  {:position "absolute"
   :right spacing/space-xx-small-rem})

(defn input-icon [label?]
  (merge icon
         (if label?
           {:top (str "calc(" spacing/space-small-rem " + " spacing/space-xx-small-rem ")")}
           {:top spacing/space-xx-small-rem})))

(def dropdown-icon
  (merge icon
         {:top spacing/space-base-rem}))

(def dropdown-multiple-icon
  (merge icon
         {:top spacing/space-xx-small-rem}))

(def keyvalue-content
  {:width "100%"
   :padding 0
   :margin 0
   :line-height font-size/font-size-base})

(def keyvalue-label
  {:color color/color-neutral-4})

(def iconvalue
  {:padding-right spacing/space-small-rem
   :display "inline-block"})

(def iconvalue-icon
  {:position "relative"
   :top "5px"
   :font-size font-size/font-size-xx-large
   :white-space "nowrap"})

(def iconvalue-value
  {:padding-left "6px"
   :white-space "nowrap"})

(def dropdown-multiple-selected-items
  {:list-style-type "none"
   :margin 0
   :padding 0})

(def dropdown-multiple-input-background
  {:position "relative"
   :height (measures/rem-times spacing/space-small-rem 2)
   :box-sizing "border-box"
   :background-color color/color-white
   :border-bottom (str "1px solid " color/color-neutral-4)})

(def dropdown-multiple-input
  {:background "none"
   :border 0
   :height (measures/rem-times spacing/space-small-rem 2)
   :box-sizing "border-box"
   :display "inline-block"
   :font-family font/font-family-text
   :font-weight font/font-weight-base
   :font-size font-size/font-size-base
   :padding (str spacing/space-x-small-rem " " spacing/space-x-small-rem " " spacing/space-x-small-rem " 0")
   :width (str "calc(100% - " spacing/space-base-rem ")")
   ::stylefy/mode {:focus {:outline "none"}}
   ::stylefy/vendors ["webkit" "moz" "o"]
   ::stylefy/auto-prefix #{:outline}})

(def dropdown-multiple-list
  {:box-shadow box-shadow/box-shadow-small
   :max-height (str "calc(6*" font-size/font-size-base " + 12*" spacing/space-x-small-rem " + 6*1px)")
   :overflow-y "auto"
   :position "absolute"
   :width "100%"
   :z-index z-index/z-index-sticky})

(def dropdown-menu-list
  (merge dropdown-multiple-list
         {:background color/color-neutral-1}))

(def dropdown-multiple-list-item
  {:list-style-type "none"
   :margin 0
   :padding 0})

(def drag-n-drop-header
  {:margin "auto"
   :border (str border/border-default " solid " color/color-neutral-4)
   :padding-top "6px"
   :padding-right spacing/space-large
   :padding-bottom (str "calc(" spacing/space-base " / 4)")
   :padding-left spacing/space-small
   :color color/color-white
   :position "relative"
   :background-color color/color-neutral-4})

(def drag-n-drop-content
  {:background color/color-neutral-2
   :padding spacing/space-x-small-rem
   :border (str border/border-default " dashed " color/color-neutral-4)})

(def drag-n-drop-content-ul
  {:margin 0
   :padding 0
   ::stylefy/sub-styles {:li {:list-style "none"
                              :margin-bottom "0.5rem"}}})

(def drag-n-drop-helparea
  {:text-align "center"
   :padding (str spacing/space-x-small-rem " 0")
   :cursor "pointer"
   :color color/color-neutral-4
   ::stylefy/sub-styles {:p {:margin 0}}})

(def drag-n-drop-item
  {:list-style "none"
   :background "white"
   :padding-left spacing/space-x-small-rem
   :box-shadow box-shadow/box-shadow-small
   :display "flex"
   :align-items "center"
   :width (str "calc(100% - " spacing/space-x-small-rem ")")
   :min-height (measures/rem-times spacing/space-small-rem 2)
   :justify-content "space-between"})

(def drag-n-drop-item-btn-area
  {:padding-left spacing/space-base-rem
   :padding-right spacing/space-xx-small-rem
   :margin-left "auto"
   :display "flex"
   :width "auto"})

(def drag-n-drop-item-description-area
  {:display "block"
   :background color/color-white
   :box-shadow box-shadow/box-shadow-small
   :padding spacing/space-x-small-rem})

(def drag-n-drop-item-description-area-hidden
  {:display "none"})

(def dropdown-list
  {:z-index 9999
   :padding 0
   :margin 0})

(def dropdown-list-item
  {:list-style "none"
   :user-select "none"
   :padding (str spacing/space-xx-small-rem " " spacing/space-x-small-rem)
   :cursor "pointer"
   :color color/color-neutral-5
   ::stylefy/sub-styles {:span {:text-decoration "none"
                                :color "inherit"}}})

(def dropdown-list-item-selected
  (merge dropdown-list-item
         {:color color/color-white
          :background color/color-primary
          ::stylefy/mode {:hover {:background color/color-primary}}}))

(def dropdown-list-header
  (merge dropdown-list-item
         {:padding spacing/space-x-small-rem
          :color color/color-neutral-4}))

(def dropdown-list-header-item
  {:margin 0
   :user-select "none"
   :display "inline-block"
   :cursor "pointer"
   :padding 0
   :color "inherit"
   ::stylefy/mode {:hover {:color "inherit"}}})

(def dropdown-list-container
  {:max-height (measures/rem-times spacing/space-large-rem 8)
   :overflow-y "scroll"
   :padding 0
   :margin 0
   :background "white"
   :box-shadow box-shadow/box-shadow-small
   :position "absolute"
   :top (str "calc(" spacing/space-large-rem " + " border/border-large ")")
   :width "100%"
   :z-index 9999})

(def list-element-label
  {:margin 0
   :font-weight 600
   :display "block"
   :line-height 1.25})

(def list-element-desc
  {:line-height 1.25
   :display "block"
   :margin 0})

(def list-element-info
  {:line-height 1
   :display "block"
   :margin 0
   :color color/color-neutral-4})
