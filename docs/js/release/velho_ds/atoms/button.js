// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('velho_ds.atoms.button');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('velho_ds.atoms.style.button');
goog.require('stylefy.core');
velho_ds.atoms.button.default$ = (function velho_ds$atoms$button$default(p__14221){
var map__14222 = p__14221;
var map__14222__$1 = ((((!((map__14222 == null)))?(((((map__14222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14222):map__14222);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14222__$1,cljs.core.cst$kw$content);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14222__$1,cljs.core.cst$kw$icon);
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14222__$1,cljs.core.cst$kw$styles);
var on_click_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14222__$1,cljs.core.cst$kw$on_DASH_click_DASH_fn);
if(cljs.core.truth_((function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return icon;
}
})())){
} else {
throw (new Error("Assert failed: (or content icon)"));
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([velho_ds.atoms.style.button.button,styles], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,on_click_fn], null)),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([velho_ds.atoms.style.button.button,styles], 0)),cljs.core.cst$kw$i),icon], null):null),(cljs.core.truth_(content)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([velho_ds.atoms.style.button.button,styles], 0)),cljs.core.cst$kw$span),content], null):null)], null);
});
velho_ds.atoms.button.primary = (function velho_ds$atoms$button$primary(p__14224){
var map__14225 = p__14224;
var map__14225__$1 = ((((!((map__14225 == null)))?(((((map__14225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14225):map__14225);
var btn_args = map__14225__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14225__$1,cljs.core.cst$kw$content);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14225__$1,cljs.core.cst$kw$icon);
if(cljs.core.truth_((function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return icon;
}
})())){
} else {
throw (new Error("Assert failed: (or content icon)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.button.default$,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$styles,velho_ds.atoms.style.button.primary], null),btn_args], 0))], null);
});
velho_ds.atoms.button.secondary = (function velho_ds$atoms$button$secondary(p__14227){
var map__14228 = p__14227;
var map__14228__$1 = ((((!((map__14228 == null)))?(((((map__14228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14228):map__14228);
var btn_args = map__14228__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14228__$1,cljs.core.cst$kw$content);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14228__$1,cljs.core.cst$kw$icon);
if(cljs.core.truth_((function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return icon;
}
})())){
} else {
throw (new Error("Assert failed: (or content icon)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.button.default$,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$styles,velho_ds.atoms.style.button.secondary], null),btn_args], 0))], null);
});
velho_ds.atoms.button.outline = (function velho_ds$atoms$button$outline(p__14230){
var map__14231 = p__14230;
var map__14231__$1 = ((((!((map__14231 == null)))?(((((map__14231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14231):map__14231);
var btn_args = map__14231__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14231__$1,cljs.core.cst$kw$content);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14231__$1,cljs.core.cst$kw$icon);
if(cljs.core.truth_((function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return icon;
}
})())){
} else {
throw (new Error("Assert failed: (or content icon)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.button.default$,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$styles,velho_ds.atoms.style.button.outline], null),btn_args], 0))], null);
});
velho_ds.atoms.button.default_small = (function velho_ds$atoms$button$default_small(p__14233){
var map__14234 = p__14233;
var map__14234__$1 = ((((!((map__14234 == null)))?(((((map__14234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14234):map__14234);
var btn_args = map__14234__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14234__$1,cljs.core.cst$kw$content);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14234__$1,cljs.core.cst$kw$icon);
if(cljs.core.truth_((function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return icon;
}
})())){
} else {
throw (new Error("Assert failed: (or content icon)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.button.default$,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$styles,velho_ds.atoms.style.button.small], null),btn_args], 0))], null);
});
velho_ds.atoms.button.primary_small = (function velho_ds$atoms$button$primary_small(p__14236){
var map__14237 = p__14236;
var map__14237__$1 = ((((!((map__14237 == null)))?(((((map__14237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14237):map__14237);
var btn_args = map__14237__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14237__$1,cljs.core.cst$kw$content);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14237__$1,cljs.core.cst$kw$icon);
if(cljs.core.truth_((function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return icon;
}
})())){
} else {
throw (new Error("Assert failed: (or content icon)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.button.default$,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$styles,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([velho_ds.atoms.style.button.primary,velho_ds.atoms.style.button.small], 0))], null),btn_args], 0))], null);
});
velho_ds.atoms.button.secondary_small = (function velho_ds$atoms$button$secondary_small(p__14239){
var map__14240 = p__14239;
var map__14240__$1 = ((((!((map__14240 == null)))?(((((map__14240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14240):map__14240);
var btn_args = map__14240__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14240__$1,cljs.core.cst$kw$content);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14240__$1,cljs.core.cst$kw$icon);
if(cljs.core.truth_((function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return icon;
}
})())){
} else {
throw (new Error("Assert failed: (or content icon)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.button.default$,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$styles,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([velho_ds.atoms.style.button.secondary,velho_ds.atoms.style.button.small], 0))], null),btn_args], 0))], null);
});
velho_ds.atoms.button.outline_small = (function velho_ds$atoms$button$outline_small(p__14242){
var map__14243 = p__14242;
var map__14243__$1 = ((((!((map__14243 == null)))?(((((map__14243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14243):map__14243);
var btn_args = map__14243__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14243__$1,cljs.core.cst$kw$content);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14243__$1,cljs.core.cst$kw$icon);
if(cljs.core.truth_((function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return icon;
}
})())){
} else {
throw (new Error("Assert failed: (or content icon)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.button.default$,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$styles,velho_ds.atoms.style.button.outline_small], null),btn_args], 0))], null);
});
