(ns velho-ds.atoms.icon
  (:require [stylefy.core :refer [use-style]]
            [velho-ds.atoms.style.icon :as style]
            [stylefy.core :as stylefy]))

(defn icon [{:keys [name styles]}]
  [:i.material-icons (if styles (use-style styles)
                                (use-style style/icon)) name])

(defn clickable [{:keys [name styles on-click-fn disabled]}]
  (assert name)
  [:button (stylefy/use-style (merge (if disabled
                                       style/clickable-disabled
                                       style/clickable)
                                     styles)
                              {:disabled (if disabled disabled false)
                               :on-click on-click-fn})
   [:i.material-icons (stylefy/use-sub-style (merge style/clickable styles) :i) name]])

(defn type-icon-circle [{:keys [color]}]
  [:svg {:width "2rem"
         :height "2rem"
         :fill color}
   {:viewbox "0 0 32 32"}
   [:defs
    [:style
     ".b{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:2px;}"]]
   [:title "icon"]
   [:circle.a {:r "16", :cy "16", :cx "16"}]
   [:circle.b {:r "12", :cy "16", :cx "16"}]])