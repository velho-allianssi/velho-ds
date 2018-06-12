// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('garden.compression');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Return a function which when given a string will return a map
 *   containing the chunk of text matched by re, it's size, and tag.
 */
garden.compression.token_fn = (function garden$compression$token_fn(p__13879){
var vec__13880 = p__13879;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13880,(0),null);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13880,(1),null);
return ((function (vec__13880,tag,re){
return (function (s){
var temp__5457__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__5457__auto__)){
var chunk = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$chunk,chunk,cljs.core.cst$kw$size,cljs.core.count(chunk)], null);
} else {
return null;
}
});
;})(vec__13880,tag,re))
});
/**
 * Given an arbitrary number of [tag regex] pairs, return a function
 *   which when given a string s will return the first matching token of s.
 *   Token precedence is determined by the order of the pairs. The first
 *   and last pairs have the highest and lowest precedence respectively.
 */
garden.compression.tokenizer = (function garden$compression$tokenizer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13885 = arguments.length;
var i__4500__auto___13886 = (0);
while(true){
if((i__4500__auto___13886 < len__4499__auto___13885)){
args__4502__auto__.push((arguments[i__4500__auto___13886]));

var G__13887 = (i__4500__auto___13886 + (1));
i__4500__auto___13886 = G__13887;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic = (function (tags_PLUS_regexes){
var fs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compression.token_fn,tags_PLUS_regexes);
return ((function (fs){
return (function (s){
return cljs.core.some(((function (fs){
return (function (p1__13883_SHARP_){
return (p1__13883_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13883_SHARP_.cljs$core$IFn$_invoke$arity$1(s) : p1__13883_SHARP_.call(null,s));
});})(fs))
,fs);
});
;})(fs))
});

garden.compression.tokenizer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.compression.tokenizer.cljs$lang$applyTo = (function (seq13884){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13884));
});

/**
 * Tokenizer used during stylesheet compression.
 */
garden.compression.stylesheet_tokenizer = garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,/^\"(?:\\.|[^\"])*\"/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r_DASH_brace,/^\s*\{\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$l_DASH_brace,/^;?\s*}/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r_DASH_paren,/^\s*\(\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$l_DASH_paren,/^\s*\)/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$comma,/^,\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$colon,/^:\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$semicolon,/^;/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$space_PLUS_,/^ +/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$white_DASH_space_PLUS_,/^\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$any,/^./], null)], 0));
/**
 * Compress a string of CSS using a basic compressor.
 */
garden.compression.compress_stylesheet = (function garden$compression$compress_stylesheet(stylesheet){
var s1 = stylesheet;
var s2 = "";
while(true){
var temp__5455__auto__ = (garden.compression.stylesheet_tokenizer.cljs$core$IFn$_invoke$arity$1 ? garden.compression.stylesheet_tokenizer.cljs$core$IFn$_invoke$arity$1(s1) : garden.compression.stylesheet_tokenizer.call(null,s1));
if(cljs.core.truth_(temp__5455__auto__)){
var map__13888 = temp__5455__auto__;
var map__13888__$1 = ((((!((map__13888 == null)))?(((((map__13888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13888):map__13888);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13888__$1,cljs.core.cst$kw$tag);
var chunk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13888__$1,cljs.core.cst$kw$chunk);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13888__$1,cljs.core.cst$kw$size);
var G__13891 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s1,size);
var G__13892 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13890 = tag;
var G__13890__$1 = (((G__13890 instanceof cljs.core.Keyword))?G__13890.fqn:null);
switch (G__13890__$1) {
case "string":
return chunk;

break;
case "r-brace":
return "{";

break;
case "l-brace":
return "}";

break;
case "r-paren":
return "(";

break;
case "l-paren":
return ")";

break;
case "comma":
return ",";

break;
case "semi-comma":
return ";";

break;
case "colon":
return ":";

break;
case "space+":
return " ";

break;
case "white-space+":
return "";

break;
default:
return chunk;

}
})())].join('');
s1 = G__13891;
s2 = G__13892;
continue;
} else {
return s2;
}
break;
}
});
