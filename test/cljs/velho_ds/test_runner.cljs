(ns velho-ds.test-runner
  (:require [clojure.test :as t :refer [run-tests report]]
            [cljs-test-display.core]
            [velho-ds.atoms.button-test]
            [velho-ds.molecules.field-test]))

(enable-console-print!)

(run-tests
  (cljs-test-display.core/init! "app")
  'velho-ds.atoms.button-test
  'velho-ds.molecules.field-test)
