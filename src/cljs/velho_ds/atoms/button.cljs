(ns velho-ds.atoms.button
  (:require [velho-ds.atoms.style.button :as style]
            [velho-ds.atoms.icon :as icons]
            [velho-ds.tools.style :as tools-style]
            [stylefy.core :as stylefy]))

(defn default [{:keys [content icon styles on-click-fn disabled?]}]
  (assert (or content icon))
  [:button (stylefy/use-style
             (if disabled?
               (merge styles style/button-disabled)
               (merge style/button styles))
             {:on-click (when (not disabled?) on-click-fn)
              :disabled disabled?})
   (if disabled?
     [icons/icon {:name "block"
                  :styles style/button-icon}]
     (when icon
       [icons/icon {:name icon
                    :styles style/button-icon}]))
   (when content
     [:span (stylefy/use-sub-style (merge style/button styles) :span) content])])

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

(defn icon-link [{:keys [icon label active on-click-fn]}]
  [:a (stylefy/use-style (if active
                           style/icon-link-active
                           style/icon-link) {:on-click on-click-fn})
   [icons/icon {:name icon
                :styles style/icon-link-icon}]
   [:span (stylefy/use-style style/icon-link-value) label]])
