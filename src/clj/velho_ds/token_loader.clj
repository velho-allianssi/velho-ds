(ns velho-ds.token-loader
  (:require [yaml.core :as yaml]
            [clojure.string :as str]
            [clojure.java.io :as io]
            [me.raynes.fs :as fs]))

(def tokens-path "src/cljs/velho_ds/tokens/")

(defn handle-keys [yaml-key data]
  (let [root (yaml-key data)]
    (into {} (for [key (vec (keys root))]
               (assoc {} key (:value (key root)))))))

(defn map-aliases [aliases value]
  (str/replace value #"\{\!(.+?)\}" #((keyword (%1 1)) aliases)))

(defn link-aliases [props aliases]
  (let [keys (vec (keys props))]
    (into {} (for [key keys]
               (assoc {} key (str "\""(map-aliases aliases (key props)) "\""))))))

(defn read-tokens! [resource]
  (when (= ".yml" (fs/extension (io/as-file resource)))
    (let [data (yaml/from-file resource)
         props (handle-keys :props data)
         aliases (handle-keys :aliases data)]
     (link-aliases props aliases))))

(defn def-ns [filename]
  (str "(ns velho-ds.tokens." filename ")\n\n"))

(defn def-token [name value]
  (str "(def " name " " value")\n"))

(defn write-tokens! [path data]
  (io/make-parents path)
  (let [file (io/as-file path)]
    (when (fs/exists? file)
     (io/delete-file path)))
  (doall (for [line (vec data)]
           (spit path line :append true)))
  (println (str "Wrote " (count data) " tokens to a namespace at: " path)))

(defn delete-tokens! [tokens-path]
  (doseq [f (.listFiles (clojure.java.io/file tokens-path))]
    (when (fs/file? f) (clojure.java.io/delete-file f))))

(defn create-tokens [[filename resource]]
  (when (= ".yml" (fs/extension (io/as-file resource)))
    (let [props (read-tokens! resource)
         nspace (def-ns filename)
         tokens (map (fn [key]
                       (def-token (name key) (key props))) (keys props))]
     (write-tokens! (str tokens-path (str/replace filename #"-" "_") ".cljs") (concat (list nspace) tokens)))))

(defn get-files-from-path [path]
  (filter #(fs/file? %) (file-seq (clojure.java.io/file path))))

(defn create-tokens-from-path [path]
  (delete-tokens! tokens-path)
  (let [files (get-files-from-path path)
        resource (mapv str (map #(.toPath %) files))
        filenames (mapv str (map #(.getFileName (.toPath %)) files))
        filename (mapv #(str/replace %1 #".yml" "") filenames)]
    (doall (map create-tokens (zipmap filename resource)))))