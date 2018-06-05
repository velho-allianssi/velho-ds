(ns velho-ds.atoms.button
  (:require [velho-ds.atoms.style.button :as style]
            [stylefy.core :as stylefy]))

(defn default [{:keys [content icon styles on-click-fn]}]
  (assert (or content icon))
   [:button (stylefy/use-style (merge style/button styles) {:on-click on-click-fn})
    (if icon [:i.material-icons (stylefy/use-sub-style (merge style/button styles) :i) icon])
    (if content [:span (stylefy/use-sub-style (merge style/button styles) :span) content])])

(defn primary [{:keys [content icon] :as btn-args}]
  (assert (or content icon))
  [default (merge {:styles style/primary} btn-args)])

(defn secondary [{:keys [content icon] :as btn-args}]
  (assert (or content icon))
  [default (merge {:styles style/secondary} btn-args)])

(defn outline [{:keys [content icon] :as btn-args}]
  (assert (or content icon))
  [default (merge {:styles style/outline} btn-args)])

(defn default-small [{:keys [content icon] :as btn-args}]
  (assert (or content icon))
  [default (merge {:styles style/small} btn-args)])

(defn primary-small [{:keys [content icon] :as btn-args}]
  (assert (or content icon))
  [default (merge {:styles (merge style/primary style/small)} btn-args)])

(defn secondary-small [{:keys [content icon] :as btn-args}]
  (assert (or content icon))
  [default (merge {:styles (merge style/secondary style/small)} btn-args)])

(defn outline-small [{:keys [content icon] :as btn-args}]
  (assert (or content icon))
  [default (merge {:styles style/outline-small} btn-args)])