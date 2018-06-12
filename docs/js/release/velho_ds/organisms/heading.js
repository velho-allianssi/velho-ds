// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('velho_ds.organisms.heading');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('stylefy.core');
velho_ds.organisms.heading.header_style = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,"grid",cljs.core.cst$kw$grid_DASH_template_DASH_columns,"1fr",cljs.core.cst$kw$grid_DASH_template_DASH_rows,"1fr",cljs.core.cst$kw$color,"#FEFEFE",cljs.core.cst$kw$align_DASH_self,"center"], null);
velho_ds.organisms.heading.heading_style = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$justify_DASH_self,"start",cljs.core.cst$kw$align_DASH_self,"center",cljs.core.cst$kw$padding,"0 5px"], null);
velho_ds.organisms.heading.main = (function velho_ds$organisms$heading$main(content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(velho_ds.organisms.heading.header_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(velho_ds.organisms.heading.heading_style),content], null)], null);
});
