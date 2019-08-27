(defproject velho-ds "0.0.0.78"
  :description "Velho Allianssi Design System"
  :url "https://github.com/velho-allianssi/velho-ds"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.10.0"]

                 ;; Filesystem support
                 [me.raynes/fs "1.4.6"]

                 ;; Yaml
                 [io.forward/yaml "1.0.9"]

                 [zprint "0.4.16"]

                 ;; Front end
                 [org.clojure/clojurescript "1.10.63"]
                 [reagent "0.8.1"]
                 [cljsjs/react-with-addons "15.6.1-0"]
                 [stylefy "1.14.0" :exclusions [args4j]]
                 [bidi "2.1.5"]
                 [venantius/accountant "0.2.4"]
                 [reagent-utils "0.3.3"]
                 [prismatic/dommy "1.1.0"]]

  :managed-dependencies [[org.clojure/core.rrb-vector "0.0.13"]
                         [org.flatland/ordered "1.5.7"]]

  :plugins [[lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]
            [lein-figwheel "0.5.19" :exclusion [org.clojure/tools.nrepl args4j]]]

  :source-paths ["src/clj" "src/cljc" "src/cljs"]
  :test-paths ["test/clj" "test/cljs"]

  :main ^:skip-aot velho-ds.main

  :min-lein-version "2.8.0"
  :clean-targets ^{:protect false} [:target-path
                                    "public/js/out"
                                    "public/js/app.js"
                                    "public/js/test/out"
                                    "public/js/test/tests.js"]

  :resource-paths ["public"]

  :figwheel {:http-server-root "."
             :ring-handler "velho-ds.server/handler"
             :css-dirs ["public/css"]
             :server-port 3450}
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs" "src/cljc" "env/dev/clj" "env/dev/cljs"]
                        :compiler {:main "velho-ds.dev"
                                   :output-to "public/js/app.js"
                                   :output-dir "public/js/out"
                                   :asset-path "/js/out"
                                   :source-map true
                                   :optimizations :none
                                   :pretty-print true}
                        :figwheel {:on-jsload "velho-ds.core/mount-root"
                                   :open-urls ["http://localhost:3450"]}}
                       {:id "test"
                        :source-paths ["src/cljs" "env/dev/cljs" "test/cljs"]
                        :compiler {:output-to "public/js/test/tests.js"
                                   :output-dir "public/js/test/out"
                                   :optimizations :whitespace
                                   :pretty-print true}}
                       {:id "testwheel"
                        :source-paths ["src/cljs" "src/cljc" "test/cljs"]
                        :figwheel {:open-urls ["http://localhost:3600/public/test.html"]}
                        :compiler {:output-to "target/test/resources/public/cljstest.js"
                                   :output-dir "target/test/resources/public/cljstest/out"
                                   :asset-path "cljstest/out"
                                   :main velho-ds.test-runner
                                   :optimizations :none
                                   :pretty-print true}}
                       {:id "release"
                        :source-paths ["src/cljs" "env/prod/cljs"]
                        :compiler {:main "velho-ds.prod"
                                   :output-to "target/js/app.js"
                                   :optimizations :advanced}}]}

  :aliases {"dev" ["do" "clean"
                   ["figwheel"]]
            "prod" ["do" "clean"
                    ["cljsbuild" "once" "release"]]
            "testwheel" ["with-profile" "testwheel" "do"
                         "clean"
                         ["figwheel" "testwheel"]]}

  :profiles {:dev {:source-paths ["env/dev/clj"]
                   :dependencies [[binaryage/devtools "0.9.10"]
                                  [figwheel-sidecar "0.5.19" :exclusions [org.clojure/tools.nrepl org.clojure/core.async args4j]]
                                  [cider/piggieback "0.4.1"]
                                  [cljs-react-test "0.1.4-SNAPSHOT"]
                                  [clj-chrome-devtools "20190601" :exclusions [org.clojure/core.async]]]
                   :repl-options {:init-ns user
                                  :init (user/start)
                                  :nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}
             :release {}
             :testwheel {:resource-paths ["public" "env/dev/resources" "target/test/resources"]
                         :dependencies [[cljs-react-test "0.1.4-SNAPSHOT"]
                                        [com.bhauman/cljs-test-display "0.1.1"]]
                         :figwheel {:server-port 3600}}})
