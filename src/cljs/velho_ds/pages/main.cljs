(ns velho-ds.pages.main
  (:require [velho-ds.macros :refer-macros [$->]]
            [velho-ds.atoms.button :as buttons]
            [velho-ds.molecules.field :as fields]
            [velho-ds.organisms.grid :as grid]
            [velho-ds.atoms.loader :as loaders]
            [velho-ds.molecules.notification :as notifications]
            [velho-ds.molecules.modal :as modals]
            [velho-ds.atoms.divider :as dividers]
            [velho-ds.atoms.table :as tables]
            [velho-ds.atoms.input :as input]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.font :as font]
            [velho-ds.atoms.icon :as icons]
            [velho-ds.atoms.area :as areas]
            [reagent.core :as r]
            [velho-ds.molecules.style.field :as style]
            [velho-ds.tokens.spacing :as spacing]
            [velho-ds.tokens.color :as color]
            [stylefy.core :as stylefy]))


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

(def example-box
  {:background color/color-white
   :border     (str "1px solid " color/color-neutral-2)
   :padding    "1rem"})

(def example-box-text
  {:display       "flex"
   :align-content "center"
   :padding       "1rem 0 0 0"})

(defmulti page-contents identity)

;; HOME

(defmethod page-contents :index []
  [:div
   [:h2.rds-header2 "Design System"]
   [:p "\"A design system is set of interconnected patterns and shared practices coherently organised to archive the purpose of digital products. Patterns are the repeating elements that we combine to create an interface: things like user flows, interactions, buttons, text fields, icons, colors, typography, microcopy, Practices are how we choose to create, capture, share and use those patterns, particularly when working in a team.\" - Design Systems, Alla Kholmatova"]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Design tokens"]
   [:p "Tokens are base of design system. They can be descriptions of size, color, time or anything specific with name and value pair (e.g. \"primary-color: rgb(30,120,200)\"). By itself, it doesn't create anything, but you can use it to describe everything in design system, for example atoms."]
   [:p "Tokens can be described for example with markup language, such as .YML. They can be converted then to any format you desire, thus making it possible to use same tokens with different programming languages, platforms, projects and design tools."]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Atoms"]
   [:p "Atoms are basic building blocks that can be constructed using design tokens. Atoms are the smallest functional unit, but not generally useful on their own. You can combine atoms to construct molecules."]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Molecules"]
   [:p "Molecules are groups of atoms bonded together and are the smallest fundamental unit of a compound. These molecules take on their own properties and serve as backbone of design systems. Molecules should be build from simple combinations of atoms for reuse. Molecules can be combined to form organisms."]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Organisms"]
   [:p "Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface. Organisms can consist of similar and/or different molecule types. Building up from molecules to organisms encourages creating standalone, portable, reusable components. By combining organisms (and sometimes molecules), you can construct templates."]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Templates"]
   [:p "Templates are groups of organisms (and sometimes molecules). Templates provide context to relatively abstract molecules and organisms. Templates are used to create specific instances of templates, pages."]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Pages"]
   [:p "Pages are specific instances of templates. In pages, template content is replaced with real representative content to give an accurate depiction of what a user will ultimately see. Pages are essential as it's where effectiveness of the design system can be tested."]])

;; ATOMS

(defmethod page-contents :areas []
  [:div
   [:p.rds-quote "Areas provide default style for content holders. You can add any content to them."]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Info-area"]
   ($-> [areas/info {:styles {:font-size "1.25rem"}} [:p "This is an info area"]])
   [props-table [{:name    "styles"
                  :desc    "map"
                  :example "{:styles {:font-size \"1.25rem\"}}"}
                 {:name    "content"
                  :desc    "components"
                  :example "[:p \"This is an info area\"]"}]]

   [:h2.rds-header2 "Shadow-area"]
   ($-> [areas/shadow-area {:styles {:font-size "1.25rem"}} [:p "This is a shadow area"]])
   [props-table [{:name    "styles"
                  :desc    "map"
                  :example "{:styles {:font-size \"1.25rem\"}}"}
                 {:name    "content"
                  :desc    "components"
                  :example "[:p \"This is a shadow area\"]"}]]

   [:h2.rds-header2 "Dotted-area"]
   ($-> [areas/dotted-area {:label "Header"} [:p "This is a dotted area"]])
   [props-table [{:name    "label"
                  :desc    "string"
                  :example "{:label \"Header\"}"}
                 {:name    "content"
                  :desc    "components"
                  :example "[:p \"This is a dotted area\"]"}]]])

(defmethod page-contents :buttons []
  [:div
   [:p.rds-quote "Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience."]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Default buttons"]
   [tables/default {:headers [{:label    "Name"
                               :key-path [:name]}
                              {:label    "Usage"
                               :key-path [:example]}
                              {:label    "Content and icon"
                               :key-path [:contenticon]}
                              {:label    "Content only"
                               :key-path [:contentonly]}
                              {:label    "Icon only"
                               :key-path [:icononly]}
                              {:label    "C. & I. (disabled)"
                               :key-path [:contenticon-disabled]}]
                    :content [{:name                 "Default"
                               :example              "[buttons/default]"
                               :contenticon          [buttons/default {:content "Default"
                                                                       :icon    "autorenew"}]
                               :contenticon-disabled [buttons/default {:content   "Default"
                                                                       :disabled? true
                                                                       :icon      "autorenew"}]
                               :contentonly          [buttons/default {:content "Default"}]
                               :icononly             [buttons/default {:icon "autorenew"}]}
                              {:name                 "Primary"
                               :example              "[buttons/primary]"
                               :contenticon          [buttons/primary {:content "Primary"
                                                                       :icon    "autorenew"}]
                               :contenticon-disabled [buttons/primary {:content   "Primary"
                                                                       :disabled? true
                                                                       :icon      "autorenew"}]
                               :contentonly          [buttons/primary {:content "Primary"}]
                               :icononly             [buttons/primary {:icon "autorenew"}]}
                              {:name                 "Secondary"
                               :example              "[buttons/secondary]"
                               :contenticon          [buttons/secondary {:content "Secondary"
                                                                         :icon    "autorenew"}]
                               :contenticon-disabled [buttons/secondary {:content   "Secondary"
                                                                         :disabled? true
                                                                         :icon      "autorenew"}]
                               :contentonly          [buttons/secondary {:content "Secondary"}]
                               :icononly             [buttons/secondary {:icon "autorenew"}]}
                              {:name                 "Outline"
                               :example              "[buttons/outline]"
                               :contenticon          [buttons/outline {:content "Outline"
                                                                       :icon    "autorenew"}]
                               :contenticon-disabled [buttons/outline {:content   "Outline"
                                                                       :disabled? true
                                                                       :icon      "autorenew"}]
                               :contentonly          [buttons/outline {:content "Outline"}]
                               :icononly             [buttons/outline {:icon "autorenew"}]}]}]

   ($-> [buttons/default {:content     "Alert Button"
                          :icon        "warning"
                          :on-click-fn (fn [] (js/alert "Default button with icon and text clicked"))}])
   [props-table [{:name    "content"
                  :desc    "string"
                  :example "{:content \"Text\"}"}
                 {:name    "icon"
                  :desc    "string"
                  :example "{:icon \"autorenew\"}"}
                 {:name    "on-click-fn"
                  :desc    "function"
                  :example "{:on-click-fn (fn [] (js/alert \"Default button with icon and text clicked\"))}"}
                 {:name    "styles"
                  :desc    "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Small buttons"]
   [tables/default {:headers [{:label    "Name"
                               :key-path [:name]}
                              {:label    "Usage"
                               :key-path [:example]}
                              {:label    "Content and icon"
                               :key-path [:contenticon]}
                              {:label    "Content only"
                               :key-path [:contentonly]}
                              {:label    "Icon only"
                               :key-path [:icononly]}
                              {:label    "C. & I. (disabled)"
                               :key-path [:contenticon-disabled]}]
                    :content [{:name                 "Default-small"
                               :example              "[buttons/default-small]"
                               :contenticon          [buttons/default-small {:content "Default"
                                                                             :icon    "autorenew"}]
                               :contenticon-disabled [buttons/default-small {:content   "Default"
                                                                             :disabled? true
                                                                             :icon      "autorenew"}]
                               :contentonly          [buttons/default-small {:content "Default"}]
                               :icononly             [buttons/default-small {:icon "autorenew"}]}
                              {:name                 "Primary-small"
                               :example              "[buttons/primary-small]"
                               :contenticon          [buttons/primary-small {:content "Primary"
                                                                             :icon    "autorenew"}]
                               :contenticon-disabled [buttons/primary-small {:content   "Primary"
                                                                             :disabled? true
                                                                             :icon      "autorenew"}]
                               :contentonly          [buttons/primary-small {:content "Primary"}]
                               :icononly             [buttons/primary-small {:icon "autorenew"}]}
                              {:name                 "Secondary-small"
                               :example              "[buttons/secondary-small]"
                               :contenticon          [buttons/secondary-small {:content "Secondary"
                                                                               :icon    "autorenew"}]
                               :contenticon-disabled [buttons/secondary-small {:content   "Secondary"
                                                                               :disabled? true
                                                                               :icon      "autorenew"}]
                               :contentonly          [buttons/secondary-small {:content "Secondary"}]
                               :icononly             [buttons/secondary-small {:icon "autorenew"}]}
                              {:name                 "Outline-small"
                               :example              "[buttons/outline-small]"
                               :contenticon          [buttons/outline-small {:content "Outline"
                                                                             :icon    "autorenew"}]
                               :contenticon-disabled [buttons/outline-small {:content   "Outline"
                                                                             :disabled? true
                                                                             :icon      "autorenew"}]
                               :contentonly          [buttons/outline-small {:content "Outline"}]
                               :icononly             [buttons/outline-small {:icon "autorenew"}]}]}]

   ($-> [buttons/default-small {:content     "Small Alert Button"
                                :icon        "warning"
                                :on-click-fn (fn [] (js/alert "Small default button with icon and text clicked"))}])
   [props-table [{:name    "content"
                  :desc    "string"
                  :example "{:content \"Text\"}"}
                 {:name    "icon"
                  :desc    "string"
                  :example "{:icon \"autorenew\"}"}
                 {:name    "on-click-fn"
                  :desc    "function"
                  :example "{:on-click-fn (fn [] (js/alert \"Pressed!\"))}"}
                 {:name    "styles"
                  :desc    "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]])


(defmethod page-contents :dividers []
  [:div
   [:p.rds-quote "Dividers divide sections of content."]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Default divider"]
   ($-> [dividers/default {:styles {:margin-top    "2rem"
                                    :margin-bottom "2rem"}}])
   [props-table [{:name    "styles"
                  :desc    "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]])

(defmethod page-contents :fonts []
  [:div
   [:p.rds-quote "Fonts create hierarcies and purposeful alignments that guide users through the product and experience."]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Default fonts"]
   [tables/default {:headers [{:label    "Tag"
                               :key-path [:name]}
                              {:label    "Example"
                               :key-path [:example]}
                              {:label    "Size"
                               :key-path [:font-size]}
                              {:label    "Font Family"
                               :key-path [:font-family]}]
                    :content [{:name        "h1"
                               :example     [:h1 "Header 1"]
                               :font-family font/font-family-text
                               :font-size   font-size/font-size-xx-large}
                              {:name        "h2"
                               :example     [:h2 "Header 2"]
                               :font-family font/font-family-heading
                               :font-size   font-size/font-size-x-large}
                              {:name        "h3"
                               :example     [:h3 "Header 3"]
                               :font-family font/font-family-heading
                               :font-size   font-size/font-size-large}
                              {:name        "h4"
                               :example     [:h4 "Header 4"]
                               :font-family font/font-family-text
                               :font-size   font-size/font-size-base}
                              {:name        "p"
                               :example     [:p "Paragraph"]
                               :font-family font/font-family-heading
                               :font-size   font-size/font-size-base}
                              {:name        "a"
                               :example     [:a "Link"]
                               :font-family font/font-family-heading
                               :font-size   font-size/font-size-base}
                              {:name        "small"
                               :example     [:small "Small paragraph"]
                               :font-family font/font-family-text
                               :font-size   font-size/font-size-small}]}]

   ($-> [:p "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget urna egestas, convallis dui vel, egestas mauris. Nam interdum odio enim. Fusce dolor quam, dictum nec quam et, malesuada mattis nisl. Nam sodales dignissim velit ut congue. Duis imperdiet urna in consectetur tristique. Pellentesque sem sapien, malesuada quis vehicula et, pulvinar a purus. Nulla rhoncus nunc vel sapien venenatis maximus. Nunc pulvinar cursus vehicula. Etiam et mi tempus, vestibulum diam ac, semper eros. Integer porttitor vitae neque at luctus. Phasellus sed tincidunt magna. Aenean et enim ultricies, finibus nibh vitae, fermentum lorem. Nunc congue non lacus vitae molestie.\n\nVivamus quis dictum enim. Praesent ac iaculis mi. Sed hendrerit, mi vestibulum lobortis lacinia, turpis mauris imperdiet magna, rutrum aliquam turpis nunc in leo. Curabitur ligula tortor, malesuada ac leo volutpat, tempor viverra justo. Nulla ut magna quis erat dapibus egestas. Praesent pellentesque diam quis eros porttitor iaculis sit amet non justo. Morbi consectetur orci et felis dignissim faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer et magna porttitor, scelerisque diam sed, molestie ligula. Proin facilisis semper purus, eu rutrum ipsum finibus quis. In eleifend ipsum purus, vitae venenatis turpis dignissim ut."])])

(defmethod page-contents :loaders []
  [:div
   [:p.rds-quote "Loaders express actions being processed."]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Progress bar"]
   ($-> [loaders/progress-bar])
   [props-table [{:name    "percentage"
                  :desc    "string"
                  :example "{:percentage \"50%\"}"}
                 {:name    "styles"
                  :desc    "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]
   ($-> [loaders/progress-bar {:percentage "50%"}])
   [props-table [{:name    "percentage"
                  :desc    "string"
                  :example "{:percentage \"50%\"}"}
                 {:name    "styles"
                  :desc    "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Pulse"]
   ($-> [loaders/pulse])
   [props-table [{:name    "styles"
                  :desc    "map"
                  :example "{:styles {:background \"color/color-primary\"}}"}]]])

(defmethod page-contents :icons []
  [:div
   [:p.rds-quote "Icons communicate a message and should be distinct and informative. Icons should be used sparingly throughout the product to provide clarity and reduce cognitive load on users."]
   [:span.rds-quote "Velho Design Systems uses "] [:a.rds-quote {:style {:display "inline"}
                                                                 :href  "//material.io/tools/icons/"} "Material Design Icons."]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Default icon"]
   ($-> [icons/icon {:name "autorenew"}])
   [props-table [{:name    "name"
                  :desc    "string"
                  :example "{:name \"autorenew\"}"}
                 {:name    "styles"
                  :desc    "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]
   [:h2.rds-header2 "Clickable icon"]
   ($-> [icons/clickable {:name        "autorenew"
                          :on-click-fn (fn [] (println "Icon clicked"))}])
   [props-table [{:name    "name"
                  :desc    "string"
                  :example "{:name \"autorenew\"}"}
                 {:name    "on-click-fn"
                  :desc    "function"
                  :example "{:on-click-fn (fn [] (println \"Icon clicked\"))}"}
                 {:name    "styles"
                  :desc    "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Custom icons"]
   ($-> [icons/circle-single])
   [props-table [{:name    "color"
                  :desc    "color"
                  :example "{:color color/color-pacific}"}
                 {:name    "inner-color"
                  :desc    "color"
                  :example "{:inner-color color/color-neutral-3}"}
                 {:name    "height"
                  :desc    "height units"
                  :example "{:height \"2rem\"}"}
                 {:name    "width"
                  :desc    "width units"
                  :example "{:width \"2rem\"}"}]]
   ($-> [icons/circle-halfgroup])
   [props-table [{:name    "color"
                  :desc    "color"
                  :example "{:color color/color-pacific}"}
                 {:name    "inner-color"
                  :desc    "color"
                  :example "{:inner-color color/color-neutral-3}"}
                 {:name    "height"
                  :desc    "height units"
                  :example "{:height \"2rem\"}"}
                 {:name    "width"
                  :desc    "width units"
                  :example "{:width \"2rem\"}"}]]
   ($-> [icons/circle-group])
   [props-table [{:name    "color"
                  :desc    "color"
                  :example "{:color color/color-pacific}"}
                 {:name    "inner-color"
                  :desc    "color"
                  :example "{:inner-color color/color-neutral-3}"}
                 {:name    "height"
                  :desc    "height units"
                  :example "{:height \"2rem\"}"}
                 {:name    "width"
                  :desc    "width units"
                  :example "{:width \"2rem\"}"}]]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Icons"]
   [tables/default {:headers [{:label    "Icon"
                               :key-path [:name]}
                              {:label    "Example"
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
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Default Table"]
   ($-> [tables/default {:headers [{:label    "Name"
                                    :key-path [:name]}
                                   {:label    "Tasks"
                                    :key-path [:tasks 0]}
                                   {:label    "Organization"
                                    :key-path [:organization 0 :org]}
                                   {:label    "State"
                                    :key-path [:state]}
                                   {:label    "Progress"
                                    :key-path [:element]}]
                         :content [{:id           1
                                    :name         "Example 1"
                                    :tasks        ["Being amazing"]
                                    :organization [{:org "Amazing Organization"}]
                                    :state        "On going"
                                    :element      [loaders/progress-bar {:percentage "75%"}]}
                                   {:id           2
                                    :name         "Example 2"
                                    :tasks        ["Cleaning"]
                                    :organization [{:org "Clean Organization"}]
                                    :state        "Done"
                                    :element      [loaders/progress-bar {:percentage "100%"}]}
                                   {:id           3
                                    :name         "Example 3"
                                    :tasks        ["Foo"]
                                    :organization [{:org "Bar Organization"}]
                                    :state        "Starting"
                                    :element      [loaders/progress-bar]}]
                         :footers [{:label "Name"
                                    :value "Total"}
                                   {:label "Tasks"
                                    :value nil}
                                   {:label "Organization"
                                    :value nil}
                                   {:label "Progress"
                                    :value nil}
                                   {:value [loaders/progress-bar {:percentage "58%"}]}]}])
   [props-table [{:name    "headers"
                  :desc    "vector"
                  :example "{:headers\n[{:label\"Name\"\n :key-path [:name]}\n{:label \"Tasks\"\n :key-path [:tasks 0]}\n{:label \"Organization\"\n :key-path [:organization 0 :org]}\n{:label \"State\"\n :key-path [:state]}\n{:label \"Progress\"\n :key-path [:element]}"}
                 {:name    "content"
                  :desc    "vector"
                  :example "{:content [{:id 1\n :name \"Example 1\"\n :tasks [\"Being amazing\"]\n :organization [{:org \"Amazing Organization\"}]\n :state \"On going\"\n :element [loaders/progress-bar {:percentage \"75%\"}]}\n{:id 2\n :name \"Example 2\"\n :tasks [\"Cleaning\"]\n :organization [{:org \"Clean Organization\"}]\n :state \"Done\"\n :element [loaders/progress-bar {:percentage \"100%\"}]}]}"}
                 {:name    "footers"
                  :desc    "vector"
                  :example "{:footers [{:label \"Name\"\n:value \"Total\"}\n{:label \"Tasks\"\n:value nil}\n{:label \"Organization\"\n:value nil}\n{:label \"Progress\"\n:value nil}\n{:value [loaders/progress-bar {:percentage \"58%\"}]}]}"}
                 {:name    "styles"
                  :desc    "map"
                  :example "{:styles {:margin \"1rem\"}}"}]]])

(defmethod page-contents :input []
  [:div
   [:h2.rds-header2 "Work in progress input fields"]

   [:div "Default"]
   [fields/input-field]
   [input/input]

   [:div "With label"]
   [fields/input-field {:label "Label"}]
   (let [content (r/atom "")]
     [(fn []
        [input/label-wrap
         [input/label {:style (if (not-empty @content) style/input-field-label-static style/input-field-label)} "Label"]
         [input/input {:on-change #(let [arvo (-> % .-target .-value)]
                                     (println arvo)
                                     (reset! content arvo))}]])
      content])

   [:div "With icon"]
   [fields/input-field {:icon          "search"
                        :icon-click-fn println}]
   [input/wrap-input-with-icons
    [input/input]
    [input/icon {:on-click println} "search"]]

   [:div "With label and placeholder"]
   [fields/input-field {:label       "Label"
                        :placeholder "Placeholder"}]
   [input/label-wrap
    [input/label "Label"]
    [input/input {:placeholder "Placeholder"}]]

   [:div "With label, placeholder and icon"]
   [fields/input-field {:label       "Label"
                        :placeholder "Placeholder"
                        :icon        "search"}]
   [input/label-wrap
    [input/label "Label"]
    [input/wrap-input-with-icons
     [input/input {:placeholder "Placeholder"}]
     [input/icon {:on-click println} "search"]]]

   [:div "With label, placeholder, icon and content"]
   [fields/input-field {:label       "Label"
                        :placeholder "Placeholder"
                        :icon        "search"
                        :content     "Content"}]
   [input/label-wrap
    [input/label "Label"]
    [input/wrap-input-with-icons
     [input/input {:placeholder   "Placeholder"
                   :default-value "Content"}]
     [input/icon {:on-click println} "search"]]]

   [:div "Invalid value"]
   [fields/input-field {:label          "Label"
                        :placeholder    "Placeholder"
                        :icon           "search"
                        :content        "Invalid value"
                        :error-messages ["Value has to be valid!"]}]

   [:div "Clearable"]
   [fields/input-field {:clearable? true}]
   (let [content (r/atom "Default content")]
     [(fn []
        [input/wrap-input-with-icons
         [input/input {:value     @content
                       :on-change #(let [arvo (-> % .-target .-value)]
                                     (println arvo)
                                     (reset! content arvo))}]
         [input/icon {:style    {:display (if (not-empty @content) "inline-block" "none")}
                      :on-click #(reset! content nil)} "clear"]])
      content])

   [:div "Clearable with icon"]
   [fields/input-field {:clearable?    true
                        :icon          "search"
                        :icon-click-fn println}]
   (let [content (r/atom "")]
     [(fn []
        [input/wrap-input-with-icons
         [input/input {:value     @content
                       :on-change #(reset! content (-> % .-target .-value))}]
         [input/icon {:style    {:display (if (not-empty @content) "inline-block" "none")}
                      :on-click #(reset! content nil)} "clear"]
         [input/icon {:on-click println} "search"]])
      content])])


;; MOLECULES

(def data-example (r/atom [{:items [{:label "Project 001"}
                                    {:label "Project 002"}
                                    {:label "Another project 003"}
                                    {:label "Example 004"}
                                    {:label "Short 005"}
                                    {:label "Longer project name than usually 006"}
                                    {:label "Project 007"}
                                    {:label "Project 008"}
                                    {:label "Project 009"}
                                    {:label "Project 010"}]}]))
(defmethod page-contents :fields []
  (let [example-data (r/atom @data-example)]
    (fn []
      [:div
       [:p.rds-quote "Fields provide a ways of input and output. Input, such as typing, selecting or dragging and dropping can be used to provide several formats of information."]
       [dividers/default {:styles {:margin-top    "2rem"
                                   :margin-bottom "2rem"}}]
       [:h2.rds-header2 "Output"]
       [:h3.rds-header3 "Keyvalue"]
       ($-> [fields/keyvalue {:label   "Title"
                              :content "Value"}])
       [props-table [{:name    "label"
                      :desc    "string"
                      :example "{:title \"Title\"}"}
                     {:name    "content"
                      :desc    "string"
                      :example "{:content \"Value\"}"}]]

       [:h3.rds-header3 "Iconvalue"]
       ($-> [fields/iconvalue {:icon    "date_range"
                               :content "29.09.2017 - 01.12.2022"}])
       [props-table [{:name    "icon"
                      :desc    "string"
                      :example "{:icon \"date_range\"}"}
                     {:name    "content"
                      :desc    "string"
                      :example "{:content \"29.09.2017 - 01.12.2022\"}"}]]

       [:h3.rds-header3 "List-element"]
       ($-> [fields/list-element {:label   "Label"
                                  :desc    "Description"
                                  :info    "Additional information"
                                  :buttons [[icons/clickable {:name "clear"}]]}])
       [props-table [{:name    "label"
                      :desc    "string"
                      :example "{:label \"Label\"}"}
                     {:name    "desc"
                      :desc    "string"
                      :example "{:desc \"Description\"}"}
                     {:name    "info"
                      :desc    "string"
                      :example "{:info \"Additional information\"}"}
                     {:name    "buttons"
                      :desc    "vector"
                      :example "[[icons/clickable {:name \"clear\"}]]"}]]

       [:h3.rds-header3 "List-element (with sub-content)"]
       ($-> [fields/list-element {:label       "Label"
                                  :desc        "Description"
                                  :info        "Additional information"
                                  :sub-content [[fields/input-field {:label "Label"}]
                                                [fields/input-field {:label "Description"}]]
                                  :buttons     [[icons/clickable {:name "clear"}]]}])
       [props-table [{:name    "label"
                      :desc    "string"
                      :example "{:label \"Label\"}"}
                     {:name    "desc"
                      :desc    "string"
                      :example "{:desc \"Description\"}"}
                     {:name    "info"
                      :desc    "string"
                      :example "{:info \"Additional information\"}"}
                     {:name    "buttons"
                      :desc    "vector"
                      :example "[[icons/clickable {:name \"clear\"}]]"}
                     {:name    "sub-content"
                      :desc    "vector"
                      :example ":sub-content [[fields/input-field {:label \"Label\"}] [fields/input-field {:label \"Description\"}]]"}]]

       [dividers/default {:styles {:margin-top    "2rem"
                                   :margin-bottom "2rem"}}]
       [:h2.rds-header2 "Input"]
       [:h3.rds-header3 "Input-field"]
       [tables/default {:headers [{:label    "Name"
                                   :key-path [:name]}
                                  {:label    "Example"
                                   :key-path [:example]}]
                        :content [{:name    "Default"
                                   :example [fields/input-field]}
                                  {:name    "With label"
                                   :example [fields/input-field {:label "Label"}]}
                                  {:name    "With icon"
                                   :example [fields/input-field {:icon          "search"
                                                                 :icon-click-fn println}]}
                                  {:name    "With label and placeholder"
                                   :example [fields/input-field {:label       "Label"
                                                                 :placeholder "Placeholder"}]}
                                  {:name    "With label, placeholder and icon"
                                   :example [fields/input-field {:label       "Label"
                                                                 :placeholder "Placeholder"
                                                                 :icon        "search"}]}
                                  {:name    "With label, placeholder, icon and content"
                                   :example [fields/input-field {:label       "Label"
                                                                 :placeholder "Placeholder"
                                                                 :icon        "search"
                                                                 :content     "Content"}]}
                                  {:name    "Invalid value"
                                   :example [fields/input-field {:label          "Label"
                                                                 :placeholder    "Placeholder"
                                                                 :icon           "search"
                                                                 :content        "Invalid value"
                                                                 :error-messages ["Value has to be valid!"]}]}
                                  {:name    "Clearable"
                                   :example [fields/input-field {:clearable? true}]}
                                  {:name    "Clearable with icon"
                                   :example [fields/input-field {:clearable?    true
                                                                 :icon          "search"
                                                                 :icon-click-fn println}]}]}]
       ($-> [fields/input-field {:label         "Input with label and icon"
                                 :placeholder   "Placeholder"
                                 :icon          "search"
                                 :on-change-fn  (fn [e] (println e))
                                 :on-blur-fn    (fn [e] (println e))
                                 :icon-click-fn (fn [] (println (str "Icon Clicked")))}])
       [props-table [{:name    "label"
                      :desc    "string"
                      :example "{:label \"Label\"}"}
                     {:name    "content"
                      :desc    "string"
                      :example "{:content \"Content\"}"}
                     {:name    "placeholder"
                      :desc    "string"
                      :example "{:placeholder \"Placeholder\"}"}
                     {:name    "icon"
                      :desc    "string"
                      :example "{:icon \"search\"}"}
                     {:name    "icon-click-fn"
                      :desc    "function"
                      :example "{:icon-click-fn (fn [] (println (str \"Icon Clicked\")))}"}
                     {:name    "on-change-fn"
                      :desc    "function"
                      :example "{:on-blur-fn (fn [e] (println e))}"}
                     {:name    "on-blur-fn"
                      :desc    "function"
                      :example "{:on-blur-fn (fn [e] (println e))}"}]]

       [:h3.rds-header3 "Multiline-field"]
       ($-> [fields/multiline-field {:label         "Multiline-field"
                                     :on-change-fn  (fn [e] (println e))
                                     :on-blur-fn    (fn [e] (println e))
                                     :icon-click-fn (fn [] (println (str "Icon Clicked")))}])
       [props-table [{:name    "label"
                      :desc    "string"
                      :example "{:label \"Label\"}"}
                     {:name    "content"
                      :desc    "string"
                      :example "{:content \"Content\"}"}
                     {:name    "placeholder"
                      :desc    "string"
                      :example "{:placeholder \"Placeholder\"}"}
                     {:name    "icon"
                      :desc    "string"
                      :example "{:icon \"search\"}"}
                     {:name    "icon-click-fn"
                      :desc    "function"
                      :example "{:icon-click-fn (fn [] (println (str \"Icon Clicked\")))}"}
                     {:name    "on-change-fn"
                      :desc    "function"
                      :example "{:on-blur-fn (fn [e] (println e))}"}
                     {:name    "on-blur-fn"
                      :desc    "function"
                      :example "{:on-blur-fn (fn [e] (println e))}"}]]
       [:h3.rds-header3 "Dropdown-menu"]
       (let [selected (r/atom (first (:items (first @example-data))))]
         [(fn []
            ($-> [fields/dropdown-menu {:label            "Dropdown menu"
                                        :placeholder      "Select"
                                        :items            @example-data
                                        :on-select-fn     (fn [e]
                                                            (reset! selected e)
                                                            (println "Item selected: " @selected))
                                        :preselected-item @selected
                                        :empty-allowed?   true}]))])
       [props-table [{:name    "label"
                      :desc    "string"
                      :example "{:title \"Dropdown menu\"}"}
                     {:name    "placeholder"
                      :desc    "string"
                      :example "{:placeholder \"Select\"}"}
                     {:name    "items"
                      :desc    "vector"
                      :example "{:item-list [{:section \"Sub-projects\"\n:items [{:label \"Sub-project 001\"}\n{:label \"Sub-project 002\"}]}]}"}
                     {:name    "on-select-fn"
                      :desc    "function"
                      :example "{:selected-fn (fn [e] (println \"Item selected: \" e)"}
                     {:name    "preselected-item"
                      :desc    "string"
                      :example "{:preselected-item {:label \"Project 001\"}}"}
                     {:name    "error-messages"
                      :desc    "vector"
                      :example "{:error-messages [\"Value has to be valid!\"]}"}
                     {:name    "disabled"
                      :desc    "boolean"
                      :example "{:disabled true}"}
                     {:name    "styles"
                      :desc    "map"
                      :example "{:styles {:margin 0}}"}]]
       [:h3.rds-header3 "Dropdown-menu-simple"]
       ($-> (let [values [{:id 1 :value "First"}
                          {:id 2 :value "Second"}]]
              [fields/dropdown-menu-simple {:label             "Dropdown, simple"
                                            :selected-fn       (fn [e] (js/alert (str "Selected value: " e)))
                                            :options           values
                                            :no-selection-text "- No selection -"}]))
       [props-table [{:name    "label"
                      :desc    "string"
                      :example "{:label \"Label\"}"}
                     {:name    "selected-fn"
                      :desc    "function"
                      :example "{:selected-fn (fn [e] (js/alert (str \"Selected value: \" e)))}"}
                     {:name    "options"
                      :desc    "vector"
                      :example "{:options [{:id 1 :value \"First\"}\n{:id 2 :value \"Second\"}]}"}
                     {:name    "default-value"
                      :desc    "string"
                      :example "{:default-value \"First\"}"}
                     {:name    "no-selection-text"
                      :desc    "string"
                      :example "{:no-selection-text \"- No selection -\"}"}]]
       [:h3.rds-header3 "Dropdown-multiple"]
       ($-> (let [items [{:label "John" :value :john} {:label "Sandra" :value :sandra} {:label "Matt" :value :matt} {:label "Will" :value :will}
                         {:label "Kate" :value :kate} {:label "Alex" :value :alex} {:label "Keith" :value :keith} {:label "Melinda" :value :melinda}]]
              [fields/dropdown-multiple {:label             "Multiselect dropdown"
                                         :on-select-fn      (fn [e] (println (str "Selected values: " e)))
                                         :items             items
                                         :placeholder       "- Select values -"
                                         :preselected-items [(first items)]}]))
       [props-table [{:name    "label"
                      :desc    "string"
                      :example "{:label \"Label\"}"}
                     {:name    "placeholder"
                      :desc    "string"
                      :example "{:placeholder \"Placeholder\"}"}
                     {:name    "on-select-fn"
                      :desc    "function"
                      :example "{:on-select-fn (fn [e] (println (str \"Selected values: \" e)))}"}
                     {:name    "items"
                      :desc    "vector"
                      :example "{:options [{:id 1 :label \"First\"}\n{:id 2 :label \"Second\"}]}"}
                     {:name    "preselected-items"
                      :desc    "vector"
                      :example "{:preselected-items [{:id 1 :label \"First\"}]}"}]]
       [:h3.rds-header3 "Drag-n-drop-area"]
       ($-> [fields/drag-n-drop-area {:help-text "Drag-n-drop files or click here to upload." :on-drop-fn (fn [e] (println e))}])
       [props-table [{:name    "help-text"
                      :desc    "string"
                      :example "{:help-text \"Drag-n-drop files or click here to upload.\"}"}
                     {:name    "on-drop-fn"
                      :desc    "function"
                      :example "{:on-drop-fn (fn [e] (println e))}"}]]
       [:h3.rds-header3 "Breadcrumb"]
       ($-> [fields/breadcrumb {:current-page {:label "X-Files"
                                               :child {:label "Animals"
                                                       :child {:label "Flying squirrel investigation"
                                                               :child nil}}}
                                :click-fn     (fn [e] (println e))}])
       [props-table [{:name    "current-page"
                      :desc    "map"
                      :example "{:current-page {:label \"X-Files\",  :child {:label \"Animals\", :child {:label \"Flying squirrel investigation\", :child nil}}}"}
                     {:name    "click-fn"
                      :desc    "function"
                      :example "{:click-fn (fn [e] (println e))}"}]]])))

(def modal-example
  (let [modal-open (r/atom false)]
    (fn []
      ($->
        [:div
         (when @modal-open
           [modals/wrapper
            [modals/header
             [:h2 "Modal example"]
             [:div
              [icons/clickable {:name   "edit"
                                :styles {:margin "0 0.5rem 0 0"}}]
              [icons/clickable {:name        "close"
                                :on-click-fn (fn [] (swap! modal-open not))}]]]
            [modals/content
             [:p "Modal content text."]]
            [modals/footer
             [buttons/default-small {:content     "Cancel"
                                     :styles      {:margin-right "0.5rem"}
                                     :on-click-fn (fn [] (swap! modal-open not))}]
             [buttons/primary-small {:content     "Ok"
                                     :on-click-fn (fn [] (swap! modal-open not))}]]])

         [buttons/default {:content     "Open modal"
                           :on-click-fn (fn [] (swap! modal-open not))}]]))))

(defmethod page-contents :modals []
  [:div
   [:p.rds-quote "A modal displays content that temporarily blocks interactions with the main view."]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Default modal"]
   [modal-example]
   [props-table [{:name    "header"
                  :desc    "string"
                  :example "{:header \"Confirm modal\"}"}
                 {:name    "header-buttons"
                  :desc    "vector"
                  :example "{:header-buttons\n[[fields/input-field {:label \"First\"\n:placeholder \"Placeholder\"}]\n[fields/input-field {:label \"Second\"\n:placeholder \"Placeholder\"}]\n[fields/input-field {:label \"Third\"\n:placeholder \"Placeholder\"}]]}"}
                 {:name    "content"
                  :desc    "vector"
                  :example "{:content\n[[fields/input-field {:label \"First\"\n:placeholder \"Placeholder\"}]\n[fields/input-field {:label \"Second\"\n:placeholder \"Placeholder\"}]\n[fields/input-field {:label \"Third\"\n:placeholder \"Placeholder\"}]]}"}
                 {:name    "footer"
                  :desc    "vector"
                  :example "{:footer\n[[buttons/outline {:content \"Cancel\"\n:on-click-fn (fn [] (swap! modal-open not))}]\n[buttons/primary {:content \"Confirm\"\n:on-click-fn (fn [] (swap! modal-open not))\n:styles {:margin-left \"16px\"}}]]}"}
                 {:name    "is-open"
                  :desc    "boolean"
                  :example "{:is-open false}"}
                 {:name    "styles"
                  :desc    "vector"
                  :example "{:styles {:max-width \"640px\"}}"}]]])

(def notification-info
  {:margin           0
   :display          "flex"
   :align-content    "center"
   :padding          spacing/space-x-small-rem
   :color            color/color-white
   :position         "relative"
   :background-color color/color-primary})

(def notification-error
  (merge notification-info {:background color/state-error}))

(def notification-warning
  (merge notification-info {:background color/state-warning}))

(def notification-success
  (merge notification-info {:background color/state-success}))

(defmethod page-contents :notifications []
  [:div
   [:p.rds-quote "Notifiations are used to share information or feedback about system or processes to the user."]
   [:p "Notifications can easily distract users from main tasks, which is why they need to be meaningful, understandable and useful. Notifications can guide towards specific actions or provide actions, such as 'refresh' or 'try again'."]

   ($->
     [:div (stylefy/use-style {:margin           0
                               :display          "flex"
                               :align-content    "center"
                               :padding          spacing/space-x-small-rem
                               :color            color/color-white
                               :position         "relative"
                               :background-color color/state-warning})
      [:i.material-icons (stylefy/use-style {:padding-right spacing/space-x-small-rem}) "warning"]
      [:div (stylefy/use-style {:flex-grow     1
                                :padding-right spacing/space-x-small-rem})
       [:span (stylefy/use-style {:display     "block"
                                  :font-weight font/font-weight-semi-bold}) "Couldn't fetch all the data"]
       [:small "Try reloading page again"]]
      [:i.material-icons (stylefy/use-style {:cursor "pointer"}) "close"]])


   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Variations"]
   [tables/default {:headers [{:label    "Type"
                               :key-path [:type]}
                              {:label    "Icon"
                               :key-path [:icon]}
                              {:label    "Color"
                               :key-path [:color]}
                              {:label    "Example"
                               :key-path [:example]}]
                    :content [{:type    "Info"
                               :icon    [:small "info"]
                               :color   [:small "color-primary"]
                               :example [:div (stylefy/use-style notification-info)
                                         [:i.material-icons (stylefy/use-style {:padding-right spacing/space-x-small-rem}) "info"]
                                         [:div (stylefy/use-style {:flex-grow     1
                                                                   :padding-right spacing/space-x-small-rem})
                                          [:span (stylefy/use-style {:display     "block"
                                                                     :font-weight font/font-weight-semi-bold}) "Info"]]
                                         [:i.material-icons (stylefy/use-style {:justify-self "flex-end"
                                                                                :cursor       "pointer"}) "close"]]}
                              {:type    "Success"
                               :icon    [:small "check"]
                               :color   [:small "state-success"]
                               :example [:div (stylefy/use-style notification-success)
                                         [:i.material-icons (stylefy/use-style {:padding-right spacing/space-x-small-rem}) "check"]
                                         [:div (stylefy/use-style {:flex-grow     1
                                                                   :padding-right spacing/space-x-small-rem})
                                          [:span (stylefy/use-style {:display     "block"
                                                                     :font-weight font/font-weight-semi-bold}) "Success"]]
                                         [:i.material-icons (stylefy/use-style {:justify-self "flex-end"
                                                                                :cursor       "pointer"}) "close"]]}
                              {:type    "Warning"
                               :icon    [:small "warning"]
                               :color   [:small "state-warning"]
                               :example [:div (stylefy/use-style notification-warning)
                                         [:i.material-icons (stylefy/use-style {:padding-right spacing/space-x-small-rem}) "warning"]
                                         [:div (stylefy/use-style {:flex-grow     1
                                                                   :padding-right spacing/space-x-small-rem})
                                          [:span (stylefy/use-style {:display     "block"
                                                                     :font-weight font/font-weight-semi-bold}) "Warning"]]
                                         [:i.material-icons (stylefy/use-style {:justify-self "flex-end"
                                                                                :cursor       "pointer"}) "close"]]}
                              {:type    "Error"
                               :icon    [:small "error"]
                               :color   [:small "state-error"]
                               :example [:div (stylefy/use-style notification-error)
                                         [:i.material-icons (stylefy/use-style {:padding-right spacing/space-x-small-rem}) "error"]
                                         [:div (stylefy/use-style {:flex-grow     1
                                                                   :padding-right spacing/space-x-small-rem})
                                          [:span (stylefy/use-style {:display     "block"
                                                                     :font-weight font/font-weight-semi-bold}) "Error"]]
                                         [:i.material-icons (stylefy/use-style {:justify-self "flex-end"
                                                                                :cursor       "pointer"}) "close"]]}]}]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]

   [:div (stylefy/use-style {:display         "flex"
                             :justify-content "space-between"})
    [:div
     [:h2.rds-header2 "Format"]
     [:h4 "Title"]
     [:p "Title should be short and descriptive (e.g. 'Couldn't load data')."]
     [:h4 "Message"]
     [:p "Message is optional. If title isn't descriptive enough, and you need to include troubleshooting actions or next steps, you should use message."]
     [:h4 "Dismissal"]
     [:p "Notifications should disappear after five seconds. Inline notifications, such as form errors, are visible until data is correct."]]
    [:div (stylefy/use-style {:align-self "center"})
     [:div (stylefy/use-style example-box)
      [:div (stylefy/use-style notification-warning)
       [:i.material-icons (stylefy/use-style {:padding-right spacing/space-x-small-rem}) "warning"]
       [:div (stylefy/use-style {:flex-grow     1
                                 :padding-right spacing/space-x-small-rem})
        [:span (stylefy/use-style {:display     "block"
                                   :font-weight font/font-weight-semi-bold}) "Couldn't fetch all the data"]
        [:small "Try reloading page again"]]
       [:i.material-icons (stylefy/use-style {:cursor "pointer"}) "close"]]
      [:div (stylefy/use-style (merge example-box-text {:color color/state-success}))
       [:i.material-icons (stylefy/use-style {:padding-right spacing/space-x-small-rem}) "check"]
       [:span "Correct"]]]
     [:div (stylefy/use-style example-box)
      [:div (stylefy/use-style notification-info)
       [:i.material-icons (stylefy/use-style {:padding-right spacing/space-x-small-rem}) "error"]
       [:div (stylefy/use-style {:flex-grow     1
                                 :padding-right spacing/space-x-small-rem})
        [:span (stylefy/use-style {:display     "block"
                                   :font-weight font/font-weight-semi-bold}) "ERROR 412 - Some of the data could not be displayed on the field below"]
        [:small "We are sorry :("]]
       [:i.material-icons (stylefy/use-style {:cursor "pointer"}) "close"]]
      [:div (stylefy/use-style (merge example-box-text {:color color/state-error}))
       [:i.material-icons (stylefy/use-style {:padding-right spacing/space-x-small-rem}) "close"]
       [:span "Incorrect"]]]]]


   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:div (stylefy/use-style {:display         "flex"
                             :justify-content "space-between"})
    [:div
     [:h2.rds-header2 "Placement"]
     [:h4 "Default"]
     [:p "All non-modal notifications are typically attached below top header."]
     [:h4 "Content bound notifications"]
     [:p "Notifications for modals and forms are attached to related header."]]
    [:div (stylefy/use-style {:align-self "center"})
     [:div (stylefy/use-style example-box)
      [:div (stylefy/use-style {:background "hsla(0, 0%, 20%, 0.8)"
                                :padding    "1.5rem"})
       [:div (stylefy/use-style {:position         "relative"
                                 :display          "flex"
                                 :flex-direction   "column"
                                 :pointer-events   "auto"
                                 :background-color "#fff"
                                 :background-clip  "padding-box"
                                 :border           "1px solid rgba(0,0,0,.2)"
                                 :border-radius    ".3rem"
                                 :outline          "0"})
        [modals/header
         [:h2 "Modal example"]
         [:div (stylefy/use-style {:display "flex"})
          [icons/clickable {:name "close"}]]]
        [:div (stylefy/use-style notification-error)
         [:i.material-icons (stylefy/use-style {:padding-right spacing/space-x-small-rem}) "error"]
         [:div (stylefy/use-style {:flex-grow     1
                                   :padding-right spacing/space-x-small-rem})
          [:span (stylefy/use-style {:display     "block"
                                     :font-weight font/font-weight-semi-bold}) "Invalid value"]
          [:small "Please provide missing information"]]
         [:i.material-icons (stylefy/use-style {:cursor "pointer"}) "close"]]
        [modals/content
         [fields/input-field {:label       "Foo"
                              :placeholder "Placeholder"
                              :content     "Some text"
                              :styles      {:padding-bottom "1rem"}}]
         [fields/input-field {:label          "Bar"
                              :placeholder    "Placeholder"
                              :content        "Invalid text"
                              :error-messages ["Value has to be valid!"]}]]
        [modals/footer
         [buttons/default-small {:content "Cancel"
                                 :styles  {:margin-right "0.5rem"}}]
         [buttons/primary-small {:disabled? true
                                 :content   "Save"}]]]]
      [:div (stylefy/use-style (merge example-box-text {:color color/state-success}))
       [:i.material-icons (stylefy/use-style {:padding-right spacing/space-x-small-rem}) "check"]
       [:span "Correct"]]]]]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Style example"]

   [:p "(def notification-info
          {:margin           0
           :display          \"flex\"
           :align-content    \"center\"
           :padding          spacing/space-x-small-rem
           :color            color/color-white
           :position         \"relative\"
           :background-color color/color-primary})"]
   [:p "(def notification-error
          (merge notification-info {:background color/state-error}))"]

   [:p "(def notification-warning
          (merge notification-info {:background color/state-warning}))"]

   [:p "(def notification-success
          (merge notification-info {:background color/state-success}))"]])

;; ORGANISMS

(defmethod page-contents :grid []
  [:div
   [:p.rds-quote "Grids are used to create context layout on a page."]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Grid-cell"]
   ($-> [grid/grid-cell {:col-start 1
                         :col-end   4
                         :style     {:background-color "whitesmoke"
                                     :text-align       "center"
                                     :border           "1px solid silver"}} [:p "test"]])
   [props-table [{:name    "row-start"
                  :desc    "int"
                  :example "{:row-start 1}"}
                 {:name    "row-end"
                  :desc    "int"
                  :example "{:row-end 4}"}
                 {:name    "col-start"
                  :desc    "int"
                  :example "{:col-start 1}"}
                 {:name    "col-end"
                  :desc    "int"
                  :example "{:col-end 4}"}
                 {:name    "styles"
                  :desc    "map"
                  :example "{:styles {:margin \"1rem\"}}"}
                 {:name    "content"
                  :desc    "components"
                  :example "[:p \"Content text\"]"}]]
   [dividers/default {:styles {:margin-top    "2rem"
                               :margin-bottom "2rem"}}]
   [:h2.rds-header2 "Grid-wrap"]
   ($-> [grid/grid-wrap {:rows 3
                         :cols 3}
         [grid/grid-cell {:col-start 1
                          :col-end   4
                          :style     {:background-color "whitesmoke"
                                      :text-align       "center"
                                      :border           "1px solid silver"}} [:p "test"]]
         [:div {:style {:background-color "whitesmoke"
                        :text-align       "center"
                        :border           "1px solid silver"}} [:p "2"]]
         [:div {:style {:background-color "whitesmoke"
                        :text-align       "center"
                        :border           "1px solid silver"}} [:p "3"]]
         [:div {:style {:background-color "whitesmoke"
                        :text-align       "center"
                        :border           "1px solid silver"}} [:p "4"]]
         [:div {:style {:background-color "whitesmoke"
                        :text-align       "center"
                        :border           "1px solid silver"}} [:p "5"]]
         [:div {:style {:background-color "whitesmoke"
                        :text-align       "center"
                        :border           "1px solid silver"}} [:p "6"]]
         [:div {:style {:background-color "whitesmoke"
                        :text-align       "center"
                        :border           "1px solid silver"}} [:p "7"]]])
   [props-table [{:name    "rows"
                  :desc    "int"
                  :example "{:rows 3}"}
                 {:name    "cols"
                  :desc    "int"
                  :example "{:cols 3}"}
                 {:name    "styles"
                  :desc    "map"
                  :example "{:styles {:margin \"1rem\"}}"}
                 {:name    "content"
                  :desc    "components"
                  :example "[grid/grid-cell {:col-start 1\n:col-end 4\n:style {:background-color \"whitesmoke\"\n:text-align \"center\"\n:border \"1px solid silver\"}} [:p \"test\"]]"}]]])


(defmethod page-contents :headings []
  [:div])
