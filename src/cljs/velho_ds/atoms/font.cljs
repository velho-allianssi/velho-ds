(ns velho-ds.atoms.font
  (:require [stylefy.core :as stylefy]
            [velho-ds.atoms.style.font :as style]
            [reagent.dom :as dom]))

(defn font-styles []
  (.appendChild (aget (.getElementsByTagName js/document "head") 0) (doto (.createElement js/document "link")
                                                                      (.setAttribute "href" "https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i")
                                                                      (.setAttribute "rel" "stylesheet")))
  (stylefy/tag "p" style/p)
  (stylefy/tag "a" style/a)
  (stylefy/tag "span" style/span)
  (stylefy/tag "small" style/small)
  (stylefy/tag "h1" style/h1)
  (stylefy/tag "h2" style/h2)
  (stylefy/tag "h3" style/h3)
  (stylefy/tag "h4" style/h4)
  (stylefy/tag "th" style/th)
  (stylefy/tag "td" style/td)
  (stylefy/tag "li" style/li))
