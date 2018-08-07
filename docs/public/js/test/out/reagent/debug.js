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
var G__34839__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34839 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34840__i = 0, G__34840__a = new Array(arguments.length -  0);
while (G__34840__i < G__34840__a.length) {G__34840__a[G__34840__i] = arguments[G__34840__i + 0]; ++G__34840__i;}
  args = new cljs.core.IndexedSeq(G__34840__a,0,null);
} 
return G__34839__delegate.call(this,args);};
G__34839.cljs$lang$maxFixedArity = 0;
G__34839.cljs$lang$applyTo = (function (arglist__34841){
var args = cljs.core.seq(arglist__34841);
return G__34839__delegate(args);
});
G__34839.cljs$core$IFn$_invoke$arity$variadic = G__34839__delegate;
return G__34839;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__34842__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34843__i = 0, G__34843__a = new Array(arguments.length -  0);
while (G__34843__i < G__34843__a.length) {G__34843__a[G__34843__i] = arguments[G__34843__i + 0]; ++G__34843__i;}
  args = new cljs.core.IndexedSeq(G__34843__a,0,null);
} 
return G__34842__delegate.call(this,args);};
G__34842.cljs$lang$maxFixedArity = 0;
G__34842.cljs$lang$applyTo = (function (arglist__34844){
var args = cljs.core.seq(arglist__34844);
return G__34842__delegate(args);
});
G__34842.cljs$core$IFn$_invoke$arity$variadic = G__34842__delegate;
return G__34842;
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
