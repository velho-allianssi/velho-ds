// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.atoms.area');
goog.require('cljs.core');
goog.require('velho_ds.atoms.style.area');
goog.require('velho_ds.atoms.icon');
goog.require('velho_ds.tools.style');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('velho_ds.design_system');
velho_ds.atoms.area.info = (function velho_ds$atoms$area$info(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43008 = arguments.length;
var i__4500__auto___43009 = (0);
while(true){
if((i__4500__auto___43009 < len__4499__auto___43008)){
args__4502__auto__.push((arguments[i__4500__auto___43009]));

var G__43010 = (i__4500__auto___43009 + (1));
i__4500__auto___43009 = G__43010;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return velho_ds.atoms.area.info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

velho_ds.atoms.area.info.cljs$core$IFn$_invoke$arity$variadic = (function (p__43005,content){
var map__43006 = p__43005;
var map__43006__$1 = ((((!((map__43006 == null)))?(((((map__43006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43006):map__43006);
var options = map__43006__$1;
var styles = cljs.core.get.call(null,map__43006__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
if(cljs.core.map_QMARK_.call(null,options)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,cljs.core.merge.call(null,velho_ds.atoms.style.area.info_area,styles)),cljs.core.map_indexed.call(null,((function (map__43006,map__43006__$1,options,styles){
return (function (p1__43000_SHARP_,p2__42999_SHARP_){
return cljs.core.with_meta.call(null,p2__42999_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__43000_SHARP_], null));
});})(map__43006,map__43006__$1,options,styles))
,content)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,velho_ds.atoms.style.area.info_area),options,cljs.core.map_indexed.call(null,((function (map__43006,map__43006__$1,options,styles){
return (function (p1__43002_SHARP_,p2__43001_SHARP_){
return cljs.core.with_meta.call(null,p2__43001_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__43002_SHARP_], null));
});})(map__43006,map__43006__$1,options,styles))
,content)], null);
}
});

velho_ds.atoms.area.info.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
velho_ds.atoms.area.info.cljs$lang$applyTo = (function (seq43003){
var G__43004 = cljs.core.first.call(null,seq43003);
var seq43003__$1 = cljs.core.next.call(null,seq43003);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43004,seq43003__$1);
});

velho_ds.atoms.area.dotted_area = (function velho_ds$atoms$area$dotted_area(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43018 = arguments.length;
var i__4500__auto___43019 = (0);
while(true){
if((i__4500__auto___43019 < len__4499__auto___43018)){
args__4502__auto__.push((arguments[i__4500__auto___43019]));

var G__43020 = (i__4500__auto___43019 + (1));
i__4500__auto___43019 = G__43020;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return velho_ds.atoms.area.dotted_area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

velho_ds.atoms.area.dotted_area.cljs$core$IFn$_invoke$arity$variadic = (function (p__43015,content){
var map__43016 = p__43015;
var map__43016__$1 = ((((!((map__43016 == null)))?(((((map__43016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43016):map__43016);
var label = cljs.core.get.call(null,map__43016__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,velho_ds.atoms.style.area.dotted_header),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,velho_ds.atoms.style.area.dotted_content),cljs.core.map_indexed.call(null,((function (map__43016,map__43016__$1,label){
return (function (p1__43012_SHARP_,p2__43011_SHARP_){
return cljs.core.with_meta.call(null,p2__43011_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__43012_SHARP_], null));
});})(map__43016,map__43016__$1,label))
,content)], null)], null);
});

velho_ds.atoms.area.dotted_area.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
velho_ds.atoms.area.dotted_area.cljs$lang$applyTo = (function (seq43013){
var G__43014 = cljs.core.first.call(null,seq43013);
var seq43013__$1 = cljs.core.next.call(null,seq43013);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43014,seq43013__$1);
});

velho_ds.atoms.area.add_to_files = (function velho_ds$atoms$area$add_to_files(filemap,item){
return cljs.core.assoc.call(null,filemap,cljs.core.fnil.call(null,cljs.core.inc,(0)).call(null,cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,filemap))),item);
});
velho_ds.atoms.area.drag_n_drop = (function velho_ds$atoms$area$drag_n_drop(p__43025){
var map__43026 = p__43025;
var map__43026__$1 = ((((!((map__43026 == null)))?(((((map__43026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43026):map__43026);
var on_change_fn = cljs.core.get.call(null,map__43026__$1,new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275));
var files = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var file_to_map = ((function (files,map__43026,map__43026__$1,on_change_fn){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),item.name,new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"file","file",-1269645878),item], null);
});})(files,map__43026,map__43026__$1,on_change_fn))
;
var get_files = ((function (files,file_to_map,map__43026,map__43026__$1,on_change_fn){
return (function (e){
((function (files,file_to_map,map__43026,map__43026__$1,on_change_fn){
return (function (p1__43023_SHARP_){
return cljs.core.reset_BANG_.call(null,files,p1__43023_SHARP_);
});})(files,file_to_map,map__43026,map__43026__$1,on_change_fn))
.call(null,((function (files,file_to_map,map__43026,map__43026__$1,on_change_fn){
return (function (p1__43022_SHARP_){
return cljs.core.reduce.call(null,velho_ds.atoms.area.add_to_files,cljs.core.deref.call(null,files),p1__43022_SHARP_);
});})(files,file_to_map,map__43026,map__43026__$1,on_change_fn))
.call(null,((function (files,file_to_map,map__43026,map__43026__$1,on_change_fn){
return (function (p1__43021_SHARP_){
return cljs.core.map.call(null,file_to_map,p1__43021_SHARP_);
});})(files,file_to_map,map__43026,map__43026__$1,on_change_fn))
.call(null,cljs.core.array_seq.call(null,e.files))));

return on_change_fn.call(null,cljs.core.deref.call(null,files));
});})(files,file_to_map,map__43026,map__43026__$1,on_change_fn))
;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,stylefy.core.use_style.call(null,velho_ds.atoms.style.area.drag_n_drop_helparea),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (files,file_to_map,get_files,map__43026,map__43026__$1,on_change_fn){
return (function (){
return cljs.core.deref.call(null,velho_ds.design_system.root_element).querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,["#file-input"].join('')))).click();
});})(files,file_to_map,get_files,map__43026,map__43026__$1,on_change_fn))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_sub_style.call(null,velho_ds.atoms.style.area.drag_n_drop_helparea,new cljs.core.Keyword(null,"p","p",151049309)),"Help Text"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"cloud_upload"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["file-input"].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"multiple","multiple",1244445549),"multiple",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (files,file_to_map,get_files,map__43026,map__43026__$1,on_change_fn){
return (function (p1__43024_SHARP_){
get_files.call(null,p1__43024_SHARP_.target);

return p1__43024_SHARP_.target.value = null;
});})(files,file_to_map,get_files,map__43026,map__43026__$1,on_change_fn))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null)], null)], null);
});
velho_ds.atoms.area.shadow_area = (function velho_ds$atoms$area$shadow_area(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43037 = arguments.length;
var i__4500__auto___43038 = (0);
while(true){
if((i__4500__auto___43038 < len__4499__auto___43037)){
args__4502__auto__.push((arguments[i__4500__auto___43038]));

var G__43039 = (i__4500__auto___43038 + (1));
i__4500__auto___43038 = G__43039;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return velho_ds.atoms.area.shadow_area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

velho_ds.atoms.area.shadow_area.cljs$core$IFn$_invoke$arity$variadic = (function (p__43034,content){
var map__43035 = p__43034;
var map__43035__$1 = ((((!((map__43035 == null)))?(((((map__43035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43035):map__43035);
var options = map__43035__$1;
var styles = cljs.core.get.call(null,map__43035__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
if(cljs.core.map_QMARK_.call(null,options)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,cljs.core.merge.call(null,velho_ds.atoms.style.area.shadow_area,styles)),cljs.core.map_indexed.call(null,((function (map__43035,map__43035__$1,options,styles){
return (function (p1__43029_SHARP_,p2__43028_SHARP_){
return cljs.core.with_meta.call(null,p2__43028_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__43029_SHARP_], null));
});})(map__43035,map__43035__$1,options,styles))
,content)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,velho_ds.atoms.style.area.shadow_area),options,cljs.core.map_indexed.call(null,((function (map__43035,map__43035__$1,options,styles){
return (function (p1__43031_SHARP_,p2__43030_SHARP_){
return cljs.core.with_meta.call(null,p2__43030_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__43031_SHARP_], null));
});})(map__43035,map__43035__$1,options,styles))
,content)], null);
}
});

velho_ds.atoms.area.shadow_area.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
velho_ds.atoms.area.shadow_area.cljs$lang$applyTo = (function (seq43032){
var G__43033 = cljs.core.first.call(null,seq43032);
var seq43032__$1 = cljs.core.next.call(null,seq43032);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43033,seq43032__$1);
});

