(ns velho-ds.design-system
  (:require [stylefy.core :as stylefy]))

(def root-element (atom nil))
(defn init-ds! [dom-element]
  (reset! root-element dom-element)
  (stylefy/init {:use-caching? false
                 :multi-instance {:base-node @root-element}}))