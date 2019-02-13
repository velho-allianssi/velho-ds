(ns velho-ds.tools.ds
  (:require [stylefy.core :as stylefy]))

(defn elem
  "Create element. Uses stylefy to add custom styles to the element."
  [component attributes & args]
  (let [[attributes styles] ((juxt #(dissoc % :style) :style) attributes)]
    (into [component (stylefy/use-style styles attributes)] args)))

(defn create-component
  "Create velho-ds component by adding default attributes and styles to the element."
  [component default-attributes args]
  (let [attributes (when (map? (first args)) (first args))
        args (if attributes (rest args) args)
        [attributes styles] ((juxt #(dissoc % :style) :style) attributes)]
    (apply elem component (merge default-attributes attributes {:style (merge (:style default-attributes) styles)}) args)))

(defn add-attr
  "Add attributes to component. This can be used i.e. to add new custom styles or to override defaults."
  [component attributes]
  (assert (vector? component) "Invalid component")
  (assert (map? attributes) "Invalid attributes")
  (let [existing-attributes (when (map? (second component)) (second component))
        merged-attributes (merge attributes existing-attributes)]
    (into [(first component) merged-attributes] (subvec component (if existing-attributes 2 1)))))
