// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.organisms.navigation');
goog.require('cljs.core');
goog.require('stylefy.core');
velho_ds.organisms.navigation.navigation_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-colums","grid-template-colums",-1629770339),"1fr",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"1fr",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#333"], null);
velho_ds.organisms.navigation.menu_color = new cljs.core.PersistentArrayMap(null, 3, [(0),"#333333",(1),"#434343",(2),"#535353"], null);
velho_ds.organisms.navigation.ul_style = (function velho_ds$organisms$navigation$ul_style(level){
var bg_color = cljs.core.get.call(null,velho_ds.organisms.navigation.menu_color,level);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"background-color","background-color",570434026),(((bg_color == null))?"#333":bg_color)], null);
});
velho_ds.organisms.navigation.li_style = (function velho_ds$organisms$navigation$li_style(level){
return cljs.core.PersistentArrayMap.EMPTY;
});
velho_ds.organisms.navigation.a_style = (function velho_ds$organisms$navigation$a_style(level){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"padding","padding",1660304693),["0.5rem 0.5rem 0.5rem ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + (level * 0.75))),"rem"].join(''),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"color","color",1011675173),"#FEFEFE"], null);
});
if(typeof velho_ds.organisms.navigation.nav_id !== 'undefined'){
} else {
velho_ds.organisms.navigation.nav_id = cljs.core.atom.call(null,(0));
}
velho_ds.organisms.navigation.nav_key = (function velho_ds$organisms$navigation$nav_key(){
return cljs.core.swap_BANG_.call(null,velho_ds.organisms.navigation.nav_id,cljs.core.inc);
});
velho_ds.organisms.navigation.get_navigation_items = (function velho_ds$organisms$navigation$get_navigation_items(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39383 = arguments.length;
var i__4500__auto___39384 = (0);
while(true){
if((i__4500__auto___39384 < len__4499__auto___39383)){
args__4502__auto__.push((arguments[i__4500__auto___39384]));

var G__39385 = (i__4500__auto___39384 + (1));
i__4500__auto___39384 = G__39385;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return velho_ds.organisms.navigation.get_navigation_items.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

velho_ds.organisms.navigation.get_navigation_items.cljs$core$IFn$_invoke$arity$variadic = (function (items,lvl){
var level = (((lvl == null))?(0):cljs.core.first.call(null,lvl));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.call(null,velho_ds.organisms.navigation.ul_style.call(null,level)),((cljs.core.map_QMARK_.call(null,items))?(function (){var iter__4292__auto__ = ((function (level){
return (function velho_ds$organisms$navigation$iter__39375(s__39376){
return (new cljs.core.LazySeq(null,((function (level){
return (function (){
var s__39376__$1 = s__39376;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__39376__$1);
if(temp__5457__auto__){
var s__39376__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39376__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__39376__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__39378 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__39377 = (0);
while(true){
if((i__39377 < size__4291__auto__)){
var key = cljs.core._nth.call(null,c__4290__auto__,i__39377);
cljs.core.chunk_append.call(null,b__39378,(((cljs.core.count.call(null,key.call(null,items)) > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,velho_ds.organisms.navigation.li_style.call(null,level),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),velho_ds.organisms.navigation.nav_key.call(null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.call(null,velho_ds.organisms.navigation.a_style.call(null,level),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], null)),key], null),velho_ds.organisms.navigation.get_navigation_items.call(null,key.call(null,items),(level + (1)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,velho_ds.organisms.navigation.li_style.call(null,level),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),velho_ds.organisms.navigation.nav_key.call(null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.call(null,velho_ds.organisms.navigation.a_style.call(null,level),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], null)),key], null)], null)));

var G__39386 = (i__39377 + (1));
i__39377 = G__39386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39378),velho_ds$organisms$navigation$iter__39375.call(null,cljs.core.chunk_rest.call(null,s__39376__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39378),null);
}
} else {
var key = cljs.core.first.call(null,s__39376__$2);
return cljs.core.cons.call(null,(((cljs.core.count.call(null,key.call(null,items)) > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,velho_ds.organisms.navigation.li_style.call(null,level),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),velho_ds.organisms.navigation.nav_key.call(null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.call(null,velho_ds.organisms.navigation.a_style.call(null,level),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], null)),key], null),velho_ds.organisms.navigation.get_navigation_items.call(null,key.call(null,items),(level + (1)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,velho_ds.organisms.navigation.li_style.call(null,level),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),velho_ds.organisms.navigation.nav_key.call(null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.call(null,velho_ds.organisms.navigation.a_style.call(null,level),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], null)),key], null)], null)),velho_ds$organisms$navigation$iter__39375.call(null,cljs.core.rest.call(null,s__39376__$2)));
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
return iter__4292__auto__.call(null,cljs.core.vec.call(null,cljs.core.keys.call(null,items)));
})():((cljs.core.vector_QMARK_.call(null,items))?(function (){var iter__4292__auto__ = ((function (level){
return (function velho_ds$organisms$navigation$iter__39379(s__39380){
return (new cljs.core.LazySeq(null,((function (level){
return (function (){
var s__39380__$1 = s__39380;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__39380__$1);
if(temp__5457__auto__){
var s__39380__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39380__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__39380__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__39382 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__39381 = (0);
while(true){
if((i__39381 < size__4291__auto__)){
var item = cljs.core._nth.call(null,c__4290__auto__,i__39381);
cljs.core.chunk_append.call(null,b__39382,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,velho_ds.organisms.navigation.li_style.call(null,level),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),velho_ds.organisms.navigation.nav_key.call(null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.call(null,velho_ds.organisms.navigation.a_style.call(null,level),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('')], null)),item], null)], null));

var G__39387 = (i__39381 + (1));
i__39381 = G__39387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39382),velho_ds$organisms$navigation$iter__39379.call(null,cljs.core.chunk_rest.call(null,s__39380__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39382),null);
}
} else {
var item = cljs.core.first.call(null,s__39380__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,velho_ds.organisms.navigation.li_style.call(null,level),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),velho_ds.organisms.navigation.nav_key.call(null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.call(null,velho_ds.organisms.navigation.a_style.call(null,level),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('')], null)),item], null)], null),velho_ds$organisms$navigation$iter__39379.call(null,cljs.core.rest.call(null,s__39380__$2)));
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
return iter__4292__auto__.call(null,items);
})():null))], null);
});

velho_ds.organisms.navigation.get_navigation_items.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
velho_ds.organisms.navigation.get_navigation_items.cljs$lang$applyTo = (function (seq39373){
var G__39374 = cljs.core.first.call(null,seq39373);
var seq39373__$1 = cljs.core.next.call(null,seq39373);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39374,seq39373__$1);
});

velho_ds.organisms.navigation.nested_navigation = (function velho_ds$organisms$navigation$nested_navigation(navigation_items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),stylefy.core.use_style.call(null,velho_ds.organisms.navigation.navigation_style),velho_ds.organisms.navigation.get_navigation_items.call(null,cljs.core.deref.call(null,navigation_items))], null);
});
