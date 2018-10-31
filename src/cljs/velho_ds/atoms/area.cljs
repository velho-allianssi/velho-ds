(ns velho-ds.atoms.area
  (:require [velho-ds.atoms.style.area :as style]
            [velho-ds.atoms.icon :as icons]
            [velho-ds.tools.style :as tools-style]
            [dommy.core :as dommy]
            [reagent.core :as r]
            [stylefy.core :as stylefy]
            [velho-ds.design-system :as ds]))

(defn info [{:keys [styles] :as options} & content]
  (if (map? options)
    [:div (stylefy/use-style (merge style/info-area styles))
     (map-indexed #(with-meta %2 {:key %1}) content)]
    [:div (stylefy/use-style style/info-area)
     options
     (map-indexed #(with-meta %2 {:key %1}) content)]))


(defn dotted-area [{:keys [label]} & content]
  [:div
   [:div (stylefy/use-style style/dotted-header)
    [:span label]]
   [:div (stylefy/use-style style/dotted-content)
    (map-indexed #(with-meta %2 {:key %1}) content)]])

(defn- add-to-files [filemap item]
  (assoc filemap
    (do
      ((fnil inc 0) (apply max (keys filemap))))
    item))

(defn drag-n-drop [{:keys [on-change-fn]}]
  (let [files (r/atom {})
        file-to-map (fn [item]
                      {:name (.-name item)
                       :description nil
                       :file item})
        get-files (fn [e]
                    (do
                      (-> e
                          .-files
                          array-seq
                          (#(map file-to-map %))
                          (#(reduce add-to-files @files %))
                          (#(reset! files %)))
                      (on-change-fn @files)))]
    [:div (merge (stylefy/use-style style/drag-n-drop-helparea)
               {:on-click #(.click (dommy/sel1 @ds/root-element (keyword (str "#file-input"))))})
   [:p (stylefy/use-sub-style style/drag-n-drop-helparea :p) "Help Text"]
   [icons/icon {:name "cloud_upload"}]
   [:input {:id (str "file-input")
            :type "file"
            :multiple "multiple"
            :on-change #(do
                          (get-files (.-target %))
                          (set! (-> % .-target .-value) nil))
            :style {:display "none"}}]]))

(defn shadow-area [{:keys [styles] :as options} & content]
  (if (map? options)
    [:div (stylefy/use-style (merge style/shadow-area styles))
     (map-indexed #(with-meta %2 {:key %1}) content)]
    [:div (stylefy/use-style style/shadow-area)
     options
     (map-indexed #(with-meta %2 {:key %1}) content)]))