(ns velho-ds.atoms.napit
  (:require [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.border :as border]
            [velho-ds.tokens.timing :as timing]
            [stylefy.core :as stylefy]))

(def nappi {:cursor "pointer"
            :user-select "none"
            :border "none"
            :font-size "1rem"
            :padding "1rem"
            :margin "0 1rem"
            :box-sizing "border-box"
            :box-shadow "0px 4px 4px rgba(0,0,0,0.2)"
            :color color/color-white
            :background (str "linear-gradient(-45deg," color/color-primary-dark "0%," color/color-primary " 100%)")
            :background-color color/color-primary
            :background-position "left center"
            :background-size "200% auto"
            :height "64px"
            :transition (str "all " timing/duration-slow " ease-in-out")
            ::stylefy/mode {:hover {:background-position "left bottom"
                                    :background-size "200% auto"}
                            :active {:background-position "right center"
                                     :outline "none"
                                     :box-shadow "0px 2px 2px rgba(0,0,0,0.2)"
                                     :transform "scale(0.95, 0.95)"}
                            :focus {:outline "none"}}
            ::stylefy/sub-styles {:i {:font-size "1.5rem"
                                      :vertical-align "-0.4rem"}
                                  :span {:padding-left "1rem"
                                         :padding-right "0.5rem"
                                         :text-decoration "none"
                                         :border "none"}}
            ::stylefy/vendors ["webkit" "moz" "o"]
            ::stylefy/auto-prefix #{:transition}})

(def pieni {:height "32px"
            :padding "0 1rem"})

(def tumma {:background (str "linear-gradient(-45deg," color/color-neutral-5 "0%," color/color-neutral-4 " 100%)")
            :background-color color/color-primary})

(def kehys {:color color/color-primary
            :background color/color-white
            :border "1px solid"
            :border-color color/color-primary
            :background-color color/color-white
            ::stylefy/mode {:hover {:border-color color/color-primary-dark}
                            :active {:background-color color/color-primary
                                     :color color/color-white
                                     :outline "none"
                                     :box-shadow "0px 2px 2px rgba(0,0,0,0.2)"}
                            :focus {:outline "none"}}})


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