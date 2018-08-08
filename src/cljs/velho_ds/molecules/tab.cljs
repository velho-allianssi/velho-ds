(ns velho-ds.molecules.tab
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy]
            [velho-ds.atoms.icon :as icons]
            [velho-ds.molecules.style.tab :as style]))

(def selected-tab (r/atom nil))

(defn default [{:keys [tab-id icon label on-click-fn styles]}]
  (assert (and tab-id (or label icon)))
  (let [onclick-action (fn []
                         (when (not= tab-id @selected-tab)
                           (reset! selected-tab tab-id))
                         (when on-click-fn (on-click-fn)))]
    (fn []
      [:li (stylefy/use-style (if (= @selected-tab tab-id) (merge style/tab-active styles)
                                                           (merge style/tab styles)) {:on-click onclick-action})
       (when icon [icons/icon {:styles {:top "6px"
                                       :position "relative"
                                       :padding-right "8px"}
                              :name icon}])
       (when label [:a (stylefy/use-sub-style style/tab :a) label])])))

(defn tabset [{:keys [selected-id styles]} & content]
  (when selected-id
    (reset! selected-tab selected-id))
  (fn []
    [:ul (stylefy/use-style (merge style/tabset styles))
     (map-indexed #(with-meta %2 {:key %1}) content)]))
