// Compiled by ClojureScript 1.10.238 {}
goog.provide('stylefy.impl.styles');
goog.require('cljs.core');
goog.require('stylefy.impl.dom');
goog.require('garden.core');
goog.require('clojure.string');
goog.require('garden.units');
goog.require('stylefy.impl.utils');
goog.require('clojure.set');
goog.require('garden.color');
goog.require('garden.types');
goog.require('garden.compiler');
stylefy.impl.styles.global_vendor_prefixes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),cljs.core.PersistentHashSet.EMPTY], null));
stylefy.impl.styles.default_class_prefix = "_stylefy";
stylefy.impl.styles.use_custom_class_prefix_QMARK_ = cljs.core.atom.call(null,false);
stylefy.impl.styles.add_global_vendors = (function stylefy$impl$styles$add_global_vendors(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),clojure.set.union.call(null,new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(style)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),clojure.set.union.call(null,new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(style))], null));
});
/**
 * Checks that the value is valid and returns as properly formatted prefix.
 */
stylefy.impl.styles.check_custom_class_prefix = (function stylefy$impl$styles$check_custom_class_prefix(custom_class_prefix){
if((((custom_class_prefix == null)) || (typeof custom_class_prefix === 'string') || ((custom_class_prefix instanceof cljs.core.Keyword)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Custom class prefix should be either string, keyword or nil, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,custom_class_prefix))].join('')),"\n","(or (nil? custom-class-prefix) (string? custom-class-prefix) (keyword? custom-class-prefix))"].join('')));
}

if((custom_class_prefix == null)){
return stylefy.impl.styles.default_class_prefix;
} else {
if(typeof custom_class_prefix === 'string'){
return custom_class_prefix;
} else {
if((custom_class_prefix instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,custom_class_prefix);
} else {
return null;
}
}
}
});
stylefy.impl.styles.hash_style = (function stylefy$impl$styles$hash_style(style){
if(!(cljs.core.empty_QMARK_.call(null,style))){
var hashable_garden_units = cljs.core.reduce.call(null,(function (result,prop_key){
var prop_value = prop_key.call(null,style);
if((((prop_value instanceof garden.types.CSSUnit)) || ((prop_value instanceof garden.color.CSSColor)))){
return cljs.core.assoc.call(null,result,prop_key,garden.compiler.render_css.call(null,prop_value));
} else {
return null;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,stylefy.impl.utils.filter_props.call(null,style)));
var hashable_style = cljs.core.merge.call(null,style,hashable_garden_units);
var hashable_style__$1 = cljs.core.dissoc.call(null,hashable_style,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.Keyword("stylefy.core","class-prefix","stylefy.core/class-prefix",1388140586));
var class_prefix = (cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.styles.use_custom_class_prefix_QMARK_))?stylefy.impl.styles.check_custom_class_prefix.call(null,new cljs.core.Keyword("stylefy.core","class-prefix","stylefy.core/class-prefix",1388140586).cljs$core$IFn$_invoke$arity$1(style)):stylefy.impl.styles.default_class_prefix);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_prefix),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,hashable_style__$1))].join('');
} else {
return null;
}
});
stylefy.impl.styles.create_style_BANG_ = (function stylefy$impl$styles$create_style_BANG_(p__41483){
var map__41484 = p__41483;
var map__41484__$1 = ((((!((map__41484 == null)))?(((((map__41484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41484):map__41484);
var style = map__41484__$1;
var props = cljs.core.get.call(null,map__41484__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__41484__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
stylefy.impl.dom.save_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null));

var seq__41486 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(props)));
var chunk__41487 = null;
var count__41488 = (0);
var i__41489 = (0);
while(true){
if((i__41489 < count__41488)){
var sub_style = cljs.core._nth.call(null,chunk__41487,i__41489);
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.styles.hash_style.call(null,sub_style)], null));


var G__41490 = seq__41486;
var G__41491 = chunk__41487;
var G__41492 = count__41488;
var G__41493 = (i__41489 + (1));
seq__41486 = G__41490;
chunk__41487 = G__41491;
count__41488 = G__41492;
i__41489 = G__41493;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41486);
if(temp__5457__auto__){
var seq__41486__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41486__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__41486__$1);
var G__41494 = cljs.core.chunk_rest.call(null,seq__41486__$1);
var G__41495 = c__4319__auto__;
var G__41496 = cljs.core.count.call(null,c__4319__auto__);
var G__41497 = (0);
seq__41486 = G__41494;
chunk__41487 = G__41495;
count__41488 = G__41496;
i__41489 = G__41497;
continue;
} else {
var sub_style = cljs.core.first.call(null,seq__41486__$1);
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.styles.hash_style.call(null,sub_style)], null));


var G__41498 = cljs.core.next.call(null,seq__41486__$1);
var G__41499 = null;
var G__41500 = (0);
var G__41501 = (0);
seq__41486 = G__41498;
chunk__41487 = G__41499;
count__41488 = G__41500;
i__41489 = G__41501;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given a style, hash and options, returns HTML attributes for a Hiccup component,
 * or nil if there are not any attributes.
 */
stylefy.impl.styles.prepare_style_return_value = (function stylefy$impl$styles$prepare_style_return_value(style,style_hash,options){
var with_classes = cljs.core.concat.call(null,new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(style),new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options));
var html_attributes = stylefy.impl.utils.filter_props.call(null,options);
var html_attributes_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(html_attributes);
var html_attributes_inline_style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(html_attributes);
var final_class = clojure.string.trim.call(null,(((html_attributes_class == null))?clojure.string.join.call(null," ",cljs.core.concat.call(null,with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):((typeof html_attributes_class === 'string')?clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [html_attributes_class], null),with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):((cljs.core.vector_QMARK_.call(null,html_attributes_class))?clojure.string.join.call(null," ",cljs.core.concat.call(null,html_attributes_class,with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):null))));
var final_html_attributes = cljs.core.merge.call(null,html_attributes,((!(cljs.core.empty_QMARK_.call(null,final_class)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),final_class], null):null));
if((((html_attributes_class == null)) || (typeof html_attributes_class === 'string') || (cljs.core.vector_QMARK_.call(null,html_attributes_class)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Unsupported :class type (should be nil, string or vector). Got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,html_attributes_class))].join('')),"\n","(or (nil? html-attributes-class) (string? html-attributes-class) (vector? html-attributes-class))"].join('')));
}

if((html_attributes_inline_style == null)){
} else {
throw (new Error(["Assert failed: ","HTML attribute :style is not supported in options map. Instead, you should provide your style definitions as the first argument when calling use-style.","\n","(nil? html-attributes-inline-style)"].join('')));
}

if(!(cljs.core.empty_QMARK_.call(null,final_html_attributes))){
return final_html_attributes;
} else {
return null;
}
});
stylefy.impl.styles.style_return_value = (function stylefy$impl$styles$style_return_value(style,style_hash,options){
var return_map = stylefy.impl.styles.prepare_style_return_value.call(null,style,style_hash,options);
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.empty_QMARK_.call(null,style);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return stylefy.impl.dom.style_in_dom_QMARK_.call(null,style_hash);
}
})())){
return return_map;
} else {
var contains_media_queries_QMARK_ = !((new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(style) == null));
var contains_feature_queries_QMARK_ = !((new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(style) == null));
var excluded_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),null], null), null);
var contains_modes_not_excluded_QMARK_ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,excluded_modes),cljs.core.keys.call(null,new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(style)))));
var inline_style = stylefy.impl.utils.garden_units__GT_css.call(null,stylefy.impl.utils.filter_props.call(null,style));
if(((contains_media_queries_QMARK_) || (contains_feature_queries_QMARK_) || (contains_modes_not_excluded_QMARK_))){
return cljs.core.merge.call(null,return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,inline_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null))], null));
} else {
return cljs.core.merge.call(null,return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),inline_style], null));
}
}
});
stylefy.impl.styles.use_style_BANG_ = (function stylefy$impl$styles$use_style_BANG_(style,options){
cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use);

var with_classes_options = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options);
var with_classes_style = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(style);
if((((with_classes_options == null)) || (((cljs.core.vector_QMARK_.call(null,with_classes_options)) && (cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,with_classes_options)))))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["with-classes argument inside options map must be a vector of strings, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,with_classes_options))].join('')),"\n","(or (nil? with-classes-options) (and (vector? with-classes-options) (every? string? with-classes-options)))"].join('')));
}

if((((with_classes_style == null)) || (((cljs.core.vector_QMARK_.call(null,with_classes_style)) && (cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,with_classes_style)))))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["with-classes argument inside style map must be a vector of strings, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,with_classes_style))].join('')),"\n","(or (nil? with-classes-style) (and (vector? with-classes-style) (every? string? with-classes-style)))"].join('')));
}

stylefy.impl.dom.check_stylefy_initialisation.call(null);

var style_with_global_vendors = ((cljs.core.empty_QMARK_.call(null,style))?null:stylefy.impl.styles.add_global_vendors.call(null,style));
var style_hash = stylefy.impl.styles.hash_style.call(null,style_with_global_vendors);
var already_created = stylefy.impl.dom.style_by_hash.call(null,style_hash);
if(((!(cljs.core.empty_QMARK_.call(null,style_with_global_vendors))) && (!((style_hash == null))) && (cljs.core.not.call(null,already_created)))){
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),style_with_global_vendors,new cljs.core.Keyword(null,"hash","hash",-13781596),style_hash], null));
} else {
}

return stylefy.impl.styles.style_return_value.call(null,style_with_global_vendors,style_hash,options);
});
stylefy.impl.styles.use_sub_style_BANG_ = (function stylefy$impl$styles$use_sub_style_BANG_(style,sub_style,options){
var resolved_sub_style = cljs.core.get.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style),sub_style);
if(cljs.core.truth_(resolved_sub_style)){
return stylefy.impl.styles.use_style_BANG_.call(null,resolved_sub_style,options);
} else {
return console.warn(["Sub-style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,sub_style))," not found in style: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,style))].join(''));
}
});
stylefy.impl.styles.sub_style = (function stylefy$impl$styles$sub_style(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41506 = arguments.length;
var i__4500__auto___41507 = (0);
while(true){
if((i__4500__auto___41507 < len__4499__auto___41506)){
args__4502__auto__.push((arguments[i__4500__auto___41507]));

var G__41508 = (i__4500__auto___41507 + (1));
i__4500__auto___41507 = G__41508;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
var resolved_sub_style = cljs.core.reduce.call(null,(function (p1__41502_SHARP_,p2__41503_SHARP_){
return cljs.core.get_in.call(null,p1__41502_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),p2__41503_SHARP_], null));
}),style,sub_styles);
if(cljs.core.truth_(resolved_sub_style)){
return resolved_sub_style;
} else {
return console.warn(["Sub-style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,sub_styles))," not found in style: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,style))].join(''));
}
});

stylefy.impl.styles.sub_style.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
stylefy.impl.styles.sub_style.cljs$lang$applyTo = (function (seq41504){
var G__41505 = cljs.core.first.call(null,seq41504);
var seq41504__$1 = cljs.core.next.call(null,seq41504);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41505,seq41504__$1);
});

stylefy.impl.styles.prepare_styles = (function stylefy$impl$styles$prepare_styles(styles){
var styles_41513__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,styles);
var seq__41509_41514 = cljs.core.seq.call(null,styles_41513__$1);
var chunk__41510_41515 = null;
var count__41511_41516 = (0);
var i__41512_41517 = (0);
while(true){
if((i__41512_41517 < count__41511_41516)){
var style_41518 = cljs.core._nth.call(null,chunk__41510_41515,i__41512_41517);
stylefy.impl.styles.use_style_BANG_.call(null,style_41518,cljs.core.PersistentArrayMap.EMPTY);

var temp__5457__auto___41519 = cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_41518));
if(cljs.core.truth_(temp__5457__auto___41519)){
var sub_styles_41520 = temp__5457__auto___41519;
stylefy.impl.styles.prepare_styles.call(null,sub_styles_41520);
} else {
}


var G__41521 = seq__41509_41514;
var G__41522 = chunk__41510_41515;
var G__41523 = count__41511_41516;
var G__41524 = (i__41512_41517 + (1));
seq__41509_41514 = G__41521;
chunk__41510_41515 = G__41522;
count__41511_41516 = G__41523;
i__41512_41517 = G__41524;
continue;
} else {
var temp__5457__auto___41525 = cljs.core.seq.call(null,seq__41509_41514);
if(temp__5457__auto___41525){
var seq__41509_41526__$1 = temp__5457__auto___41525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41509_41526__$1)){
var c__4319__auto___41527 = cljs.core.chunk_first.call(null,seq__41509_41526__$1);
var G__41528 = cljs.core.chunk_rest.call(null,seq__41509_41526__$1);
var G__41529 = c__4319__auto___41527;
var G__41530 = cljs.core.count.call(null,c__4319__auto___41527);
var G__41531 = (0);
seq__41509_41514 = G__41528;
chunk__41510_41515 = G__41529;
count__41511_41516 = G__41530;
i__41512_41517 = G__41531;
continue;
} else {
var style_41532 = cljs.core.first.call(null,seq__41509_41526__$1);
stylefy.impl.styles.use_style_BANG_.call(null,style_41532,cljs.core.PersistentArrayMap.EMPTY);

var temp__5457__auto___41533__$1 = cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_41532));
if(cljs.core.truth_(temp__5457__auto___41533__$1)){
var sub_styles_41534 = temp__5457__auto___41533__$1;
stylefy.impl.styles.prepare_styles.call(null,sub_styles_41534);
} else {
}


var G__41535 = cljs.core.next.call(null,seq__41509_41526__$1);
var G__41536 = null;
var G__41537 = (0);
var G__41538 = (0);
seq__41509_41514 = G__41535;
chunk__41510_41515 = G__41536;
count__41511_41516 = G__41537;
i__41512_41517 = G__41538;
continue;
}
} else {
}
}
break;
}

return stylefy.impl.dom.update_dom.call(null);
});
stylefy.impl.styles.init_global_vendor_prefixes = (function stylefy$impl$styles$init_global_vendor_prefixes(options){
var global_vendor_prefixes_options = new cljs.core.Keyword(null,"global-vendor-prefixes","global-vendor-prefixes",882986417).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.reset_BANG_.call(null,stylefy.impl.styles.global_vendor_prefixes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options)], null));
});
stylefy.impl.styles.init_custom_class_prefix = (function stylefy$impl$styles$init_custom_class_prefix(options){
return cljs.core.reset_BANG_.call(null,stylefy.impl.styles.use_custom_class_prefix_QMARK_,cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"use-custom-class-prefix?","use-custom-class-prefix?",-1156349118).cljs$core$IFn$_invoke$arity$1(options)));
});
