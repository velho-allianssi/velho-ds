(ns velho-ds.atoms.button
  (:require [velho-ds.atoms.style.button :as style]
            [stylefy.core :as stylefy]))

(defn default [{:keys [content icon styles]}]
  (assert (or content icon))
   [:button (stylefy/use-style (merge style/button styles))
    (if icon [:i.material-icons (stylefy/use-sub-style (merge style/button styles) :i) icon])
    (if content [:span (stylefy/use-sub-style (merge style/button styles) :span) content])])

(defn primary [{:keys [content icon styles]}]
  (assert (or content icon))
  [default {:content content 
            :icon icon 
            :styles (merge style/primary styles)}])

(defn secondary [{:keys [content icon styles]}]
  (assert (or content icon))
  [default {:content content 
            :icon icon 
            :styles (merge style/secondary styles)}])

(defn outline [{:keys [content icon styles]}]
  (assert (or content icon))
  [default {:content content 
            :icon icon 
            :styles (merge style/outline styles)}])

(defn default-small [{:keys [content icon styles]}]
  (assert (or content icon))
   [:button (stylefy/use-style (merge style/button style/small styles))
    (if icon [:i.material-icons (stylefy/use-sub-style (merge style/button style/small styles) :i) icon])
    (if content [:span (stylefy/use-sub-style (merge style/button style/small styles) :span) content])])

(defn primary-small [{:keys [content icon styles]}]
  (assert (or content icon))
  [default-small {:content content 
            :icon icon 
            :styles (merge style/primary styles)}])

(defn secondary-small [{:keys [content icon styles]}]
  (assert (or content icon))
  [default-small {:content content 
            :icon icon 
            :styles (merge style/secondary styles)}])

(defn outline-small [{:keys [content icon styles]}]
  (assert (or content icon))
  [default-small {:content content 
            :icon icon 
            :styles (merge style/outline-small styles)}])

;;(defn plain-icon
;;  ([icon]
;;   [:button (stylefy/use-style style/plain-icon)
;;    [:i.material-icons (stylefy/use-sub-style style/plain-icon :i) icon]]))
;;
;;(defn plain-icon-double
;;  ([icon-first icon-second]
;;   [:div (stylefy/use-style style/double)
;;    [:button (stylefy/use-style (merge style/plain-icon style/upper))
;;     [:i.material-icons (stylefy/use-sub-style style/plain-icon :i) icon-first]]
;;    [:button (stylefy/use-style (merge style/plain-icon style/lower))
;;     [:i.material-icons (stylefy/use-sub-style style/plain-icon :i) icon-second]]]))