(ns velho-ds.molecules.modal
  (:require [stylefy.core :as stylefy]
            [velho-ds.molecules.style.modal :as style]
            [reagent.core :as r]))

(defn wrapper [& content]
  (let [drag (r/atom false)
        events {:on-drop #(do (reset! drag false) (.preventDefault %))
                :on-drag-leave #(reset! drag false)
                :on-drag-over #(do (reset! drag true) (.preventDefault %))}
        fade style/fade
        solid (merge fade {:background "hsla(0, 0%, 20%, 1)"})]
    (fn []
      [:div (stylefy/use-style (if @drag solid fade) events)
       [:div (stylefy/use-style style/wrapper)
        [:div (stylefy/use-style style/bg)
         (map-indexed #(with-meta %2 {:key %1}) content)]]])))

(defn header [otsikko & ikoni]
  [:header (stylefy/use-style style/header)
   otsikko
   (map-indexed #(with-meta %2 {:key %1}) ikoni)])

(defn content [& content]
  [:div (stylefy/use-style style/content)
   (map-indexed #(with-meta %2 {:key %1}) content)])

(defn footer [& content]
  [:div (stylefy/use-style style/footer)
   (map-indexed #(with-meta %2 {:key %1}) content)])
