(ns velho-ds.main
  (:gen-class)
  (:require [velho-ds.token-loader :as tl]))

(defn -main [& args]
  (tl/create-tokens-from-path "resources/tokens"))