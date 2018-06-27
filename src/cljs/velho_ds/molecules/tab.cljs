(ns velho-ds.molecules.tab
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy]
            [velho-ds.atoms.icon :as icon]
            [velho-ds.molecules.style.tab :as style]))

(defn default [{:keys [icon label active on-click-fn styles]}]
  (assert (or label icon))
  (let [selected (r/atom active)
        onclick-action (fn []
                          (reset! selected true))]
   (fn []
    [:li (stylefy/use-style (if @selected (merge style/tab-active styles)
                                          (merge style/tab styles)) {:on-click #(-> % .-target .-value onclick-action)})
     (if icon [icon/icon {:styles {:padding-right "8px"}
                          :name icon}])
     (if label [:a (stylefy/use-sub-style style/tab :a) label])])))

(defn selected [{:keys [icon label on-click-fn styles]}]
  (assert (or label icon))
  (println styles)
  [:li (stylefy/use-style (merge style/tab-active styles) {:on-click on-click-fn})
   (if icon [icon/icon {:styles {:padding-right "8px"}
                        :name icon}])
   (if label [:a (stylefy/use-sub-style style/tab :a) label])])

(defn tabset [{:keys [styles]} & content]
  (into [:ul styles] (for [item content] ^{:key item} [:span item])))