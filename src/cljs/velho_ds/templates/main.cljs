(ns velho-ds.templates.main
  (:require [velho-ds.organisms.heading :as heading]))

(defn default [content]
  [:div.grid-layout
   [:div.page-logo
    [:h2.logo-heading "Velho DS"]]
   [:div.page-header (heading/main (:heading content))]
   [:div.page-navigation (:navigation content)]
   [:div.page-content [:section (:main-content content)]]])