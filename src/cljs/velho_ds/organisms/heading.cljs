(ns velho-ds.organisms.heading
  (:require [stylefy.core :refer [use-style]]))

(defn main [content]
  [:header.header-style
   [:h2.heading-style content]])