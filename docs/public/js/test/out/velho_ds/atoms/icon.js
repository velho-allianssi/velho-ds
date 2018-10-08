// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.atoms.icon');
goog.require('cljs.core');
goog.require('stylefy.core');
goog.require('velho_ds.atoms.style.icon');
velho_ds.atoms.icon.icon = (function velho_ds$atoms$icon$icon(p__41570){
var map__41571 = p__41570;
var map__41571__$1 = ((((!((map__41571 == null)))?(((((map__41571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41571):map__41571);
var name = cljs.core.get.call(null,map__41571__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var styles = cljs.core.get.call(null,map__41571__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),(cljs.core.truth_(styles)?stylefy.core.use_style.call(null,styles):stylefy.core.use_style.call(null,velho_ds.atoms.style.icon.icon)),name], null);
});
velho_ds.atoms.icon.clickable = (function velho_ds$atoms$icon$clickable(p__41573){
var map__41574 = p__41573;
var map__41574__$1 = ((((!((map__41574 == null)))?(((((map__41574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41574):map__41574);
var name = cljs.core.get.call(null,map__41574__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var styles = cljs.core.get.call(null,map__41574__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
var on_click_fn = cljs.core.get.call(null,map__41574__$1,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852));
var disabled = cljs.core.get.call(null,map__41574__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
if(cljs.core.truth_(name)){
} else {
throw (new Error("Assert failed: name"));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.call(null,cljs.core.merge.call(null,(cljs.core.truth_(disabled)?velho_ds.atoms.style.icon.clickable_disabled:velho_ds.atoms.style.icon.clickable),styles),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(disabled)?disabled:false),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_fn], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),stylefy.core.use_sub_style.call(null,cljs.core.merge.call(null,velho_ds.atoms.style.icon.clickable,styles),new cljs.core.Keyword(null,"i","i",-1386841315)),name], null)], null);
});
velho_ds.atoms.icon.type_icon_circle = (function velho_ds$atoms$icon$type_icon_circle(p__41576){
var map__41577 = p__41576;
var map__41577__$1 = ((((!((map__41577 == null)))?(((((map__41577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41577):map__41577);
var color = cljs.core.get.call(null,map__41577__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"2rem",new cljs.core.Keyword(null,"height","height",1025178622),"2rem",new cljs.core.Keyword(null,"fill","fill",883462889),color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewbox","viewbox",-1545612500),"0 0 32 32"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),".b{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:2px;}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"icon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.a","circle.a",-685391241),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"16",new cljs.core.Keyword(null,"cy","cy",755331060),"16",new cljs.core.Keyword(null,"cx","cx",1272694324),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.b","circle.b",-875064529),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"12",new cljs.core.Keyword(null,"cy","cy",755331060),"16",new cljs.core.Keyword(null,"cx","cx",1272694324),"16"], null)], null)], null);
});
