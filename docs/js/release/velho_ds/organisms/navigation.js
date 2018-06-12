// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('velho_ds.organisms.navigation');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('stylefy.core');
velho_ds.organisms.navigation.navigation_style = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"grid",cljs.core.cst$kw$grid_DASH_template_DASH_colums,"1fr",cljs.core.cst$kw$grid_DASH_template_DASH_rows,"1fr",cljs.core.cst$kw$background_DASH_color,"#333"], null);
velho_ds.organisms.navigation.menu_color = new cljs.core.PersistentArrayMap(null, 3, [(0),"#333333",(1),"#434343",(2),"#535353"], null);
velho_ds.organisms.navigation.ul_style = (function velho_ds$organisms$navigation$ul_style(level){
var bg_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(velho_ds.organisms.navigation.menu_color,level);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$list_DASH_style_DASH_type,"none",cljs.core.cst$kw$padding,"0",cljs.core.cst$kw$margin,"0",cljs.core.cst$kw$background_DASH_color,(((bg_color == null))?"#333":bg_color)], null);
});
velho_ds.organisms.navigation.li_style = (function velho_ds$organisms$navigation$li_style(level){
return cljs.core.PersistentArrayMap.EMPTY;
});
velho_ds.organisms.navigation.a_style = (function velho_ds$organisms$navigation$a_style(level){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"block",cljs.core.cst$kw$padding,["0.5rem 0.5rem 0.5rem ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + (level * 0.75))),"rem"].join(''),cljs.core.cst$kw$text_DASH_decoration,"none",cljs.core.cst$kw$color,"#FEFEFE"], null);
});
if(typeof velho_ds.organisms.navigation.nav_id !== 'undefined'){
} else {
velho_ds.organisms.navigation.nav_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
velho_ds.organisms.navigation.nav_key = (function velho_ds$organisms$navigation$nav_key(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(velho_ds.organisms.navigation.nav_id,cljs.core.inc);
});
velho_ds.organisms.navigation.get_navigation_items = (function velho_ds$organisms$navigation$get_navigation_items(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14278 = arguments.length;
var i__4500__auto___14279 = (0);
while(true){
if((i__4500__auto___14279 < len__4499__auto___14278)){
args__4502__auto__.push((arguments[i__4500__auto___14279]));

var G__14280 = (i__4500__auto___14279 + (1));
i__4500__auto___14279 = G__14280;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return velho_ds.organisms.navigation.get_navigation_items.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

velho_ds.organisms.navigation.get_navigation_items.cljs$core$IFn$_invoke$arity$variadic = (function (items,lvl){
var level = (((lvl == null))?(0):cljs.core.first(lvl));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(velho_ds.organisms.navigation.ul_style(level)),((cljs.core.map_QMARK_(items))?(function (){var iter__4292__auto__ = ((function (level){
return (function velho_ds$organisms$navigation$iter__14270(s__14271){
return (new cljs.core.LazySeq(null,((function (level){
return (function (){
var s__14271__$1 = s__14271;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14271__$1);
if(temp__5457__auto__){
var s__14271__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14271__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__14271__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__14273 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__14272 = (0);
while(true){
if((i__14272 < size__4291__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__14272);
cljs.core.chunk_append(b__14273,(((cljs.core.count((key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(items) : key.call(null,items))) > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(velho_ds.organisms.navigation.li_style(level),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,velho_ds.organisms.navigation.nav_key()], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(velho_ds.organisms.navigation.a_style(level),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], null)),key], null),velho_ds.organisms.navigation.get_navigation_items.cljs$core$IFn$_invoke$arity$variadic((key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(items) : key.call(null,items)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(level + (1))], 0))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(velho_ds.organisms.navigation.li_style(level),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,velho_ds.organisms.navigation.nav_key()], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(velho_ds.organisms.navigation.a_style(level),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], null)),key], null)], null)));

var G__14281 = (i__14272 + (1));
i__14272 = G__14281;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14273),velho_ds$organisms$navigation$iter__14270(cljs.core.chunk_rest(s__14271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14273),null);
}
} else {
var key = cljs.core.first(s__14271__$2);
return cljs.core.cons((((cljs.core.count((key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(items) : key.call(null,items))) > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(velho_ds.organisms.navigation.li_style(level),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,velho_ds.organisms.navigation.nav_key()], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(velho_ds.organisms.navigation.a_style(level),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], null)),key], null),velho_ds.organisms.navigation.get_navigation_items.cljs$core$IFn$_invoke$arity$variadic((key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(items) : key.call(null,items)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(level + (1))], 0))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(velho_ds.organisms.navigation.li_style(level),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,velho_ds.organisms.navigation.nav_key()], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(velho_ds.organisms.navigation.a_style(level),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], null)),key], null)], null)),velho_ds$organisms$navigation$iter__14270(cljs.core.rest(s__14271__$2)));
}
} else {
return null;
}
break;
}
});})(level))
,null,null));
});})(level))
;
return iter__4292__auto__(cljs.core.vec(cljs.core.keys(items)));
})():((cljs.core.vector_QMARK_(items))?(function (){var iter__4292__auto__ = ((function (level){
return (function velho_ds$organisms$navigation$iter__14274(s__14275){
return (new cljs.core.LazySeq(null,((function (level){
return (function (){
var s__14275__$1 = s__14275;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14275__$1);
if(temp__5457__auto__){
var s__14275__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14275__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__14275__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__14277 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__14276 = (0);
while(true){
if((i__14276 < size__4291__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__14276);
cljs.core.chunk_append(b__14277,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(velho_ds.organisms.navigation.li_style(level),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,velho_ds.organisms.navigation.nav_key()], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(velho_ds.organisms.navigation.a_style(level),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('')], null)),item], null)], null));

var G__14282 = (i__14276 + (1));
i__14276 = G__14282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14277),velho_ds$organisms$navigation$iter__14274(cljs.core.chunk_rest(s__14275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14277),null);
}
} else {
var item = cljs.core.first(s__14275__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(velho_ds.organisms.navigation.li_style(level),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,velho_ds.organisms.navigation.nav_key()], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(velho_ds.organisms.navigation.a_style(level),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('')], null)),item], null)], null),velho_ds$organisms$navigation$iter__14274(cljs.core.rest(s__14275__$2)));
}
} else {
return null;
}
break;
}
});})(level))
,null,null));
});})(level))
;
return iter__4292__auto__(items);
})():null))], null);
});

velho_ds.organisms.navigation.get_navigation_items.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
velho_ds.organisms.navigation.get_navigation_items.cljs$lang$applyTo = (function (seq14268){
var G__14269 = cljs.core.first(seq14268);
var seq14268__$1 = cljs.core.next(seq14268);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14269,seq14268__$1);
});

velho_ds.organisms.navigation.nested_navigation = (function velho_ds$organisms$navigation$nested_navigation(navigation_items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(velho_ds.organisms.navigation.navigation_style),velho_ds.organisms.navigation.get_navigation_items(cljs.core.deref(navigation_items))], null);
});
