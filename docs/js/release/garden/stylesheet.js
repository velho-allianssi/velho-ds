// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13026 = arguments.length;
var i__4500__auto___13027 = (0);
while(true){
if((i__4500__auto___13027 < len__4499__auto___13026)){
args__4502__auto__.push((arguments[i__4500__auto___13027]));

var G__13028 = (i__4500__auto___13027 + (1));
i__4500__auto___13027 = G__13028;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if(!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__13029__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__13029 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__13030__i = 0, G__13030__a = new Array(arguments.length -  0);
while (G__13030__i < G__13030__a.length) {G__13030__a[G__13030__i] = arguments[G__13030__i + 0]; ++G__13030__i;}
  children = new cljs.core.IndexedSeq(G__13030__a,0,null);
} 
return G__13029__delegate.call(this,children);};
G__13029.cljs$lang$maxFixedArity = 0;
G__13029.cljs$lang$applyTo = (function (arglist__13031){
var children = cljs.core.seq(arglist__13031);
return G__13029__delegate(children);
});
G__13029.cljs$core$IFn$_invoke$arity$variadic = G__13029__delegate;
return G__13029;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.rule.cljs$lang$applyTo = (function (seq13024){
var G__13025 = cljs.core.first(seq13024);
var seq13024__$1 = cljs.core.next(seq13024);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13025,seq13024__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__13032__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__13032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13033__i = 0, G__13033__a = new Array(arguments.length -  0);
while (G__13033__i < G__13033__a.length) {G__13033__a[G__13033__i] = arguments[G__13033__i + 0]; ++G__13033__i;}
  args = new cljs.core.IndexedSeq(G__13033__a,0,null);
} 
return G__13032__delegate.call(this,args);};
G__13032.cljs$lang$maxFixedArity = 0;
G__13032.cljs$lang$applyTo = (function (arglist__13034){
var args = cljs.core.seq(arglist__13034);
return G__13032__delegate(args);
});
G__13032.cljs$core$IFn$_invoke$arity$variadic = G__13032__delegate;
return G__13032;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13036 = arguments.length;
var i__4500__auto___13037 = (0);
while(true){
if((i__4500__auto___13037 < len__4499__auto___13036)){
args__4502__auto__.push((arguments[i__4500__auto___13037]));

var G__13038 = (i__4500__auto___13037 + (1));
i__4500__auto___13037 = G__13038;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq13035){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13035));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__13042 = arguments.length;
switch (G__13042) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___13044 = arguments.length;
var i__4500__auto___13045 = (0);
while(true){
if((i__4500__auto___13045 < len__4499__auto___13044)){
args_arr__4514__auto__.push((arguments[i__4500__auto___13045]));

var G__13046 = (i__4500__auto___13045 + (1));
i__4500__auto___13045 = G__13046;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4515__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,media_queries], null));
});

/** @this {Function} */
garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq13040){
var G__13041 = cljs.core.first(seq13040);
var seq13040__$1 = cljs.core.next(seq13040);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13041,seq13040__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13049 = arguments.length;
var i__4500__auto___13050 = (0);
while(true){
if((i__4500__auto___13050 < len__4499__auto___13049)){
args__4502__auto__.push((arguments[i__4500__auto___13050]));

var G__13051 = (i__4500__auto___13050 + (1));
i__4500__auto___13050 = G__13051;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(cljs.core.cst$kw$media,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$media_DASH_queries,media_queries,cljs.core.cst$kw$rules,rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq13047){
var G__13048 = cljs.core.first(seq13047);
var seq13047__$1 = cljs.core.next(seq13047);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13048,seq13047__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13054 = arguments.length;
var i__4500__auto___13055 = (0);
while(true){
if((i__4500__auto___13055 < len__4499__auto___13054)){
args__4502__auto__.push((arguments[i__4500__auto___13055]));

var G__13056 = (i__4500__auto___13055 + (1));
i__4500__auto___13055 = G__13056;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(cljs.core.cst$kw$keyframes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$identifier,identifier,cljs.core.cst$kw$frames,frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq13052){
var G__13053 = cljs.core.first(seq13052);
var seq13052__$1 = cljs.core.next(seq13052);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13053,seq13052__$1);
});

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});
