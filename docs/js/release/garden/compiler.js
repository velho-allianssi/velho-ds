// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('garden.compiler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('garden.color');
goog.require('garden.compression');
goog.require('garden.selectors');
goog.require('garden.units');
goog.require('garden.util');
goog.require('garden.types');
/**
 * The current compiler flags.
 */
garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$pretty_DASH_print_QMARK_,true,cljs.core.cst$kw$preamble,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$output_DASH_to,null,cljs.core.cst$kw$vendors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$auto_DASH_prefix,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$media_DASH_expressions,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nesting_DASH_behavior,cljs.core.cst$kw$default], null)], null);
/**
 * Retun a function to call when rendering a media expression.
 *   The returned function accepts two arguments: the media
 *   expression being evaluated and the current media expression context.
 *   Both arguments are maps. This is used to provide semantics for nested
 *   media queries.
 */
garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$merge,(function (expr,context){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,expr], 0));
}),cljs.core.cst$kw$default,(function (expr,_){
return expr;
})], null);
/**
 * The current parent selector context.
 */
garden.compiler._STAR_selector_context_STAR_ = null;
/**
 * The current media query context.
 */
garden.compiler._STAR_media_query_context_STAR_ = null;
var ret__4533__auto___13900 = (function (){
garden.compiler.with_selector_context = (function garden$compiler$with_selector_context(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13901 = arguments.length;
var i__4500__auto___13902 = (0);
while(true){
if((i__4500__auto___13902 < len__4499__auto___13901)){
args__4502__auto__.push((arguments[i__4500__auto___13902]));

var G__13903 = (i__4500__auto___13902 + (1));
i__4500__auto___13902 = G__13903;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$garden$compiler_SLASH__STAR_selector_DASH_context_STAR_,null,(1),null)),(new cljs.core.List(null,selector_context,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null))], 0))));
});

garden.compiler.with_selector_context.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
garden.compiler.with_selector_context.cljs$lang$applyTo = (function (seq13896){
var G__13897 = cljs.core.first(seq13896);
var seq13896__$1 = cljs.core.next(seq13896);
var G__13898 = cljs.core.first(seq13896__$1);
var seq13896__$2 = cljs.core.next(seq13896__$1);
var G__13899 = cljs.core.first(seq13896__$2);
var seq13896__$3 = cljs.core.next(seq13896__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13897,G__13898,G__13899,seq13896__$3);
});

return null;
})()
;
garden.compiler.with_selector_context.cljs$lang$macro = true;

var ret__4533__auto___13908 = (function (){
garden.compiler.with_media_query_context = (function garden$compiler$with_media_query_context(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13909 = arguments.length;
var i__4500__auto___13910 = (0);
while(true){
if((i__4500__auto___13910 < len__4499__auto___13909)){
args__4502__auto__.push((arguments[i__4500__auto___13910]));

var G__13911 = (i__4500__auto___13910 + (1));
i__4500__auto___13910 = G__13911;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$garden$compiler_SLASH__STAR_media_DASH_query_DASH_context_STAR_,null,(1),null)),(new cljs.core.List(null,selector_context,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null))], 0))));
});

garden.compiler.with_media_query_context.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
garden.compiler.with_media_query_context.cljs$lang$applyTo = (function (seq13904){
var G__13905 = cljs.core.first(seq13904);
var seq13904__$1 = cljs.core.next(seq13904);
var G__13906 = cljs.core.first(seq13904__$1);
var seq13904__$2 = cljs.core.next(seq13904__$1);
var G__13907 = cljs.core.first(seq13904__$2);
var seq13904__$3 = cljs.core.next(seq13904__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13905,G__13906,G__13907,seq13904__$3);
});

return null;
})()
;
garden.compiler.with_media_query_context.cljs$lang$macro = true;

/**
 * Return the current list of browser vendors specified in `*flags*`.
 */
garden.compiler.vendors = (function garden$compiler$vendors(){
return cljs.core.seq(cljs.core.cst$kw$vendors.cljs$core$IFn$_invoke$arity$1(garden.compiler._STAR_flags_STAR_));
});
/**
 * Return the current list of auto-prefixed properties specified in `*flags*`.
 */
garden.compiler.auto_prefixed_properties = (function garden$compiler$auto_prefixed_properties(){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cst$kw$auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(garden.compiler._STAR_flags_STAR_)));
});
garden.compiler.auto_prefix_QMARK_ = (function garden$compiler$auto_prefix_QMARK_(property){
return cljs.core.contains_QMARK_(garden.compiler.auto_prefixed_properties(),property);
});
garden.compiler.top_level_expression_QMARK_ = (function garden$compiler$top_level_expression_QMARK_(x){
var or__3922__auto__ = (garden.util.rule_QMARK_.cljs$core$IFn$_invoke$arity$1 ? garden.util.rule_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : garden.util.rule_QMARK_.call(null,x));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = garden.util.at_import_QMARK_(x);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = garden.util.at_media_QMARK_(x);
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return garden.util.at_keyframes_QMARK_(x);
}
}
}
});
/**
 * Return a vector of [(filter pred coll) (remove pred coll)].
 */
garden.compiler.divide_vec = (function garden$compiler$divide_vec(pred,coll){
var fexpr__13912 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove);
return (fexpr__13912.cljs$core$IFn$_invoke$arity$2 ? fexpr__13912.cljs$core$IFn$_invoke$arity$2(pred,coll) : fexpr__13912.call(null,pred,coll));
});

/**
 * @interface
 */
garden.compiler.IExpandable = function(){};

/**
 * Return a list containing the expanded form of `this`.
 */
garden.compiler.expand = (function garden$compiler$expand(this$){
if(((!((this$ == null))) && (!((this$.garden$compiler$IExpandable$expand$arity$1 == null))))){
return this$.garden$compiler$IExpandable$expand$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (garden.compiler.expand[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (garden.compiler.expand["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IExpandable.expand",this$);
}
}
}
});

/**
 * Like flatten but only affects seqs.
 */
garden.compiler.expand_seqs = (function garden$compiler$expand_seqs(coll){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
if(cljs.core.seq_QMARK_(x)){
return (garden.compiler.expand_seqs.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.expand_seqs.cljs$core$IFn$_invoke$arity$1(x) : garden.compiler.expand_seqs.call(null,x));
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0));
});
garden.compiler.expand_declaration_1 = (function garden$compiler$expand_declaration_1(d){
var prefix = (function (p1__13913_SHARP_,p2__13914_SHARP_){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__13913_SHARP_,"-",p2__13914_SHARP_], 0));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (prefix){
return (function (m,p__13915){
var vec__13916 = p__13915;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13916,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13916,(1),null);
if(cljs.core.truth_(garden.util.hash_map_QMARK_(v))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13916,k,v,prefix){
return (function (m1,p__13919){
var vec__13920 = p__13919;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13920,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13920,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m1,prefix(k,k1),v1);
});})(vec__13916,k,v,prefix))
,m,(garden.compiler.expand_declaration_1.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.expand_declaration_1.cljs$core$IFn$_invoke$arity$1(v) : garden.compiler.expand_declaration_1.call(null,v)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,garden.util.to_str(k),v);
}
});})(prefix))
,cljs.core.PersistentArrayMap.EMPTY,d);
});
garden.compiler.expand_declaration = (function garden$compiler$expand_declaration(d){
if(cljs.core.seq(d)){
return cljs.core.with_meta(garden.compiler.expand_declaration_1(d),cljs.core.meta(d));
} else {
return null;
}
});
/**
 * Matches a single "&" or "&" follow by one or more 
 *   non-whitespace characters.
 */
garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
 * Extract the selector portion of a parent selector reference.
 */
garden.compiler.extract_reference = (function garden$compiler$extract_reference(selector){
var temp__5457__auto__ = cljs.core.re_find(garden.compiler.parent_selector_re,garden.util.to_str(cljs.core.last(selector)));
if(cljs.core.truth_(temp__5457__auto__)){
var reference = temp__5457__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(reference));
} else {
return null;
}
});
garden.compiler.expand_selector_reference = (function garden$compiler$expand_selector_reference(selector){
var temp__5455__auto__ = garden.compiler.extract_reference(selector);
if(cljs.core.truth_(temp__5455__auto__)){
var reference = temp__5455__auto__;
var parent = cljs.core.butlast(selector);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(parent),(new cljs.core.List(null,garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(parent),reference], 0)),null,(1),null)));
} else {
return selector;
}
});
garden.compiler.expand_selector = (function garden$compiler$expand_selector(selector,parent){
var selector__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.selectors.css_selector,selector);
var selector__$2 = ((cljs.core.seq(parent))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten,garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent,selector__$1], 0))):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,selector__$1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.expand_selector_reference,selector__$2);
});
garden.compiler.expand_rule = (function garden$compiler$expand_rule(rule){
var vec__13923 = cljs.core.split_with(garden.selectors.selector_QMARK_,rule);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13923,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13923,(1),null);
var selector__$1 = garden.compiler.expand_selector(selector,garden.compiler._STAR_selector_context_STAR_);
var children__$1 = garden.compiler.expand(children);
var vec__13926 = garden.compiler.divide_vec(garden.util.declaration_QMARK_,children__$1);
var declarations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13926,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13926,(1),null);
var ys = (function (){var _STAR_selector_context_STAR_13929 = garden.compiler._STAR_selector_context_STAR_;
garden.compiler._STAR_selector_context_STAR_ = ((cljs.core.seq(selector__$1))?selector__$1:garden.compiler._STAR_selector_context_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs], 0)));
}finally {garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR_13929;
}})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ys,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([declarations], 0))));
});
if(typeof garden.compiler.expand_at_rule !== 'undefined'){
} else {
garden.compiler.expand_at_rule = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("garden.compiler","expand-at-rule"),cljs.core.cst$kw$identifier,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (at_rule){
return (new cljs.core.List(null,at_rule,null,(1),null));
}));
garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$keyframes,(function (p__13930){
var map__13931 = p__13930;
var map__13931__$1 = ((((!((map__13931 == null)))?(((((map__13931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13931):map__13931);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13931__$1,cljs.core.cst$kw$value);
var map__13933 = value;
var map__13933__$1 = ((((!((map__13933 == null)))?(((((map__13933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13933):map__13933);
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13933__$1,cljs.core.cst$kw$identifier);
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13933__$1,cljs.core.cst$kw$frames);
return (new cljs.core.List(null,(new garden.types.CSSAtRule(cljs.core.cst$kw$keyframes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$identifier,garden.util.to_str(identifier),cljs.core.cst$kw$frames,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frames], 0))], null),null,null,null)),null,(1),null));
}));
garden.compiler.expand_media_query_expression = (function garden$compiler$expand_media_query_expression(expression){
var temp__5455__auto__ = (function (){var G__13935 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$media_DASH_expressions,cljs.core.cst$kw$nesting_DASH_behavior], null));
return (garden.compiler.media_expression_behavior.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.media_expression_behavior.cljs$core$IFn$_invoke$arity$1(G__13935) : garden.compiler.media_expression_behavior.call(null,G__13935));
})();
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(expression,garden.compiler._STAR_media_query_context_STAR_) : f.call(null,expression,garden.compiler._STAR_media_query_context_STAR_));
} else {
return expression;
}
});
garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$media,(function (p__13936){
var map__13937 = p__13936;
var map__13937__$1 = ((((!((map__13937 == null)))?(((((map__13937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13937):map__13937);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13937__$1,cljs.core.cst$kw$value);
var map__13939 = value;
var map__13939__$1 = ((((!((map__13939 == null)))?(((((map__13939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13939):map__13939);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13939__$1,cljs.core.cst$kw$media_DASH_queries);
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13939__$1,cljs.core.cst$kw$rules);
var media_queries__$1 = garden.compiler.expand_media_query_expression(media_queries);
var xs = (function (){var _STAR_media_query_context_STAR_13944 = garden.compiler._STAR_media_query_context_STAR_;
garden.compiler._STAR_media_query_context_STAR_ = media_queries__$1;

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.expand(rules)], 0)));
}finally {garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR_13944;
}})();
var vec__13940 = garden.compiler.divide_vec(garden.util.at_media_QMARK_,xs);
var subqueries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13940,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13940,(1),null);
return cljs.core.cons((new garden.types.CSSAtRule(cljs.core.cst$kw$media,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$media_DASH_queries,media_queries__$1,cljs.core.cst$kw$rules,rules__$1], null),null,null,null)),subqueries);
}));
garden.compiler.expand_stylesheet = (function garden$compiler$expand_stylesheet(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.expand,garden.compiler.expand(xs)));
});
goog.object.set(garden.compiler.IExpandable,"null",true);

var G__13945_13951 = garden.compiler.expand;
var G__13946_13952 = "null";
var G__13947_13953 = ((function (G__13945_13951,G__13946_13952){
return (function (this$){
return null;
});})(G__13945_13951,G__13946_13952))
;
goog.object.set(G__13945_13951,G__13946_13952,G__13947_13953);

cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});

cljs.core.LazySeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});

cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});

cljs.core.BlackNode.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});

cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});

cljs.core.Cons.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});

cljs.core.RSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});

garden.types.CSSFunction.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

garden.types.CSSFunction.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
});

cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,garden.compiler.expand_declaration(this$__$1),null,(1),null));
});

cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});

cljs.core.Subvec.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
});

goog.object.set(garden.compiler.IExpandable,"_",true);

var G__13948_13954 = garden.compiler.expand;
var G__13949_13955 = "_";
var G__13950_13956 = ((function (G__13948_13954,G__13949_13955){
return (function (this$){
return (new cljs.core.List(null,this$,null,(1),null));
});})(G__13948_13954,G__13949_13955))
;
goog.object.set(G__13948_13954,G__13949_13955,G__13950_13956);

cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,garden.compiler.expand_declaration(this$__$1),null,(1),null));
});

cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});

garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (garden.compiler.expand_at_rule.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.expand_at_rule.cljs$core$IFn$_invoke$arity$1(this$__$1) : garden.compiler.expand_at_rule.call(null,this$__$1));
});

cljs.core.RedNode.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
});

cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,garden.compiler.expand_declaration(this$__$1),null,(1),null));
});

garden.color.CSSColor.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

garden.color.CSSColor.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
});

cljs.core.List.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});

/**
 * @interface
 */
garden.compiler.CSSRenderer = function(){};

/**
 * Convert a Clojure data type in to a string of CSS.
 */
garden.compiler.render_css = (function garden$compiler$render_css(this$){
if(((!((this$ == null))) && (!((this$.garden$compiler$CSSRenderer$render_css$arity$1 == null))))){
return this$.garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (garden.compiler.render_css[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (garden.compiler.render_css["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("CSSRenderer.render-css",this$);
}
}
}
});

garden.compiler.comma = ", ";
garden.compiler.colon = ": ";
garden.compiler.semicolon = ";";
garden.compiler.l_brace = " {\n";
garden.compiler.r_brace = "\n}";
garden.compiler.l_brace_1 = " {\n\n";
garden.compiler.r_brace_1 = "\n\n}";
garden.compiler.rule_sep = "\n\n";
garden.compiler.indent = "  ";
/**
 * Return a space separated list of values.
 */
garden.compiler.space_separated_list = (function garden$compiler$space_separated_list(var_args){
var G__13958 = arguments.length;
switch (G__13958) {
case 1:
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,xs);
});

garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});

garden.compiler.space_separated_list.cljs$lang$maxFixedArity = 2;

/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.compiler.comma_separated_list = (function garden$compiler$comma_separated_list(var_args){
var G__13961 = arguments.length;
switch (G__13961) {
case 1:
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,xs);
});

garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
var ys = (function (){var iter__4292__auto__ = (function garden$compiler$iter__13962(s__13963){
return (new cljs.core.LazySeq(null,(function (){
var s__13963__$1 = s__13963;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13963__$1);
if(temp__5457__auto__){
var s__13963__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13963__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__13963__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__13965 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__13964 = (0);
while(true){
if((i__13964 < size__4291__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__13964);
cljs.core.chunk_append(b__13965,((cljs.core.sequential_QMARK_(x))?garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(f,x):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))));

var G__13967 = (i__13964 + (1));
i__13964 = G__13967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13965),garden$compiler$iter__13962(cljs.core.chunk_rest(s__13963__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13965),null);
}
} else {
var x = cljs.core.first(s__13963__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(f,x):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))),garden$compiler$iter__13962(cljs.core.rest(s__13963__$2)));
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(garden.compiler.comma,ys);
});

garden.compiler.comma_separated_list.cljs$lang$maxFixedArity = 2;

garden.compiler.rule_join = (function garden$compiler$rule_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(garden.compiler.rule_sep,xs);
});
/**
 * Match the start of a line if the characters immediately
 *   after it are spaces or used in a CSS id (#), class (.), or tag name.
 */
garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
garden.compiler.indent_str = (function garden$compiler$indent_str(s){
return s.replace(garden.compiler.indent_loc_re,garden.compiler.indent);
});
/**
 * Render the value portion of a declaration.
 */
garden.compiler.render_value = (function garden$compiler$render_value(x){
if(cljs.core.truth_(garden.util.at_keyframes_QMARK_(x))){
return garden.util.to_str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$identifier], null)));
} else {
return garden.compiler.render_css(x);
}
});
garden.compiler.render_property_and_value = (function garden$compiler$render_property_and_value(p__13968){
var vec__13969 = p__13968;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13969,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13969,(1),null);
if(cljs.core.set_QMARK_(val)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_property_and_value,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(prop),val))));
} else {
var val__$1 = ((cljs.core.sequential_QMARK_(val))?garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_value,val):garden.compiler.render_value(val));
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop,garden.compiler.colon,val__$1,garden.compiler.semicolon], 0));
}
});
/**
 * For each block in `declaration`, add sequence of blocks
 * returned from calling `f` on the block.
 */
garden.compiler.add_blocks = (function garden$compiler$add_blocks(f,declaration){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__13972_SHARP_){
return cljs.core.cons(p1__13972_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__13972_SHARP_) : f.call(null,p1__13972_SHARP_)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([declaration], 0));
});
/**
 * Sequence of blocks with their properties prefixed by
 * each vendor in `vendors`.
 */
garden.compiler.prefixed_blocks = (function garden$compiler$prefixed_blocks(vendors,p__13973){
var vec__13974 = p__13973;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13974,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13974,(1),null);
var iter__4292__auto__ = ((function (vec__13974,p,v){
return (function garden$compiler$prefixed_blocks_$_iter__13977(s__13978){
return (new cljs.core.LazySeq(null,((function (vec__13974,p,v){
return (function (){
var s__13978__$1 = s__13978;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13978__$1);
if(temp__5457__auto__){
var s__13978__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13978__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__13978__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__13980 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__13979 = (0);
while(true){
if((i__13979 < size__4291__auto__)){
var vendor = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__13979);
cljs.core.chunk_append(b__13980,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.util.vendor_prefix(vendor,cljs.core.name(p)),v], null));

var G__13981 = (i__13979 + (1));
i__13979 = G__13981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13980),garden$compiler$prefixed_blocks_$_iter__13977(cljs.core.chunk_rest(s__13978__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13980),null);
}
} else {
var vendor = cljs.core.first(s__13978__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.util.vendor_prefix(vendor,cljs.core.name(p)),v], null),garden$compiler$prefixed_blocks_$_iter__13977(cljs.core.rest(s__13978__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13974,p,v))
,null,null));
});})(vec__13974,p,v))
;
return iter__4292__auto__(vendors);
});
/**
 * Add prefixes to all blocks in `declaration` using
 * vendor prefixes in `vendors`.
 */
garden.compiler.prefix_all_properties = (function garden$compiler$prefix_all_properties(vendors,declaration){
return garden.compiler.add_blocks(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(garden.compiler.prefixed_blocks,vendors),declaration);
});
/**
 * Add prefixes to all blocks in `declaration` when property
 * is in the `:auto-prefix` set.
 */
garden.compiler.prefix_auto_properties = (function garden$compiler$prefix_auto_properties(vendors,declaration){
return garden.compiler.add_blocks((function (block){
var vec__13982 = block;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13982,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13982,(1),null);
if(cljs.core.truth_(garden.compiler.auto_prefix_QMARK_(cljs.core.name(p)))){
return garden.compiler.prefixed_blocks(vendors,block);
} else {
return null;
}
}),declaration);
});
/**
 * Prefix properties within a `declaration` if `{:prefix true}` is
 * set in its meta, or if a property is in the `:auto-prefix` set.
 */
garden.compiler.prefix_declaration = (function garden$compiler$prefix_declaration(declaration){
var vendors = (function (){var or__3922__auto__ = cljs.core.cst$kw$vendors.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declaration));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return garden.compiler.vendors();
}
})();
var prefix_fn = (cljs.core.truth_(cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declaration)))?garden.compiler.prefix_all_properties:garden.compiler.prefix_auto_properties);
return (prefix_fn.cljs$core$IFn$_invoke$arity$2 ? prefix_fn.cljs$core$IFn$_invoke$arity$2(vendors,declaration) : prefix_fn.call(null,vendors,declaration));
});
garden.compiler.render_declaration = (function garden$compiler$render_declaration(declaration){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_property_and_value,garden.compiler.prefix_declaration(declaration)));
});
garden.compiler.render_selector = (function garden$compiler$render_selector(selector){
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(selector);
});
/**
 * Convert a vector to a CSS rule string. The vector is expected to be
 *   fully expanded.
 */
garden.compiler.render_rule = (function garden$compiler$render_rule(p__13985){
var vec__13986 = p__13985;
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13986,(0),null);
var declarations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13986,(1),null);
var rule = vec__13986;
if(((cljs.core.seq(rule)) && (cljs.core.every_QMARK_(cljs.core.seq,rule)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.render_selector(selector)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.l_brace),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,declarations)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.r_brace)].join('');
} else {
return null;
}
});
/**
 * Render the individual components of a media expression.
 */
garden.compiler.render_media_expr_part = (function garden$compiler$render_media_expr_part(p__13989){
var vec__13990 = p__13989;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13990,(1),null);
var vec__13993 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13993,(0),null);
var sv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13993,(1),null);
if(v === true){
return sk;
} else {
if(v === false){
return ["not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("only",sv)){
return ["only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.seq(sv);
} else {
return and__3911__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.colon),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}

}
}
}
});
/**
 * Make a media query expession from one or more maps. Keys are not
 *   validated but values have the following semantics:
 *   
 *  `true`  as in `{:screen true}`  == "screen"
 *  `false` as in `{:screen false}` == "not screen"
 *  `:only` as in `{:screen :only}  == "only screen"
 */
garden.compiler.render_media_expr = (function garden$compiler$render_media_expr(expr){
if(cljs.core.sequential_QMARK_(expr)){
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_media_expr,expr));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" and ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_media_expr_part,expr));
}
});
/**
 * Render a CSSUnit.
 */
garden.compiler.render_unit = (function garden$compiler$render_unit(css_unit){
var map__13996 = css_unit;
var map__13996__$1 = ((((!((map__13996 == null)))?(((((map__13996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13996):map__13996);
var magnitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13996__$1,cljs.core.cst$kw$magnitude);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13996__$1,cljs.core.cst$kw$unit);
var magnitude__$1 = magnitude;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(magnitude__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(unit))].join('');
});
/**
 * Render a CSS function.
 */
garden.compiler.render_function = (function garden$compiler$render_function(css_function){
var map__13998 = css_function;
var map__13998__$1 = ((((!((map__13998 == null)))?(((((map__13998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13998):map__13998);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13998__$1,cljs.core.cst$kw$function);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13998__$1,cljs.core.cst$kw$args);
var args__$1 = ((cljs.core.sequential_QMARK_(args))?garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(args):garden.util.to_str(args));
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic("%s(%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.util.to_str(function$),args__$1], 0));
});
garden.compiler.render_color = (function garden$compiler$render_color(c){
var temp__5455__auto__ = cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__5455__auto__)){
var a = temp__5455__auto__;
var map__14000 = garden.color.as_hsl(c);
var map__14000__$1 = ((((!((map__14000 == null)))?(((((map__14000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14000):map__14000);
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14000__$1,cljs.core.cst$kw$hue);
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14000__$1,cljs.core.cst$kw$saturation);
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14000__$1,cljs.core.cst$kw$lightness);
var vec__14001 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14001,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14001,(1),null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic("hsla(%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null))], 0));
} else {
return garden.color.as_hex(c);
}
});
if(typeof garden.compiler.render_at_rule !== 'undefined'){
} else {
/**
 * Render a CSS at-rule
 */
garden.compiler.render_at_rule = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("garden.compiler","render-at-rule"),cljs.core.cst$kw$identifier,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_){
return null;
}));
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$import,(function (p__14005){
var map__14006 = p__14005;
var map__14006__$1 = ((((!((map__14006 == null)))?(((((map__14006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14006):map__14006);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14006__$1,cljs.core.cst$kw$value);
var map__14008 = value;
var map__14008__$1 = ((((!((map__14008 == null)))?(((((map__14008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14008):map__14008);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14008__$1,cljs.core.cst$kw$url);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14008__$1,cljs.core.cst$kw$media_DASH_queries);
var url__$1 = ((typeof url === 'string')?garden.util.wrap_quotes(url):garden.compiler.render_css(url));
var queries = (cljs.core.truth_(media_queries)?garden.compiler.render_media_expr(media_queries):null);
return ["@import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(queries)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queries)].join(''):url__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.semicolon)].join('');
}));
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$keyframes,(function (p__14011){
var map__14012 = p__14011;
var map__14012__$1 = ((((!((map__14012 == null)))?(((((map__14012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14012):map__14012);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14012__$1,cljs.core.cst$kw$value);
var map__14014 = value;
var map__14014__$1 = ((((!((map__14014 == null)))?(((((map__14014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14014):map__14014);
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14014__$1,cljs.core.cst$kw$identifier);
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14014__$1,cljs.core.cst$kw$frames);
if(cljs.core.seq(frames)){
var body = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.util.to_str(identifier)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str(garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,frames)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.r_brace_1)].join('');
var prefix = ((function (body,map__14014,map__14014__$1,identifier,frames,map__14012,map__14012__$1,value){
return (function (vendor){
return ["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.util.vendor_prefix(vendor,"keyframes "))].join('');
});})(body,map__14014,map__14014__$1,identifier,frames,map__14012,map__14012__$1,value))
;
return garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (body,prefix,map__14014,map__14014__$1,identifier,frames,map__14012,map__14012__$1,value){
return (function (p1__14010_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14010_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(body)].join('');
});})(body,prefix,map__14014,map__14014__$1,identifier,frames,map__14012,map__14012__$1,value))
,cljs.core.cons("@keyframes ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(prefix,garden.compiler.vendors()))));
} else {
return null;
}
}));
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$media,(function (p__14016){
var map__14017 = p__14016;
var map__14017__$1 = ((((!((map__14017 == null)))?(((((map__14017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14017):map__14017);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14017__$1,cljs.core.cst$kw$value);
var map__14019 = value;
var map__14019__$1 = ((((!((map__14019 == null)))?(((((map__14019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14019):map__14019);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14019__$1,cljs.core.cst$kw$media_DASH_queries);
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14019__$1,cljs.core.cst$kw$rules);
if(cljs.core.seq(rules)){
return ["@media ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.render_media_expr(media_queries)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str(garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,rules)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.r_brace_1)].join('');
} else {
return null;
}
}));
goog.object.set(garden.compiler.CSSRenderer,"null",true);

var G__14021_14030 = garden.compiler.render_css;
var G__14022_14031 = "null";
var G__14023_14032 = ((function (G__14021_14030,G__14022_14031){
return (function (this$){
return "";
});})(G__14021_14030,G__14022_14031))
;
goog.object.set(G__14021_14030,G__14022_14031,G__14023_14032);

garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_color(this$__$1);
});

cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});

cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});

cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});

cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});

garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_unit(this$__$1);
});

cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});

cljs.core.Cons.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});

cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});

goog.object.set(garden.compiler.CSSRenderer,"number",true);

var G__14024_14033 = garden.compiler.render_css;
var G__14025_14034 = "number";
var G__14026_14035 = ((function (G__14024_14033,G__14025_14034){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__14024_14033,G__14025_14034))
;
goog.object.set(G__14024_14033,G__14025_14034,G__14026_14035);

garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_function(this$__$1);
});

cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration(this$__$1);
});

cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});

cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
});

goog.object.set(garden.compiler.CSSRenderer,"_",true);

var G__14027_14036 = garden.compiler.render_css;
var G__14028_14037 = "_";
var G__14029_14038 = ((function (G__14027_14036,G__14028_14037){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__14027_14036,G__14028_14037))
;
goog.object.set(G__14027_14036,G__14028_14037,G__14029_14038);

cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration(this$__$1);
});

cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});

garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return (garden.compiler.render_at_rule.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.render_at_rule.cljs$core$IFn$_invoke$arity$1(this$__$1) : garden.compiler.render_at_rule.call(null,this$__$1));
});

cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
});

cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
});

cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration(this$__$1);
});

cljs.core.List.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});
/**
 * Convert a sequence of maps into CSS for use with the HTML style
 * attribute.
 */
garden.compiler.compile_style = (function garden$compiler$compile_style(ms){
return cljs.core.first(garden.compiler.render_css(garden.compiler.expand(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(garden.util.declaration_QMARK_,ms)))));
});
/**
 * Return a string of CSS.
 */
garden.compiler.do_compile = (function garden$compiler$do_compile(flags,rules){
var _STAR_flags_STAR_14039 = garden.compiler._STAR_flags_STAR_;
garden.compiler._STAR_flags_STAR_ = flags;

try{return garden.compiler.rule_join(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(garden.compiler.top_level_expression_QMARK_,garden.compiler.expand_stylesheet(rules)))));
}finally {garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR_14039;
}});
/**
 * Prefix stylesheet with files in preamble. Not available in
 *   ClojureScript.
 */
garden.compiler.do_preamble = (function garden$compiler$do_preamble(p__14040,stylesheet){
var map__14041 = p__14040;
var map__14041__$1 = ((((!((map__14041 == null)))?(((((map__14041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14041):map__14041);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14041__$1,cljs.core.cst$kw$preamble);
return stylesheet;
});
/**
 * Compress CSS if the pretty-print(?) flag is true.
 */
garden.compiler.do_compression = (function garden$compiler$do_compression(p__14043,stylesheet){
var map__14044 = p__14043;
var map__14044__$1 = ((((!((map__14044 == null)))?(((((map__14044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14044):map__14044);
var pretty_print_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,cljs.core.cst$kw$pretty_DASH_print_QMARK_);
var pretty_print = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,cljs.core.cst$kw$pretty_DASH_print);
if(cljs.core.truth_((function (){var or__3922__auto__ = pretty_print_QMARK_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return pretty_print;
}
})())){
return stylesheet;
} else {
return garden.compression.compress_stylesheet(stylesheet);
}
});
/**
 * Write contents of stylesheet to disk.
 */
garden.compiler.do_output_to = (function garden$compiler$do_output_to(p__14046,stylesheet){
var map__14047 = p__14046;
var map__14047__$1 = ((((!((map__14047 == null)))?(((((map__14047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14047):map__14047);
var output_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14047__$1,cljs.core.cst$kw$output_DASH_to);
return stylesheet;
});
/**
 * Convert any number of Clojure data structures to CSS.
 */
garden.compiler.compile_css = (function garden$compiler$compile_css(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14054 = arguments.length;
var i__4500__auto___14055 = (0);
while(true){
if((i__4500__auto___14055 < len__4499__auto___14054)){
args__4502__auto__.push((arguments[i__4500__auto___14055]));

var G__14056 = (i__4500__auto___14055 + (1));
i__4500__auto___14055 = G__14056;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic = (function (flags,rules){
var vec__14051 = (cljs.core.truth_((function (){var and__3911__auto__ = garden.util.hash_map_QMARK_(flags);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.some(cljs.core.set(cljs.core.keys(flags)),cljs.core.keys(garden.compiler._STAR_flags_STAR_));
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler._STAR_flags_STAR_,flags], 0)),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.compiler._STAR_flags_STAR_,cljs.core.cons(flags,rules)], null));
var flags__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14051,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14051,(1),null);
return garden.compiler.do_output_to(flags__$1,garden.compiler.do_compression(flags__$1,garden.compiler.do_preamble(flags__$1,garden.compiler.do_compile(flags__$1,rules__$1))));
});

garden.compiler.compile_css.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.compiler.compile_css.cljs$lang$applyTo = (function (seq14049){
var G__14050 = cljs.core.first(seq14049);
var seq14049__$1 = cljs.core.next(seq14049);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14050,seq14049__$1);
});

