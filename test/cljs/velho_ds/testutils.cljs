(ns velho-ds.testutils
  (:require [dommy.core :as dommy]
            [reagent.dom :as dom]
            [reagent.interop :refer [$]]
            [cljs-react-test.utils :as tu]))

(def container (atom nil))

(def container-fixture
  {:before #(reset! container (tu/new-container!))
   :after #(do
             (tu/unmount! @container)
             (reset! container nil))})

(defn sel1 [selector]
  (dommy/sel1 @container selector))

(defn sel [selector]
  (dommy/sel @container selector))

(defn style-definition
  [dom-obj property]
  (.getPropertyValue (.getComputedStyle js/window dom-obj) property))
