(ns velho-ds.pages.main
  (:require [velho-ds.templates.main :as tpl]
            [velho-ds.atoms.napit :as napit]
            [velho-ds.atoms.kentat :as kentat]))

(defn page-content []
  [:div
   [:p "This is the content of the Reagent Design System"]
   [:h2 "Napit"]
   [:h3 "Ei ikonia"]
   [napit/oletus "Päivitä"]
   [napit/toissijainen "Päivitä"]
   [napit/kevyt "Päivitä"]
   [:h3 "Ikonilla"]
   [napit/oletus "Päivitä" "autorenew"]
   [napit/toissijainen "Päivitä" "autorenew"]
   [napit/kevyt "Päivitä" "autorenew"]
   [:h3 "Pieni"]
   [napit/oletus-pieni "Päivitä" "autorenew"]
   [napit/toissijainen-pieni "Päivitä" "autorenew"]
   [napit/kevyt-pieni "Päivitä" "autorenew"]
   [kentat/teksti "Teksti"]
   [kentat/tekstikentta "Tekstikentta"]
   (let [valinnat [{:id 1 :arvo "eka"}
                   {:id 2 :arvo "toka"}]]
     [kentat/pudotusvalikko {:otsikko "Teksti"
                             :valinta-fn #(js/alert (str "Valittu arvo: " %))
                             :valinnat valinnat}])])

(defn page [nav]
  (tpl/default {:navigation nav
                :heading "Reagent Design System"
                :main-content (page-content)}))