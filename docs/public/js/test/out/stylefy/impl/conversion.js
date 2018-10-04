// Compiled by ClojureScript 1.10.238 {}
goog.provide('stylefy.impl.conversion');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('stylefy.impl.utils');
goog.require('garden.stylesheet');
goog.require('clojure.string');
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
return (function (mode_name){
if((((mode_name instanceof cljs.core.Keyword)) || (((typeof mode_name === 'string') && (clojure.string.starts_with_QMARK_.call(null,mode_name,":")))))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Mode must be specified as a keyword or string beginning with colon, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,mode_name))].join('')),"\n","(or (keyword? mode-name) (and (string? mode-name) (str/starts-with? mode-name \":\")))"].join('')));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode_name)].join('')),cljs.core.get.call(null,modes,mode_name)], null);
});})(modes))
,cljs.core.keys.call(null,modes));
});
stylefy.impl.conversion.class_selector = (function stylefy$impl$conversion$class_selector(hash){
return cljs.core.keyword.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
});
/**
 * Converts Clojure style map into CSS class.
 */
stylefy.impl.conversion.convert_base_style = (function stylefy$impl$conversion$convert_base_style(p__41439,options){
var map__41440 = p__41439;
var map__41440__$1 = ((((!((map__41440 == null)))?(((((map__41440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41440):map__41440);
var style = map__41440__$1;
var props = cljs.core.get.call(null,map__41440__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__41440__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.call(null,map__41440__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
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
stylefy.impl.conversion.convert_media_queries = (function stylefy$impl$conversion$convert_media_queries(p__41442,options){
var map__41443 = p__41442;
var map__41443__$1 = ((((!((map__41443 == null)))?(((((map__41443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41443):map__41443);
var style = map__41443__$1;
var props = cljs.core.get.call(null,map__41443__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__41443__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.call(null,map__41443__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
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
var css_media_queries = cljs.core.map.call(null,((function (css_selector,stylefy_media_queries,temp__5457__auto__,map__41443,map__41443__$1,style,props,hash,custom_selector){
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
});})(css_selector,stylefy_media_queries,temp__5457__auto__,map__41443,map__41443__$1,style,props,hash,custom_selector))
,cljs.core.keys.call(null,stylefy_media_queries));
return cljs.core.apply.call(null,cljs.core.str,css_media_queries);
} else {
return null;
}
});
/**
 * Converts stylefy/supports definition into CSS feature query.
 */
stylefy.impl.conversion.convert_supports_rules = (function stylefy$impl$conversion$convert_supports_rules(p__41445,options){
var map__41446 = p__41445;
var map__41446__$1 = ((((!((map__41446 == null)))?(((((map__41446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41446):map__41446);
var style = map__41446__$1;
var props = cljs.core.get.call(null,map__41446__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__41446__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.call(null,map__41446__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
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
var css_supports = cljs.core.map.call(null,((function (css_selector,stylefy_supports,temp__5457__auto__,map__41446,map__41446__$1,style,props,hash,custom_selector){
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
});})(css_selector,stylefy_supports,temp__5457__auto__,map__41446,map__41446__$1,style,props,hash,custom_selector))
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
var G__41449 = arguments.length;
switch (G__41449) {
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

stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$2 = (function (p__41450,options){
var map__41451 = p__41450;
var map__41451__$1 = ((((!((map__41451 == null)))?(((((map__41451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41451):map__41451);
var style = map__41451__$1;
var props = cljs.core.get.call(null,map__41451__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__41451__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var css_class = stylefy.impl.conversion.convert_base_style.call(null,style,options);
var css_media_queries = stylefy.impl.conversion.convert_media_queries.call(null,style,options);
var css_supports = stylefy.impl.conversion.convert_supports_rules.call(null,style,options);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_supports)].join('');
});

stylefy.impl.conversion.style__GT_css.cljs$lang$maxFixedArity = 2;

