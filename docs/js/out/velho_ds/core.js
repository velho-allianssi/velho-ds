// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('velho_ds.pages.main');
goog.require('velho_ds.atoms.font');
goog.require('velho_ds.design_system');
velho_ds.core.nav = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"atoms","atoms",-392247738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["main","secondary"], null)], null),new cljs.core.Keyword(null,"molecules","molecules",1746938238),null,new cljs.core.Keyword(null,"organisms","organisms",-239799703),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),null,new cljs.core.Keyword(null,"navigation","navigation",369417),null], null)], null));
velho_ds.core.mount_root = (function velho_ds$core$mount_root(){
velho_ds.atoms.font.font_styles.call(null);

return reagent.core.render.call(null,velho_ds.pages.main.page.call(null,velho_ds.core.nav),document.getElementById("app"));
});
velho_ds.core.init_BANG_ = (function velho_ds$core$init_BANG_(){
velho_ds.design_system.init_ds_BANG_.call(null);

return velho_ds.core.mount_root.call(null);
});
