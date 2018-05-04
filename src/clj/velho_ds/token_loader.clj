(ns velho-ds.token-loader
  (:require [yaml.core :as yaml]
            [clojure.string :as str]
            [clojure.java.io :as io]))

(def yaml-resource-path "resources/")

(defn handle-keys [yaml-key data]
  (let [root (yaml-key data)]
    (into {} (for [key (vec (keys root))]
               (assoc {} key (:value (key root)))))))

(defn map-aliases [aliases value]
  (str/replace value #"\{\!(.+)\}" #((keyword (%1 1)) aliases)))

(defn link-aliases [props aliases]
  (let [keys (vec (keys props))]
    (into {} (for [key keys]
               (assoc {} key (str "\""(map-aliases aliases (key props)) "\""))))))

(defn read-tokens [file]
  (let [data (yaml/from-file (str yaml-resource-path (:name file) "." (:suffix file)))
        props (handle-keys :props data)
        aliases (handle-keys :aliases data)]
    (link-aliases props aliases)))

(defn def-ns [filename]
  (str "(ns velho-ds.tokens." filename ")\n\n"))

(defn def-token [name value]
  (str "(def " name " " value")\n"))

(defn write-tokens! [path data]
  (io/make-parents path)
  (if (.exists (io/as-file path))
    (io/delete-file path))
  (for [line (vec data)]
    (spit path line :append true)))

(defn create-tokens [file]
  (let [props (read-tokens file)
        nspace (def-ns (:name file))
        tokens (map (fn [key]
                      (def-token (name key) (key props))) (keys props))]
    (write-tokens! (str "src/cljs/velho_ds/tokens/" (:name file) ".cljs") (concat (list nspace) tokens))))