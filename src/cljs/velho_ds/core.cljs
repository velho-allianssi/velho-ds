(ns velho-ds.core
    (:require [reagent.core :as r]
              [stylefy.core :as stylefy]
              [velho-ds.pages.main :as main]))

;; -------------------------
;; Navigation
(def nav (atom {:atoms {:buttons ["main" "secondary"]}
                :molecules nil
                :organisms {:heading nil
                            :navigation nil}}))

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render (main/page nav) (.getElementById js/document "app")))

(defn init! []
  (stylefy/init)
  (mount-root))
