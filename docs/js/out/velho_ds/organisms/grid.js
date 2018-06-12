// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.organisms.grid');
goog.require('cljs.core');
goog.require('stylefy.core');
velho_ds.organisms.grid.style_grid = (function velho_ds$organisms$grid$style_grid(p__42128){
var map__42129 = p__42128;
var map__42129__$1 = ((((!((map__42129 == null)))?(((((map__42129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42129):map__42129);
var rows = cljs.core.get.call(null,map__42129__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.call(null,map__42129__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),rows,new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),cols], null);
});
velho_ds.organisms.grid.grid_wrap = (function velho_ds$organisms$grid$grid_wrap(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42138 = arguments.length;
var i__4500__auto___42139 = (0);
while(true){
if((i__4500__auto___42139 < len__4499__auto___42138)){
args__4502__auto__.push((arguments[i__4500__auto___42139]));

var G__42140 = (i__4500__auto___42139 + (1));
i__4500__auto___42139 = G__42140;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return velho_ds.organisms.grid.grid_wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

velho_ds.organisms.grid.grid_wrap.cljs$core$IFn$_invoke$arity$variadic = (function (p__42135,content){
var map__42136 = p__42135;
var map__42136__$1 = ((((!((map__42136 == null)))?(((((map__42136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42136):map__42136);
var rows = cljs.core.get.call(null,map__42136__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.call(null,map__42136__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var style = cljs.core.get.call(null,map__42136__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,cljs.core.merge.call(null,velho_ds.organisms.grid.style_grid.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.apply.call(null,cljs.core.str,cljs.core.butlast.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,rows,"1fr ")))),new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.apply.call(null,cljs.core.str,cljs.core.butlast.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cols,"1fr "))))], null)),style)),cljs.core.map_indexed.call(null,((function (map__42136,map__42136__$1,rows,cols,style){
return (function (p1__42132_SHARP_,p2__42131_SHARP_){
return cljs.core.with_meta.call(null,p2__42131_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__42132_SHARP_], null));
});})(map__42136,map__42136__$1,rows,cols,style))
,content)], null);
});

velho_ds.organisms.grid.grid_wrap.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
velho_ds.organisms.grid.grid_wrap.cljs$lang$applyTo = (function (seq42133){
var G__42134 = cljs.core.first.call(null,seq42133);
var seq42133__$1 = cljs.core.next.call(null,seq42133);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42134,seq42133__$1);
});

velho_ds.organisms.grid.grid_cell = (function velho_ds$organisms$grid$grid_cell(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42148 = arguments.length;
var i__4500__auto___42149 = (0);
while(true){
if((i__4500__auto___42149 < len__4499__auto___42148)){
args__4502__auto__.push((arguments[i__4500__auto___42149]));

var G__42150 = (i__4500__auto___42149 + (1));
i__4500__auto___42149 = G__42150;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return velho_ds.organisms.grid.grid_cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

velho_ds.organisms.grid.grid_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__42145,content){
var map__42146 = p__42145;
var map__42146__$1 = ((((!((map__42146 == null)))?(((((map__42146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42146):map__42146);
var row_start = cljs.core.get.call(null,map__42146__$1,new cljs.core.Keyword(null,"row-start","row-start",-1075739176));
var row_end = cljs.core.get.call(null,map__42146__$1,new cljs.core.Keyword(null,"row-end","row-end",231209112));
var col_start = cljs.core.get.call(null,map__42146__$1,new cljs.core.Keyword(null,"col-start","col-start",1350168236));
var col_end = cljs.core.get.call(null,map__42146__$1,new cljs.core.Keyword(null,"col-end","col-end",-306678491));
var style = cljs.core.get.call(null,map__42146__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var r_s = (cljs.core.truth_(row_start)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),row_start], null):null);
var r_e = (cljs.core.truth_(row_end)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),row_end], null):null);
var c_s = (cljs.core.truth_(col_start)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),col_start], null):null);
var c_e = (cljs.core.truth_(col_end)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),col_end], null):null);
var grid_spans = cljs.core.merge.call(null,r_s,r_e,c_s,c_e);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,cljs.core.merge.call(null,grid_spans,style)),cljs.core.map_indexed.call(null,((function (r_s,r_e,c_s,c_e,grid_spans,map__42146,map__42146__$1,row_start,row_end,col_start,col_end,style){
return (function (p1__42142_SHARP_,p2__42141_SHARP_){
return cljs.core.with_meta.call(null,p2__42141_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__42142_SHARP_], null));
});})(r_s,r_e,c_s,c_e,grid_spans,map__42146,map__42146__$1,row_start,row_end,col_start,col_end,style))
,content)], null);
});

velho_ds.organisms.grid.grid_cell.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
velho_ds.organisms.grid.grid_cell.cljs$lang$applyTo = (function (seq42143){
var G__42144 = cljs.core.first.call(null,seq42143);
var seq42143__$1 = cljs.core.next.call(null,seq42143);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42144,seq42143__$1);
});

