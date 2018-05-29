(ns velho-ds.pages.main
  (:require [velho-ds.templates.main :as tpl]
            [velho-ds.atoms.button :as buttons]
            [velho-ds.atoms.field :as fields]))

(defn page-content []
  [:div
   [:p "This is the content of the Reagent Design System"]
   [:h2 "Buttons"]
   [:h3 "No icon"]
   [buttons/default "Update"]
   [buttons/secondary "Update"]
   [buttons/light "Update"]
   [:h3 "With an icon"]
   [buttons/default "Update" "autorenew"]
   [buttons/secondary "Update" "autorenew"]
   [buttons/light "Update" "autorenew"]
   [:h3 "Small"]
   [buttons/default-small "Update" "autorenew"]
   [buttons/secondary-small "Update" "autorenew"]
   [buttons/light-small "Update" "autorenew"]
   [:h3 "Map buttons: Default"]
   [buttons/plain-icon "zoom_out_map"]
   [:h3 "Map buttons: Double"]
   [buttons/plain-icon-double "add" "remove"]
   [fields/input-field "Text"]
   [fields/multiline-field "Textfield"]
   (let [values [{:id 1 :value "First"}
                 {:id 2 :value "Second"}]]
     [fields/dropdown-menu {:heading "Text"
                            :selected-fn #(js/alert (str "Selected value: " %))
                            :options values
                            :no-selection-text "- No selection -"}])])

(defn page [nav]
  (tpl/default {:navigation nav
                :heading "Reagent Design System"
                :main-content (page-content)}))