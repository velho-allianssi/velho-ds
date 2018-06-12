// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.atoms.button');
goog.require('cljs.core');
goog.require('velho_ds.atoms.style.button');
goog.require('stylefy.core');
velho_ds.atoms.button.default$ = (function velho_ds$atoms$button$default(p__42176){
var map__42177 = p__42176;
var map__42177__$1 = ((((!((map__42177 == null)))?(((((map__42177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42177):map__42177);
var content = cljs.core.get.call(null,map__42177__$1,new cljs.core.Keyword(null,"content","content",15833224));
var icon = cljs.core.get.call(null,map__42177__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var styles = cljs.core.get.call(null,map__42177__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
var on_click_fn = cljs.core.get.call(null,map__42177__$1,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852));
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

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.call(null,cljs.core.merge.call(null,velho_ds.atoms.style.button.button,styles),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_fn], null)),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),stylefy.core.use_sub_style.call(null,cljs.core.merge.call(null,velho_ds.atoms.style.button.button,styles),new cljs.core.Keyword(null,"i","i",-1386841315)),icon], null):null),(cljs.core.truth_(content)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_sub_style.call(null,cljs.core.merge.call(null,velho_ds.atoms.style.button.button,styles),new cljs.core.Keyword(null,"span","span",1394872991)),content], null):null)], null);
});
velho_ds.atoms.button.primary = (function velho_ds$atoms$button$primary(p__42179){
var map__42180 = p__42179;
var map__42180__$1 = ((((!((map__42180 == null)))?(((((map__42180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42180):map__42180);
var btn_args = map__42180__$1;
var content = cljs.core.get.call(null,map__42180__$1,new cljs.core.Keyword(null,"content","content",15833224));
var icon = cljs.core.get.call(null,map__42180__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
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

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.button.default$,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"styles","styles",1954480375),velho_ds.atoms.style.button.primary], null),btn_args)], null);
});
velho_ds.atoms.button.secondary = (function velho_ds$atoms$button$secondary(p__42182){
var map__42183 = p__42182;
var map__42183__$1 = ((((!((map__42183 == null)))?(((((map__42183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42183):map__42183);
var btn_args = map__42183__$1;
var content = cljs.core.get.call(null,map__42183__$1,new cljs.core.Keyword(null,"content","content",15833224));
var icon = cljs.core.get.call(null,map__42183__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
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

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.button.default$,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"styles","styles",1954480375),velho_ds.atoms.style.button.secondary], null),btn_args)], null);
});
velho_ds.atoms.button.outline = (function velho_ds$atoms$button$outline(p__42185){
var map__42186 = p__42185;
var map__42186__$1 = ((((!((map__42186 == null)))?(((((map__42186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42186):map__42186);
var btn_args = map__42186__$1;
var content = cljs.core.get.call(null,map__42186__$1,new cljs.core.Keyword(null,"content","content",15833224));
var icon = cljs.core.get.call(null,map__42186__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
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

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.button.default$,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"styles","styles",1954480375),velho_ds.atoms.style.button.outline], null),btn_args)], null);
});
velho_ds.atoms.button.default_small = (function velho_ds$atoms$button$default_small(p__42188){
var map__42189 = p__42188;
var map__42189__$1 = ((((!((map__42189 == null)))?(((((map__42189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42189):map__42189);
var btn_args = map__42189__$1;
var content = cljs.core.get.call(null,map__42189__$1,new cljs.core.Keyword(null,"content","content",15833224));
var icon = cljs.core.get.call(null,map__42189__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
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

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.button.default$,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"styles","styles",1954480375),velho_ds.atoms.style.button.small], null),btn_args)], null);
});
velho_ds.atoms.button.primary_small = (function velho_ds$atoms$button$primary_small(p__42191){
var map__42192 = p__42191;
var map__42192__$1 = ((((!((map__42192 == null)))?(((((map__42192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42192):map__42192);
var btn_args = map__42192__$1;
var content = cljs.core.get.call(null,map__42192__$1,new cljs.core.Keyword(null,"content","content",15833224));
var icon = cljs.core.get.call(null,map__42192__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
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

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.button.default$,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.merge.call(null,velho_ds.atoms.style.button.primary,velho_ds.atoms.style.button.small)], null),btn_args)], null);
});
velho_ds.atoms.button.secondary_small = (function velho_ds$atoms$button$secondary_small(p__42194){
var map__42195 = p__42194;
var map__42195__$1 = ((((!((map__42195 == null)))?(((((map__42195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42195):map__42195);
var btn_args = map__42195__$1;
var content = cljs.core.get.call(null,map__42195__$1,new cljs.core.Keyword(null,"content","content",15833224));
var icon = cljs.core.get.call(null,map__42195__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
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

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.button.default$,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.merge.call(null,velho_ds.atoms.style.button.secondary,velho_ds.atoms.style.button.small)], null),btn_args)], null);
});
velho_ds.atoms.button.outline_small = (function velho_ds$atoms$button$outline_small(p__42197){
var map__42198 = p__42197;
var map__42198__$1 = ((((!((map__42198 == null)))?(((((map__42198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42198):map__42198);
var btn_args = map__42198__$1;
var content = cljs.core.get.call(null,map__42198__$1,new cljs.core.Keyword(null,"content","content",15833224));
var icon = cljs.core.get.call(null,map__42198__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
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

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.button.default$,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"styles","styles",1954480375),velho_ds.atoms.style.button.outline_small], null),btn_args)], null);
});
