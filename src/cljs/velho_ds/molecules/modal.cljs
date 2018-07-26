(ns velho-ds.molecules.modal
  (:require [stylefy.core :as stylefy]
            [velho-ds.atoms.icon :as icon]
            [velho-ds.atoms.button :as button]
            [velho-ds.molecules.style.modal :as style]
            [reagent.core :as r]))

;; Appending modal to content
(defn appended-modal [modal-id]
  (.appendChild (.-body js/document) (doto (.createElement js/document "div")
                                       (-> (.setAttribute "id" modal-id)))))

(defn open [modal modal-id]
  (r/render modal
            (appended-modal modal-id)))

(defn close [modal-id]
  (.remove (.getElementById js/document modal-id) js/document))

(defn default [{:keys [header header-buttons content footer modal-id]}]
  [:div (stylefy/use-style style/background)
   [:div (stylefy/use-style style/modal-box)
    [:header (stylefy/use-style style/modal-header)
     [:h2 (stylefy/use-sub-style style/modal-header :h2) header]
     (into [:div (stylefy/use-style style/modal-header-btn-area)]
          (for [item header-buttons] ^{:key item} [button/default (merge {:styles style/modal-header-btn} item)]))]
    (when content
      (into [:div (stylefy/use-style style/modal-content)]
            (for [item content] ^{:key item} item)))
    (when footer
      (into [:footer (stylefy/use-style style/modal-footer)]
            (for [item footer] ^{:key item} item)))]])