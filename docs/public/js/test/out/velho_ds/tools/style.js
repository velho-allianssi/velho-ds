// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.tools.style');
goog.require('cljs.core');
velho_ds.tools.style.merge_styles = (function velho_ds$tools$style$merge_styles(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42988 = arguments.length;
var i__4500__auto___42989 = (0);
while(true){
if((i__4500__auto___42989 < len__4499__auto___42988)){
args__4502__auto__.push((arguments[i__4500__auto___42989]));

var G__42990 = (i__4500__auto___42989 + (1));
i__4500__auto___42989 = G__42990;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return velho_ds.tools.style.merge_styles.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

velho_ds.tools.style.merge_styles.cljs$core$IFn$_invoke$arity$variadic = (function (args,static_styles){
return cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,static_styles),new cljs.core.Keyword(null,"styles","styles",1954480375).cljs$core$IFn$_invoke$arity$1(args))));
});

velho_ds.tools.style.merge_styles.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
velho_ds.tools.style.merge_styles.cljs$lang$applyTo = (function (seq42986){
var G__42987 = cljs.core.first.call(null,seq42986);
var seq42986__$1 = cljs.core.next.call(null,seq42986);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42987,seq42986__$1);
});

