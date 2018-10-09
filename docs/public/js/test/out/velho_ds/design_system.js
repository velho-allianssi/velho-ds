// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.design_system');
goog.require('cljs.core');
goog.require('stylefy.core');
velho_ds.design_system.root_element = cljs.core.atom.call(null,null);
velho_ds.design_system.init_ds_BANG_ = (function velho_ds$design_system$init_ds_BANG_(dom_element){
cljs.core.reset_BANG_.call(null,velho_ds.design_system.root_element,dom_element);

return stylefy.core.init.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"use-caching?","use-caching?",427588313),false,new cljs.core.Keyword(null,"multi-instance","multi-instance",-1525956512),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-node","base-node",-275497090),cljs.core.deref.call(null,velho_ds.design_system.root_element)], null)], null));
});
