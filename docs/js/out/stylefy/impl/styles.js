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
stylefy.impl.styles.add_global_vendors = (function stylefy$impl$styles$add_global_vendors(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),clojure.set.union.call(null,new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(style)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),clojure.set.union.call(null,new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(style))], null));
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
var hashable_style__$1 = cljs.core.dissoc.call(null,hashable_style,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432));
return ["_stylefy_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,hashable_style__$1))].join('');
} else {
return null;
}
});
stylefy.impl.styles.create_style_BANG_ = (function stylefy$impl$styles$create_style_BANG_(p__39294){
var map__39295 = p__39294;
var map__39295__$1 = ((((!((map__39295 == null)))?(((((map__39295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39295):map__39295);
var style = map__39295__$1;
var props = cljs.core.get.call(null,map__39295__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__39295__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
stylefy.impl.dom.save_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null));

var seq__39297 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(props)));
var chunk__39298 = null;
var count__39299 = (0);
var i__39300 = (0);
while(true){
if((i__39300 < count__39299)){
var sub_style = cljs.core._nth.call(null,chunk__39298,i__39300);
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.styles.hash_style.call(null,sub_style)], null));


var G__39301 = seq__39297;
var G__39302 = chunk__39298;
var G__39303 = count__39299;
var G__39304 = (i__39300 + (1));
seq__39297 = G__39301;
chunk__39298 = G__39302;
count__39299 = G__39303;
i__39300 = G__39304;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39297);
if(temp__5457__auto__){
var seq__39297__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39297__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__39297__$1);
var G__39305 = cljs.core.chunk_rest.call(null,seq__39297__$1);
var G__39306 = c__4319__auto__;
var G__39307 = cljs.core.count.call(null,c__4319__auto__);
var G__39308 = (0);
seq__39297 = G__39305;
chunk__39298 = G__39306;
count__39299 = G__39307;
i__39300 = G__39308;
continue;
} else {
var sub_style = cljs.core.first.call(null,seq__39297__$1);
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.styles.hash_style.call(null,sub_style)], null));


var G__39309 = cljs.core.next.call(null,seq__39297__$1);
var G__39310 = null;
var G__39311 = (0);
var G__39312 = (0);
seq__39297 = G__39309;
chunk__39298 = G__39310;
count__39299 = G__39311;
i__39300 = G__39312;
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
var inline_style = stylefy.impl.utils.garden_units__GT_to_css.call(null,stylefy.impl.utils.filter_props.call(null,style));
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
var len__4499__auto___39317 = arguments.length;
var i__4500__auto___39318 = (0);
while(true){
if((i__4500__auto___39318 < len__4499__auto___39317)){
args__4502__auto__.push((arguments[i__4500__auto___39318]));

var G__39319 = (i__4500__auto___39318 + (1));
i__4500__auto___39318 = G__39319;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
var resolved_sub_style = cljs.core.reduce.call(null,(function (p1__39313_SHARP_,p2__39314_SHARP_){
return cljs.core.get_in.call(null,p1__39313_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),p2__39314_SHARP_], null));
}),style,sub_styles);
if(cljs.core.truth_(resolved_sub_style)){
return resolved_sub_style;
} else {
return console.warn(["Sub-style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,sub_styles))," not found in style: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,style))].join(''));
}
});

stylefy.impl.styles.sub_style.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
stylefy.impl.styles.sub_style.cljs$lang$applyTo = (function (seq39315){
var G__39316 = cljs.core.first.call(null,seq39315);
var seq39315__$1 = cljs.core.next.call(null,seq39315);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39316,seq39315__$1);
});

stylefy.impl.styles.prepare_styles = (function stylefy$impl$styles$prepare_styles(styles){
var styles_39324__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,styles);
var seq__39320_39325 = cljs.core.seq.call(null,styles_39324__$1);
var chunk__39321_39326 = null;
var count__39322_39327 = (0);
var i__39323_39328 = (0);
while(true){
if((i__39323_39328 < count__39322_39327)){
var style_39329 = cljs.core._nth.call(null,chunk__39321_39326,i__39323_39328);
stylefy.impl.styles.use_style_BANG_.call(null,style_39329,cljs.core.PersistentArrayMap.EMPTY);

var temp__5457__auto___39330 = cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_39329));
if(cljs.core.truth_(temp__5457__auto___39330)){
var sub_styles_39331 = temp__5457__auto___39330;
stylefy.impl.styles.prepare_styles.call(null,sub_styles_39331);
} else {
}


var G__39332 = seq__39320_39325;
var G__39333 = chunk__39321_39326;
var G__39334 = count__39322_39327;
var G__39335 = (i__39323_39328 + (1));
seq__39320_39325 = G__39332;
chunk__39321_39326 = G__39333;
count__39322_39327 = G__39334;
i__39323_39328 = G__39335;
continue;
} else {
var temp__5457__auto___39336 = cljs.core.seq.call(null,seq__39320_39325);
if(temp__5457__auto___39336){
var seq__39320_39337__$1 = temp__5457__auto___39336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39320_39337__$1)){
var c__4319__auto___39338 = cljs.core.chunk_first.call(null,seq__39320_39337__$1);
var G__39339 = cljs.core.chunk_rest.call(null,seq__39320_39337__$1);
var G__39340 = c__4319__auto___39338;
var G__39341 = cljs.core.count.call(null,c__4319__auto___39338);
var G__39342 = (0);
seq__39320_39325 = G__39339;
chunk__39321_39326 = G__39340;
count__39322_39327 = G__39341;
i__39323_39328 = G__39342;
continue;
} else {
var style_39343 = cljs.core.first.call(null,seq__39320_39337__$1);
stylefy.impl.styles.use_style_BANG_.call(null,style_39343,cljs.core.PersistentArrayMap.EMPTY);

var temp__5457__auto___39344__$1 = cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_39343));
if(cljs.core.truth_(temp__5457__auto___39344__$1)){
var sub_styles_39345 = temp__5457__auto___39344__$1;
stylefy.impl.styles.prepare_styles.call(null,sub_styles_39345);
} else {
}


var G__39346 = cljs.core.next.call(null,seq__39320_39337__$1);
var G__39347 = null;
var G__39348 = (0);
var G__39349 = (0);
seq__39320_39325 = G__39346;
chunk__39321_39326 = G__39347;
count__39322_39327 = G__39348;
i__39323_39328 = G__39349;
continue;
}
} else {
}
}
break;
}

return stylefy.impl.dom.update_styles_in_dom_BANG_.call(null);
});
stylefy.impl.styles.init_global_vendor_prefixes = (function stylefy$impl$styles$init_global_vendor_prefixes(options){
var global_vendor_prefixes_options = new cljs.core.Keyword(null,"global-vendor-prefixes","global-vendor-prefixes",882986417).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.reset_BANG_.call(null,stylefy.impl.styles.global_vendor_prefixes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options)], null));
});
