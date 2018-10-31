// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.organisms.grid');
goog.require('cljs.core');
goog.require('stylefy.core');
velho_ds.organisms.grid.style_grid = (function velho_ds$organisms$grid$style_grid(p__41562){
var map__41563 = p__41562;
var map__41563__$1 = ((((!((map__41563 == null)))?(((((map__41563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41563):map__41563);
var rows = cljs.core.get.call(null,map__41563__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.call(null,map__41563__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),rows,new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),cols], null);
});
velho_ds.organisms.grid.grid_wrap = (function velho_ds$organisms$grid$grid_wrap(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41572 = arguments.length;
var i__4500__auto___41573 = (0);
while(true){
if((i__4500__auto___41573 < len__4499__auto___41572)){
args__4502__auto__.push((arguments[i__4500__auto___41573]));

var G__41574 = (i__4500__auto___41573 + (1));
i__4500__auto___41573 = G__41574;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return velho_ds.organisms.grid.grid_wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

velho_ds.organisms.grid.grid_wrap.cljs$core$IFn$_invoke$arity$variadic = (function (p__41569,content){
var map__41570 = p__41569;
var map__41570__$1 = ((((!((map__41570 == null)))?(((((map__41570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41570):map__41570);
var rows = cljs.core.get.call(null,map__41570__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.call(null,map__41570__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var styles = cljs.core.get.call(null,map__41570__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,cljs.core.merge.call(null,velho_ds.organisms.grid.style_grid.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.apply.call(null,cljs.core.str,cljs.core.butlast.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,rows,"1fr ")))),new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.apply.call(null,cljs.core.str,cljs.core.butlast.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cols,"1fr "))))], null)),styles)),cljs.core.map_indexed.call(null,((function (map__41570,map__41570__$1,rows,cols,styles){
return (function (p1__41566_SHARP_,p2__41565_SHARP_){
return cljs.core.with_meta.call(null,p2__41565_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__41566_SHARP_], null));
});})(map__41570,map__41570__$1,rows,cols,styles))
,content)], null);
});

velho_ds.organisms.grid.grid_wrap.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
velho_ds.organisms.grid.grid_wrap.cljs$lang$applyTo = (function (seq41567){
var G__41568 = cljs.core.first.call(null,seq41567);
var seq41567__$1 = cljs.core.next.call(null,seq41567);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41568,seq41567__$1);
});

velho_ds.organisms.grid.grid_cell = (function velho_ds$organisms$grid$grid_cell(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41584 = arguments.length;
var i__4500__auto___41585 = (0);
while(true){
if((i__4500__auto___41585 < len__4499__auto___41584)){
args__4502__auto__.push((arguments[i__4500__auto___41585]));

var G__41586 = (i__4500__auto___41585 + (1));
i__4500__auto___41585 = G__41586;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return velho_ds.organisms.grid.grid_cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

velho_ds.organisms.grid.grid_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__41581,content){
var map__41582 = p__41581;
var map__41582__$1 = ((((!((map__41582 == null)))?(((((map__41582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41582):map__41582);
var options = map__41582__$1;
var row_start = cljs.core.get.call(null,map__41582__$1,new cljs.core.Keyword(null,"row-start","row-start",-1075739176));
var row_end = cljs.core.get.call(null,map__41582__$1,new cljs.core.Keyword(null,"row-end","row-end",231209112));
var col_start = cljs.core.get.call(null,map__41582__$1,new cljs.core.Keyword(null,"col-start","col-start",1350168236));
var col_end = cljs.core.get.call(null,map__41582__$1,new cljs.core.Keyword(null,"col-end","col-end",-306678491));
var styles = cljs.core.get.call(null,map__41582__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
if(cljs.core.map_QMARK_.call(null,options)){
var r_s = (cljs.core.truth_(row_start)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),row_start], null):null);
var r_e = (cljs.core.truth_(row_end)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),row_end], null):null);
var c_s = (cljs.core.truth_(col_start)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),col_start], null):null);
var c_e = (cljs.core.truth_(col_end)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),col_end], null):null);
var grid_spans = cljs.core.merge.call(null,r_s,r_e,c_s,c_e);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,cljs.core.merge.call(null,grid_spans,styles)),cljs.core.map_indexed.call(null,((function (r_s,r_e,c_s,c_e,grid_spans,map__41582,map__41582__$1,options,row_start,row_end,col_start,col_end,styles){
return (function (p1__41576_SHARP_,p2__41575_SHARP_){
return cljs.core.with_meta.call(null,p2__41575_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__41576_SHARP_], null));
});})(r_s,r_e,c_s,c_e,grid_spans,map__41582,map__41582__$1,options,row_start,row_end,col_start,col_end,styles))
,content)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),options,cljs.core.map_indexed.call(null,((function (map__41582,map__41582__$1,options,row_start,row_end,col_start,col_end,styles){
return (function (p1__41578_SHARP_,p2__41577_SHARP_){
return cljs.core.with_meta.call(null,p2__41577_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__41578_SHARP_], null));
});})(map__41582,map__41582__$1,options,row_start,row_end,col_start,col_end,styles))
,content)], null);
}
});

velho_ds.organisms.grid.grid_cell.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
velho_ds.organisms.grid.grid_cell.cljs$lang$applyTo = (function (seq41579){
var G__41580 = cljs.core.first.call(null,seq41579);
var seq41579__$1 = cljs.core.next.call(null,seq41579);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41580,seq41579__$1);
});

