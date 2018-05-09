(ns velho-ds.atoms.valikot
  (:require [stylefy.core :as stylefy]
            [reagent.core :as r]
            [velho-ds.tokens.color :as color]
            [velho-ds.tokens.line-height :as lh]))

(def mode {:hover {:background-color "rgb(98, 131, 213)"}
           :before{:content "\2228"
                   :width "50px"
                   :height "100%"
                   :line-height lh/line_height_base
                   :visibility "visible"}
           :after {:content "\2228"
                   :width "50px"
                   :height "100%"
                   :line-height lh/line_height_base
                   :visibility "visible"} })

(def alasveto-style {:display "inline-block"
                     :appearance "none"
                     :background-color "transparent"
                     :border "none"
                     :border-bottom (str "1px solid " color/color_neutral-5)
                     :border-radius "0px"
                     :margin "0px"
                     :outline "none"
                     :padding "10px"
                     ::stylefy/vendors ["webkit" "moz" "o"]
                     ::stylefy/auto-prefix #{:border-radius :appearance}
                     :visibility "visible"})

;valinta-fn
(defn alasvetovalikko [data]
  [:select (stylefy/use-style alasveto-style {:on-change #(-> % .-target .-value ((:on-change data)))})
   (for
     [vaihtoehto (:valinnat data)]
     ^{:key (:id vaihtoehto)}
     [:option {:value (:arvo vaihtoehto)} (:arvo vaihtoehto)])])