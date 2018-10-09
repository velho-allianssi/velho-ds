(ns velho-ds.organisms.heading
  (:require [stylefy.core :as stylefy]
            [clojure.string :as string]
            [velho-ds.organisms.style.heading :as style]
            [velho-ds.tokens.color :as color]
            [velho-ds.tokens.font :as fonts]
            [velho-ds.tokens.font-size :as font-sizes]
            [velho-ds.tokens.box-shadow :as box-shadow]
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


(defn content-info [{:keys [breadcrumb footnote features navigation bar-color breadcrumb-click-fn styles]}]
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
         (doall (for [page @pages]
                  (if (not= page (last @pages))
                    ^{:key page} [:a {:on-click #(breadcrumb-clicked page)} (:label page)
                                  [:p {:style {:display "inline-block"
                                               :color color/color-primary
                                               :padding "0 0.25rem"
                                               :margin 0
                                               :cursor "pointer"}} "/"]]
                    ^{:key page} [:h1 (stylefy/use-style style/content-info-item) (:label page)])))
         [:h2 (stylefy/use-style style/content-info-item) footnote]]
        [grid/grid-cell {:styles {:grid-row "2 / 2"}}
         (when features
           (into [:ul (stylefy/use-style style/content-info-footer)]
                 (for [item features] ^{:key item} [:li (stylefy/use-sub-style style/content-info-footer :li) item])))]
        [grid/grid-cell {:styles {:grid-row "3 / 3"}}
         (map-indexed #(with-meta %2 {:key %1}) navigation)]]])))

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
    [grid/grid-wrap {:rows 1, :cols (inc (count content))}
     [grid/grid-cell {:styles {:display "grid"}} options]
     (for [item content]
       ^{:key item} [grid/grid-cell {:styles {:display "grid"}} item])]))

(defn content-header-default [{:keys [breadcrumb
                                      footnote
                                      features
                                      navigation
                                      theme-color
                                      info-icon
                                      info-keyvalues
                                      styles]}]
  (let [theme-color (if theme-color
                      theme-color
                      color/color-neutral-4)]
    [content-header (tools-style/merge-styles {:styles {:box-shadow box-shadow/box-shadow
                                                      :background color/color-white
                                                      :grid-template-columns "1fr minmax(12rem, 25%)"}} styles)
     [content-info {:breadcrumb breadcrumb
                    :footnote footnote
                    :features (for [feature features]
                                ^{:key feature} [buttons/primary-small {:content (:content feature)
                                                                        :icon (:icon feature)
                                                                        :on-click-fn (:on-click-fn feature)}])
                    :navigation (for [nav navigation]
                                  ^{:key nav} [buttons/icon-link {:icon (:icon nav)
                                                                  :label (:label nav)
                                                                  :active (:active nav)
                                                                  :on-click-fn (:on-click-fn nav)}])
                    :bar-color theme-color}]
     [areas/info {:styles {:text-align "center"
                           :margin "8px 0"
                           :border-left (str "1px solid " color/color-neutral-2)}}

      (conj info-icon {:color theme-color})
      (for [keyvalue info-keyvalues]
        ^{:key keyvalue} [fields/keyvalue {:label (:label keyvalue)
                                           :content (:content keyvalue)
                                           :styles {:padding "0.25rem 0 0 0"}}])]]))
