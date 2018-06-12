(ns velho-ds.organisms.navigation
  (:require [stylefy.core :refer [use-style]]))

;; Components
;; ----------------

(defonce nav-id (atom 0))

(defn nav-key []
  (swap! nav-id inc))

(defn get-navigation-items [items & lvl]
  (let [level (if (nil? lvl) 0 (first lvl))]
    [:ul.page-navigation-list
     (if (map? items)
       (for [key (vec (keys items))]
         (if (pos? (count (key items)))
           [:li.page-navigation-list-item [:a.navigation-link {:href (str "#" key)} key]
            (get-navigation-items (key items) (inc level))]
           [:li.page-navigation-list-item [:a.navigation-link {:href (str "#" key)} key]]))
       (if (vector? items)
         (for [item items]
           [:li.page-navigation-list-item [:a.navigation-link {:href (str "#" item)} item]])))]))

(defn nested-navigation [navigation-items]
  [:nav.page-navigation-content (get-navigation-items @navigation-items)])