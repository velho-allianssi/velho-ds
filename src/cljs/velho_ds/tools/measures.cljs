(ns velho-ds.tools.measures)

(defn str->rem [s]
  (str s "rem"))

(defn rem->int [rem]
  (js/parseInt rem))

(defn rem-times [rem times]
  (str->rem (* (rem->int rem) times)))