// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('stylefy.impl.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('garden.core');
goog.require('stylefy.impl.cache');
goog.require('stylefy.impl.utils');
goog.require('stylefy.impl.conversion');
goog.require('garden.stylesheet');
goog.require('clojure.set');
stylefy.impl.dom.styles_in_use = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.keyframes_in_use = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.font_faces_in_use = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_tags_in_use = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_classes_in_use = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.stylefy_node_id = cljs.core.cst$kw$_SHARP__stylefy_DASH_styles_;
stylefy.impl.dom.stylefy_constant_node_id = cljs.core.cst$kw$_SHARP__stylefy_DASH_constant_DASH_styles_;
stylefy.impl.dom.dom_needs_update_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
stylefy.impl.dom.style_by_hash = (function stylefy$impl$dom$style_by_hash(style_hash){
if(cljs.core.truth_(style_hash)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_in_use),style_hash);
} else {
return null;
}
});
stylefy.impl.dom.update_style_tags_BANG_ = (function stylefy$impl$dom$update_style_tags_BANG_(node,node_constant){
var styles_in_css = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (style_hash){
return cljs.core.cst$kw$stylefy$impl$dom_SLASH_css.cljs$core$IFn$_invoke$arity$1(stylefy.impl.dom.style_by_hash(style_hash));
}),cljs.core.keys(cljs.core.deref(stylefy.impl.dom.styles_in_use)));
var keyframes_in_css = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (styles_in_css){
return (function (keyframes){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keyframes], 0));
});})(styles_in_css))
,cljs.core.deref(stylefy.impl.dom.keyframes_in_use));
var font_faces_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (styles_in_css,keyframes_in_css){
return (function (properties){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties], 0));
});})(styles_in_css,keyframes_in_css))
,cljs.core.deref(stylefy.impl.dom.font_faces_in_use));
var custom_tags_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (styles_in_css,keyframes_in_css,font_faces_in_use){
return (function (tag_definition){
return stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,cljs.core.cst$kw$stylefy$impl$dom_SLASH_tag_DASH_properties.cljs$core$IFn$_invoke$arity$1(tag_definition),cljs.core.cst$kw$custom_DASH_selector,cljs.core.cst$kw$stylefy$impl$dom_SLASH_tag_DASH_name.cljs$core$IFn$_invoke$arity$1(tag_definition)], null));
});})(styles_in_css,keyframes_in_css,font_faces_in_use))
,cljs.core.deref(stylefy.impl.dom.custom_tags_in_use));
var custom_classes_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (styles_in_css,keyframes_in_css,font_faces_in_use,custom_tags_in_use){
return (function (class_definition){
return stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,cljs.core.cst$kw$stylefy$impl$dom_SLASH_class_DASH_properties.cljs$core$IFn$_invoke$arity$1(class_definition),cljs.core.cst$kw$custom_DASH_selector,stylefy.impl.conversion.class_selector(cljs.core.cst$kw$stylefy$impl$dom_SLASH_class_DASH_name.cljs$core$IFn$_invoke$arity$1(class_definition))], null));
});})(styles_in_css,keyframes_in_css,font_faces_in_use,custom_tags_in_use))
,cljs.core.deref(stylefy.impl.dom.custom_classes_in_use));
dommy.core.set_text_BANG_(node_constant,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(font_faces_in_use,keyframes_in_css,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([custom_tags_in_use,custom_classes_in_use], 0))));

return dommy.core.set_text_BANG_(node,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,styles_in_css));
});
stylefy.impl.dom.mark_styles_added_in_dom_BANG_ = (function stylefy$impl$dom$mark_styles_added_in_dom_BANG_(){
return cljs.core.reset_BANG_(stylefy.impl.dom.styles_in_use,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14091_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__14091_SHARP_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_in_use),p1__14091_SHARP_),cljs.core.cst$kw$stylefy$impl$dom_SLASH_in_DASH_dom_QMARK_,true)]);
}),cljs.core.keys(cljs.core.deref(stylefy.impl.dom.styles_in_use)))));
});
stylefy.impl.dom.request_dom_update = (function stylefy$impl$dom$request_dom_update(){
return window.requestAnimationFrame(stylefy.impl.dom.continuously_update_styles_in_dom_BANG_);
});
/**
 * Updates style tag if needed.
 */
stylefy.impl.dom.update_styles_in_dom_BANG_ = (function stylefy$impl$dom$update_styles_in_dom_BANG_(){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.dom.dom_needs_update_QMARK_))){
var node = document.querySelector(dommy.core.selector(stylefy.impl.dom.stylefy_node_id));
var node_constant = document.querySelector(dommy.core.selector(stylefy.impl.dom.stylefy_constant_node_id));
if(cljs.core.truth_((function (){var and__3911__auto__ = node;
if(cljs.core.truth_(and__3911__auto__)){
return node_constant;
} else {
return and__3911__auto__;
}
})())){
stylefy.impl.dom.update_style_tags_BANG_(node,node_constant);

cljs.core.reset_BANG_(stylefy.impl.dom.dom_needs_update_QMARK_,false);

try{stylefy.impl.cache.cache_styles(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,node_constant){
return (function (p1__14092_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__14092_SHARP_,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_in_use),p1__14092_SHARP_),cljs.core.cst$kw$stylefy$impl$dom_SLASH_in_DASH_dom_QMARK_)]);
});})(node,node_constant))
,cljs.core.keys(cljs.core.deref(stylefy.impl.dom.styles_in_use)))));
}catch (e14093){var e_14094 = e14093;
console.warn(["Unable to cache styles, error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_14094)].join(''));

}
return stylefy.impl.dom.mark_styles_added_in_dom_BANG_();
} else {
return console.error("stylefy is unable to find the required <style> tags!");
}
} else {
return null;
}
});
/**
 * Updates style tag if needed.
 */
stylefy.impl.dom.continuously_update_styles_in_dom_BANG_ = (function stylefy$impl$dom$continuously_update_styles_in_dom_BANG_(){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.dom.dom_needs_update_QMARK_))){
stylefy.impl.dom.update_styles_in_dom_BANG_();
} else {
}

return stylefy.impl.dom.request_dom_update();
});
stylefy.impl.dom.init_dom_update = (function stylefy$impl$dom$init_dom_update(){
return stylefy.impl.dom.continuously_update_styles_in_dom_BANG_();
});
stylefy.impl.dom.init_styles_in_use = (function stylefy$impl$dom$init_styles_in_use(options){
if(cljs.core.truth_(cljs.core.cst$kw$use_DASH_caching_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
stylefy.impl.cache.use_caching_BANG_(cljs.core.cst$kw$cache_DASH_options.cljs$core$IFn$_invoke$arity$1(options));

var temp__5457__auto__ = stylefy.impl.cache.read_cache_value(stylefy.impl.cache.cache_key_styles);
if(cljs.core.truth_(temp__5457__auto__)){
var cached_styles = temp__5457__auto__;
cljs.core.reset_BANG_(stylefy.impl.dom.styles_in_use,(function (){var or__3922__auto__ = stylefy.impl.cache.read_cache_value(stylefy.impl.cache.cache_key_styles);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

cljs.core.reset_BANG_(stylefy.impl.dom.dom_needs_update_QMARK_,true);

return stylefy.impl.dom.update_styles_in_dom_BANG_();
} else {
return null;
}
} else {
return null;
}
});
/**
 * Stores the style in an atom. The style is going to be added into the DOM soon.
 */
stylefy.impl.dom.save_style_BANG_ = (function stylefy$impl$dom$save_style_BANG_(p__14095){
var map__14096 = p__14095;
var map__14096__$1 = ((((!((map__14096 == null)))?(((((map__14096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14096):map__14096);
var style = map__14096__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14096__$1,cljs.core.cst$kw$props);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14096__$1,cljs.core.cst$kw$hash);
if(cljs.core.truth_(props)){
} else {
throw (new Error(["Assert failed: ","Unable to save empty style!","\n","props"].join('')));
}

if(cljs.core.truth_(hash)){
} else {
throw (new Error(["Assert failed: ","Unable to save style without hash!","\n","hash"].join('')));
}

var style_css = stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1(style);
var style_to_be_saved = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$stylefy$impl$dom_SLASH_css,style_css);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.impl.dom.styles_in_use,cljs.core.assoc,hash,style_to_be_saved);

return cljs.core.reset_BANG_(stylefy.impl.dom.dom_needs_update_QMARK_,true);
});
stylefy.impl.dom.style_in_dom_QMARK_ = (function stylefy$impl$dom$style_in_dom_QMARK_(style_hash){
return cljs.core.boolean$(cljs.core.cst$kw$stylefy$impl$dom_SLASH_in_DASH_dom_QMARK_.cljs$core$IFn$_invoke$arity$1(stylefy.impl.dom.style_by_hash(style_hash)));
});
stylefy.impl.dom.add_keyframes = (function stylefy$impl$dom$add_keyframes(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14100 = arguments.length;
var i__4500__auto___14101 = (0);
while(true){
if((i__4500__auto___14101 < len__4499__auto___14100)){
args__4502__auto__.push((arguments[i__4500__auto___14101]));

var G__14102 = (i__4500__auto___14101 + (1));
i__4500__auto___14101 = G__14102;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
var garden_definition = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.stylesheet.at_keyframes,identifier,frames);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.impl.dom.keyframes_in_use,cljs.core.conj,garden_definition);

cljs.core.reset_BANG_(stylefy.impl.dom.dom_needs_update_QMARK_,true);

return garden_definition;
});

stylefy.impl.dom.add_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
stylefy.impl.dom.add_keyframes.cljs$lang$applyTo = (function (seq14098){
var G__14099 = cljs.core.first(seq14098);
var seq14098__$1 = cljs.core.next(seq14098);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14099,seq14098__$1);
});

stylefy.impl.dom.add_font_face = (function stylefy$impl$dom$add_font_face(properties){
var garden_definition = garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.impl.dom.font_faces_in_use,cljs.core.conj,garden_definition);

cljs.core.reset_BANG_(stylefy.impl.dom.dom_needs_update_QMARK_,true);

return garden_definition;
});
stylefy.impl.dom.add_tag = (function stylefy$impl$dom$add_tag(name,properties){
var custom_tag_definition = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stylefy$impl$dom_SLASH_tag_DASH_name,name,cljs.core.cst$kw$stylefy$impl$dom_SLASH_tag_DASH_properties,properties], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.impl.dom.custom_tags_in_use,cljs.core.conj,custom_tag_definition);

cljs.core.reset_BANG_(stylefy.impl.dom.dom_needs_update_QMARK_,true);

return custom_tag_definition;
});
stylefy.impl.dom.add_class = (function stylefy$impl$dom$add_class(name,properties){
var custom_class_definition = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stylefy$impl$dom_SLASH_class_DASH_name,name,cljs.core.cst$kw$stylefy$impl$dom_SLASH_class_DASH_properties,properties], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.impl.dom.custom_classes_in_use,cljs.core.conj,custom_class_definition);

cljs.core.reset_BANG_(stylefy.impl.dom.dom_needs_update_QMARK_,true);

return custom_class_definition;
});
