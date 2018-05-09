(ns velho-ds.atoms.valikot
  (:require [stylefy.core :as stylefy]
            [reagent.core :as r]
            [velho-ds.tokens.color :as color]
            [velho-ds.tokens.line-height :as lh]))




(def alasveto-style {:display "inline-block"
                     :background-color "transparent"
                     :border "none"
                     :border-bottom (str "1px solid " color/color_neutral-5)
                     :color color/color_neutral-4
                     :padding "10px"
                     :outline "none"
                     :appearance "none"
                     :border-radius "0px"
                     :marging "0px"
                     ::stylefy/mode {:after {:content "\2228"
                                             :width "50px"
                                             :height "100%"
                                             :line-height lh/line_height_base
                                             :visibility "visible"} }
                     ::stylefy/vendors ["webkit" "moz" "o"]
                     ::stylefy/auto-prefix #{:border-radius :appearance}})

;valinta-fn
(defn alasvetovalikko [data]
  [:select (stylefy/use-style alasveto-style {:on-change #(-> % .-target .-value ((:on-change data)))})
   (for
     [vaihtoehto (:valinnat data)]
     ^{:key (:id vaihtoehto)}
     [:option {:value (:arvo vaihtoehto)} (:arvo vaihtoehto)])])
