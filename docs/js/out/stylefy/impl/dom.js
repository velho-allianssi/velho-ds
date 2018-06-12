// Compiled by ClojureScript 1.10.238 {}
goog.provide('stylefy.impl.dom');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('garden.core');
goog.require('stylefy.impl.cache');
goog.require('stylefy.impl.utils');
goog.require('stylefy.impl.conversion');
goog.require('garden.stylesheet');
goog.require('clojure.set');
stylefy.impl.dom.styles_in_use = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.keyframes_in_use = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.font_faces_in_use = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_tags_in_use = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_classes_in_use = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.stylefy_node_id = new cljs.core.Keyword(null,"#_stylefy-styles_","#_stylefy-styles_",-1230236272);
stylefy.impl.dom.stylefy_constant_node_id = new cljs.core.Keyword(null,"#_stylefy-constant-styles_","#_stylefy-constant-styles_",1798573471);
stylefy.impl.dom.dom_needs_update_QMARK_ = cljs.core.atom.call(null,false);
stylefy.impl.dom.style_by_hash = (function stylefy$impl$dom$style_by_hash(style_hash){
if(cljs.core.truth_(style_hash)){
return cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use),style_hash);
} else {
return null;
}
});
stylefy.impl.dom.update_style_tags_BANG_ = (function stylefy$impl$dom$update_style_tags_BANG_(node,node_constant){
var styles_in_css = cljs.core.map.call(null,(function (style_hash){
return new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061).cljs$core$IFn$_invoke$arity$1(stylefy.impl.dom.style_by_hash.call(null,style_hash));
}),cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use)));
var keyframes_in_css = cljs.core.map.call(null,((function (styles_in_css){
return (function (keyframes){
return garden.core.css.call(null,keyframes);
});})(styles_in_css))
,cljs.core.deref.call(null,stylefy.impl.dom.keyframes_in_use));
var font_faces_in_use = cljs.core.map.call(null,((function (styles_in_css,keyframes_in_css){
return (function (properties){
return garden.core.css.call(null,properties);
});})(styles_in_css,keyframes_in_css))
,cljs.core.deref.call(null,stylefy.impl.dom.font_faces_in_use));
var custom_tags_in_use = cljs.core.map.call(null,((function (styles_in_css,keyframes_in_css,font_faces_in_use){
return (function (tag_definition){
return stylefy.impl.conversion.style__GT_css.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword("stylefy.impl.dom","tag-properties","stylefy.impl.dom/tag-properties",327168703).cljs$core$IFn$_invoke$arity$1(tag_definition),new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277),new cljs.core.Keyword("stylefy.impl.dom","tag-name","stylefy.impl.dom/tag-name",-639357087).cljs$core$IFn$_invoke$arity$1(tag_definition)], null));
});})(styles_in_css,keyframes_in_css,font_faces_in_use))
,cljs.core.deref.call(null,stylefy.impl.dom.custom_tags_in_use));
var custom_classes_in_use = cljs.core.map.call(null,((function (styles_in_css,keyframes_in_css,font_faces_in_use,custom_tags_in_use){
return (function (class_definition){
return stylefy.impl.conversion.style__GT_css.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword("stylefy.impl.dom","class-properties","stylefy.impl.dom/class-properties",-2034606216).cljs$core$IFn$_invoke$arity$1(class_definition),new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277),stylefy.impl.conversion.class_selector.call(null,new cljs.core.Keyword("stylefy.impl.dom","class-name","stylefy.impl.dom/class-name",1864711126).cljs$core$IFn$_invoke$arity$1(class_definition))], null));
});})(styles_in_css,keyframes_in_css,font_faces_in_use,custom_tags_in_use))
,cljs.core.deref.call(null,stylefy.impl.dom.custom_classes_in_use));
dommy.core.set_text_BANG_.call(null,node_constant,cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,font_faces_in_use,keyframes_in_css,custom_tags_in_use,custom_classes_in_use)));

return dommy.core.set_text_BANG_.call(null,node,cljs.core.apply.call(null,cljs.core.str,styles_in_css));
});
stylefy.impl.dom.mark_styles_added_in_dom_BANG_ = (function stylefy$impl$dom$mark_styles_added_in_dom_BANG_(){
return cljs.core.reset_BANG_.call(null,stylefy.impl.dom.styles_in_use,cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__39280_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__39280_SHARP_,cljs.core.assoc.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use),p1__39280_SHARP_),new cljs.core.Keyword("stylefy.impl.dom","in-dom?","stylefy.impl.dom/in-dom?",-1380916144),true)]);
}),cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use)))));
});
stylefy.impl.dom.request_dom_update = (function stylefy$impl$dom$request_dom_update(){
return window.requestAnimationFrame(stylefy.impl.dom.continuously_update_styles_in_dom_BANG_);
});
/**
 * Updates style tag if needed.
 */
stylefy.impl.dom.update_styles_in_dom_BANG_ = (function stylefy$impl$dom$update_styles_in_dom_BANG_(){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.dom_needs_update_QMARK_))){
var node = document.querySelector(dommy.core.selector.call(null,stylefy.impl.dom.stylefy_node_id));
var node_constant = document.querySelector(dommy.core.selector.call(null,stylefy.impl.dom.stylefy_constant_node_id));
if(cljs.core.truth_((function (){var and__3911__auto__ = node;
if(cljs.core.truth_(and__3911__auto__)){
return node_constant;
} else {
return and__3911__auto__;
}
})())){
stylefy.impl.dom.update_style_tags_BANG_.call(null,node,node_constant);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,false);

try{stylefy.impl.cache.cache_styles.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (node,node_constant){
return (function (p1__39281_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__39281_SHARP_,cljs.core.dissoc.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use),p1__39281_SHARP_),new cljs.core.Keyword("stylefy.impl.dom","in-dom?","stylefy.impl.dom/in-dom?",-1380916144))]);
});})(node,node_constant))
,cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use)))));
}catch (e39282){var e_39283 = e39282;
console.warn(["Unable to cache styles, error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39283)].join(''));

}
return stylefy.impl.dom.mark_styles_added_in_dom_BANG_.call(null);
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
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.dom_needs_update_QMARK_))){
stylefy.impl.dom.update_styles_in_dom_BANG_.call(null);
} else {
}

return stylefy.impl.dom.request_dom_update.call(null);
});
stylefy.impl.dom.init_dom_update = (function stylefy$impl$dom$init_dom_update(){
return stylefy.impl.dom.continuously_update_styles_in_dom_BANG_.call(null);
});
stylefy.impl.dom.init_styles_in_use = (function stylefy$impl$dom$init_styles_in_use(options){
if(cljs.core.truth_(new cljs.core.Keyword(null,"use-caching?","use-caching?",427588313).cljs$core$IFn$_invoke$arity$1(options))){
stylefy.impl.cache.use_caching_BANG_.call(null,new cljs.core.Keyword(null,"cache-options","cache-options",1443503739).cljs$core$IFn$_invoke$arity$1(options));

var temp__5457__auto__ = stylefy.impl.cache.read_cache_value.call(null,stylefy.impl.cache.cache_key_styles);
if(cljs.core.truth_(temp__5457__auto__)){
var cached_styles = temp__5457__auto__;
cljs.core.reset_BANG_.call(null,stylefy.impl.dom.styles_in_use,(function (){var or__3922__auto__ = stylefy.impl.cache.read_cache_value.call(null,stylefy.impl.cache.cache_key_styles);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);

return stylefy.impl.dom.update_styles_in_dom_BANG_.call(null);
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
stylefy.impl.dom.save_style_BANG_ = (function stylefy$impl$dom$save_style_BANG_(p__39284){
var map__39285 = p__39284;
var map__39285__$1 = ((((!((map__39285 == null)))?(((((map__39285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39285):map__39285);
var style = map__39285__$1;
var props = cljs.core.get.call(null,map__39285__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__39285__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.truth_(props)){
} else {
throw (new Error(["Assert failed: ","Unable to save empty style!","\n","props"].join('')));
}

if(cljs.core.truth_(hash)){
} else {
throw (new Error(["Assert failed: ","Unable to save style without hash!","\n","hash"].join('')));
}

var style_css = stylefy.impl.conversion.style__GT_css.call(null,style);
var style_to_be_saved = cljs.core.assoc.call(null,props,new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),style_css);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.styles_in_use,cljs.core.assoc,hash,style_to_be_saved);

return cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);
});
stylefy.impl.dom.style_in_dom_QMARK_ = (function stylefy$impl$dom$style_in_dom_QMARK_(style_hash){
return cljs.core.boolean$.call(null,new cljs.core.Keyword("stylefy.impl.dom","in-dom?","stylefy.impl.dom/in-dom?",-1380916144).cljs$core$IFn$_invoke$arity$1(stylefy.impl.dom.style_by_hash.call(null,style_hash)));
});
stylefy.impl.dom.add_keyframes = (function stylefy$impl$dom$add_keyframes(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39289 = arguments.length;
var i__4500__auto___39290 = (0);
while(true){
if((i__4500__auto___39290 < len__4499__auto___39289)){
args__4502__auto__.push((arguments[i__4500__auto___39290]));

var G__39291 = (i__4500__auto___39290 + (1));
i__4500__auto___39290 = G__39291;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
var garden_definition = cljs.core.apply.call(null,garden.stylesheet.at_keyframes,identifier,frames);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.keyframes_in_use,cljs.core.conj,garden_definition);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);

return garden_definition;
});

stylefy.impl.dom.add_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
stylefy.impl.dom.add_keyframes.cljs$lang$applyTo = (function (seq39287){
var G__39288 = cljs.core.first.call(null,seq39287);
var seq39287__$1 = cljs.core.next.call(null,seq39287);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39288,seq39287__$1);
});

stylefy.impl.dom.add_font_face = (function stylefy$impl$dom$add_font_face(properties){
var garden_definition = garden.stylesheet.at_font_face.call(null,properties);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.font_faces_in_use,cljs.core.conj,garden_definition);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);

return garden_definition;
});
stylefy.impl.dom.add_tag = (function stylefy$impl$dom$add_tag(name,properties){
var custom_tag_definition = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.impl.dom","tag-name","stylefy.impl.dom/tag-name",-639357087),name,new cljs.core.Keyword("stylefy.impl.dom","tag-properties","stylefy.impl.dom/tag-properties",327168703),properties], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.custom_tags_in_use,cljs.core.conj,custom_tag_definition);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);

return custom_tag_definition;
});
stylefy.impl.dom.add_class = (function stylefy$impl$dom$add_class(name,properties){
var custom_class_definition = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.impl.dom","class-name","stylefy.impl.dom/class-name",1864711126),name,new cljs.core.Keyword("stylefy.impl.dom","class-properties","stylefy.impl.dom/class-properties",-2034606216),properties], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.custom_classes_in_use,cljs.core.conj,custom_class_definition);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);

return custom_class_definition;
});
