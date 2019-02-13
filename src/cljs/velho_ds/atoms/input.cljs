(ns velho-ds.atoms.input
  (:require [stylefy.core :refer [use-style]]
            [velho-ds.molecules.style.field :as style]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tools.ds :as ds]
            [velho-ds.tokens.color :as color]
            [velho-ds.atoms.style.icon :as icon-style]))

(defn input [& args]
  (ds/create-component :input {:style style/input-field} args))

(defn label [& args]
  (ds/create-component :span {:style style/input-field-label-static} args))

(defn icon [& args]
  (ds/create-component :i {:class "material-icons" :style icon-style/clickable} args))

(defn wrap-input-with-icons [input & icons]
  (ds/elem :div {:style {:position "relative"}}
           (ds/add-attr input {:style {:padding-right (str (* 2 (count icons)) "rem")}})
           (ds/elem :div {:style (style/input-icon false)} (map-indexed #(with-meta %2 {:key %1}) icons))))

(defn- label-styles [error-messages state placeholder label]
  (if (first error-messages) (merge style/input-field-label-error
                                    (when (or (:is-focused state) (:input-text state) placeholder) {:top 0
                                                                                                    :font-size font-size/font-size-small}))
                             (merge (if (and label placeholder)
                                      style/input-field-label-static
                                      style/input-field-label)
                                    (when (or (:is-focused state) (:has-value state) (:input-text state) placeholder)
                                      {:top 0
                                       :font-size font-size/font-size-small})
                                    (when (:is-focused state)
                                      {:color color/color-primary}))))

(defn label-wrap [label elem]
  (ds/elem :label {:style style/element}
           label
           elem))
