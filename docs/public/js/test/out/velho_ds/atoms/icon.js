// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.atoms.icon');
goog.require('cljs.core');
goog.require('stylefy.core');
goog.require('velho_ds.tokens.color');
goog.require('velho_ds.atoms.style.icon');
velho_ds.atoms.icon.icon = (function velho_ds$atoms$icon$icon(p__41572){
var map__41573 = p__41572;
var map__41573__$1 = ((((!((map__41573 == null)))?(((((map__41573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41573):map__41573);
var name = cljs.core.get.call(null,map__41573__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var styles = cljs.core.get.call(null,map__41573__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),(cljs.core.truth_(styles)?stylefy.core.use_style.call(null,styles):stylefy.core.use_style.call(null,velho_ds.atoms.style.icon.icon)),name], null);
});
velho_ds.atoms.icon.clickable = (function velho_ds$atoms$icon$clickable(p__41575){
var map__41576 = p__41575;
var map__41576__$1 = ((((!((map__41576 == null)))?(((((map__41576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41576):map__41576);
var name = cljs.core.get.call(null,map__41576__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var styles = cljs.core.get.call(null,map__41576__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
var on_click_fn = cljs.core.get.call(null,map__41576__$1,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852));
var disabled = cljs.core.get.call(null,map__41576__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
if(cljs.core.truth_(name)){
} else {
throw (new Error("Assert failed: name"));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.call(null,cljs.core.merge.call(null,(cljs.core.truth_(disabled)?velho_ds.atoms.style.icon.clickable_disabled:velho_ds.atoms.style.icon.clickable),styles),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(disabled)?disabled:false),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_fn], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),stylefy.core.use_sub_style.call(null,cljs.core.merge.call(null,velho_ds.atoms.style.icon.clickable,styles),new cljs.core.Keyword(null,"i","i",-1386841315)),name], null)], null);
});
velho_ds.atoms.icon.circle = (function velho_ds$atoms$icon$circle(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41583 = arguments.length;
var i__4500__auto___41584 = (0);
while(true){
if((i__4500__auto___41584 < len__4499__auto___41583)){
args__4502__auto__.push((arguments[i__4500__auto___41584]));

var G__41585 = (i__4500__auto___41584 + (1));
i__4500__auto___41584 = G__41585;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return velho_ds.atoms.icon.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

velho_ds.atoms.icon.circle.cljs$core$IFn$_invoke$arity$variadic = (function (p__41580,content){
var map__41581 = p__41580;
var map__41581__$1 = ((((!((map__41581 == null)))?(((((map__41581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41581):map__41581);
var color = cljs.core.get.call(null,map__41581__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var inner_color = cljs.core.get.call(null,map__41581__$1,new cljs.core.Keyword(null,"inner-color","inner-color",703605972));
var width = cljs.core.get.call(null,map__41581__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__41581__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(width)?width:"2rem"),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(height)?height:"2rem"),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(color)?color:velho_ds.tokens.color.color_pacific),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 32 32"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.a","circle.a",-685391241),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"16",new cljs.core.Keyword(null,"cy","cy",755331060),"16",new cljs.core.Keyword(null,"cx","cx",1272694324),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.b","circle.b",-875064529),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"r","r",-471384190),"12",new cljs.core.Keyword(null,"cy","cy",755331060),"16",new cljs.core.Keyword(null,"cx","cx",1272694324),"16",new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(inner_color)?inner_color:"none"),new cljs.core.Keyword(null,"stroke","stroke",1741823555),velho_ds.tokens.color.color_white,new cljs.core.Keyword(null,"stroke-miterlimit","stroke-miterlimit",1151270808),(10),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px"], null)], null),content], null);
});

velho_ds.atoms.icon.circle.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
velho_ds.atoms.icon.circle.cljs$lang$applyTo = (function (seq41578){
var G__41579 = cljs.core.first.call(null,seq41578);
var seq41578__$1 = cljs.core.next.call(null,seq41578);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41579,seq41578__$1);
});

velho_ds.atoms.icon.circle_single = (function velho_ds$atoms$icon$circle_single(p__41586){
var map__41587 = p__41586;
var map__41587__$1 = ((((!((map__41587 == null)))?(((((map__41587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41587):map__41587);
var icon_args = map__41587__$1;
var color = cljs.core.get.call(null,map__41587__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var inner_color = cljs.core.get.call(null,map__41587__$1,new cljs.core.Keyword(null,"inner-color","inner-color",703605972));
var width = cljs.core.get.call(null,map__41587__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__41587__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.circle,cljs.core.merge.call(null,icon_args,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(color)?color:velho_ds.tokens.color.color_pacific_light)], null))], null);
});
velho_ds.atoms.icon.circle_halfgroup = (function velho_ds$atoms$icon$circle_halfgroup(p__41589){
var map__41590 = p__41589;
var map__41590__$1 = ((((!((map__41590 == null)))?(((((map__41590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41590):map__41590);
var icon_args = map__41590__$1;
var color = cljs.core.get.call(null,map__41590__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var inner_color = cljs.core.get.call(null,map__41590__$1,new cljs.core.Keyword(null,"inner-color","inner-color",703605972));
var width = cljs.core.get.call(null,map__41590__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__41590__$1,new cljs.core.Keyword(null,"height","height",1025178622));
cljs.core.println.call(null,icon_args);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.circle,cljs.core.merge.call(null,icon_args,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(color)?color:velho_ds.tokens.color.color_pacific)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),velho_ds.tokens.color.color_white,new cljs.core.Keyword(null,"d","d",1972142424),"M16,9.3c-3.7,0-6.7,3-6.7,6.7s3,6.7,6.7,6.7s6.7-3,6.7-6.7S19.7,9.3,16,9.3L16,9.3z M13.3,19.7  c-0.9,0-1.7-0.7-1.7-1.7s0.7-1.7,1.7-1.7c0.9,0,1.7,0.7,1.7,1.7S14.3,19.7,13.3,19.7L13.3,19.7z M14.3,13.3c0-0.9,0.7-1.7,1.7-1.7  s1.7,0.7,1.7,1.7c0,0.9-0.7,1.7-1.7,1.7S14.3,14.3,14.3,13.3L14.3,13.3z M18.7,19.7c-0.9,0-1.7-0.7-1.7-1.7s0.7-1.7,1.7-1.7  c0.9,0,1.7,0.7,1.7,1.7S19.6,19.7,18.7,19.7L18.7,19.7z"], null)], null)], null);
});
velho_ds.atoms.icon.circle_group = (function velho_ds$atoms$icon$circle_group(p__41592){
var map__41593 = p__41592;
var map__41593__$1 = ((((!((map__41593 == null)))?(((((map__41593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41593):map__41593);
var icon_args = map__41593__$1;
var color = cljs.core.get.call(null,map__41593__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var inner_color = cljs.core.get.call(null,map__41593__$1,new cljs.core.Keyword(null,"inner-color","inner-color",703605972));
var width = cljs.core.get.call(null,map__41593__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__41593__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.circle,cljs.core.merge.call(null,icon_args,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(color)?color:velho_ds.tokens.color.color_pacific_dark)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),velho_ds.tokens.color.color_white,new cljs.core.Keyword(null,"d","d",1972142424),"M14.7,16c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3  C16,16.6,15.4,16,14.7,16L14.7,16z M12,13.3c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3  C13.3,13.9,12.7,13.3,12,13.3L12,13.3z M12,18.7c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3S12.7,18.7,12,18.7L12,18.7  z M20,13.3c0.7,0,1.3-0.6,1.3-1.3s-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3S19.3,13.3,20,13.3L20,13.3z M17.3,18.7c-0.7,0-1.3,0.6-1.3,1.3  s0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3S18.1,18.7,17.3,18.7L17.3,18.7z M20,16c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3  s1.3-0.6,1.3-1.3C21.3,16.6,20.7,16,20,16L20,16z M17.3,13.3c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3  C18.7,13.9,18.1,13.3,17.3,13.3L17.3,13.3z M14.7,10.7c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3  S15.4,10.7,14.7,10.7L14.7,10.7z"], null)], null)], null);
});
