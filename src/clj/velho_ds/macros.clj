(ns velho-ds.macros)

(defmacro $-> [input]
  `(vector :div.code-example-content {:key ~input}
           (vector :div.code-example-content-example
                   (map-indexed #(with-meta %2 {:key %1}) (list ~input)))
           (vector :pre.code-example-content-code {:key ~input}
                   (vector :code.monokai (str (quote ~input))))))