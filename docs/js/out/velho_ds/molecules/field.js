// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.molecules.field');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('velho_ds.tokens.color');
goog.require('velho_ds.tokens.font');
goog.require('velho_ds.tokens.font_size');
goog.require('velho_ds.tokens.z_index');
goog.require('velho_ds.molecules.style.field');
goog.require('velho_ds.atoms.icon');
velho_ds.molecules.field.merge_styles = (function velho_ds$molecules$field$merge_styles(a,b){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(b))], null);
});
velho_ds.molecules.field.keyvalue = (function velho_ds$molecules$field$keyvalue(p__45480){
var map__45481 = p__45480;
var map__45481__$1 = ((((!((map__45481 == null)))?(((((map__45481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45481):map__45481);
var content = cljs.core.get.call(null,map__45481__$1,new cljs.core.Keyword(null,"content","content",15833224));
var label = cljs.core.get.call(null,map__45481__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.keyvalue_label),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.keyvalue_content),content], null)], null);
});
velho_ds.molecules.field.input_field = (function velho_ds$molecules$field$input_field(p__45484){
var map__45485 = p__45484;
var map__45485__$1 = ((((!((map__45485 == null)))?(((((map__45485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45485):map__45485);
var content = cljs.core.get.call(null,map__45485__$1,new cljs.core.Keyword(null,"content","content",15833224));
var label = cljs.core.get.call(null,map__45485__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_change_fn = cljs.core.get.call(null,map__45485__$1,new cljs.core.Keyword(null,"on-change-fn","on-change-fn",-1237394275));
var input_text = reagent.core.atom.call(null,content);
var update_and_send = ((function (input_text,map__45485,map__45485__$1,content,label,on_change_fn){
return (function (val){
cljs.core.reset_BANG_.call(null,input_text,val);

return on_change_fn.call(null,cljs.core.deref.call(null,input_text));
});})(input_text,map__45485,map__45485__$1,content,label,on_change_fn))
;
return ((function (input_text,update_and_send,map__45485,map__45485__$1,content,label,on_change_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.element),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.input_field,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"required","required",1807647006),"required",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (input_text,update_and_send,map__45485,map__45485__$1,content,label,on_change_fn){
return (function (p1__45483_SHARP_){
return update_and_send.call(null,p1__45483_SHARP_.target.value);
});})(input_text,update_and_send,map__45485,map__45485__$1,content,label,on_change_fn))
,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,input_text)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.input_field_heading),label], null)], null)], null);
});
;})(input_text,update_and_send,map__45485,map__45485__$1,content,label,on_change_fn))
});
velho_ds.molecules.field.multiline_field = (function velho_ds$molecules$field$multiline_field(var_args){
var G__45488 = arguments.length;
switch (G__45488) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.element),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.text_field,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),"required"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.input_field_heading),content], null)], null)], null);
});

velho_ds.molecules.field.multiline_field.cljs$lang$maxFixedArity = 2;

velho_ds.molecules.field.dropdown_menu = (function velho_ds$molecules$field$dropdown_menu(p__45492){
var map__45493 = p__45492;
var map__45493__$1 = ((((!((map__45493 == null)))?(((((map__45493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45493):map__45493);
var heading = cljs.core.get.call(null,map__45493__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var selected_fn = cljs.core.get.call(null,map__45493__$1,new cljs.core.Keyword(null,"selected-fn","selected-fn",-245239586));
var options = cljs.core.get.call(null,map__45493__$1,new cljs.core.Keyword(null,"options","options",99638489));
var default_value = cljs.core.get.call(null,map__45493__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var no_selection_text = cljs.core.get.call(null,map__45493__$1,new cljs.core.Keyword(null,"no-selection-text","no-selection-text",629753203));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.element),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__45493,map__45493__$1,heading,selected_fn,options,default_value,no_selection_text){
return (function (p1__45490_SHARP_){
return selected_fn.call(null,p1__45490_SHARP_.target.value);
});})(map__45493,map__45493__$1,heading,selected_fn,options,default_value,no_selection_text))
], null)),((cljs.core.not.call(null,default_value))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"value",new cljs.core.Keyword(null,"selected","selected",574897764),"selected",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled"], null),no_selection_text], null):null),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown)], null),cljs.core.mapv.call(null,((function (map__45493,map__45493__$1,heading,selected_fn,options,default_value,no_selection_text){
return (function (p1__45491_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"option","option",65132272),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__45491_SHARP_)], null),((cljs.core._EQ_.call(null,default_value,p1__45491_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),"selected"], null):null)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__45491_SHARP_)],null));
});})(map__45493,map__45493__$1,heading,selected_fn,options,default_value,no_selection_text))
,options)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.dropdown_heading),heading], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),stylefy.core.use_style.call(null,velho_ds.molecules.style.field.icon),"arrow_drop_down"], null)], null)], null);
});
velho_ds.molecules.field.list_item = (function velho_ds$molecules$field$list_item(p__45495){
var map__45496 = p__45495;
var map__45496__$1 = ((((!((map__45496 == null)))?(((((map__45496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45496):map__45496);
var on_click_fn = cljs.core.get.call(null,map__45496__$1,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852));
var content = cljs.core.get.call(null,map__45496__$1,new cljs.core.Keyword(null,"content","content",15833224));
var is_selected_QMARK_ = cljs.core.get.call(null,map__45496__$1,new cljs.core.Keyword(null,"is-selected?","is-selected?",694061043));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(is_selected_QMARK_)?velho_ds.tokens.color.color_primary:velho_ds.tokens.color.color_neutral_1),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(is_selected_QMARK_)?velho_ds.tokens.color.color_neutral_2:velho_ds.tokens.color.color_black),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),velho_ds.tokens.color.color_primary,new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.color_neutral_2], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__45496,map__45496__$1,on_click_fn,content,is_selected_QMARK_){
return (function (){
return on_click_fn.call(null,content);
});})(map__45496,map__45496__$1,on_click_fn,content,is_selected_QMARK_))
,new cljs.core.Keyword(null,"key","key",-1516042587),content,new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),content], null);
});
velho_ds.molecules.field.selected_list_items = (function velho_ds$molecules$field$selected_list_items(p__45498){
var map__45499 = p__45498;
var map__45499__$1 = ((((!((map__45499 == null)))?(((((map__45499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45499):map__45499);
var on_click_fn = cljs.core.get.call(null,map__45499__$1,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852));
var content = cljs.core.get.call(null,map__45499__$1,new cljs.core.Keyword(null,"content","content",15833224));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),velho_ds.tokens.color.color_neutral_5,new cljs.core.Keyword(null,"color","color",1011675173),velho_ds.tokens.color.color_neutral_2,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (map__45499,map__45499__$1,on_click_fn,content){
return (function (){
return on_click_fn.call(null,content);
});})(map__45499,map__45499__$1,on_click_fn,content))
,new cljs.core.Keyword(null,"key","key",-1516042587),content,new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.5rem"], null)),content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"cancel",new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),"3px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null)], null)], null);
});
velho_ds.molecules.field.search_in_list = (function velho_ds$molecules$field$search_in_list(collection,search_word){
return cljs.core.filter.call(null,(function (p1__45501_SHARP_){
return clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,p1__45501_SHARP_),search_word);
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
velho_ds.molecules.field.dropdown_multiple = (function velho_ds$molecules$field$dropdown_multiple(p__45510){
var map__45511 = p__45510;
var map__45511__$1 = ((((!((map__45511 == null)))?(((((map__45511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45511):map__45511);
var heading = cljs.core.get.call(null,map__45511__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var selected_fn = cljs.core.get.call(null,map__45511__$1,new cljs.core.Keyword(null,"selected-fn","selected-fn",-245239586));
var options = cljs.core.get.call(null,map__45511__$1,new cljs.core.Keyword(null,"options","options",99638489));
var preselected_values = cljs.core.get.call(null,map__45511__$1,new cljs.core.Keyword(null,"preselected-values","preselected-values",-1336486963));
var default_value = cljs.core.get.call(null,map__45511__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var no_selection_text = cljs.core.get.call(null,map__45511__$1,new cljs.core.Keyword(null,"no-selection-text","no-selection-text",629753203));
if(cljs.core.fn_QMARK_.call(null,selected_fn)){
} else {
throw (new Error(["Assert failed: ",":selected-fn function is required for dropdown-multiple","\n","(fn? selected-fn)"].join('')));
}

if(cljs.core.vector_QMARK_.call(null,options)){
} else {
throw (new Error(["Assert failed: ",":options vector is required for dropdown-multiple","\n","(vector? options)"].join('')));
}

var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"selected-items","selected-items",-558712488),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),null,new cljs.core.Keyword(null,"selected-from-filter","selected-from-filter",462922490),"",new cljs.core.Keyword(null,"focus","focus",234677911),false], null));
var input_value_changed_fn = ((function (state,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text){
return (function (p1__45502_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),p1__45502_SHARP_);
});})(state,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text))
;
var list_item_selected_fn = ((function (state,input_value_changed_fn,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text){
return (function (p1__45503_SHARP_){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488)], null),cljs.core.conj,p1__45503_SHARP_);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"");

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),null);

return selected_fn.call(null,new cljs.core.Keyword(null,"selected-items","selected-items",-558712488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(state,input_value_changed_fn,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text))
;
var selected_list_item_selected_fn = ((function (state,input_value_changed_fn,list_item_selected_fn,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text){
return (function (p1__45504_SHARP_){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-items","selected-items",-558712488)], null),velho_ds.molecules.field.remove_from_vector,p1__45504_SHARP_);

return selected_fn.call(null,new cljs.core.Keyword(null,"selected-items","selected-items",-558712488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(state,input_value_changed_fn,list_item_selected_fn,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text))
;
var selectable_items = ((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text){
return (function (){
return velho_ds.molecules.field.remove_from_vector.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"selected-items","selected-items",-558712488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text))
;
var filtered_selections = ((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text){
return (function (){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.sorted_set,velho_ds.molecules.field.search_in_list.call(null,selectable_items.call(null),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))));
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text))
;
var key_press_handler_fn = ((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text){
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
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text))
;
var global_click_handler = ((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text){
return (function (p1__45505_SHARP_){
var target = p1__45505_SHARP_.target;
if(cljs.core.empty_QMARK_.call(null,velho_ds.molecules.field.search_in_list.call(null,clojure.string.split.call(null,target.className,/ /),"dropdown-multi"))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),false);
} else {
return null;
}
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text))
;
var addEventListener = ((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text){
return (function (){
return document.getElementById("app").addEventListener("click",global_click_handler);
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text))
;
return ((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null))], null),cljs.core.mapv.call(null,((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text){
return (function (p1__45506_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[velho_ds.molecules.field.selected_list_items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),selected_list_item_selected_fn,new cljs.core.Keyword(null,"content","content",15833224),p1__45506_SHARP_], null)],null));
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text))
,new cljs.core.Keyword(null,"selected-items","selected-items",-558712488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),velho_ds.tokens.color.color_neutral_1,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.color.color_neutral_5)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["border-box",velho_ds.tokens.font_size.font_size_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null)], null),velho_ds.tokens.font.font_weight_base,"calc(100% - 1.5rem)","none",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),null], null), null),"0.5rem","inline-block",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webkit","moz","o"], null),(0),velho_ds.tokens.font.font_family_text]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text){
return (function (p1__45507_SHARP_){
return input_value_changed_fn.call(null,p1__45507_SHARP_.target.value);
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text){
return (function (p1__45508_SHARP_){
return key_press_handler_fn.call(null,p1__45508_SHARP_.key);
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text))
,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),true);

return addEventListener.call(null);
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [velho_ds.atoms.icon.icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"arrow_drop_down"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 2px 2px 0 rgba(0,0,0,.5)",new cljs.core.Keyword(null,"max-height","max-height",-612563804),["calc(4*",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velho_ds.tokens.font_size.font_size_base)," + 8*0.5rem + 4*1px)"].join(''),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"z-index","z-index",1892827090),velho_ds.tokens.z_index.z_index_sticky,new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"block":"none")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null)),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-multi"], null))], null),cljs.core.mapv.call(null,((function (state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text){
return (function (p1__45509_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[velho_ds.molecules.field.list_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),list_item_selected_fn,new cljs.core.Keyword(null,"is-selected?","is-selected?",694061043),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-from-filter","selected-from-filter",462922490).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),p1__45509_SHARP_),new cljs.core.Keyword(null,"content","content",15833224),p1__45509_SHARP_], null)],null));
});})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text))
,filtered_selections.call(null)))], null)], null);
});
;})(state,input_value_changed_fn,list_item_selected_fn,selected_list_item_selected_fn,selectable_items,filtered_selections,key_press_handler_fn,global_click_handler,addEventListener,map__45511,map__45511__$1,heading,selected_fn,options,preselected_values,default_value,no_selection_text))
});
