(ns velho-ds.pages.main
  (:require-macros [velho-ds.macros :refer [$->]])
  (:require [velho-ds.templates.main :as tpl]
            [velho-ds.atoms.button :as buttons]
            [velho-ds.molecules.field :as fields]
            [velho-ds.organisms.grid :as grid]
            [velho-ds.atoms.loader :as loaders]
            [velho-ds.molecules.notification :as notifications]
            [velho-ds.molecules.tab :as tabs]))

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
   [:h1 "Content header"]
   [:p "Page content explained here with MD-file."]
   [:h2 "Typography"]
   [:h1 "Header H1"]
   [:h2 "Header H2"]
   [:h3 "Header H3"]
   [:h4 "Header H4"]
   [:p "Paragraph text looks like this."]
   [:small "Small text is much smaller than a paragraph."]

   [:h2 "Buttons"]
   [:h3 "Default size"]

   [:div.code-example
    ($-> [buttons/default {:content "Default"
                           :icon "autorenew"
                           :on-click-fn #(println "Default button with icon and text clicked")}])]

   [buttons/default {:content "Default"
                     :icon "autorenew"
                     :on-click-fn #(println "Default button with icon and text clicked")}]
   [buttons/default {:content "Default"
                     :on-click-fn #(println "Default button with text clicked")}]

   [buttons/default {:icon "autorenew"
                     :on-click-fn #(println "Default button with icon clicked")}]

   [buttons/primary {:content "Primary"
                     :icon "autorenew"
                     :on-click-fn #(println "Primary button with icon and text clicked")}]
   [buttons/primary {:content "Primary"
                     :on-click-fn #(println "Primary button with text clicked")}]
   [buttons/primary {:icon "autorenew"
                     :on-click-fn #(println "Primary button with icon clicked")}]

   [buttons/secondary {:content "Secondary"
                       :icon "autorenew"
                       :on-click-fn #(println "Secondary button with icon and text clicked")}]
   [buttons/secondary {:content "Secondary"
                       :on-click-fn #(println "Secondary button with text clicked")}]
   [buttons/secondary {:icon "autorenew"
                       :on-click-fn #(println "Secondary button with icon clicked")}]

   [buttons/outline {:content "Outline"
                     :icon "autorenew"
                     :on-click-fn #(println "Outline button with icon and text clicked")}]
   [buttons/outline {:content "Outline"
                     :on-click-fn #(println "Outline button with text clicked")}]
   [buttons/outline {:icon "autorenew"
                     :on-click-fn #(println "Outline button with icon clicked")}]

   [:h3 "Small size"]
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

   [:h2 "Tabs"]

   [tabs/tabset {:selected-id 1
                 :style {:margin "0"}}
    [tabs/default {:tab-id 1
                   :icon "info"
                   :label "Info"
                   :on-click-fn #(println "Default tab clicked")}]
    [tabs/default {:tab-id 2
                   :icon "group_work"
                   :label "Relations"
                   :on-click-fn #(println "Default tab clicked")} ]]

   [:h2 "Fields"]
   (let [options ["John" "Sandra" "Matt" "Will" "Kate" "Alex" "Keith" "Melinda"]]
     [fields/dropdown-multiple {:heading "Text"
                                :selected-fn #(println (str "Selected values: " %))
                                :options options
                                :no-selection-text "- No selection -"}])

   [:h3 "Validaatio"]
   [fields/input-field {:label "Validation (validation-a)"
                        :content ""
                        :validation-fn validation-a}]

   [fields/input-field {:label "Validation (validation-number)"
                         :content ""
                         :validation-fn validation-number}]

   [:h3 "Keyvalue"]
   [fields/keyvalue {:label "Title"
                     :content "Value"}]

   [:h3 "Input"]

   [fields/multiline-field "Textfield"]

   (let [values [{:id 1 :value "First"}
                 {:id 2 :value "Second"}]]
     [fields/dropdown-menu {:heading "Text"
                            :selected-fn #(js/alert (str "Selected value: " %))
                            :options values
                            :no-selection-text "- No selection -"}])
   [:h2 "Loaders"]
   [:div.code-example ($-> [loaders/progress-bar])]
   [:div.code-example ($-> [loaders/progress-bar {:percentage "50%"}])]
   [:div.code-example ($-> [loaders/pulse])]

   [:h2 "Notification"]
   [notifications/default {:close-fn #(println "Default notification icon clicked")} [:span "Default notification"]]
   [notifications/error {:close-fn #(println "Error notification icon clicked")} [:span "Error notification"]]
   [notifications/warning {:close-fn #(println "Warning notification icon clicked")} [:span "Warning notification"] [:span {:style {:text-decoration "underline"}
                                                                                                                           :on-click #(js/alert "Alert") } "Warning notification 2"]]
   [notifications/success {:close-fn #(println "Success notification icon clicked")} [:p {:style {:margin "0"}} "Success notification"]]

   [:h2 "Grid"]
   [grid/grid-wrap {:rows 3
                    :cols 3}
    [grid/grid-cell {:col-start 1
                     :col-end 4
                     :style {:background-color "whitesmoke"
                             :text-align "center"
                             :border "1px solid silver"}} [:p "test"]]
    [:div {:style {:background-color "whitesmoke"
                   :text-align "center"
                   :border "1px solid silver"}} [:p "2"]]
    [:div {:style {:background-color "whitesmoke"
                   :text-align "center"
                   :border "1px solid silver"}} [:p "3"]]
    [:div {:style {:background-color "whitesmoke"
                   :text-align "center"
                   :border "1px solid silver"}} [:p "4"]]
    [:div {:style {:background-color "whitesmoke"
                   :text-align "center"
                   :border "1px solid silver"}} [:p "5"]]
    [:div {:style {:background-color "whitesmoke"
                   :text-align "center"
                   :border "1px solid silver"}} [:p "6"]]
    [:div {:style {:background-color "whitesmoke"
                   :text-align "center"
                   :border "1px solid silver"}} [:p "7"]]]])

(defn page [nav]
  (tpl/default {:navigation nav
                :heading "Page Name"
                :main-content (page-content)}))