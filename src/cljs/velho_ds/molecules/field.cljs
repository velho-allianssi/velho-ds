(ns velho-ds.molecules.field
  (:require [clojure.string :as string]
            [clojure.set :as set]
            [dommy.core :as dommy]
            [reagent.core :as r]
            [stylefy.core :as stylefy]
            [velho-ds.tokens.color :as color]
            [velho-ds.molecules.style.field :as style]
            [velho-ds.atoms.icon :as icons]))

;; OUTPUTS
(defn keyvalue [{:keys [content label]}]
  [:div
   [:small (stylefy/use-style style/keyvalue-label) label]
   [:p (stylefy/use-style style/keyvalue-content) content]])

(defn iconvalue [{:keys [icon content]}]
  [:div (stylefy/use-style style/iconvalue)
   [icons/icon {:name icon
               :styles style/iconvalue-icon}]
   [:span (stylefy/use-style style/iconvalue-value) content]])

;; INPUTS
(defn input-field [{:keys [label content placeholder icon icon-click-fn on-change-fn on-blur-fn styles]}]
  (let [input-text (r/atom content)
        change (fn [val]
                 (reset! input-text val)
                 (when on-change-fn (on-change-fn @input-text)))
        blur (fn []
               (when on-blur-fn (on-blur-fn @input-text)))]
    (fn [{:keys [error-messages]}]
      [:div.vds-input-field (stylefy/use-style styles)
       [:label (stylefy/use-style style/element)
        [:input (stylefy/use-style (merge (if (first error-messages) style/input-field-error
                                                                     style/input-field) (when icon {:padding-right "2.5rem"})) {:required "required"
                                                                                                                                :on-change #(-> % .-target .-value change)
                                                                                                                                :on-blur blur
                                                                                                                                :value @input-text
                                                                                                                                :placeholder placeholder})]
        [:span (if (first error-messages) (stylefy/use-style style/input-field-label-error)
                                          (stylefy/use-style (if (and label placeholder) style/input-field-label-static style/input-field-label))) label]
        (when icon (if icon-click-fn [icons/clickable {:name icon
                                                      :styles style/icon
                                                      :on-click-fn icon-click-fn}]
                                     [icons/icon {:name icon
                                                 :styles style/icon}]))]
       (when (first error-messages)
         [:div (stylefy/use-style style/validation-errors)
          (doall (for [message error-messages]
                   (into ^{:key message} [:p (stylefy/use-sub-style style/validation-errors :p) message])))])])))

(defn multiline-field
  ([content]
   (multiline-field content nil))
  ([content args]
   [:div
    [:label (stylefy/use-style style/element)
     [:textarea (stylefy/use-style style/text-field {:required "required"})]
     [:span (stylefy/use-style style/input-field-label) content]]]))

(defn dropdown-menu [{:keys [label selected-fn options default-value no-selection-text styles]}]
  [:div (stylefy/use-style styles)
   [:label (stylefy/use-style style/element)
    [:span (stylefy/use-style style/dropdown-label) label]
    (into [:select (stylefy/use-style style/dropdown {:defaultValue "value"
                                                      :on-change #(-> % .-target .-value selected-fn)})
           (when (not default-value)
             [:option
              {:value "value"
               :disabled "disabled"}
              no-selection-text])]
          (mapv #(vector :option (merge {:value (:id %)}
                                        (when (= default-value %)
                                          {:selected "selected"}))
                         (:value %)) options))
    [icons/icon {:name "arrow_drop_down"
                :styles style/icon}]]])

(defn- list-item [{:keys [on-click-fn content is-selected?]}]
  [:li (stylefy/use-style {:background-color (if is-selected? color/color-primary color/color-neutral-1)
                           :color (if is-selected? color/color-neutral-2 color/color-black)
                           :cursor "pointer"
                           :display "block"
                           :padding "0.5rem"
                           ::stylefy/mode {:hover {:background-color color/color-primary
                                                   :color color/color-neutral-2}}}
                          {:on-click #(on-click-fn content)
                           :key content
                           :class "dropdown-multi"}) content])

(defn- selected-list-items [{:keys [on-click-fn content]}]
  [:li (stylefy/use-style {:background-color color/color-neutral-5
                           :color color/color-neutral-2
                           :cursor "pointer"
                           :display "inline-block"
                           :margin "0px 4px 4px 0px"
                           :padding "0.25rem 0.5rem"}
                          {:on-mouse-down #(on-click-fn content)
                           :key content
                           :class "dropdown-multi"})
   [:span (stylefy/use-style {:margin-right "0.5rem"}) content]
   [icons/icon {:name "cancel"
               :styles {:top "2px"
                        :position "relative"
                        :font-size "1rem"}}]])

(defn- search-in-list [collection search-word]
  (filter #(string/includes? (string/lower-case %) search-word) collection))

(defn- remove-from-vector [vect values]
  (assert (vector? vect))
  (let [remove-from (into #{} vect)
        to-be-removed (if (coll? values)
                        (into #{} values)
                        #{values})]
    (into [] (set/difference remove-from to-be-removed))))

(defn dropdown-multiple [{:keys [label placeholder selected-fn options preselected-values]}]
  (assert (fn? selected-fn) ":selected-fn function is required for dropdown-multiple")
  (assert (vector? options) ":options vector is required for dropdown-multiple")
  (let [state (r/atom {:options options
                       :input-text ""
                       :selected-items (if preselected-values preselected-values [])
                       :selected-idx nil
                       :selected-from-filter ""
                       :focus false})
        input-value-changed-fn #(swap! state assoc :input-text %)
        list-item-selected-fn #(do
                                 (swap! state update-in [:selected-items] conj %)
                                 (swap! state assoc :input-text "")
                                 (swap! state assoc :selected-idx nil)
                                 (selected-fn (:selected-items @state)))
        selected-list-item-selected-fn #(do
                                          (swap! state update-in [:selected-items] remove-from-vector %)
                                          (selected-fn (:selected-items @state)))
        selectable-items #(remove-from-vector (:options @state) (:selected-items @state))
        filtered-selections #(into []
                                   (apply sorted-set
                                          (search-in-list
                                            (selectable-items)
                                            (:input-text @state))))
        key-press-handler-fn (fn [key]
                               (when (and (= key "ArrowDown")
                                          (or (and (nil? (:selected-idx @state)) ; For the case there is only one item in the suggestion list
                                                   (= (count (filtered-selections)) 1))
                                              (< (:selected-idx @state) (dec (count (filtered-selections))))))
                                 (if (nil? (:selected-idx @state))
                                   (swap! state assoc :selected-idx 0)
                                   (swap! state update-in [:selected-idx] inc))
                                 (swap! state assoc :selected-from-filter (nth (filtered-selections) (:selected-idx @state))))
                               (when (and (= key "ArrowUp") (> (:selected-idx @state) 0))
                                 (swap! state update-in [:selected-idx] dec)
                                 (swap! state assoc :selected-from-filter (nth (filtered-selections) (:selected-idx @state))))
                               (when (and (= key "Enter"))
                                 (when (not (nil? (:selected-idx @state)))
                                   (list-item-selected-fn (nth (filtered-selections) (:selected-idx @state))))
                                 (swap! state assoc :selected-idx nil)
                                 (swap! state assoc :selected-from-filter ""))
                               (when (= key "Tab")
                                 (swap! state assoc :focus false)))
        global-click-handler #(let [target (.-target %)]
                                (if (empty? (search-in-list (string/split (-> target .-className) #" ") "dropdown-multi"))
                                  (swap! state assoc :focus false)))
        addEventListener #(.addEventListener (.getElementById js/document "app") "click" global-click-handler)] ;; Do global eventlistener for catching the click outside
    (fn []
      [:div (stylefy/use-style {:position "relative"}
                               {:class "dropdown-multi"})
       [:div (stylefy/use-style {:padding-top "1rem"} {:class "dropdown-multi"})
        [:span (stylefy/use-style style/dropdown-label) label]
        [:div {:class "dropdown-multi"}
         (into [:ul (stylefy/use-style style/dropdown-multiple-selected-items {:class "dropdown-multi"})]
               (mapv #(vector selected-list-items {:on-click-fn selected-list-item-selected-fn
                                                   :content %}) (:selected-items @state)))]
        [:div (stylefy/use-style style/dropdown-multiple-input-background {:class "dropdown-multi"})
         [:input (stylefy/use-style style/dropdown-multiple-input {:type "text"
                                                                   :on-change #(-> % .-target .-value input-value-changed-fn)
                                                                   :on-key-down #(-> % .-key key-press-handler-fn)
                                                                   :on-focus #(do
                                                                                (swap! state assoc :focus true)
                                                                                (addEventListener))
                                                                   :value (:input-text @state)
                                                                   :placeholder placeholder
                                                                   :class "dropdown-multi"})]
         [icons/icon {:name (if (:focus @state) "arrow_drop_up" "arrow_drop_down")
                     :styles (merge style/icon {:top "auto"
                                                :bottom 0})}]]]
       [:div (stylefy/use-style (merge style/dropdown-multiple-list {:display (if (:focus @state) "block" "none")})
                                {:class "dropdown-multi"})
        (into [:ul (stylefy/use-style style/dropdown-multiple-list-item
                                      {:class "dropdown-multi"})]
              (mapv #(do
                       (vector list-item {:on-click-fn list-item-selected-fn
                                          :is-selected? (= (:selected-from-filter @state) %)
                                          :content %})) (filtered-selections)))]])))

(defn file-list-item
  [{:keys [filename metadata on-change-fn delete-fn]}]
  (let [metafields-visible? (r/atom false)
        data (r/atom metadata)
        update-data (fn [k v]
                      (do
                        (swap! data assoc k v)
                        (on-change-fn @data)))]
    (fn []
      [:li.file-list-item (stylefy/use-sub-style style/drag-n-drop-content-ul :li)
       [:div (stylefy/use-style style/drag-n-drop-item)
        [:span.vds-filename filename]
        [:span (stylefy/use-style style/drag-n-drop-item-btn-area)
         [icons/clickable {:name "edit"
                          :on-click-fn #(swap! metafields-visible? not)}]
         [icons/clickable {:name "close"
                          :on-click-fn delete-fn}]]]
       (into [:div.vds-metadata-fields (if @metafields-visible?
                                         (stylefy/use-style style/drag-n-drop-item-description-area)
                                         (stylefy/use-style style/drag-n-drop-item-description-area-hidden))]
             (for [meta-key (keys metadata)]
               ^{:key meta-key} [input-field {:label (string/capitalize (name meta-key))
                                              :content (get metadata meta-key)
                                              :on-change-fn (partial update-data meta-key)}]))])))

(defn- add-to-files [filemap item]
  (assoc filemap
    (do
      ((fnil inc 0) (apply max (keys filemap))))
    item))

(defn sanitize-id [str]
  (-> str
      (string/replace #" " "-")
      (string/replace #"Ä" "A")
      (string/replace #"ä" "a")
      (string/replace #"Ö" "O")
      (string/replace #"ö" "o")
      (string/replace #"Å" "a")
      (string/replace #"å" "a")))

(defn drag-n-drop [{:keys [label help-text on-change-fn]}]
  (assert label)
  (assert on-change-fn)
  (let [files (r/atom {})
        label-id (r/atom (sanitize-id (str label (subs (str (rand)) 2 9))))
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
                      (on-change-fn @files)))
        file-metadata-changed (fn [key new-metadata]
                                (do
                                  (swap! files assoc key (merge (get @files key) new-metadata))
                                  (on-change-fn @files)))
        remove-item #(do
                       (swap! files dissoc %)
                       (on-change-fn @files))]
    (fn []
      [:div
       [:div (stylefy/use-style style/drag-n-drop-header)
        [:span label]]
       [:div (merge (stylefy/use-style style/drag-n-drop-content)
                    {:on-drag-over #(.preventDefault %)
                     :on-drag-enter #(.preventDefault %)
                     :on-drag-start #(.setData (.-dataTransfer %) "text/plain" "") ;; for Firefox. You MUST set something as data.
                     :on-drop #(do
                                 (.preventDefault %)
                                 (get-files (.-dataTransfer %)))})
        (when (not (empty? @files))
          (into [:ul (stylefy/use-style style/drag-n-drop-content-ul)]
                (for [key (sort (keys @files))]
                  (let [file-item (get @files key)]
                    ^{:key key} [file-list-item {:filename (:name file-item)
                                                 :metadata {:description (:description file-item)
                                                            :filename (:name file-item)}
                                                 :on-change-fn (partial file-metadata-changed key)
                                                 :delete-fn #(remove-item key)}]))))
        [:div (merge (stylefy/use-style style/drag-n-drop-helparea)
                     {:on-click #(.click (dommy/sel1 (keyword (str "#file-input-" @label-id))))})
         [:p (stylefy/use-sub-style style/drag-n-drop-helparea :p) help-text]
         [icons/icon {:name "cloud_upload"}]
         [:input {:id (str "file-input-" @label-id)
                  :type "file"
                  :multiple "multiple"
                  :on-change #(do
                                (get-files (.-target %))
                                (set! (-> % .-target .-value) nil))
                  :style {:display "none"}}]]]])))
