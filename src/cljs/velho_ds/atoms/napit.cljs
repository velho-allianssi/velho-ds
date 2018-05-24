(ns velho-ds.atoms.napit
  (:require [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.border :as border]
            [velho-ds.tokens.timing :as timing]
            [velho-ds.tokens.box-shadow :as box-shadow]
            [velho-ds.tools.measures :as measures]
            [stylefy.core :as stylefy]))

(def nappi {:cursor "pointer"
            :user-select "none"
            :border "none"
            :font-size font-size/font-size-base
            :padding spacing/space-small-rem
            :margin (str "0 " spacing/space-small-rem)
            :box-sizing "border-box"
            :box-shadow box-shadow/box-shadow
            :color color/color-white
            :background (str "linear-gradient(-45deg," color/color-primary-dark "0%," color/color-primary " 100%)")
            :background-color color/color-primary
            :background-position "left center"
            :background-size "200% auto"
            :height spacing/space-x-large
            :transition (str "all " timing/duration-slow " ease-in-out")
            ::stylefy/mode {:hover {:background-position "left bottom"
                                    :background-size "200% auto"}
                            :active {:background-position "right center"
                                     :outline "none"
                                     :box-shadow box-shadow/box-shadow-small
                                     :transform "scale(0.95, 0.95)"}
                            :focus {:outline "none"}}
            ::stylefy/sub-styles {:i {:font-size font-size/font-size-xx-large
                                      :vertical-align "-25%"}
                                  :span {:padding-left spacing/space-small-rem
                                         :padding-right spacing/space-x-small-rem
                                         :text-decoration "none"
                                         :border "none"}}
            ::stylefy/vendors ["webkit" "moz" "o"]
            ::stylefy/auto-prefix #{:transition}})

(def pieni {:height (measures/rem-times spacing/space-small-rem 2)
            :padding "0 1rem"})

(def tumma {:background (str "linear-gradient(-45deg," color/color-neutral-5 "0%," color/color-neutral-4 " 100%)")
            :background-color color/color-primary})

(def kehys {:color color/color-primary
            :background color/color-white
            :border (str border/border-default " solid")
            :border-color color/color-primary
            :background-color color/color-white
            ::stylefy/mode {:hover {:border-color color/color-primary-dark}
                            :active {:background-color color/color-primary
                                     :color color/color-white
                                     :outline "none"
                                     :box-shadow box-shadow/box-shadow-small}
                            :focus {:outline "none"}}})

(def kartta {:cursor "pointer"
            :user-select "none"
            :border (str border/border-default " solid " color/color-neutral-1)
            :font-size font-size/font-size-base
            :padding spacing/space-x-small-rem
            :margin (str "0 " spacing/space-small-rem)
            :box-sizing "border-box"
            :box-shadow box-shadow/box-shadow
            :color color/color-neutral-5
            :background color/color-white
            :height spacing/space-large
            :width spacing/space-large
            :transition (str "all " timing/duration-slow " ease-in-out")
            ::stylefy/mode {:hover {:background color/color-neutral-1}
                            :active {:background color/color-neutral-2
                                     :box-shadow box-shadow/box-shadow-small
                                     :transform "scale(0.95, 0.95)"}
                            :focus {:outline "none"}}
            ::stylefy/sub-styles {:i {:font-size font-size/font-size-xx-large
                                      :vertical-align "-25%"}}
            ::stylefy/vendors ["webkit" "moz" "o"]
            ::stylefy/auto-prefix #{:transition}})

(def tupla {:user-select "none"
            :margin "0"
            :width spacing/space-large })

(def yla {:position "relative"
          ::stylefy/mode {:hover {:background color/color-neutral-1}
                          :active {:background color/color-neutral-2
                                   :transform "translateY(1px) scale(0.95, 0.95)"
                                   :box-shadow box-shadow/box-shadow-small}
                          :focus {:outline "none"}}
          ::stylefy/vendors ["webkit" "moz" "o"]
          ::stylefy/auto-prefix #{:transition}})

(def ala {:position "relative"
          ::stylefy/mode {:hover {:background color/color-neutral-1}
                          :active {:background color/color-neutral-2
                                   :transform "scale(0.95, 0.95)"
                                   :box-shadow box-shadow/box-shadow-small}
                          :focus {:outline "none"}}
          ::stylefy/vendors ["webkit" "moz" "o"]
          ::stylefy/auto-prefix #{:transition}})

(defn oletus
  ([content ikoni]
   [:button (stylefy/use-style nappi)
    (or (not ikoni) [:i.material-icons (stylefy/use-sub-style nappi :i) ikoni])
    [:span (stylefy/use-sub-style nappi (or (not ikoni):span)) content]]))

(defn oletus-pieni
  ([content ikoni]
   [:button (stylefy/use-style (merge nappi pieni))
    (or (not ikoni) [:i.material-icons (stylefy/use-sub-style nappi :i) ikoni])
    [:span (stylefy/use-sub-style nappi (or (not ikoni):span)) content]]))

(defn toissijainen
  ([content ikoni]
   [:button (stylefy/use-style (merge nappi tumma))
    (or (not ikoni) [:i.material-icons (stylefy/use-sub-style nappi :i) ikoni])
    [:span (stylefy/use-sub-style nappi (or (not ikoni):span)) content]]))

(defn toissijainen-pieni
  ([content ikoni]
   [:button (stylefy/use-style (merge nappi tumma pieni))
    (or (not ikoni) [:i.material-icons (stylefy/use-sub-style nappi :i) ikoni])
    [:span (stylefy/use-sub-style nappi (or (not ikoni):span)) content]]))

(defn kevyt
  ([content ikoni]
   [:button (stylefy/use-style (merge nappi kehys))
    (or (not ikoni) [:i.material-icons (stylefy/use-sub-style nappi :i) ikoni])
    [:span (stylefy/use-sub-style nappi (or (not ikoni):span)) content]]))

(defn kevyt-pieni
  ([content ikoni]
   [:button (stylefy/use-style (merge nappi kehys pieni))
    (or (not ikoni) [:i.material-icons (stylefy/use-sub-style nappi :i) ikoni])
    [:span (stylefy/use-sub-style nappi (or (not ikoni):span)) content]]))

(defn kartta-ikoni
  ([ikoni]
   [:button (stylefy/use-style kartta)
    [:i.material-icons (stylefy/use-sub-style kartta :i) ikoni]]))

(defn kartta-ikoni-tupla
  ([ikoni-eka ikoni-toka]
   [:div (stylefy/use-style tupla)
    [:button (stylefy/use-style (merge kartta yla))
     [:i.material-icons (stylefy/use-sub-style kartta :i) ikoni-eka]]
    [:button (stylefy/use-style (merge kartta ala))
     [:i.material-icons (stylefy/use-sub-style kartta :i) ikoni-toka]]]))
