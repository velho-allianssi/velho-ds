(ns velho-ds.organisms.navigation
  (:require [stylefy.core :refer [use-style]]))

;; Styles
;; ----------------
(def navigation-style {:display "grid"
                       :grid-template-colums "1fr"
                       :grid-template-rows "1fr"
                       :background-color "#333"})

(def menu-color {0 "#333333"
                 1 "#434343"
                 2 "#535353"})

(defn ul-style [level]
  (let [bg-color (get menu-color level)]
    {:list-style-type "none"
     :padding "0"
     :margin "0"
     :background-color (if (nil? bg-color) "#333" bg-color)}))

(defn li-style [level]
  {})

(defn a-style [level]
  {:display "block"
   :padding (str "0.5rem 0.5rem 0.5rem " (+ 0.5 (* level 0.75)) "rem")
   :text-decoration "none"
   :color "#FEFEFE"})

;; Components
;; ----------------

(defonce nav-id (atom 0))

(defn nav-key []
  (swap! nav-id inc))

(defn get-navigation-items [items & lvl]
  (let [level (if (nil? lvl) 0 (first lvl))]
    [:ul (use-style (ul-style level))
     (if (map? items)
       (for [key (vec (keys items))]
         (if (pos? (count (key items)))
           [:li (use-style (li-style level) {:key (nav-key)}) [:a (use-style (a-style level) {:href (str "#" key)}) key]
            (get-navigation-items (key items) (inc level))]
           [:li (use-style (li-style level) {:key (nav-key)}) [:a (use-style (a-style level) {:href (str "#" key)}) key]]))
       (if (vector? items)
         (for [item items]
           [:li (use-style (li-style level) {:key (nav-key)}) [:a (use-style (a-style level) {:href (str "#" item)}) item]])))]))

(defn nested-navigation [navigation-items]
  [:nav (use-style navigation-style) (get-navigation-items @navigation-items)])