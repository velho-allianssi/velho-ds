// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.atoms.divider');
goog.require('cljs.core');
goog.require('velho_ds.atoms.style.divider');
goog.require('stylefy.core');
velho_ds.atoms.divider.default$ = (function velho_ds$atoms$divider$default(p__43052){
var map__43053 = p__43052;
var map__43053__$1 = ((((!((map__43053 == null)))?(((((map__43053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43053):map__43053);
var styles = cljs.core.get.call(null,map__43053__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,cljs.core.merge.call(null,velho_ds.atoms.style.divider.line,styles))], null);
});
