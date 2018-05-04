(ns ^:figwheel-no-load velho-ds.dev
  (:require
    [velho-ds.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
