(ns velho-ds.pages.main
  (:require-macros [velho-ds.macros :refer [$->]])
  (:require [reagent.session :as session]
            [velho-ds.templates.main :as tpl]
            [velho-ds.atoms.button :as buttons]
            [velho-ds.molecules.field :as fields]
            [velho-ds.organisms.grid :as grid]
            [velho-ds.atoms.loader :as loaders]
            [velho-ds.molecules.notification :as notifications]
            [velho-ds.molecules.tab :as tabs]
            [velho-ds.atoms.table :as tables]
            [reagent.core :as r]))

(defmulti page-contents identity)

(defmethod page-contents :index []
  [:div
   [:h2 "Fields"]
   (let [options ["John" "Sandra" "Matt" "Will" "Kate" "Alex" "Keith" "Melinda"]]
     [fields/dropdown-multiple {:heading "Text"
                                :selected-fn #(println (str "Selected values: " %))
                                :options options
                                :no-selection-text "- No selection -"}])
   [:h3 "Keyvalue"]
   [fields/keyvalue {:label "Title"
                     :content "Arvo"}]

   [:h3 "Input"]
   [fields/input-field {:label "Name"
                        :content "Pekka"
                        :on-change-fn #(println %)}]

   [fields/multiline-field "Textfield"]

   (let [values [{:id 1 :value "First"}
                 {:id 2 :value "Second"}]]
     [fields/dropdown-menu {:heading "Text"
                            :selected-fn #(js/alert (str "Selected value: " %))
                            :options values
                            :no-selection-text "- No selection -"}])
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

(defmethod page-contents :fonts []
  [:div
   [:h1 "Content header"]
   [:p "Page content explained here with MD-file."]
   [:h2 "Typography"]
   [:h1 "Header H1"]
   [:h2 "Header H2"]
   [:h3 "Header H3"]
   [:h4 "Header H4"]
   [:p "Paragraph text looks like this."]
   [:small "Small text is much smaller than a paragraph."]])


(defmethod page-contents :buttons []
  [:div
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
   [:div {:style {:border "1px solid lightgray"
                  :margin "1rem"}}
    ($-> [buttons/default {:content "Update"
                           :icon "autorenew"
                           :on-click-fn #(println "Default button with icon and text clicked")}])]

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
                   :on-click-fn #(println "Default tab clicked")}]]

   [:h2 "Fields"]

   [fields/keyvalue {:label "Title"
                     :content "Value"}]

   [fields/input-field {:label "Input with label and icon"
                        :placeholder "Placeholder"
                        :icon "search"
                        :on-change-fn #(println %)
                        :on-blur-fn #(println %)
                        :icon-click-fn #(println (str "Icon Clicked"))}]

   [fields/input-field {:placeholder "Placeholder"
                        :icon "search"
                        :icon-click-fn #(println (str "Icon Clicked"))}]

   [fields/input-field {:placeholder "Placeholder"}]

   [fields/input-field {:label "Validation example"
                        :content "Invalid value"
                        :error-messages ["Value has to be valid!"]}]

   [fields/multiline-field "Textfield"]

   (let [values [{:id 1 :value "First"}
                 {:id 2 :value "Second"}]]
     [fields/dropdown-menu {:label "Dropdown"
                            :selected-fn #(js/alert (str "Selected value: " %))
                            :options values
                            :no-selection-text "- No selection -"}])

   (let [options ["John" "Sandra" "Matt" "Will" "Kate" "Alex" "Keith" "Melinda"]]
     [fields/dropdown-multiple {:label "Multiselect dropdown"
                                :selected-fn #(println (str "Selected values: " %))
                                :options options
                                :no-selection-text "- No selection -"
                                :preselected-values ["John"]}])

   [:h2 "Loaders"]
   [:div.code-example ($-> [loaders/progress-bar])]
   [:div.code-example ($-> [loaders/progress-bar {:percentage "50%"}])]
   [:div.code-example ($-> [loaders/pulse])]

   [:h2 "Notification"]
   [notifications/default {:close-fn #(println "Default notification icon clicked")} [:span "Default notification"]]
   [notifications/error {:close-fn #(println "Error notification icon clicked")} [:span "Error notification"]]
   [notifications/warning {:close-fn #(println "Warning notification icon clicked")} [:span "Warning notification"] [:span {:style {:text-decoration "underline"}
                                                                                                                            :on-click #(js/alert "Alert")} "Warning notification 2"]]
   [notifications/success {:close-fn #(println "Success notification icon clicked")} [:p {:style {:margin "0"}} "Success notification"]]

   [:h2 "Tables"]
   [tables/default {:headers [{:label "Name"
                               :key-path [:name]}
                              {:label "Tasks"
                               :key-path [:tasks 0]}
                              {:label "Organization"
                               :key-path [:organization 0 :org]}
                              {:label "State"
                               :key-path [:state]}
                              {:label "Progress"
                               :key-path [:element]}]
                    :content [{:id 1
                               :name "Example 1"
                               :tasks ["Being amazing"]
                               :organization [{:org "Amazing Organization"}]
                               :state "On going"
                               :element [loaders/progress-bar {:percentage "75%"}]}
                              {:id 2
                               :name "Example 2"
                               :tasks ["Cleaning"]
                               :organization [{:org "Clean Organization"}]
                               :state "Done"
                               :element [loaders/progress-bar {:percentage "100%"}]}
                              {:id 3
                               :name "Example 3"
                               :tasks ["Foo"]
                               :organization [{:org "Bar Organization"}]
                               :state "Starting"
                               :element [loaders/progress-bar]}]
                    :footers [{:label "Name"
                               :value "Total"}
                              {:label "Tasks"
                               :value nil}
                              {:label "Organization"
                               :value nil}
                              {:label "Progress"
                               :value nil}
                              {:value [loaders/progress-bar {:percentage "58%"}]}]}]

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
                :heading "Velho Design System"
                :main-content (page-contents (:current-page (session/get :route)))}))