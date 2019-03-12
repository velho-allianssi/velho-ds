(ns velho-ds.atoms.icon
  (:require [stylefy.core :refer [use-style]]
            [velho-ds.tokens.color :as color]
            [velho-ds.atoms.style.icon :as style]
            [stylefy.core :as stylefy]))

(defn icon [{:keys [name styles]}]
  [:i.material-icons (if styles (use-style styles)
                                (use-style style/icon)) name])

(defn clickable [{:keys [name styles on-click-fn disabled tabindex]}]
  (assert name)
  [:button (stylefy/use-style (merge (if disabled
                                       style/clickable-disabled
                                       style/clickable)
                                     styles)
                              (merge {:disabled (if disabled disabled false)
                                      :on-click (if disabled nil on-click-fn)}
                                     (when tabindex {:tab-index tabindex})))
   [:i.material-icons (stylefy/use-sub-style (merge style/clickable styles) :i) name]])

(defn- circle [{:keys [color inner-color width height]} & content]
  [:svg {:width (if width width "2rem")
         :height (if height height "2rem")
         :fill (if color color color/color-pacific)
         :viewBox "0 0 32 32"}
   [:circle.a {:r "16", :cy "16", :cx "16"}]
   [:circle.b {:r "12", :cy "16", :cx "16"
               :fill (if inner-color inner-color "none")
               :stroke color/color-white
               :stroke-miterlimit 10
               :stroke-width "2px"}]
   (map-indexed #(with-meta %2 {:key %1}) content)])

(defn circle-single [{:keys [color inner-color width height] :as icon-args}]
  [circle (merge icon-args {:color (if color color color/color-pacific-light)})])

(defn circle-halfgroup [{:keys [color inner-color width height] :as icon-args}]
  [circle (merge icon-args {:color (if color color color/color-pacific)})
   [:path
    {:fill color/color-white
     :d
     "M16,9.3c-3.7,0-6.7,3-6.7,6.7s3,6.7,6.7,6.7s6.7-3,6.7-6.7S19.7,9.3,16,9.3L16,9.3z M13.3,19.7  c-0.9,0-1.7-0.7-1.7-1.7s0.7-1.7,1.7-1.7c0.9,0,1.7,0.7,1.7,1.7S14.3,19.7,13.3,19.7L13.3,19.7z M14.3,13.3c0-0.9,0.7-1.7,1.7-1.7  s1.7,0.7,1.7,1.7c0,0.9-0.7,1.7-1.7,1.7S14.3,14.3,14.3,13.3L14.3,13.3z M18.7,19.7c-0.9,0-1.7-0.7-1.7-1.7s0.7-1.7,1.7-1.7  c0.9,0,1.7,0.7,1.7,1.7S19.6,19.7,18.7,19.7L18.7,19.7z"}]])

(defn circle-group [{:keys [color inner-color width height] :as icon-args}]
    [circle (merge icon-args {:color (if color color color/color-pacific-dark)})
   [:path
    {:fill color/color-white
     :d
     "M14.7,16c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3  C16,16.6,15.4,16,14.7,16L14.7,16z M12,13.3c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3  C13.3,13.9,12.7,13.3,12,13.3L12,13.3z M12,18.7c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3S12.7,18.7,12,18.7L12,18.7  z M20,13.3c0.7,0,1.3-0.6,1.3-1.3s-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3S19.3,13.3,20,13.3L20,13.3z M17.3,18.7c-0.7,0-1.3,0.6-1.3,1.3  s0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3S18.1,18.7,17.3,18.7L17.3,18.7z M20,16c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3  s1.3-0.6,1.3-1.3C21.3,16.6,20.7,16,20,16L20,16z M17.3,13.3c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3  C18.7,13.9,18.1,13.3,17.3,13.3L17.3,13.3z M14.7,10.7c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3  S15.4,10.7,14.7,10.7L14.7,10.7z"}]])
