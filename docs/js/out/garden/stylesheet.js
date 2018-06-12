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
var len__4499__auto___37601 = arguments.length;
var i__4500__auto___37602 = (0);
while(true){
if((i__4500__auto___37602 < len__4499__auto___37601)){
args__4502__auto__.push((arguments[i__4500__auto___37602]));

var G__37603 = (i__4500__auto___37602 + (1));
i__4500__auto___37602 = G__37603;
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
var G__37604__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__37604 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__37605__i = 0, G__37605__a = new Array(arguments.length -  0);
while (G__37605__i < G__37605__a.length) {G__37605__a[G__37605__i] = arguments[G__37605__i + 0]; ++G__37605__i;}
  children = new cljs.core.IndexedSeq(G__37605__a,0,null);
} 
return G__37604__delegate.call(this,children);};
G__37604.cljs$lang$maxFixedArity = 0;
G__37604.cljs$lang$applyTo = (function (arglist__37606){
var children = cljs.core.seq(arglist__37606);
return G__37604__delegate(children);
});
G__37604.cljs$core$IFn$_invoke$arity$variadic = G__37604__delegate;
return G__37604;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.rule.cljs$lang$applyTo = (function (seq37599){
var G__37600 = cljs.core.first.call(null,seq37599);
var seq37599__$1 = cljs.core.next.call(null,seq37599);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37600,seq37599__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__37607__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__37607 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37608__i = 0, G__37608__a = new Array(arguments.length -  0);
while (G__37608__i < G__37608__a.length) {G__37608__a[G__37608__i] = arguments[G__37608__i + 0]; ++G__37608__i;}
  args = new cljs.core.IndexedSeq(G__37608__a,0,null);
} 
return G__37607__delegate.call(this,args);};
G__37607.cljs$lang$maxFixedArity = 0;
G__37607.cljs$lang$applyTo = (function (arglist__37609){
var args = cljs.core.seq(arglist__37609);
return G__37607__delegate(args);
});
G__37607.cljs$core$IFn$_invoke$arity$variadic = G__37607__delegate;
return G__37607;
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
var len__4499__auto___37611 = arguments.length;
var i__4500__auto___37612 = (0);
while(true){
if((i__4500__auto___37612 < len__4499__auto___37611)){
args__4502__auto__.push((arguments[i__4500__auto___37612]));

var G__37613 = (i__4500__auto___37612 + (1));
i__4500__auto___37612 = G__37613;
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
garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq37610){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37610));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__37617 = arguments.length;
switch (G__37617) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___37619 = arguments.length;
var i__4500__auto___37620 = (0);
while(true){
if((i__4500__auto___37620 < len__4499__auto___37619)){
args_arr__4514__auto__.push((arguments[i__4500__auto___37620]));

var G__37621 = (i__4500__auto___37620 + (1));
i__4500__auto___37620 = G__37621;
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
garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq37615){
var G__37616 = cljs.core.first.call(null,seq37615);
var seq37615__$1 = cljs.core.next.call(null,seq37615);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37616,seq37615__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37624 = arguments.length;
var i__4500__auto___37625 = (0);
while(true){
if((i__4500__auto___37625 < len__4499__auto___37624)){
args__4502__auto__.push((arguments[i__4500__auto___37625]));

var G__37626 = (i__4500__auto___37625 + (1));
i__4500__auto___37625 = G__37626;
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
garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq37622){
var G__37623 = cljs.core.first.call(null,seq37622);
var seq37622__$1 = cljs.core.next.call(null,seq37622);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37623,seq37622__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37629 = arguments.length;
var i__4500__auto___37630 = (0);
while(true){
if((i__4500__auto___37630 < len__4499__auto___37629)){
args__4502__auto__.push((arguments[i__4500__auto___37630]));

var G__37631 = (i__4500__auto___37630 + (1));
i__4500__auto___37630 = G__37631;
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
garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq37627){
var G__37628 = cljs.core.first.call(null,seq37627);
var seq37627__$1 = cljs.core.next.call(null,seq37627);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37628,seq37627__$1);
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
