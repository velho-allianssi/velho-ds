(ns velho-ds.core
    (:require [reagent.core :as r]
              [velho-ds.pages.main :as main]
              [velho-ds.atoms.font :as font]
              [velho-ds.design-system :as design-system]))

;; -------------------------
;; Navigation
(def nav (atom {:atoms {:buttons ["main" "secondary"]}
                :molecules nil
                :organisms {:heading nil
                            :navigation nil}}))

;; -------------------------
;; Initialize app

(defn mount-root []
  (font/font-styles)
  (r/render (main/page nav) (.getElementById js/document "app")))

(defn init! []
  (design-system/init-ds!)
  (mount-root))
