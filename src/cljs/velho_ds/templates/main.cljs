(ns velho-ds.templates.main
  (:require [stylefy.core :refer [use-style]]
            [velho-ds.organisms.heading :as heading]
            [velho-ds.organisms.navigation :as navigation]))

(defn default [content]
  [:div.grid-layout  
   [:div.page-logo
    [:h2.logo-heading "Velho DS"]]
   [:div.page-header   (heading/main (:heading content))]
   [:div.page-navigation  #_(navigation/nested-navigation (:navigation content))]
   [:div.page-content [:section (:main-content content)]]])