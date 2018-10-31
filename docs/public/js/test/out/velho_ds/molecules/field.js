// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.molecules.field');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('velho_ds.tokens.color');
goog.require('velho_ds.tokens.spacing');
goog.require('velho_ds.tokens.font_size');
goog.require('velho_ds.molecules.style.field');
goog.require('velho_ds.atoms.icon');
goog.require('velho_ds.design_system');
goog.require('velho_ds.atoms.area');
goog.require('velho_ds.organisms.grid');
goog.require('velho_ds.atoms.divider');
velho_ds.molecules.field.add_event_listener = (function velho_ds$molecules$field$add_event_listener(var_args){
var G__43058 = arguments.length;
switch (G__43058) {
case 2:
return velho_ds.molecules.field.add_event_listener.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return velho_ds.molecules.field.add_event_listener.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

velho_ds.molecules.field.add_event_listener.cljs$core$IFn$_invoke$arity$2 = (function (event,func){
return velho_ds.molecules.field.add_event_listener.call(null,cljs.core.deref.call(null,velho_ds.design_system.root_element),event,func);
});

velho_ds.molecules.field.add_event_listener.cljs$core$IFn$_invoke$arity$3 = (function (element,event,func){
return dommy.core.listen_BANG_.call(null,element,event,func);
});

velho_ds.molecules.field.add_event_listener.cljs$lang$maxFixedArity = 3;

velho_ds.molecules.field.remove_event_listener = (function velho_ds$molecules$field$remove_event_listener(var_args){
var G__43061 = arguments.length;
switch (G__43061) {
case 2:
return velho_ds.molecules.field.remove_event_listener.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return velho_ds.molecules.field.remove_event_listener.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

velho_ds.molecules.field.remove_event_listener.cljs$core$IFn$_invoke$arity$2 = (function (event,func){
return velho_ds.molecules.field.remove_event_listener.call(null,cljs.core.deref.call(null,velho_ds.design_system.root_element),event,func);
});

velho_ds.molecules.field.remove_event_listener.cljs$core$IFn$_invoke$arity$3 = (function (element,event,func){
return dommy.core.unlisten_BANG_.call(null,element,event,func);
});

velho_ds.molecules.field.remove_event_listener.cljs$lang$maxFixedArity = 3;

velho_ds.molecules.field.search_in_list = (function velho_ds$molecules$field$search_in_list(collection,search_word){
return cljs.core.filter.call(null,(function (p1__43063_SHARP_){
return clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,p1__43063_SHARP_),search_word);
}),collection);
});
velho_ds.molecules.field.element_has_class_QMARK_ = (function velho_ds$molecules$field$element_has_class_QMARK_(e,classname){
var target = e.target;
return cljs.core.empty_QMARK_.call(null,velho_ds.molecules.field.search_in_list.call(null,clojure.string.split.call(null,target.className,/ /),classname));
});
velho_ds.molecules.field.create_keys = (function velho_ds$molecules$field$create_keys(data){
var index = cljs.core.atom.call(null,(-1));
return cljs.core.map.call(null,((function (index){
return (function (p1__43064_SHARP_){
return cljs.core.assoc.call(null,p1__43064_SHARP_,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.map.call(null,((function (index){
return (function (item){
cljs.core.reset_BANG_.call(null,index,((1) + cljs.core.deref.call(null,index)));

return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.deref.call(null,index));
});})(index))
,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(p1__43064_SHARP_)));
});})(index))
,data);
});
velho_ds.molecules.field.remove_from_vector = (function velho_ds$molecules$field$remove_from_vector(vect,values){
if(cljs.core.vector_QMARK_.call(null,vect)){
} else {
throw (new Error("Assert failed: (vector? vect)"));
}

var remove_from = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,vect);
var to_be_removed = ((cljs.core.coll_QMARK_.call(null,values))?cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,values):cljs.core.PersistentHashSet.createAsIfByAssoc([values]));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,clojure.set.difference.call(null,remove_from,to_be_removed));
});
velho_ds.molecules.field.list_item = (function velho_ds$molecules$field$list_item(p__43065){
var map__43066 = p__43065;
var map__43066__$1 = ((((!((map__43066 == null)))?(((((map__43066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43066):map__43066);
var on_click_fn = cljs.core.get.call(null,map__43066__$1,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852));
var content = cljs.core.get.call(null,map__43066__$1,new cljs.core.Keyword(null,"content","content",15833224));
var is_selected_QMARK_ = cljs.core.get.call(null,map__43066__$1,new cljs.core.Keyword(null,"is-selected?","is-selected?",694061043));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(is_selected_QMARK_)?velho_ds.tokens.color.color_primary:velho_ds.tokens.color.color_neutral_1),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(is_selected_QMARK_)?velho_ds.tokens.color.color_neutral_2:velho_ds.tokens.color.color_black),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),velho_ds.tokens.color.color_primary,new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.color_neutral_2], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__43066,map__43066__$1,on_click_fn,content,is_selected_QMARK_){
return (function (){
return on_click_fn.call(null,content);
});})(map__43066,map__43066__$1,on_click_fn,content,is_selected_QMARK_))
,new cljs.core.Keyword(null,"key","key",-1516042587),content,new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),content], null);
});
velho_ds.molecules.field.selected_list_items = (function velho_ds$molecules$field$selected_list_items(p__43068){
var map__43069 = p__43068;
var map__43069__$1 = ((((!((map__43069 == null)))?(((((map__43069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43069):map__43069);
var on_click_fn = cljs.core.get.call(null,map__43069__$1,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852));
var content = cljs.core.get.call(null,map__43069__$1,new cljs.core.Keyword(null,"content","content",15833224));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),velho_ds.tokens.color.color_neutral_5,new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.color_neutral_2,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 4px 4px 0px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.5rem"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (map__43069,map__43069__$1,on_click_fn,content){
return (function (){
return on_click_fn.call(null,content);
});})(map__43069,map__43069__$1,on_click_fn,content))
,new cljs.core.Keyword(null,"key","key",-1516042587),content,new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.5rem"], null)),content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"cancel",new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),"3px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem",new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null)], null)], null)], null);
});
velho_ds.molecules.field.label_styles = (function velho_ds$molecules$field$label_styles(error_messages,state,placeholder,label){
if(cljs.core.truth_(cljs.core.first.call(null,error_messages))){
return stylefy.core.use_style.call(null,cljs.core.merge.call(null,velho_ds.molecules.style.field.input_field_label_error,(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"is-focused","is-focused",347746829).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return placeholder;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),velho_ds.tokens.font_size.font_size_small], null):null)));
} else {
return stylefy.core.use_style.call(null,cljs.core.merge.call(null,(cljs.core.truth_((function (){var and__3911__auto__ = label;
if(cljs.core.truth_(and__3911__auto__)){
return placeholder;
} else {
return and__3911__auto__;
}
})())?velho_ds.molecules.style.field.input_field_label_static:velho_ds.molecules.style.field.input_field_label),(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"is-focused","is-focused",347746829).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"has-value","has-value",977510569).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return placeholder;
}
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),velho_ds.tokens.font_size.font_size_small], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"is-focused","is-focused",347746829).cljs$core$IFn$_invoke$arity$1(state))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.color_primary], null):null)));
}
});
velho_ds.molecules.field.keyvalue = (function velho_ds$molecules$field$keyvalue(p__43071){
var map__43072 = p__43071;
var map__43072__$1 = ((((!((map__43072 == null)))?(((((map__43072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43072):map__43072);
var label = cljs.core.get.call(null,map__43072__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var content = cljs.core.get.call(null,map__43072__$1,new cljs.core.Keyword(null,"content","content",15833224));
var styles = cljs.core.get.call(null,map__43072__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,styles),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.keyvalue_label),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.keyvalue_content),content], null)], null);
});
velho_ds.molecules.field.iconvalue = (function velho_ds$molecules$field$iconvalue(p__43074){
var map__43075 = p__43074;
var map__43075__$1 = ((((!((map__43075 == null)))?(((((map__43075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43075):map__43075);
var icon = cljs.core.get.call(null,map__43075__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var content = cljs.core.get.call(null,map__43075__$1,new cljs.core.Keyword(null,"content","content",15833224));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.iconvalue),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),icon,new cljs.core.Keyword(null,"styles","styles",1954480375),velho_ds.molecules.style.field.iconvalue_icon], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.iconvalue_value),content], null)], null);
});
velho_ds.molecules.field.create_input_field = (function velho_ds$molecules$field$create_input_field(p__43078,input_type){
var map__43079 = p__43078;
var map__43079__$1 = ((((!((map__43079 == null)))?(((((map__43079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43079):map__43079);
var label = cljs.core.get.call(null,map__43079__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var content = cljs.core.get.call(null,map__43079__$1,new cljs.core.Keyword(null,"content","content",15833224));
var placeholder = cljs.core.get.call(null,map__43079__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var icon_click_fn = cljs.core.get.call(null,map__43079__$1,new cljs.core.Keyword(null,"icon-click-fn","icon-click-fn",1693089025));
var on_change_fn = cljs.core.get.call(null,map__43079__$1,new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275));
var on_blur_fn = cljs.core.get.call(null,map__43079__$1,new cljs.core.Keyword(null,"on-blur-fn","on-blur-fn",1587769433));
var on_focus_fn = cljs.core.get.call(null,map__43079__$1,new cljs.core.Keyword(null,"on-focus-fn","on-focus-fn",-570630384));
var styles = cljs.core.get.call(null,map__43079__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
var input_text = reagent.core.atom.call(null,content);
var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-focused","is-focused",347746829),false,new cljs.core.Keyword(null,"has-value","has-value",977510569),!((cljs.core.deref.call(null,input_text) == null))], null));
var change = ((function (input_text,state,map__43079,map__43079__$1,label,content,placeholder,icon_click_fn,on_change_fn,on_blur_fn,on_focus_fn,styles){
return (function (val){
cljs.core.reset_BANG_.call(null,input_text,val);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"has-value","has-value",977510569),!(((cljs.core._EQ_.call(null,val,"")) || ((val == null)))));

if(cljs.core.truth_(on_change_fn)){
return on_change_fn.call(null,cljs.core.deref.call(null,input_text));
} else {
return null;
}
});})(input_text,state,map__43079,map__43079__$1,label,content,placeholder,icon_click_fn,on_change_fn,on_blur_fn,on_focus_fn,styles))
;
var blur = ((function (input_text,state,change,map__43079,map__43079__$1,label,content,placeholder,icon_click_fn,on_change_fn,on_blur_fn,on_focus_fn,styles){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"is-focused","is-focused",347746829),false);

if(cljs.core.truth_(on_blur_fn)){
return on_blur_fn.call(null,cljs.core.deref.call(null,input_text));
} else {
return null;
}
});})(input_text,state,change,map__43079,map__43079__$1,label,content,placeholder,icon_click_fn,on_change_fn,on_blur_fn,on_focus_fn,styles))
;
var focus = ((function (input_text,state,change,blur,map__43079,map__43079__$1,label,content,placeholder,icon_click_fn,on_change_fn,on_blur_fn,on_focus_fn,styles){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"is-focused","is-focused",347746829),true);

if(cljs.core.truth_(on_focus_fn)){
return on_focus_fn.call(null,cljs.core.deref.call(null,input_text));
} else {
return null;
}
});})(input_text,state,change,blur,map__43079,map__43079__$1,label,content,placeholder,icon_click_fn,on_change_fn,on_blur_fn,on_focus_fn,styles))
;
return ((function (input_text,state,change,blur,focus,map__43079,map__43079__$1,label,content,placeholder,icon_click_fn,on_change_fn,on_blur_fn,on_focus_fn,styles){
return (function (p__43081){
var map__43082 = p__43081;
var map__43082__$1 = ((((!((map__43082 == null)))?(((((map__43082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43082):map__43082);
var icon = cljs.core.get.call(null,map__43082__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var error_messages = cljs.core.get.call(null,map__43082__$1,new cljs.core.Keyword(null,"error-messages","error-messages",2083896366));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vds-input-field","div.vds-input-field",353231436),stylefy.core.use_style.call(null,styles),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.element),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),velho_ds.molecules.field.label_styles.call(null,error_messages,cljs.core.deref.call(null,state),placeholder,label),label], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_type,stylefy.core.use_style.call(null,cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.first.call(null,error_messages))?velho_ds.molecules.style.field.input_field_error:velho_ds.molecules.style.field.input_field),(cljs.core.truth_(icon)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"2rem"], null):null),((cljs.core.not.call(null,label))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null):null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__43082,map__43082__$1,icon,error_messages,input_text,state,change,blur,focus,map__43079,map__43079__$1,label,content,placeholder,icon_click_fn,on_change_fn,on_blur_fn,on_focus_fn,styles){
return (function (p1__43077_SHARP_){
return change.call(null,p1__43077_SHARP_.target.value);
});})(map__43082,map__43082__$1,icon,error_messages,input_text,state,change,blur,focus,map__43079,map__43079__$1,label,content,placeholder,icon_click_fn,on_change_fn,on_blur_fn,on_focus_fn,styles))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),blur,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),focus,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,input_text),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null))], null),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,cljs.core.merge.call(null,(cljs.core.truth_(icon_click_fn)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),icon_click_fn], null):null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),icon,new cljs.core.Keyword(null,"styles","styles",1954480375),velho_ds.molecules.style.field.icon], null))], null):null)], null),(cljs.core.truth_(cljs.core.first.call(null,error_messages))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.validation_errors),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (map__43082,map__43082__$1,icon,error_messages,input_text,state,change,blur,focus,map__43079,map__43079__$1,label,content,placeholder,icon_click_fn,on_change_fn,on_blur_fn,on_focus_fn,styles){
return (function velho_ds$molecules$field$create_input_field_$_iter__43084(s__43085){
return (new cljs.core.LazySeq(null,((function (map__43082,map__43082__$1,icon,error_messages,input_text,state,change,blur,focus,map__43079,map__43079__$1,label,content,placeholder,icon_click_fn,on_change_fn,on_blur_fn,on_focus_fn,styles){
return (function (){
var s__43085__$1 = s__43085;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43085__$1);
if(temp__5457__auto__){
var s__43085__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43085__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43085__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43087 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43086 = (0);
while(true){
if((i__43086 < size__4291__auto__)){
var message = cljs.core._nth.call(null,c__4290__auto__,i__43086);
cljs.core.chunk_append.call(null,b__43087,cljs.core.into.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_sub_style.call(null,velho_ds.molecules.style.field.validation_errors,new cljs.core.Keyword(null,"p","p",151049309)),message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),message], null))));

var G__43088 = (i__43086 + (1));
i__43086 = G__43088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43087),velho_ds$molecules$field$create_input_field_$_iter__43084.call(null,cljs.core.chunk_rest.call(null,s__43085__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43087),null);
}
} else {
var message = cljs.core.first.call(null,s__43085__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_sub_style.call(null,velho_ds.molecules.style.field.validation_errors,new cljs.core.Keyword(null,"p","p",151049309)),message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),message], null))),velho_ds$molecules$field$create_input_field_$_iter__43084.call(null,cljs.core.rest.call(null,s__43085__$2)));
}
} else {
return null;
}
break;
}
});})(map__43082,map__43082__$1,icon,error_messages,input_text,state,change,blur,focus,map__43079,map__43079__$1,label,content,placeholder,icon_click_fn,on_change_fn,on_blur_fn,on_focus_fn,styles))
,null,null));
});})(map__43082,map__43082__$1,icon,error_messages,input_text,state,change,blur,focus,map__43079,map__43079__$1,label,content,placeholder,icon_click_fn,on_change_fn,on_blur_fn,on_focus_fn,styles))
;
return iter__4292__auto__.call(null,error_messages);
})())], null):null)], null);
});
;})(input_text,state,change,blur,focus,map__43079,map__43079__$1,label,content,placeholder,icon_click_fn,on_change_fn,on_blur_fn,on_focus_fn,styles))
});
velho_ds.molecules.field.input_field = (function velho_ds$molecules$field$input_field(properties){
return velho_ds.molecules.field.create_input_field.call(null,properties,new cljs.core.Keyword(null,"input","input",556931961));
});
velho_ds.molecules.field.multiline_field = (function velho_ds$molecules$field$multiline_field(properties){
return velho_ds.molecules.field.create_input_field.call(null,properties,new cljs.core.Keyword(null,"textarea","textarea",-650375824));
});
velho_ds.molecules.field.dropdown_menu = (function velho_ds$molecules$field$dropdown_menu(p__43095){
var map__43096 = p__43095;
var map__43096__$1 = ((((!((map__43096 == null)))?(((((map__43096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43096):map__43096);
var on_blur_fn = cljs.core.get.call(null,map__43096__$1,new cljs.core.Keyword(null,"on-blur-fn","on-blur-fn",1587769433));
var item_list = cljs.core.get.call(null,map__43096__$1,new cljs.core.Keyword(null,"item-list","item-list",-1307039302));
var selected_item = cljs.core.get.call(null,map__43096__$1,new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942));
var on_change_fn = cljs.core.get.call(null,map__43096__$1,new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275));
var icon_click_fn = cljs.core.get.call(null,map__43096__$1,new cljs.core.Keyword(null,"icon-click-fn","icon-click-fn",1693089025));
var placeholder = cljs.core.get.call(null,map__43096__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var disabled = cljs.core.get.call(null,map__43096__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var on_item_select_fn = cljs.core.get.call(null,map__43096__$1,new cljs.core.Keyword(null,"on-item-select-fn","on-item-select-fn",1499887243));
var icon = cljs.core.get.call(null,map__43096__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var error_messages = cljs.core.get.call(null,map__43096__$1,new cljs.core.Keyword(null,"error-messages","error-messages",2083896366));
var on_focus_fn = cljs.core.get.call(null,map__43096__$1,new cljs.core.Keyword(null,"on-focus-fn","on-focus-fn",-570630384));
var label = cljs.core.get.call(null,map__43096__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var styles = cljs.core.get.call(null,map__43096__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
var item_list_keys = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.call(null))].join(''),(2),(9)),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(selected_item),new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942),(cljs.core.truth_(selected_item)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_item], null):cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),null,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"item-count","item-count",8658772),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (item_list_keys,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (p1__43089_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(p1__43089_SHARP_));
});})(item_list_keys,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,item_list)),new cljs.core.Keyword(null,"focus","focus",234677911),false,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(disabled)?disabled:false)], null));
var change = ((function (item_list_keys,state,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (val){
if(!((on_change_fn == null))){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),null);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),val);

if(cljs.core.truth_(on_change_fn)){
return on_change_fn.call(null,new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
} else {
return null;
}
} else {
return null;
}
});})(item_list_keys,state,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
;
var blur = ((function (item_list_keys,state,change,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),false);

if(cljs.core.truth_(cljs.core.some.call(null,((function (item_list_keys,state,change,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (p1__43090_SHARP_){
return cljs.core.some.call(null,((function (item_list_keys,state,change,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (a){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(a));
});})(item_list_keys,state,change,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(p1__43090_SHARP_));
});})(item_list_keys,state,change,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,item_list))){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
}

if(cljs.core.truth_(on_blur_fn)){
on_blur_fn.call(null,new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
} else {
}

return document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,["#input-dropdown-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join('')))).blur();
});})(item_list_keys,state,change,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
;
var list_item_click = ((function (item_list_keys,state,change,blur,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (section,item){
if(!((new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item) == null))){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item));
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null));

if(cljs.core.truth_(on_item_select_fn)){
on_item_select_fn.call(null,section,item);
} else {
}

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),cljs.core.not.call(null,new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
});})(item_list_keys,state,change,blur,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
;
var key_press_handler_fn = ((function (item_list_keys,state,change,blur,list_item_click,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (key){
if(((!(cljs.core._EQ_.call(null,key,"Tab"))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),false)))){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),true);
} else {
}

if(cljs.core._EQ_.call(null,key,"ArrowDown")){
if((new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)) == null)){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),(0));
} else {
if((new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)) < (new cljs.core.Keyword(null,"item-count","item-count",8658772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)) - (1)))){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439)], null),cljs.core.inc);
} else {
}
}
} else {
}

if(cljs.core._EQ_.call(null,key,"ArrowUp")){
if((new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)) > (0))){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439)], null),cljs.core.dec);
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),null);
}
} else {
}

if(cljs.core._EQ_.call(null,key,"Enter")){
if(!((new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)) == null))){
document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,["#list-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join('')))).click();
} else {
if(!((cljs.core.some.call(null,((function (item_list_keys,state,change,blur,list_item_click,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (p1__43091_SHARP_){
return cljs.core.some.call(null,((function (item_list_keys,state,change,blur,list_item_click,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (item){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item))){
return item;
} else {
return null;
}
});})(item_list_keys,state,change,blur,list_item_click,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(p1__43091_SHARP_));
});})(item_list_keys,state,change,blur,list_item_click,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,cljs.core.deref.call(null,item_list_keys)) == null))){
document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,["#list-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (item_list_keys,state,change,blur,list_item_click,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (p1__43092_SHARP_){
return cljs.core.some.call(null,((function (item_list_keys,state,change,blur,list_item_click,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (item){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item))){
return item;
} else {
return null;
}
});})(item_list_keys,state,change,blur,list_item_click,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(p1__43092_SHARP_));
});})(item_list_keys,state,change,blur,list_item_click,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,cljs.core.deref.call(null,item_list_keys))))].join('')))).click();
} else {
}
}
} else {
}

if(cljs.core._EQ_.call(null,key,"Tab")){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),false);
} else {
return null;
}
});})(item_list_keys,state,change,blur,list_item_click,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
;
return ((function (item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (p__43098){
var map__43099 = p__43098;
var map__43099__$1 = ((((!((map__43099 == null)))?(((((map__43099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43099):map__43099);
var item_list__$1 = cljs.core.get.call(null,map__43099__$1,new cljs.core.Keyword(null,"item-list","item-list",-1307039302));
var icon__$1 = cljs.core.get.call(null,map__43099__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var error_messages__$1 = cljs.core.get.call(null,map__43099__$1,new cljs.core.Keyword(null,"error-messages","error-messages",2083896366));
cljs.core.reset_BANG_.call(null,item_list_keys,velho_ds.molecules.field.create_keys.call(null,item_list__$1));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vds-input-field","div.vds-input-field",353231436),stylefy.core.use_style.call(null,styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["dropdown-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join('')], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.element,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["dropdown-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join('')], null)),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,cljs.core.merge.call(null,velho_ds.molecules.style.field.dropdown_list_container,(((label == null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_large_rem)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_small_rem),")"].join('')], null):null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"block":"none")], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["dropdown-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join('')], null))], null),(function (){var iter__4292__auto__ = ((function (map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function velho_ds$molecules$field$dropdown_menu_$_iter__43101(s__43102){
return (new cljs.core.LazySeq(null,((function (map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
var s__43102__$1 = s__43102;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43102__$1);
if(temp__5457__auto__){
var s__43102__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43102__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43102__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43104 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43103 = (0);
while(true){
if((i__43103 < size__4291__auto__)){
var section = cljs.core._nth.call(null,c__4290__auto__,i__43103);
cljs.core.chunk_append.call(null,b__43104,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["dropdown-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join('')], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(section))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_list_header,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["dropdown-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43103,section,c__4290__auto__,size__4291__auto__,b__43104,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
return list_item_click.call(null,section,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null));
});})(i__43103,section,c__4290__auto__,size__4291__auto__,b__43104,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_list_header_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["dropdown-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join('')], null)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,section,new cljs.core.Keyword(null,"section","section",-300141526)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.get.call(null,section,new cljs.core.Keyword(null,"items","items",1031954938)))),")"].join('')], null)], null):null),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (i__43103,section,c__4290__auto__,size__4291__auto__,b__43104,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function velho_ds$molecules$field$dropdown_menu_$_iter__43101_$_iter__43105(s__43106){
return (new cljs.core.LazySeq(null,((function (i__43103,section,c__4290__auto__,size__4291__auto__,b__43104,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
var s__43106__$1 = s__43106;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43106__$1);
if(temp__5457__auto____$1){
var s__43106__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43106__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__43106__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__43108 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__43107 = (0);
while(true){
if((i__43107 < size__4291__auto____$1)){
var item = cljs.core._nth.call(null,c__4290__auto____$1,i__43107);
cljs.core.chunk_append.call(null,b__43108,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?velho_ds.molecules.style.field.dropdown_list_item_selected:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item)))?cljs.core.merge.call(null,velho_ds.molecules.style.field.dropdown_list_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),velho_ds.tokens.color.color_primary_light], null)):velho_ds.molecules.style.field.dropdown_list_item)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__43107,i__43103,item,c__4290__auto____$1,size__4291__auto____$1,b__43108,s__43106__$2,temp__5457__auto____$1,section,c__4290__auto__,size__4291__auto__,b__43104,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item));
});})(i__43107,i__43103,item,c__4290__auto____$1,size__4291__auto____$1,b__43108,s__43106__$2,temp__5457__auto____$1,section,c__4290__auto__,size__4291__auto__,b__43104,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43107,i__43103,item,c__4290__auto____$1,size__4291__auto____$1,b__43108,s__43106__$2,temp__5457__auto____$1,section,c__4290__auto__,size__4291__auto__,b__43104,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
return list_item_click.call(null,section,item);
});})(i__43107,i__43103,item,c__4290__auto____$1,size__4291__auto____$1,b__43108,s__43106__$2,temp__5457__auto____$1,section,c__4290__auto__,size__4291__auto__,b__43104,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"id","id",-1388402092),["list-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__43117 = (i__43107 + (1));
i__43107 = G__43117;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43108),velho_ds$molecules$field$dropdown_menu_$_iter__43101_$_iter__43105.call(null,cljs.core.chunk_rest.call(null,s__43106__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43108),null);
}
} else {
var item = cljs.core.first.call(null,s__43106__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?velho_ds.molecules.style.field.dropdown_list_item_selected:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item)))?cljs.core.merge.call(null,velho_ds.molecules.style.field.dropdown_list_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),velho_ds.tokens.color.color_primary_light], null)):velho_ds.molecules.style.field.dropdown_list_item)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__43103,item,s__43106__$2,temp__5457__auto____$1,section,c__4290__auto__,size__4291__auto__,b__43104,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item));
});})(i__43103,item,s__43106__$2,temp__5457__auto____$1,section,c__4290__auto__,size__4291__auto__,b__43104,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43103,item,s__43106__$2,temp__5457__auto____$1,section,c__4290__auto__,size__4291__auto__,b__43104,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
return list_item_click.call(null,section,item);
});})(i__43103,item,s__43106__$2,temp__5457__auto____$1,section,c__4290__auto__,size__4291__auto__,b__43104,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"id","id",-1388402092),["list-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),velho_ds$molecules$field$dropdown_menu_$_iter__43101_$_iter__43105.call(null,cljs.core.rest.call(null,s__43106__$2)));
}
} else {
return null;
}
break;
}
});})(i__43103,section,c__4290__auto__,size__4291__auto__,b__43104,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,null,null));
});})(i__43103,section,c__4290__auto__,size__4291__auto__,b__43104,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
;
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(section));
})())], null)));

var G__43118 = (i__43103 + (1));
i__43103 = G__43118;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43104),velho_ds$molecules$field$dropdown_menu_$_iter__43101.call(null,cljs.core.chunk_rest.call(null,s__43102__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43104),null);
}
} else {
var section = cljs.core.first.call(null,s__43102__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["dropdown-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join('')], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(section))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_list_header,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["dropdown-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (section,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
return list_item_click.call(null,section,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null));
});})(section,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_list_header_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["dropdown-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join('')], null)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,section,new cljs.core.Keyword(null,"section","section",-300141526)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.get.call(null,section,new cljs.core.Keyword(null,"items","items",1031954938)))),")"].join('')], null)], null):null),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (section,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function velho_ds$molecules$field$dropdown_menu_$_iter__43101_$_iter__43109(s__43110){
return (new cljs.core.LazySeq(null,((function (section,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
var s__43110__$1 = s__43110;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43110__$1);
if(temp__5457__auto____$1){
var s__43110__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43110__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43110__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43112 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43111 = (0);
while(true){
if((i__43111 < size__4291__auto__)){
var item = cljs.core._nth.call(null,c__4290__auto__,i__43111);
cljs.core.chunk_append.call(null,b__43112,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?velho_ds.molecules.style.field.dropdown_list_item_selected:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item)))?cljs.core.merge.call(null,velho_ds.molecules.style.field.dropdown_list_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),velho_ds.tokens.color.color_primary_light], null)):velho_ds.molecules.style.field.dropdown_list_item)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__43111,item,c__4290__auto__,size__4291__auto__,b__43112,s__43110__$2,temp__5457__auto____$1,section,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item));
});})(i__43111,item,c__4290__auto__,size__4291__auto__,b__43112,s__43110__$2,temp__5457__auto____$1,section,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43111,item,c__4290__auto__,size__4291__auto__,b__43112,s__43110__$2,temp__5457__auto____$1,section,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
return list_item_click.call(null,section,item);
});})(i__43111,item,c__4290__auto__,size__4291__auto__,b__43112,s__43110__$2,temp__5457__auto____$1,section,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"id","id",-1388402092),["list-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__43119 = (i__43111 + (1));
i__43111 = G__43119;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43112),velho_ds$molecules$field$dropdown_menu_$_iter__43101_$_iter__43109.call(null,cljs.core.chunk_rest.call(null,s__43110__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43112),null);
}
} else {
var item = cljs.core.first.call(null,s__43110__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))?velho_ds.molecules.style.field.dropdown_list_item_selected:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item)))?cljs.core.merge.call(null,velho_ds.molecules.style.field.dropdown_list_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),velho_ds.tokens.color.color_primary_light], null)):velho_ds.molecules.style.field.dropdown_list_item)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (item,s__43110__$2,temp__5457__auto____$1,section,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item));
});})(item,s__43110__$2,temp__5457__auto____$1,section,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__43110__$2,temp__5457__auto____$1,section,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
return list_item_click.call(null,section,item);
});})(item,s__43110__$2,temp__5457__auto____$1,section,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"id","id",-1388402092),["list-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),velho_ds$molecules$field$dropdown_menu_$_iter__43101_$_iter__43109.call(null,cljs.core.rest.call(null,s__43110__$2)));
}
} else {
return null;
}
break;
}
});})(section,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,null,null));
});})(section,s__43102__$2,temp__5457__auto__,map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
;
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(section));
})())], null)),velho_ds$molecules$field$dropdown_menu_$_iter__43101.call(null,cljs.core.rest.call(null,s__43102__$2)));
}
} else {
return null;
}
break;
}
});})(map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,null,null));
});})(map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
;
return iter__4292__auto__.call(null,cljs.core.deref.call(null,item_list_keys));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(cljs.core.first.call(null,error_messages__$1))?stylefy.core.use_style.call(null,velho_ds.molecules.style.field.input_field_label_error):stylefy.core.use_style.call(null,(cljs.core.truth_((function (){var and__3911__auto__ = label;
if(cljs.core.truth_(and__3911__auto__)){
return placeholder;
} else {
return and__3911__auto__;
}
})())?velho_ds.molecules.style.field.input_field_label_static:velho_ds.molecules.style.field.input_field_label))),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.call(null,cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.first.call(null,error_messages__$1))?velho_ds.molecules.style.field.input_field_error:velho_ds.molecules.style.field.input_field),(cljs.core.truth_(icon__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"2rem"], null):null),(((on_change_fn == null))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"caret-color","caret-color",997187317),"transparent"], null):null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[placeholder,new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),((function (map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
velho_ds.molecules.field.add_event_listener.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (e){
if(cljs.core.truth_(velho_ds.molecules.field.element_has_class_QMARK_.call(null,e,["dropdown-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join('')))){
return blur.call(null);
} else {
return null;
}
});})(map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
);

if(cljs.core.truth_(on_focus_fn)){
return on_focus_fn.call(null,new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
} else {
return null;
}
});})(map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),((function (map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),cljs.core.not.call(null,new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
});})(map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,["input-dropdown-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join(''),["dropdown-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join(''),((function (map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (p1__43094_SHARP_){
return change.call(null,p1__43094_SHARP_.target.value);
});})(map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,((function (map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (p1__43093_SHARP_){
return key_press_handler_fn.call(null,p1__43093_SHARP_.key);
});})(map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(cljs.core.truth_(icon_click_fn)?((function (map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
return icon_click_fn.call(null);
});})(map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
:(cljs.core.truth_(new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?((function (map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),false);
});})(map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
:((function (map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),true);
});})(map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"name","name",1843675177),(((icon__$1 == null))?(cljs.core.truth_(new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"arrow_drop_up":"arrow_drop_down"):icon__$1),new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.merge.call(null,velho_ds.molecules.style.field.icon,(((label == null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),velho_ds.tokens.spacing.space_xx_small_rem], null):null))], null)], null)], null),(cljs.core.truth_(cljs.core.first.call(null,error_messages__$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.validation_errors),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function velho_ds$molecules$field$dropdown_menu_$_iter__43113(s__43114){
return (new cljs.core.LazySeq(null,((function (map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles){
return (function (){
var s__43114__$1 = s__43114;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43114__$1);
if(temp__5457__auto__){
var s__43114__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43114__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43114__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43116 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43115 = (0);
while(true){
if((i__43115 < size__4291__auto__)){
var message = cljs.core._nth.call(null,c__4290__auto__,i__43115);
cljs.core.chunk_append.call(null,b__43116,cljs.core.into.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_sub_style.call(null,velho_ds.molecules.style.field.validation_errors,new cljs.core.Keyword(null,"p","p",151049309)),message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),message], null))));

var G__43120 = (i__43115 + (1));
i__43115 = G__43120;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43116),velho_ds$molecules$field$dropdown_menu_$_iter__43113.call(null,cljs.core.chunk_rest.call(null,s__43114__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43116),null);
}
} else {
var message = cljs.core.first.call(null,s__43114__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_sub_style.call(null,velho_ds.molecules.style.field.validation_errors,new cljs.core.Keyword(null,"p","p",151049309)),message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),message], null))),velho_ds$molecules$field$dropdown_menu_$_iter__43113.call(null,cljs.core.rest.call(null,s__43114__$2)));
}
} else {
return null;
}
break;
}
});})(map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
,null,null));
});})(map__43099,map__43099__$1,item_list__$1,icon__$1,error_messages__$1,item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
;
return iter__4292__auto__.call(null,error_messages__$1);
})())], null):null)], null);
});
;})(item_list_keys,state,change,blur,list_item_click,key_press_handler_fn,map__43096,map__43096__$1,on_blur_fn,item_list,selected_item,on_change_fn,icon_click_fn,placeholder,disabled,on_item_select_fn,icon,error_messages,on_focus_fn,label,styles))
});
velho_ds.molecules.field.dropdown_menu_simple = (function velho_ds$molecules$field$dropdown_menu_simple(p__43123){
var map__43124 = p__43123;
var map__43124__$1 = ((((!((map__43124 == null)))?(((((map__43124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43124):map__43124);
var label = cljs.core.get.call(null,map__43124__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var selected_fn = cljs.core.get.call(null,map__43124__$1,new cljs.core.Keyword(null,"selected-fn","selected-fn",-245239586));
var options = cljs.core.get.call(null,map__43124__$1,new cljs.core.Keyword(null,"options","options",99638489));
var default_value = cljs.core.get.call(null,map__43124__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var no_selection_text = cljs.core.get.call(null,map__43124__$1,new cljs.core.Keyword(null,"no-selection-text","no-selection-text",629753203));
var styles = cljs.core.get.call(null,map__43124__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,styles),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_label),label], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"value",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__43124,map__43124__$1,label,selected_fn,options,default_value,no_selection_text,styles){
return (function (p1__43121_SHARP_){
return selected_fn.call(null,p1__43121_SHARP_.target.value);
});})(map__43124,map__43124__$1,label,selected_fn,options,default_value,no_selection_text,styles))
], null)),((cljs.core.not.call(null,default_value))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"value",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled"], null),no_selection_text], null):null)], null),cljs.core.mapv.call(null,((function (map__43124,map__43124__$1,label,selected_fn,options,default_value,no_selection_text,styles){
return (function (p1__43122_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"option","option",65132272),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__43122_SHARP_)], null),((cljs.core._EQ_.call(null,default_value,p1__43122_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),"selected"], null):null)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__43122_SHARP_)],null));
});})(map__43124,map__43124__$1,label,selected_fn,options,default_value,no_selection_text,styles))
,options)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow_drop_down",new cljs.core.Keyword(null,"styles","styles",1954480375),cljs.core.merge.call(null,velho_ds.molecules.style.field.icon,(((label == null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),velho_ds.tokens.spacing.space_xx_small_rem], null):null))], null)], null)], null)], null);
});
velho_ds.molecules.field.dropdown_multiple = (function velho_ds$molecules$field$dropdown_multiple(p__43134){
var map__43135 = p__43134;
var map__43135__$1 = ((((!((map__43135 == null)))?(((((map__43135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43135):map__43135);
var label = cljs.core.get.call(null,map__43135__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var placeholder = cljs.core.get.call(null,map__43135__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var selected_fn = cljs.core.get.call(null,map__43135__$1,new cljs.core.Keyword(null,"selected-fn","selected-fn",-245239586));
var options = cljs.core.get.call(null,map__43135__$1,new cljs.core.Keyword(null,"options","options",99638489));
var preselected_values = cljs.core.get.call(null,map__43135__$1,new cljs.core.Keyword(null,"preselected-values","preselected-values",-1336486963));
if(cljs.core.fn_QMARK_.call(null,selected_fn)){
} else {
throw (new Error(["Assert failed: ",":selected-fn function is required for dropdown-multiple","\n","(fn? selected-fn)"].join('')));
}

if(cljs.core.vector_QMARK_.call(null,options)){
} else {
throw (new Error(["Assert failed: ",":options vector is required for dropdown-multiple","\n","(vector? options)"].join('')));
}

var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),(cljs.core.truth_(preselected_values)?preselected_values:cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),null,new cljs.core.Keyword(null,"selected-from-filter","selected-from-filter",462922490),"",new cljs.core.Keyword(null,"focus","focus",234677911),false], null));
var dropdown_id = cljs.core.atom.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null))].join(''));
var input_value_changed_fn = ((function (state,dropdown_id,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__43126_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),p1__43126_SHARP_);
});})(state,dropdown_id,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
;
var list_item_selected_fn = ((function (state,dropdown_id,input_value_changed_fn,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__43127_SHARP_){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488)], null),cljs.core.conj,p1__43127_SHARP_);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"");

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),null);

return selected_fn.call(null,new cljs.core.Keyword(null,"selected-items","selected-items",-558712488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(state,dropdown_id,input_value_changed_fn,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
;
var selected_list_item_selected_fn = ((function (state,dropdown_id,input_value_changed_fn,list_item_selected_fn,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__43128_SHARP_){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488)], null),velho_ds.molecules.field.remove_from_vector,p1__43128_SHARP_);

return selected_fn.call(null,new cljs.core.Keyword(null,"selected-items","selected-items",-558712488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(state,dropdown_id,input_value_changed_fn,list_item_selected_fn,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
;
var selectable_items = ((function (state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (){
return velho_ds.molecules.field.remove_from_vector.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"selected-items","selected-items",-558712488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
;
var filtered_selections = ((function (state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.sorted_set,velho_ds.molecules.field.search_in_list.call(null,selectable_items.call(null),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))));
});})(state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
;
var key_press_handler_fn = ((function (state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (key){
if(((cljs.core._EQ_.call(null,key,"ArrowDown")) && ((((((new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)) == null)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,filtered_selections.call(null)),(1))))) || ((new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)) < (cljs.core.count.call(null,filtered_selections.call(null)) - (1)))))))){
if((new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)) == null)){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),(0));
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439)], null),cljs.core.inc);
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-from-filter","selected-from-filter",462922490),cljs.core.nth.call(null,filtered_selections.call(null),new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
} else {
}

if(((cljs.core._EQ_.call(null,key,"ArrowUp")) && ((new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)) > (0))))){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439)], null),cljs.core.dec);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-from-filter","selected-from-filter",462922490),cljs.core.nth.call(null,filtered_selections.call(null),new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
} else {
}

if(cljs.core._EQ_.call(null,key,"Enter")){
if(!((new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)) == null))){
list_item_selected_fn.call(null,cljs.core.nth.call(null,filtered_selections.call(null),new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),null);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-from-filter","selected-from-filter",462922490),"");
} else {
}

if(cljs.core._EQ_.call(null,key,"Tab")){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),false);
} else {
return null;
}
});})(state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
;
var click_in_dropdown_QMARK_ = ((function (state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function velho_ds$molecules$field$dropdown_multiple_$_click_in_dropdown_QMARK_(element,id){
if((element == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,id,element.id)){
return true;
} else {
return velho_ds$molecules$field$dropdown_multiple_$_click_in_dropdown_QMARK_.call(null,element.parentElement,id);
}
}
});})(state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
;
var global_click_handler = ((function (state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__43129_SHARP_){
var target = p1__43129_SHARP_.target;
if(cljs.core.truth_(click_in_dropdown_QMARK_.call(null,target,cljs.core.deref.call(null,dropdown_id)))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),false);
}
});})(state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"dropdown-multiple",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (this$){
return velho_ds.molecules.field.add_event_listener.call(null,(dommy.utils.__GT_Array.call(null,reagent.core.dom_node.call(null,this$).getElementsByTagName("input"))[(0)]),new cljs.core.Keyword(null,"focus","focus",234677911),((function (state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),true);
});})(state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
);
});})(state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
velho_ds.molecules.field.add_event_listener.call(null,new cljs.core.Keyword(null,"click","click",1912301393),global_click_handler);
} else {
velho_ds.molecules.field.remove_event_listener.call(null,new cljs.core.Keyword(null,"click","click",1912301393),global_click_handler);
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,dropdown_id)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1rem"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_label),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_multiple_selected_items)], null),cljs.core.mapv.call(null,((function (state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__43130_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[velho_ds.molecules.field.selected_list_items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),selected_list_item_selected_fn,new cljs.core.Keyword(null,"content","content",15833224),p1__43130_SHARP_], null)],null));
});})(state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
,new cljs.core.Keyword(null,"selected-items","selected-items",-558712488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_multiple_input_background),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_multiple_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__43131_SHARP_){
return input_value_changed_fn.call(null,p1__43131_SHARP_.target.value);
});})(state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__43132_SHARP_){
return key_press_handler_fn.call(null,p1__43132_SHARP_.key);
});})(state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),(cljs.core.truth_(new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"arrow_drop_up":"arrow_drop_down"),new cljs.core.Keyword(null,"styles","styles",1954480375),velho_ds.molecules.style.field.dropdown_multiple_icon,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),((function (state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null),cljs.core.not);
});})(state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,cljs.core.merge.call(null,velho_ds.molecules.style.field.dropdown_multiple_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"block":"none")], null))),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_multiple_list_item)], null),cljs.core.mapv.call(null,((function (state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__43133_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[velho_ds.molecules.field.list_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),list_item_selected_fn,new cljs.core.Keyword(null,"is-selected?","is-selected?",694061043),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-from-filter","selected-from-filter",462922490).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),p1__43133_SHARP_),new cljs.core.Keyword(null,"content","content",15833224),p1__43133_SHARP_], null)],null));
});})(state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
,filtered_selections.call(null)))], null)], null);
});})(state,dropdown_id,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,click_in_dropdown_QMARK_,global_click_handler,map__43135,map__43135__$1,label,placeholder,selected_fn,options,preselected_values))
], null));
});
velho_ds.molecules.field.file_list_item = (function velho_ds$molecules$field$file_list_item(p__43137){
var map__43138 = p__43137;
var map__43138__$1 = ((((!((map__43138 == null)))?(((((map__43138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43138):map__43138);
var filename = cljs.core.get.call(null,map__43138__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var metadata = cljs.core.get.call(null,map__43138__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var on_change_fn = cljs.core.get.call(null,map__43138__$1,new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275));
var delete_fn = cljs.core.get.call(null,map__43138__$1,new cljs.core.Keyword(null,"delete-fn","delete-fn",-1787555591));
var metafields_visible_QMARK_ = reagent.core.atom.call(null,false);
var data = reagent.core.atom.call(null,metadata);
var update_data = ((function (metafields_visible_QMARK_,data,map__43138,map__43138__$1,filename,metadata,on_change_fn,delete_fn){
return (function (k,v){
cljs.core.swap_BANG_.call(null,data,cljs.core.assoc,k,v);

return on_change_fn.call(null,cljs.core.deref.call(null,data));
});})(metafields_visible_QMARK_,data,map__43138,map__43138__$1,filename,metadata,on_change_fn,delete_fn))
;
return ((function (metafields_visible_QMARK_,data,update_data,map__43138,map__43138__$1,filename,metadata,on_change_fn,delete_fn){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.file-list-item","li.file-list-item",-1543699003),stylefy.core.use_sub_style.call(null,velho_ds.molecules.style.field.drag_n_drop_content_ul,new cljs.core.Keyword(null,"li","li",723558921)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_item),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.vds-filename","span.vds-filename",1585130555),filename], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_item_btn_area),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"edit",new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),((function (metafields_visible_QMARK_,data,update_data,map__43138,map__43138__$1,filename,metadata,on_change_fn,delete_fn){
return (function (){
return cljs.core.swap_BANG_.call(null,metafields_visible_QMARK_,cljs.core.not);
});})(metafields_visible_QMARK_,data,update_data,map__43138,map__43138__$1,filename,metadata,on_change_fn,delete_fn))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"close",new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),delete_fn], null)], null)], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vds-metadata-fields","div.vds-metadata-fields",1775859822),(cljs.core.truth_(cljs.core.deref.call(null,metafields_visible_QMARK_))?stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_item_description_area):stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_item_description_area_hidden))], null),(function (){var iter__4292__auto__ = ((function (metafields_visible_QMARK_,data,update_data,map__43138,map__43138__$1,filename,metadata,on_change_fn,delete_fn){
return (function velho_ds$molecules$field$file_list_item_$_iter__43140(s__43141){
return (new cljs.core.LazySeq(null,((function (metafields_visible_QMARK_,data,update_data,map__43138,map__43138__$1,filename,metadata,on_change_fn,delete_fn){
return (function (){
var s__43141__$1 = s__43141;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43141__$1);
if(temp__5457__auto__){
var s__43141__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43141__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43141__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43143 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43142 = (0);
while(true){
if((i__43142 < size__4291__auto__)){
var meta_key = cljs.core._nth.call(null,c__4290__auto__,i__43142);
cljs.core.chunk_append.call(null,b__43143,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.molecules.field.input_field,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.capitalize.call(null,cljs.core.name.call(null,meta_key)),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.get.call(null,metadata,meta_key),new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),cljs.core.partial.call(null,update_data,meta_key)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),meta_key], null)));

var G__43144 = (i__43142 + (1));
i__43142 = G__43144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43143),velho_ds$molecules$field$file_list_item_$_iter__43140.call(null,cljs.core.chunk_rest.call(null,s__43141__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43143),null);
}
} else {
var meta_key = cljs.core.first.call(null,s__43141__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.molecules.field.input_field,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.capitalize.call(null,cljs.core.name.call(null,meta_key)),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.get.call(null,metadata,meta_key),new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),cljs.core.partial.call(null,update_data,meta_key)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),meta_key], null)),velho_ds$molecules$field$file_list_item_$_iter__43140.call(null,cljs.core.rest.call(null,s__43141__$2)));
}
} else {
return null;
}
break;
}
});})(metafields_visible_QMARK_,data,update_data,map__43138,map__43138__$1,filename,metadata,on_change_fn,delete_fn))
,null,null));
});})(metafields_visible_QMARK_,data,update_data,map__43138,map__43138__$1,filename,metadata,on_change_fn,delete_fn))
;
return iter__4292__auto__.call(null,cljs.core.keys.call(null,metadata));
})())], null);
});
;})(metafields_visible_QMARK_,data,update_data,map__43138,map__43138__$1,filename,metadata,on_change_fn,delete_fn))
});
velho_ds.molecules.field.add_to_files = (function velho_ds$molecules$field$add_to_files(filemap,item){
return cljs.core.assoc.call(null,filemap,cljs.core.fnil.call(null,cljs.core.inc,(0)).call(null,cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,filemap))),item);
});
velho_ds.molecules.field.sanitize_id = (function velho_ds$molecules$field$sanitize_id(str){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,str,/ /,"-"),/Ä/,"A"),/ä/,"a"),/Ö/,"O"),/ö/,"o"),/Å/,"a"),/å/,"a");
});
velho_ds.molecules.field.drag_n_drop = (function velho_ds$molecules$field$drag_n_drop(p__43154){
var map__43155 = p__43154;
var map__43155__$1 = ((((!((map__43155 == null)))?(((((map__43155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43155):map__43155);
var label = cljs.core.get.call(null,map__43155__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var help_text = cljs.core.get.call(null,map__43155__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
var on_change_fn = cljs.core.get.call(null,map__43155__$1,new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275));
if(cljs.core.truth_(label)){
} else {
throw (new Error("Assert failed: label"));
}

if(cljs.core.truth_(on_change_fn)){
} else {
throw (new Error("Assert failed: on-change-fn"));
}

var files = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var label_id = reagent.core.atom.call(null,velho_ds.molecules.field.sanitize_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.call(null))].join(''),(2),(9)))].join('')));
var file_to_map = ((function (files,label_id,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),item.name,new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"file","file",-1269645878),item], null);
});})(files,label_id,map__43155,map__43155__$1,label,help_text,on_change_fn))
;
var get_files = ((function (files,label_id,file_to_map,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (e){
((function (files,label_id,file_to_map,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (p1__43147_SHARP_){
return cljs.core.reset_BANG_.call(null,files,p1__43147_SHARP_);
});})(files,label_id,file_to_map,map__43155,map__43155__$1,label,help_text,on_change_fn))
.call(null,((function (files,label_id,file_to_map,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (p1__43146_SHARP_){
return cljs.core.reduce.call(null,velho_ds.molecules.field.add_to_files,cljs.core.deref.call(null,files),p1__43146_SHARP_);
});})(files,label_id,file_to_map,map__43155,map__43155__$1,label,help_text,on_change_fn))
.call(null,((function (files,label_id,file_to_map,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (p1__43145_SHARP_){
return cljs.core.map.call(null,file_to_map,p1__43145_SHARP_);
});})(files,label_id,file_to_map,map__43155,map__43155__$1,label,help_text,on_change_fn))
.call(null,cljs.core.array_seq.call(null,e.files))));

return on_change_fn.call(null,cljs.core.deref.call(null,files));
});})(files,label_id,file_to_map,map__43155,map__43155__$1,label,help_text,on_change_fn))
;
var file_metadata_changed = ((function (files,label_id,file_to_map,get_files,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (key,new_metadata){
cljs.core.swap_BANG_.call(null,files,cljs.core.assoc,key,cljs.core.merge.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,files),key),new_metadata));

return on_change_fn.call(null,cljs.core.deref.call(null,files));
});})(files,label_id,file_to_map,get_files,map__43155,map__43155__$1,label,help_text,on_change_fn))
;
var remove_item = ((function (files,label_id,file_to_map,get_files,file_metadata_changed,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (p1__43148_SHARP_){
cljs.core.swap_BANG_.call(null,files,cljs.core.dissoc,p1__43148_SHARP_);

return on_change_fn.call(null,cljs.core.deref.call(null,files));
});})(files,label_id,file_to_map,get_files,file_metadata_changed,map__43155,map__43155__$1,label,help_text,on_change_fn))
;
return ((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_header),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_content),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (p1__43149_SHARP_){
return p1__43149_SHARP_.preventDefault();
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn))
,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (p1__43150_SHARP_){
return p1__43150_SHARP_.preventDefault();
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn))
,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (p1__43151_SHARP_){
return p1__43151_SHARP_.dataTransfer.setData("text/plain","");
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (p1__43152_SHARP_){
p1__43152_SHARP_.preventDefault();

return get_files.call(null,p1__43152_SHARP_.dataTransfer);
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn))
], null)),((!(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,files))))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_content_ul)], null),(function (){var iter__4292__auto__ = ((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function velho_ds$molecules$field$drag_n_drop_$_iter__43157(s__43158){
return (new cljs.core.LazySeq(null,((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (){
var s__43158__$1 = s__43158;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43158__$1);
if(temp__5457__auto__){
var s__43158__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43158__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43158__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43160 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43159 = (0);
while(true){
if((i__43159 < size__4291__auto__)){
var key = cljs.core._nth.call(null,c__4290__auto__,i__43159);
cljs.core.chunk_append.call(null,b__43160,(function (){var file_item = cljs.core.get.call(null,cljs.core.deref.call(null,files),key);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.molecules.field.file_list_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file_item)], null),new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),cljs.core.partial.call(null,file_metadata_changed,key),new cljs.core.Keyword(null,"delete-fn","delete-fn",-1787555591),((function (i__43159,file_item,key,c__4290__auto__,size__4291__auto__,b__43160,s__43158__$2,temp__5457__auto__,files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (){
return remove_item.call(null,key);
});})(i__43159,file_item,key,c__4290__auto__,size__4291__auto__,b__43160,s__43158__$2,temp__5457__auto__,files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
})());

var G__43161 = (i__43159 + (1));
i__43159 = G__43161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43160),velho_ds$molecules$field$drag_n_drop_$_iter__43157.call(null,cljs.core.chunk_rest.call(null,s__43158__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43160),null);
}
} else {
var key = cljs.core.first.call(null,s__43158__$2);
return cljs.core.cons.call(null,(function (){var file_item = cljs.core.get.call(null,cljs.core.deref.call(null,files),key);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.molecules.field.file_list_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file_item)], null),new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),cljs.core.partial.call(null,file_metadata_changed,key),new cljs.core.Keyword(null,"delete-fn","delete-fn",-1787555591),((function (file_item,key,s__43158__$2,temp__5457__auto__,files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (){
return remove_item.call(null,key);
});})(file_item,key,s__43158__$2,temp__5457__auto__,files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
})(),velho_ds$molecules$field$drag_n_drop_$_iter__43157.call(null,cljs.core.rest.call(null,s__43158__$2)));
}
} else {
return null;
}
break;
}
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn))
,null,null));
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn))
;
return iter__4292__auto__.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,files))));
})()):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_helparea),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (){
return cljs.core.deref.call(null,velho_ds.design_system.root_element).querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,["#file-input-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label_id))].join('')))).click();
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_sub_style.call(null,velho_ds.molecules.style.field.drag_n_drop_helparea,new cljs.core.Keyword(null,"p","p",151049309)),help_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"cloud_upload"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["file-input-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label_id))].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"multiple","multiple",1244445549),"multiple",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn){
return (function (p1__43153_SHARP_){
get_files.call(null,p1__43153_SHARP_.target);

return p1__43153_SHARP_.target.value = null;
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null)], null)], null)], null)], null);
});
;})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43155,map__43155__$1,label,help_text,on_change_fn))
});
velho_ds.molecules.field.list_element = (function velho_ds$molecules$field$list_element(p__43166){
var map__43167 = p__43166;
var map__43167__$1 = ((((!((map__43167 == null)))?(((((map__43167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43167):map__43167);
var label = cljs.core.get.call(null,map__43167__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var desc = cljs.core.get.call(null,map__43167__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var info = cljs.core.get.call(null,map__43167__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var sub_content = cljs.core.get.call(null,map__43167__$1,new cljs.core.Keyword(null,"sub-content","sub-content",-2140988772));
var buttons = cljs.core.get.call(null,map__43167__$1,new cljs.core.Keyword(null,"buttons","buttons",-1953831197));
var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),false], null));
return ((function (state,map__43167,map__43167__$1,label,desc,info,sub_content,buttons){
return (function (p__43169){
var map__43170 = p__43169;
var map__43170__$1 = ((((!((map__43170 == null)))?(((((map__43170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43170):map__43170);
var label__$1 = cljs.core.get.call(null,map__43170__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var desc__$1 = cljs.core.get.call(null,map__43170__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var info__$1 = cljs.core.get.call(null,map__43170__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var sub_content__$1 = cljs.core.get.call(null,map__43170__$1,new cljs.core.Keyword(null,"sub-content","sub-content",-2140988772));
var buttons__$1 = cljs.core.get.call(null,map__43170__$1,new cljs.core.Keyword(null,"buttons","buttons",-1953831197));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.area.shadow_area,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_x_small_rem)," 0"].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.organisms.grid.grid_wrap,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rows","rows",850049680),(1),new cljs.core.Keyword(null,"cols","cols",-1914801295),(2),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),["0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_x_small_rem)].join(''),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),["auto minmax(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_x_large_rem),", 33%)"].join('')], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.organisms.grid.grid_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"col-start","col-start",1350168236),(1),new cljs.core.Keyword(null,"col-end","col-end",-306678491),(1),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.vds-label","small.vds-label",1329232565),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.list_element_label),label__$1], null),(cljs.core.truth_(desc__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.vds-desc","small.vds-desc",433157225),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.list_element_desc),desc__$1], null):null),(cljs.core.truth_(info__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.vds-info","small.vds-info",1297723414),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.list_element_info),info__$1], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.organisms.grid.grid_cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"col-start","col-start",1350168236),(2),new cljs.core.Keyword(null,"col-end","col-end",-306678491),(2),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center",new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),"right",new cljs.core.Keyword(null,"height","height",1025178622),velho_ds.tokens.spacing.space_base_rem], null)], null),cljs.core.map_indexed.call(null,((function (map__43170,map__43170__$1,label__$1,desc__$1,info__$1,sub_content__$1,buttons__$1,state,map__43167,map__43167__$1,label,desc,info,sub_content,buttons){
return (function (p1__43163_SHARP_,p2__43162_SHARP_){
return cljs.core.with_meta.call(null,p2__43162_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__43163_SHARP_], null));
});})(map__43170,map__43170__$1,label__$1,desc__$1,info__$1,sub_content__$1,buttons__$1,state,map__43167,map__43167__$1,label,desc,info,sub_content,buttons))
,(cljs.core.truth_(sub_content__$1)?cljs.core.conj.call(null,buttons__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"expand_less":"expand_more"),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),["0 0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_x_small_rem)].join('')], null),new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),((function (map__43170,map__43170__$1,label__$1,desc__$1,info__$1,sub_content__$1,buttons__$1,state,map__43167,map__43167__$1,label,desc,info,sub_content,buttons){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"expanded","expanded",-3020742),cljs.core.not.call(null,new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
});})(map__43170,map__43170__$1,label__$1,desc__$1,info__$1,sub_content__$1,buttons__$1,state,map__43167,map__43167__$1,label,desc,info,sub_content,buttons))
], null)], null)):buttons__$1))], null)], null),(cljs.core.truth_(sub_content__$1)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vds-sub-content","div.vds-sub-content",-142516756),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0 8px",new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"block":"none")], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.divider.default$], null),cljs.core.map_indexed.call(null,((function (map__43170,map__43170__$1,label__$1,desc__$1,info__$1,sub_content__$1,buttons__$1,state,map__43167,map__43167__$1,label,desc,info,sub_content,buttons){
return (function (p1__43165_SHARP_,p2__43164_SHARP_){
return cljs.core.with_meta.call(null,p2__43164_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__43165_SHARP_], null));
});})(map__43170,map__43170__$1,label__$1,desc__$1,info__$1,sub_content__$1,buttons__$1,state,map__43167,map__43167__$1,label,desc,info,sub_content,buttons))
,sub_content__$1)], null):null)], null);
});
;})(state,map__43167,map__43167__$1,label,desc,info,sub_content,buttons))
});
velho_ds.molecules.field.drag_n_drop_area = (function velho_ds$molecules$field$drag_n_drop_area(p__43181){
var map__43182 = p__43181;
var map__43182__$1 = ((((!((map__43182 == null)))?(((((map__43182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43182):map__43182);
var help_text = cljs.core.get.call(null,map__43182__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
var on_change_fn = cljs.core.get.call(null,map__43182__$1,new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275));
var filename_label = cljs.core.get.call(null,map__43182__$1,new cljs.core.Keyword(null,"filename-label","filename-label",-2050002697));
var desc_label = cljs.core.get.call(null,map__43182__$1,new cljs.core.Keyword(null,"desc-label","desc-label",1105505835));
if(cljs.core.truth_(on_change_fn)){
} else {
throw (new Error("Assert failed: on-change-fn"));
}

var files = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var label_id = reagent.core.atom.call(null,velho_ds.molecules.field.sanitize_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.call(null))].join(''),(2),(9)))].join('')));
var file_to_map = ((function (files,label_id,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),item.name,new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"file","file",-1269645878),item], null);
});})(files,label_id,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
;
var get_files = ((function (files,label_id,file_to_map,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (e){
((function (files,label_id,file_to_map,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (p1__43174_SHARP_){
return cljs.core.reset_BANG_.call(null,files,p1__43174_SHARP_);
});})(files,label_id,file_to_map,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
.call(null,((function (files,label_id,file_to_map,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (p1__43173_SHARP_){
return cljs.core.reduce.call(null,velho_ds.molecules.field.add_to_files,cljs.core.deref.call(null,files),p1__43173_SHARP_);
});})(files,label_id,file_to_map,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
.call(null,((function (files,label_id,file_to_map,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (p1__43172_SHARP_){
return cljs.core.map.call(null,file_to_map,p1__43172_SHARP_);
});})(files,label_id,file_to_map,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
.call(null,cljs.core.array_seq.call(null,e.files))));

return on_change_fn.call(null,cljs.core.deref.call(null,files));
});})(files,label_id,file_to_map,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
;
var file_metadata_changed = ((function (files,label_id,file_to_map,get_files,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (key_path,new_metadata){
cljs.core.swap_BANG_.call(null,files,cljs.core.assoc_in,key_path,new_metadata);

return on_change_fn.call(null,cljs.core.deref.call(null,files));
});})(files,label_id,file_to_map,get_files,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
;
var remove_item = ((function (files,label_id,file_to_map,get_files,file_metadata_changed,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (p1__43175_SHARP_){
cljs.core.swap_BANG_.call(null,files,cljs.core.dissoc,p1__43175_SHARP_);

return on_change_fn.call(null,cljs.core.deref.call(null,files));
});})(files,label_id,file_to_map,get_files,file_metadata_changed,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
;
return ((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (p1__43176_SHARP_){
return p1__43176_SHARP_.preventDefault();
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (p1__43177_SHARP_){
return p1__43177_SHARP_.preventDefault();
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (p1__43178_SHARP_){
return p1__43178_SHARP_.dataTransfer.setData("text/plain","");
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (p1__43179_SHARP_){
p1__43179_SHARP_.preventDefault();

return get_files.call(null,p1__43179_SHARP_.dataTransfer);
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
], null),((!(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,files))))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_content_ul)], null),(function (){var iter__4292__auto__ = ((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function velho_ds$molecules$field$drag_n_drop_area_$_iter__43184(s__43185){
return (new cljs.core.LazySeq(null,((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (){
var s__43185__$1 = s__43185;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43185__$1);
if(temp__5457__auto__){
var s__43185__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43185__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43185__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43187 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43186 = (0);
while(true){
if((i__43186 < size__4291__auto__)){
var key = cljs.core._nth.call(null,c__4290__auto__,i__43186);
cljs.core.chunk_append.call(null,b__43187,(function (){var file_item = cljs.core.get.call(null,cljs.core.deref.call(null,files),key);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.molecules.field.list_element,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"sub-content","sub-content",-2140988772),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.molecules.field.input_field,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(filename_label)?filename_label:"Filename"),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),cljs.core.partial.call(null,file_metadata_changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_x_small_rem),"  0"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.molecules.field.input_field,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(desc_label)?desc_label:"Description"),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),cljs.core.partial.call(null,file_metadata_changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"description","description",-1428560544)], null)),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_x_small_rem),"  0"].join('')], null)], null)], null)], null),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"clear",new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),((function (i__43186,file_item,key,c__4290__auto__,size__4291__auto__,b__43187,s__43185__$2,temp__5457__auto__,files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (){
return remove_item.call(null,key);
});})(i__43186,file_item,key,c__4290__auto__,size__4291__auto__,b__43187,s__43185__$2,temp__5457__auto__,files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
})());

var G__43188 = (i__43186 + (1));
i__43186 = G__43188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43187),velho_ds$molecules$field$drag_n_drop_area_$_iter__43184.call(null,cljs.core.chunk_rest.call(null,s__43185__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43187),null);
}
} else {
var key = cljs.core.first.call(null,s__43185__$2);
return cljs.core.cons.call(null,(function (){var file_item = cljs.core.get.call(null,cljs.core.deref.call(null,files),key);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.molecules.field.list_element,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"sub-content","sub-content",-2140988772),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.molecules.field.input_field,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(filename_label)?filename_label:"Filename"),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),cljs.core.partial.call(null,file_metadata_changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_x_small_rem),"  0"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.molecules.field.input_field,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(desc_label)?desc_label:"Description"),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),cljs.core.partial.call(null,file_metadata_changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"description","description",-1428560544)], null)),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.spacing.space_x_small_rem),"  0"].join('')], null)], null)], null)], null),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"clear",new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),((function (file_item,key,s__43185__$2,temp__5457__auto__,files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (){
return remove_item.call(null,key);
});})(file_item,key,s__43185__$2,temp__5457__auto__,files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
})(),velho_ds$molecules$field$drag_n_drop_area_$_iter__43184.call(null,cljs.core.rest.call(null,s__43185__$2)));
}
} else {
return null;
}
break;
}
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
,null,null));
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
;
return iter__4292__auto__.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,files))));
})()):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_helparea),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (){
return cljs.core.deref.call(null,velho_ds.design_system.root_element).querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,["#file-input-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label_id))].join('')))).click();
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
], null)),(cljs.core.truth_(help_text)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_sub_style.call(null,velho_ds.molecules.style.field.drag_n_drop_helparea,new cljs.core.Keyword(null,"p","p",151049309)),help_text], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"cloud_upload"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["file-input-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label_id))].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"multiple","multiple",1244445549),"multiple",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label){
return (function (p1__43180_SHARP_){
get_files.call(null,p1__43180_SHARP_.target);

return p1__43180_SHARP_.target.value = null;
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null)], null)], null)], null);
});
;})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__43182,map__43182__$1,help_text,on_change_fn,filename_label,desc_label))
});
