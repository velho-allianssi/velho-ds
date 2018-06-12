// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('velho_ds.organisms.grid');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('stylefy.core');
velho_ds.organisms.grid.style_grid = (function velho_ds$organisms$grid$style_grid(p__14194){
var map__14195 = p__14194;
var map__14195__$1 = ((((!((map__14195 == null)))?(((((map__14195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14195):map__14195);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14195__$1,cljs.core.cst$kw$rows);
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14195__$1,cljs.core.cst$kw$cols);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"grid",cljs.core.cst$kw$grid_DASH_template_DASH_rows,rows,cljs.core.cst$kw$grid_DASH_template_DASH_columns,cols], null);
});
velho_ds.organisms.grid.grid_wrap = (function velho_ds$organisms$grid$grid_wrap(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14204 = arguments.length;
var i__4500__auto___14205 = (0);
while(true){
if((i__4500__auto___14205 < len__4499__auto___14204)){
args__4502__auto__.push((arguments[i__4500__auto___14205]));

var G__14206 = (i__4500__auto___14205 + (1));
i__4500__auto___14205 = G__14206;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return velho_ds.organisms.grid.grid_wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

velho_ds.organisms.grid.grid_wrap.cljs$core$IFn$_invoke$arity$variadic = (function (p__14201,content){
var map__14202 = p__14201;
var map__14202__$1 = ((((!((map__14202 == null)))?(((((map__14202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14202):map__14202);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14202__$1,cljs.core.cst$kw$rows);
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14202__$1,cljs.core.cst$kw$cols);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14202__$1,cljs.core.cst$kw$style);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([velho_ds.organisms.grid.style_grid(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rows,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.butlast(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rows,"1fr ")))),cljs.core.cst$kw$cols,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.butlast(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cols,"1fr "))))], null)),style], 0))),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__14202,map__14202__$1,rows,cols,style){
return (function (p1__14198_SHARP_,p2__14197_SHARP_){
return cljs.core.with_meta(p2__14197_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__14198_SHARP_], null));
});})(map__14202,map__14202__$1,rows,cols,style))
,content)], null);
});

velho_ds.organisms.grid.grid_wrap.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
velho_ds.organisms.grid.grid_wrap.cljs$lang$applyTo = (function (seq14199){
var G__14200 = cljs.core.first(seq14199);
var seq14199__$1 = cljs.core.next(seq14199);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14200,seq14199__$1);
});

velho_ds.organisms.grid.grid_cell = (function velho_ds$organisms$grid$grid_cell(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14214 = arguments.length;
var i__4500__auto___14215 = (0);
while(true){
if((i__4500__auto___14215 < len__4499__auto___14214)){
args__4502__auto__.push((arguments[i__4500__auto___14215]));

var G__14216 = (i__4500__auto___14215 + (1));
i__4500__auto___14215 = G__14216;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return velho_ds.organisms.grid.grid_cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

velho_ds.organisms.grid.grid_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__14211,content){
var map__14212 = p__14211;
var map__14212__$1 = ((((!((map__14212 == null)))?(((((map__14212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14212):map__14212);
var row_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14212__$1,cljs.core.cst$kw$row_DASH_start);
var row_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14212__$1,cljs.core.cst$kw$row_DASH_end);
var col_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14212__$1,cljs.core.cst$kw$col_DASH_start);
var col_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14212__$1,cljs.core.cst$kw$col_DASH_end);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14212__$1,cljs.core.cst$kw$style);
var r_s = (cljs.core.truth_(row_start)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$grid_DASH_row_DASH_start,row_start], null):null);
var r_e = (cljs.core.truth_(row_end)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$grid_DASH_row_DASH_end,row_end], null):null);
var c_s = (cljs.core.truth_(col_start)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$grid_DASH_column_DASH_start,col_start], null):null);
var c_e = (cljs.core.truth_(col_end)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$grid_DASH_column_DASH_end,col_end], null):null);
var grid_spans = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r_s,r_e,c_s,c_e], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([grid_spans,style], 0))),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (r_s,r_e,c_s,c_e,grid_spans,map__14212,map__14212__$1,row_start,row_end,col_start,col_end,style){
return (function (p1__14208_SHARP_,p2__14207_SHARP_){
return cljs.core.with_meta(p2__14207_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__14208_SHARP_], null));
});})(r_s,r_e,c_s,c_e,grid_spans,map__14212,map__14212__$1,row_start,row_end,col_start,col_end,style))
,content)], null);
});

velho_ds.organisms.grid.grid_cell.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
velho_ds.organisms.grid.grid_cell.cljs$lang$applyTo = (function (seq14209){
var G__14210 = cljs.core.first(seq14209);
var seq14209__$1 = cljs.core.next(seq14209);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14210,seq14209__$1);
});

