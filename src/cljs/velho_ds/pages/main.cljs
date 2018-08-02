(ns velho-ds.pages.main
  (:require-macros [velho-ds.macros :refer [$->]])
  (:require [velho-ds.atoms.button :as buttons]
            [velho-ds.molecules.field :as fields]
            [velho-ds.organisms.grid :as grid]
            [velho-ds.atoms.loader :as loaders]
            [velho-ds.molecules.notification :as notifications]
            [velho-ds.molecules.tab :as tabs]
            [velho-ds.molecules.modal :as modals]
            [velho-ds.molecules.style.modal :as modal-style]
            [velho-ds.atoms.table :as tables]
            [reagent.core :as r]))

(defmulti page-contents identity)

(defmethod page-contents :index []
  [:div
   [:h2.rds-header2 "Design System"]
   [:p "A design system is set of interconnected patterns and shared practices coherently organised to archive the purpose of digital products. Patterns are the repeating elements that we combine to create an interface: things like user flows, interactions, buttons, text fields, icons, colors, typography, microcopy, Practices are how we choose to create, capture, share and use those patterns, particularly when working in a team. - Design Systems, Alla Kholmatova"]
   [:h2.rds-header2 "Design tokens"]
   [:p "Tokens are base of design system. They can be descriptions of size, color, time or anything specific with name and value pair (e.g. &ldquo;primary-color: rgb(30,120,200)&rdquo;). By itself, it doesn&rsquo;t create anything, but you can use it to describe everything in design system, for example atoms."]
   [:p "Tokens can be described for example with markup language, such as .YML. They can be converted then to any format you desire, thus making it possible to use same tokens with different programming languages, platforms, projects and design tools."]
   [:h2.rds-header2 "Atoms"]
   [:p "Atoms are basic building blocks that can be constructed using design tokens. Atoms are the smallest functional unit, but not generally useful on their own. You can combine atoms to construct molecules."]
   [:h2.rds-header2 "Molecules"]
   [:p "Molecules are groups of atoms bonded together and are the smallest fundamental unit of a compound. These molecules take on their own properties and serve as backbone of design systems. Molecules should be build from simple combinations of atoms for reuse. Molecules can be combined to form organisms."]
   [:h2.rds-header2 "Organisms"]
   [:p "Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface. Organisms can consist of similar and/or different molecule types. Building up from molecules to organisms encourages creating standalone, portable, reusable components. By combining organisms (and sometimes molecules), you can construct templates."]
   [:h2.rds-header2 "Templates"]
   [:p "Templates are groups of organisms (and sometimes molecules). Templates provide context to relatively abstract molecules and organisms. Templates are used to create specific instances of templates, pages."]
   [:h2.rds-header2 "Pages"]
   [:p "Pages are specific instances of templates. In pages, template content is replaced with real representative content to give an accurate depiction of what a user will ultimately see. Pages are essential as it&rsquo;s where effectiveness of the design system can be tested."]])

(defmethod page-contents :fonts []
  [:div
   [:p.rds-quote "Fonts create hierarcies and purposeful alignments that guide users through the product and experience."]

   [:h2.rds-header2 "Default fonts"]
   [:h3.rds-header3 "Example of usage"]
   ($-> [:p "This is a paragraph."])

   [tables/default {:headers [{:label "Tag"
                               :key-path [:name]}
                              {:label "Example"
                               :key-path [:example]}]
                    :content [{:name "h1"
                               :example [:h1 "Header 1"]}
                              {:name "h2"
                               :example [:h2 "Header 2"]}
                              {:name "h3"
                               :example [:h3 "Header 3"]}
                              {:name "h4"
                               :example [:h4 "Header 4"]}
                              {:name "p"
                               :example [:p "Paragraph"]}
                              {:name "small"
                               :example [:small "Small paragraph"]}
                              ]}]])


(defmethod page-contents :buttons []
  [:div
   [:p.rds-quote "Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience."]
   [:h2.rds-header2 "Default buttons"]
   [:h3.rds-header3 "Example of usage"]
   ($-> [buttons/default {:content "Alert Button"
                          :icon "warning"
                          :on-click-fn #(js/alert "Default button with icon and text clicked")}])
   [tables/default {:headers [{:label "Name"
                               :key-path [:name]}
                              {:label "Usage"
                               :key-path [:example]}
                              {:label "Content and icon"
                               :key-path [:contenticon]}
                              {:label "Content only"
                               :key-path [:contentonly]}
                              {:label "Icon only"
                               :key-path [:icononly]}]
                    :content [{:name "Default"
                               :example "[buttons/default]"
                               :contenticon [buttons/default {:content "Default"
                                                              :icon "autorenew"}]
                               :contentonly [buttons/default {:content "Default"}]
                               :icononly [buttons/default {:icon "autorenew"}]}
                              {:name "Primary"
                               :example "[buttons/primary]"
                               :contenticon [buttons/primary {:content "Primary"
                                                              :icon "autorenew"}]
                               :contentonly [buttons/primary {:content "Primary"}]
                               :icononly [buttons/primary {:icon "autorenew"}]}
                              {:name "Secondary"
                               :example "[buttons/secondary]"
                               :contenticon [buttons/secondary {:content "Secondary"
                                                                :icon "autorenew"}]
                               :contentonly [buttons/secondary {:content "Secondary"}]
                               :icononly [buttons/secondary {:icon "autorenew"}]}
                              {:name "Outline"
                               :example "[buttons/outline]"
                               :contenticon [buttons/outline {:content "Outline"
                                                              :icon "autorenew"}]
                               :contentonly [buttons/outline {:content "Outline"}]
                               :icononly [buttons/outline {:icon "autorenew"}]}
                              ]}]
   [:h2.rds-header2 "Small buttons"]
   [:h3.rds-header3 "Example of usage"]
   ($-> [buttons/default-small {:content "Small Alert Button"
                                :icon "warning"
                                :on-click-fn #(js/alert "Small default button with icon and text clicked")}])
   [tables/default {:headers [{:label "Name"
                               :key-path [:name]}
                              {:label "Usage"
                               :key-path [:example]}
                              {:label "Content and icon"
                               :key-path [:contenticon]}
                              {:label "Content only"
                               :key-path [:contentonly]}
                              {:label "Icon only"
                               :key-path [:icononly]}]
                    :content [{:name "Default-small"
                               :example "[buttons/default-small]"
                               :contenticon [buttons/default-small {:content "Default"
                                                                    :icon "autorenew"}]
                               :contentonly [buttons/default-small {:content "Default"}]
                               :icononly [buttons/default-small {:icon "autorenew"}]}
                              {:name "Primary-small"
                               :example "[buttons/primary-small]"
                               :contenticon [buttons/primary-small {:content "Primary"
                                                                    :icon "autorenew"}]
                               :contentonly [buttons/primary-small {:content "Primary"}]
                               :icononly [buttons/primary-small {:icon "autorenew"}]}
                              {:name "Secondary-small"
                               :example "[buttons/secondary-small]"
                               :contenticon [buttons/secondary-small {:content "Secondary"
                                                                      :icon "autorenew"}]
                               :contentonly [buttons/secondary-small {:content "Secondary"}]
                               :icononly [buttons/secondary-small {:icon "autorenew"}]}
                              {:name "Outline-small"
                               :example "[buttons/outline-small]"
                               :contenticon [buttons/outline-small {:content "Outline"
                                                                    :icon "autorenew"}]
                               :contentonly [buttons/outline-small {:content "Outline"}]
                               :icononly [buttons/outline-small {:icon "autorenew"}]}
                              ]}]])

(defmethod page-contents :fields []
  [:div
   ($-> [fields/input-field {:label "Input with label and icon"
                             :placeholder "Placeholder"
                             :icon "search"
                             :on-change-fn #(println %)
                             :on-blur-fn #(println %)
                             :icon-click-fn #(println (str "Icon Clicked"))}])
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

   [fields/drag-n-drop {:label "Example"
                        :help-text "Drag-n-drop files or click here to upload"
                        :on-change-fn println}]])

(defmethod page-contents :grid []
  [:div
   ($-> [grid/grid-wrap {:rows 3
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
                        :border "1px solid silver"}} [:p "7"]]])])

(defmethod page-contents :tables []
  [:div
   ($-> [tables/default {:headers [{:label "Name"
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
                                   {:value [loaders/progress-bar {:percentage "58%"}]}]}])])

(defmethod page-contents :notifications []
  [:div
   ($-> [notifications/default {:close-fn #(js/alert "Default notification icon clicked")} [:span "Default notification"]])
   ($-> [notifications/error {:close-fn #(js/alert "Error notification icon clicked")} [:span "Error notification"]])
   ($-> [notifications/warning {:close-fn #(js/alert "Warning notification icon clicked")} [:span "Warning notification"] [:span {:style {:text-decoration "underline"}
                                                                                                                                  :on-click #(js/alert "Alert")} "Warning notification 2"]])
   ($-> [notifications/success {:close-fn #(js/alert "Success notification icon clicked")} [:p {:style {:margin "0"}} "Success notification"]])])

(defmethod page-contents :loaders []
  [:div
   ($-> [loaders/progress-bar])
   ($-> [loaders/progress-bar {:percentage "50%"}])
   ($-> [loaders/pulse])])

(defmethod page-contents :tabs []
  [:div
   ($-> [tabs/tabset {:selected-id 1
                      :style {:margin "0"}}
         [tabs/default {:tab-id 1
                        :icon "info"
                        :label "Info"
                        :on-click-fn #(println "Default tab clicked")}]
         [tabs/default {:tab-id 2
                        :icon "group_work"
                        :label "Relations"
                        :on-click-fn #(println "Default tab clicked")}]])])

(defmethod page-contents :modals []
  [:div
   [:div.rds-code-example
    ($-> [buttons/default {:content "Open modal"
                           :on-click-fn (fn [] (modals/open [modals/default {:header "Confirm modal"
                                                                             :header-buttons [{:icon "more_vert"
                                                                                               :on-click-fn #(modals/close "modal")}
                                                                                              {:icon "close"
                                                                                               :on-click-fn #(modals/close "modal")}]
                                                                             :content [[fields/input-field {:label "First"
                                                                                                            :placeholder "Placeholder"}]
                                                                                       [fields/input-field {:label "Second"
                                                                                                            :placeholder "Placeholder"}]
                                                                                       [fields/input-field {:label "Third"
                                                                                                            :placeholder "Placeholder"}]]
                                                                             :footer [[buttons/outline {:content "Cancel"
                                                                                                        :on-click-fn #(modals/close "modal")}]
                                                                                      [buttons/primary {:content "Confirm"
                                                                                                        :on-click-fn #(modals/close "modal")
                                                                                                        :styles {:margin-left "16px"}}]]}]
                                                            "modal"))}])]])
