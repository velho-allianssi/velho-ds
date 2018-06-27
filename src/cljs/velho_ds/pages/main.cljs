(ns velho-ds.pages.main
  (:require-macros [velho-ds.macros :refer [$->]])
  (:require [velho-ds.templates.main :as tpl]
            [velho-ds.atoms.button :as buttons]
            [velho-ds.molecules.field :as fields]
            [velho-ds.organisms.grid :as grid]
            [velho-ds.atoms.loader :as loaders]
            [velho-ds.molecules.notification :as notifications]
            [velho-ds.molecules.tab :as tabs]))

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
   [:h3 "Default"]
   [tabs/tabset {:style {:margin "0"}}
    [tabs/default {:icon "close"
                   :label "Perustiedot"
                   :on-click-fn #(println "Default button with icon and text clicked")}]
    [tabs/default {:icon "group_work"
                   :label "Relaatiot"
                   :on-click-fn #(println "Default button with icon and text clicked")}]]

   [buttons/default {:content "Update"
                     :icon "autorenew"
                     :on-click-fn #(println "Default button with icon and text clicked")}]
   [buttons/default {:content "Update"
                     :on-click-fn #(println "Default button with text clicked")}]
   [:div.code-example
    ($-> [buttons/default {:content "Update"
                           :icon "autorenew"
                           :on-click-fn #(println "Default button with icon and text clicked")}])]

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