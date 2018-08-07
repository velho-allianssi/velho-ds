// Compiled by ClojureScript 1.10.238 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name.call(null,data);
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
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__36638 = arguments.length;
switch (G__36638) {
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
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5455__auto__ = elem.classList;
if(cljs.core.truth_(temp__5455__auto__)){
var class_list = temp__5455__auto__;
return class_list.contains(c__$1);
} else {
var temp__5457__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__5457__auto__)){
var class_name = temp__5457__auto__;
var temp__5457__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
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
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
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
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__36641 = arguments.length;
switch (G__36641) {
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
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__36645 = arguments.length;
switch (G__36645) {
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
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__36643_SHARP_){
return !((p1__36643_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
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
var len__4499__auto___36659 = arguments.length;
var i__4500__auto___36660 = (0);
while(true){
if((i__4500__auto___36660 < len__4499__auto___36659)){
args__4502__auto__.push((arguments[i__4500__auto___36660]));

var G__36661 = (i__4500__auto___36660 + (1));
i__4500__auto___36660 = G__36661;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__36649_36662 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__36650_36663 = null;
var count__36651_36664 = (0);
var i__36652_36665 = (0);
while(true){
if((i__36652_36665 < count__36651_36664)){
var vec__36653_36666 = cljs.core._nth.call(null,chunk__36650_36663,i__36652_36665);
var k_36667 = cljs.core.nth.call(null,vec__36653_36666,(0),null);
var v_36668 = cljs.core.nth.call(null,vec__36653_36666,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_36667),v_36668);


var G__36669 = seq__36649_36662;
var G__36670 = chunk__36650_36663;
var G__36671 = count__36651_36664;
var G__36672 = (i__36652_36665 + (1));
seq__36649_36662 = G__36669;
chunk__36650_36663 = G__36670;
count__36651_36664 = G__36671;
i__36652_36665 = G__36672;
continue;
} else {
var temp__5457__auto___36673 = cljs.core.seq.call(null,seq__36649_36662);
if(temp__5457__auto___36673){
var seq__36649_36674__$1 = temp__5457__auto___36673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36649_36674__$1)){
var c__4319__auto___36675 = cljs.core.chunk_first.call(null,seq__36649_36674__$1);
var G__36676 = cljs.core.chunk_rest.call(null,seq__36649_36674__$1);
var G__36677 = c__4319__auto___36675;
var G__36678 = cljs.core.count.call(null,c__4319__auto___36675);
var G__36679 = (0);
seq__36649_36662 = G__36676;
chunk__36650_36663 = G__36677;
count__36651_36664 = G__36678;
i__36652_36665 = G__36679;
continue;
} else {
var vec__36656_36680 = cljs.core.first.call(null,seq__36649_36674__$1);
var k_36681 = cljs.core.nth.call(null,vec__36656_36680,(0),null);
var v_36682 = cljs.core.nth.call(null,vec__36656_36680,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_36681),v_36682);


var G__36683 = cljs.core.next.call(null,seq__36649_36674__$1);
var G__36684 = null;
var G__36685 = (0);
var G__36686 = (0);
seq__36649_36662 = G__36683;
chunk__36650_36663 = G__36684;
count__36651_36664 = G__36685;
i__36652_36665 = G__36686;
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
dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq36647){
var G__36648 = cljs.core.first.call(null,seq36647);
var seq36647__$1 = cljs.core.next.call(null,seq36647);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36648,seq36647__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36693 = arguments.length;
var i__4500__auto___36694 = (0);
while(true){
if((i__4500__auto___36694 < len__4499__auto___36693)){
args__4502__auto__.push((arguments[i__4500__auto___36694]));

var G__36695 = (i__4500__auto___36694 + (1));
i__4500__auto___36694 = G__36695;
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
var seq__36689_36696 = cljs.core.seq.call(null,keywords);
var chunk__36690_36697 = null;
var count__36691_36698 = (0);
var i__36692_36699 = (0);
while(true){
if((i__36692_36699 < count__36691_36698)){
var kw_36700 = cljs.core._nth.call(null,chunk__36690_36697,i__36692_36699);
style.removeProperty(dommy.utils.as_str.call(null,kw_36700));


var G__36701 = seq__36689_36696;
var G__36702 = chunk__36690_36697;
var G__36703 = count__36691_36698;
var G__36704 = (i__36692_36699 + (1));
seq__36689_36696 = G__36701;
chunk__36690_36697 = G__36702;
count__36691_36698 = G__36703;
i__36692_36699 = G__36704;
continue;
} else {
var temp__5457__auto___36705 = cljs.core.seq.call(null,seq__36689_36696);
if(temp__5457__auto___36705){
var seq__36689_36706__$1 = temp__5457__auto___36705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36689_36706__$1)){
var c__4319__auto___36707 = cljs.core.chunk_first.call(null,seq__36689_36706__$1);
var G__36708 = cljs.core.chunk_rest.call(null,seq__36689_36706__$1);
var G__36709 = c__4319__auto___36707;
var G__36710 = cljs.core.count.call(null,c__4319__auto___36707);
var G__36711 = (0);
seq__36689_36696 = G__36708;
chunk__36690_36697 = G__36709;
count__36691_36698 = G__36710;
i__36692_36699 = G__36711;
continue;
} else {
var kw_36712 = cljs.core.first.call(null,seq__36689_36706__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_36712));


var G__36713 = cljs.core.next.call(null,seq__36689_36706__$1);
var G__36714 = null;
var G__36715 = (0);
var G__36716 = (0);
seq__36689_36696 = G__36713;
chunk__36690_36697 = G__36714;
count__36691_36698 = G__36715;
i__36692_36699 = G__36716;
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
dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq36687){
var G__36688 = cljs.core.first.call(null,seq36687);
var seq36687__$1 = cljs.core.next.call(null,seq36687);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36688,seq36687__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36729 = arguments.length;
var i__4500__auto___36730 = (0);
while(true){
if((i__4500__auto___36730 < len__4499__auto___36729)){
args__4502__auto__.push((arguments[i__4500__auto___36730]));

var G__36731 = (i__4500__auto___36730 + (1));
i__4500__auto___36730 = G__36731;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__36719_36732 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__36720_36733 = null;
var count__36721_36734 = (0);
var i__36722_36735 = (0);
while(true){
if((i__36722_36735 < count__36721_36734)){
var vec__36723_36736 = cljs.core._nth.call(null,chunk__36720_36733,i__36722_36735);
var k_36737 = cljs.core.nth.call(null,vec__36723_36736,(0),null);
var v_36738 = cljs.core.nth.call(null,vec__36723_36736,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_36737,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_36738),"px"].join(''));


var G__36739 = seq__36719_36732;
var G__36740 = chunk__36720_36733;
var G__36741 = count__36721_36734;
var G__36742 = (i__36722_36735 + (1));
seq__36719_36732 = G__36739;
chunk__36720_36733 = G__36740;
count__36721_36734 = G__36741;
i__36722_36735 = G__36742;
continue;
} else {
var temp__5457__auto___36743 = cljs.core.seq.call(null,seq__36719_36732);
if(temp__5457__auto___36743){
var seq__36719_36744__$1 = temp__5457__auto___36743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36719_36744__$1)){
var c__4319__auto___36745 = cljs.core.chunk_first.call(null,seq__36719_36744__$1);
var G__36746 = cljs.core.chunk_rest.call(null,seq__36719_36744__$1);
var G__36747 = c__4319__auto___36745;
var G__36748 = cljs.core.count.call(null,c__4319__auto___36745);
var G__36749 = (0);
seq__36719_36732 = G__36746;
chunk__36720_36733 = G__36747;
count__36721_36734 = G__36748;
i__36722_36735 = G__36749;
continue;
} else {
var vec__36726_36750 = cljs.core.first.call(null,seq__36719_36744__$1);
var k_36751 = cljs.core.nth.call(null,vec__36726_36750,(0),null);
var v_36752 = cljs.core.nth.call(null,vec__36726_36750,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_36751,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_36752),"px"].join(''));


var G__36753 = cljs.core.next.call(null,seq__36719_36744__$1);
var G__36754 = null;
var G__36755 = (0);
var G__36756 = (0);
seq__36719_36732 = G__36753;
chunk__36720_36733 = G__36754;
count__36721_36734 = G__36755;
i__36722_36735 = G__36756;
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
dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq36717){
var G__36718 = cljs.core.first.call(null,seq36717);
var seq36717__$1 = cljs.core.next.call(null,seq36717);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36718,seq36717__$1);
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
var G__36762 = arguments.length;
switch (G__36762) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___36776 = arguments.length;
var i__4500__auto___36777 = (0);
while(true){
if((i__4500__auto___36777 < len__4499__auto___36776)){
args_arr__4514__auto__.push((arguments[i__4500__auto___36777]));

var G__36778 = (i__4500__auto___36777 + (1));
i__4500__auto___36777 = G__36778;
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
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__36763 = elem;
(G__36763[k__$1] = v);

return G__36763;
} else {
var G__36764 = elem;
G__36764.setAttribute(k__$1,v);

return G__36764;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__36765_36779 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__36766_36780 = null;
var count__36767_36781 = (0);
var i__36768_36782 = (0);
while(true){
if((i__36768_36782 < count__36767_36781)){
var vec__36769_36783 = cljs.core._nth.call(null,chunk__36766_36780,i__36768_36782);
var k_36784__$1 = cljs.core.nth.call(null,vec__36769_36783,(0),null);
var v_36785__$1 = cljs.core.nth.call(null,vec__36769_36783,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_36784__$1,v_36785__$1);


var G__36786 = seq__36765_36779;
var G__36787 = chunk__36766_36780;
var G__36788 = count__36767_36781;
var G__36789 = (i__36768_36782 + (1));
seq__36765_36779 = G__36786;
chunk__36766_36780 = G__36787;
count__36767_36781 = G__36788;
i__36768_36782 = G__36789;
continue;
} else {
var temp__5457__auto___36790 = cljs.core.seq.call(null,seq__36765_36779);
if(temp__5457__auto___36790){
var seq__36765_36791__$1 = temp__5457__auto___36790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36765_36791__$1)){
var c__4319__auto___36792 = cljs.core.chunk_first.call(null,seq__36765_36791__$1);
var G__36793 = cljs.core.chunk_rest.call(null,seq__36765_36791__$1);
var G__36794 = c__4319__auto___36792;
var G__36795 = cljs.core.count.call(null,c__4319__auto___36792);
var G__36796 = (0);
seq__36765_36779 = G__36793;
chunk__36766_36780 = G__36794;
count__36767_36781 = G__36795;
i__36768_36782 = G__36796;
continue;
} else {
var vec__36772_36797 = cljs.core.first.call(null,seq__36765_36791__$1);
var k_36798__$1 = cljs.core.nth.call(null,vec__36772_36797,(0),null);
var v_36799__$1 = cljs.core.nth.call(null,vec__36772_36797,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_36798__$1,v_36799__$1);


var G__36800 = cljs.core.next.call(null,seq__36765_36791__$1);
var G__36801 = null;
var G__36802 = (0);
var G__36803 = (0);
seq__36765_36779 = G__36800;
chunk__36766_36780 = G__36801;
count__36767_36781 = G__36802;
i__36768_36782 = G__36803;
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
dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq36758){
var G__36759 = cljs.core.first.call(null,seq36758);
var seq36758__$1 = cljs.core.next.call(null,seq36758);
var G__36760 = cljs.core.first.call(null,seq36758__$1);
var seq36758__$2 = cljs.core.next.call(null,seq36758__$1);
var G__36761 = cljs.core.first.call(null,seq36758__$2);
var seq36758__$3 = cljs.core.next.call(null,seq36758__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36759,G__36760,G__36761,seq36758__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__36808 = arguments.length;
switch (G__36808) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___36814 = arguments.length;
var i__4500__auto___36815 = (0);
while(true){
if((i__4500__auto___36815 < len__4499__auto___36814)){
args_arr__4514__auto__.push((arguments[i__4500__auto___36815]));

var G__36816 = (i__4500__auto___36815 + (1));
i__4500__auto___36815 = G__36816;
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
var k_36817__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_36817__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_36817__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__36809_36818 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__36810_36819 = null;
var count__36811_36820 = (0);
var i__36812_36821 = (0);
while(true){
if((i__36812_36821 < count__36811_36820)){
var k_36822__$1 = cljs.core._nth.call(null,chunk__36810_36819,i__36812_36821);
dommy.core.remove_attr_BANG_.call(null,elem,k_36822__$1);


var G__36823 = seq__36809_36818;
var G__36824 = chunk__36810_36819;
var G__36825 = count__36811_36820;
var G__36826 = (i__36812_36821 + (1));
seq__36809_36818 = G__36823;
chunk__36810_36819 = G__36824;
count__36811_36820 = G__36825;
i__36812_36821 = G__36826;
continue;
} else {
var temp__5457__auto___36827 = cljs.core.seq.call(null,seq__36809_36818);
if(temp__5457__auto___36827){
var seq__36809_36828__$1 = temp__5457__auto___36827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36809_36828__$1)){
var c__4319__auto___36829 = cljs.core.chunk_first.call(null,seq__36809_36828__$1);
var G__36830 = cljs.core.chunk_rest.call(null,seq__36809_36828__$1);
var G__36831 = c__4319__auto___36829;
var G__36832 = cljs.core.count.call(null,c__4319__auto___36829);
var G__36833 = (0);
seq__36809_36818 = G__36830;
chunk__36810_36819 = G__36831;
count__36811_36820 = G__36832;
i__36812_36821 = G__36833;
continue;
} else {
var k_36834__$1 = cljs.core.first.call(null,seq__36809_36828__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_36834__$1);


var G__36835 = cljs.core.next.call(null,seq__36809_36828__$1);
var G__36836 = null;
var G__36837 = (0);
var G__36838 = (0);
seq__36809_36818 = G__36835;
chunk__36810_36819 = G__36836;
count__36811_36820 = G__36837;
i__36812_36821 = G__36838;
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
dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq36805){
var G__36806 = cljs.core.first.call(null,seq36805);
var seq36805__$1 = cljs.core.next.call(null,seq36805);
var G__36807 = cljs.core.first.call(null,seq36805__$1);
var seq36805__$2 = cljs.core.next.call(null,seq36805__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36806,G__36807,seq36805__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__36840 = arguments.length;
switch (G__36840) {
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
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__36846 = arguments.length;
switch (G__36846) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___36860 = arguments.length;
var i__4500__auto___36861 = (0);
while(true){
if((i__4500__auto___36861 < len__4499__auto___36860)){
args_arr__4514__auto__.push((arguments[i__4500__auto___36861]));

var G__36862 = (i__4500__auto___36861 + (1));
i__4500__auto___36861 = G__36862;
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
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__5455__auto___36863 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___36863)){
var class_list_36864 = temp__5455__auto___36863;
var seq__36847_36865 = cljs.core.seq.call(null,classes__$1);
var chunk__36848_36866 = null;
var count__36849_36867 = (0);
var i__36850_36868 = (0);
while(true){
if((i__36850_36868 < count__36849_36867)){
var c_36869 = cljs.core._nth.call(null,chunk__36848_36866,i__36850_36868);
class_list_36864.add(c_36869);


var G__36870 = seq__36847_36865;
var G__36871 = chunk__36848_36866;
var G__36872 = count__36849_36867;
var G__36873 = (i__36850_36868 + (1));
seq__36847_36865 = G__36870;
chunk__36848_36866 = G__36871;
count__36849_36867 = G__36872;
i__36850_36868 = G__36873;
continue;
} else {
var temp__5457__auto___36874 = cljs.core.seq.call(null,seq__36847_36865);
if(temp__5457__auto___36874){
var seq__36847_36875__$1 = temp__5457__auto___36874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36847_36875__$1)){
var c__4319__auto___36876 = cljs.core.chunk_first.call(null,seq__36847_36875__$1);
var G__36877 = cljs.core.chunk_rest.call(null,seq__36847_36875__$1);
var G__36878 = c__4319__auto___36876;
var G__36879 = cljs.core.count.call(null,c__4319__auto___36876);
var G__36880 = (0);
seq__36847_36865 = G__36877;
chunk__36848_36866 = G__36878;
count__36849_36867 = G__36879;
i__36850_36868 = G__36880;
continue;
} else {
var c_36881 = cljs.core.first.call(null,seq__36847_36875__$1);
class_list_36864.add(c_36881);


var G__36882 = cljs.core.next.call(null,seq__36847_36875__$1);
var G__36883 = null;
var G__36884 = (0);
var G__36885 = (0);
seq__36847_36865 = G__36882;
chunk__36848_36866 = G__36883;
count__36849_36867 = G__36884;
i__36850_36868 = G__36885;
continue;
}
} else {
}
}
break;
}
} else {
var seq__36851_36886 = cljs.core.seq.call(null,classes__$1);
var chunk__36852_36887 = null;
var count__36853_36888 = (0);
var i__36854_36889 = (0);
while(true){
if((i__36854_36889 < count__36853_36888)){
var c_36890 = cljs.core._nth.call(null,chunk__36852_36887,i__36854_36889);
var class_name_36891 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_36891,c_36890))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_36891 === ""))?c_36890:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_36891)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_36890)].join('')));
}


var G__36892 = seq__36851_36886;
var G__36893 = chunk__36852_36887;
var G__36894 = count__36853_36888;
var G__36895 = (i__36854_36889 + (1));
seq__36851_36886 = G__36892;
chunk__36852_36887 = G__36893;
count__36853_36888 = G__36894;
i__36854_36889 = G__36895;
continue;
} else {
var temp__5457__auto___36896 = cljs.core.seq.call(null,seq__36851_36886);
if(temp__5457__auto___36896){
var seq__36851_36897__$1 = temp__5457__auto___36896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36851_36897__$1)){
var c__4319__auto___36898 = cljs.core.chunk_first.call(null,seq__36851_36897__$1);
var G__36899 = cljs.core.chunk_rest.call(null,seq__36851_36897__$1);
var G__36900 = c__4319__auto___36898;
var G__36901 = cljs.core.count.call(null,c__4319__auto___36898);
var G__36902 = (0);
seq__36851_36886 = G__36899;
chunk__36852_36887 = G__36900;
count__36853_36888 = G__36901;
i__36854_36889 = G__36902;
continue;
} else {
var c_36903 = cljs.core.first.call(null,seq__36851_36897__$1);
var class_name_36904 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_36904,c_36903))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_36904 === ""))?c_36903:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_36904)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_36903)].join('')));
}


var G__36905 = cljs.core.next.call(null,seq__36851_36897__$1);
var G__36906 = null;
var G__36907 = (0);
var G__36908 = (0);
seq__36851_36886 = G__36905;
chunk__36852_36887 = G__36906;
count__36853_36888 = G__36907;
i__36854_36889 = G__36908;
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
var seq__36855_36909 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__36856_36910 = null;
var count__36857_36911 = (0);
var i__36858_36912 = (0);
while(true){
if((i__36858_36912 < count__36857_36911)){
var c_36913 = cljs.core._nth.call(null,chunk__36856_36910,i__36858_36912);
dommy.core.add_class_BANG_.call(null,elem,c_36913);


var G__36914 = seq__36855_36909;
var G__36915 = chunk__36856_36910;
var G__36916 = count__36857_36911;
var G__36917 = (i__36858_36912 + (1));
seq__36855_36909 = G__36914;
chunk__36856_36910 = G__36915;
count__36857_36911 = G__36916;
i__36858_36912 = G__36917;
continue;
} else {
var temp__5457__auto___36918 = cljs.core.seq.call(null,seq__36855_36909);
if(temp__5457__auto___36918){
var seq__36855_36919__$1 = temp__5457__auto___36918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36855_36919__$1)){
var c__4319__auto___36920 = cljs.core.chunk_first.call(null,seq__36855_36919__$1);
var G__36921 = cljs.core.chunk_rest.call(null,seq__36855_36919__$1);
var G__36922 = c__4319__auto___36920;
var G__36923 = cljs.core.count.call(null,c__4319__auto___36920);
var G__36924 = (0);
seq__36855_36909 = G__36921;
chunk__36856_36910 = G__36922;
count__36857_36911 = G__36923;
i__36858_36912 = G__36924;
continue;
} else {
var c_36925 = cljs.core.first.call(null,seq__36855_36919__$1);
dommy.core.add_class_BANG_.call(null,elem,c_36925);


var G__36926 = cljs.core.next.call(null,seq__36855_36919__$1);
var G__36927 = null;
var G__36928 = (0);
var G__36929 = (0);
seq__36855_36909 = G__36926;
chunk__36856_36910 = G__36927;
count__36857_36911 = G__36928;
i__36858_36912 = G__36929;
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
dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq36843){
var G__36844 = cljs.core.first.call(null,seq36843);
var seq36843__$1 = cljs.core.next.call(null,seq36843);
var G__36845 = cljs.core.first.call(null,seq36843__$1);
var seq36843__$2 = cljs.core.next.call(null,seq36843__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36844,G__36845,seq36843__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__36934 = arguments.length;
switch (G__36934) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___36940 = arguments.length;
var i__4500__auto___36941 = (0);
while(true){
if((i__4500__auto___36941 < len__4499__auto___36940)){
args_arr__4514__auto__.push((arguments[i__4500__auto___36941]));

var G__36942 = (i__4500__auto___36941 + (1));
i__4500__auto___36941 = G__36942;
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
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5455__auto___36943 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___36943)){
var class_list_36944 = temp__5455__auto___36943;
class_list_36944.remove(c__$1);
} else {
var class_name_36945 = dommy.core.class$.call(null,elem);
var new_class_name_36946 = dommy.utils.remove_class_str.call(null,class_name_36945,c__$1);
if((class_name_36945 === new_class_name_36946)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_36946);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__36935 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__36936 = null;
var count__36937 = (0);
var i__36938 = (0);
while(true){
if((i__36938 < count__36937)){
var c = cljs.core._nth.call(null,chunk__36936,i__36938);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__36947 = seq__36935;
var G__36948 = chunk__36936;
var G__36949 = count__36937;
var G__36950 = (i__36938 + (1));
seq__36935 = G__36947;
chunk__36936 = G__36948;
count__36937 = G__36949;
i__36938 = G__36950;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36935);
if(temp__5457__auto__){
var seq__36935__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36935__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36935__$1);
var G__36951 = cljs.core.chunk_rest.call(null,seq__36935__$1);
var G__36952 = c__4319__auto__;
var G__36953 = cljs.core.count.call(null,c__4319__auto__);
var G__36954 = (0);
seq__36935 = G__36951;
chunk__36936 = G__36952;
count__36937 = G__36953;
i__36938 = G__36954;
continue;
} else {
var c = cljs.core.first.call(null,seq__36935__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__36955 = cljs.core.next.call(null,seq__36935__$1);
var G__36956 = null;
var G__36957 = (0);
var G__36958 = (0);
seq__36935 = G__36955;
chunk__36936 = G__36956;
count__36937 = G__36957;
i__36938 = G__36958;
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
dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq36931){
var G__36932 = cljs.core.first.call(null,seq36931);
var seq36931__$1 = cljs.core.next.call(null,seq36931);
var G__36933 = cljs.core.first.call(null,seq36931__$1);
var seq36931__$2 = cljs.core.next.call(null,seq36931__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36932,G__36933,seq36931__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__36960 = arguments.length;
switch (G__36960) {
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
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5455__auto___36962 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___36962)){
var class_list_36963 = temp__5455__auto___36962;
class_list_36963.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__36965 = arguments.length;
switch (G__36965) {
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
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__36968 = arguments.length;
switch (G__36968) {
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
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__36974 = arguments.length;
switch (G__36974) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___36981 = arguments.length;
var i__4500__auto___36982 = (0);
while(true){
if((i__4500__auto___36982 < len__4499__auto___36981)){
args_arr__4514__auto__.push((arguments[i__4500__auto___36982]));

var G__36983 = (i__4500__auto___36982 + (1));
i__4500__auto___36982 = G__36983;
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
var G__36975 = parent;
G__36975.appendChild(child);

return G__36975;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36976_36984 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__36977_36985 = null;
var count__36978_36986 = (0);
var i__36979_36987 = (0);
while(true){
if((i__36979_36987 < count__36978_36986)){
var c_36988 = cljs.core._nth.call(null,chunk__36977_36985,i__36979_36987);
dommy.core.append_BANG_.call(null,parent,c_36988);


var G__36989 = seq__36976_36984;
var G__36990 = chunk__36977_36985;
var G__36991 = count__36978_36986;
var G__36992 = (i__36979_36987 + (1));
seq__36976_36984 = G__36989;
chunk__36977_36985 = G__36990;
count__36978_36986 = G__36991;
i__36979_36987 = G__36992;
continue;
} else {
var temp__5457__auto___36993 = cljs.core.seq.call(null,seq__36976_36984);
if(temp__5457__auto___36993){
var seq__36976_36994__$1 = temp__5457__auto___36993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36976_36994__$1)){
var c__4319__auto___36995 = cljs.core.chunk_first.call(null,seq__36976_36994__$1);
var G__36996 = cljs.core.chunk_rest.call(null,seq__36976_36994__$1);
var G__36997 = c__4319__auto___36995;
var G__36998 = cljs.core.count.call(null,c__4319__auto___36995);
var G__36999 = (0);
seq__36976_36984 = G__36996;
chunk__36977_36985 = G__36997;
count__36978_36986 = G__36998;
i__36979_36987 = G__36999;
continue;
} else {
var c_37000 = cljs.core.first.call(null,seq__36976_36994__$1);
dommy.core.append_BANG_.call(null,parent,c_37000);


var G__37001 = cljs.core.next.call(null,seq__36976_36994__$1);
var G__37002 = null;
var G__37003 = (0);
var G__37004 = (0);
seq__36976_36984 = G__37001;
chunk__36977_36985 = G__37002;
count__36978_36986 = G__37003;
i__36979_36987 = G__37004;
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
dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq36971){
var G__36972 = cljs.core.first.call(null,seq36971);
var seq36971__$1 = cljs.core.next.call(null,seq36971);
var G__36973 = cljs.core.first.call(null,seq36971__$1);
var seq36971__$2 = cljs.core.next.call(null,seq36971__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36972,G__36973,seq36971__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__37009 = arguments.length;
switch (G__37009) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___37016 = arguments.length;
var i__4500__auto___37017 = (0);
while(true){
if((i__4500__auto___37017 < len__4499__auto___37016)){
args_arr__4514__auto__.push((arguments[i__4500__auto___37017]));

var G__37018 = (i__4500__auto___37017 + (1));
i__4500__auto___37017 = G__37018;
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
var G__37010 = parent;
G__37010.insertBefore(child,parent.firstChild);

return G__37010;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__37011_37019 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__37012_37020 = null;
var count__37013_37021 = (0);
var i__37014_37022 = (0);
while(true){
if((i__37014_37022 < count__37013_37021)){
var c_37023 = cljs.core._nth.call(null,chunk__37012_37020,i__37014_37022);
dommy.core.prepend_BANG_.call(null,parent,c_37023);


var G__37024 = seq__37011_37019;
var G__37025 = chunk__37012_37020;
var G__37026 = count__37013_37021;
var G__37027 = (i__37014_37022 + (1));
seq__37011_37019 = G__37024;
chunk__37012_37020 = G__37025;
count__37013_37021 = G__37026;
i__37014_37022 = G__37027;
continue;
} else {
var temp__5457__auto___37028 = cljs.core.seq.call(null,seq__37011_37019);
if(temp__5457__auto___37028){
var seq__37011_37029__$1 = temp__5457__auto___37028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37011_37029__$1)){
var c__4319__auto___37030 = cljs.core.chunk_first.call(null,seq__37011_37029__$1);
var G__37031 = cljs.core.chunk_rest.call(null,seq__37011_37029__$1);
var G__37032 = c__4319__auto___37030;
var G__37033 = cljs.core.count.call(null,c__4319__auto___37030);
var G__37034 = (0);
seq__37011_37019 = G__37031;
chunk__37012_37020 = G__37032;
count__37013_37021 = G__37033;
i__37014_37022 = G__37034;
continue;
} else {
var c_37035 = cljs.core.first.call(null,seq__37011_37029__$1);
dommy.core.prepend_BANG_.call(null,parent,c_37035);


var G__37036 = cljs.core.next.call(null,seq__37011_37029__$1);
var G__37037 = null;
var G__37038 = (0);
var G__37039 = (0);
seq__37011_37019 = G__37036;
chunk__37012_37020 = G__37037;
count__37013_37021 = G__37038;
i__37014_37022 = G__37039;
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
dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq37006){
var G__37007 = cljs.core.first.call(null,seq37006);
var seq37006__$1 = cljs.core.next.call(null,seq37006);
var G__37008 = cljs.core.first.call(null,seq37006__$1);
var seq37006__$2 = cljs.core.next.call(null,seq37006__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37007,G__37008,seq37006__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
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
var temp__5455__auto___37040 = other.nextSibling;
if(cljs.core.truth_(temp__5455__auto___37040)){
var next_37041 = temp__5455__auto___37040;
dommy.core.insert_before_BANG_.call(null,elem,next_37041);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
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
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__37043 = arguments.length;
switch (G__37043) {
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
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__37044 = p;
G__37044.removeChild(elem);

return G__37044;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__37046){
var vec__37047 = p__37046;
var special_mouse_event = cljs.core.nth.call(null,vec__37047,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__37047,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__37047,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__37047,special_mouse_event,real_mouse_event){
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
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__3911__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__37047,special_mouse_event,real_mouse_event))
});})(vec__37047,special_mouse_event,real_mouse_event))
])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__3911__auto__ = selected_target;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__3911__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
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
var len__4499__auto___37053 = arguments.length;
var i__4500__auto___37054 = (0);
while(true){
if((i__4500__auto___37054 < len__4499__auto___37053)){
args__4502__auto__.push((arguments[i__4500__auto___37054]));

var G__37055 = (i__4500__auto___37054 + (1));
i__4500__auto___37054 = G__37055;
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
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq37050){
var G__37051 = cljs.core.first.call(null,seq37050);
var seq37050__$1 = cljs.core.next.call(null,seq37050);
var G__37052 = cljs.core.first.call(null,seq37050__$1);
var seq37050__$2 = cljs.core.next.call(null,seq37050__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37051,G__37052,seq37050__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
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
var len__4499__auto___37095 = arguments.length;
var i__4500__auto___37096 = (0);
while(true){
if((i__4500__auto___37096 < len__4499__auto___37095)){
args__4502__auto__.push((arguments[i__4500__auto___37096]));

var G__37097 = (i__4500__auto___37096 + (1));
i__4500__auto___37096 = G__37097;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__37058_37098 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_37099 = cljs.core.nth.call(null,vec__37058_37098,(0),null);
var selector_37100 = cljs.core.nth.call(null,vec__37058_37098,(1),null);
var seq__37061_37101 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__37068_37102 = null;
var count__37069_37103 = (0);
var i__37070_37104 = (0);
while(true){
if((i__37070_37104 < count__37069_37103)){
var vec__37077_37105 = cljs.core._nth.call(null,chunk__37068_37102,i__37070_37104);
var orig_type_37106 = cljs.core.nth.call(null,vec__37077_37105,(0),null);
var f_37107 = cljs.core.nth.call(null,vec__37077_37105,(1),null);
var seq__37071_37108 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_37106,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37106,cljs.core.identity])));
var chunk__37073_37109 = null;
var count__37074_37110 = (0);
var i__37075_37111 = (0);
while(true){
if((i__37075_37111 < count__37074_37110)){
var vec__37080_37112 = cljs.core._nth.call(null,chunk__37073_37109,i__37075_37111);
var actual_type_37113 = cljs.core.nth.call(null,vec__37080_37112,(0),null);
var factory_37114 = cljs.core.nth.call(null,vec__37080_37112,(1),null);
var canonical_f_37115 = (cljs.core.truth_(selector_37100)?cljs.core.partial.call(null,dommy.core.live_listener,elem_37099,selector_37100):cljs.core.identity).call(null,factory_37114.call(null,f_37107));
dommy.core.update_event_listeners_BANG_.call(null,elem_37099,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37100,actual_type_37113,f_37107], null),canonical_f_37115);

if(cljs.core.truth_(elem_37099.addEventListener)){
elem_37099.addEventListener(cljs.core.name.call(null,actual_type_37113),canonical_f_37115);
} else {
elem_37099.attachEvent(cljs.core.name.call(null,actual_type_37113),canonical_f_37115);
}


var G__37116 = seq__37071_37108;
var G__37117 = chunk__37073_37109;
var G__37118 = count__37074_37110;
var G__37119 = (i__37075_37111 + (1));
seq__37071_37108 = G__37116;
chunk__37073_37109 = G__37117;
count__37074_37110 = G__37118;
i__37075_37111 = G__37119;
continue;
} else {
var temp__5457__auto___37120 = cljs.core.seq.call(null,seq__37071_37108);
if(temp__5457__auto___37120){
var seq__37071_37121__$1 = temp__5457__auto___37120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37071_37121__$1)){
var c__4319__auto___37122 = cljs.core.chunk_first.call(null,seq__37071_37121__$1);
var G__37123 = cljs.core.chunk_rest.call(null,seq__37071_37121__$1);
var G__37124 = c__4319__auto___37122;
var G__37125 = cljs.core.count.call(null,c__4319__auto___37122);
var G__37126 = (0);
seq__37071_37108 = G__37123;
chunk__37073_37109 = G__37124;
count__37074_37110 = G__37125;
i__37075_37111 = G__37126;
continue;
} else {
var vec__37083_37127 = cljs.core.first.call(null,seq__37071_37121__$1);
var actual_type_37128 = cljs.core.nth.call(null,vec__37083_37127,(0),null);
var factory_37129 = cljs.core.nth.call(null,vec__37083_37127,(1),null);
var canonical_f_37130 = (cljs.core.truth_(selector_37100)?cljs.core.partial.call(null,dommy.core.live_listener,elem_37099,selector_37100):cljs.core.identity).call(null,factory_37129.call(null,f_37107));
dommy.core.update_event_listeners_BANG_.call(null,elem_37099,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37100,actual_type_37128,f_37107], null),canonical_f_37130);

if(cljs.core.truth_(elem_37099.addEventListener)){
elem_37099.addEventListener(cljs.core.name.call(null,actual_type_37128),canonical_f_37130);
} else {
elem_37099.attachEvent(cljs.core.name.call(null,actual_type_37128),canonical_f_37130);
}


var G__37131 = cljs.core.next.call(null,seq__37071_37121__$1);
var G__37132 = null;
var G__37133 = (0);
var G__37134 = (0);
seq__37071_37108 = G__37131;
chunk__37073_37109 = G__37132;
count__37074_37110 = G__37133;
i__37075_37111 = G__37134;
continue;
}
} else {
}
}
break;
}

var G__37135 = seq__37061_37101;
var G__37136 = chunk__37068_37102;
var G__37137 = count__37069_37103;
var G__37138 = (i__37070_37104 + (1));
seq__37061_37101 = G__37135;
chunk__37068_37102 = G__37136;
count__37069_37103 = G__37137;
i__37070_37104 = G__37138;
continue;
} else {
var temp__5457__auto___37139 = cljs.core.seq.call(null,seq__37061_37101);
if(temp__5457__auto___37139){
var seq__37061_37140__$1 = temp__5457__auto___37139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37061_37140__$1)){
var c__4319__auto___37141 = cljs.core.chunk_first.call(null,seq__37061_37140__$1);
var G__37142 = cljs.core.chunk_rest.call(null,seq__37061_37140__$1);
var G__37143 = c__4319__auto___37141;
var G__37144 = cljs.core.count.call(null,c__4319__auto___37141);
var G__37145 = (0);
seq__37061_37101 = G__37142;
chunk__37068_37102 = G__37143;
count__37069_37103 = G__37144;
i__37070_37104 = G__37145;
continue;
} else {
var vec__37086_37146 = cljs.core.first.call(null,seq__37061_37140__$1);
var orig_type_37147 = cljs.core.nth.call(null,vec__37086_37146,(0),null);
var f_37148 = cljs.core.nth.call(null,vec__37086_37146,(1),null);
var seq__37062_37149 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_37147,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37147,cljs.core.identity])));
var chunk__37064_37150 = null;
var count__37065_37151 = (0);
var i__37066_37152 = (0);
while(true){
if((i__37066_37152 < count__37065_37151)){
var vec__37089_37153 = cljs.core._nth.call(null,chunk__37064_37150,i__37066_37152);
var actual_type_37154 = cljs.core.nth.call(null,vec__37089_37153,(0),null);
var factory_37155 = cljs.core.nth.call(null,vec__37089_37153,(1),null);
var canonical_f_37156 = (cljs.core.truth_(selector_37100)?cljs.core.partial.call(null,dommy.core.live_listener,elem_37099,selector_37100):cljs.core.identity).call(null,factory_37155.call(null,f_37148));
dommy.core.update_event_listeners_BANG_.call(null,elem_37099,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37100,actual_type_37154,f_37148], null),canonical_f_37156);

if(cljs.core.truth_(elem_37099.addEventListener)){
elem_37099.addEventListener(cljs.core.name.call(null,actual_type_37154),canonical_f_37156);
} else {
elem_37099.attachEvent(cljs.core.name.call(null,actual_type_37154),canonical_f_37156);
}


var G__37157 = seq__37062_37149;
var G__37158 = chunk__37064_37150;
var G__37159 = count__37065_37151;
var G__37160 = (i__37066_37152 + (1));
seq__37062_37149 = G__37157;
chunk__37064_37150 = G__37158;
count__37065_37151 = G__37159;
i__37066_37152 = G__37160;
continue;
} else {
var temp__5457__auto___37161__$1 = cljs.core.seq.call(null,seq__37062_37149);
if(temp__5457__auto___37161__$1){
var seq__37062_37162__$1 = temp__5457__auto___37161__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37062_37162__$1)){
var c__4319__auto___37163 = cljs.core.chunk_first.call(null,seq__37062_37162__$1);
var G__37164 = cljs.core.chunk_rest.call(null,seq__37062_37162__$1);
var G__37165 = c__4319__auto___37163;
var G__37166 = cljs.core.count.call(null,c__4319__auto___37163);
var G__37167 = (0);
seq__37062_37149 = G__37164;
chunk__37064_37150 = G__37165;
count__37065_37151 = G__37166;
i__37066_37152 = G__37167;
continue;
} else {
var vec__37092_37168 = cljs.core.first.call(null,seq__37062_37162__$1);
var actual_type_37169 = cljs.core.nth.call(null,vec__37092_37168,(0),null);
var factory_37170 = cljs.core.nth.call(null,vec__37092_37168,(1),null);
var canonical_f_37171 = (cljs.core.truth_(selector_37100)?cljs.core.partial.call(null,dommy.core.live_listener,elem_37099,selector_37100):cljs.core.identity).call(null,factory_37170.call(null,f_37148));
dommy.core.update_event_listeners_BANG_.call(null,elem_37099,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37100,actual_type_37169,f_37148], null),canonical_f_37171);

if(cljs.core.truth_(elem_37099.addEventListener)){
elem_37099.addEventListener(cljs.core.name.call(null,actual_type_37169),canonical_f_37171);
} else {
elem_37099.attachEvent(cljs.core.name.call(null,actual_type_37169),canonical_f_37171);
}


var G__37172 = cljs.core.next.call(null,seq__37062_37162__$1);
var G__37173 = null;
var G__37174 = (0);
var G__37175 = (0);
seq__37062_37149 = G__37172;
chunk__37064_37150 = G__37173;
count__37065_37151 = G__37174;
i__37066_37152 = G__37175;
continue;
}
} else {
}
}
break;
}

var G__37176 = cljs.core.next.call(null,seq__37061_37140__$1);
var G__37177 = null;
var G__37178 = (0);
var G__37179 = (0);
seq__37061_37101 = G__37176;
chunk__37068_37102 = G__37177;
count__37069_37103 = G__37178;
i__37070_37104 = G__37179;
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
dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq37056){
var G__37057 = cljs.core.first.call(null,seq37056);
var seq37056__$1 = cljs.core.next.call(null,seq37056);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37057,seq37056__$1);
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
var len__4499__auto___37219 = arguments.length;
var i__4500__auto___37220 = (0);
while(true){
if((i__4500__auto___37220 < len__4499__auto___37219)){
args__4502__auto__.push((arguments[i__4500__auto___37220]));

var G__37221 = (i__4500__auto___37220 + (1));
i__4500__auto___37220 = G__37221;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__37182_37222 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_37223 = cljs.core.nth.call(null,vec__37182_37222,(0),null);
var selector_37224 = cljs.core.nth.call(null,vec__37182_37222,(1),null);
var seq__37185_37225 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__37192_37226 = null;
var count__37193_37227 = (0);
var i__37194_37228 = (0);
while(true){
if((i__37194_37228 < count__37193_37227)){
var vec__37201_37229 = cljs.core._nth.call(null,chunk__37192_37226,i__37194_37228);
var orig_type_37230 = cljs.core.nth.call(null,vec__37201_37229,(0),null);
var f_37231 = cljs.core.nth.call(null,vec__37201_37229,(1),null);
var seq__37195_37232 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_37230,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37230,cljs.core.identity])));
var chunk__37197_37233 = null;
var count__37198_37234 = (0);
var i__37199_37235 = (0);
while(true){
if((i__37199_37235 < count__37198_37234)){
var vec__37204_37236 = cljs.core._nth.call(null,chunk__37197_37233,i__37199_37235);
var actual_type_37237 = cljs.core.nth.call(null,vec__37204_37236,(0),null);
var __37238 = cljs.core.nth.call(null,vec__37204_37236,(1),null);
var keys_37239 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37224,actual_type_37237,f_37231], null);
var canonical_f_37240 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_37223),keys_37239);
dommy.core.update_event_listeners_BANG_.call(null,elem_37223,dommy.utils.dissoc_in,keys_37239);

if(cljs.core.truth_(elem_37223.removeEventListener)){
elem_37223.removeEventListener(cljs.core.name.call(null,actual_type_37237),canonical_f_37240);
} else {
elem_37223.detachEvent(cljs.core.name.call(null,actual_type_37237),canonical_f_37240);
}


var G__37241 = seq__37195_37232;
var G__37242 = chunk__37197_37233;
var G__37243 = count__37198_37234;
var G__37244 = (i__37199_37235 + (1));
seq__37195_37232 = G__37241;
chunk__37197_37233 = G__37242;
count__37198_37234 = G__37243;
i__37199_37235 = G__37244;
continue;
} else {
var temp__5457__auto___37245 = cljs.core.seq.call(null,seq__37195_37232);
if(temp__5457__auto___37245){
var seq__37195_37246__$1 = temp__5457__auto___37245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37195_37246__$1)){
var c__4319__auto___37247 = cljs.core.chunk_first.call(null,seq__37195_37246__$1);
var G__37248 = cljs.core.chunk_rest.call(null,seq__37195_37246__$1);
var G__37249 = c__4319__auto___37247;
var G__37250 = cljs.core.count.call(null,c__4319__auto___37247);
var G__37251 = (0);
seq__37195_37232 = G__37248;
chunk__37197_37233 = G__37249;
count__37198_37234 = G__37250;
i__37199_37235 = G__37251;
continue;
} else {
var vec__37207_37252 = cljs.core.first.call(null,seq__37195_37246__$1);
var actual_type_37253 = cljs.core.nth.call(null,vec__37207_37252,(0),null);
var __37254 = cljs.core.nth.call(null,vec__37207_37252,(1),null);
var keys_37255 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37224,actual_type_37253,f_37231], null);
var canonical_f_37256 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_37223),keys_37255);
dommy.core.update_event_listeners_BANG_.call(null,elem_37223,dommy.utils.dissoc_in,keys_37255);

if(cljs.core.truth_(elem_37223.removeEventListener)){
elem_37223.removeEventListener(cljs.core.name.call(null,actual_type_37253),canonical_f_37256);
} else {
elem_37223.detachEvent(cljs.core.name.call(null,actual_type_37253),canonical_f_37256);
}


var G__37257 = cljs.core.next.call(null,seq__37195_37246__$1);
var G__37258 = null;
var G__37259 = (0);
var G__37260 = (0);
seq__37195_37232 = G__37257;
chunk__37197_37233 = G__37258;
count__37198_37234 = G__37259;
i__37199_37235 = G__37260;
continue;
}
} else {
}
}
break;
}

var G__37261 = seq__37185_37225;
var G__37262 = chunk__37192_37226;
var G__37263 = count__37193_37227;
var G__37264 = (i__37194_37228 + (1));
seq__37185_37225 = G__37261;
chunk__37192_37226 = G__37262;
count__37193_37227 = G__37263;
i__37194_37228 = G__37264;
continue;
} else {
var temp__5457__auto___37265 = cljs.core.seq.call(null,seq__37185_37225);
if(temp__5457__auto___37265){
var seq__37185_37266__$1 = temp__5457__auto___37265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37185_37266__$1)){
var c__4319__auto___37267 = cljs.core.chunk_first.call(null,seq__37185_37266__$1);
var G__37268 = cljs.core.chunk_rest.call(null,seq__37185_37266__$1);
var G__37269 = c__4319__auto___37267;
var G__37270 = cljs.core.count.call(null,c__4319__auto___37267);
var G__37271 = (0);
seq__37185_37225 = G__37268;
chunk__37192_37226 = G__37269;
count__37193_37227 = G__37270;
i__37194_37228 = G__37271;
continue;
} else {
var vec__37210_37272 = cljs.core.first.call(null,seq__37185_37266__$1);
var orig_type_37273 = cljs.core.nth.call(null,vec__37210_37272,(0),null);
var f_37274 = cljs.core.nth.call(null,vec__37210_37272,(1),null);
var seq__37186_37275 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_37273,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37273,cljs.core.identity])));
var chunk__37188_37276 = null;
var count__37189_37277 = (0);
var i__37190_37278 = (0);
while(true){
if((i__37190_37278 < count__37189_37277)){
var vec__37213_37279 = cljs.core._nth.call(null,chunk__37188_37276,i__37190_37278);
var actual_type_37280 = cljs.core.nth.call(null,vec__37213_37279,(0),null);
var __37281 = cljs.core.nth.call(null,vec__37213_37279,(1),null);
var keys_37282 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37224,actual_type_37280,f_37274], null);
var canonical_f_37283 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_37223),keys_37282);
dommy.core.update_event_listeners_BANG_.call(null,elem_37223,dommy.utils.dissoc_in,keys_37282);

if(cljs.core.truth_(elem_37223.removeEventListener)){
elem_37223.removeEventListener(cljs.core.name.call(null,actual_type_37280),canonical_f_37283);
} else {
elem_37223.detachEvent(cljs.core.name.call(null,actual_type_37280),canonical_f_37283);
}


var G__37284 = seq__37186_37275;
var G__37285 = chunk__37188_37276;
var G__37286 = count__37189_37277;
var G__37287 = (i__37190_37278 + (1));
seq__37186_37275 = G__37284;
chunk__37188_37276 = G__37285;
count__37189_37277 = G__37286;
i__37190_37278 = G__37287;
continue;
} else {
var temp__5457__auto___37288__$1 = cljs.core.seq.call(null,seq__37186_37275);
if(temp__5457__auto___37288__$1){
var seq__37186_37289__$1 = temp__5457__auto___37288__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37186_37289__$1)){
var c__4319__auto___37290 = cljs.core.chunk_first.call(null,seq__37186_37289__$1);
var G__37291 = cljs.core.chunk_rest.call(null,seq__37186_37289__$1);
var G__37292 = c__4319__auto___37290;
var G__37293 = cljs.core.count.call(null,c__4319__auto___37290);
var G__37294 = (0);
seq__37186_37275 = G__37291;
chunk__37188_37276 = G__37292;
count__37189_37277 = G__37293;
i__37190_37278 = G__37294;
continue;
} else {
var vec__37216_37295 = cljs.core.first.call(null,seq__37186_37289__$1);
var actual_type_37296 = cljs.core.nth.call(null,vec__37216_37295,(0),null);
var __37297 = cljs.core.nth.call(null,vec__37216_37295,(1),null);
var keys_37298 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37224,actual_type_37296,f_37274], null);
var canonical_f_37299 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_37223),keys_37298);
dommy.core.update_event_listeners_BANG_.call(null,elem_37223,dommy.utils.dissoc_in,keys_37298);

if(cljs.core.truth_(elem_37223.removeEventListener)){
elem_37223.removeEventListener(cljs.core.name.call(null,actual_type_37296),canonical_f_37299);
} else {
elem_37223.detachEvent(cljs.core.name.call(null,actual_type_37296),canonical_f_37299);
}


var G__37300 = cljs.core.next.call(null,seq__37186_37289__$1);
var G__37301 = null;
var G__37302 = (0);
var G__37303 = (0);
seq__37186_37275 = G__37300;
chunk__37188_37276 = G__37301;
count__37189_37277 = G__37302;
i__37190_37278 = G__37303;
continue;
}
} else {
}
}
break;
}

var G__37304 = cljs.core.next.call(null,seq__37185_37266__$1);
var G__37305 = null;
var G__37306 = (0);
var G__37307 = (0);
seq__37185_37225 = G__37304;
chunk__37192_37226 = G__37305;
count__37193_37227 = G__37306;
i__37194_37228 = G__37307;
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
dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq37180){
var G__37181 = cljs.core.first.call(null,seq37180);
var seq37180__$1 = cljs.core.next.call(null,seq37180);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37181,seq37180__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37323 = arguments.length;
var i__4500__auto___37324 = (0);
while(true){
if((i__4500__auto___37324 < len__4499__auto___37323)){
args__4502__auto__.push((arguments[i__4500__auto___37324]));

var G__37325 = (i__4500__auto___37324 + (1));
i__4500__auto___37324 = G__37325;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__37310_37326 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_37327 = cljs.core.nth.call(null,vec__37310_37326,(0),null);
var selector_37328 = cljs.core.nth.call(null,vec__37310_37326,(1),null);
var seq__37313_37329 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__37314_37330 = null;
var count__37315_37331 = (0);
var i__37316_37332 = (0);
while(true){
if((i__37316_37332 < count__37315_37331)){
var vec__37317_37333 = cljs.core._nth.call(null,chunk__37314_37330,i__37316_37332);
var type_37334 = cljs.core.nth.call(null,vec__37317_37333,(0),null);
var f_37335 = cljs.core.nth.call(null,vec__37317_37333,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_37334,((function (seq__37313_37329,chunk__37314_37330,count__37315_37331,i__37316_37332,vec__37317_37333,type_37334,f_37335,vec__37310_37326,elem_37327,selector_37328){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_37334,dommy$core$this_fn);

return f_37335.call(null,e);
});})(seq__37313_37329,chunk__37314_37330,count__37315_37331,i__37316_37332,vec__37317_37333,type_37334,f_37335,vec__37310_37326,elem_37327,selector_37328))
);


var G__37336 = seq__37313_37329;
var G__37337 = chunk__37314_37330;
var G__37338 = count__37315_37331;
var G__37339 = (i__37316_37332 + (1));
seq__37313_37329 = G__37336;
chunk__37314_37330 = G__37337;
count__37315_37331 = G__37338;
i__37316_37332 = G__37339;
continue;
} else {
var temp__5457__auto___37340 = cljs.core.seq.call(null,seq__37313_37329);
if(temp__5457__auto___37340){
var seq__37313_37341__$1 = temp__5457__auto___37340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37313_37341__$1)){
var c__4319__auto___37342 = cljs.core.chunk_first.call(null,seq__37313_37341__$1);
var G__37343 = cljs.core.chunk_rest.call(null,seq__37313_37341__$1);
var G__37344 = c__4319__auto___37342;
var G__37345 = cljs.core.count.call(null,c__4319__auto___37342);
var G__37346 = (0);
seq__37313_37329 = G__37343;
chunk__37314_37330 = G__37344;
count__37315_37331 = G__37345;
i__37316_37332 = G__37346;
continue;
} else {
var vec__37320_37347 = cljs.core.first.call(null,seq__37313_37341__$1);
var type_37348 = cljs.core.nth.call(null,vec__37320_37347,(0),null);
var f_37349 = cljs.core.nth.call(null,vec__37320_37347,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_37348,((function (seq__37313_37329,chunk__37314_37330,count__37315_37331,i__37316_37332,vec__37320_37347,type_37348,f_37349,seq__37313_37341__$1,temp__5457__auto___37340,vec__37310_37326,elem_37327,selector_37328){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_37348,dommy$core$this_fn);

return f_37349.call(null,e);
});})(seq__37313_37329,chunk__37314_37330,count__37315_37331,i__37316_37332,vec__37320_37347,type_37348,f_37349,seq__37313_37341__$1,temp__5457__auto___37340,vec__37310_37326,elem_37327,selector_37328))
);


var G__37350 = cljs.core.next.call(null,seq__37313_37341__$1);
var G__37351 = null;
var G__37352 = (0);
var G__37353 = (0);
seq__37313_37329 = G__37350;
chunk__37314_37330 = G__37351;
count__37315_37331 = G__37352;
i__37316_37332 = G__37353;
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
dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq37308){
var G__37309 = cljs.core.first.call(null,seq37308);
var seq37308__$1 = cljs.core.next.call(null,seq37308);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37309,seq37308__$1);
});

