(ns velho-ds.prod
  (:require
    [velho-ds.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
