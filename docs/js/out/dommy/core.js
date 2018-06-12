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
var G__37726 = arguments.length;
switch (G__37726) {
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
var G__37729 = arguments.length;
switch (G__37729) {
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
var G__37733 = arguments.length;
switch (G__37733) {
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
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__37731_SHARP_){
return !((p1__37731_SHARP_ === base));
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
var len__4499__auto___37747 = arguments.length;
var i__4500__auto___37748 = (0);
while(true){
if((i__4500__auto___37748 < len__4499__auto___37747)){
args__4502__auto__.push((arguments[i__4500__auto___37748]));

var G__37749 = (i__4500__auto___37748 + (1));
i__4500__auto___37748 = G__37749;
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
var seq__37737_37750 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__37738_37751 = null;
var count__37739_37752 = (0);
var i__37740_37753 = (0);
while(true){
if((i__37740_37753 < count__37739_37752)){
var vec__37741_37754 = cljs.core._nth.call(null,chunk__37738_37751,i__37740_37753);
var k_37755 = cljs.core.nth.call(null,vec__37741_37754,(0),null);
var v_37756 = cljs.core.nth.call(null,vec__37741_37754,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_37755),v_37756);


var G__37757 = seq__37737_37750;
var G__37758 = chunk__37738_37751;
var G__37759 = count__37739_37752;
var G__37760 = (i__37740_37753 + (1));
seq__37737_37750 = G__37757;
chunk__37738_37751 = G__37758;
count__37739_37752 = G__37759;
i__37740_37753 = G__37760;
continue;
} else {
var temp__5457__auto___37761 = cljs.core.seq.call(null,seq__37737_37750);
if(temp__5457__auto___37761){
var seq__37737_37762__$1 = temp__5457__auto___37761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37737_37762__$1)){
var c__4319__auto___37763 = cljs.core.chunk_first.call(null,seq__37737_37762__$1);
var G__37764 = cljs.core.chunk_rest.call(null,seq__37737_37762__$1);
var G__37765 = c__4319__auto___37763;
var G__37766 = cljs.core.count.call(null,c__4319__auto___37763);
var G__37767 = (0);
seq__37737_37750 = G__37764;
chunk__37738_37751 = G__37765;
count__37739_37752 = G__37766;
i__37740_37753 = G__37767;
continue;
} else {
var vec__37744_37768 = cljs.core.first.call(null,seq__37737_37762__$1);
var k_37769 = cljs.core.nth.call(null,vec__37744_37768,(0),null);
var v_37770 = cljs.core.nth.call(null,vec__37744_37768,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_37769),v_37770);


var G__37771 = cljs.core.next.call(null,seq__37737_37762__$1);
var G__37772 = null;
var G__37773 = (0);
var G__37774 = (0);
seq__37737_37750 = G__37771;
chunk__37738_37751 = G__37772;
count__37739_37752 = G__37773;
i__37740_37753 = G__37774;
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
dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq37735){
var G__37736 = cljs.core.first.call(null,seq37735);
var seq37735__$1 = cljs.core.next.call(null,seq37735);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37736,seq37735__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37781 = arguments.length;
var i__4500__auto___37782 = (0);
while(true){
if((i__4500__auto___37782 < len__4499__auto___37781)){
args__4502__auto__.push((arguments[i__4500__auto___37782]));

var G__37783 = (i__4500__auto___37782 + (1));
i__4500__auto___37782 = G__37783;
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
var seq__37777_37784 = cljs.core.seq.call(null,keywords);
var chunk__37778_37785 = null;
var count__37779_37786 = (0);
var i__37780_37787 = (0);
while(true){
if((i__37780_37787 < count__37779_37786)){
var kw_37788 = cljs.core._nth.call(null,chunk__37778_37785,i__37780_37787);
style.removeProperty(dommy.utils.as_str.call(null,kw_37788));


var G__37789 = seq__37777_37784;
var G__37790 = chunk__37778_37785;
var G__37791 = count__37779_37786;
var G__37792 = (i__37780_37787 + (1));
seq__37777_37784 = G__37789;
chunk__37778_37785 = G__37790;
count__37779_37786 = G__37791;
i__37780_37787 = G__37792;
continue;
} else {
var temp__5457__auto___37793 = cljs.core.seq.call(null,seq__37777_37784);
if(temp__5457__auto___37793){
var seq__37777_37794__$1 = temp__5457__auto___37793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37777_37794__$1)){
var c__4319__auto___37795 = cljs.core.chunk_first.call(null,seq__37777_37794__$1);
var G__37796 = cljs.core.chunk_rest.call(null,seq__37777_37794__$1);
var G__37797 = c__4319__auto___37795;
var G__37798 = cljs.core.count.call(null,c__4319__auto___37795);
var G__37799 = (0);
seq__37777_37784 = G__37796;
chunk__37778_37785 = G__37797;
count__37779_37786 = G__37798;
i__37780_37787 = G__37799;
continue;
} else {
var kw_37800 = cljs.core.first.call(null,seq__37777_37794__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_37800));


var G__37801 = cljs.core.next.call(null,seq__37777_37794__$1);
var G__37802 = null;
var G__37803 = (0);
var G__37804 = (0);
seq__37777_37784 = G__37801;
chunk__37778_37785 = G__37802;
count__37779_37786 = G__37803;
i__37780_37787 = G__37804;
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
dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq37775){
var G__37776 = cljs.core.first.call(null,seq37775);
var seq37775__$1 = cljs.core.next.call(null,seq37775);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37776,seq37775__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37817 = arguments.length;
var i__4500__auto___37818 = (0);
while(true){
if((i__4500__auto___37818 < len__4499__auto___37817)){
args__4502__auto__.push((arguments[i__4500__auto___37818]));

var G__37819 = (i__4500__auto___37818 + (1));
i__4500__auto___37818 = G__37819;
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

var seq__37807_37820 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__37808_37821 = null;
var count__37809_37822 = (0);
var i__37810_37823 = (0);
while(true){
if((i__37810_37823 < count__37809_37822)){
var vec__37811_37824 = cljs.core._nth.call(null,chunk__37808_37821,i__37810_37823);
var k_37825 = cljs.core.nth.call(null,vec__37811_37824,(0),null);
var v_37826 = cljs.core.nth.call(null,vec__37811_37824,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_37825,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37826),"px"].join(''));


var G__37827 = seq__37807_37820;
var G__37828 = chunk__37808_37821;
var G__37829 = count__37809_37822;
var G__37830 = (i__37810_37823 + (1));
seq__37807_37820 = G__37827;
chunk__37808_37821 = G__37828;
count__37809_37822 = G__37829;
i__37810_37823 = G__37830;
continue;
} else {
var temp__5457__auto___37831 = cljs.core.seq.call(null,seq__37807_37820);
if(temp__5457__auto___37831){
var seq__37807_37832__$1 = temp__5457__auto___37831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37807_37832__$1)){
var c__4319__auto___37833 = cljs.core.chunk_first.call(null,seq__37807_37832__$1);
var G__37834 = cljs.core.chunk_rest.call(null,seq__37807_37832__$1);
var G__37835 = c__4319__auto___37833;
var G__37836 = cljs.core.count.call(null,c__4319__auto___37833);
var G__37837 = (0);
seq__37807_37820 = G__37834;
chunk__37808_37821 = G__37835;
count__37809_37822 = G__37836;
i__37810_37823 = G__37837;
continue;
} else {
var vec__37814_37838 = cljs.core.first.call(null,seq__37807_37832__$1);
var k_37839 = cljs.core.nth.call(null,vec__37814_37838,(0),null);
var v_37840 = cljs.core.nth.call(null,vec__37814_37838,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_37839,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37840),"px"].join(''));


var G__37841 = cljs.core.next.call(null,seq__37807_37832__$1);
var G__37842 = null;
var G__37843 = (0);
var G__37844 = (0);
seq__37807_37820 = G__37841;
chunk__37808_37821 = G__37842;
count__37809_37822 = G__37843;
i__37810_37823 = G__37844;
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
dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq37805){
var G__37806 = cljs.core.first.call(null,seq37805);
var seq37805__$1 = cljs.core.next.call(null,seq37805);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37806,seq37805__$1);
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
var G__37850 = arguments.length;
switch (G__37850) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___37864 = arguments.length;
var i__4500__auto___37865 = (0);
while(true){
if((i__4500__auto___37865 < len__4499__auto___37864)){
args_arr__4514__auto__.push((arguments[i__4500__auto___37865]));

var G__37866 = (i__4500__auto___37865 + (1));
i__4500__auto___37865 = G__37866;
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
var G__37851 = elem;
(G__37851[k__$1] = v);

return G__37851;
} else {
var G__37852 = elem;
G__37852.setAttribute(k__$1,v);

return G__37852;
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

var seq__37853_37867 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__37854_37868 = null;
var count__37855_37869 = (0);
var i__37856_37870 = (0);
while(true){
if((i__37856_37870 < count__37855_37869)){
var vec__37857_37871 = cljs.core._nth.call(null,chunk__37854_37868,i__37856_37870);
var k_37872__$1 = cljs.core.nth.call(null,vec__37857_37871,(0),null);
var v_37873__$1 = cljs.core.nth.call(null,vec__37857_37871,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_37872__$1,v_37873__$1);


var G__37874 = seq__37853_37867;
var G__37875 = chunk__37854_37868;
var G__37876 = count__37855_37869;
var G__37877 = (i__37856_37870 + (1));
seq__37853_37867 = G__37874;
chunk__37854_37868 = G__37875;
count__37855_37869 = G__37876;
i__37856_37870 = G__37877;
continue;
} else {
var temp__5457__auto___37878 = cljs.core.seq.call(null,seq__37853_37867);
if(temp__5457__auto___37878){
var seq__37853_37879__$1 = temp__5457__auto___37878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37853_37879__$1)){
var c__4319__auto___37880 = cljs.core.chunk_first.call(null,seq__37853_37879__$1);
var G__37881 = cljs.core.chunk_rest.call(null,seq__37853_37879__$1);
var G__37882 = c__4319__auto___37880;
var G__37883 = cljs.core.count.call(null,c__4319__auto___37880);
var G__37884 = (0);
seq__37853_37867 = G__37881;
chunk__37854_37868 = G__37882;
count__37855_37869 = G__37883;
i__37856_37870 = G__37884;
continue;
} else {
var vec__37860_37885 = cljs.core.first.call(null,seq__37853_37879__$1);
var k_37886__$1 = cljs.core.nth.call(null,vec__37860_37885,(0),null);
var v_37887__$1 = cljs.core.nth.call(null,vec__37860_37885,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_37886__$1,v_37887__$1);


var G__37888 = cljs.core.next.call(null,seq__37853_37879__$1);
var G__37889 = null;
var G__37890 = (0);
var G__37891 = (0);
seq__37853_37867 = G__37888;
chunk__37854_37868 = G__37889;
count__37855_37869 = G__37890;
i__37856_37870 = G__37891;
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
dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq37846){
var G__37847 = cljs.core.first.call(null,seq37846);
var seq37846__$1 = cljs.core.next.call(null,seq37846);
var G__37848 = cljs.core.first.call(null,seq37846__$1);
var seq37846__$2 = cljs.core.next.call(null,seq37846__$1);
var G__37849 = cljs.core.first.call(null,seq37846__$2);
var seq37846__$3 = cljs.core.next.call(null,seq37846__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37847,G__37848,G__37849,seq37846__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__37896 = arguments.length;
switch (G__37896) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___37902 = arguments.length;
var i__4500__auto___37903 = (0);
while(true){
if((i__4500__auto___37903 < len__4499__auto___37902)){
args_arr__4514__auto__.push((arguments[i__4500__auto___37903]));

var G__37904 = (i__4500__auto___37903 + (1));
i__4500__auto___37903 = G__37904;
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
var k_37905__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_37905__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_37905__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__37897_37906 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__37898_37907 = null;
var count__37899_37908 = (0);
var i__37900_37909 = (0);
while(true){
if((i__37900_37909 < count__37899_37908)){
var k_37910__$1 = cljs.core._nth.call(null,chunk__37898_37907,i__37900_37909);
dommy.core.remove_attr_BANG_.call(null,elem,k_37910__$1);


var G__37911 = seq__37897_37906;
var G__37912 = chunk__37898_37907;
var G__37913 = count__37899_37908;
var G__37914 = (i__37900_37909 + (1));
seq__37897_37906 = G__37911;
chunk__37898_37907 = G__37912;
count__37899_37908 = G__37913;
i__37900_37909 = G__37914;
continue;
} else {
var temp__5457__auto___37915 = cljs.core.seq.call(null,seq__37897_37906);
if(temp__5457__auto___37915){
var seq__37897_37916__$1 = temp__5457__auto___37915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37897_37916__$1)){
var c__4319__auto___37917 = cljs.core.chunk_first.call(null,seq__37897_37916__$1);
var G__37918 = cljs.core.chunk_rest.call(null,seq__37897_37916__$1);
var G__37919 = c__4319__auto___37917;
var G__37920 = cljs.core.count.call(null,c__4319__auto___37917);
var G__37921 = (0);
seq__37897_37906 = G__37918;
chunk__37898_37907 = G__37919;
count__37899_37908 = G__37920;
i__37900_37909 = G__37921;
continue;
} else {
var k_37922__$1 = cljs.core.first.call(null,seq__37897_37916__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_37922__$1);


var G__37923 = cljs.core.next.call(null,seq__37897_37916__$1);
var G__37924 = null;
var G__37925 = (0);
var G__37926 = (0);
seq__37897_37906 = G__37923;
chunk__37898_37907 = G__37924;
count__37899_37908 = G__37925;
i__37900_37909 = G__37926;
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
dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq37893){
var G__37894 = cljs.core.first.call(null,seq37893);
var seq37893__$1 = cljs.core.next.call(null,seq37893);
var G__37895 = cljs.core.first.call(null,seq37893__$1);
var seq37893__$2 = cljs.core.next.call(null,seq37893__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37894,G__37895,seq37893__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__37928 = arguments.length;
switch (G__37928) {
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
var G__37934 = arguments.length;
switch (G__37934) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___37948 = arguments.length;
var i__4500__auto___37949 = (0);
while(true){
if((i__4500__auto___37949 < len__4499__auto___37948)){
args_arr__4514__auto__.push((arguments[i__4500__auto___37949]));

var G__37950 = (i__4500__auto___37949 + (1));
i__4500__auto___37949 = G__37950;
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
var temp__5455__auto___37951 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___37951)){
var class_list_37952 = temp__5455__auto___37951;
var seq__37935_37953 = cljs.core.seq.call(null,classes__$1);
var chunk__37936_37954 = null;
var count__37937_37955 = (0);
var i__37938_37956 = (0);
while(true){
if((i__37938_37956 < count__37937_37955)){
var c_37957 = cljs.core._nth.call(null,chunk__37936_37954,i__37938_37956);
class_list_37952.add(c_37957);


var G__37958 = seq__37935_37953;
var G__37959 = chunk__37936_37954;
var G__37960 = count__37937_37955;
var G__37961 = (i__37938_37956 + (1));
seq__37935_37953 = G__37958;
chunk__37936_37954 = G__37959;
count__37937_37955 = G__37960;
i__37938_37956 = G__37961;
continue;
} else {
var temp__5457__auto___37962 = cljs.core.seq.call(null,seq__37935_37953);
if(temp__5457__auto___37962){
var seq__37935_37963__$1 = temp__5457__auto___37962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37935_37963__$1)){
var c__4319__auto___37964 = cljs.core.chunk_first.call(null,seq__37935_37963__$1);
var G__37965 = cljs.core.chunk_rest.call(null,seq__37935_37963__$1);
var G__37966 = c__4319__auto___37964;
var G__37967 = cljs.core.count.call(null,c__4319__auto___37964);
var G__37968 = (0);
seq__37935_37953 = G__37965;
chunk__37936_37954 = G__37966;
count__37937_37955 = G__37967;
i__37938_37956 = G__37968;
continue;
} else {
var c_37969 = cljs.core.first.call(null,seq__37935_37963__$1);
class_list_37952.add(c_37969);


var G__37970 = cljs.core.next.call(null,seq__37935_37963__$1);
var G__37971 = null;
var G__37972 = (0);
var G__37973 = (0);
seq__37935_37953 = G__37970;
chunk__37936_37954 = G__37971;
count__37937_37955 = G__37972;
i__37938_37956 = G__37973;
continue;
}
} else {
}
}
break;
}
} else {
var seq__37939_37974 = cljs.core.seq.call(null,classes__$1);
var chunk__37940_37975 = null;
var count__37941_37976 = (0);
var i__37942_37977 = (0);
while(true){
if((i__37942_37977 < count__37941_37976)){
var c_37978 = cljs.core._nth.call(null,chunk__37940_37975,i__37942_37977);
var class_name_37979 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_37979,c_37978))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_37979 === ""))?c_37978:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37979)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37978)].join('')));
}


var G__37980 = seq__37939_37974;
var G__37981 = chunk__37940_37975;
var G__37982 = count__37941_37976;
var G__37983 = (i__37942_37977 + (1));
seq__37939_37974 = G__37980;
chunk__37940_37975 = G__37981;
count__37941_37976 = G__37982;
i__37942_37977 = G__37983;
continue;
} else {
var temp__5457__auto___37984 = cljs.core.seq.call(null,seq__37939_37974);
if(temp__5457__auto___37984){
var seq__37939_37985__$1 = temp__5457__auto___37984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37939_37985__$1)){
var c__4319__auto___37986 = cljs.core.chunk_first.call(null,seq__37939_37985__$1);
var G__37987 = cljs.core.chunk_rest.call(null,seq__37939_37985__$1);
var G__37988 = c__4319__auto___37986;
var G__37989 = cljs.core.count.call(null,c__4319__auto___37986);
var G__37990 = (0);
seq__37939_37974 = G__37987;
chunk__37940_37975 = G__37988;
count__37941_37976 = G__37989;
i__37942_37977 = G__37990;
continue;
} else {
var c_37991 = cljs.core.first.call(null,seq__37939_37985__$1);
var class_name_37992 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_37992,c_37991))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_37992 === ""))?c_37991:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37992)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37991)].join('')));
}


var G__37993 = cljs.core.next.call(null,seq__37939_37985__$1);
var G__37994 = null;
var G__37995 = (0);
var G__37996 = (0);
seq__37939_37974 = G__37993;
chunk__37940_37975 = G__37994;
count__37941_37976 = G__37995;
i__37942_37977 = G__37996;
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
var seq__37943_37997 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__37944_37998 = null;
var count__37945_37999 = (0);
var i__37946_38000 = (0);
while(true){
if((i__37946_38000 < count__37945_37999)){
var c_38001 = cljs.core._nth.call(null,chunk__37944_37998,i__37946_38000);
dommy.core.add_class_BANG_.call(null,elem,c_38001);


var G__38002 = seq__37943_37997;
var G__38003 = chunk__37944_37998;
var G__38004 = count__37945_37999;
var G__38005 = (i__37946_38000 + (1));
seq__37943_37997 = G__38002;
chunk__37944_37998 = G__38003;
count__37945_37999 = G__38004;
i__37946_38000 = G__38005;
continue;
} else {
var temp__5457__auto___38006 = cljs.core.seq.call(null,seq__37943_37997);
if(temp__5457__auto___38006){
var seq__37943_38007__$1 = temp__5457__auto___38006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37943_38007__$1)){
var c__4319__auto___38008 = cljs.core.chunk_first.call(null,seq__37943_38007__$1);
var G__38009 = cljs.core.chunk_rest.call(null,seq__37943_38007__$1);
var G__38010 = c__4319__auto___38008;
var G__38011 = cljs.core.count.call(null,c__4319__auto___38008);
var G__38012 = (0);
seq__37943_37997 = G__38009;
chunk__37944_37998 = G__38010;
count__37945_37999 = G__38011;
i__37946_38000 = G__38012;
continue;
} else {
var c_38013 = cljs.core.first.call(null,seq__37943_38007__$1);
dommy.core.add_class_BANG_.call(null,elem,c_38013);


var G__38014 = cljs.core.next.call(null,seq__37943_38007__$1);
var G__38015 = null;
var G__38016 = (0);
var G__38017 = (0);
seq__37943_37997 = G__38014;
chunk__37944_37998 = G__38015;
count__37945_37999 = G__38016;
i__37946_38000 = G__38017;
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
dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq37931){
var G__37932 = cljs.core.first.call(null,seq37931);
var seq37931__$1 = cljs.core.next.call(null,seq37931);
var G__37933 = cljs.core.first.call(null,seq37931__$1);
var seq37931__$2 = cljs.core.next.call(null,seq37931__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37932,G__37933,seq37931__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__38022 = arguments.length;
switch (G__38022) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___38028 = arguments.length;
var i__4500__auto___38029 = (0);
while(true){
if((i__4500__auto___38029 < len__4499__auto___38028)){
args_arr__4514__auto__.push((arguments[i__4500__auto___38029]));

var G__38030 = (i__4500__auto___38029 + (1));
i__4500__auto___38029 = G__38030;
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
var temp__5455__auto___38031 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___38031)){
var class_list_38032 = temp__5455__auto___38031;
class_list_38032.remove(c__$1);
} else {
var class_name_38033 = dommy.core.class$.call(null,elem);
var new_class_name_38034 = dommy.utils.remove_class_str.call(null,class_name_38033,c__$1);
if((class_name_38033 === new_class_name_38034)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_38034);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__38023 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__38024 = null;
var count__38025 = (0);
var i__38026 = (0);
while(true){
if((i__38026 < count__38025)){
var c = cljs.core._nth.call(null,chunk__38024,i__38026);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__38035 = seq__38023;
var G__38036 = chunk__38024;
var G__38037 = count__38025;
var G__38038 = (i__38026 + (1));
seq__38023 = G__38035;
chunk__38024 = G__38036;
count__38025 = G__38037;
i__38026 = G__38038;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__38023);
if(temp__5457__auto__){
var seq__38023__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38023__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__38023__$1);
var G__38039 = cljs.core.chunk_rest.call(null,seq__38023__$1);
var G__38040 = c__4319__auto__;
var G__38041 = cljs.core.count.call(null,c__4319__auto__);
var G__38042 = (0);
seq__38023 = G__38039;
chunk__38024 = G__38040;
count__38025 = G__38041;
i__38026 = G__38042;
continue;
} else {
var c = cljs.core.first.call(null,seq__38023__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__38043 = cljs.core.next.call(null,seq__38023__$1);
var G__38044 = null;
var G__38045 = (0);
var G__38046 = (0);
seq__38023 = G__38043;
chunk__38024 = G__38044;
count__38025 = G__38045;
i__38026 = G__38046;
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
dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq38019){
var G__38020 = cljs.core.first.call(null,seq38019);
var seq38019__$1 = cljs.core.next.call(null,seq38019);
var G__38021 = cljs.core.first.call(null,seq38019__$1);
var seq38019__$2 = cljs.core.next.call(null,seq38019__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38020,G__38021,seq38019__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__38048 = arguments.length;
switch (G__38048) {
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
var temp__5455__auto___38050 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___38050)){
var class_list_38051 = temp__5455__auto___38050;
class_list_38051.toggle(c__$1);
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
var G__38053 = arguments.length;
switch (G__38053) {
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
var G__38056 = arguments.length;
switch (G__38056) {
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
var G__38062 = arguments.length;
switch (G__38062) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___38069 = arguments.length;
var i__4500__auto___38070 = (0);
while(true){
if((i__4500__auto___38070 < len__4499__auto___38069)){
args_arr__4514__auto__.push((arguments[i__4500__auto___38070]));

var G__38071 = (i__4500__auto___38070 + (1));
i__4500__auto___38070 = G__38071;
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
var G__38063 = parent;
G__38063.appendChild(child);

return G__38063;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__38064_38072 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__38065_38073 = null;
var count__38066_38074 = (0);
var i__38067_38075 = (0);
while(true){
if((i__38067_38075 < count__38066_38074)){
var c_38076 = cljs.core._nth.call(null,chunk__38065_38073,i__38067_38075);
dommy.core.append_BANG_.call(null,parent,c_38076);


var G__38077 = seq__38064_38072;
var G__38078 = chunk__38065_38073;
var G__38079 = count__38066_38074;
var G__38080 = (i__38067_38075 + (1));
seq__38064_38072 = G__38077;
chunk__38065_38073 = G__38078;
count__38066_38074 = G__38079;
i__38067_38075 = G__38080;
continue;
} else {
var temp__5457__auto___38081 = cljs.core.seq.call(null,seq__38064_38072);
if(temp__5457__auto___38081){
var seq__38064_38082__$1 = temp__5457__auto___38081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38064_38082__$1)){
var c__4319__auto___38083 = cljs.core.chunk_first.call(null,seq__38064_38082__$1);
var G__38084 = cljs.core.chunk_rest.call(null,seq__38064_38082__$1);
var G__38085 = c__4319__auto___38083;
var G__38086 = cljs.core.count.call(null,c__4319__auto___38083);
var G__38087 = (0);
seq__38064_38072 = G__38084;
chunk__38065_38073 = G__38085;
count__38066_38074 = G__38086;
i__38067_38075 = G__38087;
continue;
} else {
var c_38088 = cljs.core.first.call(null,seq__38064_38082__$1);
dommy.core.append_BANG_.call(null,parent,c_38088);


var G__38089 = cljs.core.next.call(null,seq__38064_38082__$1);
var G__38090 = null;
var G__38091 = (0);
var G__38092 = (0);
seq__38064_38072 = G__38089;
chunk__38065_38073 = G__38090;
count__38066_38074 = G__38091;
i__38067_38075 = G__38092;
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
dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq38059){
var G__38060 = cljs.core.first.call(null,seq38059);
var seq38059__$1 = cljs.core.next.call(null,seq38059);
var G__38061 = cljs.core.first.call(null,seq38059__$1);
var seq38059__$2 = cljs.core.next.call(null,seq38059__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38060,G__38061,seq38059__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__38097 = arguments.length;
switch (G__38097) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___38104 = arguments.length;
var i__4500__auto___38105 = (0);
while(true){
if((i__4500__auto___38105 < len__4499__auto___38104)){
args_arr__4514__auto__.push((arguments[i__4500__auto___38105]));

var G__38106 = (i__4500__auto___38105 + (1));
i__4500__auto___38105 = G__38106;
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
var G__38098 = parent;
G__38098.insertBefore(child,parent.firstChild);

return G__38098;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__38099_38107 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__38100_38108 = null;
var count__38101_38109 = (0);
var i__38102_38110 = (0);
while(true){
if((i__38102_38110 < count__38101_38109)){
var c_38111 = cljs.core._nth.call(null,chunk__38100_38108,i__38102_38110);
dommy.core.prepend_BANG_.call(null,parent,c_38111);


var G__38112 = seq__38099_38107;
var G__38113 = chunk__38100_38108;
var G__38114 = count__38101_38109;
var G__38115 = (i__38102_38110 + (1));
seq__38099_38107 = G__38112;
chunk__38100_38108 = G__38113;
count__38101_38109 = G__38114;
i__38102_38110 = G__38115;
continue;
} else {
var temp__5457__auto___38116 = cljs.core.seq.call(null,seq__38099_38107);
if(temp__5457__auto___38116){
var seq__38099_38117__$1 = temp__5457__auto___38116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38099_38117__$1)){
var c__4319__auto___38118 = cljs.core.chunk_first.call(null,seq__38099_38117__$1);
var G__38119 = cljs.core.chunk_rest.call(null,seq__38099_38117__$1);
var G__38120 = c__4319__auto___38118;
var G__38121 = cljs.core.count.call(null,c__4319__auto___38118);
var G__38122 = (0);
seq__38099_38107 = G__38119;
chunk__38100_38108 = G__38120;
count__38101_38109 = G__38121;
i__38102_38110 = G__38122;
continue;
} else {
var c_38123 = cljs.core.first.call(null,seq__38099_38117__$1);
dommy.core.prepend_BANG_.call(null,parent,c_38123);


var G__38124 = cljs.core.next.call(null,seq__38099_38117__$1);
var G__38125 = null;
var G__38126 = (0);
var G__38127 = (0);
seq__38099_38107 = G__38124;
chunk__38100_38108 = G__38125;
count__38101_38109 = G__38126;
i__38102_38110 = G__38127;
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
dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq38094){
var G__38095 = cljs.core.first.call(null,seq38094);
var seq38094__$1 = cljs.core.next.call(null,seq38094);
var G__38096 = cljs.core.first.call(null,seq38094__$1);
var seq38094__$2 = cljs.core.next.call(null,seq38094__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38095,G__38096,seq38094__$2);
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
var temp__5455__auto___38128 = other.nextSibling;
if(cljs.core.truth_(temp__5455__auto___38128)){
var next_38129 = temp__5455__auto___38128;
dommy.core.insert_before_BANG_.call(null,elem,next_38129);
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
var G__38131 = arguments.length;
switch (G__38131) {
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
var G__38132 = p;
G__38132.removeChild(elem);

return G__38132;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__38134){
var vec__38135 = p__38134;
var special_mouse_event = cljs.core.nth.call(null,vec__38135,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__38135,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__38135,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__38135,special_mouse_event,real_mouse_event){
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
;})(vec__38135,special_mouse_event,real_mouse_event))
});})(vec__38135,special_mouse_event,real_mouse_event))
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
var len__4499__auto___38141 = arguments.length;
var i__4500__auto___38142 = (0);
while(true){
if((i__4500__auto___38142 < len__4499__auto___38141)){
args__4502__auto__.push((arguments[i__4500__auto___38142]));

var G__38143 = (i__4500__auto___38142 + (1));
i__4500__auto___38142 = G__38143;
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
dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq38138){
var G__38139 = cljs.core.first.call(null,seq38138);
var seq38138__$1 = cljs.core.next.call(null,seq38138);
var G__38140 = cljs.core.first.call(null,seq38138__$1);
var seq38138__$2 = cljs.core.next.call(null,seq38138__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38139,G__38140,seq38138__$2);
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
var len__4499__auto___38183 = arguments.length;
var i__4500__auto___38184 = (0);
while(true){
if((i__4500__auto___38184 < len__4499__auto___38183)){
args__4502__auto__.push((arguments[i__4500__auto___38184]));

var G__38185 = (i__4500__auto___38184 + (1));
i__4500__auto___38184 = G__38185;
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

var vec__38146_38186 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_38187 = cljs.core.nth.call(null,vec__38146_38186,(0),null);
var selector_38188 = cljs.core.nth.call(null,vec__38146_38186,(1),null);
var seq__38149_38189 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__38156_38190 = null;
var count__38157_38191 = (0);
var i__38158_38192 = (0);
while(true){
if((i__38158_38192 < count__38157_38191)){
var vec__38165_38193 = cljs.core._nth.call(null,chunk__38156_38190,i__38158_38192);
var orig_type_38194 = cljs.core.nth.call(null,vec__38165_38193,(0),null);
var f_38195 = cljs.core.nth.call(null,vec__38165_38193,(1),null);
var seq__38159_38196 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_38194,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_38194,cljs.core.identity])));
var chunk__38161_38197 = null;
var count__38162_38198 = (0);
var i__38163_38199 = (0);
while(true){
if((i__38163_38199 < count__38162_38198)){
var vec__38168_38200 = cljs.core._nth.call(null,chunk__38161_38197,i__38163_38199);
var actual_type_38201 = cljs.core.nth.call(null,vec__38168_38200,(0),null);
var factory_38202 = cljs.core.nth.call(null,vec__38168_38200,(1),null);
var canonical_f_38203 = (cljs.core.truth_(selector_38188)?cljs.core.partial.call(null,dommy.core.live_listener,elem_38187,selector_38188):cljs.core.identity).call(null,factory_38202.call(null,f_38195));
dommy.core.update_event_listeners_BANG_.call(null,elem_38187,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_38188,actual_type_38201,f_38195], null),canonical_f_38203);

if(cljs.core.truth_(elem_38187.addEventListener)){
elem_38187.addEventListener(cljs.core.name.call(null,actual_type_38201),canonical_f_38203);
} else {
elem_38187.attachEvent(cljs.core.name.call(null,actual_type_38201),canonical_f_38203);
}


var G__38204 = seq__38159_38196;
var G__38205 = chunk__38161_38197;
var G__38206 = count__38162_38198;
var G__38207 = (i__38163_38199 + (1));
seq__38159_38196 = G__38204;
chunk__38161_38197 = G__38205;
count__38162_38198 = G__38206;
i__38163_38199 = G__38207;
continue;
} else {
var temp__5457__auto___38208 = cljs.core.seq.call(null,seq__38159_38196);
if(temp__5457__auto___38208){
var seq__38159_38209__$1 = temp__5457__auto___38208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38159_38209__$1)){
var c__4319__auto___38210 = cljs.core.chunk_first.call(null,seq__38159_38209__$1);
var G__38211 = cljs.core.chunk_rest.call(null,seq__38159_38209__$1);
var G__38212 = c__4319__auto___38210;
var G__38213 = cljs.core.count.call(null,c__4319__auto___38210);
var G__38214 = (0);
seq__38159_38196 = G__38211;
chunk__38161_38197 = G__38212;
count__38162_38198 = G__38213;
i__38163_38199 = G__38214;
continue;
} else {
var vec__38171_38215 = cljs.core.first.call(null,seq__38159_38209__$1);
var actual_type_38216 = cljs.core.nth.call(null,vec__38171_38215,(0),null);
var factory_38217 = cljs.core.nth.call(null,vec__38171_38215,(1),null);
var canonical_f_38218 = (cljs.core.truth_(selector_38188)?cljs.core.partial.call(null,dommy.core.live_listener,elem_38187,selector_38188):cljs.core.identity).call(null,factory_38217.call(null,f_38195));
dommy.core.update_event_listeners_BANG_.call(null,elem_38187,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_38188,actual_type_38216,f_38195], null),canonical_f_38218);

if(cljs.core.truth_(elem_38187.addEventListener)){
elem_38187.addEventListener(cljs.core.name.call(null,actual_type_38216),canonical_f_38218);
} else {
elem_38187.attachEvent(cljs.core.name.call(null,actual_type_38216),canonical_f_38218);
}


var G__38219 = cljs.core.next.call(null,seq__38159_38209__$1);
var G__38220 = null;
var G__38221 = (0);
var G__38222 = (0);
seq__38159_38196 = G__38219;
chunk__38161_38197 = G__38220;
count__38162_38198 = G__38221;
i__38163_38199 = G__38222;
continue;
}
} else {
}
}
break;
}

var G__38223 = seq__38149_38189;
var G__38224 = chunk__38156_38190;
var G__38225 = count__38157_38191;
var G__38226 = (i__38158_38192 + (1));
seq__38149_38189 = G__38223;
chunk__38156_38190 = G__38224;
count__38157_38191 = G__38225;
i__38158_38192 = G__38226;
continue;
} else {
var temp__5457__auto___38227 = cljs.core.seq.call(null,seq__38149_38189);
if(temp__5457__auto___38227){
var seq__38149_38228__$1 = temp__5457__auto___38227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38149_38228__$1)){
var c__4319__auto___38229 = cljs.core.chunk_first.call(null,seq__38149_38228__$1);
var G__38230 = cljs.core.chunk_rest.call(null,seq__38149_38228__$1);
var G__38231 = c__4319__auto___38229;
var G__38232 = cljs.core.count.call(null,c__4319__auto___38229);
var G__38233 = (0);
seq__38149_38189 = G__38230;
chunk__38156_38190 = G__38231;
count__38157_38191 = G__38232;
i__38158_38192 = G__38233;
continue;
} else {
var vec__38174_38234 = cljs.core.first.call(null,seq__38149_38228__$1);
var orig_type_38235 = cljs.core.nth.call(null,vec__38174_38234,(0),null);
var f_38236 = cljs.core.nth.call(null,vec__38174_38234,(1),null);
var seq__38150_38237 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_38235,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_38235,cljs.core.identity])));
var chunk__38152_38238 = null;
var count__38153_38239 = (0);
var i__38154_38240 = (0);
while(true){
if((i__38154_38240 < count__38153_38239)){
var vec__38177_38241 = cljs.core._nth.call(null,chunk__38152_38238,i__38154_38240);
var actual_type_38242 = cljs.core.nth.call(null,vec__38177_38241,(0),null);
var factory_38243 = cljs.core.nth.call(null,vec__38177_38241,(1),null);
var canonical_f_38244 = (cljs.core.truth_(selector_38188)?cljs.core.partial.call(null,dommy.core.live_listener,elem_38187,selector_38188):cljs.core.identity).call(null,factory_38243.call(null,f_38236));
dommy.core.update_event_listeners_BANG_.call(null,elem_38187,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_38188,actual_type_38242,f_38236], null),canonical_f_38244);

if(cljs.core.truth_(elem_38187.addEventListener)){
elem_38187.addEventListener(cljs.core.name.call(null,actual_type_38242),canonical_f_38244);
} else {
elem_38187.attachEvent(cljs.core.name.call(null,actual_type_38242),canonical_f_38244);
}


var G__38245 = seq__38150_38237;
var G__38246 = chunk__38152_38238;
var G__38247 = count__38153_38239;
var G__38248 = (i__38154_38240 + (1));
seq__38150_38237 = G__38245;
chunk__38152_38238 = G__38246;
count__38153_38239 = G__38247;
i__38154_38240 = G__38248;
continue;
} else {
var temp__5457__auto___38249__$1 = cljs.core.seq.call(null,seq__38150_38237);
if(temp__5457__auto___38249__$1){
var seq__38150_38250__$1 = temp__5457__auto___38249__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38150_38250__$1)){
var c__4319__auto___38251 = cljs.core.chunk_first.call(null,seq__38150_38250__$1);
var G__38252 = cljs.core.chunk_rest.call(null,seq__38150_38250__$1);
var G__38253 = c__4319__auto___38251;
var G__38254 = cljs.core.count.call(null,c__4319__auto___38251);
var G__38255 = (0);
seq__38150_38237 = G__38252;
chunk__38152_38238 = G__38253;
count__38153_38239 = G__38254;
i__38154_38240 = G__38255;
continue;
} else {
var vec__38180_38256 = cljs.core.first.call(null,seq__38150_38250__$1);
var actual_type_38257 = cljs.core.nth.call(null,vec__38180_38256,(0),null);
var factory_38258 = cljs.core.nth.call(null,vec__38180_38256,(1),null);
var canonical_f_38259 = (cljs.core.truth_(selector_38188)?cljs.core.partial.call(null,dommy.core.live_listener,elem_38187,selector_38188):cljs.core.identity).call(null,factory_38258.call(null,f_38236));
dommy.core.update_event_listeners_BANG_.call(null,elem_38187,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_38188,actual_type_38257,f_38236], null),canonical_f_38259);

if(cljs.core.truth_(elem_38187.addEventListener)){
elem_38187.addEventListener(cljs.core.name.call(null,actual_type_38257),canonical_f_38259);
} else {
elem_38187.attachEvent(cljs.core.name.call(null,actual_type_38257),canonical_f_38259);
}


var G__38260 = cljs.core.next.call(null,seq__38150_38250__$1);
var G__38261 = null;
var G__38262 = (0);
var G__38263 = (0);
seq__38150_38237 = G__38260;
chunk__38152_38238 = G__38261;
count__38153_38239 = G__38262;
i__38154_38240 = G__38263;
continue;
}
} else {
}
}
break;
}

var G__38264 = cljs.core.next.call(null,seq__38149_38228__$1);
var G__38265 = null;
var G__38266 = (0);
var G__38267 = (0);
seq__38149_38189 = G__38264;
chunk__38156_38190 = G__38265;
count__38157_38191 = G__38266;
i__38158_38192 = G__38267;
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
dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq38144){
var G__38145 = cljs.core.first.call(null,seq38144);
var seq38144__$1 = cljs.core.next.call(null,seq38144);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38145,seq38144__$1);
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
var len__4499__auto___38307 = arguments.length;
var i__4500__auto___38308 = (0);
while(true){
if((i__4500__auto___38308 < len__4499__auto___38307)){
args__4502__auto__.push((arguments[i__4500__auto___38308]));

var G__38309 = (i__4500__auto___38308 + (1));
i__4500__auto___38308 = G__38309;
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

var vec__38270_38310 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_38311 = cljs.core.nth.call(null,vec__38270_38310,(0),null);
var selector_38312 = cljs.core.nth.call(null,vec__38270_38310,(1),null);
var seq__38273_38313 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__38280_38314 = null;
var count__38281_38315 = (0);
var i__38282_38316 = (0);
while(true){
if((i__38282_38316 < count__38281_38315)){
var vec__38289_38317 = cljs.core._nth.call(null,chunk__38280_38314,i__38282_38316);
var orig_type_38318 = cljs.core.nth.call(null,vec__38289_38317,(0),null);
var f_38319 = cljs.core.nth.call(null,vec__38289_38317,(1),null);
var seq__38283_38320 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_38318,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_38318,cljs.core.identity])));
var chunk__38285_38321 = null;
var count__38286_38322 = (0);
var i__38287_38323 = (0);
while(true){
if((i__38287_38323 < count__38286_38322)){
var vec__38292_38324 = cljs.core._nth.call(null,chunk__38285_38321,i__38287_38323);
var actual_type_38325 = cljs.core.nth.call(null,vec__38292_38324,(0),null);
var __38326 = cljs.core.nth.call(null,vec__38292_38324,(1),null);
var keys_38327 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_38312,actual_type_38325,f_38319], null);
var canonical_f_38328 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_38311),keys_38327);
dommy.core.update_event_listeners_BANG_.call(null,elem_38311,dommy.utils.dissoc_in,keys_38327);

if(cljs.core.truth_(elem_38311.removeEventListener)){
elem_38311.removeEventListener(cljs.core.name.call(null,actual_type_38325),canonical_f_38328);
} else {
elem_38311.detachEvent(cljs.core.name.call(null,actual_type_38325),canonical_f_38328);
}


var G__38329 = seq__38283_38320;
var G__38330 = chunk__38285_38321;
var G__38331 = count__38286_38322;
var G__38332 = (i__38287_38323 + (1));
seq__38283_38320 = G__38329;
chunk__38285_38321 = G__38330;
count__38286_38322 = G__38331;
i__38287_38323 = G__38332;
continue;
} else {
var temp__5457__auto___38333 = cljs.core.seq.call(null,seq__38283_38320);
if(temp__5457__auto___38333){
var seq__38283_38334__$1 = temp__5457__auto___38333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38283_38334__$1)){
var c__4319__auto___38335 = cljs.core.chunk_first.call(null,seq__38283_38334__$1);
var G__38336 = cljs.core.chunk_rest.call(null,seq__38283_38334__$1);
var G__38337 = c__4319__auto___38335;
var G__38338 = cljs.core.count.call(null,c__4319__auto___38335);
var G__38339 = (0);
seq__38283_38320 = G__38336;
chunk__38285_38321 = G__38337;
count__38286_38322 = G__38338;
i__38287_38323 = G__38339;
continue;
} else {
var vec__38295_38340 = cljs.core.first.call(null,seq__38283_38334__$1);
var actual_type_38341 = cljs.core.nth.call(null,vec__38295_38340,(0),null);
var __38342 = cljs.core.nth.call(null,vec__38295_38340,(1),null);
var keys_38343 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_38312,actual_type_38341,f_38319], null);
var canonical_f_38344 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_38311),keys_38343);
dommy.core.update_event_listeners_BANG_.call(null,elem_38311,dommy.utils.dissoc_in,keys_38343);

if(cljs.core.truth_(elem_38311.removeEventListener)){
elem_38311.removeEventListener(cljs.core.name.call(null,actual_type_38341),canonical_f_38344);
} else {
elem_38311.detachEvent(cljs.core.name.call(null,actual_type_38341),canonical_f_38344);
}


var G__38345 = cljs.core.next.call(null,seq__38283_38334__$1);
var G__38346 = null;
var G__38347 = (0);
var G__38348 = (0);
seq__38283_38320 = G__38345;
chunk__38285_38321 = G__38346;
count__38286_38322 = G__38347;
i__38287_38323 = G__38348;
continue;
}
} else {
}
}
break;
}

var G__38349 = seq__38273_38313;
var G__38350 = chunk__38280_38314;
var G__38351 = count__38281_38315;
var G__38352 = (i__38282_38316 + (1));
seq__38273_38313 = G__38349;
chunk__38280_38314 = G__38350;
count__38281_38315 = G__38351;
i__38282_38316 = G__38352;
continue;
} else {
var temp__5457__auto___38353 = cljs.core.seq.call(null,seq__38273_38313);
if(temp__5457__auto___38353){
var seq__38273_38354__$1 = temp__5457__auto___38353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38273_38354__$1)){
var c__4319__auto___38355 = cljs.core.chunk_first.call(null,seq__38273_38354__$1);
var G__38356 = cljs.core.chunk_rest.call(null,seq__38273_38354__$1);
var G__38357 = c__4319__auto___38355;
var G__38358 = cljs.core.count.call(null,c__4319__auto___38355);
var G__38359 = (0);
seq__38273_38313 = G__38356;
chunk__38280_38314 = G__38357;
count__38281_38315 = G__38358;
i__38282_38316 = G__38359;
continue;
} else {
var vec__38298_38360 = cljs.core.first.call(null,seq__38273_38354__$1);
var orig_type_38361 = cljs.core.nth.call(null,vec__38298_38360,(0),null);
var f_38362 = cljs.core.nth.call(null,vec__38298_38360,(1),null);
var seq__38274_38363 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_38361,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_38361,cljs.core.identity])));
var chunk__38276_38364 = null;
var count__38277_38365 = (0);
var i__38278_38366 = (0);
while(true){
if((i__38278_38366 < count__38277_38365)){
var vec__38301_38367 = cljs.core._nth.call(null,chunk__38276_38364,i__38278_38366);
var actual_type_38368 = cljs.core.nth.call(null,vec__38301_38367,(0),null);
var __38369 = cljs.core.nth.call(null,vec__38301_38367,(1),null);
var keys_38370 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_38312,actual_type_38368,f_38362], null);
var canonical_f_38371 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_38311),keys_38370);
dommy.core.update_event_listeners_BANG_.call(null,elem_38311,dommy.utils.dissoc_in,keys_38370);

if(cljs.core.truth_(elem_38311.removeEventListener)){
elem_38311.removeEventListener(cljs.core.name.call(null,actual_type_38368),canonical_f_38371);
} else {
elem_38311.detachEvent(cljs.core.name.call(null,actual_type_38368),canonical_f_38371);
}


var G__38372 = seq__38274_38363;
var G__38373 = chunk__38276_38364;
var G__38374 = count__38277_38365;
var G__38375 = (i__38278_38366 + (1));
seq__38274_38363 = G__38372;
chunk__38276_38364 = G__38373;
count__38277_38365 = G__38374;
i__38278_38366 = G__38375;
continue;
} else {
var temp__5457__auto___38376__$1 = cljs.core.seq.call(null,seq__38274_38363);
if(temp__5457__auto___38376__$1){
var seq__38274_38377__$1 = temp__5457__auto___38376__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38274_38377__$1)){
var c__4319__auto___38378 = cljs.core.chunk_first.call(null,seq__38274_38377__$1);
var G__38379 = cljs.core.chunk_rest.call(null,seq__38274_38377__$1);
var G__38380 = c__4319__auto___38378;
var G__38381 = cljs.core.count.call(null,c__4319__auto___38378);
var G__38382 = (0);
seq__38274_38363 = G__38379;
chunk__38276_38364 = G__38380;
count__38277_38365 = G__38381;
i__38278_38366 = G__38382;
continue;
} else {
var vec__38304_38383 = cljs.core.first.call(null,seq__38274_38377__$1);
var actual_type_38384 = cljs.core.nth.call(null,vec__38304_38383,(0),null);
var __38385 = cljs.core.nth.call(null,vec__38304_38383,(1),null);
var keys_38386 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_38312,actual_type_38384,f_38362], null);
var canonical_f_38387 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_38311),keys_38386);
dommy.core.update_event_listeners_BANG_.call(null,elem_38311,dommy.utils.dissoc_in,keys_38386);

if(cljs.core.truth_(elem_38311.removeEventListener)){
elem_38311.removeEventListener(cljs.core.name.call(null,actual_type_38384),canonical_f_38387);
} else {
elem_38311.detachEvent(cljs.core.name.call(null,actual_type_38384),canonical_f_38387);
}


var G__38388 = cljs.core.next.call(null,seq__38274_38377__$1);
var G__38389 = null;
var G__38390 = (0);
var G__38391 = (0);
seq__38274_38363 = G__38388;
chunk__38276_38364 = G__38389;
count__38277_38365 = G__38390;
i__38278_38366 = G__38391;
continue;
}
} else {
}
}
break;
}

var G__38392 = cljs.core.next.call(null,seq__38273_38354__$1);
var G__38393 = null;
var G__38394 = (0);
var G__38395 = (0);
seq__38273_38313 = G__38392;
chunk__38280_38314 = G__38393;
count__38281_38315 = G__38394;
i__38282_38316 = G__38395;
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
dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq38268){
var G__38269 = cljs.core.first.call(null,seq38268);
var seq38268__$1 = cljs.core.next.call(null,seq38268);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38269,seq38268__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38411 = arguments.length;
var i__4500__auto___38412 = (0);
while(true){
if((i__4500__auto___38412 < len__4499__auto___38411)){
args__4502__auto__.push((arguments[i__4500__auto___38412]));

var G__38413 = (i__4500__auto___38412 + (1));
i__4500__auto___38412 = G__38413;
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

var vec__38398_38414 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_38415 = cljs.core.nth.call(null,vec__38398_38414,(0),null);
var selector_38416 = cljs.core.nth.call(null,vec__38398_38414,(1),null);
var seq__38401_38417 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__38402_38418 = null;
var count__38403_38419 = (0);
var i__38404_38420 = (0);
while(true){
if((i__38404_38420 < count__38403_38419)){
var vec__38405_38421 = cljs.core._nth.call(null,chunk__38402_38418,i__38404_38420);
var type_38422 = cljs.core.nth.call(null,vec__38405_38421,(0),null);
var f_38423 = cljs.core.nth.call(null,vec__38405_38421,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_38422,((function (seq__38401_38417,chunk__38402_38418,count__38403_38419,i__38404_38420,vec__38405_38421,type_38422,f_38423,vec__38398_38414,elem_38415,selector_38416){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_38422,dommy$core$this_fn);

return f_38423.call(null,e);
});})(seq__38401_38417,chunk__38402_38418,count__38403_38419,i__38404_38420,vec__38405_38421,type_38422,f_38423,vec__38398_38414,elem_38415,selector_38416))
);


var G__38424 = seq__38401_38417;
var G__38425 = chunk__38402_38418;
var G__38426 = count__38403_38419;
var G__38427 = (i__38404_38420 + (1));
seq__38401_38417 = G__38424;
chunk__38402_38418 = G__38425;
count__38403_38419 = G__38426;
i__38404_38420 = G__38427;
continue;
} else {
var temp__5457__auto___38428 = cljs.core.seq.call(null,seq__38401_38417);
if(temp__5457__auto___38428){
var seq__38401_38429__$1 = temp__5457__auto___38428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38401_38429__$1)){
var c__4319__auto___38430 = cljs.core.chunk_first.call(null,seq__38401_38429__$1);
var G__38431 = cljs.core.chunk_rest.call(null,seq__38401_38429__$1);
var G__38432 = c__4319__auto___38430;
var G__38433 = cljs.core.count.call(null,c__4319__auto___38430);
var G__38434 = (0);
seq__38401_38417 = G__38431;
chunk__38402_38418 = G__38432;
count__38403_38419 = G__38433;
i__38404_38420 = G__38434;
continue;
} else {
var vec__38408_38435 = cljs.core.first.call(null,seq__38401_38429__$1);
var type_38436 = cljs.core.nth.call(null,vec__38408_38435,(0),null);
var f_38437 = cljs.core.nth.call(null,vec__38408_38435,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_38436,((function (seq__38401_38417,chunk__38402_38418,count__38403_38419,i__38404_38420,vec__38408_38435,type_38436,f_38437,seq__38401_38429__$1,temp__5457__auto___38428,vec__38398_38414,elem_38415,selector_38416){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_38436,dommy$core$this_fn);

return f_38437.call(null,e);
});})(seq__38401_38417,chunk__38402_38418,count__38403_38419,i__38404_38420,vec__38408_38435,type_38436,f_38437,seq__38401_38429__$1,temp__5457__auto___38428,vec__38398_38414,elem_38415,selector_38416))
);


var G__38438 = cljs.core.next.call(null,seq__38401_38429__$1);
var G__38439 = null;
var G__38440 = (0);
var G__38441 = (0);
seq__38401_38417 = G__38438;
chunk__38402_38418 = G__38439;
count__38403_38419 = G__38440;
i__38404_38420 = G__38441;
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
dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq38396){
var G__38397 = cljs.core.first.call(null,seq38396);
var seq38396__$1 = cljs.core.next.call(null,seq38396);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38397,seq38396__$1);
});

