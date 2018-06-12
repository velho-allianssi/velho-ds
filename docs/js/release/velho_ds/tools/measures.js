// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('velho_ds.tools.measures');
goog.require('cljs.core');
goog.require('cljs.core.constants');
velho_ds.tools.measures.str__GT_rem = (function velho_ds$tools$measures$str__GT_rem(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"rem"].join('');
});
velho_ds.tools.measures.rem__GT_int = (function velho_ds$tools$measures$rem__GT_int(rem){
return parseInt(rem);
});
velho_ds.tools.measures.rem_times = (function velho_ds$tools$measures$rem_times(rem,times){
return velho_ds.tools.measures.str__GT_rem((velho_ds.tools.measures.rem__GT_int(rem) * times));
});
