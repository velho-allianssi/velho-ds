(ns velho-ds.main
  (:gen-class)
  (:require [velho-ds.token-loader :as tl]
            [velho-ds.route_generator :as rg]))

(defn -main [& args]
  (println "Generating tokens...")
  (tl/create-tokens-from-path "resources/tokens")
  (println "Tokens generated.")
  (println "Generating routing map...")
  (rg/generate-routes "resources/pages")
  (println "Routing map generated."))