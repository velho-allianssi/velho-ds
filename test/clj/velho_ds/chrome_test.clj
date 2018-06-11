(ns velho-ds.chrome-test
  (:require [clojure.test :refer [deftest]]
            [clj-chrome-devtools.cljs.test :refer [build-and-test]]))

(deftest run-chrome-tests
  (build-and-test "Running Front-end tests..."
                  '[velho-ds.atoms.button-test]))
