(ns velho-ds.macros)

(defmacro $-> [input]
  `(vector :div.gen-example
           (vector :div.content-example
                   (list ~input))
           (vector :pre.code-example
                   (vector :code.monokai (str (quote ~input))))))