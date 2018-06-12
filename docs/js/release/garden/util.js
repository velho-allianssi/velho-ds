// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___12306 = arguments.length;
var i__4500__auto___12307 = (0);
while(true){
if((i__4500__auto___12307 < len__4499__auto___12306)){
args__4502__auto__.push((arguments[i__4500__auto___12307]));

var G__12308 = (i__4500__auto___12307 + (1));
i__4500__auto___12307 = G__12308;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.util.format.cljs$lang$applyTo = (function (seq12304){
var G__12305 = cljs.core.first(seq12304);
var seq12304__$1 = cljs.core.next(seq12304);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12305,seq12304__$1);
});


/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if(((!((this$ == null))) && (!((this$.garden$util$ToString$to_str$arity$1 == null))))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (garden.util.to_str[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (garden.util.to_str["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

goog.object.set(garden.util.ToString,"_",true);

var G__12309_12315 = garden.util.to_str;
var G__12310_12316 = "_";
var G__12311_12317 = ((function (G__12309_12315,G__12310_12316){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__12309_12315,G__12310_12316))
;
goog.object.set(G__12309_12315,G__12310_12316,G__12311_12317);

goog.object.set(garden.util.ToString,"null",true);

var G__12312_12318 = garden.util.to_str;
var G__12313_12319 = "null";
var G__12314_12320 = ((function (G__12312_12318,G__12313_12319){
return (function (this$){
return "";
});})(G__12312_12318,G__12313_12319))
;
goog.object.set(G__12312_12318,G__12313_12319,G__12314_12320);
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__4502__auto__ = [];
var len__4499__auto___12322 = arguments.length;
var i__4500__auto___12323 = (0);
while(true){
if((i__4500__auto___12323 < len__4499__auto___12322)){
args__4502__auto__.push((arguments[i__4500__auto___12323]));

var G__12324 = (i__4500__auto___12323 + (1));
i__4500__auto___12323 = G__12324;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.util.as_str.cljs$lang$applyTo = (function (seq12321){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12321));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__4502__auto__ = [];
var len__4499__auto___12331 = arguments.length;
var i__4500__auto___12332 = (0);
while(true){
if((i__4500__auto___12332 < len__4499__auto___12331)){
args__4502__auto__.push((arguments[i__4500__auto___12332]));

var G__12333 = (i__4500__auto___12332 + (1));
i__4500__auto___12332 = G__12333;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__12327){
var vec__12328 = p__12327;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12328,(0),null);
var radix__$1 = (function (){var or__3922__auto__ = radix;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.util.string__GT_int.cljs$lang$applyTo = (function (seq12325){
var G__12326 = cljs.core.first(seq12325);
var seq12325__$1 = cljs.core.next(seq12325);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12326,seq12325__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___12340 = arguments.length;
var i__4500__auto___12341 = (0);
while(true){
if((i__4500__auto___12341 < len__4499__auto___12340)){
args__4502__auto__.push((arguments[i__4500__auto___12341]));

var G__12342 = (i__4500__auto___12341 + (1));
i__4500__auto___12341 = G__12342;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__12336){
var vec__12337 = p__12336;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12337,(0),null);
var radix__$1 = (function (){var or__3922__auto__ = radix;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.util.int__GT_string.cljs$lang$applyTo = (function (seq12334){
var G__12335 = cljs.core.first(seq12334);
var seq12334__$1 = cljs.core.next(seq12334);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12335,seq12334__$1);
});

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__4292__auto__ = (function garden$util$comma_join_$_iter__12343(s__12344){
return (new cljs.core.LazySeq(null,(function (){
var s__12344__$1 = s__12344;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12344__$1);
if(temp__5457__auto__){
var s__12344__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12344__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__12344__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__12346 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__12345 = (0);
while(true){
if((i__12345 < size__4291__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__12345);
cljs.core.chunk_append(b__12346,((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)));

var G__12347 = (i__12345 + (1));
i__12345 = G__12347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12346),garden$util$comma_join_$_iter__12343(cljs.core.chunk_rest(s__12344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12346),null);
}
} else {
var x = cljs.core.first(s__12344__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)),garden$util$comma_join_$_iter__12343(cljs.core.rest(s__12344__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && (!(cljs.core.record_QMARK_(x))));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
var and__3911__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$media);
} else {
return and__3911__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__3911__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$keyframes);
} else {
return and__3911__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__3911__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$import);
} else {
return and__3911__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return garden.util.prefix(p__$1,s);
} else {
return garden.util.prefix([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4009__auto__ = a;
var y__4010__auto__ = b;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var top = (function (){var x__4006__auto__ = a;
var y__4007__auto__ = b;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__12348 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12348,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12348,(1),null);
var x__4006__auto__ = a__$1;
var y__4007__auto__ = (function (){var x__4009__auto__ = b__$1;
var y__4010__auto__ = n;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__4502__auto__ = [];
var len__4499__auto___12354 = arguments.length;
var i__4500__auto___12355 = (0);
while(true){
if((i__4500__auto___12355 < len__4499__auto___12354)){
args__4502__auto__.push((arguments[i__4500__auto___12355]));

var G__12356 = (i__4500__auto___12355 + (1));
i__4500__auto___12355 = G__12356;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
garden.util.average.cljs$lang$applyTo = (function (seq12351){
var G__12352 = cljs.core.first(seq12351);
var seq12351__$1 = cljs.core.next(seq12351);
var G__12353 = cljs.core.first(seq12351__$1);
var seq12351__$2 = cljs.core.next(seq12351__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12352,G__12353,seq12351__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__4502__auto__ = [];
var len__4499__auto___12358 = arguments.length;
var i__4500__auto___12359 = (0);
while(true){
if((i__4500__auto___12359 < len__4499__auto___12358)){
args__4502__auto__.push((arguments[i__4500__auto___12359]));

var G__12360 = (i__4500__auto___12359 + (1));
i__4500__auto___12359 = G__12360;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5455__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5455__auto__){
var rst = temp__5455__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__12361 = (i - (1));
var G__12362 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__12361;
v_seqs__$2 = G__12362;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.util.cartesian_product.cljs$lang$applyTo = (function (seq12357){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12357));
});

