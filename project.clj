(defproject velho-ds "0.0.0.15"
  :description "Velho Allianssi Design System"
  :url "https://github.com/trinne/velho-ds"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0"]

                 ;; Filesystem support
                 [me.raynes/fs "1.4.6"]

                 ;; Yaml
                 [io.forward/yaml "1.0.8"]

                 ;; Front end
                 [org.clojure/clojurescript "1.10.238"]
                 [reagent "0.8.0"]
                 [stylefy "1.7.0"]
                 [bidi "2.1.3"]
                 [venantius/accountant "0.2.4"]
                 [reagent-utils "0.3.1"]]

  :plugins [[lein-cljsbuild "1.1.5" :exclusions [[org.clojure/clojure]]]
            [lein-figwheel "0.5.15"]]

  :source-paths ["src/clj" "src/cljs"]
  :test-paths ["test/clj" "test/cljs"]

  :main ^:skip-aot velho-ds.main

  :min-lein-version "2.5.0"
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
                            :source-paths ["src/cljs" "env/dev/clj" "env/dev/cljs"]
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
                       {:id "release"
                                 :source-paths ["src/cljs" "env/dev/cljs" "test/cljs"]
                                 :compiler {:output-to "target/js/app.js"
                                            :optimizations :advanced}}]}

  :aliases {"dev" ["do" "clean"
                   ["figwheel"]]
            "prod" ["do" "clean"
                    ["cljsbuild" "once" "release"]]}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.7"]
                                  [clj-chrome-devtools "20180528"]]}})