(ns velho-ds.atoms.style.table
  (:require [stylefy.core :as stylefy]
            [velho-ds.tokens.font :as font]
            [velho-ds.tokens.color :as color]
            [velho-ds.atoms.style.font :as pre-font]))

(def table-default
  {:margin          "0"
   :padding         "0"
   :border-collapse "collapse"
   :width           "100%"
   :background      color/color-white
   :border          (str "1px solid " color/color-neutral-2)
   :text-align      "left"})

(def thead-default
  {:margin              "0"
   :padding             "0"
   ::stylefy/sub-styles {:th {:padding "1.25rem 1rem"
                              :border  (str "1px solid " color/color-neutral-2)}}})

(def tbody-default
  {:margin              "0"
   :padding             "0"
   ::stylefy/sub-styles {:td {:padding "0.875rem 1rem"
                              :border  (str "1px solid " color/color-neutral-2)}}})

(def tfoot-default
  (merge tbody-default
         {::stylefy/sub-styles {:td {:padding "0.875rem 1rem"
                                     :font-weight font/font-weight-light}}}))