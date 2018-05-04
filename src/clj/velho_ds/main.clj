(ns velho-ds.main
  (:gen-class)
  (:require [velho-ds.token-loader :as tl]))

(defn -main [& args]
  (println (tl/create-tokens {:name "color"
                            :suffix "yml"})))