(ns velho-ds.atoms.kentat
  (:require [velho-ds.tokens.color :as color]
            [velho-ds.tokens.spacing :as spacing]
            [velho-ds.tokens.font-size :as font-size]
            [velho-ds.tokens.border :as border]
            [velho-ds.tokens.timing :as timing]
            [stylefy.core :as stylefy]
            [velho-ds.tools.measures :as measures]))

(def elementti {:position "relative"
                :display "block"
                :min-height spacing/space-x-large
                :margin spacing/space-base})

(def kentta {:position "absolute"
             :top spacing/space-small-rem
             :width "100%"
             :font-size font-size/font-size-base
             :transition (str "border-color " timing/duration-slow " ease-in-out")
             :outline "none"
             :padding "0"
             :margin "0"
             :min-height (measures/rem-times font-size/font-size-base 2)
             :background "none"
             :border-top "0"
             :border-left "0"
             :border-right "0"
             :border-bottom (str border/border-default " solid")
             :border-color color/color-neutral-3
             ::stylefy/mode {:focus {:border-bottom (str border/border-large " solid")
                                     :border-color color/color-primary}
                             :valid {:border-bottom (str border/border-default " solid")
                                     :border-color color/color-neutral-3}
                             :valid+span {:top "0"
                                          :cursor "inherit"
                                          :font-size font-size/font-size-small}
                             :focus+span {:top "0"
                                          :cursor "inherit"
                                          :font-size font-size/font-size-small
                                          :color color/color-primary}}})

(def kentta-tekstikentta (merge kentta
                                {:overflow-y "scroll"
                                 :resize "none"}))

(def otsikkoteksti {:position "absolute"
                    :display "block"
                    :top spacing/space-base-rem
                    :font-size font-size/font-size-base
                    :transition (str "all " timing/duration-slow " ease-in-out")
                    :width "100%"
                    :cursor "text"})

(def otsikkoteksti-pudotusvalikko {:position "absolute"
                                   :display "block"
                                   :top "0"
                                   :font-size font-size/font-size-small
                                   :cursor "inherit"
                                   :transition (str "all " timing/duration-slow " ease-in-out")
                                   :width "100%"})

(def kentta-pudotusvalikko {:-webkit-appearance "none"
                            :-moz-appearance "none"
                            :appearance "none"
                            :font-family "inherit"
                            :background-color "transparent"
                            :width "100%"
                            :height (measures/rem-times font-size/font-size-base 2)
                            :padding (str spacing/space-xx-small-rem " 0")
                            :color color/text-default
                            :border-top "0"
                            :border-left "0"
                            :border-right "0"
                            :border-bottom (str border/border-default " solid")
                            :border-color color/color-neutral-3
                            :border-radius "0"
                            :margin-top spacing/space-small-rem
                            :font-size font-size/font-size-base
                            ::stylefy/mode {:focus {:outline "none"}}})

(def ikoni {:position "absolute"
            :padding spacing/space-xx-small-rem
            :top spacing/space-small-rem
            :right spacing/space-xx-small-rem
            :pointer-events "none"})

(defn merge-styles [a b]
  {:style (merge (:style a) (:style b))})

(defn teksti
  ([content]
   (teksti content nil))
  ([content args]
   [:div
    [:label (stylefy/use-style elementti)
     [:input (stylefy/use-style kentta {:required "required"})]
     [:span (stylefy/use-style otsikkoteksti) content]]]))

(defn tekstikentta
  ([content]
   (tekstikentta content nil))
  ([content args]
   [:div
    [:label (stylefy/use-style elementti)
     [:textarea (stylefy/use-style kentta-tekstikentta {:required "required"})]
     [:span (stylefy/use-style otsikkoteksti) content]]]))

(defn pudotusvalikko [{:keys [otsikko valinta-fn valinnat oletusvalinta :as parametrit]}]
  [:div
   [:label (stylefy/use-style elementti)
    (into [:select (stylefy/use-style
                     kentta-pudotusvalikko
                     {:on-change #(-> % .-target .-value valinta-fn)})
           (when (not oletusvalinta)
             [:option
              {:value "value"
               :selected "selected"
               :disabled "disabled"}
              "- Ei valintaa -"])
           (stylefy/use-style kentta-pudotusvalikko)]
          (mapv #(vector :option (merge {:value (:id %)}
                                        (when (= oletusvalinta %)
                                          {:selected "selected"}))
                         (:arvo %))
                valinnat))
    [:span (stylefy/use-style otsikkoteksti-pudotusvalikko) otsikko]
    [:i.material-icons (stylefy/use-style ikoni) "arrow_drop_down"]]])