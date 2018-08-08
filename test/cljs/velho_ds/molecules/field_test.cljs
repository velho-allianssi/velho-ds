(ns velho-ds.molecules.field-test
  (:require [cljs-react-test.simulate :as sim]
            [clojure.test :refer [deftest is use-fixtures testing]]
            [dommy.core :as dommy]
            [reagent.core :as r]
            [velho-ds.testutils :refer [container-fixture sel1 sel container style-definition]]
            [velho-ds.molecules.field :as field]
            [clojure.string :as string]))

(use-fixtures :each container-fixture)

(deftest file-list-item
  (let [deleted (atom false)
        changed (atom {})
        params  {:filename     "Filename"
                 :metadata     {:description "File description"}
                 :on-change-fn #(reset! changed %)
                 :delete-fn    #(swap! deleted not)}]

    (r/render [field/file-list-item params] @container)

    (testing "Filename is set as label for the component"
      (is (= (:filename params)
             (dommy/text (sel1 :.vds-filename)))))

    (testing "Capitalized metadatafield key is set as label for metadatafield"
      (is (= (string/capitalize (name (first (keys (:metadata params)))))
             (dommy/text (first (array-seq (sel :.vds-input-field>label)))))))

    (testing "Metadata is set to metadatafield"
      (is (= (get-in params [:metadata :description])
             (dommy/value (first (array-seq (sel [:.vds-input-field :input])))))))

    (testing "Changing metadata calls the on-change-fn"
      (let [new-value "New value"]
        (sim/change (first (array-seq (sel [:.vds-input-field :input]))) {:target {:value new-value}})
        (is (= {:description new-value}
               @changed))
        (reset! changed {})))

    (testing "Clicking edit toggles the visibility of metadata div"
      (let [metafields (sel1 :.vds-metadata-fields)
            metafields-display-value #(style-definition metafields "display")]
        (is (= "none"
              (metafields-display-value)))

        (sim/click (first (array-seq (sel :button))) {})
        (r/force-update-all)

        (is (= "block"
               (metafields-display-value)))

        (sim/click (first (array-seq (sel :button))) {})
        (r/force-update-all)

        (is (= "none"
               (metafields-display-value)))))

    (testing "Clicking delete calls the delete-fn"
      (sim/click (last (array-seq (sel :button))) {})
      (is (= true
             @deleted))
      (reset! deleted false)
      (r/force-update-all))

    (testing "Multiple metadata fields"
      (let [multiple-meta (assoc params :metadata (merge (:metadata params) {:another-data "Another value"}))]
        ; Recreate the component with different parameters for this test
        (r/unmount-component-at-node @container)
        (r/render [field/file-list-item multiple-meta] @container)

        (let [input-fields (array-seq (sel [:.vds-input-field :input]))]

          (testing "Multiple fields are generated"
            (is (= 2
                  (count input-fields)))

            (is (some #(= (dommy/value (first input-fields)) %)
                      (vals (:metadata multiple-meta))))

            (is (some #(= (dommy/value (last input-fields)) %)
                      (vals (:metadata multiple-meta)))))

          (testing "Changing multiple metadata calls the on-change-fn"
            (let [new-value-1 "New value 1"
                  new-value-2 "New value 2"
                  inputs (array-seq (sel [:.vds-input-field :input]))]
              (sim/change (first inputs) {:target {:value new-value-1}})
              (sim/change (last inputs) {:target {:value new-value-2}})
              (is (= {:description new-value-1
                      :another-data new-value-2}
                     @changed))
              (reset! changed {}))))

        ; Reset the state to the same that it was before this test
        (r/unmount-component-at-node @container)
        (r/render [field/file-list-item params] @container)))))
