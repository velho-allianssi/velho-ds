// Compiled by ClojureScript 1.10.238 {}
goog.provide('stylefy.impl.conversion');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('stylefy.impl.utils');
goog.require('garden.stylesheet');
stylefy.impl.conversion.convert_stylefy_vendors_to_garden = (function stylefy$impl$conversion$convert_stylefy_vendors_to_garden(props){
var temp__5457__auto__ = new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5457__auto__)){
var vendors = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),vendors,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
return null;
}
});
stylefy.impl.conversion.convert_stylefy_modes_garden = (function stylefy$impl$conversion$convert_stylefy_modes_garden(props){
var modes = new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(props);
return cljs.core.mapv.call(null,((function (modes){
return (function (p1__39262_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39262_SHARP_)].join('')),p1__39262_SHARP_.call(null,modes)], null);
});})(modes))
,cljs.core.keys.call(null,modes));
});
stylefy.impl.conversion.class_selector = (function stylefy$impl$conversion$class_selector(hash){
return cljs.core.keyword.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
});
/**
 * Converts Clojure style map into CSS class.
 */
stylefy.impl.conversion.convert_base_style = (function stylefy$impl$conversion$convert_base_style(p__39263,options){
var map__39264 = p__39263;
var map__39264__$1 = ((((!((map__39264 == null)))?(((((map__39264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39264):map__39264);
var style = map__39264__$1;
var props = cljs.core.get.call(null,map__39264__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__39264__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.call(null,map__39264__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var style_props = stylefy.impl.utils.filter_props.call(null,props);
var css_selector = (function (){var or__3922__auto__ = custom_selector;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return stylefy.impl.conversion.class_selector.call(null,hash);
}
})();
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_selector,style_props], null);
var garden_pseudo_classes = stylefy.impl.conversion.convert_stylefy_modes_garden.call(null,props);
var garden_vendors = stylefy.impl.conversion.convert_stylefy_vendors_to_garden.call(null,props);
var garden_options = (function (){var or__3922__auto__ = cljs.core.merge.call(null,options,garden_vendors);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_class = garden.core.css.call(null,garden_options,cljs.core.into.call(null,garden_class_definition,garden_pseudo_classes));
return css_class;
});
/**
 * Converts stylefy/media definition into CSS media query.
 */
stylefy.impl.conversion.convert_media_queries = (function stylefy$impl$conversion$convert_media_queries(p__39266,options){
var map__39267 = p__39266;
var map__39267__$1 = ((((!((map__39267 == null)))?(((((map__39267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39267):map__39267);
var style = map__39267__$1;
var props = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var temp__5457__auto__ = new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5457__auto__)){
var stylefy_media_queries = temp__5457__auto__;
var css_selector = (function (){var or__3922__auto__ = custom_selector;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return stylefy.impl.conversion.class_selector.call(null,hash);
}
})();
var css_media_queries = cljs.core.map.call(null,((function (css_selector,stylefy_media_queries,temp__5457__auto__,map__39267,map__39267__$1,style,props,hash,custom_selector){
return (function (media_query){
var media_query_props = cljs.core.get.call(null,stylefy_media_queries,media_query);
var style_props = stylefy.impl.utils.filter_props.call(null,media_query_props);
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_selector,style_props], null);
var garden_pseudo_classes = stylefy.impl.conversion.convert_stylefy_modes_garden.call(null,media_query_props);
var garden_vendors = stylefy.impl.conversion.convert_stylefy_vendors_to_garden.call(null,media_query_props);
var garden_options = (function (){var or__3922__auto__ = cljs.core.merge.call(null,options,garden_vendors);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return garden.core.css.call(null,garden_options,garden.stylesheet.at_media.call(null,media_query,cljs.core.into.call(null,garden_class_definition,garden_pseudo_classes)));
});})(css_selector,stylefy_media_queries,temp__5457__auto__,map__39267,map__39267__$1,style,props,hash,custom_selector))
,cljs.core.keys.call(null,stylefy_media_queries));
return cljs.core.apply.call(null,cljs.core.str,css_media_queries);
} else {
return null;
}
});
/**
 * Converts stylefy/supports definition into CSS feature query.
 */
stylefy.impl.conversion.convert_supports_rules = (function stylefy$impl$conversion$convert_supports_rules(p__39269,options){
var map__39270 = p__39269;
var map__39270__$1 = ((((!((map__39270 == null)))?(((((map__39270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39270):map__39270);
var style = map__39270__$1;
var props = cljs.core.get.call(null,map__39270__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__39270__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.call(null,map__39270__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var temp__5457__auto__ = new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5457__auto__)){
var stylefy_supports = temp__5457__auto__;
var css_selector = (function (){var or__3922__auto__ = custom_selector;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return stylefy.impl.conversion.class_selector.call(null,hash);
}
})();
var css_supports = cljs.core.map.call(null,((function (css_selector,stylefy_supports,temp__5457__auto__,map__39270,map__39270__$1,style,props,hash,custom_selector){
return (function (supports_selector){
var supports_props = cljs.core.get.call(null,stylefy_supports,supports_selector);
var style_props = stylefy.impl.utils.filter_props.call(null,supports_props);
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_selector,style_props], null);
var garden_pseudo_classes = stylefy.impl.conversion.convert_stylefy_modes_garden.call(null,style_props);
var garden_vendors = stylefy.impl.conversion.convert_stylefy_vendors_to_garden.call(null,supports_props);
var garden_options = (function (){var or__3922__auto__ = cljs.core.merge.call(null,options,garden_vendors);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_media_queries_inside_supports = stylefy.impl.conversion.convert_media_queries.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),supports_props,new cljs.core.Keyword(null,"hash","hash",-13781596),hash,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277),custom_selector], null),options);
return ["@supports (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(supports_selector),") {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.core.css.call(null,garden_options,cljs.core.into.call(null,garden_class_definition,garden_pseudo_classes))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries_inside_supports),"}"].join('');
});})(css_selector,stylefy_supports,temp__5457__auto__,map__39270,map__39270__$1,style,props,hash,custom_selector))
,cljs.core.keys.call(null,stylefy_supports));
return cljs.core.apply.call(null,cljs.core.str,css_supports);
} else {
return null;
}
});
/**
 * Converts the given style to CSS. Options are sent directly to Garden
 */
stylefy.impl.conversion.style__GT_css = (function stylefy$impl$conversion$style__GT_css(var_args){
var G__39273 = arguments.length;
switch (G__39273) {
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
return stylefy.impl.conversion.style__GT_css.call(null,style,cljs.core.PersistentArrayMap.EMPTY);
});

stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$2 = (function (p__39274,options){
var map__39275 = p__39274;
var map__39275__$1 = ((((!((map__39275 == null)))?(((((map__39275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39275):map__39275);
var style = map__39275__$1;
var props = cljs.core.get.call(null,map__39275__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__39275__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var css_class = stylefy.impl.conversion.convert_base_style.call(null,style,options);
var css_media_queries = stylefy.impl.conversion.convert_media_queries.call(null,style,options);
var css_supports = stylefy.impl.conversion.convert_supports_rules.call(null,style,options);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_supports)].join('');
});

stylefy.impl.conversion.style__GT_css.cljs$lang$maxFixedArity = 2;

