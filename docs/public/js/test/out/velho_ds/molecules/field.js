// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.molecules.field');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('velho_ds.tokens.color');
goog.require('velho_ds.molecules.style.field');
goog.require('velho_ds.atoms.icon');
velho_ds.molecules.field.keyvalue = (function velho_ds$molecules$field$keyvalue(p__42937){
var map__42938 = p__42937;
var map__42938__$1 = ((((!((map__42938 == null)))?(((((map__42938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42938):map__42938);
var content = cljs.core.get.call(null,map__42938__$1,new cljs.core.Keyword(null,"content","content",15833224));
var label = cljs.core.get.call(null,map__42938__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.keyvalue_label),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.keyvalue_content),content], null)], null);
});
velho_ds.molecules.field.iconvalue = (function velho_ds$molecules$field$iconvalue(p__42940){
var map__42941 = p__42940;
var map__42941__$1 = ((((!((map__42941 == null)))?(((((map__42941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42941):map__42941);
var icon = cljs.core.get.call(null,map__42941__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var content = cljs.core.get.call(null,map__42941__$1,new cljs.core.Keyword(null,"content","content",15833224));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.iconvalue),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),icon,new cljs.core.Keyword(null,"styles","styles",1954480375),velho_ds.molecules.style.field.iconvalue_icon], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.iconvalue_value),content], null)], null);
});
velho_ds.molecules.field.input_field = (function velho_ds$molecules$field$input_field(p__42944){
var map__42945 = p__42944;
var map__42945__$1 = ((((!((map__42945 == null)))?(((((map__42945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42945):map__42945);
var label = cljs.core.get.call(null,map__42945__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var content = cljs.core.get.call(null,map__42945__$1,new cljs.core.Keyword(null,"content","content",15833224));
var placeholder = cljs.core.get.call(null,map__42945__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var icon = cljs.core.get.call(null,map__42945__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var icon_click_fn = cljs.core.get.call(null,map__42945__$1,new cljs.core.Keyword(null,"icon-click-fn","icon-click-fn",1693089025));
var on_change_fn = cljs.core.get.call(null,map__42945__$1,new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275));
var on_blur_fn = cljs.core.get.call(null,map__42945__$1,new cljs.core.Keyword(null,"on-blur-fn","on-blur-fn",1587769433));
var input_text = reagent.core.atom.call(null,content);
var change = ((function (input_text,map__42945,map__42945__$1,label,content,placeholder,icon,icon_click_fn,on_change_fn,on_blur_fn){
return (function (val){
cljs.core.reset_BANG_.call(null,input_text,val);

if(cljs.core.truth_(on_change_fn)){
return on_change_fn.call(null,cljs.core.deref.call(null,input_text));
} else {
return null;
}
});})(input_text,map__42945,map__42945__$1,label,content,placeholder,icon,icon_click_fn,on_change_fn,on_blur_fn))
;
var blur = ((function (input_text,change,map__42945,map__42945__$1,label,content,placeholder,icon,icon_click_fn,on_change_fn,on_blur_fn){
return (function (){
if(cljs.core.truth_(on_blur_fn)){
return on_blur_fn.call(null,cljs.core.deref.call(null,input_text));
} else {
return null;
}
});})(input_text,change,map__42945,map__42945__$1,label,content,placeholder,icon,icon_click_fn,on_change_fn,on_blur_fn))
;
return ((function (input_text,change,blur,map__42945,map__42945__$1,label,content,placeholder,icon,icon_click_fn,on_change_fn,on_blur_fn){
return (function (p__42947){
var map__42948 = p__42947;
var map__42948__$1 = ((((!((map__42948 == null)))?(((((map__42948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42948):map__42948);
var error_messages = cljs.core.get.call(null,map__42948__$1,new cljs.core.Keyword(null,"error-messages","error-messages",2083896366));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vds-input-field","div.vds-input-field",353231436),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.element),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.call(null,cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.first.call(null,error_messages))?velho_ds.molecules.style.field.input_field_error:velho_ds.molecules.style.field.input_field),(cljs.core.truth_(icon)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"2rem"], null):null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"required","required",1807647006),"required",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__42948,map__42948__$1,error_messages,input_text,change,blur,map__42945,map__42945__$1,label,content,placeholder,icon,icon_click_fn,on_change_fn,on_blur_fn){
return (function (p1__42943_SHARP_){
return change.call(null,p1__42943_SHARP_.target.value);
});})(map__42948,map__42948__$1,error_messages,input_text,change,blur,map__42945,map__42945__$1,label,content,placeholder,icon,icon_click_fn,on_change_fn,on_blur_fn))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),blur,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,input_text),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(cljs.core.first.call(null,error_messages))?stylefy.core.use_style.call(null,velho_ds.molecules.style.field.input_field_label_error):stylefy.core.use_style.call(null,(cljs.core.truth_((function (){var and__3911__auto__ = label;
if(cljs.core.truth_(and__3911__auto__)){
return placeholder;
} else {
return and__3911__auto__;
}
})())?velho_ds.molecules.style.field.input_field_label_static:velho_ds.molecules.style.field.input_field_label))),label], null),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,cljs.core.merge.call(null,(cljs.core.truth_(icon_click_fn)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),icon_click_fn], null):null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),icon,new cljs.core.Keyword(null,"styles","styles",1954480375),velho_ds.molecules.style.field.icon], null))], null):null)], null),(cljs.core.truth_(cljs.core.first.call(null,error_messages))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.validation_errors),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (map__42948,map__42948__$1,error_messages,input_text,change,blur,map__42945,map__42945__$1,label,content,placeholder,icon,icon_click_fn,on_change_fn,on_blur_fn){
return (function velho_ds$molecules$field$input_field_$_iter__42950(s__42951){
return (new cljs.core.LazySeq(null,((function (map__42948,map__42948__$1,error_messages,input_text,change,blur,map__42945,map__42945__$1,label,content,placeholder,icon,icon_click_fn,on_change_fn,on_blur_fn){
return (function (){
var s__42951__$1 = s__42951;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__42951__$1);
if(temp__5457__auto__){
var s__42951__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42951__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__42951__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__42953 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__42952 = (0);
while(true){
if((i__42952 < size__4291__auto__)){
var message = cljs.core._nth.call(null,c__4290__auto__,i__42952);
cljs.core.chunk_append.call(null,b__42953,cljs.core.into.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_sub_style.call(null,velho_ds.molecules.style.field.validation_errors,new cljs.core.Keyword(null,"p","p",151049309)),message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),message], null))));

var G__42954 = (i__42952 + (1));
i__42952 = G__42954;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42953),velho_ds$molecules$field$input_field_$_iter__42950.call(null,cljs.core.chunk_rest.call(null,s__42951__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42953),null);
}
} else {
var message = cljs.core.first.call(null,s__42951__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_sub_style.call(null,velho_ds.molecules.style.field.validation_errors,new cljs.core.Keyword(null,"p","p",151049309)),message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),message], null))),velho_ds$molecules$field$input_field_$_iter__42950.call(null,cljs.core.rest.call(null,s__42951__$2)));
}
} else {
return null;
}
break;
}
});})(map__42948,map__42948__$1,error_messages,input_text,change,blur,map__42945,map__42945__$1,label,content,placeholder,icon,icon_click_fn,on_change_fn,on_blur_fn))
,null,null));
});})(map__42948,map__42948__$1,error_messages,input_text,change,blur,map__42945,map__42945__$1,label,content,placeholder,icon,icon_click_fn,on_change_fn,on_blur_fn))
;
return iter__4292__auto__.call(null,error_messages);
})())], null):null)], null);
});
;})(input_text,change,blur,map__42945,map__42945__$1,label,content,placeholder,icon,icon_click_fn,on_change_fn,on_blur_fn))
});
velho_ds.molecules.field.multiline_field = (function velho_ds$molecules$field$multiline_field(var_args){
var G__42956 = arguments.length;
switch (G__42956) {
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
return velho_ds.molecules.field.multiline_field.call(null,content,null);
});

velho_ds.molecules.field.multiline_field.cljs$core$IFn$_invoke$arity$2 = (function (content,args){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.element),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.text_field,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),"required"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.input_field_label),content], null)], null)], null);
});

velho_ds.molecules.field.multiline_field.cljs$lang$maxFixedArity = 2;

velho_ds.molecules.field.dropdown_menu = (function velho_ds$molecules$field$dropdown_menu(p__42960){
var map__42961 = p__42960;
var map__42961__$1 = ((((!((map__42961 == null)))?(((((map__42961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42961):map__42961);
var label = cljs.core.get.call(null,map__42961__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var selected_fn = cljs.core.get.call(null,map__42961__$1,new cljs.core.Keyword(null,"selected-fn","selected-fn",-245239586));
var options = cljs.core.get.call(null,map__42961__$1,new cljs.core.Keyword(null,"options","options",99638489));
var default_value = cljs.core.get.call(null,map__42961__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var no_selection_text = cljs.core.get.call(null,map__42961__$1,new cljs.core.Keyword(null,"no-selection-text","no-selection-text",629753203));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_label),label], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"value",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__42961,map__42961__$1,label,selected_fn,options,default_value,no_selection_text){
return (function (p1__42958_SHARP_){
return selected_fn.call(null,p1__42958_SHARP_.target.value);
});})(map__42961,map__42961__$1,label,selected_fn,options,default_value,no_selection_text))
], null)),((cljs.core.not.call(null,default_value))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"value",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled"], null),no_selection_text], null):null)], null),cljs.core.mapv.call(null,((function (map__42961,map__42961__$1,label,selected_fn,options,default_value,no_selection_text){
return (function (p1__42959_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"option","option",65132272),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__42959_SHARP_)], null),((cljs.core._EQ_.call(null,default_value,p1__42959_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),"selected"], null):null)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__42959_SHARP_)],null));
});})(map__42961,map__42961__$1,label,selected_fn,options,default_value,no_selection_text))
,options)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow_drop_down",new cljs.core.Keyword(null,"styles","styles",1954480375),velho_ds.molecules.style.field.dropdown_icon], null)], null)], null)], null);
});
velho_ds.molecules.field.list_item = (function velho_ds$molecules$field$list_item(p__42963){
var map__42964 = p__42963;
var map__42964__$1 = ((((!((map__42964 == null)))?(((((map__42964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42964):map__42964);
var on_click_fn = cljs.core.get.call(null,map__42964__$1,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852));
var content = cljs.core.get.call(null,map__42964__$1,new cljs.core.Keyword(null,"content","content",15833224));
var is_selected_QMARK_ = cljs.core.get.call(null,map__42964__$1,new cljs.core.Keyword(null,"is-selected?","is-selected?",694061043));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(is_selected_QMARK_)?velho_ds.tokens.color.color_primary:velho_ds.tokens.color.color_neutral_1),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(is_selected_QMARK_)?velho_ds.tokens.color.color_neutral_2:velho_ds.tokens.color.color_black),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),velho_ds.tokens.color.color_primary,new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.color_neutral_2], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__42964,map__42964__$1,on_click_fn,content,is_selected_QMARK_){
return (function (){
return on_click_fn.call(null,content);
});})(map__42964,map__42964__$1,on_click_fn,content,is_selected_QMARK_))
,new cljs.core.Keyword(null,"key","key",-1516042587),content,new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),content], null);
});
velho_ds.molecules.field.selected_list_items = (function velho_ds$molecules$field$selected_list_items(p__42966){
var map__42967 = p__42966;
var map__42967__$1 = ((((!((map__42967 == null)))?(((((map__42967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42967):map__42967);
var on_click_fn = cljs.core.get.call(null,map__42967__$1,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852));
var content = cljs.core.get.call(null,map__42967__$1,new cljs.core.Keyword(null,"content","content",15833224));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),velho_ds.tokens.color.color_neutral_5,new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.color_neutral_2,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 4px 4px 0px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem 0.5rem"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (map__42967,map__42967__$1,on_click_fn,content){
return (function (){
return on_click_fn.call(null,content);
});})(map__42967,map__42967__$1,on_click_fn,content))
,new cljs.core.Keyword(null,"key","key",-1516042587),content,new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.5rem"], null)),content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"cancel",new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),"3px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem",new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null)], null)], null)], null);
});
velho_ds.molecules.field.search_in_list = (function velho_ds$molecules$field$search_in_list(collection,search_word){
return cljs.core.filter.call(null,(function (p1__42969_SHARP_){
return clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,p1__42969_SHARP_),search_word);
}),collection);
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
velho_ds.molecules.field.dropdown_multiple = (function velho_ds$molecules$field$dropdown_multiple(p__42978){
var map__42979 = p__42978;
var map__42979__$1 = ((((!((map__42979 == null)))?(((((map__42979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42979):map__42979);
var label = cljs.core.get.call(null,map__42979__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var placeholder = cljs.core.get.call(null,map__42979__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var selected_fn = cljs.core.get.call(null,map__42979__$1,new cljs.core.Keyword(null,"selected-fn","selected-fn",-245239586));
var options = cljs.core.get.call(null,map__42979__$1,new cljs.core.Keyword(null,"options","options",99638489));
var preselected_values = cljs.core.get.call(null,map__42979__$1,new cljs.core.Keyword(null,"preselected-values","preselected-values",-1336486963));
if(cljs.core.fn_QMARK_.call(null,selected_fn)){
} else {
throw (new Error(["Assert failed: ",":selected-fn function is required for dropdown-multiple","\n","(fn? selected-fn)"].join('')));
}

if(cljs.core.vector_QMARK_.call(null,options)){
} else {
throw (new Error(["Assert failed: ",":options vector is required for dropdown-multiple","\n","(vector? options)"].join('')));
}

var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),(cljs.core.truth_(preselected_values)?preselected_values:cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),null,new cljs.core.Keyword(null,"selected-from-filter","selected-from-filter",462922490),"",new cljs.core.Keyword(null,"focus","focus",234677911),false], null));
var input_value_changed_fn = ((function (state,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__42970_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),p1__42970_SHARP_);
});})(state,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values))
;
var list_item_selected_fn = ((function (state,input_value_changed_fn,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__42971_SHARP_){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488)], null),cljs.core.conj,p1__42971_SHARP_);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"");

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),null);

return selected_fn.call(null,new cljs.core.Keyword(null,"selected-items","selected-items",-558712488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(state,input_value_changed_fn,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values))
;
var selected_list_item_selected_fn = ((function (state,input_value_changed_fn,list_item_selected_fn,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__42972_SHARP_){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488)], null),velho_ds.molecules.field.remove_from_vector,p1__42972_SHARP_);

return selected_fn.call(null,new cljs.core.Keyword(null,"selected-items","selected-items",-558712488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(state,input_value_changed_fn,list_item_selected_fn,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values))
;
var selectable_items = ((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (){
return velho_ds.molecules.field.remove_from_vector.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"selected-items","selected-items",-558712488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values))
;
var filtered_selections = ((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.sorted_set,velho_ds.molecules.field.search_in_list.call(null,selectable_items.call(null),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))));
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values))
;
var key_press_handler_fn = ((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values){
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
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values))
;
var global_click_handler = ((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__42973_SHARP_){
var target = p1__42973_SHARP_.target;
if(cljs.core.empty_QMARK_.call(null,velho_ds.molecules.field.search_in_list.call(null,clojure.string.split.call(null,target.className,/ /),"dropdown-multi"))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),false);
} else {
return null;
}
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values))
;
var addEventListener = ((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (){
return document.getElementById("app").addEventListener("click",global_click_handler);
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values))
;
return ((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1rem"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_label),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_multiple_selected_items,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null))], null),cljs.core.mapv.call(null,((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__42974_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[velho_ds.molecules.field.selected_list_items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),selected_list_item_selected_fn,new cljs.core.Keyword(null,"content","content",15833224),p1__42974_SHARP_], null)],null));
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values))
,new cljs.core.Keyword(null,"selected-items","selected-items",-558712488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_multiple_input_background,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_multiple_input,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__42975_SHARP_){
return input_value_changed_fn.call(null,p1__42975_SHARP_.target.value);
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__42976_SHARP_){
return key_press_handler_fn.call(null,p1__42976_SHARP_.key);
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values))
,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),true);

return addEventListener.call(null);
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(cljs.core.truth_(new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"arrow_drop_up":"arrow_drop_down"),new cljs.core.Keyword(null,"styles","styles",1954480375),velho_ds.molecules.style.field.dropdown_multiple_icon], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,cljs.core.merge.call(null,velho_ds.molecules.style.field.dropdown_multiple_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"block":"none")], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_multiple_list_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null))], null),cljs.core.mapv.call(null,((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values){
return (function (p1__42977_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[velho_ds.molecules.field.list_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),list_item_selected_fn,new cljs.core.Keyword(null,"is-selected?","is-selected?",694061043),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-from-filter","selected-from-filter",462922490).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),p1__42977_SHARP_),new cljs.core.Keyword(null,"content","content",15833224),p1__42977_SHARP_], null)],null));
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values))
,filtered_selections.call(null)))], null)], null);
});
;})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__42979,map__42979__$1,label,placeholder,selected_fn,options,preselected_values))
});
velho_ds.molecules.field.file_list_item = (function velho_ds$molecules$field$file_list_item(p__42981){
var map__42982 = p__42981;
var map__42982__$1 = ((((!((map__42982 == null)))?(((((map__42982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42982):map__42982);
var filename = cljs.core.get.call(null,map__42982__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var metadata = cljs.core.get.call(null,map__42982__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var on_change_fn = cljs.core.get.call(null,map__42982__$1,new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275));
var delete_fn = cljs.core.get.call(null,map__42982__$1,new cljs.core.Keyword(null,"delete-fn","delete-fn",-1787555591));
var metafields_visible_QMARK_ = reagent.core.atom.call(null,false);
var data = reagent.core.atom.call(null,metadata);
var update_data = ((function (metafields_visible_QMARK_,data,map__42982,map__42982__$1,filename,metadata,on_change_fn,delete_fn){
return (function (k,v){
cljs.core.swap_BANG_.call(null,data,cljs.core.assoc,k,v);

return on_change_fn.call(null,cljs.core.deref.call(null,data));
});})(metafields_visible_QMARK_,data,map__42982,map__42982__$1,filename,metadata,on_change_fn,delete_fn))
;
return ((function (metafields_visible_QMARK_,data,update_data,map__42982,map__42982__$1,filename,metadata,on_change_fn,delete_fn){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.file-list-item","li.file-list-item",-1543699003),stylefy.core.use_sub_style.call(null,velho_ds.molecules.style.field.drag_n_drop_content_ul,new cljs.core.Keyword(null,"li","li",723558921)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_item),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.vds-filename","span.vds-filename",1585130555),filename], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_item_btn_area),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"edit",new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),((function (metafields_visible_QMARK_,data,update_data,map__42982,map__42982__$1,filename,metadata,on_change_fn,delete_fn){
return (function (){
return cljs.core.swap_BANG_.call(null,metafields_visible_QMARK_,cljs.core.not);
});})(metafields_visible_QMARK_,data,update_data,map__42982,map__42982__$1,filename,metadata,on_change_fn,delete_fn))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.clickable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"close",new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),delete_fn], null)], null)], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vds-metadata-fields","div.vds-metadata-fields",1775859822),(cljs.core.truth_(cljs.core.deref.call(null,metafields_visible_QMARK_))?stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_item_description_area):stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_item_description_area_hidden))], null),(function (){var iter__4292__auto__ = ((function (metafields_visible_QMARK_,data,update_data,map__42982,map__42982__$1,filename,metadata,on_change_fn,delete_fn){
return (function velho_ds$molecules$field$file_list_item_$_iter__42984(s__42985){
return (new cljs.core.LazySeq(null,((function (metafields_visible_QMARK_,data,update_data,map__42982,map__42982__$1,filename,metadata,on_change_fn,delete_fn){
return (function (){
var s__42985__$1 = s__42985;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__42985__$1);
if(temp__5457__auto__){
var s__42985__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42985__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__42985__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__42987 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__42986 = (0);
while(true){
if((i__42986 < size__4291__auto__)){
var meta_key = cljs.core._nth.call(null,c__4290__auto__,i__42986);
cljs.core.chunk_append.call(null,b__42987,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.molecules.field.input_field,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.capitalize.call(null,cljs.core.name.call(null,meta_key)),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.get.call(null,metadata,meta_key),new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),cljs.core.partial.call(null,update_data,meta_key)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),meta_key], null)));

var G__42988 = (i__42986 + (1));
i__42986 = G__42988;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42987),velho_ds$molecules$field$file_list_item_$_iter__42984.call(null,cljs.core.chunk_rest.call(null,s__42985__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42987),null);
}
} else {
var meta_key = cljs.core.first.call(null,s__42985__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.molecules.field.input_field,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.capitalize.call(null,cljs.core.name.call(null,meta_key)),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.get.call(null,metadata,meta_key),new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),cljs.core.partial.call(null,update_data,meta_key)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),meta_key], null)),velho_ds$molecules$field$file_list_item_$_iter__42984.call(null,cljs.core.rest.call(null,s__42985__$2)));
}
} else {
return null;
}
break;
}
});})(metafields_visible_QMARK_,data,update_data,map__42982,map__42982__$1,filename,metadata,on_change_fn,delete_fn))
,null,null));
});})(metafields_visible_QMARK_,data,update_data,map__42982,map__42982__$1,filename,metadata,on_change_fn,delete_fn))
;
return iter__4292__auto__.call(null,cljs.core.keys.call(null,metadata));
})())], null);
});
;})(metafields_visible_QMARK_,data,update_data,map__42982,map__42982__$1,filename,metadata,on_change_fn,delete_fn))
});
velho_ds.molecules.field.add_to_files = (function velho_ds$molecules$field$add_to_files(filemap,item){
return cljs.core.assoc.call(null,filemap,cljs.core.fnil.call(null,cljs.core.inc,(0)).call(null,cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,filemap))),item);
});
velho_ds.molecules.field.sanitize_id = (function velho_ds$molecules$field$sanitize_id(str){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,str,/ /,"-"),/Ä/,"A"),/ä/,"a"),/Ö/,"O"),/ö/,"o"),/Å/,"a"),/å/,"a");
});
velho_ds.molecules.field.drag_n_drop = (function velho_ds$molecules$field$drag_n_drop(p__42998){
var map__42999 = p__42998;
var map__42999__$1 = ((((!((map__42999 == null)))?(((((map__42999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42999):map__42999);
var label = cljs.core.get.call(null,map__42999__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var help_text = cljs.core.get.call(null,map__42999__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
var on_change_fn = cljs.core.get.call(null,map__42999__$1,new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275));
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
var file_to_map = ((function (files,label_id,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),item.name,new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"file","file",-1269645878),item], null);
});})(files,label_id,map__42999,map__42999__$1,label,help_text,on_change_fn))
;
var get_files = ((function (files,label_id,file_to_map,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (e){
((function (files,label_id,file_to_map,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (p1__42991_SHARP_){
return cljs.core.reset_BANG_.call(null,files,p1__42991_SHARP_);
});})(files,label_id,file_to_map,map__42999,map__42999__$1,label,help_text,on_change_fn))
.call(null,((function (files,label_id,file_to_map,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (p1__42990_SHARP_){
return cljs.core.reduce.call(null,velho_ds.molecules.field.add_to_files,cljs.core.deref.call(null,files),p1__42990_SHARP_);
});})(files,label_id,file_to_map,map__42999,map__42999__$1,label,help_text,on_change_fn))
.call(null,((function (files,label_id,file_to_map,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (p1__42989_SHARP_){
return cljs.core.map.call(null,file_to_map,p1__42989_SHARP_);
});})(files,label_id,file_to_map,map__42999,map__42999__$1,label,help_text,on_change_fn))
.call(null,cljs.core.array_seq.call(null,e.files))));

return on_change_fn.call(null,cljs.core.deref.call(null,files));
});})(files,label_id,file_to_map,map__42999,map__42999__$1,label,help_text,on_change_fn))
;
var file_metadata_changed = ((function (files,label_id,file_to_map,get_files,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (key,new_metadata){
cljs.core.swap_BANG_.call(null,files,cljs.core.assoc,key,cljs.core.merge.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,files),key),new_metadata));

return on_change_fn.call(null,cljs.core.deref.call(null,files));
});})(files,label_id,file_to_map,get_files,map__42999,map__42999__$1,label,help_text,on_change_fn))
;
var remove_item = ((function (files,label_id,file_to_map,get_files,file_metadata_changed,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (p1__42992_SHARP_){
cljs.core.swap_BANG_.call(null,files,cljs.core.dissoc,p1__42992_SHARP_);

return on_change_fn.call(null,cljs.core.deref.call(null,files));
});})(files,label_id,file_to_map,get_files,file_metadata_changed,map__42999,map__42999__$1,label,help_text,on_change_fn))
;
return ((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_header),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_content),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (p1__42993_SHARP_){
return p1__42993_SHARP_.preventDefault();
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn))
,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (p1__42994_SHARP_){
return p1__42994_SHARP_.preventDefault();
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn))
,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (p1__42995_SHARP_){
return p1__42995_SHARP_.dataTransfer.setData("text/plain","");
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (p1__42996_SHARP_){
p1__42996_SHARP_.preventDefault();

return get_files.call(null,p1__42996_SHARP_.dataTransfer);
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn))
], null)),((!(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,files))))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_content_ul)], null),(function (){var iter__4292__auto__ = ((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function velho_ds$molecules$field$drag_n_drop_$_iter__43001(s__43002){
return (new cljs.core.LazySeq(null,((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (){
var s__43002__$1 = s__43002;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43002__$1);
if(temp__5457__auto__){
var s__43002__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43002__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43002__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43004 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43003 = (0);
while(true){
if((i__43003 < size__4291__auto__)){
var key = cljs.core._nth.call(null,c__4290__auto__,i__43003);
cljs.core.chunk_append.call(null,b__43004,(function (){var file_item = cljs.core.get.call(null,cljs.core.deref.call(null,files),key);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.molecules.field.file_list_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file_item)], null),new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),cljs.core.partial.call(null,file_metadata_changed,key),new cljs.core.Keyword(null,"delete-fn","delete-fn",-1787555591),((function (i__43003,file_item,key,c__4290__auto__,size__4291__auto__,b__43004,s__43002__$2,temp__5457__auto__,files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (){
return remove_item.call(null,key);
});})(i__43003,file_item,key,c__4290__auto__,size__4291__auto__,b__43004,s__43002__$2,temp__5457__auto__,files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
})());

var G__43005 = (i__43003 + (1));
i__43003 = G__43005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43004),velho_ds$molecules$field$drag_n_drop_$_iter__43001.call(null,cljs.core.chunk_rest.call(null,s__43002__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43004),null);
}
} else {
var key = cljs.core.first.call(null,s__43002__$2);
return cljs.core.cons.call(null,(function (){var file_item = cljs.core.get.call(null,cljs.core.deref.call(null,files),key);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.molecules.field.file_list_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(file_item),new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file_item)], null),new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275),cljs.core.partial.call(null,file_metadata_changed,key),new cljs.core.Keyword(null,"delete-fn","delete-fn",-1787555591),((function (file_item,key,s__43002__$2,temp__5457__auto__,files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (){
return remove_item.call(null,key);
});})(file_item,key,s__43002__$2,temp__5457__auto__,files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
})(),velho_ds$molecules$field$drag_n_drop_$_iter__43001.call(null,cljs.core.rest.call(null,s__43002__$2)));
}
} else {
return null;
}
break;
}
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn))
,null,null));
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn))
;
return iter__4292__auto__.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,files))));
})()):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,stylefy.core.use_style.call(null,velho_ds.molecules.style.field.drag_n_drop_helparea),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (){
return document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,["#file-input-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label_id))].join('')))).click();
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_sub_style.call(null,velho_ds.molecules.style.field.drag_n_drop_helparea,new cljs.core.Keyword(null,"p","p",151049309)),help_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"cloud_upload"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["file-input-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,label_id))].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"multiple","multiple",1244445549),"multiple",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn){
return (function (p1__42997_SHARP_){
get_files.call(null,p1__42997_SHARP_.target);

return p1__42997_SHARP_.target.value = null;
});})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null)], null)], null)], null)], null);
});
;})(files,label_id,file_to_map,get_files,file_metadata_changed,remove_item,map__42999,map__42999__$1,label,help_text,on_change_fn))
});
