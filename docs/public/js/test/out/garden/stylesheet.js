// Compiled by ClojureScript 1.10.238 {}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
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
var len__4499__auto___36513 = arguments.length;
var i__4500__auto___36514 = (0);
while(true){
if((i__4500__auto___36514 < len__4499__auto___36513)){
args__4502__auto__.push((arguments[i__4500__auto___36514]));

var G__36515 = (i__4500__auto___36514 + (1));
i__4500__auto___36514 = G__36515;
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
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__36516__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__36516 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__36517__i = 0, G__36517__a = new Array(arguments.length -  0);
while (G__36517__i < G__36517__a.length) {G__36517__a[G__36517__i] = arguments[G__36517__i + 0]; ++G__36517__i;}
  children = new cljs.core.IndexedSeq(G__36517__a,0,null);
} 
return G__36516__delegate.call(this,children);};
G__36516.cljs$lang$maxFixedArity = 0;
G__36516.cljs$lang$applyTo = (function (arglist__36518){
var children = cljs.core.seq(arglist__36518);
return G__36516__delegate(children);
});
G__36516.cljs$core$IFn$_invoke$arity$variadic = G__36516__delegate;
return G__36516;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.rule.cljs$lang$applyTo = (function (seq36511){
var G__36512 = cljs.core.first.call(null,seq36511);
var seq36511__$1 = cljs.core.next.call(null,seq36511);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36512,seq36511__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__36519__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__36519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36520__i = 0, G__36520__a = new Array(arguments.length -  0);
while (G__36520__i < G__36520__a.length) {G__36520__a[G__36520__i] = arguments[G__36520__i + 0]; ++G__36520__i;}
  args = new cljs.core.IndexedSeq(G__36520__a,0,null);
} 
return G__36519__delegate.call(this,args);};
G__36519.cljs$lang$maxFixedArity = 0;
G__36519.cljs$lang$applyTo = (function (arglist__36521){
var args = cljs.core.seq(arglist__36521);
return G__36519__delegate(args);
});
G__36519.cljs$core$IFn$_invoke$arity$variadic = G__36519__delegate;
return G__36519;
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
var len__4499__auto___36523 = arguments.length;
var i__4500__auto___36524 = (0);
while(true){
if((i__4500__auto___36524 < len__4499__auto___36523)){
args__4502__auto__.push((arguments[i__4500__auto___36524]));

var G__36525 = (i__4500__auto___36524 + (1));
i__4500__auto___36524 = G__36525;
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
garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq36522){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36522));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__36529 = arguments.length;
switch (G__36529) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___36531 = arguments.length;
var i__4500__auto___36532 = (0);
while(true){
if((i__4500__auto___36532 < len__4499__auto___36531)){
args_arr__4514__auto__.push((arguments[i__4500__auto___36532]));

var G__36533 = (i__4500__auto___36532 + (1));
i__4500__auto___36532 = G__36533;
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
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq36527){
var G__36528 = cljs.core.first.call(null,seq36527);
var seq36527__$1 = cljs.core.next.call(null,seq36527);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36528,seq36527__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36536 = arguments.length;
var i__4500__auto___36537 = (0);
while(true){
if((i__4500__auto___36537 < len__4499__auto___36536)){
args__4502__auto__.push((arguments[i__4500__auto___36537]));

var G__36538 = (i__4500__auto___36537 + (1));
i__4500__auto___36537 = G__36538;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq36534){
var G__36535 = cljs.core.first.call(null,seq36534);
var seq36534__$1 = cljs.core.next.call(null,seq36534);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36535,seq36534__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36541 = arguments.length;
var i__4500__auto___36542 = (0);
while(true){
if((i__4500__auto___36542 < len__4499__auto___36541)){
args__4502__auto__.push((arguments[i__4500__auto___36542]));

var G__36543 = (i__4500__auto___36542 + (1));
i__4500__auto___36542 = G__36543;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq36539){
var G__36540 = cljs.core.first.call(null,seq36539);
var seq36539__$1 = cljs.core.next.call(null,seq36539);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36540,seq36539__$1);
});

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});
