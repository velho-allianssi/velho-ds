(ns velho-ds.pages.main
  (:require [velho-ds.templates.main :as tpl]
            [velho-ds.atoms.button :as buttons]
            [velho-ds.atoms.field :as fields]))

(defn page-content []
  [:div
   [:p "This is the content of the Reagent Design System"]
   [:h2 "Buttons"]
   
   [:p "Default"]

   [buttons/default {:content "Update"
                     :icon "autorenew"}]
   [buttons/default {:content "Update"}]
   [buttons/default {:icon "autorenew"}]
   
   [buttons/primary {:content "Update"
                     :icon "autorenew"}]
   [buttons/primary {:content "Update"}]
   [buttons/primary {:icon "autorenew"}]
   
   [buttons/secondary {:content "Update"
                       :icon "autorenew"}]
   [buttons/secondary {:content "Update"}]
   [buttons/secondary {:icon "autorenew"}]
   
   [buttons/outline {:content "Update"
                     :icon "autorenew"}]
   [buttons/outline {:content "Update"}]
   [buttons/outline {:icon "autorenew"}]

   [:p "Small"]
   [buttons/default-small {:content "Update"
                           :icon "autorenew"}]
   [buttons/default-small {:content "Update"}]
   [buttons/default-small {:icon "autorenew"}]
   
   [buttons/primary-small {:content "Update"
                           :icon "autorenew"}]
   [buttons/primary-small {:content "Update"}]
   [buttons/primary-small {:icon "autorenew"}]
   
   [buttons/secondary-small {:content "Update"
                             :icon "autorenew"}]
   [buttons/secondary-small {:content "Update"}]
   [buttons/secondary-small {:icon "autorenew"}]
   
   [buttons/outline-small {:content "Update"
                           :icon "autorenew"}]
   [buttons/outline-small {:content "Update"}]
   [buttons/outline-small {:icon "autorenew"}]

   [:h3 "Fields"]
   
   [:p "Input"]
   [fields/input-field {:label "Name"
                        :content "Pekka"}]
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