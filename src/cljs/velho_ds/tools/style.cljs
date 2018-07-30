(ns velho-ds.tools.style)

(defn merge-styles [args & static-styles]
  (assoc args
    :styles (reduce merge
                    (conj (into [] static-styles) (:styles args)))))
