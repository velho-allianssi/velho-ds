(ns user
  (:use [figwheel-sidecar.repl-api :as ra]))

(defn start []
  (ra/start-figwheel!))

(defn repl[]
  (ra/cljs-repl))

(defn stop []
  (ra/stop-figwheel!))
