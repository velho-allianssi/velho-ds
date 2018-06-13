(ns velho-ds.templates.main
  (:require [stylefy.core :refer [use-style]]
            [velho-ds.organisms.heading :as heading]
            [velho-ds.organisms.navigation :as navigation]))

(def grid {:display "grid"
           :grid-template-rows "6rem auto"
           :grid-template-columns "200px auto"
           :width "100vw"
           :height "100vh"
           :background-color "#333333"})

(def top-left {:grid-column-start "1"
               :grid-column-end "2"
               :grid-row-start "1"
               :grid-row-end "2"})

(def top-right {:grid-column-start "2"
                :grid-column-end "3"
                :grid-row-start "1"
                :grid-row-end "2"})

(def bottom-left {:grid-column-start "1"
                  :grid-column-end "2"
                  :grid-row-start "2"
                  :grid-row-end "3"})

(def bottom-right {:grid-column-start "2"
                   :grid-column-end "3"
                   :grid-row-start "2"
                   :grid-row-end "3"
                   :background-color "#FEFEFE"
                   :overflow-y "auto"})

(defn default [content]
  [:div (use-style grid)
   [:div (use-style top-right) (heading/main (:heading content))]
   [:div (use-style bottom-left)(:navigation content)]
   [:div (use-style bottom-right)[:section (:main-content content)]]])