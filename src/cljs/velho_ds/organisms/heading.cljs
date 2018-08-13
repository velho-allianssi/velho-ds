(ns velho-ds.organisms.heading
  (:require [stylefy.core :refer [use-style]]
            [stylefy.core :as stylefy]
            [velho-ds.tokens.font :as fonts]
            [velho-ds.tokens.font-size :as font-sizes]
            [velho-ds.atoms.icon :as icons]
            [velho-ds.molecules.field :as fields]
            [velho-ds.organisms.grid :as grid]))

(defn main [content]
  [:header.header-style
   [:h2.heading-style content]])

(defn content-heading [{:keys [status info actions footer]}]
  [grid/grid-wrap {:rows 3
                   :cols 3
                   :styles {:padding "0.5rem 1.5rem"
                            :background "white"
                            :grid-template-rows "0fr"}}
   (when status
     (into [grid/grid-cell {:col-start 1, :col-end 4, :styles {:padding-bottom "1px"}}]
           (for [item status] ^{:key item} item)))
   [grid/grid-cell {:col-start 1, :col-end 3, :styles {:line-height "1.5rem"
                                                       :padding "0.875rem 0"}}
    [:p (use-style {:margin 0
                    :line-height "inherit"}) (get info :type)]
    [:h1 (use-style {:margin 0
                     :line-height "inherit"}) (get info :name)]
    [:h2 (use-style {:margin 0
                     :line-height "inherit"}) (get info :footnote)]]
   (when actions
     (into [grid/grid-cell {:col-start 3, :col-end 4, :styles {:min-width "7.5rem" :align-self "center", :justify-self "right"}}]
           (for [item actions] ^{:key item} item)))
   [grid/grid-cell {:col-start 1, :col-end 4}
    (when footer
      (into [:ul (use-style {:padding 0
                             :margin 0
                             :list-style "none"})]
            (for [item footer] ^{:key item} [:li (use-style {:display "inline-block"
                                                             :padding "0 0.25rem 0.25rem 0"})
                                             item])))]])

(defn page-heading [{:keys [current-page parent-pages search-fn]}]
  [:header
   [grid/grid-wrap {:rows 1
                    :cols 4
                    :styles {:padding 0
                             :margin 0}}
    [grid/grid-cell {:col-start 1
                     :col-end 3
                     :styles {:align-self "center"
                              :line-height "1rem"
                              :position "relative"}}
     [:h2 {:style {:margin 0
                   :color "blue"
                   :display "inline-block"
                   :padding-right "8px"}} "Seppio"]
     [:h2 {:style {:margin 0
                   :display "inline-block"
                   :padding-right "8px"}} "/"]
     [:h2 {:style {:margin 0
                   :display "inline-block"
                   :padding-right "0"}} "Scrumbread"]
     [icons/clickable {:name "arrow_drop_down"
                       :styles {:position "relative"
                               :top "5px"}}]
     #_[fields/dropdown-menu {:default-value "Flying squirrel investigation"
                            :options [{:id 1 :value "Flying squirrel investigation"}
                                      {:id 2 :value "Regular squirrel investigation"}]}]]
    [grid/grid-cell {:col-start 4
                     :col-end 4
                     :styles {:align-self "center"}}
     [fields/input-field {:placeholder "Search"
                          :icon "search"
                          :styles {:min-width "128px"}}]]]])