(ns velho-ds.organisms.heading
  (:require [stylefy.core :as stylefy]
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

(defn page-heading [{:keys [current-page search-input search-fn search-results search-results-show search-result-clicked-fn search-header-fn sub-content]}]
  (let [search-text (r/atom search-input)
        siblings-open? (r/atom (if @search-text true false))
        search (fn [val]
                 (reset! search-text val)
                 (when search-fn (search-fn @search-text)))
        empty (fn []
                (reset! search-text ""))
        result-select (fn [item]
                        (when search-result-clicked-fn (search-result-clicked-fn item)))
        pages (r/atom [])
        get-pages (fn [map]
                    (loop [page map]
                      (when (:label page)
                        (swap! pages conj (:label page))
                        (recur (:child page)))))
        search-header-clicked (fn [header]
                                (when search-header-fn (search-header-fn header)))]
    (get-pages current-page)
    (search search-input)
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
                  ^{:key page} [:a {:href "#"
                                    :style style/breadcrumb} page
                                [:h2 {:style style/breadcrumb-braker} "/"]]
                  [:span {:style {:display "inline-block"}}
                   [:h2 (stylefy/use-style style/breadcrumb-current-page) page]
                   [icons/clickable {:name (if @siblings-open? "arrow_drop_up" "arrow_drop_down")
                                     :styles {:position "relative"
                                              :top "5px"}
                                     :on-click-fn #(swap! siblings-open? not)}]])))
        [grid/grid-cell {:col-start 4
                         :col-end 4}
         [fields/input-field {:placeholder "Search"
                              :icon "search"
                              :content @search-text
                              :on-change-fn search
                              :icon-click-fn empty}]]]
       [:div {:style {:position "relative"
                      :display "flex"
                      :justify-content "flex-end"}}
        (into [:div (stylefy/use-style (merge style/page-heading-container-info
                                              {:display (if (or (nil? @search-text) (= @search-text "")) "none" "block")}))]
              (for [section @search-results]
                (into [:ul (stylefy/use-style style/search-results)
                       [:div
                        [:p (stylefy/use-style style/search-results-header) (str (get section :section) " (" (count (get section :items)) ")")]
                        [icons/clickable {:name "chevron_right"
                                          :on-click-fn search-header-clicked
                                          :styles {:display "inline-block"
                                                   :top "6px"
                                                   :position "relative"}}]]]
                      (for [item (if (nil? search-results-show) (get section :items) (take search-results-show (get section :items)))]
                        ^{:key item} [:li (merge (stylefy/use-style style/search-results-item) {:on-click #(result-select %)})
                                      [:span (stylefy/use-sub-style style/search-results-item :span) (get item :label)]]))))]
       (into [:div (stylefy/use-style (merge style/page-heading-container
                                             {:display (if @siblings-open? "block" "none")}))]
             (for [item sub-content] ^{:key item} item))])))