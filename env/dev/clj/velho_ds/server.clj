(ns velho-ds.server)

(defn handler [request]
  {:status 200
   :body (slurp "public/index.html")})