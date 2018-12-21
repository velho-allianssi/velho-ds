(ns velho-ds.atoms.input
  (:require [stylefy.core :refer [use-style]]
            [stylefy.core :as stylefy]
            [velho-ds.molecules.style.field :as style]
            [velho-ds.tokens.font :as font]
            [velho-ds.tokens.font-size :as font-size]))

(def label-styles
  {:line-height "1"
   :font-size font-size/font-size-small
   :font-family font/font-family-text
   :color "inherit"})

(defn atomiksi
  ([component attributes & args]
   (let [[attributes styles] ((juxt #(dissoc % :style) :style) attributes)]
     (into [component (stylefy/use-style styles attributes)] args))))

(defn tee-ds-komponentti [component default-attributes args]
   (let [attributes (when (map? (first args)) (first args))
         args (if attributes (rest args) args)
         [attributes styles] ((juxt #(dissoc % :style) :style) attributes)]
     (apply atomiksi component (merge default-attributes attributes {:style (merge (:style default-attributes) styles)}) args)))

(defn ds-div [& args]
  (tee-ds-komponentti :div nil args))

(defn ds-input [& args]
  (tee-ds-komponentti :input {:style style/input-field} args))

(defn ds-label [& args]
  (tee-ds-komponentti :label {:style label-styles} args))

(defn ds-icon [& args]
  (tee-ds-komponentti :i {:class "material-icons"} args))

#_(defn- append-styles [component styles]
    (assert (vector? component) "Invalid component")
    (assert (map? styles) "Invalid styles")
    (let [existing-attributes (when (map? (second component)) (second component))
          existing-styles (:style existing-attributes)
          merged-styles (merge existing-styles styles)
          merged-attributes (stylefy/use-style merged-styles (dissoc existing-attributes :style))]
      (prn (into [(first component) merged-attributes] (subvec component (if existing-attributes 2 1))))
      (into [(first component) merged-attributes] (subvec component (if existing-attributes 2 1)))))

#_(defn- append-styles [component styles]
    (assert (vector? component) "Invalid component")
    (assert (map? styles) "Invalid styles")
    (let [existing-attributes (when (map? (second component)) (second component))
          existing-styles (:style existing-attributes)
          merged-styles (merge existing-styles styles)
          merged-attributes (assoc existing-attributes :style merged-styles)]
      ;merged-attributes (stylefy/use-style merged-styles (dissoc existing-attributes :style))]
      (into [(first component) merged-attributes] (subvec component (if existing-attributes 2 1)))))

(defn- add-attr [component attributes]
  (assert (vector? component) "Invalid component")
  (assert (map? attributes) "Invalid attributes")
  (let [existing-attributes (when (map? (second component)) (second component))
        merged-attributes (merge attributes existing-attributes)]
    (into [(first component) merged-attributes] (subvec component (if existing-attributes 2 1)))))

(defn input-with-icon [input icon]
  [ds-div {:style {:position "relative"}}
   (add-attr input {:style {:padding-right "2rem"}})
   (add-attr icon {:style (style/input-icon false)})])

(defn input-with-icons [input & icons]
  [ds-div {:style {:position "relative"}}
   (add-attr input {:style {:padding-right (str (* 2 (count icons)) "rem")}})
   [ds-div {:style (style/input-icon false)} (map-indexed #(with-meta %2 {:key %1}) icons)]])

#_(defn labeled-input [label input & args]
    (into [(atomiksi :div {:style {:position "relative"}}
                     label
                     (append-styles input {:color "green" :padding-right "5rem"}))] args))

#_(defmacro labeled-input [label input & args]
    (into [:div (stylefy/use-style {:position "relative"})
           label
           (append-styles input {:color "green" :padding-right "5rem"})] args))
