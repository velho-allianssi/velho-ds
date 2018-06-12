// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35992__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35992 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35993__i = 0, G__35993__a = new Array(arguments.length -  0);
while (G__35993__i < G__35993__a.length) {G__35993__a[G__35993__i] = arguments[G__35993__i + 0]; ++G__35993__i;}
  args = new cljs.core.IndexedSeq(G__35993__a,0,null);
} 
return G__35992__delegate.call(this,args);};
G__35992.cljs$lang$maxFixedArity = 0;
G__35992.cljs$lang$applyTo = (function (arglist__35994){
var args = cljs.core.seq(arglist__35994);
return G__35992__delegate(args);
});
G__35992.cljs$core$IFn$_invoke$arity$variadic = G__35992__delegate;
return G__35992;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35995__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35996__i = 0, G__35996__a = new Array(arguments.length -  0);
while (G__35996__i < G__35996__a.length) {G__35996__a[G__35996__i] = arguments[G__35996__i + 0]; ++G__35996__i;}
  args = new cljs.core.IndexedSeq(G__35996__a,0,null);
} 
return G__35995__delegate.call(this,args);};
G__35995.cljs$lang$maxFixedArity = 0;
G__35995.cljs$lang$applyTo = (function (arglist__35997){
var args = cljs.core.seq(arglist__35997);
return G__35995__delegate(args);
});
G__35995.cljs$core$IFn$_invoke$arity$variadic = G__35995__delegate;
return G__35995;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
