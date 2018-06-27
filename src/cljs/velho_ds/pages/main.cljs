(ns velho-ds.pages.main
  (:require [velho-ds.templates.main :as tpl]
            [velho-ds.atoms.button :as buttons]
            [velho-ds.molecules.field :as fields]))

(defn validation-a [input-text]
  (let[validaatio-viesti "error message!"]
    (if(= input-text "a")
      validaatio-viesti
      nil)))

(defn is-number? [my-text]
  (let [pat (re-pattern "\\d+")]
    (re-find pat my-text)))

(defn validation-number [input-text]
  (let[invalid-message "error message"]
    (if(nil?(is-number? input-text))
      nil
      invalid-message)))

(defn page-content []
  [:div
   [:p "This is the content of the Reagent Design System"]
   [:h2 "Typography"]
   [:p "Text P"]
   [:small "Text Small"]
   [:h1 "Header H1"]
   [:h2 "Header H2"]
   [:h3 "Header H3"]
   [:h4 "Header H4"]
   
   [:h2 "Buttons"]
   
   [:h3 "Default"]

   [buttons/default {:content "Update"
                     :icon "autorenew"
                     :on-click-fn #(println "Default button with icon and text clicked")}]
   [buttons/default {:content "Update"
                     :on-click-fn #(println "Default button with text clicked")}]
   [buttons/default {:icon "autorenew"
                     :on-click-fn #(println "Default button with icon clicked")}]
   
   [buttons/primary {:content "Update"
                     :icon "autorenew"
                     :on-click-fn #(println "Primary button with icon and text clicked")}]
   [buttons/primary {:content "Update"
                     :on-click-fn #(println "Primary button with text clicked")}]
   [buttons/primary {:icon "autorenew"
                     :on-click-fn #(println "Primary button with icon clicked")}]
   
   [buttons/secondary {:content "Update"
                       :icon "autorenew"
                       :on-click-fn #(println "Secondary button with icon and text clicked")}]
   [buttons/secondary {:content "Update"
                       :on-click-fn #(println "Secondary button with text clicked")}]
   [buttons/secondary {:icon "autorenew"
                       :on-click-fn #(println "Secondary button with icon clicked")}]
   
   [buttons/outline {:content "Update"
                     :icon "autorenew"
                     :on-click-fn #(println "Outline button with icon and text clicked")}]
   [buttons/outline {:content "Update"
                     :on-click-fn #(println "Outline button with text clicked")}]
   [buttons/outline {:icon "autorenew"
                     :on-click-fn #(println "Outline button with icon clicked")}]

   [:h3 "Small"]
   [buttons/default-small {:content "Update"
                           :icon "autorenew"
                           :on-click-fn #(println "Small default button with icon and text clicked")}]
   [buttons/default-small {:content "Update"
                           :on-click-fn #(println "Small default button with text clicked")}]
   [buttons/default-small {:icon "autorenew"
                           :on-click-fn #(println "Small default button with icon clicked")}]

   [buttons/primary-small {:content "Update"
                           :icon "autorenew"
                           :on-click-fn #(println "Small primary button with icon and text clicked")}]
   [buttons/primary-small {:content "Update"
                           :on-click-fn #(println "Small primary button with text clicked")}]
   [buttons/primary-small {:icon "autorenew"
                           :on-click-fn #(println "Small primary button with icon clicked")}]
   
   [buttons/secondary-small {:content "Update"
                             :icon "autorenew"
                             :on-click-fn #(println "Small secondary button with icon and text clicked")}]
   [buttons/secondary-small {:content "Update"
                             :on-click-fn #(println "Small secondary button with text clicked")}]
   [buttons/secondary-small {:icon "autorenew"
                             :on-click-fn #(println "Small secondary button with icon clicked")}]
   
   [buttons/outline-small {:content "Update"
                           :icon "autorenew"
                           :on-click-fn #(println "Small outline button with icon and text clicked")}]
   [buttons/outline-small {:content "Update"
                           :on-click-fn #(println "Small outline button with text clicked")}]
   [buttons/outline-small {:icon "autorenew"
                           :on-click-fn #(println "Small outline button with icon clicked")}]

   [:h2 "Fields"]

   [:h3 "Validaatio"]
   [fields/input-field {:label "input with colour validation test"
                                        :content "if 'a' then error"
                                        :validation-fn validation-a}]

   [fields/input-field {:label "input with colour validation test"
                         :content "if numbers then error"
                         :validation-fn validation-number}]

   [:h3 "Keyvalue"]
   [fields/keyvalue {:label "Otsikko" 
                     :content "Arvo"}]
   
   [:h3 "Input"]

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