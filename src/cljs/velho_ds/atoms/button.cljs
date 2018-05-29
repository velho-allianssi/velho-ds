(ns velho-ds.atoms.button
  (:require [velho-ds.atoms.style.button :as style]
            [stylefy.core :as stylefy]))

(defn default
  ([content icon]
   [:button (stylefy/use-style style/button)
    (or (not icon) [:i.material-icons (stylefy/use-sub-style style/button :i) icon])
    [:span (stylefy/use-sub-style style/button (or (not icon) :span)) content]]))

(defn default-small
  ([content icon]
   [:button (stylefy/use-style (merge style/button style/small))
    (or (not icon) [:i.material-icons (stylefy/use-sub-style style/button :i) icon])
    [:span (stylefy/use-sub-style style/button (or (not icon) :span)) content]]))

(defn secondary
  ([content icon]
   [:button (stylefy/use-style (merge style/button style/dark))
    (or (not icon) [:i.material-icons (stylefy/use-sub-style style/button :i) icon])
    [:span (stylefy/use-sub-style style/button (or (not icon) :span)) content]]))

(defn secondary-small
  ([content icon]
   [:button (stylefy/use-style (merge style/button style/dark style/small))
    (or (not icon) [:i.material-icons (stylefy/use-sub-style style/button :i) icon])
    [:span (stylefy/use-sub-style style/button (or (not icon) :span)) content]]))

(defn light
  ([content icon]
   [:button (stylefy/use-style (merge style/button style/outline))
    (or (not icon) [:i.material-icons (stylefy/use-sub-style style/button :i) icon])
    [:span (stylefy/use-sub-style style/button (or (not icon) :span)) content]]))

(defn light-small
  ([content icon]
   [:button (stylefy/use-style (merge style/button style/outline style/small))
    (or (not icon) [:i.material-icons (stylefy/use-sub-style style/button :i) icon])
    [:span (stylefy/use-sub-style style/button (or (not icon) :span)) content]]))

(defn plain-icon
  ([icon]
   [:button (stylefy/use-style style/plain-icon)
    [:i.material-icons (stylefy/use-sub-style style/plain-icon :i) icon]]))

(defn plain-icon-double
  ([icon-first icon-second]
   [:div (stylefy/use-style style/double)
    [:button (stylefy/use-style (merge style/plain-icon style/upper))
     [:i.material-icons (stylefy/use-sub-style style/plain-icon :i) icon-first]]
    [:button (stylefy/use-style (merge style/plain-icon style/lower))
     [:i.material-icons (stylefy/use-sub-style style/plain-icon :i) icon-second]]]))