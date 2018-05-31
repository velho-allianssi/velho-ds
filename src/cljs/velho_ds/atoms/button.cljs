(ns velho-ds.atoms.button
  (:require [velho-ds.atoms.style.button :as style]
            [stylefy.core :as stylefy]))

(defn default [{:keys [content icon styles on-click-fn]}]
  (assert (or content icon))
   [:button (stylefy/use-style (merge style/button styles) {:on-click on-click-fn})
    (if icon [:i.material-icons (stylefy/use-sub-style (merge style/button styles) :i) icon])
    (if content [:span (stylefy/use-sub-style (merge style/button styles) :span) content])])

(defn primary [{:keys [content icon styles on-click-fn]}]
  (assert (or content icon))
  [default {:content content 
            :icon icon 
            :styles (merge style/primary styles)
            :on-click-fn on-click-fn}])

(defn secondary [{:keys [content icon styles on-click-fn]}]
  (assert (or content icon))
  [default {:content content 
            :icon icon 
            :styles (merge style/secondary styles)
            :on-click-fn on-click-fn}])

(defn outline [{:keys [content icon styles on-click-fn]}]
  (assert (or content icon))
  [default {:content content 
            :icon icon 
            :styles (merge style/outline styles)
            :on-click-fn on-click-fn}])

(defn default-small [{:keys [content icon styles on-click-fn]}]
  (assert (or content icon))
   [:button (stylefy/use-style (merge style/button style/small styles) {:on-click on-click-fn})
    (if icon [:i.material-icons (stylefy/use-sub-style (merge style/button style/small styles) :i) icon])
    (if content [:span (stylefy/use-sub-style (merge style/button style/small styles) :span) content])])

(defn primary-small [{:keys [content icon styles on-click-fn]}]
  (assert (or content icon))
  [default-small {:content content 
                  :icon icon
                  :styles (merge style/primary styles)
                  :on-click-fn on-click-fn}])

(defn secondary-small [{:keys [content icon styles on-click-fn]}]
  (assert (or content icon))
  [default-small {:content content 
                  :icon icon
                  :styles (merge style/secondary styles)
                  :on-click-fn on-click-fn}])

(defn outline-small [{:keys [content icon styles on-click-fn]}]
  (assert (or content icon))
  [default-small {:content content 
                  :icon icon
                  :styles (merge style/outline-small styles)
                  :on-click-fn on-click-fn}])