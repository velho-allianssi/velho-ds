(ns velho-ds.templates.main
  (:require [stylefy.core :refer [use-style]]
            [velho-ds.organisms.heading :as heading]
            [velho-ds.organisms.navigation :as navigation]))

(defn default [content]
  [:div.grid-layout (use-style grid)
   [:div.page-logo
    [:h2.logo-heading "Reagent DS"]]
   [:div.page-header (use-style top-right) (heading/main (:heading content))]
   [:div.page-navigation (use-style bottom-left)(navigation/nested-navigation (:navigation content))]
   [:div.page-content(use-style bottom-right)[:section (:main-content content)]]])