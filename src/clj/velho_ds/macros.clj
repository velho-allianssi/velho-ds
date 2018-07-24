(ns velho-ds.macros)

(defmacro $-> [input]
  `(vector :div.rds-code-example-content {:key ~input}
           (vector :div.rds-code-example-content-example
                   (map-indexed #(with-meta %2 {:key %1}) (list ~input)))
           (vector :pre.rds-code-example-content-code {:key ~input}
                   (vector :code.hljs.monokai (str (quote ~input))))))