(ns velho-ds.molecules.field
  (:require [clojure.string :as string]
            [clojure.set :as set]
            [dommy.core :as dommy]
            [reagent.core :as r]
            [stylefy.core :as stylefy]
            [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.molecules.style.field :as style]
            [velho-ds.atoms.icon :as icons]
            [velho-ds.design-system :as ds]
            [velho-ds.atoms.area :as areas]
            [velho-ds.organisms.grid :as grid]
            [velho-ds.atoms.divider :as dividers]))

(defn- add-event-listener
  ([event func]
   (add-event-listener @ds/root-element event func))
  ([element event func]
   (dommy/listen! element event func)))

(defn- remove-event-listener
  ([event func]
   (remove-event-listener @ds/root-element event func))
  ([element event func]
   (dommy/unlisten! element event func)))

(defn- search-in-list [collection search-word]
  (filter #(string/includes? (string/lower-case %) search-word) collection))

(defn- element-has-class? [e classname]
  (let [target (.-target e)]
    (empty? (search-in-list (string/split (-> target .-className) #" ") classname))))

(defn- create-keys [data]
  (let [index (atom -1)]
    (map #(assoc % :items (map (fn [item]
                                 (reset! index (+ 1 @index))
                                 (assoc item :key @index))
                               (:items %))) data)))

(defn- remove-from-vector [vect values]
  (assert (vector? vect))
  (let [remove-from (into #{} vect)
        to-be-removed (if (coll? values)
                        (into #{} values)
                        #{values})]
    (into [] (set/difference remove-from to-be-removed))))

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
   [icons/clickable {:name "cancel"
                     :styles {:top "3px"
                              :position "relative"
                              :font-size "1rem"
                              :color "inherit"}}]])

(defn- label-styles [error-messages state placeholder label]
  (if (first error-messages) (stylefy/use-style (merge style/input-field-label-error
                                                       (when (or (:is-focused state) placeholder) {:top 0
                                                                                                   :font-size font-size/font-size-small})))
                             (stylefy/use-style (merge (if (and label placeholder)
                                                         style/input-field-label-static
                                                         style/input-field-label)
                                                       (when (or (:is-focused state) (:has-value state) placeholder)
                                                         {:top 0
                                                          :font-size font-size/font-size-small})
                                                       (when (:is-focused state)
                                                         {:color color/color-primary})))))

;; OUTPUTS
(defn keyvalue [{:keys [label content styles]}]
  [:div (stylefy/use-style styles)
   [:small (stylefy/use-style style/keyvalue-label) label]
   [:p (stylefy/use-style style/keyvalue-content) content]])

(defn iconvalue [{:keys [icon content]}]
  [:div (stylefy/use-style style/iconvalue)
   [icons/icon {:name icon
                :styles style/iconvalue-icon}]
   [:span (stylefy/use-style style/iconvalue-value) content]])

;; INPUTS
(defn- create-input-field [{:keys [label content placeholder icon-click-fn on-change-fn on-blur-fn on-focus-fn styles]} input-type]
  (let [input-text (r/atom content)
        state (r/atom {:is-focused false
                       :has-value (not (nil? @input-text))})
        change (fn [val]
                 (reset! input-text val)
                 (swap! state assoc :has-value (not (or (= val "") (nil? val))))
                 (when on-change-fn (on-change-fn @input-text)))
        blur (fn []
               (swap! state assoc :is-focused false)
               (when on-blur-fn (on-blur-fn @input-text)))
        focus (fn []
                (swap! state assoc :is-focused true)
                (when on-focus-fn (on-focus-fn @input-text)))]
    (fn [{:keys [icon error-messages]}]
      [:div.vds-input-field (stylefy/use-style styles)
       [:label (stylefy/use-style style/element)
        (when label [:span (label-styles error-messages @state placeholder label) label])
        [input-type (stylefy/use-style (merge (if (first error-messages)
                                                style/input-field-error
                                                style/input-field)
                                              (when icon {:padding-right "2rem"})
                                              (when (not label) {:top 0}))
                                       {:on-change #(-> % .-target .-value change)
                                        :on-blur blur
                                        :on-focus focus
                                        :value @input-text
                                        :placeholder placeholder})]
        (when icon [icons/clickable (merge (when icon-click-fn {:on-click-fn icon-click-fn})
                                           {:name icon
                                            :styles style/icon})])]
       (when (first error-messages)
         [:div (stylefy/use-style style/validation-errors)
          (doall (for [message error-messages]
                   (into ^{:key message} [:p (stylefy/use-sub-style style/validation-errors :p) message])))])])))

(defn input-field [properties]
  (create-input-field properties :input))

(defn multiline-field [properties]
  (create-input-field properties :textarea))


(defn dropdown-menu [{:keys [label
                             placeholder
                             item-list
                             on-change-fn
                             on-blur-fn
                             on-focus-fn
                             on-item-select-fn
                             selected-item
                             icon-click-fn
                             icon
                             error-messages
                             disabled
                             styles]}]
  (let [item-list-keys (atom [])
        state (r/atom {:id (subs (str (rand)) 2 9)
                       :input-text (:label selected-item)
                       :selected-item (if selected-item [selected-item] [])
                       :selected-idx nil
                       :items []
                       :item-count (apply + (map #(count (:items %)) item-list))
                       :focus false
                       :disabled (if disabled disabled false)})

        change (fn [val]
                 (when (not (nil? on-change-fn))
                   (swap! state assoc :selected-idx nil)
                   (swap! state assoc :input-text val)
                   (when on-change-fn (on-change-fn (:input-text @state)))))

        blur (fn []
               (swap! state assoc :focus false)
               (if (some #(some (fn [a] (= (:input-text @state) (:label a))) (:items %)) item-list)
                 (swap! state assoc :selected-item (:input-text @state))
                 (swap! state assoc :input-text (:selected-item @state)))
               (when on-blur-fn (on-blur-fn (:input-text @state)))
               (.blur (dommy/sel1 (keyword (str "#input-dropdown-menu-" (:id @state))))))

        list-item-click (fn [section item]
                          (when (not (nil? (:label item)))
                            (swap! state assoc :input-text (:label item)))
                          (swap! state assoc :selected-item [item])
                          (when on-item-select-fn (on-item-select-fn section item))
                          (swap! state assoc :focus (not (:focus @state))))

        key-press-handler-fn (fn [key]
                               (when (and (not (= key "Tab")) (= (:focus @state) false))
                                 (swap! state assoc :focus true))
                               (when (= key "ArrowDown")
                                 (if (nil? (:selected-idx @state))
                                   (swap! state assoc :selected-idx 0)
                                   (when (< (:selected-idx @state) (- (:item-count @state) 1))
                                     (swap! state update-in [:selected-idx] inc))))
                               (when (= key "ArrowUp")
                                 (if (> (:selected-idx @state) 0)
                                   (swap! state update-in [:selected-idx] dec)
                                   (swap! state assoc :selected-idx nil)))
                               (when (and (= key "Enter"))
                                 (if (not (nil? (:selected-idx @state)))
                                   (do (.click (dommy/sel1 (keyword (str "#list-item-" (:id @state) "-" (:selected-idx @state))))))
                                   (when (not (nil? (some #(some (fn [item] (when (= (:input-text @state) (:label item)) item)) (:items %)) @item-list-keys)))
                                     (.click (dommy/sel1 (keyword (str "#list-item-" (:id @state) "-" (:key (some #(some (fn [item] (when (= (:input-text @state) (:label item)) item)) (:items %)) @item-list-keys)))))))))
                               (when (= key "Tab")
                                 (swap! state assoc :focus false)))]

    (fn [{:keys [item-list icon error-messages]}]
      (reset! item-list-keys (create-keys item-list))
      [:div.vds-input-field (stylefy/use-style styles {:class (str "dropdown-menu-" (:id @state))})
       [:label (stylefy/use-style style/element {:class (str "dropdown-menu-" (:id @state))})
        (into [:div (stylefy/use-style (merge style/dropdown-list-container
                                              (when (nil? label) {:top (str "calc(" spacing/space-large-rem " - " spacing/space-small-rem ")")})
                                              {:display (if (:focus @state) "block" "none")})
                                       {:class (str "dropdown-menu-" (:id @state))})]
              (for [section @item-list-keys]
                (into [:ul (stylefy/use-style style/dropdown-list {:class (str "dropdown-menu-" (:id @state))})
                       (when (:section section)
                         [:li (stylefy/use-style style/dropdown-list-header {:class (str "dropdown-menu-" (:id @state))
                                                                             :on-click #(list-item-click section {:input-text (:input-text @state)})})
                          [:p (stylefy/use-style style/dropdown-list-header-item {:class (str "dropdown-menu-" (:id @state))}) (str (get section :section) " (" (count (get section :items)) ")")]])
                       (doall (for [item (:items section)]
                                ^{:key item} [:li (stylefy/use-style (if (= (:label item) (:label (first (:selected-item @state))))
                                                                       style/dropdown-list-item-selected
                                                                       (if (= (:selected-idx @state) (:key item))
                                                                         (merge style/dropdown-list-item {:background color/color-primary-light})
                                                                         style/dropdown-list-item))
                                                                     {:on-mouse-over #(swap! state assoc :selected-idx (:key item))
                                                                      :on-click #(list-item-click section item)
                                                                      :key (:key item)
                                                                      :id (str "list-item-" (:id @state) "-" (:key item))
                                                                      :class "dropdown-multi"}) (:label item)]))])))
        [:span (if (first error-messages) (stylefy/use-style style/input-field-label-error) ;TODO check if label/placeholder works
                                          (stylefy/use-style (if (and label placeholder) style/input-field-label-static style/input-field-label))) label]
        [:input (stylefy/use-style (merge (if (first error-messages)
                                            style/input-field-error
                                            style/input-field)
                                          (when icon {:padding-right "2rem"})
                                          (when (nil? on-change-fn) {:cursor "pointer"
                                                                     :caret-color "transparent"}))
                                   {:class (str "dropdown-menu-" (:id @state))
                                    :id (str "input-dropdown-menu-" (:id @state))
                                    :on-key-down #(-> % .-key key-press-handler-fn)
                                    :disabled (:disabled @state)
                                    :on-change #(-> % .-target .-value change)
                                    :on-click #(swap! state assoc :focus (not (:focus @state)))
                                    :on-focus #(do
                                                 (add-event-listener :click (fn [e] (when (element-has-class? e (str "dropdown-menu-" (:id @state)))
                                                                                      (blur))))
                                                 (when on-focus-fn (on-focus-fn (:input-text @state))))
                                    :value (:input-text @state)
                                    :placeholder placeholder})]
        [icons/clickable {:on-click-fn (if icon-click-fn #(icon-click-fn)
                                                         (if (:focus @state)
                                                           #(swap! state assoc :focus false)
                                                           #(swap! state assoc :focus true)))
                          :disabled (:disabled @state)
                          :name (if (nil? icon) (if (:focus @state) "arrow_drop_up" "arrow_drop_down") icon)
                          :styles (merge style/icon (when (nil? label) {:top spacing/space-xx-small-rem}))}]]
       (when (first error-messages)
         [:div (stylefy/use-style style/validation-errors)
          (doall (for [message error-messages]
                   (into ^{:key message} [:p (stylefy/use-sub-style style/validation-errors :p) message])))])])))

(defn dropdown-menu-simple [{:keys [label selected-fn options default-value no-selection-text styles]}]
  [:div (stylefy/use-style styles)
   [:label (stylefy/use-style style/element)
    [:span (stylefy/use-style style/dropdown-label) label]
    (into [:select (stylefy/use-style style/dropdown {:defaultValue (if default-value
                                                                      (:id default-value)
                                                                      "value")
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
    [icons/clickable {:name "arrow_drop_down"
                      :styles (merge style/icon (when (nil? label) {:top spacing/space-xx-small-rem}))}]]])

(defn dropdown-multiple [{:keys [label placeholder selected-fn options preselected-values]}]
  (assert (fn? selected-fn) ":selected-fn function is required for dropdown-multiple")
  (assert (vector? options) ":options vector is required for dropdown-multiple")
  (let [state (r/atom {:options options
                       :input-text ""
                       :selected-items (if preselected-values preselected-values [])
                       :selected-idx nil
                       :selected-from-filter ""
                       :focus false})
        dropdown-id (atom (str (random-uuid)))
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
        click-in-dropdown? (fn click-in-dropdown? [element id]
                             (if (nil? element)
                               false
                               (if (= id (.-id element))
                                 true
                                 (click-in-dropdown? (.-parentElement element) id))))
        global-click-handler #(let [target (.-target %)]
                                (when-not (click-in-dropdown? target @dropdown-id)
                                  (swap! state assoc :focus false)))]
    (r/create-class
      {:display-name "dropdown-multiple"
       :component-did-mount (fn [this]
                              (add-event-listener (dommy/sel1 (r/dom-node this) :input) :focus #(swap! state assoc :focus true)))
       :reagent-render (fn []
                         (if (:focus @state)
                           (add-event-listener :click global-click-handler)
                           (remove-event-listener :click global-click-handler))
                         [:div (stylefy/use-style {:position "relative"}
                                                  {:id @dropdown-id})
                          [:div (stylefy/use-style {:padding-top "1rem"})
                           [:span (stylefy/use-style style/dropdown-label) label]
                           [:div
                            (into [:ul (stylefy/use-style style/dropdown-multiple-selected-items)]
                                  (mapv #(vector selected-list-items {:on-click-fn selected-list-item-selected-fn
                                                                      :content %}) (:selected-items @state)))]
                           [:div (stylefy/use-style style/dropdown-multiple-input-background)
                            [:input (stylefy/use-style style/dropdown-multiple-input {:type "text"
                                                                                      :on-change #(-> % .-target .-value input-value-changed-fn)
                                                                                      :on-key-down #(-> % .-key key-press-handler-fn)
                                                                                      :value (:input-text @state)
                                                                                      :placeholder placeholder})]
                            [icons/clickable {:name (if (:focus @state) "arrow_drop_up" "arrow_drop_down")
                                              :styles style/dropdown-multiple-icon
                                              :on-click-fn #(swap! state update-in [:focus] not)}]]]
                          [:div (stylefy/use-style (merge style/dropdown-multiple-list {:display (if (:focus @state) "block" "none")}))
                           (into [:ul (stylefy/use-style style/dropdown-multiple-list-item)]
                                 (mapv #(do
                                          (vector list-item {:on-click-fn list-item-selected-fn
                                                             :is-selected? (= (:selected-from-filter @state) %)
                                                             :content %})) (filtered-selections)))]])})))

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
                     {:on-click #(.click (dommy/sel1 @ds/root-element (keyword (str "#file-input-" @label-id))))})
         [:p (stylefy/use-sub-style style/drag-n-drop-helparea :p) help-text]
         [icons/icon {:name "cloud_upload"}]
         [:input {:id (str "file-input-" @label-id)
                  :type "file"
                  :multiple "multiple"
                  :on-change #(do
                                (get-files (.-target %))
                                (set! (-> % .-target .-value) nil))
                  :style {:display "none"}}]]]])))

(defn list-element [{:keys [label desc info sub-content buttons]}]
  (let [state (r/atom {:expanded false})]
    (fn [{:keys [label desc info sub-content buttons]}]
      [areas/shadow-area {:styles {:margin (str "0 0 " spacing/space-x-small-rem " 0")}}
       [grid/grid-wrap {:rows 1
                        :cols 2
                        :styles {:padding (str "0 " spacing/space-x-small-rem)
                                 :grid-template-columns (str "auto minmax(" spacing/space-x-large-rem ", 33%)")}}
        [grid/grid-cell {:col-start 1
                         :col-end 1
                         :styles {:align-self "center"}}
         [:small.vds-label (stylefy/use-style style/list-element-label) label]
         (when desc
           [:small.vds-desc (stylefy/use-style style/list-element-desc) desc])
         (when info
           [:small.vds-info (stylefy/use-style style/list-element-info) info])]
        [grid/grid-cell {:col-start 2
                         :col-end 2
                         :styles {:align-self "center"
                                  :justify-self "right"
                                  :height spacing/space-base-rem}}
         (map-indexed #(with-meta %2 {:key %1})
                      (if sub-content
                        (conj buttons [icons/clickable {:name (if (:expanded @state) "expand_less" "expand_more")
                                                        :styles {:padding (str "0 0 0 " spacing/space-x-small-rem)}
                                                        :on-click-fn #(swap! state assoc :expanded (not (:expanded @state)))}])
                        buttons))]]
       (when sub-content
         [:div.vds-sub-content {:style {:padding "0 8px"
                                        :display (if (:expanded @state) "block" "none")}}
          [dividers/default]
          (map-indexed #(with-meta %2 {:key %1}) sub-content)])])))

(defn drag-n-drop-area [{:keys [help-text on-change-fn filename-label desc-label]}]
  (assert on-change-fn)
  (let [files (r/atom {})
        label-id (r/atom (sanitize-id (str (subs (str (rand)) 2 9))))
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
        file-metadata-changed (fn [key-path new-metadata]
                                (do
                                  (swap! files assoc-in key-path new-metadata)
                                  (on-change-fn @files)))
        remove-item #(do
                       (swap! files dissoc %)
                       (on-change-fn @files))]
    (fn []
      [:div {:on-drag-over #(.preventDefault %)
             :on-drag-enter #(.preventDefault %)
             :on-drag-start #(.setData (.-dataTransfer %) "text/plain" "") ;; for Firefox. You MUST set something as data.
             :on-drop #(do
                         (.preventDefault %)
                         (get-files (.-dataTransfer %)))}
       (when (not (empty? @files))
         (into [:ul (stylefy/use-style style/drag-n-drop-content-ul)]
               (for [key (sort (keys @files))]
                 (let [file-item (get @files key)]
                   ^{:key key} [list-element {:label (:name file-item)
                                              :desc (:description file-item)
                                              :sub-content [[input-field {:label (if filename-label filename-label "Filename")
                                                                          :placeholder ""
                                                                          :content (:name file-item)
                                                                          :on-change-fn (partial file-metadata-changed [key :name])
                                                                          :styles {:margin (str spacing/space-x-small-rem "  0")}}]
                                                            [input-field {:label (if desc-label desc-label "Description")
                                                                          :placeholder ""
                                                                          :content (:description file-item)
                                                                          :on-change-fn (partial file-metadata-changed [key :description])
                                                                          :styles {:margin (str spacing/space-x-small-rem "  0")}}]]
                                              :buttons [[icons/clickable {:name "clear"
                                                                          :on-click-fn #(remove-item key)}]]}]))))
       [:div (merge (stylefy/use-style style/drag-n-drop-helparea)
                    {:on-click #(.click (dommy/sel1 @ds/root-element (keyword (str "#file-input-" @label-id))))})
        (when help-text [:p (stylefy/use-sub-style style/drag-n-drop-helparea :p) help-text])
        [icons/icon {:name "cloud_upload"}]
        [:input {:id (str "file-input-" @label-id)
                 :type "file"
                 :multiple "multiple"
                 :on-change #(do
                               (get-files (.-target %))
                               (set! (-> % .-target .-value) nil))
                 :style {:display "none"}}]]])))
