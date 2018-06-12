// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__3922__auto__ = elem.textContent;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__13073 = arguments.length;
switch (G__13073) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5455__auto__ = elem.classList;
if(cljs.core.truth_(temp__5455__auto__)){
var class_list = temp__5455__auto__;
return class_list.contains(c__$1);
} else {
var temp__5457__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5457__auto__)){
var class_name = temp__5457__auto__;
var temp__5457__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5457__auto____$1)){
var i = temp__5457__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,cljs.core.cst$kw$display) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$top,r.top,cljs.core.cst$kw$bottom,r.bottom,cljs.core.cst$kw$left,r.left,cljs.core.cst$kw$right,r.right,cljs.core.cst$kw$width,r.width,cljs.core.cst$kw$height,r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__13076 = arguments.length;
switch (G__13076) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__13080 = arguments.length;
switch (G__13080) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__13078_SHARP_){
return !((p1__13078_SHARP_ === base));
}),dommy.core.ancestors(elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13094 = arguments.length;
var i__4500__auto___13095 = (0);
while(true){
if((i__4500__auto___13095 < len__4499__auto___13094)){
args__4502__auto__.push((arguments[i__4500__auto___13095]));

var G__13096 = (i__4500__auto___13095 + (1));
i__4500__auto___13095 = G__13096;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__13084_13097 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__13085_13098 = null;
var count__13086_13099 = (0);
var i__13087_13100 = (0);
while(true){
if((i__13087_13100 < count__13086_13099)){
var vec__13088_13101 = chunk__13085_13098.cljs$core$IIndexed$_nth$arity$2(null,i__13087_13100);
var k_13102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13088_13101,(0),null);
var v_13103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13088_13101,(1),null);
style.setProperty(dommy.utils.as_str(k_13102),v_13103);


var G__13104 = seq__13084_13097;
var G__13105 = chunk__13085_13098;
var G__13106 = count__13086_13099;
var G__13107 = (i__13087_13100 + (1));
seq__13084_13097 = G__13104;
chunk__13085_13098 = G__13105;
count__13086_13099 = G__13106;
i__13087_13100 = G__13107;
continue;
} else {
var temp__5457__auto___13108 = cljs.core.seq(seq__13084_13097);
if(temp__5457__auto___13108){
var seq__13084_13109__$1 = temp__5457__auto___13108;
if(cljs.core.chunked_seq_QMARK_(seq__13084_13109__$1)){
var c__4319__auto___13110 = cljs.core.chunk_first(seq__13084_13109__$1);
var G__13111 = cljs.core.chunk_rest(seq__13084_13109__$1);
var G__13112 = c__4319__auto___13110;
var G__13113 = cljs.core.count(c__4319__auto___13110);
var G__13114 = (0);
seq__13084_13097 = G__13111;
chunk__13085_13098 = G__13112;
count__13086_13099 = G__13113;
i__13087_13100 = G__13114;
continue;
} else {
var vec__13091_13115 = cljs.core.first(seq__13084_13109__$1);
var k_13116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13091_13115,(0),null);
var v_13117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13091_13115,(1),null);
style.setProperty(dommy.utils.as_str(k_13116),v_13117);


var G__13118 = cljs.core.next(seq__13084_13109__$1);
var G__13119 = null;
var G__13120 = (0);
var G__13121 = (0);
seq__13084_13097 = G__13118;
chunk__13085_13098 = G__13119;
count__13086_13099 = G__13120;
i__13087_13100 = G__13121;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq13082){
var G__13083 = cljs.core.first(seq13082);
var seq13082__$1 = cljs.core.next(seq13082);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13083,seq13082__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13128 = arguments.length;
var i__4500__auto___13129 = (0);
while(true){
if((i__4500__auto___13129 < len__4499__auto___13128)){
args__4502__auto__.push((arguments[i__4500__auto___13129]));

var G__13130 = (i__4500__auto___13129 + (1));
i__4500__auto___13129 = G__13130;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__13124_13131 = cljs.core.seq(keywords);
var chunk__13125_13132 = null;
var count__13126_13133 = (0);
var i__13127_13134 = (0);
while(true){
if((i__13127_13134 < count__13126_13133)){
var kw_13135 = chunk__13125_13132.cljs$core$IIndexed$_nth$arity$2(null,i__13127_13134);
style.removeProperty(dommy.utils.as_str(kw_13135));


var G__13136 = seq__13124_13131;
var G__13137 = chunk__13125_13132;
var G__13138 = count__13126_13133;
var G__13139 = (i__13127_13134 + (1));
seq__13124_13131 = G__13136;
chunk__13125_13132 = G__13137;
count__13126_13133 = G__13138;
i__13127_13134 = G__13139;
continue;
} else {
var temp__5457__auto___13140 = cljs.core.seq(seq__13124_13131);
if(temp__5457__auto___13140){
var seq__13124_13141__$1 = temp__5457__auto___13140;
if(cljs.core.chunked_seq_QMARK_(seq__13124_13141__$1)){
var c__4319__auto___13142 = cljs.core.chunk_first(seq__13124_13141__$1);
var G__13143 = cljs.core.chunk_rest(seq__13124_13141__$1);
var G__13144 = c__4319__auto___13142;
var G__13145 = cljs.core.count(c__4319__auto___13142);
var G__13146 = (0);
seq__13124_13131 = G__13143;
chunk__13125_13132 = G__13144;
count__13126_13133 = G__13145;
i__13127_13134 = G__13146;
continue;
} else {
var kw_13147 = cljs.core.first(seq__13124_13141__$1);
style.removeProperty(dommy.utils.as_str(kw_13147));


var G__13148 = cljs.core.next(seq__13124_13141__$1);
var G__13149 = null;
var G__13150 = (0);
var G__13151 = (0);
seq__13124_13131 = G__13148;
chunk__13125_13132 = G__13149;
count__13126_13133 = G__13150;
i__13127_13134 = G__13151;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq13122){
var G__13123 = cljs.core.first(seq13122);
var seq13122__$1 = cljs.core.next(seq13122);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13123,seq13122__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13164 = arguments.length;
var i__4500__auto___13165 = (0);
while(true){
if((i__4500__auto___13165 < len__4499__auto___13164)){
args__4502__auto__.push((arguments[i__4500__auto___13165]));

var G__13166 = (i__4500__auto___13165 + (1));
i__4500__auto___13165 = G__13166;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__13154_13167 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__13155_13168 = null;
var count__13156_13169 = (0);
var i__13157_13170 = (0);
while(true){
if((i__13157_13170 < count__13156_13169)){
var vec__13158_13171 = chunk__13155_13168.cljs$core$IIndexed$_nth$arity$2(null,i__13157_13170);
var k_13172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13158_13171,(0),null);
var v_13173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13158_13171,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_13172,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_13173),"px"].join('')], 0));


var G__13174 = seq__13154_13167;
var G__13175 = chunk__13155_13168;
var G__13176 = count__13156_13169;
var G__13177 = (i__13157_13170 + (1));
seq__13154_13167 = G__13174;
chunk__13155_13168 = G__13175;
count__13156_13169 = G__13176;
i__13157_13170 = G__13177;
continue;
} else {
var temp__5457__auto___13178 = cljs.core.seq(seq__13154_13167);
if(temp__5457__auto___13178){
var seq__13154_13179__$1 = temp__5457__auto___13178;
if(cljs.core.chunked_seq_QMARK_(seq__13154_13179__$1)){
var c__4319__auto___13180 = cljs.core.chunk_first(seq__13154_13179__$1);
var G__13181 = cljs.core.chunk_rest(seq__13154_13179__$1);
var G__13182 = c__4319__auto___13180;
var G__13183 = cljs.core.count(c__4319__auto___13180);
var G__13184 = (0);
seq__13154_13167 = G__13181;
chunk__13155_13168 = G__13182;
count__13156_13169 = G__13183;
i__13157_13170 = G__13184;
continue;
} else {
var vec__13161_13185 = cljs.core.first(seq__13154_13179__$1);
var k_13186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13161_13185,(0),null);
var v_13187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13161_13185,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_13186,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_13187),"px"].join('')], 0));


var G__13188 = cljs.core.next(seq__13154_13179__$1);
var G__13189 = null;
var G__13190 = (0);
var G__13191 = (0);
seq__13154_13167 = G__13188;
chunk__13155_13168 = G__13189;
count__13156_13169 = G__13190;
i__13157_13170 = G__13191;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq13152){
var G__13153 = cljs.core.first(seq13152);
var seq13152__$1 = cljs.core.next(seq13152);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13153,seq13152__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__13197 = arguments.length;
switch (G__13197) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___13211 = arguments.length;
var i__4500__auto___13212 = (0);
while(true){
if((i__4500__auto___13212 < len__4499__auto___13211)){
args_arr__4514__auto__.push((arguments[i__4500__auto___13212]));

var G__13213 = (i__4500__auto___13212 + (1));
i__4500__auto___13212 = G__13213;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__13198 = elem;
(G__13198[k__$1] = v);

return G__13198;
} else {
var G__13199 = elem;
G__13199.setAttribute(k__$1,v);

return G__13199;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__13200_13214 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__13201_13215 = null;
var count__13202_13216 = (0);
var i__13203_13217 = (0);
while(true){
if((i__13203_13217 < count__13202_13216)){
var vec__13204_13218 = chunk__13201_13215.cljs$core$IIndexed$_nth$arity$2(null,i__13203_13217);
var k_13219__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13204_13218,(0),null);
var v_13220__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13204_13218,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_13219__$1,v_13220__$1);


var G__13221 = seq__13200_13214;
var G__13222 = chunk__13201_13215;
var G__13223 = count__13202_13216;
var G__13224 = (i__13203_13217 + (1));
seq__13200_13214 = G__13221;
chunk__13201_13215 = G__13222;
count__13202_13216 = G__13223;
i__13203_13217 = G__13224;
continue;
} else {
var temp__5457__auto___13225 = cljs.core.seq(seq__13200_13214);
if(temp__5457__auto___13225){
var seq__13200_13226__$1 = temp__5457__auto___13225;
if(cljs.core.chunked_seq_QMARK_(seq__13200_13226__$1)){
var c__4319__auto___13227 = cljs.core.chunk_first(seq__13200_13226__$1);
var G__13228 = cljs.core.chunk_rest(seq__13200_13226__$1);
var G__13229 = c__4319__auto___13227;
var G__13230 = cljs.core.count(c__4319__auto___13227);
var G__13231 = (0);
seq__13200_13214 = G__13228;
chunk__13201_13215 = G__13229;
count__13202_13216 = G__13230;
i__13203_13217 = G__13231;
continue;
} else {
var vec__13207_13232 = cljs.core.first(seq__13200_13226__$1);
var k_13233__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13207_13232,(0),null);
var v_13234__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13207_13232,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_13233__$1,v_13234__$1);


var G__13235 = cljs.core.next(seq__13200_13226__$1);
var G__13236 = null;
var G__13237 = (0);
var G__13238 = (0);
seq__13200_13214 = G__13235;
chunk__13201_13215 = G__13236;
count__13202_13216 = G__13237;
i__13203_13217 = G__13238;
continue;
}
} else {
}
}
break;
}

return elem;
});

/** @this {Function} */
dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq13193){
var G__13194 = cljs.core.first(seq13193);
var seq13193__$1 = cljs.core.next(seq13193);
var G__13195 = cljs.core.first(seq13193__$1);
var seq13193__$2 = cljs.core.next(seq13193__$1);
var G__13196 = cljs.core.first(seq13193__$2);
var seq13193__$3 = cljs.core.next(seq13193__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13194,G__13195,G__13196,seq13193__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__13243 = arguments.length;
switch (G__13243) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___13250 = arguments.length;
var i__4500__auto___13251 = (0);
while(true){
if((i__4500__auto___13251 < len__4499__auto___13250)){
args_arr__4514__auto__.push((arguments[i__4500__auto___13251]));

var G__13252 = (i__4500__auto___13251 + (1));
i__4500__auto___13251 = G__13252;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_13253__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__13244 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__13244.cljs$core$IFn$_invoke$arity$1 ? fexpr__13244.cljs$core$IFn$_invoke$arity$1(k_13253__$1) : fexpr__13244.call(null,k_13253__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_13253__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__13245_13254 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__13246_13255 = null;
var count__13247_13256 = (0);
var i__13248_13257 = (0);
while(true){
if((i__13248_13257 < count__13247_13256)){
var k_13258__$1 = chunk__13246_13255.cljs$core$IIndexed$_nth$arity$2(null,i__13248_13257);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_13258__$1);


var G__13259 = seq__13245_13254;
var G__13260 = chunk__13246_13255;
var G__13261 = count__13247_13256;
var G__13262 = (i__13248_13257 + (1));
seq__13245_13254 = G__13259;
chunk__13246_13255 = G__13260;
count__13247_13256 = G__13261;
i__13248_13257 = G__13262;
continue;
} else {
var temp__5457__auto___13263 = cljs.core.seq(seq__13245_13254);
if(temp__5457__auto___13263){
var seq__13245_13264__$1 = temp__5457__auto___13263;
if(cljs.core.chunked_seq_QMARK_(seq__13245_13264__$1)){
var c__4319__auto___13265 = cljs.core.chunk_first(seq__13245_13264__$1);
var G__13266 = cljs.core.chunk_rest(seq__13245_13264__$1);
var G__13267 = c__4319__auto___13265;
var G__13268 = cljs.core.count(c__4319__auto___13265);
var G__13269 = (0);
seq__13245_13254 = G__13266;
chunk__13246_13255 = G__13267;
count__13247_13256 = G__13268;
i__13248_13257 = G__13269;
continue;
} else {
var k_13270__$1 = cljs.core.first(seq__13245_13264__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_13270__$1);


var G__13271 = cljs.core.next(seq__13245_13264__$1);
var G__13272 = null;
var G__13273 = (0);
var G__13274 = (0);
seq__13245_13254 = G__13271;
chunk__13246_13255 = G__13272;
count__13247_13256 = G__13273;
i__13248_13257 = G__13274;
continue;
}
} else {
}
}
break;
}

return elem;
});

/** @this {Function} */
dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq13240){
var G__13241 = cljs.core.first(seq13240);
var seq13240__$1 = cljs.core.next(seq13240);
var G__13242 = cljs.core.first(seq13240__$1);
var seq13240__$2 = cljs.core.next(seq13240__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13241,G__13242,seq13240__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__13276 = arguments.length;
switch (G__13276) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__13282 = arguments.length;
switch (G__13282) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___13296 = arguments.length;
var i__4500__auto___13297 = (0);
while(true){
if((i__4500__auto___13297 < len__4499__auto___13296)){
args_arr__4514__auto__.push((arguments[i__4500__auto___13297]));

var G__13298 = (i__4500__auto___13297 + (1));
i__4500__auto___13297 = G__13298;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5455__auto___13299 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___13299)){
var class_list_13300 = temp__5455__auto___13299;
var seq__13283_13301 = cljs.core.seq(classes__$1);
var chunk__13284_13302 = null;
var count__13285_13303 = (0);
var i__13286_13304 = (0);
while(true){
if((i__13286_13304 < count__13285_13303)){
var c_13305 = chunk__13284_13302.cljs$core$IIndexed$_nth$arity$2(null,i__13286_13304);
class_list_13300.add(c_13305);


var G__13306 = seq__13283_13301;
var G__13307 = chunk__13284_13302;
var G__13308 = count__13285_13303;
var G__13309 = (i__13286_13304 + (1));
seq__13283_13301 = G__13306;
chunk__13284_13302 = G__13307;
count__13285_13303 = G__13308;
i__13286_13304 = G__13309;
continue;
} else {
var temp__5457__auto___13310 = cljs.core.seq(seq__13283_13301);
if(temp__5457__auto___13310){
var seq__13283_13311__$1 = temp__5457__auto___13310;
if(cljs.core.chunked_seq_QMARK_(seq__13283_13311__$1)){
var c__4319__auto___13312 = cljs.core.chunk_first(seq__13283_13311__$1);
var G__13313 = cljs.core.chunk_rest(seq__13283_13311__$1);
var G__13314 = c__4319__auto___13312;
var G__13315 = cljs.core.count(c__4319__auto___13312);
var G__13316 = (0);
seq__13283_13301 = G__13313;
chunk__13284_13302 = G__13314;
count__13285_13303 = G__13315;
i__13286_13304 = G__13316;
continue;
} else {
var c_13317 = cljs.core.first(seq__13283_13311__$1);
class_list_13300.add(c_13317);


var G__13318 = cljs.core.next(seq__13283_13311__$1);
var G__13319 = null;
var G__13320 = (0);
var G__13321 = (0);
seq__13283_13301 = G__13318;
chunk__13284_13302 = G__13319;
count__13285_13303 = G__13320;
i__13286_13304 = G__13321;
continue;
}
} else {
}
}
break;
}
} else {
var seq__13287_13322 = cljs.core.seq(classes__$1);
var chunk__13288_13323 = null;
var count__13289_13324 = (0);
var i__13290_13325 = (0);
while(true){
if((i__13290_13325 < count__13289_13324)){
var c_13326 = chunk__13288_13323.cljs$core$IIndexed$_nth$arity$2(null,i__13290_13325);
var class_name_13327 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_13327,c_13326))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_13327 === ""))?c_13326:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_13327)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_13326)].join('')));
}


var G__13328 = seq__13287_13322;
var G__13329 = chunk__13288_13323;
var G__13330 = count__13289_13324;
var G__13331 = (i__13290_13325 + (1));
seq__13287_13322 = G__13328;
chunk__13288_13323 = G__13329;
count__13289_13324 = G__13330;
i__13290_13325 = G__13331;
continue;
} else {
var temp__5457__auto___13332 = cljs.core.seq(seq__13287_13322);
if(temp__5457__auto___13332){
var seq__13287_13333__$1 = temp__5457__auto___13332;
if(cljs.core.chunked_seq_QMARK_(seq__13287_13333__$1)){
var c__4319__auto___13334 = cljs.core.chunk_first(seq__13287_13333__$1);
var G__13335 = cljs.core.chunk_rest(seq__13287_13333__$1);
var G__13336 = c__4319__auto___13334;
var G__13337 = cljs.core.count(c__4319__auto___13334);
var G__13338 = (0);
seq__13287_13322 = G__13335;
chunk__13288_13323 = G__13336;
count__13289_13324 = G__13337;
i__13290_13325 = G__13338;
continue;
} else {
var c_13339 = cljs.core.first(seq__13287_13333__$1);
var class_name_13340 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_13340,c_13339))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_13340 === ""))?c_13339:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_13340)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_13339)].join('')));
}


var G__13341 = cljs.core.next(seq__13287_13333__$1);
var G__13342 = null;
var G__13343 = (0);
var G__13344 = (0);
seq__13287_13322 = G__13341;
chunk__13288_13323 = G__13342;
count__13289_13324 = G__13343;
i__13290_13325 = G__13344;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__13291_13345 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__13292_13346 = null;
var count__13293_13347 = (0);
var i__13294_13348 = (0);
while(true){
if((i__13294_13348 < count__13293_13347)){
var c_13349 = chunk__13292_13346.cljs$core$IIndexed$_nth$arity$2(null,i__13294_13348);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_13349);


var G__13350 = seq__13291_13345;
var G__13351 = chunk__13292_13346;
var G__13352 = count__13293_13347;
var G__13353 = (i__13294_13348 + (1));
seq__13291_13345 = G__13350;
chunk__13292_13346 = G__13351;
count__13293_13347 = G__13352;
i__13294_13348 = G__13353;
continue;
} else {
var temp__5457__auto___13354 = cljs.core.seq(seq__13291_13345);
if(temp__5457__auto___13354){
var seq__13291_13355__$1 = temp__5457__auto___13354;
if(cljs.core.chunked_seq_QMARK_(seq__13291_13355__$1)){
var c__4319__auto___13356 = cljs.core.chunk_first(seq__13291_13355__$1);
var G__13357 = cljs.core.chunk_rest(seq__13291_13355__$1);
var G__13358 = c__4319__auto___13356;
var G__13359 = cljs.core.count(c__4319__auto___13356);
var G__13360 = (0);
seq__13291_13345 = G__13357;
chunk__13292_13346 = G__13358;
count__13293_13347 = G__13359;
i__13294_13348 = G__13360;
continue;
} else {
var c_13361 = cljs.core.first(seq__13291_13355__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_13361);


var G__13362 = cljs.core.next(seq__13291_13355__$1);
var G__13363 = null;
var G__13364 = (0);
var G__13365 = (0);
seq__13291_13345 = G__13362;
chunk__13292_13346 = G__13363;
count__13293_13347 = G__13364;
i__13294_13348 = G__13365;
continue;
}
} else {
}
}
break;
}

return elem;
});

/** @this {Function} */
dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq13279){
var G__13280 = cljs.core.first(seq13279);
var seq13279__$1 = cljs.core.next(seq13279);
var G__13281 = cljs.core.first(seq13279__$1);
var seq13279__$2 = cljs.core.next(seq13279__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13280,G__13281,seq13279__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__13370 = arguments.length;
switch (G__13370) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___13376 = arguments.length;
var i__4500__auto___13377 = (0);
while(true){
if((i__4500__auto___13377 < len__4499__auto___13376)){
args_arr__4514__auto__.push((arguments[i__4500__auto___13377]));

var G__13378 = (i__4500__auto___13377 + (1));
i__4500__auto___13377 = G__13378;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5455__auto___13379 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___13379)){
var class_list_13380 = temp__5455__auto___13379;
class_list_13380.remove(c__$1);
} else {
var class_name_13381 = dommy.core.class$(elem);
var new_class_name_13382 = dommy.utils.remove_class_str(class_name_13381,c__$1);
if((class_name_13381 === new_class_name_13382)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_13382);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__13371 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__13372 = null;
var count__13373 = (0);
var i__13374 = (0);
while(true){
if((i__13374 < count__13373)){
var c = chunk__13372.cljs$core$IIndexed$_nth$arity$2(null,i__13374);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__13383 = seq__13371;
var G__13384 = chunk__13372;
var G__13385 = count__13373;
var G__13386 = (i__13374 + (1));
seq__13371 = G__13383;
chunk__13372 = G__13384;
count__13373 = G__13385;
i__13374 = G__13386;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13371);
if(temp__5457__auto__){
var seq__13371__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13371__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__13371__$1);
var G__13387 = cljs.core.chunk_rest(seq__13371__$1);
var G__13388 = c__4319__auto__;
var G__13389 = cljs.core.count(c__4319__auto__);
var G__13390 = (0);
seq__13371 = G__13387;
chunk__13372 = G__13388;
count__13373 = G__13389;
i__13374 = G__13390;
continue;
} else {
var c = cljs.core.first(seq__13371__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__13391 = cljs.core.next(seq__13371__$1);
var G__13392 = null;
var G__13393 = (0);
var G__13394 = (0);
seq__13371 = G__13391;
chunk__13372 = G__13392;
count__13373 = G__13393;
i__13374 = G__13394;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq13367){
var G__13368 = cljs.core.first(seq13367);
var seq13367__$1 = cljs.core.next(seq13367);
var G__13369 = cljs.core.first(seq13367__$1);
var seq13367__$2 = cljs.core.next(seq13367__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13368,G__13369,seq13367__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__13396 = arguments.length;
switch (G__13396) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5455__auto___13398 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___13398)){
var class_list_13399 = temp__5455__auto___13398;
class_list_13399.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,!(dommy.core.has_class_QMARK_(elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__13401 = arguments.length;
switch (G__13401) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$display,((show_QMARK_)?"":"none")], 0));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__13404 = arguments.length;
switch (G__13404) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__13410 = arguments.length;
switch (G__13410) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___13417 = arguments.length;
var i__4500__auto___13418 = (0);
while(true){
if((i__4500__auto___13418 < len__4499__auto___13417)){
args_arr__4514__auto__.push((arguments[i__4500__auto___13418]));

var G__13419 = (i__4500__auto___13418 + (1));
i__4500__auto___13418 = G__13419;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__13411 = parent;
G__13411.appendChild(child);

return G__13411;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__13412_13420 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__13413_13421 = null;
var count__13414_13422 = (0);
var i__13415_13423 = (0);
while(true){
if((i__13415_13423 < count__13414_13422)){
var c_13424 = chunk__13413_13421.cljs$core$IIndexed$_nth$arity$2(null,i__13415_13423);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_13424);


var G__13425 = seq__13412_13420;
var G__13426 = chunk__13413_13421;
var G__13427 = count__13414_13422;
var G__13428 = (i__13415_13423 + (1));
seq__13412_13420 = G__13425;
chunk__13413_13421 = G__13426;
count__13414_13422 = G__13427;
i__13415_13423 = G__13428;
continue;
} else {
var temp__5457__auto___13429 = cljs.core.seq(seq__13412_13420);
if(temp__5457__auto___13429){
var seq__13412_13430__$1 = temp__5457__auto___13429;
if(cljs.core.chunked_seq_QMARK_(seq__13412_13430__$1)){
var c__4319__auto___13431 = cljs.core.chunk_first(seq__13412_13430__$1);
var G__13432 = cljs.core.chunk_rest(seq__13412_13430__$1);
var G__13433 = c__4319__auto___13431;
var G__13434 = cljs.core.count(c__4319__auto___13431);
var G__13435 = (0);
seq__13412_13420 = G__13432;
chunk__13413_13421 = G__13433;
count__13414_13422 = G__13434;
i__13415_13423 = G__13435;
continue;
} else {
var c_13436 = cljs.core.first(seq__13412_13430__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_13436);


var G__13437 = cljs.core.next(seq__13412_13430__$1);
var G__13438 = null;
var G__13439 = (0);
var G__13440 = (0);
seq__13412_13420 = G__13437;
chunk__13413_13421 = G__13438;
count__13414_13422 = G__13439;
i__13415_13423 = G__13440;
continue;
}
} else {
}
}
break;
}

return parent;
});

/** @this {Function} */
dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq13407){
var G__13408 = cljs.core.first(seq13407);
var seq13407__$1 = cljs.core.next(seq13407);
var G__13409 = cljs.core.first(seq13407__$1);
var seq13407__$2 = cljs.core.next(seq13407__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13408,G__13409,seq13407__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__13445 = arguments.length;
switch (G__13445) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___13452 = arguments.length;
var i__4500__auto___13453 = (0);
while(true){
if((i__4500__auto___13453 < len__4499__auto___13452)){
args_arr__4514__auto__.push((arguments[i__4500__auto___13453]));

var G__13454 = (i__4500__auto___13453 + (1));
i__4500__auto___13453 = G__13454;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__13446 = parent;
G__13446.insertBefore(child,parent.firstChild);

return G__13446;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__13447_13455 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__13448_13456 = null;
var count__13449_13457 = (0);
var i__13450_13458 = (0);
while(true){
if((i__13450_13458 < count__13449_13457)){
var c_13459 = chunk__13448_13456.cljs$core$IIndexed$_nth$arity$2(null,i__13450_13458);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_13459);


var G__13460 = seq__13447_13455;
var G__13461 = chunk__13448_13456;
var G__13462 = count__13449_13457;
var G__13463 = (i__13450_13458 + (1));
seq__13447_13455 = G__13460;
chunk__13448_13456 = G__13461;
count__13449_13457 = G__13462;
i__13450_13458 = G__13463;
continue;
} else {
var temp__5457__auto___13464 = cljs.core.seq(seq__13447_13455);
if(temp__5457__auto___13464){
var seq__13447_13465__$1 = temp__5457__auto___13464;
if(cljs.core.chunked_seq_QMARK_(seq__13447_13465__$1)){
var c__4319__auto___13466 = cljs.core.chunk_first(seq__13447_13465__$1);
var G__13467 = cljs.core.chunk_rest(seq__13447_13465__$1);
var G__13468 = c__4319__auto___13466;
var G__13469 = cljs.core.count(c__4319__auto___13466);
var G__13470 = (0);
seq__13447_13455 = G__13467;
chunk__13448_13456 = G__13468;
count__13449_13457 = G__13469;
i__13450_13458 = G__13470;
continue;
} else {
var c_13471 = cljs.core.first(seq__13447_13465__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_13471);


var G__13472 = cljs.core.next(seq__13447_13465__$1);
var G__13473 = null;
var G__13474 = (0);
var G__13475 = (0);
seq__13447_13455 = G__13472;
chunk__13448_13456 = G__13473;
count__13449_13457 = G__13474;
i__13450_13458 = G__13475;
continue;
}
} else {
}
}
break;
}

return parent;
});

/** @this {Function} */
dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq13442){
var G__13443 = cljs.core.first(seq13442);
var seq13442__$1 = cljs.core.next(seq13442);
var G__13444 = cljs.core.first(seq13442__$1);
var seq13442__$2 = cljs.core.next(seq13442__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13443,G__13444,seq13442__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5455__auto___13476 = other.nextSibling;
if(cljs.core.truth_(temp__5455__auto___13476)){
var next_13477 = temp__5455__auto___13476;
dommy.core.insert_before_BANG_(elem,next_13477);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__13479 = arguments.length;
switch (G__13479) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__13480 = p;
G__13480.removeChild(elem);

return G__13480;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13482){
var vec__13483 = p__13482;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13483,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13483,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__13483,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__13483,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3922__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3911__auto__ = related_target;
if(cljs.core.truth_(and__3911__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__3911__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
;})(vec__13483,special_mouse_event,real_mouse_event))
});})(vec__13483,special_mouse_event,real_mouse_event))
])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mouseenter,cljs.core.cst$kw$mouseover,cljs.core.cst$kw$mouseleave,cljs.core.cst$kw$mouseout], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__3911__auto__ = selected_target;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,cljs.core.cst$kw$disabled));
} else {
return and__3911__auto__;
}
})())){
event.selectedTarget = selected_target;

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__3922__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13489 = arguments.length;
var i__4500__auto___13490 = (0);
while(true){
if((i__4500__auto___13490 < len__4499__auto___13489)){
args__4502__auto__.push((arguments[i__4500__auto___13490]));

var G__13491 = (i__4500__auto___13490 + (1));
i__4500__auto___13490 = G__13491;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq13486){
var G__13487 = cljs.core.first(seq13486);
var seq13486__$1 = cljs.core.next(seq13486);
var G__13488 = cljs.core.first(seq13486__$1);
var seq13486__$2 = cljs.core.next(seq13486__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13487,G__13488,seq13486__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__13492 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__13492.cljs$core$IFn$_invoke$arity$1 ? fexpr__13492.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__13492.call(null,elem_sel));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13540 = arguments.length;
var i__4500__auto___13541 = (0);
while(true){
if((i__4500__auto___13541 < len__4499__auto___13540)){
args__4502__auto__.push((arguments[i__4500__auto___13541]));

var G__13542 = (i__4500__auto___13541 + (1));
i__4500__auto___13541 = G__13542;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__13495_13543 = dommy.core.elem_and_selector(elem_sel);
var elem_13544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13495_13543,(0),null);
var selector_13545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13495_13543,(1),null);
var seq__13498_13546 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__13505_13547 = null;
var count__13506_13548 = (0);
var i__13507_13549 = (0);
while(true){
if((i__13507_13549 < count__13506_13548)){
var vec__13514_13550 = chunk__13505_13547.cljs$core$IIndexed$_nth$arity$2(null,i__13507_13549);
var orig_type_13551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13514_13550,(0),null);
var f_13552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13514_13550,(1),null);
var seq__13508_13553 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_13551,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_13551,cljs.core.identity])));
var chunk__13510_13554 = null;
var count__13511_13555 = (0);
var i__13512_13556 = (0);
while(true){
if((i__13512_13556 < count__13511_13555)){
var vec__13517_13557 = chunk__13510_13554.cljs$core$IIndexed$_nth$arity$2(null,i__13512_13556);
var actual_type_13558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13517_13557,(0),null);
var factory_13559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13517_13557,(1),null);
var canonical_f_13560 = (function (){var G__13521 = (factory_13559.cljs$core$IFn$_invoke$arity$1 ? factory_13559.cljs$core$IFn$_invoke$arity$1(f_13552) : factory_13559.call(null,f_13552));
var fexpr__13520 = (cljs.core.truth_(selector_13545)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_13544,selector_13545):cljs.core.identity);
return (fexpr__13520.cljs$core$IFn$_invoke$arity$1 ? fexpr__13520.cljs$core$IFn$_invoke$arity$1(G__13521) : fexpr__13520.call(null,G__13521));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_13544,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13545,actual_type_13558,f_13552], null),canonical_f_13560], 0));

if(cljs.core.truth_(elem_13544.addEventListener)){
elem_13544.addEventListener(cljs.core.name(actual_type_13558),canonical_f_13560);
} else {
elem_13544.attachEvent(cljs.core.name(actual_type_13558),canonical_f_13560);
}


var G__13561 = seq__13508_13553;
var G__13562 = chunk__13510_13554;
var G__13563 = count__13511_13555;
var G__13564 = (i__13512_13556 + (1));
seq__13508_13553 = G__13561;
chunk__13510_13554 = G__13562;
count__13511_13555 = G__13563;
i__13512_13556 = G__13564;
continue;
} else {
var temp__5457__auto___13565 = cljs.core.seq(seq__13508_13553);
if(temp__5457__auto___13565){
var seq__13508_13566__$1 = temp__5457__auto___13565;
if(cljs.core.chunked_seq_QMARK_(seq__13508_13566__$1)){
var c__4319__auto___13567 = cljs.core.chunk_first(seq__13508_13566__$1);
var G__13568 = cljs.core.chunk_rest(seq__13508_13566__$1);
var G__13569 = c__4319__auto___13567;
var G__13570 = cljs.core.count(c__4319__auto___13567);
var G__13571 = (0);
seq__13508_13553 = G__13568;
chunk__13510_13554 = G__13569;
count__13511_13555 = G__13570;
i__13512_13556 = G__13571;
continue;
} else {
var vec__13522_13572 = cljs.core.first(seq__13508_13566__$1);
var actual_type_13573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13522_13572,(0),null);
var factory_13574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13522_13572,(1),null);
var canonical_f_13575 = (function (){var G__13526 = (factory_13574.cljs$core$IFn$_invoke$arity$1 ? factory_13574.cljs$core$IFn$_invoke$arity$1(f_13552) : factory_13574.call(null,f_13552));
var fexpr__13525 = (cljs.core.truth_(selector_13545)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_13544,selector_13545):cljs.core.identity);
return (fexpr__13525.cljs$core$IFn$_invoke$arity$1 ? fexpr__13525.cljs$core$IFn$_invoke$arity$1(G__13526) : fexpr__13525.call(null,G__13526));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_13544,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13545,actual_type_13573,f_13552], null),canonical_f_13575], 0));

if(cljs.core.truth_(elem_13544.addEventListener)){
elem_13544.addEventListener(cljs.core.name(actual_type_13573),canonical_f_13575);
} else {
elem_13544.attachEvent(cljs.core.name(actual_type_13573),canonical_f_13575);
}


var G__13576 = cljs.core.next(seq__13508_13566__$1);
var G__13577 = null;
var G__13578 = (0);
var G__13579 = (0);
seq__13508_13553 = G__13576;
chunk__13510_13554 = G__13577;
count__13511_13555 = G__13578;
i__13512_13556 = G__13579;
continue;
}
} else {
}
}
break;
}

var G__13580 = seq__13498_13546;
var G__13581 = chunk__13505_13547;
var G__13582 = count__13506_13548;
var G__13583 = (i__13507_13549 + (1));
seq__13498_13546 = G__13580;
chunk__13505_13547 = G__13581;
count__13506_13548 = G__13582;
i__13507_13549 = G__13583;
continue;
} else {
var temp__5457__auto___13584 = cljs.core.seq(seq__13498_13546);
if(temp__5457__auto___13584){
var seq__13498_13585__$1 = temp__5457__auto___13584;
if(cljs.core.chunked_seq_QMARK_(seq__13498_13585__$1)){
var c__4319__auto___13586 = cljs.core.chunk_first(seq__13498_13585__$1);
var G__13587 = cljs.core.chunk_rest(seq__13498_13585__$1);
var G__13588 = c__4319__auto___13586;
var G__13589 = cljs.core.count(c__4319__auto___13586);
var G__13590 = (0);
seq__13498_13546 = G__13587;
chunk__13505_13547 = G__13588;
count__13506_13548 = G__13589;
i__13507_13549 = G__13590;
continue;
} else {
var vec__13527_13591 = cljs.core.first(seq__13498_13585__$1);
var orig_type_13592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13527_13591,(0),null);
var f_13593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13527_13591,(1),null);
var seq__13499_13594 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_13592,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_13592,cljs.core.identity])));
var chunk__13501_13595 = null;
var count__13502_13596 = (0);
var i__13503_13597 = (0);
while(true){
if((i__13503_13597 < count__13502_13596)){
var vec__13530_13598 = chunk__13501_13595.cljs$core$IIndexed$_nth$arity$2(null,i__13503_13597);
var actual_type_13599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13530_13598,(0),null);
var factory_13600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13530_13598,(1),null);
var canonical_f_13601 = (function (){var G__13534 = (factory_13600.cljs$core$IFn$_invoke$arity$1 ? factory_13600.cljs$core$IFn$_invoke$arity$1(f_13593) : factory_13600.call(null,f_13593));
var fexpr__13533 = (cljs.core.truth_(selector_13545)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_13544,selector_13545):cljs.core.identity);
return (fexpr__13533.cljs$core$IFn$_invoke$arity$1 ? fexpr__13533.cljs$core$IFn$_invoke$arity$1(G__13534) : fexpr__13533.call(null,G__13534));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_13544,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13545,actual_type_13599,f_13593], null),canonical_f_13601], 0));

if(cljs.core.truth_(elem_13544.addEventListener)){
elem_13544.addEventListener(cljs.core.name(actual_type_13599),canonical_f_13601);
} else {
elem_13544.attachEvent(cljs.core.name(actual_type_13599),canonical_f_13601);
}


var G__13602 = seq__13499_13594;
var G__13603 = chunk__13501_13595;
var G__13604 = count__13502_13596;
var G__13605 = (i__13503_13597 + (1));
seq__13499_13594 = G__13602;
chunk__13501_13595 = G__13603;
count__13502_13596 = G__13604;
i__13503_13597 = G__13605;
continue;
} else {
var temp__5457__auto___13606__$1 = cljs.core.seq(seq__13499_13594);
if(temp__5457__auto___13606__$1){
var seq__13499_13607__$1 = temp__5457__auto___13606__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13499_13607__$1)){
var c__4319__auto___13608 = cljs.core.chunk_first(seq__13499_13607__$1);
var G__13609 = cljs.core.chunk_rest(seq__13499_13607__$1);
var G__13610 = c__4319__auto___13608;
var G__13611 = cljs.core.count(c__4319__auto___13608);
var G__13612 = (0);
seq__13499_13594 = G__13609;
chunk__13501_13595 = G__13610;
count__13502_13596 = G__13611;
i__13503_13597 = G__13612;
continue;
} else {
var vec__13535_13613 = cljs.core.first(seq__13499_13607__$1);
var actual_type_13614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13535_13613,(0),null);
var factory_13615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13535_13613,(1),null);
var canonical_f_13616 = (function (){var G__13539 = (factory_13615.cljs$core$IFn$_invoke$arity$1 ? factory_13615.cljs$core$IFn$_invoke$arity$1(f_13593) : factory_13615.call(null,f_13593));
var fexpr__13538 = (cljs.core.truth_(selector_13545)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_13544,selector_13545):cljs.core.identity);
return (fexpr__13538.cljs$core$IFn$_invoke$arity$1 ? fexpr__13538.cljs$core$IFn$_invoke$arity$1(G__13539) : fexpr__13538.call(null,G__13539));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_13544,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13545,actual_type_13614,f_13593], null),canonical_f_13616], 0));

if(cljs.core.truth_(elem_13544.addEventListener)){
elem_13544.addEventListener(cljs.core.name(actual_type_13614),canonical_f_13616);
} else {
elem_13544.attachEvent(cljs.core.name(actual_type_13614),canonical_f_13616);
}


var G__13617 = cljs.core.next(seq__13499_13607__$1);
var G__13618 = null;
var G__13619 = (0);
var G__13620 = (0);
seq__13499_13594 = G__13617;
chunk__13501_13595 = G__13618;
count__13502_13596 = G__13619;
i__13503_13597 = G__13620;
continue;
}
} else {
}
}
break;
}

var G__13621 = cljs.core.next(seq__13498_13585__$1);
var G__13622 = null;
var G__13623 = (0);
var G__13624 = (0);
seq__13498_13546 = G__13621;
chunk__13505_13547 = G__13622;
count__13506_13548 = G__13623;
i__13507_13549 = G__13624;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq13493){
var G__13494 = cljs.core.first(seq13493);
var seq13493__$1 = cljs.core.next(seq13493);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13494,seq13493__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13664 = arguments.length;
var i__4500__auto___13665 = (0);
while(true){
if((i__4500__auto___13665 < len__4499__auto___13664)){
args__4502__auto__.push((arguments[i__4500__auto___13665]));

var G__13666 = (i__4500__auto___13665 + (1));
i__4500__auto___13665 = G__13666;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__13627_13667 = dommy.core.elem_and_selector(elem_sel);
var elem_13668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13627_13667,(0),null);
var selector_13669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13627_13667,(1),null);
var seq__13630_13670 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__13637_13671 = null;
var count__13638_13672 = (0);
var i__13639_13673 = (0);
while(true){
if((i__13639_13673 < count__13638_13672)){
var vec__13646_13674 = chunk__13637_13671.cljs$core$IIndexed$_nth$arity$2(null,i__13639_13673);
var orig_type_13675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13646_13674,(0),null);
var f_13676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13646_13674,(1),null);
var seq__13640_13677 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_13675,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_13675,cljs.core.identity])));
var chunk__13642_13678 = null;
var count__13643_13679 = (0);
var i__13644_13680 = (0);
while(true){
if((i__13644_13680 < count__13643_13679)){
var vec__13649_13681 = chunk__13642_13678.cljs$core$IIndexed$_nth$arity$2(null,i__13644_13680);
var actual_type_13682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13649_13681,(0),null);
var __13683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13649_13681,(1),null);
var keys_13684 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13669,actual_type_13682,f_13676], null);
var canonical_f_13685 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_13668),keys_13684);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_13668,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_13684], 0));

if(cljs.core.truth_(elem_13668.removeEventListener)){
elem_13668.removeEventListener(cljs.core.name(actual_type_13682),canonical_f_13685);
} else {
elem_13668.detachEvent(cljs.core.name(actual_type_13682),canonical_f_13685);
}


var G__13686 = seq__13640_13677;
var G__13687 = chunk__13642_13678;
var G__13688 = count__13643_13679;
var G__13689 = (i__13644_13680 + (1));
seq__13640_13677 = G__13686;
chunk__13642_13678 = G__13687;
count__13643_13679 = G__13688;
i__13644_13680 = G__13689;
continue;
} else {
var temp__5457__auto___13690 = cljs.core.seq(seq__13640_13677);
if(temp__5457__auto___13690){
var seq__13640_13691__$1 = temp__5457__auto___13690;
if(cljs.core.chunked_seq_QMARK_(seq__13640_13691__$1)){
var c__4319__auto___13692 = cljs.core.chunk_first(seq__13640_13691__$1);
var G__13693 = cljs.core.chunk_rest(seq__13640_13691__$1);
var G__13694 = c__4319__auto___13692;
var G__13695 = cljs.core.count(c__4319__auto___13692);
var G__13696 = (0);
seq__13640_13677 = G__13693;
chunk__13642_13678 = G__13694;
count__13643_13679 = G__13695;
i__13644_13680 = G__13696;
continue;
} else {
var vec__13652_13697 = cljs.core.first(seq__13640_13691__$1);
var actual_type_13698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13652_13697,(0),null);
var __13699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13652_13697,(1),null);
var keys_13700 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13669,actual_type_13698,f_13676], null);
var canonical_f_13701 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_13668),keys_13700);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_13668,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_13700], 0));

if(cljs.core.truth_(elem_13668.removeEventListener)){
elem_13668.removeEventListener(cljs.core.name(actual_type_13698),canonical_f_13701);
} else {
elem_13668.detachEvent(cljs.core.name(actual_type_13698),canonical_f_13701);
}


var G__13702 = cljs.core.next(seq__13640_13691__$1);
var G__13703 = null;
var G__13704 = (0);
var G__13705 = (0);
seq__13640_13677 = G__13702;
chunk__13642_13678 = G__13703;
count__13643_13679 = G__13704;
i__13644_13680 = G__13705;
continue;
}
} else {
}
}
break;
}

var G__13706 = seq__13630_13670;
var G__13707 = chunk__13637_13671;
var G__13708 = count__13638_13672;
var G__13709 = (i__13639_13673 + (1));
seq__13630_13670 = G__13706;
chunk__13637_13671 = G__13707;
count__13638_13672 = G__13708;
i__13639_13673 = G__13709;
continue;
} else {
var temp__5457__auto___13710 = cljs.core.seq(seq__13630_13670);
if(temp__5457__auto___13710){
var seq__13630_13711__$1 = temp__5457__auto___13710;
if(cljs.core.chunked_seq_QMARK_(seq__13630_13711__$1)){
var c__4319__auto___13712 = cljs.core.chunk_first(seq__13630_13711__$1);
var G__13713 = cljs.core.chunk_rest(seq__13630_13711__$1);
var G__13714 = c__4319__auto___13712;
var G__13715 = cljs.core.count(c__4319__auto___13712);
var G__13716 = (0);
seq__13630_13670 = G__13713;
chunk__13637_13671 = G__13714;
count__13638_13672 = G__13715;
i__13639_13673 = G__13716;
continue;
} else {
var vec__13655_13717 = cljs.core.first(seq__13630_13711__$1);
var orig_type_13718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13655_13717,(0),null);
var f_13719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13655_13717,(1),null);
var seq__13631_13720 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_13718,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_13718,cljs.core.identity])));
var chunk__13633_13721 = null;
var count__13634_13722 = (0);
var i__13635_13723 = (0);
while(true){
if((i__13635_13723 < count__13634_13722)){
var vec__13658_13724 = chunk__13633_13721.cljs$core$IIndexed$_nth$arity$2(null,i__13635_13723);
var actual_type_13725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13658_13724,(0),null);
var __13726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13658_13724,(1),null);
var keys_13727 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13669,actual_type_13725,f_13719], null);
var canonical_f_13728 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_13668),keys_13727);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_13668,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_13727], 0));

if(cljs.core.truth_(elem_13668.removeEventListener)){
elem_13668.removeEventListener(cljs.core.name(actual_type_13725),canonical_f_13728);
} else {
elem_13668.detachEvent(cljs.core.name(actual_type_13725),canonical_f_13728);
}


var G__13729 = seq__13631_13720;
var G__13730 = chunk__13633_13721;
var G__13731 = count__13634_13722;
var G__13732 = (i__13635_13723 + (1));
seq__13631_13720 = G__13729;
chunk__13633_13721 = G__13730;
count__13634_13722 = G__13731;
i__13635_13723 = G__13732;
continue;
} else {
var temp__5457__auto___13733__$1 = cljs.core.seq(seq__13631_13720);
if(temp__5457__auto___13733__$1){
var seq__13631_13734__$1 = temp__5457__auto___13733__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13631_13734__$1)){
var c__4319__auto___13735 = cljs.core.chunk_first(seq__13631_13734__$1);
var G__13736 = cljs.core.chunk_rest(seq__13631_13734__$1);
var G__13737 = c__4319__auto___13735;
var G__13738 = cljs.core.count(c__4319__auto___13735);
var G__13739 = (0);
seq__13631_13720 = G__13736;
chunk__13633_13721 = G__13737;
count__13634_13722 = G__13738;
i__13635_13723 = G__13739;
continue;
} else {
var vec__13661_13740 = cljs.core.first(seq__13631_13734__$1);
var actual_type_13741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13661_13740,(0),null);
var __13742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13661_13740,(1),null);
var keys_13743 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13669,actual_type_13741,f_13719], null);
var canonical_f_13744 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_13668),keys_13743);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_13668,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_13743], 0));

if(cljs.core.truth_(elem_13668.removeEventListener)){
elem_13668.removeEventListener(cljs.core.name(actual_type_13741),canonical_f_13744);
} else {
elem_13668.detachEvent(cljs.core.name(actual_type_13741),canonical_f_13744);
}


var G__13745 = cljs.core.next(seq__13631_13734__$1);
var G__13746 = null;
var G__13747 = (0);
var G__13748 = (0);
seq__13631_13720 = G__13745;
chunk__13633_13721 = G__13746;
count__13634_13722 = G__13747;
i__13635_13723 = G__13748;
continue;
}
} else {
}
}
break;
}

var G__13749 = cljs.core.next(seq__13630_13711__$1);
var G__13750 = null;
var G__13751 = (0);
var G__13752 = (0);
seq__13630_13670 = G__13749;
chunk__13637_13671 = G__13750;
count__13638_13672 = G__13751;
i__13639_13673 = G__13752;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq13625){
var G__13626 = cljs.core.first(seq13625);
var seq13625__$1 = cljs.core.next(seq13625);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13626,seq13625__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13768 = arguments.length;
var i__4500__auto___13769 = (0);
while(true){
if((i__4500__auto___13769 < len__4499__auto___13768)){
args__4502__auto__.push((arguments[i__4500__auto___13769]));

var G__13770 = (i__4500__auto___13769 + (1));
i__4500__auto___13769 = G__13770;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__13755_13771 = dommy.core.elem_and_selector(elem_sel);
var elem_13772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13755_13771,(0),null);
var selector_13773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13755_13771,(1),null);
var seq__13758_13774 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__13759_13775 = null;
var count__13760_13776 = (0);
var i__13761_13777 = (0);
while(true){
if((i__13761_13777 < count__13760_13776)){
var vec__13762_13778 = chunk__13759_13775.cljs$core$IIndexed$_nth$arity$2(null,i__13761_13777);
var type_13779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13762_13778,(0),null);
var f_13780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13762_13778,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_13779,((function (seq__13758_13774,chunk__13759_13775,count__13760_13776,i__13761_13777,vec__13762_13778,type_13779,f_13780,vec__13755_13771,elem_13772,selector_13773){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_13779,dommy$core$this_fn], 0));

return (f_13780.cljs$core$IFn$_invoke$arity$1 ? f_13780.cljs$core$IFn$_invoke$arity$1(e) : f_13780.call(null,e));
});})(seq__13758_13774,chunk__13759_13775,count__13760_13776,i__13761_13777,vec__13762_13778,type_13779,f_13780,vec__13755_13771,elem_13772,selector_13773))
], 0));


var G__13781 = seq__13758_13774;
var G__13782 = chunk__13759_13775;
var G__13783 = count__13760_13776;
var G__13784 = (i__13761_13777 + (1));
seq__13758_13774 = G__13781;
chunk__13759_13775 = G__13782;
count__13760_13776 = G__13783;
i__13761_13777 = G__13784;
continue;
} else {
var temp__5457__auto___13785 = cljs.core.seq(seq__13758_13774);
if(temp__5457__auto___13785){
var seq__13758_13786__$1 = temp__5457__auto___13785;
if(cljs.core.chunked_seq_QMARK_(seq__13758_13786__$1)){
var c__4319__auto___13787 = cljs.core.chunk_first(seq__13758_13786__$1);
var G__13788 = cljs.core.chunk_rest(seq__13758_13786__$1);
var G__13789 = c__4319__auto___13787;
var G__13790 = cljs.core.count(c__4319__auto___13787);
var G__13791 = (0);
seq__13758_13774 = G__13788;
chunk__13759_13775 = G__13789;
count__13760_13776 = G__13790;
i__13761_13777 = G__13791;
continue;
} else {
var vec__13765_13792 = cljs.core.first(seq__13758_13786__$1);
var type_13793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13765_13792,(0),null);
var f_13794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13765_13792,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_13793,((function (seq__13758_13774,chunk__13759_13775,count__13760_13776,i__13761_13777,vec__13765_13792,type_13793,f_13794,seq__13758_13786__$1,temp__5457__auto___13785,vec__13755_13771,elem_13772,selector_13773){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_13793,dommy$core$this_fn], 0));

return (f_13794.cljs$core$IFn$_invoke$arity$1 ? f_13794.cljs$core$IFn$_invoke$arity$1(e) : f_13794.call(null,e));
});})(seq__13758_13774,chunk__13759_13775,count__13760_13776,i__13761_13777,vec__13765_13792,type_13793,f_13794,seq__13758_13786__$1,temp__5457__auto___13785,vec__13755_13771,elem_13772,selector_13773))
], 0));


var G__13795 = cljs.core.next(seq__13758_13786__$1);
var G__13796 = null;
var G__13797 = (0);
var G__13798 = (0);
seq__13758_13774 = G__13795;
chunk__13759_13775 = G__13796;
count__13760_13776 = G__13797;
i__13761_13777 = G__13798;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq13753){
var G__13754 = cljs.core.first(seq13753);
var seq13753__$1 = cljs.core.next(seq13753);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13754,seq13753__$1);
});

