(ns velho-ds.pages.main
  (:require [velho-ds.templates.main :as tpl]
            [velho-ds.atoms.buttons :as buttons]
            [velho-ds.atoms.valikot :as valikot]))

(defn helpperi [a]
  (js/alert a))

(def data {:valinnat [ {:id 1 :arvo "testi" }
                      {:id 2 :arvo "testi2"}]
           :on-change helpperi})

(defn page-content []
  [:div
   [:p "This is the content of the Reagent Design System"]
   (buttons/button-primary "Heikin nappi")
   (buttons/button-danger "Nyt on vaarallista")
   (valikot/alasvetovalikko data)])

(defn page [nav]
  (tpl/default {:navigation nav
                :heading "Velho Design System"
                :main-content (page-content)}))