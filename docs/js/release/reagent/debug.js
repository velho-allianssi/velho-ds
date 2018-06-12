// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__11774__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11775__i = 0, G__11775__a = new Array(arguments.length -  0);
while (G__11775__i < G__11775__a.length) {G__11775__a[G__11775__i] = arguments[G__11775__i + 0]; ++G__11775__i;}
  args = new cljs.core.IndexedSeq(G__11775__a,0,null);
} 
return G__11774__delegate.call(this,args);};
G__11774.cljs$lang$maxFixedArity = 0;
G__11774.cljs$lang$applyTo = (function (arglist__11776){
var args = cljs.core.seq(arglist__11776);
return G__11774__delegate(args);
});
G__11774.cljs$core$IFn$_invoke$arity$variadic = G__11774__delegate;
return G__11774;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__11777__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11778__i = 0, G__11778__a = new Array(arguments.length -  0);
while (G__11778__i < G__11778__a.length) {G__11778__a[G__11778__i] = arguments[G__11778__i + 0]; ++G__11778__i;}
  args = new cljs.core.IndexedSeq(G__11778__a,0,null);
} 
return G__11777__delegate.call(this,args);};
G__11777.cljs$lang$maxFixedArity = 0;
G__11777.cljs$lang$applyTo = (function (arglist__11779){
var args = cljs.core.seq(arglist__11779);
return G__11777__delegate(args);
});
G__11777.cljs$core$IFn$_invoke$arity$variadic = G__11777__delegate;
return G__11777;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
