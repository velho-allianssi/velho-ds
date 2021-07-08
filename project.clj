(defproject velho-ds "0.0.0.92"
  :description "Velho Allianssi Design System"
  :url "https://github.com/velho-allianssi/velho-ds"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.10.0"]

                 ;; Filesystem support
                 [me.raynes/fs "1.4.6"]

                 ;; Yaml
                 [io.forward/yaml "1.0.10"]

                 [zprint "0.5.3"]

                 ;; Front end
                 [org.clojure/clojurescript "1.10.63"]
                 [reagent "1.0.0"]
                 [stylefy "2.2.1" :exclusions [args4j]]
                 [bidi "2.1.6"]
                 [venantius/accountant "0.2.5"]
                 [reagent-utils "0.3.3"]
                 [prismatic/dommy "1.1.0"]]

  :managed-dependencies [[org.clojure/core.rrb-vector "0.1.2"]
                         [org.flatland/ordered "1.5.9"]]

  :plugins [[lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]
            [lein-figwheel "0.5.20" :exclusion [org.clojure/tools.nrepl args4j]]]

  :source-paths ["src/clj" "src/cljc" "src/cljs"]

  :main ^:skip-aot velho-ds.main

  :min-lein-version "2.8.0"
  :clean-targets ^{:protect false} [:target-path
                                    "public/js/out"
                                    "public/js/app.js"]

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
                       {:id "release"
                        :source-paths ["src/cljs" "env/prod/cljs"]
                        :compiler {:main "velho-ds.prod"
                                   :output-to "target/js/app.js"
                                   :optimizations :advanced}}]}

  :aliases {"dev" ["do" "clean"
                   ["figwheel"]]
            "prod" ["do" "clean"
                    ["cljsbuild" "once" "release"]]}

  :profiles {:dev {:source-paths ["env/dev/clj"]
                   :dependencies [[binaryage/devtools "1.0.2"]
                                  [figwheel-sidecar "0.5.20" :exclusions [org.clojure/tools.nrepl org.clojure/core.async args4j]]
                                  [cider/piggieback "0.5.2"]]
                   :plugins [[lein-ancient "0.6.15"]]
                   :repl-options {:init-ns user
                                  :init (user/start)
                                  :nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}
             :release {}})
