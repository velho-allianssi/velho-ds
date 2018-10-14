(ns velho-ds.macros
  (:require [zprint.core :refer [zprint-str]]))

(defmacro $-> [input]
  `(vector :div.rds-code-example {:key ~input}
           (vector :div.rds-code-example-content-example
                   (map-indexed #(with-meta %2 {:key %1}) (list ~input)))
           (vector :pre.rds-code-example-content-code {:key ~input}
                   (vector :code.hljs.monokai
                           (zprint-str (str (quote ~input)) {:parse-string-all? true
                                                             :map {:comma? false}})))))
