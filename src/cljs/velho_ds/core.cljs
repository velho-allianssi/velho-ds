(ns velho-ds.core
  (:require [accountant.core :as accountant]
            [bidi.bidi :as bidi]
            [reagent.core :as r]
            [reagent.session :as session]
            [velho-ds.pages.main :as main]
            [velho-ds.atoms.font :as font]
            [velho-ds.design-system :as design-system]
            [velho-ds.routes :refer [routes]]
            [clojure.string :as str]))

;; -------------------------
;; Design System layout

(defn page-layout [content]
  [:div.rds-grid-layout
   [:div.rds-page-logo (:logo content)]
   [:div.rds-page-header [:header.rds-header-style
                      [:h1.rds-header1.rds-heading-style (:heading content)]]]
   [:div.rds-page-navigation (:navigation content)]
   [:div.rds-page-content ^{:key content}[:section (:main-content content)]]])

(defn page [nav]
  [page-layout {:navigation nav
                :heading (str/capitalize (name (:current-page (session/get :route))))
                :logo [:h2.rds-logo-heading "Velho DS"]
                :main-content [main/page-contents (:current-page (session/get :route))]}])

;; -------------------------
;; Navigation
(defn path-exists? [path]
  (boolean (bidi/match-route routes path)))

(defn navigate [path]
  (let [match (bidi/match-route routes path)]
    (session/put! :route {:current-page (:handler match)
                          :route-params (:route-params match)})))

(declare navigation)
(defn subnav [first-item last-item]
  (let [open (r/atom false)]
    [:li.rds-page-navigation-list-header
     [:span.rds-navigation-link-disabled (str/capitalize first-item)]
     [navigation last-item]]))

(defn navigation [navigation-routes]
  (into
    [:ul.rds-page-navigation-list]
    (for [route (sort navigation-routes)]
      (let [first-item (str/replace (first route) #"/" "")
            last-item (last route)]
        (if (map? last-item)
          [subnav first-item last-item]
          [:li.rds-page-navigation-list-item
           [:a.rds-navigation-link
            (merge {:href (bidi/path-for routes last-item)}
                   (if (= (:current-page (session/get :route)) last-item) {:style {:font-weight 600}}))
            (if (= :index last-item)
              "Home"
              (str/capitalize (name last-item)))]])))))

;; -------------------------
;; Initialize app

(defn mount-root []
  (font/font-styles)
  (r/render [page [navigation (last routes)]] (.getElementById js/document "app")))

(defn init! []
  (design-system/init-ds! (.getElementById js/document "app"))
  (accountant/configure-navigation! {:nav-handler navigate :path-exists? path-exists?})
  (accountant/dispatch-current!)
  (mount-root))
