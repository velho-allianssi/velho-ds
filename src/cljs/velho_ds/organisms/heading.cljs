(ns velho-ds.organisms.heading
  (:require [stylefy.core :as stylefy]
            [clojure.string :as string]
            [velho-ds.organisms.style.heading :as style]
            [velho-ds.tokens.color :as color]
            [velho-ds.tokens.font :as fonts]
            [velho-ds.tokens.font-size :as font-sizes]
            [velho-ds.atoms.icon :as icons]
            [velho-ds.atoms.area :as areas]
            [velho-ds.atoms.button :as buttons]
            [velho-ds.molecules.field :as fields]
            [velho-ds.molecules.tab :as tabs]
            [velho-ds.organisms.grid :as grid]
            [velho-ds.tools.style :as tools-style]
            [reagent.core :as r]))

(defn main [content]
  [:header.header-style
   [:h2.heading-style content]])


(defn content-info [{:keys [breadcrumb footnote meta navigation bar-color breadcrumb-click-fn styles]}]
  (let [breadcrumb-clicked (fn [page]
                             (when breadcrumb-click-fn (breadcrumb-click-fn page)))
        pages (r/atom [])
        get-pages (fn [map]
                    (loop [page map]
                      (when (:label page)
                        (swap! pages conj page)
                        (recur (:child page)))))]
    (get-pages breadcrumb)
    (fn []
      [:div {:style {:display "flex"}}
       [:div {:style {:background bar-color
                      :border "2px solid white"
                      :box-sizing "border-box"
                      :width "8px"}}]
       [grid/grid-wrap {:rows 3
                        :styles style/content-info}
        [grid/grid-cell {:styles style/content-info-items}
         (for [page @pages]
           (if (not= page (last @pages))
             ^{:key page} [:a {:on-click #(breadcrumb-clicked page)} (:label page)
                           [:p {:style {:display "inline-block"
                                        :color color/color-primary
                                        :padding "0 0.25rem"
                                        :margin 0
                                        :cursor "pointer"}} "/"]]
             [:h1 (stylefy/use-style style/content-info-item) (:label page)]))
         [:h2 (stylefy/use-style style/content-info-item) footnote]]
        [grid/grid-cell {:styles {:grid-row "2 / 2"}}
         (when meta
           (into [:ul (stylefy/use-style style/content-info-footer)]
                 (for [item meta] ^{:key item} [:li (stylefy/use-sub-style style/content-info-footer :li) item])))]
        [grid/grid-cell {:styles {:grid-row "3 / 3"}}
         (for [item navigation]
           ^{:key item} item)]]])))

(defn- search-in-list [collection search-word]
  (filter #(string/includes? (string/lower-case %) search-word) collection))

(defn page-heading [{:keys [current-page
                            search-placeholder
                            search-initial-select
                            search-fn
                            search-results
                            search-result-clicked-fn
                            sub-content
                            breadcrumb-click-fn
                            styles]}]
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
    (fn []
      [:header (stylefy/use-style styles)
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
                                :icon-click-fn empty}]]]
       (into [:div (stylefy/use-style (merge style/page-heading-container
                                             {:display (if @sub-content-open? "block" "none")}))]
             (for [item sub-content] ^{:key item} item))])))

(defn content-header [{:keys [styles] :as options} & content]
  (if (map? options)
    [grid/grid-wrap {:rows 1, :cols (count content), :styles styles}
     (for [item content]
       ^{:key item} [grid/grid-cell {:styles {:display "grid"}} item])]
    [grid/grid-wrap {:rows 1, :cols (+ 1 (count content))}
     [grid/grid-cell {:styles {:display "grid"}} options]
     (for [item content]
       ^{:key item} [grid/grid-cell {:styles {:display "grid"}} item])]))

(defn content-header-default [{:keys [breadcrumb
                                      footnote
                                      meta
                                      navigation
                                      theme-color
                                      info-keyvalues
                                      styles]}]
  [content-header (tools-style/merge-styles styles {:background color/color-white
                                                    :grid-template-columns "1fr minmax(12rem, 25%)"})
   [content-info {:breadcrumb breadcrumb
                  :footnote footnote
                  :meta (for [button meta]
                          ^{:key button} [buttons/primary-small {:content (:content button)
                                                                 :icon (:icon button)
                                                                 :on-click-fn (:on-click-fn button)}])
                  :navigation (for [nav navigation]
                                ^{:key nav} [buttons/icon-link {:icon (:icon nav)
                                                                :label (:label nav)
                                                                :active (:active nav)
                                                                :on-click-fn (:on-click-fn nav)}])
                  :bar-color theme-color}]
   [areas/info-center {:styles {:margin "8px 0"
                                :border-left (str "1px solid " color/color-neutral-2)}}
    [icons/type-icon-circle {:color theme-color}]
    (for [keyvalue info-keyvalues]
      ^{:key keyvalue} [fields/keyvalue {:label (:label keyvalue)
                                         :content (:content keyvalue)
                                         :styles {:padding "0.25rem 0 0 0"}}])]])
