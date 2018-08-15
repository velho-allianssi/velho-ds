(ns velho-ds.organisms.style.heading
  (:require [stylefy.core :as stylefy]
            [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.z-index :as z-index]
            [velho-ds.tokens.border :as border]
            [velho-ds.tokens.box-shadow :as box-shadow]
            [velho-ds.tokens.font :as font]
            [velho-ds.tokens.line-height :as line-height]
            [velho-ds.tokens.box-shadow :as box-shadow]
            [velho-ds.tools.measures :as measures]))

(def breadcrumb
  {:text-decoration "none"
   :margin 0
   :color color/color-primary-dark
   :display "inline-block"
   :font-family font/font-family-heading
   :font-size font-size/font-size-x-large
   :font-weight font/font-weight-light
   :line-height line-height/line-height-heading})

(def breadcrumb-braker
  {:margin 0
   :display "inline-block"
   :padding (str "0 " spacing/space-x-small-rem)
   :line-height spacing/space-base-rem})

(def breadcrumb-current-page
  {:margin 0
   :display "inline-block"
   :padding-right "0"
   :line-height spacing/space-base-rem})

(def content-heading
  {:padding (str spacing/space-x-small-rem " " spacing/space-base-rem)
   :background "white"
   :grid-template-columns "1fr 1fr 1fr 25%"
   :grid-template-rows "0fr"})

(def content-heading-info
  {:line-height spacing/space-base-rem
   :padding (str spacing/space-small-rem " 0")})

(def content-heading-info-item
  {:margin 0
   :line-height "inherit"})

(def content-heading-actions
  {:align-self "center"
   :justify-self "right"})

(def content-heading-footer
  {:padding 0
   :margin 0
   :list-style "none"
   ::stylefy/sub-styles {:li {:display "inline-block"
                              :padding (str "0 " spacing/space-xx-small-rem " " spacing/space-xx-small-rem " 0")}}})

(def page-heading
  {:padding (str "0 " spacing/space-base-rem)
   :margin 0
   :background "white"
   :box-shadow box-shadow/box-shadow-small})

(def page-heading-breadcrumb
  {:align-self "center"
   :line-height spacing/space-small-rem
   :position "relative"
   :min-height (measures/rem-times spacing/space-small-rem 2)
   :padding (str spacing/space-x-small-rem " 0")})

(def page-heading-container
  {:padding (str spacing/space-x-small-rem " " spacing/space-base-rem)
   :margin 0
   :background "white"
   :box-shadow box-shadow/box-shadow-small})

(def page-heading-container-info
  (merge page-heading-container
         {:padding (str spacing/space-x-small-rem " " spacing/space-base-rem)
          :margin 0
          :background "white"
          :box-shadow box-shadow/box-shadow-small
          :position "absolute"
          :min-width (str "calc(25% - " spacing/space-small-rem ")")
          :max-width (str "calc(100% - " spacing/space-large-rem ")")}))

(def search-results
  {:padding 0
   :margin(str "0 0 " spacing/space-x-small-rem " 0")})

(def search-results-header
  {:margin (str spacing/space-xx-small " 0")
   :display "inline-block"
   :padding (str "0 " spacing/space-xx-small " 0 0")})


(def search-results-item
  {:list-style "none"
   :padding (str spacing/space-xx-small " 0")
   :cursor "pointer"
   ::stylefy/sub-styles {:span {:text-decoration "none"
                                :color color/color-primary}}})
