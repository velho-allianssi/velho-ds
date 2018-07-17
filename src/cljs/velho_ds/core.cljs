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
    [:li
     [:span (str/capitalize first-item)]
     (navigation last-item)]))

(defn navigation [navigation-routes]
  (into
    [:ul]
    (for [route navigation-routes]
      (let [first-item (str/replace (first route) #"/" "")
            last-item (last route)]
        (if (map? last-item)
          [subnav first-item last-item]
          [:li
           [:a
            {:href (bidi/path-for routes last-item)}
            (if (= :index last-item)
              "Home"
              (str/capitalize (name last-item)))]])))))

;; -------------------------
;; Initialize app

(defn mount-root []
  (font/font-styles)
  (r/render [main/page (navigation (last routes))] (.getElementById js/document "app")))

(defn init! []
  (design-system/init-ds!)
  (accountant/configure-navigation! {:nav-handler navigate :path-exists? path-exists?})
  (accountant/dispatch-current!)
  (mount-root))
