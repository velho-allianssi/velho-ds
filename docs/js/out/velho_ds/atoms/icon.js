// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.atoms.icon');
goog.require('cljs.core');
goog.require('stylefy.core');
goog.require('velho_ds.atoms.style.icon');
velho_ds.atoms.icon.icon = (function velho_ds$atoms$icon$icon(p__42159){
var map__42160 = p__42159;
var map__42160__$1 = ((((!((map__42160 == null)))?(((((map__42160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42160):map__42160);
var name = cljs.core.get.call(null,map__42160__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var styles = cljs.core.get.call(null,map__42160__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),stylefy.core.use_style.call(null,cljs.core.merge.call(null,velho_ds.atoms.style.icon.icon,styles)),name], null);
});
