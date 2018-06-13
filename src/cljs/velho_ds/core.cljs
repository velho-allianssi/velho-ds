(ns velho-ds.core
  (:require [accountant.core :as accountant]
            [bidi.bidi :as bidi]
            [reagent.core :as r]
            [reagent.session :as session]
            [velho-ds.pages.main :as main]
            [velho-ds.atoms.font :as font]
            [velho-ds.design-system :as design-system]
            [velho-ds.routes :refer [routes]]))

;; -------------------------
;; Navigation
(defn path-exists? [path]
  (boolean (bidi/match-route routes path)))

(defn navigate [path]
  (let [match (bidi/match-route routes path)]
    (session/put! :route {:current-page (:handler match)
                          :route-params (:route-params match)})))

(def nav
  [:ul
   [:li
    [:a {:href "/"} "Home"]]
   [:li
    [:a {:href "/atoms/buttons"} "Buttons"]]
   [:li
    [:a {:href "/atoms/fonts"} "Fields"]]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (font/font-styles)
  (r/render [main/page nav] (.getElementById js/document "app")))

(defn init! []
  (design-system/init-ds!)
  (accountant/configure-navigation! {:nav-handler navigate :path-exists? path-exists?})
  (accountant/dispatch-current!)
  (mount-root))
