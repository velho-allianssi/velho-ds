(ns velho-ds.route_generator
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [me.raynes.fs :as fs]))



(defn remove-root-path [path root-path]
  (if (fs/absolute? path)
    (let [splitted (str/split (str path) (re-pattern root-path))]
      (if (> (count splitted) 1)
        (last splitted)
        ""))
    (str/replace path root-path "")))

(defn path-to-vector [path]
  (str/split path #"/"))

(defn append-string [vec s]
  (mapv #(str % s) vec))

(defn dir-to-map [root-path [io-file-path _ files]]
  (let [path-vec (-> io-file-path
                     (remove-root-path root-path)
                     (path-to-vector)
                     (append-string "/"))
        mds (map #(str/replace % #".md" "") (filter #(= ".md" (fs/extension %)) files))]
    (map #(vector (conj path-vec (str/replace % "index" "")) (keyword %)) mds)))

(defn create-route-map [path-list]
  (reduce
    (fn [m [k v]]
      (assoc-in m k v))
    {}
    path-list))

(defn create-route-content [content]
  (str
    "(ns velho-ds.routes)\n\n"
    "; THIS IS GENERATED FILE FOR ROUTES.\n"
    "; CHANGES TO THIS FILE WILL BE OVERWRITTEN!\n\n"
    "(def routes [\"/\" " (get content "/") "])"))

(defn write-routes-to-file! [path content]
  (let [filepath (str path "/routes.cljs")]
    (fs/delete filepath)
    (fs/mkdir path)
    (spit filepath content)))

(defn generate-routes [root-path]
  (write-routes-to-file! "src/cljs/velho_ds"
                         (create-route-content
                           (create-route-map
                             (mapcat #(dir-to-map root-path %) (fs/iterate-dir root-path))))))
