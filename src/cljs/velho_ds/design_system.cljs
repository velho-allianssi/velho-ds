(ns velho-ds.design-system
  (:require [stylefy.core :as stylefy]))

(defn init-ds! []
  (stylefy/init {:use-caching? false}))