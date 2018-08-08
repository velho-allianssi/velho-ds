(ns velho-ds.chrome-test
  (:require [clojure.test :refer :all]
            [clj-chrome-devtools.cljs.test :refer [build-and-test]]))

(deftest run-chrome-tests
  (try (build-and-test "test"
                       '[velho-ds.atoms.button-test
                         velho-ds.molecules.field-test])
       (catch AssertionError e
         (is false "Front-end tests failed."))))