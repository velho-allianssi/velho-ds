(ns velho-ds.atoms.kentat
  (:require [velho-ds.tokens.color :as color]
            [stylefy.core :as stylefy]))

(def elementti {:position "relative"
                :display "block"
                :width "100%"
                :min-height "64px"
                })

(def kentta {:position "absolute"
             :top "16px"
             :width "100%"
             :font-size "1rem"
             :transition "border-color 200ms ease-in-out"
             :outline "none"
             :padding "0"
             :margin "0"
             :height "32px"
             :background "none"
             :border-top "0"
             :border-left "0"
             :border-right "0"
             :border-bottom "1px solid #ddd"
             ::stylefy/mode {:focus {:border-bottom "2px solid #06c"}
                             :valid {:border-bottom "1px solid #ddd"}
                             :valid+span {:top "0"
                                          :cursor "inherit"
                                          :font-size "0.875rem"}
                             :focus+span {:top "0"
                                          :cursor "inherit"
                                          :font-size "0.875rem"
                                          :color "#06c"}}})

(def tekstialuesyote-kentta {:min-height "32px"
                             :padding "8px 0"
                             :background "none"})

(def otsikkoteksti {:position "absolute"
                    :display "block"
                    :top "20px"
                    :font-size "1rem"
                    :transition "all 200ms ease-in-out"
                    :width "100%"
                    :cursor "text"})

(def otsikkoteksti-pudotusvalikko {:position "absolute"
                                   :display "block"
                                   :top "0"
                                   :font-size "0.875rem"
                                   :cursor "inherit"
                                   :transition "all 200ms ease-in-out"
                                   :width "100%"})

(def kentta-pudotusvalikko {:-webkit-appearance "none"
                            :-moz-appearance "none"
                            :appearance "none"
                            :font-family "inherit"
                            :background-color "transparent"
                            :width "100%"
                            :height "32px"
                            :padding "4px 0"
                            :color "#323232"
                            :border-top "0"
                            :border-left "0"
                            :border-right "0"
                            :border-bottom "1px solid #ddd"
                            :border-radius "0px"
                            :margin-top "16px"
                            :font-size "1rem";
                            ::stylefy/mode {:focus {:outline "none"}}})

(def ikoni {:position "absolute"
            :top "0.75em"
            :right "0.75em"
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

(defn pudotusvalikko
  ([content]
   (pudotusvalikko content nil))
  ([content args]
   [:div
    [:label (stylefy/use-style elementti)
     [:select (stylefy/use-style kentta-pudotusvalikko)
      [:option
       {:value "value", :selected "selected", :disabled "disabled"}
       "- Ei valintaa -"]
      [:option {:value "1"} "Option 1"]
      [:option {:value "2"} "Option 2"]
      [:option {:value "3"} "Option 3"]]
     [:span (stylefy/use-style otsikkoteksti-pudotusvalikko) content]
     [:i.material-icons (stylefy/use-style ikoni) "arrow_drop_down"]]]))