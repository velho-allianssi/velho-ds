(ns velho-ds.organisms.heading
  (:require [stylefy.core :refer [use-style]]))

(def header-style {:display "grid"
                   :grid-template-columns "1fr"
                   :grid-template-rows "1fr"
                   :color "#FEFEFE"
                   :align-self "center"})

(def heading-style {:justify-self "start"
                    :align-self "center"
                    :padding "0 5px"})

(defn main [content]
  [:header (use-style header-style)
   [:h1 (use-style heading-style) content]])