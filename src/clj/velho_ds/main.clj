(ns velho-ds.main
  (:gen-class)
  (:require [velho-ds.token-loader :as tl]))

(defn -main [& args]
  (println "Generating tokens")
  (tl/create-tokens-from-path "resources/tokens")
  (println "Tokens generated"))