(ns velho-ds.macros)

(defmacro $-> [input]
  `(vector :div.code-example-content
           (vector :div.code-example-content-example
                   (list ~input))
           (vector :pre.code-example-content-code
                   (vector :code.monokai (str (quote ~input))))))