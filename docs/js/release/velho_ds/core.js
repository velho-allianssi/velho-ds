// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('velho_ds.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('velho_ds.pages.main');
goog.require('velho_ds.atoms.font');
goog.require('velho_ds.design_system');
velho_ds.core.nav = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$atoms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$buttons,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["main","secondary"], null)], null),cljs.core.cst$kw$molecules,null,cljs.core.cst$kw$organisms,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$heading,null,cljs.core.cst$kw$navigation,null], null)], null));
velho_ds.core.mount_root = (function velho_ds$core$mount_root(){
velho_ds.atoms.font.font_styles();

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(velho_ds.pages.main.page(velho_ds.core.nav),document.getElementById("app"));
});
velho_ds.core.init_BANG_ = (function velho_ds$core$init_BANG_(){
velho_ds.design_system.init_ds_BANG_();

return velho_ds.core.mount_root();
});
