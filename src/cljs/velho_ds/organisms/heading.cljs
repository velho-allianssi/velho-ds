(ns velho-ds.organisms.heading
  (:require [stylefy.core :as stylefy]
            [clojure.string :as string]
            [velho-ds.organisms.style.heading :as style]
            [velho-ds.tokens.font :as fonts]
            [velho-ds.tokens.font-size :as font-sizes]
            [velho-ds.atoms.icon :as icons]
            [velho-ds.molecules.field :as fields]
            [velho-ds.organisms.grid :as grid]
            [reagent.core :as r]))

(defn main [content]
  [:header.header-style
   [:h2.heading-style content]])

(defn content-heading [{:keys [status info actions footer]}]
  [grid/grid-wrap {:rows 3
                   :cols 3
                   :styles style/content-heading}
   (when status
     (into [grid/grid-cell {:col-start 1, :col-end 4, :styles {:padding-bottom "1px"}}]
           (for [item status] ^{:key item} item)))
   [grid/grid-cell {:col-start 1, :col-end 4, :styles style/content-heading-info}
    [:p (stylefy/use-style style/content-heading-info-item) (get info :type)]
    [:h1 (stylefy/use-style style/content-heading-info-item) (get info :name)]
    [:h2 (stylefy/use-style style/content-heading-info-item) (get info :footnote)]]
   (when actions
     (into [grid/grid-cell {:col-start 4, :col-end 4, :styles style/content-heading-actions}]
           (for [item actions] ^{:key item} item)))
   [grid/grid-cell {:col-start 1, :col-end 4}
    (when footer
      (into [:ul (stylefy/use-style style/content-heading-footer)]
            (for [item footer] ^{:key item} [:li (stylefy/use-sub-style style/content-heading-footer :li) item])))]])

(defn- search-in-list [collection search-word]
  (filter #(string/includes? (string/lower-case %) search-word) collection))

(defn page-heading [{:keys [current-page
                            search-placeholder
                            search-initial-select
                            search-fn
                            search-results
                            search-result-clicked-fn
                            sub-content
                            breadcrumb-click-fn]}]
  (let [search-selected-item (r/atom [])
        search-text (r/atom nil)
        sub-content-open? (r/atom false)
        empty (fn []
                (reset! search-text nil)
                (reset! search-selected-item []))
        breadcrumb-clicked (fn [page]
                             (when breadcrumb-click-fn (breadcrumb-click-fn page)))
        pages (r/atom [])
        get-pages (fn [map]
                    (loop [page map]
                      (when (:label page)
                        (swap! pages conj page)
                        (recur (:child page)))))]
    (get-pages current-page)
    (println (type search-text))
    (fn []
      [:header
       [grid/grid-wrap {:rows 1
                        :cols 4
                        :styles style/page-heading}
        (into [grid/grid-cell {:col-start 1
                               :col-end 4
                               :styles style/page-heading-breadcrumb}]
              (for [page @pages]
                (if (not= page (last @pages))
                  ^{:key page} [:a {:on-click #(breadcrumb-clicked page)
                                    :style style/breadcrumb} (:label page)
                                [:h2 {:style style/breadcrumb-breaker} "/"]]
                  [:span {:style {:display "inline-block"}}
                   [:h2 (stylefy/use-style style/breadcrumb-current-page) (:label page)]
                   [icons/clickable {:name (if @sub-content-open? "arrow_drop_up" "arrow_drop_down")
                                     :styles {:position "relative"
                                              :top "5px"}
                                     :on-click-fn #(swap! sub-content-open? not)}]])))
        [grid/grid-cell {:col-start 4
                         :col-end 4}
         [fields/dropdown-menu {:placeholder search-placeholder
                                :icon (if @search-text "close" "search")
                                :item-list search-results
                                :on-item-select-fn search-result-clicked-fn
                                :on-change-fn #(do (search-fn %)
                                                   (reset! search-text %))
                                :on-blur-fn #(reset! search-text nil)
                                :selected-item @search-selected-item
                                :icon-click-fn empty}]
         #_[:div {:class "search-dropdown"}
          [fields/input-field {:placeholder placeholder
                               :icon (if @search-text "close" "search")
                               :content @search-text
                               :on-change-fn search
                               :icon-click-fn #(empty %)
                               :on-focus-fn #(do
                                               (addEventListener)
                                               (reset! search-open? (not (nil? @search-text))))}]]]]
       #_[:div {:style {:position "relative"
                      :display "flex"
                      :justify-content "flex-end"}}
        (into [:div (stylefy/use-style (merge style/page-heading-container-info
                                              {:display (if @search-open? "block" "none")}))
               (when (< (count @search-results) 1) [:p search-no-results-msg])]
              (for [section @search-results]
                (into [:ul (stylefy/use-style style/search-results {:class "search-dropdown"})
                       [:li (stylefy/use-style style/search-results-header {:class "search-dropdown"
                                                                            :on-click #(search-result-clicked section {:search-text @search-text})})
                        [:p (stylefy/use-style style/search-results-header-item {:class "search-dropdown"}) (str (get section :section) " (" (count (get section :items)) ")")]
                        [icons/clickable {:name "arrow_forward"
                                          :on-click-fn #(search-result-clicked section @search-text)
                                          :styles {:display "inline-block"
                                                   :top "6px"
                                                   :position "relative"
                                                   :color "inherit"}}]]
                       (doall (for [item (if (nil? search-results-show) (get section :items) (take search-results-show (get section :items)))]
                                ^{:key item} [:li (stylefy/use-style style/search-results-item {:on-click #(search-result-clicked section item)
                                                                                                :class "search-dropdown"})
                                              [:span (stylefy/use-sub-style style/search-results-item :span {:class "search-dropdown"}) (get item :label)]]))])))]
       (into [:div (stylefy/use-style (merge style/page-heading-container
                                             {:display (if @sub-content-open? "block" "none")}))]
             (for [item sub-content] ^{:key item} item))])))