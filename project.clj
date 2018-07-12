(defproject velho-ds "0.0.0.12"
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
                 [stylefy "1.5.0"]]

  :plugins [[lein-cljsbuild "1.1.5" :exclusions [[org.clojure/clojure]]]
            [lein-figwheel "0.5.15"]]

  :source-paths ["src/clj" "src/cljs"]
  :test-paths ["test/clj" "test/cljs"]

  :main ^:skip-aot velho-ds.main

  :min-lein-version "2.5.0"
  :clean-targets ^{:protect false} [:target-path
                                    [:cljsbuild :builds :dev :compiler :output-dir]
                                    [:cljsbuild :builds :dev :compiler :output-to]
                                    [:cljsbuild :builds :test :compiler :output-dir]
                                    [:cljsbuild :builds :test :compiler :output-to]]

  :resource-paths ["public"]

  :figwheel {:http-server-root "."
             :css-dirs ["public/css"]}
  :cljsbuild {:builds {:dev {:source-paths ["src/cljs" "env/dev/cljs"]
                             :compiler {:main "velho-ds.dev"
                                        :output-to "public/js/app.js"
                                        :output-dir "public/js/out"
                                        :asset-path "js/out"
                                        :source-map true
                                        :optimizations :none
                                        :pretty-print true}
                             :figwheel {:on-jsload "velho-ds.core/mount-root"
                                        :open-urls ["http://localhost:3449/index.html"]}}
                       :test {:source-paths ["src/cljs" "env/dev/cljs" "test/cljs"]
                              :compiler {:output-to "public/js/test/tests.js"
                                         :output-dir "public/js/test/out"
                                         :optimizations :whitespace
                                         :pretty-print true}}
                       :release {:source-paths ["src/cljs" "env/dev/cljs" "test/cljs"]
                                 :compiler {:output-to "target/js/app.js"
                                            :optimizations :advanced}}}}

  :aliases {"dev" ["do" "clean"
                   ["figwheel"]]
            "prod" ["do" "clean"
                    ["cljsbuild" "once" "release"]]}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.7"]
                                  [clj-chrome-devtools "20180528"]]}})