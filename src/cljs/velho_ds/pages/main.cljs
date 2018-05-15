(ns velho-ds.pages.main
  (:require [velho-ds.templates.main :as tpl]
            [velho-ds.atoms.buttons :as buttons]
            [velho-ds.atoms.kentat :as kentat]))

(defn page-content []
  [:div
   [:p "This is the content of the Reagent Design System"]
   [buttons/button-primary "Heikin nappi"]
   [buttons/button-danger "Nyt on vaarallista"]
   [kentat/teksti "Teksti"]
   [kentat/pudotusvalikko {:otsikko "Teksti"
                           :valinta-fn #(js/alert (str "Valittu arvo: " %))
                           :valinnat [{:id 1 :arvo "eka"}
                                      {:id 2 :arvo "toka"}]}]])

(defn page [nav]
  (tpl/default {:navigation nav
                :heading "Reagent Design System"
                :main-content (page-content)}))