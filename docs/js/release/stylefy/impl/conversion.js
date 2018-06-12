// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('stylefy.impl.conversion');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.core');
goog.require('stylefy.impl.utils');
goog.require('garden.stylesheet');
stylefy.impl.conversion.convert_stylefy_vendors_to_garden = (function stylefy$impl$conversion$convert_stylefy_vendors_to_garden(props){
var temp__5457__auto__ = cljs.core.cst$kw$stylefy$core_SLASH_vendors.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5457__auto__)){
var vendors = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$vendors,vendors,cljs.core.cst$kw$auto_DASH_prefix,cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
return null;
}
});
stylefy.impl.conversion.convert_stylefy_modes_garden = (function stylefy$impl$conversion$convert_stylefy_modes_garden(props){
var modes = cljs.core.cst$kw$stylefy$core_SLASH_mode.cljs$core$IFn$_invoke$arity$1(props);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (modes){
return (function (p1__14073_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14073_SHARP_)].join('')),(p1__14073_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14073_SHARP_.cljs$core$IFn$_invoke$arity$1(modes) : p1__14073_SHARP_.call(null,modes))], null);
});})(modes))
,cljs.core.keys(modes));
});
stylefy.impl.conversion.class_selector = (function stylefy$impl$conversion$class_selector(hash){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
});
/**
 * Converts Clojure style map into CSS class.
 */
stylefy.impl.conversion.convert_base_style = (function stylefy$impl$conversion$convert_base_style(p__14074,options){
var map__14075 = p__14074;
var map__14075__$1 = ((((!((map__14075 == null)))?(((((map__14075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14075):map__14075);
var style = map__14075__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14075__$1,cljs.core.cst$kw$props);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14075__$1,cljs.core.cst$kw$hash);
var custom_selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14075__$1,cljs.core.cst$kw$custom_DASH_selector);
var style_props = stylefy.impl.utils.filter_props(props);
var css_selector = (function (){var or__3922__auto__ = custom_selector;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return stylefy.impl.conversion.class_selector(hash);
}
})();
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_selector,style_props], null);
var garden_pseudo_classes = stylefy.impl.conversion.convert_stylefy_modes_garden(props);
var garden_vendors = stylefy.impl.conversion.convert_stylefy_vendors_to_garden(props);
var garden_options = (function (){var or__3922__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,garden_vendors], 0));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_class = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_options,cljs.core.into.cljs$core$IFn$_invoke$arity$2(garden_class_definition,garden_pseudo_classes)], 0));
return css_class;
});
/**
 * Converts stylefy/media definition into CSS media query.
 */
stylefy.impl.conversion.convert_media_queries = (function stylefy$impl$conversion$convert_media_queries(p__14077,options){
var map__14078 = p__14077;
var map__14078__$1 = ((((!((map__14078 == null)))?(((((map__14078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14078):map__14078);
var style = map__14078__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14078__$1,cljs.core.cst$kw$props);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14078__$1,cljs.core.cst$kw$hash);
var custom_selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14078__$1,cljs.core.cst$kw$custom_DASH_selector);
var temp__5457__auto__ = cljs.core.cst$kw$stylefy$core_SLASH_media.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5457__auto__)){
var stylefy_media_queries = temp__5457__auto__;
var css_selector = (function (){var or__3922__auto__ = custom_selector;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return stylefy.impl.conversion.class_selector(hash);
}
})();
var css_media_queries = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (css_selector,stylefy_media_queries,temp__5457__auto__,map__14078,map__14078__$1,style,props,hash,custom_selector){
return (function (media_query){
var media_query_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stylefy_media_queries,media_query);
var style_props = stylefy.impl.utils.filter_props(media_query_props);
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_selector,style_props], null);
var garden_pseudo_classes = stylefy.impl.conversion.convert_stylefy_modes_garden(media_query_props);
var garden_vendors = stylefy.impl.conversion.convert_stylefy_vendors_to_garden(media_query_props);
var garden_options = (function (){var or__3922__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,garden_vendors], 0));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_options,garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(media_query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(garden_class_definition,garden_pseudo_classes)], 0))], 0));
});})(css_selector,stylefy_media_queries,temp__5457__auto__,map__14078,map__14078__$1,style,props,hash,custom_selector))
,cljs.core.keys(stylefy_media_queries));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,css_media_queries);
} else {
return null;
}
});
/**
 * Converts stylefy/supports definition into CSS feature query.
 */
stylefy.impl.conversion.convert_supports_rules = (function stylefy$impl$conversion$convert_supports_rules(p__14080,options){
var map__14081 = p__14080;
var map__14081__$1 = ((((!((map__14081 == null)))?(((((map__14081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14081):map__14081);
var style = map__14081__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14081__$1,cljs.core.cst$kw$props);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14081__$1,cljs.core.cst$kw$hash);
var custom_selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14081__$1,cljs.core.cst$kw$custom_DASH_selector);
var temp__5457__auto__ = cljs.core.cst$kw$stylefy$core_SLASH_supports.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5457__auto__)){
var stylefy_supports = temp__5457__auto__;
var css_selector = (function (){var or__3922__auto__ = custom_selector;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return stylefy.impl.conversion.class_selector(hash);
}
})();
var css_supports = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (css_selector,stylefy_supports,temp__5457__auto__,map__14081,map__14081__$1,style,props,hash,custom_selector){
return (function (supports_selector){
var supports_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stylefy_supports,supports_selector);
var style_props = stylefy.impl.utils.filter_props(supports_props);
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_selector,style_props], null);
var garden_pseudo_classes = stylefy.impl.conversion.convert_stylefy_modes_garden(style_props);
var garden_vendors = stylefy.impl.conversion.convert_stylefy_vendors_to_garden(supports_props);
var garden_options = (function (){var or__3922__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,garden_vendors], 0));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_media_queries_inside_supports = stylefy.impl.conversion.convert_media_queries(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$props,supports_props,cljs.core.cst$kw$hash,hash,cljs.core.cst$kw$custom_DASH_selector,custom_selector], null),options);
return ["@supports (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(supports_selector),") {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_options,cljs.core.into.cljs$core$IFn$_invoke$arity$2(garden_class_definition,garden_pseudo_classes)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries_inside_supports),"}"].join('');
});})(css_selector,stylefy_supports,temp__5457__auto__,map__14081,map__14081__$1,style,props,hash,custom_selector))
,cljs.core.keys(stylefy_supports));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,css_supports);
} else {
return null;
}
});
/**
 * Converts the given style to CSS. Options are sent directly to Garden
 */
stylefy.impl.conversion.style__GT_css = (function stylefy$impl$conversion$style__GT_css(var_args){
var G__14084 = arguments.length;
switch (G__14084) {
case 1:
return stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1 = (function (style){
return stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$2(style,cljs.core.PersistentArrayMap.EMPTY);
});

stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$2 = (function (p__14085,options){
var map__14086 = p__14085;
var map__14086__$1 = ((((!((map__14086 == null)))?(((((map__14086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14086):map__14086);
var style = map__14086__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14086__$1,cljs.core.cst$kw$props);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14086__$1,cljs.core.cst$kw$hash);
var css_class = stylefy.impl.conversion.convert_base_style(style,options);
var css_media_queries = stylefy.impl.conversion.convert_media_queries(style,options);
var css_supports = stylefy.impl.conversion.convert_supports_rules(style,options);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_supports)].join('');
});

stylefy.impl.conversion.style__GT_css.cljs$lang$maxFixedArity = 2;

