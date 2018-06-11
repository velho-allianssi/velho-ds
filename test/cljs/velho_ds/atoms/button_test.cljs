(ns velho-ds.atoms.button-test
  (:require-macros [devcards.core :refer [deftest]]
                   [clojure.test :refer [testing is]]))

(deftest default-button
         "# Testing default button"
         (testing
           "Let's do this"
           (is (= 0 1) "Kaikki on hyvin")))