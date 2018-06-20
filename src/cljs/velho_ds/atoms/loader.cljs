(ns velho-ds.atoms.loader
  (:require [stylefy.core :refer [use-style]]
            [velho-ds.atoms.style.loader :as style]))

(defn progress-bar [{:keys [percentage styles]}]
  [:div (use-style (merge style/line-area styles))
   [:div (if percentage (use-style (merge style/bar {:width percentage} styles))
                        (use-style (merge style/bar-unknown styles)))]])

(defn pulse [{:keys [styles]}]
  [:div (use-style (merge style/spinner styles))])