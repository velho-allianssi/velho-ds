// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('stylefy.impl.styles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('stylefy.impl.dom');
goog.require('garden.core');
goog.require('clojure.string');
goog.require('garden.units');
goog.require('stylefy.impl.utils');
goog.require('clojure.set');
goog.require('garden.color');
goog.require('garden.types');
goog.require('garden.compiler');
stylefy.impl.styles.global_vendor_prefixes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stylefy$core_SLASH_vendors,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix,cljs.core.PersistentHashSet.EMPTY], null));
stylefy.impl.styles.add_global_vendors = (function stylefy$impl$styles$add_global_vendors(style){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stylefy$core_SLASH_vendors,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$core_SLASH_vendors.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),cljs.core.cst$kw$stylefy$core_SLASH_vendors.cljs$core$IFn$_invoke$arity$1(style)),cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(style))], null)], 0));
});
stylefy.impl.styles.hash_style = (function stylefy$impl$styles$hash_style(style){
if(!(cljs.core.empty_QMARK_(style))){
var hashable_garden_units = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop_key){
var prop_value = (prop_key.cljs$core$IFn$_invoke$arity$1 ? prop_key.cljs$core$IFn$_invoke$arity$1(style) : prop_key.call(null,style));
if((((prop_value instanceof garden.types.CSSUnit)) || ((prop_value instanceof garden.color.CSSColor)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,prop_key,garden.compiler.render_css(prop_value));
} else {
return null;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(stylefy.impl.utils.filter_props(style)));
var hashable_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,hashable_garden_units], 0));
var hashable_style__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(hashable_style,cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles);
return ["_stylefy_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(hashable_style__$1))].join('');
} else {
return null;
}
});
stylefy.impl.styles.create_style_BANG_ = (function stylefy$impl$styles$create_style_BANG_(p__14105){
var map__14106 = p__14105;
var map__14106__$1 = ((((!((map__14106 == null)))?(((((map__14106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14106):map__14106);
var style = map__14106__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14106__$1,cljs.core.cst$kw$props);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14106__$1,cljs.core.cst$kw$hash);
stylefy.impl.dom.save_style_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,props,cljs.core.cst$kw$hash,hash], null));

var seq__14108 = cljs.core.seq(cljs.core.vals(cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles.cljs$core$IFn$_invoke$arity$1(props)));
var chunk__14109 = null;
var count__14110 = (0);
var i__14111 = (0);
while(true){
if((i__14111 < count__14110)){
var sub_style = chunk__14109.cljs$core$IIndexed$_nth$arity$2(null,i__14111);
var G__14112_14114 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,sub_style,cljs.core.cst$kw$hash,stylefy.impl.styles.hash_style(sub_style)], null);
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1(G__14112_14114) : stylefy.impl.styles.create_style_BANG_.call(null,G__14112_14114));


var G__14115 = seq__14108;
var G__14116 = chunk__14109;
var G__14117 = count__14110;
var G__14118 = (i__14111 + (1));
seq__14108 = G__14115;
chunk__14109 = G__14116;
count__14110 = G__14117;
i__14111 = G__14118;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14108);
if(temp__5457__auto__){
var seq__14108__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14108__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__14108__$1);
var G__14119 = cljs.core.chunk_rest(seq__14108__$1);
var G__14120 = c__4319__auto__;
var G__14121 = cljs.core.count(c__4319__auto__);
var G__14122 = (0);
seq__14108 = G__14119;
chunk__14109 = G__14120;
count__14110 = G__14121;
i__14111 = G__14122;
continue;
} else {
var sub_style = cljs.core.first(seq__14108__$1);
var G__14113_14123 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,sub_style,cljs.core.cst$kw$hash,stylefy.impl.styles.hash_style(sub_style)], null);
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1(G__14113_14123) : stylefy.impl.styles.create_style_BANG_.call(null,G__14113_14123));


var G__14124 = cljs.core.next(seq__14108__$1);
var G__14125 = null;
var G__14126 = (0);
var G__14127 = (0);
seq__14108 = G__14124;
chunk__14109 = G__14125;
count__14110 = G__14126;
i__14111 = G__14127;
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
var with_classes = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$core_SLASH_with_DASH_classes.cljs$core$IFn$_invoke$arity$1(style),cljs.core.cst$kw$stylefy$core_SLASH_with_DASH_classes.cljs$core$IFn$_invoke$arity$1(options));
var html_attributes = stylefy.impl.utils.filter_props(options);
var html_attributes_class = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(html_attributes);
var html_attributes_inline_style = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(html_attributes);
var final_class = clojure.string.trim((((html_attributes_class == null))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):((typeof html_attributes_class === 'string')?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [html_attributes_class], null),with_classes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null)], 0))):((cljs.core.vector_QMARK_(html_attributes_class))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(html_attributes_class,with_classes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null)], 0))):null))));
var final_html_attributes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html_attributes,((!(cljs.core.empty_QMARK_(final_class)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,final_class], null):null)], 0));
if((((html_attributes_class == null)) || (typeof html_attributes_class === 'string') || (cljs.core.vector_QMARK_(html_attributes_class)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Unsupported :class type (should be nil, string or vector). Got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html_attributes_class], 0)))].join('')),"\n","(or (nil? html-attributes-class) (string? html-attributes-class) (vector? html-attributes-class))"].join('')));
}

if((html_attributes_inline_style == null)){
} else {
throw (new Error(["Assert failed: ","HTML attribute :style is not supported in options map. Instead, you should provide your style definitions as the first argument when calling use-style.","\n","(nil? html-attributes-inline-style)"].join('')));
}

if(!(cljs.core.empty_QMARK_(final_html_attributes))){
return final_html_attributes;
} else {
return null;
}
});
stylefy.impl.styles.style_return_value = (function stylefy$impl$styles$style_return_value(style,style_hash,options){
var return_map = stylefy.impl.styles.prepare_style_return_value(style,style_hash,options);
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.empty_QMARK_(style);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return stylefy.impl.dom.style_in_dom_QMARK_(style_hash);
}
})())){
return return_map;
} else {
var contains_media_queries_QMARK_ = !((cljs.core.cst$kw$stylefy$core_SLASH_media.cljs$core$IFn$_invoke$arity$1(style) == null));
var contains_feature_queries_QMARK_ = !((cljs.core.cst$kw$stylefy$core_SLASH_supports.cljs$core$IFn$_invoke$arity$1(style) == null));
var excluded_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hover,null], null), null);
var contains_modes_not_excluded_QMARK_ = !(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,excluded_modes),cljs.core.keys(cljs.core.cst$kw$stylefy$core_SLASH_mode.cljs$core$IFn$_invoke$arity$1(style)))));
var inline_style = stylefy.impl.utils.garden_units__GT_to_css(stylefy.impl.utils.filter_props(style));
if(((contains_media_queries_QMARK_) || (contains_feature_queries_QMARK_) || (contains_modes_not_excluded_QMARK_))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visibility,"hidden"], null)], 0))], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,inline_style], null)], 0));
}
}
});
stylefy.impl.styles.use_style_BANG_ = (function stylefy$impl$styles$use_style_BANG_(style,options){
cljs.core.deref(stylefy.impl.dom.styles_in_use);

var with_classes_options = cljs.core.cst$kw$stylefy$core_SLASH_with_DASH_classes.cljs$core$IFn$_invoke$arity$1(options);
var with_classes_style = cljs.core.cst$kw$stylefy$core_SLASH_with_DASH_classes.cljs$core$IFn$_invoke$arity$1(style);
if((((with_classes_options == null)) || (((cljs.core.vector_QMARK_(with_classes_options)) && (cljs.core.every_QMARK_(cljs.core.string_QMARK_,with_classes_options)))))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["with-classes argument inside options map must be a vector of strings, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([with_classes_options], 0)))].join('')),"\n","(or (nil? with-classes-options) (and (vector? with-classes-options) (every? string? with-classes-options)))"].join('')));
}

if((((with_classes_style == null)) || (((cljs.core.vector_QMARK_(with_classes_style)) && (cljs.core.every_QMARK_(cljs.core.string_QMARK_,with_classes_style)))))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["with-classes argument inside style map must be a vector of strings, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([with_classes_style], 0)))].join('')),"\n","(or (nil? with-classes-style) (and (vector? with-classes-style) (every? string? with-classes-style)))"].join('')));
}

var style_with_global_vendors = ((cljs.core.empty_QMARK_(style))?null:stylefy.impl.styles.add_global_vendors(style));
var style_hash = stylefy.impl.styles.hash_style(style_with_global_vendors);
var already_created = stylefy.impl.dom.style_by_hash(style_hash);
if(((!(cljs.core.empty_QMARK_(style_with_global_vendors))) && (!((style_hash == null))) && (cljs.core.not(already_created)))){
stylefy.impl.styles.create_style_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,style_with_global_vendors,cljs.core.cst$kw$hash,style_hash], null));
} else {
}

return stylefy.impl.styles.style_return_value(style_with_global_vendors,style_hash,options);
});
stylefy.impl.styles.use_sub_style_BANG_ = (function stylefy$impl$styles$use_sub_style_BANG_(style,sub_style,options){
var resolved_sub_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles.cljs$core$IFn$_invoke$arity$1(style),sub_style);
if(cljs.core.truth_(resolved_sub_style)){
return stylefy.impl.styles.use_style_BANG_(resolved_sub_style,options);
} else {
return console.warn(["Sub-style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_style], 0)))," not found in style: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)))].join(''));
}
});
stylefy.impl.styles.sub_style = (function stylefy$impl$styles$sub_style(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14132 = arguments.length;
var i__4500__auto___14133 = (0);
while(true){
if((i__4500__auto___14133 < len__4499__auto___14132)){
args__4502__auto__.push((arguments[i__4500__auto___14133]));

var G__14134 = (i__4500__auto___14133 + (1));
i__4500__auto___14133 = G__14134;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
var resolved_sub_style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14128_SHARP_,p2__14129_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__14128_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles,p2__14129_SHARP_], null));
}),style,sub_styles);
if(cljs.core.truth_(resolved_sub_style)){
return resolved_sub_style;
} else {
return console.warn(["Sub-style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_styles], 0)))," not found in style: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)))].join(''));
}
});

stylefy.impl.styles.sub_style.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
stylefy.impl.styles.sub_style.cljs$lang$applyTo = (function (seq14130){
var G__14131 = cljs.core.first(seq14130);
var seq14130__$1 = cljs.core.next(seq14130);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14131,seq14130__$1);
});

stylefy.impl.styles.prepare_styles = (function stylefy$impl$styles$prepare_styles(styles){
var styles_14139__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,styles);
var seq__14135_14140 = cljs.core.seq(styles_14139__$1);
var chunk__14136_14141 = null;
var count__14137_14142 = (0);
var i__14138_14143 = (0);
while(true){
if((i__14138_14143 < count__14137_14142)){
var style_14144 = chunk__14136_14141.cljs$core$IIndexed$_nth$arity$2(null,i__14138_14143);
stylefy.impl.styles.use_style_BANG_(style_14144,cljs.core.PersistentArrayMap.EMPTY);

var temp__5457__auto___14145 = cljs.core.vals(cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles.cljs$core$IFn$_invoke$arity$1(style_14144));
if(cljs.core.truth_(temp__5457__auto___14145)){
var sub_styles_14146 = temp__5457__auto___14145;
(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1 ? stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1(sub_styles_14146) : stylefy.impl.styles.prepare_styles.call(null,sub_styles_14146));
} else {
}


var G__14147 = seq__14135_14140;
var G__14148 = chunk__14136_14141;
var G__14149 = count__14137_14142;
var G__14150 = (i__14138_14143 + (1));
seq__14135_14140 = G__14147;
chunk__14136_14141 = G__14148;
count__14137_14142 = G__14149;
i__14138_14143 = G__14150;
continue;
} else {
var temp__5457__auto___14151 = cljs.core.seq(seq__14135_14140);
if(temp__5457__auto___14151){
var seq__14135_14152__$1 = temp__5457__auto___14151;
if(cljs.core.chunked_seq_QMARK_(seq__14135_14152__$1)){
var c__4319__auto___14153 = cljs.core.chunk_first(seq__14135_14152__$1);
var G__14154 = cljs.core.chunk_rest(seq__14135_14152__$1);
var G__14155 = c__4319__auto___14153;
var G__14156 = cljs.core.count(c__4319__auto___14153);
var G__14157 = (0);
seq__14135_14140 = G__14154;
chunk__14136_14141 = G__14155;
count__14137_14142 = G__14156;
i__14138_14143 = G__14157;
continue;
} else {
var style_14158 = cljs.core.first(seq__14135_14152__$1);
stylefy.impl.styles.use_style_BANG_(style_14158,cljs.core.PersistentArrayMap.EMPTY);

var temp__5457__auto___14159__$1 = cljs.core.vals(cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles.cljs$core$IFn$_invoke$arity$1(style_14158));
if(cljs.core.truth_(temp__5457__auto___14159__$1)){
var sub_styles_14160 = temp__5457__auto___14159__$1;
(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1 ? stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1(sub_styles_14160) : stylefy.impl.styles.prepare_styles.call(null,sub_styles_14160));
} else {
}


var G__14161 = cljs.core.next(seq__14135_14152__$1);
var G__14162 = null;
var G__14163 = (0);
var G__14164 = (0);
seq__14135_14140 = G__14161;
chunk__14136_14141 = G__14162;
count__14137_14142 = G__14163;
i__14138_14143 = G__14164;
continue;
}
} else {
}
}
break;
}

return stylefy.impl.dom.update_styles_in_dom_BANG_();
});
stylefy.impl.styles.init_global_vendor_prefixes = (function stylefy$impl$styles$init_global_vendor_prefixes(options){
var global_vendor_prefixes_options = cljs.core.cst$kw$global_DASH_vendor_DASH_prefixes.cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.reset_BANG_(stylefy.impl.styles.global_vendor_prefixes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stylefy$core_SLASH_vendors,cljs.core.cst$kw$stylefy$core_SLASH_vendors.cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options),cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix,cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options)], null));
});
