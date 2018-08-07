// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.testutils');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('reagent.interop');
goog.require('cljs_react_test.utils');
velho_ds.testutils.container = cljs.core.atom.call(null,null);
velho_ds.testutils.container_fixture = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
return cljs.core.reset_BANG_.call(null,velho_ds.testutils.container,cljs_react_test.utils.new_container_BANG_.call(null));
}),new cljs.core.Keyword(null,"after","after",594996914),(function (){
cljs_react_test.utils.unmount_BANG_.call(null,cljs.core.deref.call(null,velho_ds.testutils.container));

return cljs.core.reset_BANG_.call(null,velho_ds.testutils.container,null);
})], null);
velho_ds.testutils.sel1 = (function velho_ds$testutils$sel1(selector){
return cljs.core.deref.call(null,velho_ds.testutils.container).querySelector(dommy.core.selector.call(null,selector));
});
velho_ds.testutils.sel = (function velho_ds$testutils$sel(selector){
return dommy.utils.__GT_Array.call(null,cljs.core.deref.call(null,velho_ds.testutils.container).querySelectorAll(dommy.core.selector.call(null,selector)));
});
velho_ds.testutils.style_definition = (function velho_ds$testutils$style_definition(dom_obj,property){
return window.getComputedStyle(dom_obj).getPropertyValue(property);
});
