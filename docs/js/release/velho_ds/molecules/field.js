// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('velho_ds.molecules.field');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('velho_ds.molecules.style.field');
velho_ds.molecules.field.merge_styles = (function velho_ds$molecules$field$merge_styles(a,b){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(a),cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(b)], 0))], null);
});
velho_ds.molecules.field.keyvalue = (function velho_ds$molecules$field$keyvalue(p__14249){
var map__14250 = p__14249;
var map__14250__$1 = ((((!((map__14250 == null)))?(((((map__14250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14250):map__14250);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14250__$1,cljs.core.cst$kw$content);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14250__$1,cljs.core.cst$kw$label);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(velho_ds.molecules.style.field.keyvalue_label),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(velho_ds.molecules.style.field.keyvalue_content),content], null)], null);
});
velho_ds.molecules.field.input_field = (function velho_ds$molecules$field$input_field(p__14253){
var map__14254 = p__14253;
var map__14254__$1 = ((((!((map__14254 == null)))?(((((map__14254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14254):map__14254);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14254__$1,cljs.core.cst$kw$content);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14254__$1,cljs.core.cst$kw$label);
var on_change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14254__$1,cljs.core.cst$kw$on_DASH_change_DASH_fn);
var input_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(content);
var update_and_send = ((function (input_text,map__14254,map__14254__$1,content,label,on_change_fn){
return (function (val){
cljs.core.reset_BANG_(input_text,val);

var G__14256 = cljs.core.deref(input_text);
return (on_change_fn.cljs$core$IFn$_invoke$arity$1 ? on_change_fn.cljs$core$IFn$_invoke$arity$1(G__14256) : on_change_fn.call(null,G__14256));
});})(input_text,map__14254,map__14254__$1,content,label,on_change_fn))
;
return ((function (input_text,update_and_send,map__14254,map__14254__$1,content,label,on_change_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(velho_ds.molecules.style.field.element),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(velho_ds.molecules.style.field.input_field,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$required,"required",cljs.core.cst$kw$on_DASH_change,((function (input_text,update_and_send,map__14254,map__14254__$1,content,label,on_change_fn){
return (function (p1__14252_SHARP_){
return update_and_send(p1__14252_SHARP_.target.value);
});})(input_text,update_and_send,map__14254,map__14254__$1,content,label,on_change_fn))
,cljs.core.cst$kw$value,cljs.core.deref(input_text)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(velho_ds.molecules.style.field.input_field_heading),label], null)], null)], null);
});
;})(input_text,update_and_send,map__14254,map__14254__$1,content,label,on_change_fn))
});
velho_ds.molecules.field.multiline_field = (function velho_ds$molecules$field$multiline_field(var_args){
var G__14258 = arguments.length;
switch (G__14258) {
case 1:
return velho_ds.molecules.field.multiline_field.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return velho_ds.molecules.field.multiline_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

velho_ds.molecules.field.multiline_field.cljs$core$IFn$_invoke$arity$1 = (function (content){
return velho_ds.molecules.field.multiline_field.cljs$core$IFn$_invoke$arity$2(content,null);
});

velho_ds.molecules.field.multiline_field.cljs$core$IFn$_invoke$arity$2 = (function (content,args){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(velho_ds.molecules.style.field.element),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(velho_ds.molecules.style.field.text_field,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,"required"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(velho_ds.molecules.style.field.input_field_heading),content], null)], null)], null);
});

velho_ds.molecules.field.multiline_field.cljs$lang$maxFixedArity = 2;

velho_ds.molecules.field.dropdown_menu = (function velho_ds$molecules$field$dropdown_menu(p__14262){
var map__14263 = p__14262;
var map__14263__$1 = ((((!((map__14263 == null)))?(((((map__14263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14263):map__14263);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14263__$1,cljs.core.cst$kw$heading);
var selected_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14263__$1,cljs.core.cst$kw$selected_DASH_fn);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14263__$1,cljs.core.cst$kw$options);
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14263__$1,cljs.core.cst$kw$default_DASH_value);
var no_selection_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14263__$1,cljs.core.cst$kw$no_DASH_selection_DASH_text);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(velho_ds.molecules.style.field.element),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(velho_ds.molecules.style.field.dropdown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (map__14263,map__14263__$1,heading,selected_fn,options,default_value,no_selection_text){
return (function (p1__14260_SHARP_){
var G__14265 = p1__14260_SHARP_.target.value;
return (selected_fn.cljs$core$IFn$_invoke$arity$1 ? selected_fn.cljs$core$IFn$_invoke$arity$1(G__14265) : selected_fn.call(null,G__14265));
});})(map__14263,map__14263__$1,heading,selected_fn,options,default_value,no_selection_text))
], null)),((cljs.core.not(default_value))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,"value",cljs.core.cst$kw$selected,"selected",cljs.core.cst$kw$disabled,"disabled"], null),no_selection_text], null):null),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(velho_ds.molecules.style.field.dropdown)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__14263,map__14263__$1,heading,selected_fn,options,default_value,no_selection_text){
return (function (p1__14261_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$option,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__14261_SHARP_)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default_value,p1__14261_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$selected,"selected"], null):null)], 0)),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p1__14261_SHARP_)],null));
});})(map__14263,map__14263__$1,heading,selected_fn,options,default_value,no_selection_text))
,options)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(velho_ds.molecules.style.field.dropdown_heading),heading], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(velho_ds.molecules.style.field.icon),"arrow_drop_down"], null)], null)], null);
});
