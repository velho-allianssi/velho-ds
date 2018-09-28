(ns velho-ds.pages.main
  (:require-macros [velho-ds.macros :refer [$->]])
  (:require [velho-ds.atoms.button :as buttons]
            [velho-ds.molecules.field :as fields]
            [velho-ds.organisms.grid :as grid]
            [velho-ds.atoms.loader :as loaders]
            [velho-ds.molecules.notification :as notifications]
            [velho-ds.molecules.tab :as tabs]
            [velho-ds.molecules.modal :as modals]
            [velho-ds.atoms.divider :as dividers]
            [velho-ds.atoms.table :as tables]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.font :as font]
            [velho-ds.tokens.z-index :as z-index]
            [velho-ds.atoms.icon :as icons]
            [velho-ds.atoms.area :as areas]
            [velho-ds.organisms.heading :as headings]
            [velho-ds.tokens.color :as color]
            [reagent.core :as r]))


(defn props-table [content]
  (let [open (r/atom false)]
    (fn []
      [:div.rds-props
       [:button {:on-click #(reset! open (not @open))}
        [:h3.rds-header3 "Props"]
        [icons/icon {:name (if @open "expand_less" "expand_more")}]]
       [:table.rds-props-table {:style {:display (if @open "block" "none")}}
        [:thead
         [:tr.rds-props-header
          [:th "Property"]
          [:th "Example value"]]]
        [:tbody
         (doall (for [item content]
                  (into ^{:key item} [:tr.rds-props-item
                                      [:td.rds-props-item-desc
                                       [:p (get item :name)]
                                       [:small (get item :desc)]]
                                      [:td.rds-props-item-vals
                                       [:p (get item :example)]]])))]]])))

(defmulti page-contents identity)

;; HOME

(defmethod page-contents :index []
  [:div
   [:h2.rds-header2 "Design System"]
   [:p "\"A design system is set of interconnected patterns and shared practices coherently organised to archive the purpose of digital products. Patterns are the repeating elements that we combine to create an interface: things like user flows, interactions, buttons, text fields, icons, colors, typography, microcopy, Practices are how we choose to create, capture, share and use those patterns, particularly when working in a team.\" - Design Systems, Alla Kholmatova"]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Design tokens"]
   [:p "Tokens are base of design system. They can be descriptions of size, color, time or anything specific with name and value pair (e.g. \"primary-color: rgb(30,120,200)\"). By itself, it doesn't create anything, but you can use it to describe everything in design system, for example atoms."]
   [:p "Tokens can be described for example with markup language, such as .YML. They can be converted then to any format you desire, thus making it possible to use same tokens with different programming languages, platforms, projects and design tools."]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Atoms"]
   [:p "Atoms are basic building blocks that can be constructed using design tokens. Atoms are the smallest functional unit, but not generally useful on their own. You can combine atoms to construct molecules."]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Molecules"]
   [:p "Molecules are groups of atoms bonded together and are the smallest fundamental unit of a compound. These molecules take on their own properties and serve as backbone of design systems. Molecules should be build from simple combinations of atoms for reuse. Molecules can be combined to form organisms."]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Organisms"]
   [:p "Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface. Organisms can consist of similar and/or different molecule types. Building up from molecules to organisms encourages creating standalone, portable, reusable components. By combining organisms (and sometimes molecules), you can construct templates."]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Templates"]
   [:p "Templates are groups of organisms (and sometimes molecules). Templates provide context to relatively abstract molecules and organisms. Templates are used to create specific instances of templates, pages."]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Pages"]
   [:p "Pages are specific instances of templates. In pages, template content is replaced with real representative content to give an accurate depiction of what a user will ultimately see. Pages are essential as it's where effectiveness of the design system can be tested."]])

;; ATOMS

(defmethod page-contents :areas []
  [:div
   [:p.rds-quote "Areas are pre-styled content holders. You can add any content to them."]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Info-area"]
   ($-> [areas/info {:styles {:font-size "1.25rem"}} [:p "This is a info area"]])
   [props-table [{:name "styles"
                  :desc "map"
                  :example "{:styles {:font-size \"1.25rem\"}}"}
                 {:name "content"
                  :desc "components"
                  :example "[:p \"This is a info area\"]"}]]
   [:h2.rds-header2 "Info-area-centered"]
   ($-> [areas/info-center {:styles {:font-size "1.25rem"}} [:p "This is a info area with centered content."]])
   [props-table [{:name "styles"
                  :desc "map"
                  :example "{:styles {:font-size \"1.25rem\"}}"}
                 {:name "content"
                  :desc "components"
                  :example "[:p \"This is a info area\"]"}]]])

(defmethod page-contents :buttons []
  [:div
   [:p.rds-quote "Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience."]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Default buttons"]
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
                               :icononly [buttons/outline {:icon "autorenew"}]}]}]

   ($-> [buttons/default {:content "Alert Button"
                          :icon "warning"
                          :on-click-fn #(js/alert "Default button with icon and text clicked")}])
   [props-table [{:name "content"
                  :desc "string"
                  :example "{:content \"Text\"}"}
                 {:name "icon"
                  :desc "string"
                  :example "{:icon \"autorenew\"}"}
                 {:name "on-click-fn"
                  :desc "function"
                  :example "{:on-click-fn #(js/alert \"Pressed!\")}"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Small buttons"]
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
                               :icononly [buttons/outline-small {:icon "autorenew"}]}]}]

   ($-> [buttons/default-small {:content "Small Alert Button"
                                :icon "warning"
                                :on-click-fn #(js/alert "Small default button with icon and text clicked")}])
   [props-table [{:name "content"
                  :desc "string"
                  :example "{:content \"Text\"}"}
                 {:name "icon"
                  :desc "string"
                  :example "{:icon \"autorenew\"}"}
                 {:name "on-click-fn"
                  :desc "function"
                  :example "{:on-click-fn #(js/alert \"Pressed!\")}"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]])


(defmethod page-contents :dividers []
  [:div
   [:p.rds-quote "Dividers divide sections of content."]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Default divider"]
   ($-> [dividers/default {:styles {:margin-top "2rem"
                                    :margin-bottom "2rem"}}])
   [props-table [{:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]])

(defmethod page-contents :fonts []
  [:div
   [:p.rds-quote "Fonts create hierarcies and purposeful alignments that guide users through the product and experience."]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Default fonts"]
   [tables/default {:headers [{:label "Tag"
                               :key-path [:name]}
                              {:label "Example"
                               :key-path [:example]}
                              {:label "Size"
                               :key-path [:font-size]}
                              {:label "Font Family"
                               :key-path [:font-family]}]
                    :content [{:name "h1"
                               :example [:h1 "Header 1"]
                               :font-family font/font-family-text
                               :font-size font-size/font-size-xx-large}
                              {:name "h2"
                               :example [:h2 "Header 2"]
                               :font-family font/font-family-heading
                               :font-size font-size/font-size-x-large}
                              {:name "h3"
                               :example [:h3 "Header 3"]
                               :font-family font/font-family-heading
                               :font-size font-size/font-size-large}
                              {:name "h4"
                               :example [:h4 "Header 4"]
                               :font-family font/font-family-text
                               :font-size font-size/font-size-base}
                              {:name "p"
                               :example [:p "Paragraph"]
                               :font-family font/font-family-heading
                               :font-size font-size/font-size-base}
                              {:name "small"
                               :example [:small "Small paragraph"]
                               :font-family font/font-family-text
                               :font-size font-size/font-size-small}]}]

   ($-> [:p "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget urna egestas, convallis dui vel, egestas mauris. Nam interdum odio enim. Fusce dolor quam, dictum nec quam et, malesuada mattis nisl. Nam sodales dignissim velit ut congue. Duis imperdiet urna in consectetur tristique. Pellentesque sem sapien, malesuada quis vehicula et, pulvinar a purus. Nulla rhoncus nunc vel sapien venenatis maximus. Nunc pulvinar cursus vehicula. Etiam et mi tempus, vestibulum diam ac, semper eros. Integer porttitor vitae neque at luctus. Phasellus sed tincidunt magna. Aenean et enim ultricies, finibus nibh vitae, fermentum lorem. Nunc congue non lacus vitae molestie.\n\nVivamus quis dictum enim. Praesent ac iaculis mi. Sed hendrerit, mi vestibulum lobortis lacinia, turpis mauris imperdiet magna, rutrum aliquam turpis nunc in leo. Curabitur ligula tortor, malesuada ac leo volutpat, tempor viverra justo. Nulla ut magna quis erat dapibus egestas. Praesent pellentesque diam quis eros porttitor iaculis sit amet non justo. Morbi consectetur orci et felis dignissim faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer et magna porttitor, scelerisque diam sed, molestie ligula. Proin facilisis semper purus, eu rutrum ipsum finibus quis. In eleifend ipsum purus, vitae venenatis turpis dignissim ut."])])

(defmethod page-contents :loaders []
  [:div
   [:p.rds-quote "Loaders express actions being processed."]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Progress bar"]
   ($-> [loaders/progress-bar])
   [props-table [{:name "percentage"
                  :desc "string"
                  :example "{:percentage \"50%\"}"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]
   ($-> [loaders/progress-bar {:percentage "50%"}])
   [props-table [{:name "percentage"
                  :desc "string"
                  :example "{:percentage \"50%\"}"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Pulse"]
   ($-> [loaders/pulse])
   [props-table [{:name "styles"
                  :desc "map"
                  :example "{:styles {:background \"color/color-primary\"}}"}]]])

(defmethod page-contents :icons []
  [:div
   [:p.rds-quote "Icons communicate a message and should be distinct and informative. Icons should be used sparingly throughout the product to provide clarity and reduce cognitive load on users."]
   [:span.rds-quote "Velho Design Systems uses "] [:a.rds-quote {:style {:display "inline"}
                                                                 :href "//material.io/tools/icons/"} "Material Design Icons."]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Default icon"]
   ($-> [icons/icon {:name "autorenew"}])
   [props-table [{:name "name"
                  :desc "string"
                  :example "{:name \"autorenew\"}"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]
   [:h2.rds-header2 "Clickable icon"]
   ($-> [icons/clickable {:name "autorenew"
                          :on-click-fn #(println "Icon clicked")}])
   [props-table [{:name "name"
                  :desc "string"
                  :example "{:name \"autorenew\"}"}
                 {:name "on-click-fn"
                  :desc "function"
                  :example "#(println \"Icon clicked\")"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Icons"]
   [tables/default {:headers [{:label "Icon"
                               :key-path [:name]}
                              {:label "Example"
                               :key-path [:icon]}]
                    :content [{:name "add"
                               :icon [icons/icon {:name "add"}]}
                              {:name "arrow_drop_down"
                               :icon [icons/icon {:name "arrow_drop_down"}]}
                              {:name "arrow_drop_up"
                               :icon [icons/icon {:name "arrow_drop_up"}]}
                              {:name "check_box"
                               :icon [icons/icon {:name "check_box"}]}
                              {:name "check_box_outline_blank"
                               :icon [icons/icon {:name "check_box_outline_blank"}]}
                              {:name "close"
                               :icon [icons/icon {:name "close"}]}
                              {:name "cloud_upload"
                               :icon [icons/icon {:name "cloud_upload"}]}
                              {:name "comment"
                               :icon [icons/icon {:name "comment"}]}
                              {:name "create"
                               :icon [icons/icon {:name "create"}]}
                              {:name "date_range"
                               :icon [icons/icon {:name "date_range"}]}
                              {:name "favorite"
                               :icon [icons/icon {:name "favorite"}]}
                              {:name "file_download"
                               :icon [icons/icon {:name "file_download"}]}
                              {:name "file_upload"
                               :icon [icons/icon {:name "file_upload"}]}
                              {:name "fullscreen"
                               :icon [icons/icon {:name "fullscreen"}]}
                              {:name "fullscreen_exit"
                               :icon [icons/icon {:name "fullscreen_exit"}]}
                              {:name "group_work"
                               :icon [icons/icon {:name "group_work"}]}
                              {:name "info"
                               :icon [icons/icon {:name "info"}]}
                              {:name "insert_drive_file"
                               :icon [icons/icon {:name "insert_drive_file"}]}
                              {:name "layers"
                               :icon [icons/icon {:name "layers"}]}
                              {:name "more_vert"
                               :icon [icons/icon {:name "more_vert"}]}
                              {:name "radio_button_checked"
                               :icon [icons/icon {:name "radio_button_checked"}]}
                              {:name "radio_button_unchecked"
                               :icon [icons/icon {:name "radio_button_unchecked"}]}
                              {:name "remove"
                               :icon [icons/icon {:name "remove"}]}
                              {:name "save"
                               :icon [icons/icon {:name "save"}]}
                              {:name "search"
                               :icon [icons/icon {:name "search"}]}
                              {:name "share"
                               :icon [icons/icon {:name "share"}]}
                              {:name "timelapse"
                               :icon [icons/icon {:name "timelapse"}]}]}]])


(defmethod page-contents :tables []
  [:div
   [:p.rds-quote "Tables provide good way to present a large amount of data. A table should be used when multiple metrics and categories need to presented together."]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Default Table"]
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
                                   {:value [loaders/progress-bar {:percentage "58%"}]}]}])
   [props-table [{:name "headers"
                  :desc "vector"
                  :example "{:headers\n[{:label\"Name\"\n :key-path [:name]}\n{:label \"Tasks\"\n :key-path [:tasks 0]}\n{:label \"Organization\"\n :key-path [:organization 0 :org]}\n{:label \"State\"\n :key-path [:state]}\n{:label \"Progress\"\n :key-path [:element]}"}
                 {:name "content"
                  :desc "vector"
                  :example "{:content [{:id 1\n :name \"Example 1\"\n :tasks [\"Being amazing\"]\n :organization [{:org \"Amazing Organization\"}]\n :state \"On going\"\n :element [loaders/progress-bar {:percentage \"75%\"}]}\n{:id 2\n :name \"Example 2\"\n :tasks [\"Cleaning\"]\n :organization [{:org \"Clean Organization\"}]\n :state \"Done\"\n :element [loaders/progress-bar {:percentage \"100%\"}]}]}"}
                 {:name "footers"
                  :desc "vector"
                  :example "{:footers [{:label \"Name\"\n:value \"Total\"}\n{:label \"Tasks\"\n:value nil}\n{:label \"Organization\"\n:value nil}\n{:label \"Progress\"\n:value nil}\n{:value [loaders/progress-bar {:percentage \"58%\"}]}]}"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]])

;; MOLECULES

(def data-example (r/atom [{:section "Projects"
                            :items [{:label "Project 001"}
                                    {:label "Project 002"}
                                    {:label "Project 003"}
                                    {:label "Project 004"}
                                    {:label "Project 005"}]}
                           {:section "Sub-projects"
                            :items [{:label "Sub-project 001"}
                                    {:label "Sub-project 002"}]}
                           {:section "Files"
                            :items [{:label "File 1"}
                                    {:label "File 2"}
                                    {:label "File 3"}]}]))
(defmethod page-contents :fields []
  (let [example-data (r/atom @data-example)
        example-search-fn #(reset! example-data [{:section "Sub-projects"
                                                  :items [{:label "Sub-project 001"}
                                                          {:label "Sub-project 002"}]}])]
    (fn []
      [:div
       [:p.rds-quote "Fields provide a ways of input and output. Input, such as typing, selecting or dragging and dropping can be used to provide several formats of information."]
       [dividers/default {:styles {:margin-top "2rem"
                                   :margin-bottom "2rem"}}]
       [:h2.rds-header2 "Output"]
       [:h3.rds-header3 "Keyvalue"]
       ($-> [fields/keyvalue {:label "Title"
                              :content "Value"}])
       [props-table [{:name "label"
                      :desc "string"
                      :example "{:title \"Title\"}"}
                     {:name "content"
                      :desc "string"
                      :example "{:content \"Value\"}"}]]

       [:h3.rds-header3 "Iconvalue"]
       ($-> [fields/iconvalue {:icon "date_range"
                               :content "29.09.2017 - 01.12.2022"}])
       [props-table [{:name "icon"
                      :desc "string"
                      :example "{:icon \"date_range\"}"}
                     {:name "content"
                      :desc "string"
                      :example "{:content \"29.09.2017 - 01.12.2022\"}"}]]

       [dividers/default {:styles {:margin-top "2rem"
                                   :margin-bottom "2rem"}}]
       [:h2.rds-header2 "Input"]
       [:h3.rds-header3 "Input-field"]
       [tables/default {:headers [{:label "Name"
                                   :key-path [:name]}
                                  {:label "Example"
                                   :key-path [:example]}]
                        :content [{:name "Default"
                                   :example [fields/input-field]}
                                  {:name "With label"
                                   :example [fields/input-field {:label "Label"}]}
                                  {:name "With label and placeholder"
                                   :example [fields/input-field {:label "Label"
                                                                 :placeholder "Placeholder"}]}
                                  {:name "With label, placeholder and icon"
                                   :example [fields/input-field {:label "Label"
                                                                 :placeholder "Placeholder"
                                                                 :icon "search"}]}
                                  {:name "With label, placeholder, icon and content"
                                   :example [fields/input-field {:label "Label"
                                                                 :placeholder "Placeholder"
                                                                 :icon "search"
                                                                 :content "Content"}]}
                                  {:name "Invalid value"
                                   :example [fields/input-field {:label "Label"
                                                                 :placeholder "Placeholder"
                                                                 :icon "search"
                                                                 :content "Invalid value"
                                                                 :error-messages ["Value has to be valid!"]}]}]}]
       ($-> [fields/input-field {:label "Input with label and icon"
                                 :placeholder "Placeholder"
                                 :icon "search"
                                 :on-change-fn #(println %)
                                 :on-blur-fn #(println %)
                                 :icon-click-fn #(println (str "Icon Clicked"))}])
       [props-table [{:name "label"
                      :desc "string"
                      :example "{:label \"Label\"}"}
                     {:name "content"
                      :desc "string"
                      :example "{:content \"Content\"}"}
                     {:name "placeholder"
                      :desc "string"
                      :example "{:placeholder \"Placeholder\"}"}
                     {:name "icon"
                      :desc "string"
                      :example "{:icon \"search\"}"}
                     {:name "icon-click-fn"
                      :desc "function"
                      :example "{:icon-click-fn \"#(println (str \"Icon Clicked\"))\"}"}
                     {:name "on-change-fn"
                      :desc "function"
                      :example "{:on-change-fn \"#(println (str \"Value has changed!\"))\"}"}
                     {:name "on-blur-fn"
                      :desc "function"
                      :example "{:on-blur-fn \"#(println (str \"Focus lost!\"))\"}"}]]

       [:h3.rds-header3 "Multiline-field"]
       ($-> [fields/multiline-field "Textfield"])
       [props-table [{:name "content"
                      :desc "string"
                      :example "{:content \"Content\"}"}]]
       [:h3.rds-header3 "Dropdown-menu"]
       ($-> [fields/dropdown-menu {:label "Dropdown menu"
                                   :placeholder "Select"
                                   :item-list @example-data
                                   :on-change-fn example-search-fn
                                   :on-blur-fn #(println "On blur: " %)
                                   :on-focus-fn #(println "On focus: " %)
                                   :on-item-select-fn #(println "Item selected: " %1 %2)
                                   :selected-item {:label "File 1"}}])
       [props-table [{:name "label"
                      :desc "string"
                      :example "{:title \"Dropdown menu\"}"}
                     {:name "placeholder"
                      :desc "string"
                      :example "{:placeholder \"Select\"}"}
                     {:name "item-list"
                      :desc "vector"
                      :example "{:item-list [{:section \"Sub-projects\"\n:items [{:label \"Sub-project 001\"}\n{:label \"Sub-project 002\"}]}]}"}
                     {:name "on-change-fn"
                      :desc "function"
                      :example "{:on-change-fn #(sort-fn %)}"}
                     {:name "on-blur-fn"
                      :desc "function"
                      :example "{:on-blur-fn #(println \"On blur: \" %)}"}
                     {:name "on-focus-fn"
                      :desc "function"
                      :example "{:on-focus-fn #(println \"On focus: \" %)}"}
                     {:name "on-item-select-fn"
                      :desc "function"
                      :example "{:on-item-select-fn #(println \"Item selected: \" %1 %2)}"}
                     {:name "selected-item"
                      :desc "map"
                      :example "{:selected-item {:label \"Sub-project 002\"}}"}
                     {:name "icon-click-fn"
                      :desc "function"
                      :example "{:icon-click-fn clear-sort-fn}"}
                     {:name "icon"
                      :desc "string"
                      :example "{:icon \"close\"}"}
                     {:name "error-messages"
                      :desc "vector"
                      :example "{:error-messages [\"Value has to be valid!\"]}"}
                     {:name "disabled"
                      :desc "boolean"
                      :example "{:disabled true}"}
                     {:name "styles"
                      :desc "map"
                      :example "{:styles {:margin 0}}"}]]
       [:h3.rds-header3 "Dropdown-menu-simple"]
       ($-> (let [values [{:id 1 :value "First"}
                          {:id 2 :value "Second"}]]
              [fields/dropdown-menu-simple {:label "Dropdown, simple"
                                            :selected-fn #(js/alert (str "Selected value: " %))
                                            :options values
                                            :no-selection-text "- No selection -"}]))
       [props-table [{:name "label"
                      :desc "string"
                      :example "{:label \"Label\"}"}
                     {:name "selected-fn"
                      :desc "function"
                      :example "{:selected-fn #(println (str \"Selected value\"))}"}
                     {:name "options"
                      :desc "vector"
                      :example "{:options [{:id 1 :value \"First\"}\n{:id 2 :value \"Second\"}]}"}
                     {:name "default-value"
                      :desc "string"
                      :example "{:default-value \"First\"}"}
                     {:name "no-selection-text"
                      :desc "string"
                      :example "{:no-selection-text \"- No selection -\"}"}]]
       [:h3.rds-header3 "Dropdown-multiple"]
       ($-> (let [options ["John" "Sandra" "Matt" "Will" "Kate" "Alex" "Keith" "Melinda"]]
              [fields/dropdown-multiple {:label "Multiselect dropdown"
                                         :selected-fn #(println (str "Selected values: " %))
                                         :options options
                                         :no-selection-text "- No selection -"
                                         :preselected-values ["John"]}]))
       [props-table [{:name "label"
                      :desc "string"
                      :example "{:label \"Label\"}"}
                     {:name "placeholder"
                      :desc "string"
                      :example "{:placeholder \"Placeholder\"}"}
                     {:name "selected-fn"
                      :desc "function"
                      :example "{:selected-fn #(println (str \"Selected value\"))}"}
                     {:name "options"
                      :desc "vector"
                      :example "{:options [{:id 1 :value \"First\"}\n{:id 2 :value \"Second\"}]}"}
                     {:name "preselected-values"
                      :desc "vector"
                      :example "{:preselected-values [\"First\"]}"}]]
       [:h3.rds-header3 "Drag-n-drop"]
       ($-> [fields/drag-n-drop {:label "Example"
                                 :help-text "Drag-n-drop files or click here to upload"
                                 :on-change-fn println}])
       [props-table [{:name "label"
                      :desc "string"
                      :example "{:label \"Label\"}"}
                     {:name "help-text"
                      :desc "string"
                      :example "{:help-text \"Drag-n-drop files or click here to upload\"}"}
                     {:name "on-change-fn"
                      :desc "function"
                      :example "{:selected-fn #(println (str \"Filelist changed!\"))}"}]]])))

(def modal-example
  (let [modal-open (r/atom false)]
    (fn []
      ($->
        [:div
         [modals/default {:is-open @modal-open
                          :header "Confirm modal"
                          :header-buttons [{:icon "more_vert"
                                            :on-click-fn #(swap! modal-open not)}
                                           {:icon "close"
                                            :on-click-fn #(swap! modal-open not)}]
                          :content [[fields/input-field {:label "First"
                                                         :placeholder "Placeholder"}]
                                    [fields/input-field {:label "Second"
                                                         :placeholder "Placeholder"}]
                                    [fields/input-field {:label "Third"
                                                         :placeholder "Placeholder"}]]
                          :footer [[buttons/outline {:content "Cancel"
                                                     :on-click-fn #(swap! modal-open not)}]
                                   [buttons/primary {:content "Confirm"
                                                     :on-click-fn #(swap! modal-open not)
                                                     :styles {:margin-left "16px"}}]]}]
         [buttons/default {:content "Open modal"
                           :on-click-fn #(swap! modal-open not)}]]))))

(defmethod page-contents :modals []
  [:div
   [:p.rds-quote "A modal displays content that temporarily blocks interactions with the main view."]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Default modal"]
   [modal-example]
   [props-table [{:name "header"
                  :desc "string"
                  :example "{:header \"Confirm modal\"}"}
                 {:name "header-buttons"
                  :desc "vector"
                  :example "{:header-buttons\n[[fields/input-field {:label \"First\"\n:placeholder \"Placeholder\"}]\n[fields/input-field {:label \"Second\"\n:placeholder \"Placeholder\"}]\n[fields/input-field {:label \"Third\"\n:placeholder \"Placeholder\"}]]}"}
                 {:name "content"
                  :desc "vector"
                  :example "{:content\n[[fields/input-field {:label \"First\"\n:placeholder \"Placeholder\"}]\n[fields/input-field {:label \"Second\"\n:placeholder \"Placeholder\"}]\n[fields/input-field {:label \"Third\"\n:placeholder \"Placeholder\"}]]}"}
                 {:name "footer"
                  :desc "vector"
                  :example "{:footer\n[[buttons/outline {:content \"Cancel\"\n:on-click-fn #(swap! modal-open not)}]\n[buttons/primary {:content \"Confirm\"\n:on-click-fn #(swap! modal-open not)\n:styles {:margin-left \"16px\"}}]]}"}
                 {:name "is-open"
                  :desc "boolean"
                  :example "{:is-open false}"}]]])

(defmethod page-contents :notifications []
  [:div
   [:p.rds-quote "Notifications are used to inform users about imminent exceptions, errors, warnings, messages or other high-priority information. Notifications should be clearly written and informative for users. They can include actions such as 'retry', 'reload', 'try again', 'confirm'."]
   [:h3.rds-header3 "Default"]
   ($-> [notifications/default {:close-fn #(js/alert "Default notification icon clicked")} [:span "Default notification"]])
   [props-table [{:name "close-fn"
                  :desc "function"
                  :example "{:close-fn #(js/alert \"Success notification icon clicked\"}"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}
                 {:name "content"
                  :desc "components"
                  :example "[:span \"Warning notification\"] [:span {:style {:text-decoration \"underline\"}\n:on-click #(js/alert \"Alert\")} \"Warning notification 2\"]"}]]
   [:h3.rds-header3 "Error"]
   ($-> [notifications/error {:close-fn #(js/alert "Error notification icon clicked")} [:span "Error notification"]])
   [props-table [{:name "close-fn"
                  :desc "function"
                  :example "{:close-fn #(js/alert \"Success notification icon clicked\"}"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}
                 {:name "content"
                  :desc "components"
                  :example "[:span \"Warning notification\"] [:span {:style {:text-decoration \"underline\"}\n:on-click #(js/alert \"Alert\")} \"Warning notification 2\"]"}]]
   [:h3.rds-header3 "Warning"]
   ($-> [notifications/warning {:close-fn #(js/alert "Warning notification icon clicked")} [:span "Warning notification"] [:span {:style {:text-decoration "underline"}
                                                                                                                                  :on-click #(js/alert "Alert")} "Warning notification 2"]])
   [props-table [{:name "close-fn"
                  :desc "function"
                  :example "{:close-fn #(js/alert \"Success notification icon clicked\"}"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}
                 {:name "content"
                  :desc "components"
                  :example "[:span \"Warning notification\"] [:span {:style {:text-decoration \"underline\"}\n:on-click #(js/alert \"Alert\")} \"Warning notification 2\"]"}]]
   [:h3.rds-header3 "Success"]
   ($-> [notifications/success {:close-fn #(js/alert "Success notification icon clicked")} [:p {:style {:margin "0"}} "Success notification"]])
   [props-table [{:name "close-fn"
                  :desc "function"
                  :example "{:close-fn #(js/alert \"Success notification icon clicked\"}"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}
                 {:name "content"
                  :desc "components"
                  :example "[:span \"Warning notification\"] [:span {:style {:text-decoration \"underline\"}\n:on-click #(js/alert \"Alert\")} \"Warning notification 2\"]"}]]])

(defmethod page-contents :tabs []
  [:div
   [:p.rds-quote "Tabs are used to alternate related views within the same context."]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Single tab"]
   ($-> [tabs/default {:tab-id 1
                       :icon "info"
                       :label "Info"
                       :on-click-fn #(println "Default tab clicked")}])
   [props-table [{:name "tab-id"
                  :desc "int"
                  :example "{:tab-id 1}"}
                 {:name "icon"
                  :desc "string"
                  :example "{:icon \"info\"}"}
                 {:name "label"
                  :desc "string"
                  :example "{:label \"Info\"}"}
                 {:name "on-click-fn"
                  :desc "function"
                  :example "{:on-click-fn #(println \"Default tab clicked\")}"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Default tabset"]
   ($-> [tabs/tabset {:selected-id 1}
         [tabs/default {:tab-id 1
                        :icon "info"
                        :label "Info"
                        :on-click-fn #(println "Default tab clicked")}]
         [tabs/default {:tab-id 2
                        :icon "group_work"
                        :label "Relations"
                        :on-click-fn #(println "Default tab clicked")}]])
   [props-table [{:name "selected-id"
                  :desc "int"
                  :example "{:selected-id 1}"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}
                 {:name "content"
                  :desc "components"
                  :example "[tabs/default {:tab-id 1\n:icon \"info\"\n:label \"Info\"\n:on-click-fn #(println \"Default tab clicked\")}]\n[tabs/default {:tab-id 2\n:icon \"group_work\"\n:label \"Relations\"\n:on-click-fn #(println \"Default tab clicked\")}]"}]]])

;; ORGANISMS

(defmethod page-contents :grid []
  [:div
   [:p.rds-quote "Grids are used to create context layout on a page."]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Grid-cell"]
   ($-> [grid/grid-cell {:col-start 1
                         :col-end 4
                         :style {:background-color "whitesmoke"
                                 :text-align "center"
                                 :border "1px solid silver"}} [:p "test"]])
   [props-table [{:name "row-start"
                  :desc "int"
                  :example "{:row-start 1}"}
                 {:name "row-end"
                  :desc "int"
                  :example "{:row-end 4}"}
                 {:name "col-start"
                  :desc "int"
                  :example "{:col-start 1}"}
                 {:name "col-end"
                  :desc "int"
                  :example "{:col-end 4}"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}
                 {:name "content"
                  :desc "components"
                  :example "[:p \"Content text\"]"}]]
   [dividers/default {:styles {:margin-top "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Grid-wrap"]
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
                        :border "1px solid silver"}} [:p "7"]]])
   [props-table [{:name "rows"
                  :desc "int"
                  :example "{:rows 3}"}
                 {:name "cols"
                  :desc "int"
                  :example "{:cols 3}"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:margin \"1rem\"}}"}
                 {:name "content"
                  :desc "components"
                  :example "[grid/grid-cell {:col-start 1\n:col-end 4\n:style {:background-color \"whitesmoke\"\n:text-align \"center\"\n:border \"1px solid silver\"}} [:p \"test\"]]"}]]])

(defmethod page-contents :headings []
  [:div
   ($-> [headings/page-heading {:current-page {:label "X-Files"
                                               :child {:label "Animals"
                                                       :child {:label "Flying squirrel investigation"
                                                               :child nil}}}
                                :breadcrumb-click-fn #(println %)
                                :sub-content [[:p "Given content"]]
                                :search-placeholder "Search"
                                :search-results @data-example
                                :search-result-clicked-fn #(println "Item selected: " %1 %2)
                                :search-fn #(println "Search-fn: " %)
                                :styles {:z-index z-index/z-index-docked}}])
   [props-table [{:name "current-page"
                  :desc "map"
                  :example "{:current-page {:label \"X-Files\"\n:child {:label \"Animals\"\n:child {:label \"Flying squirrel investigation\"\n:child nil}}}}"}
                 {:name "search-placeholder"
                  :desc "string"
                  :example "{:search-placeholder \"Search\"}"}
                 {:name "search-input"
                  :desc "string"
                  :example "{:search-input \"X-Files\"}"}
                 {:name "search-fn"
                  :desc "function"
                  :example "{:search-fn search}"}
                 {:name "search-results"
                  :desc "vector (r/atom)"
                  :example "{:search-results [{:section \"Projects\"\n:items [{:label \"Project 001\"}\n{:label \"Project 002\"}\n{:label \"Project 003\"}\n{:label \"Project 004\"}\n{:label \"Project 005\"}]}\n{:section \"Sub-projects\"\n:items [{:label \"Sub-project 001\"}\n{:label \"Sub-project 002\"}]}\n{:section \"Files\"\n:items [{:label \"File 1\"}\n{:label \"File 2\"}\n{:label \"File 3\"}]}]}"}
                 {:name "search-results-show"
                  :desc "int"
                  :example "{:search-results-show 4}"}
                 {:name "search-results-msg"
                  :desc "str"
                  :example "{:search-results-msg \"No results, sorry\"}"}
                 {:name "search-result-clicked-fn"
                  :desc "function"
                  :example "{:search-result-clicked-fn #(println %)}"}
                 {:name "search-heading-fn"
                  :desc "function"
                  :example "{:search-heading-fn #(println %)}"}
                 {:name "sub-content"
                  :desc "vector"
                  :example "{:sub-content [[:p \"Given content\"]]}"}
                 {:name "styles"
                  :desc "map"
                  :example "{:styles {:z-index \"4\"}}"}]]

   [:h2.rds-header2 "Content-header"]
   [:p "Used to build header for content."]
   ($-> [headings/content-header
         [headings/content-info {:breadcrumb {:label "X-Files"
                                              :child {:label "Animals"
                                                      :child {:label "Flying squirrel investigation"}}}
                                 :footnote "Related Organization, Another Organization"
                                 :meta [[buttons/primary-small {:content "Item"}]
                                        [buttons/primary-small {:content "Another Item"}]
                                        [buttons/primary-small {:content "Last Item"}]]
                                 :navigation [[buttons/icon-link {:icon "info"
                                                                  :label "Info"
                                                                  :active true
                                                                  :on-click-fn #(println "Default icon-link clicked")}]
                                              [buttons/icon-link {:icon "insert_drive_file"
                                                                  :label "Documents"
                                                                  :on-click-fn #(println "Default icon-link clicked")}]]
                                 :bar-color color/color-pacific}]
         [areas/info
          [icons/type-icon-circle {:color color/color-pacific}]
          [fields/keyvalue {:label "Type"
                            :content "Project"}]
          [fields/keyvalue {:label "Schedule"
                            :content "29.09.2017 - 01.01.2021"}]
          [fields/keyvalue {:label "State"
                            :content "In Progress"}]]])
   [props-table [{:name "styles"
                  :desc "map"
                  :example "{:styles {:padding \"2px\"}"}
                 {:name "content"
                  :desc "components"
                  :example "[areas/info\n[icons/type-icon-circle {:color color/color-pacific}]\n[fields/keyvalue {:label \"Type\"\n:content \"Project\"}]\n[fields/keyvalue {:label \"Schedule\"\n:content \"29.09.2017 - 01.01.2021\"}]\n[fields/keyvalue {:label \"State\"\n:content \"In Progress\"}]]"}]]

   [:h2.rds-header2 "Content-header-default"]
   [:p "Default structure of content-header. Parameters can be used to change values, but the styles are strict."]
   ($-> [headings/content-header-default {:breadcrumb {:label "X-Files"
                                                       :child {:label "Animals"
                                                               :child {:label "Flying squirrel investigation"
                                                                       :child nil}}}
                                          :footnote "Related Organization, Another Organization"
                                          :meta [{:content "Item"
                                                  :on-click-fn #(println %)}
                                                 {:content "Another Item"}
                                                 {:content "Last Item"}]
                                          :navigation [{:icon "info"
                                                        :label "Info"
                                                        :active true
                                                        :on-click-fn #(println "Default icon-link clicked")}
                                                       {:icon "insert_drive_file"
                                                        :label "Documents"
                                                        :on-click-fn #(println "Default icon-link clicked")}]
                                          :theme-color color/color-pacific
                                          :info-keyvalues [{:label "Type"
                                                            :content "Project"}
                                                           {:label "Schedule"
                                                            :content "29.09.2017 - 01.01.2021"}
                                                           {:label "State"
                                                            :content "In Progress"}]}])
   [props-table [{:name "breadcrumb"
                  :desc "map"
                  :example " {:breadcrumb {:label \"X-Files\"\n                                                       :child {:label \"Animals\"\n                                                               :child {:label \"Flying squirrel investigation\"\n                                                                       :child nil}}}}"}
                 {:name "footnote"
                  :desc "string"
                  :example "{:footnote \"Related Organization, Another Organization\"}"}
                 {:name "meta"
                  :desc "vector of button-parameters"
                  :example "{:meta [{:content \"Item\"\n                                                  :on-click-fn #(println %)}\n                                                 {:content \"Another Item\"}\n                                                 {:content \"Last Item\"}]}"}
                 {:name "navigation"
                  :desc "vector"
                  :example "{:navigation [{:icon \"info\"\n                                                        :label \"Info\"\n                                                        :active true\n                                                        :on-click-fn #(println \"Default icon-link clicked\")}\n                                                       {:icon \"insert_drive_file\"\n                                                        :label \"Documents\"\n                                                        :on-click-fn #(println \"Default icon-link clicked\")}]}"}
                 {:name "theme-color"
                  :desc "color"
                  :example "{:theme-color color/color-pacific}"}
                 {:name "info-keyvalues"
                  :desc "vector"
                  :example "{:info-keyvalues [{:label \"Type\"\n                                                            :content \"Project\"}\n                                                           {:label \"Schedule\"\n                                                            :content \"29.09.2017 - 01.01.2021\"}\n                                                           {:label \"State\"\n                                                            :content \"In Progress\"}]}"}]]
   ])
