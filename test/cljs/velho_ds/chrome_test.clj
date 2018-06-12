(ns velho-ds.chrome-test
  (:require [clojure.test :refer :all]
            [clj-chrome-devtools.cljs.test :refer [build-and-test]]))

(deftest run-chrome-tests
  (try (build-and-test "test"
                       '[velho-ds.atoms.button-test])
       (catch AssertionError e
         (is true "Front-end tests failed."))))