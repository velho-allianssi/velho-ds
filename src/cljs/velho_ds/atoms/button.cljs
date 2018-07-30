(ns velho-ds.atoms.button
  (:require [velho-ds.atoms.style.button :as style]
            [velho-ds.tools.style :as tools-style]
            [stylefy.core :as stylefy]))

(defn default [{:keys [content icon styles on-click-fn]}]
  (assert (or content icon))
   [:button (stylefy/use-style (merge style/button styles) {:on-click on-click-fn})
    (if icon [:i.material-icons (stylefy/use-sub-style (merge style/button styles) :i) icon])
    (if content [:span (stylefy/use-sub-style (merge style/button styles) :span) content])])

(defn primary [{:keys [content icon] :as btn-args}]
  (assert (or content icon))
  [default (tools-style/merge-styles btn-args style/primary)])

(defn secondary [{:keys [content icon] :as btn-args}]
  (assert (or content icon))
  [default (tools-style/merge-styles btn-args style/secondary)])

(defn outline [{:keys [content icon] :as btn-args}]
  (assert (or content icon))
  [default (tools-style/merge-styles btn-args style/outline)])

(defn default-small [{:keys [content icon] :as btn-args}]
  (assert (or content icon))
  [default (tools-style/merge-styles btn-args style/small)])

(defn primary-small [{:keys [content icon] :as btn-args}]
  (assert (or content icon))
  [primary (tools-style/merge-styles btn-args style/small)])

(defn secondary-small [{:keys [content icon] :as btn-args}]
  (assert (or content icon))
  [secondary (tools-style/merge-styles btn-args style/small)])

(defn outline-small [{:keys [content icon] :as btn-args}]
  (assert (or content icon))
  [outline (tools-style/merge-styles btn-args style/outline-small)])
