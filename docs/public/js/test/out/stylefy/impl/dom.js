// Compiled by ClojureScript 1.10.238 {}
goog.provide('stylefy.impl.dom');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('garden.core');
goog.require('cljs.core.async');
goog.require('stylefy.impl.cache');
goog.require('stylefy.impl.utils');
goog.require('stylefy.impl.conversion');
goog.require('garden.stylesheet');
goog.require('clojure.set');
stylefy.impl.dom.stylefy_initialised_QMARK_ = reagent.core.atom.call(null,false);
stylefy.impl.dom.styles_in_use = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.keyframes_in_use = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.font_faces_in_use = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_tags_in_use = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_classes_in_use = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.stylefy_node_id = new cljs.core.Keyword(null,"#_stylefy-styles_","#_stylefy-styles_",-1230236272);
stylefy.impl.dom.stylefy_constant_node_id = new cljs.core.Keyword(null,"#_stylefy-constant-styles_","#_stylefy-constant-styles_",1798573471);
stylefy.impl.dom.dom_update_requested_QMARK_ = cljs.core.atom.call(null,false);
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
return cljs.core.reset_BANG_.call(null,stylefy.impl.dom.styles_in_use,cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__41444_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__41444_SHARP_,cljs.core.assoc.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use),p1__41444_SHARP_),new cljs.core.Keyword("stylefy.impl.dom","in-dom?","stylefy.impl.dom/in-dom?",-1380916144),true)]);
}),cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use)))));
});
/**
 * Updates style tag if needed.
 */
stylefy.impl.dom.update_styles_in_dom_BANG_ = (function stylefy$impl$dom$update_styles_in_dom_BANG_(){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.dom_update_requested_QMARK_))){
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

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_update_requested_QMARK_,false);

try{stylefy.impl.cache.cache_styles.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (node,node_constant){
return (function (p1__41445_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__41445_SHARP_,cljs.core.dissoc.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use),p1__41445_SHARP_),new cljs.core.Keyword("stylefy.impl.dom","in-dom?","stylefy.impl.dom/in-dom?",-1380916144))]);
});})(node,node_constant))
,cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use)))));
}catch (e41446){var e_41447 = e41446;
console.warn(["Unable to cache styles, error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41447)].join(''));

stylefy.impl.cache.clear_styles.call(null);

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
stylefy.impl.dom.asynchronously_update_dom = (function stylefy$impl$dom$asynchronously_update_dom(){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.dom_update_requested_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_update_requested_QMARK_,true);

var c__39504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto__){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto__){
return (function (state_41450){
var state_val_41451 = (state_41450[(1)]);
if((state_val_41451 === (1))){
var inst_41448 = stylefy.impl.dom.update_styles_in_dom_BANG_.call(null);
var state_41450__$1 = state_41450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41450__$1,inst_41448);
} else {
return null;
}
});})(c__39504__auto__))
;
return ((function (switch__39414__auto__,c__39504__auto__){
return (function() {
var stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39415__auto__ = null;
var stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39415__auto____0 = (function (){
var statearr_41452 = [null,null,null,null,null,null,null];
(statearr_41452[(0)] = stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39415__auto__);

(statearr_41452[(1)] = (1));

return statearr_41452;
});
var stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39415__auto____1 = (function (state_41450){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_41450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e41453){if((e41453 instanceof Object)){
var ex__39418__auto__ = e41453;
var statearr_41454_41456 = state_41450;
(statearr_41454_41456[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41457 = state_41450;
state_41450 = G__41457;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39415__auto__ = function(state_41450){
switch(arguments.length){
case 0:
return stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39415__auto____0.call(this);
case 1:
return stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39415__auto____1.call(this,state_41450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39415__auto____0;
stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39415__auto____1;
return stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto__))
})();
var state__39506__auto__ = (function (){var statearr_41455 = f__39505__auto__.call(null);
(statearr_41455[(6)] = c__39504__auto__);

return statearr_41455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto__))
);

return c__39504__auto__;
}
});
stylefy.impl.dom.check_stylefy_initialisation = (function stylefy$impl$dom$check_stylefy_initialisation(){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.stylefy_initialised_QMARK_))){
return null;
} else {
return console.warn(["stylefy has not been initialised correctly. Call stylefy/init once when your application starts."].join(''));
}
});
stylefy.impl.dom.init_cache = (function stylefy$impl$dom$init_cache(options){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"use-caching?","use-caching?",427588313).cljs$core$IFn$_invoke$arity$1(options),false)){
stylefy.impl.cache.use_caching_BANG_.call(null,new cljs.core.Keyword(null,"cache-options","cache-options",1443503739).cljs$core$IFn$_invoke$arity$1(options));

var temp__5457__auto__ = stylefy.impl.cache.read_cache_value.call(null,stylefy.impl.cache.cache_key_styles);
if(cljs.core.truth_(temp__5457__auto__)){
var cached_styles = temp__5457__auto__;
cljs.core.reset_BANG_.call(null,stylefy.impl.dom.styles_in_use,(function (){var or__3922__auto__ = cached_styles;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

stylefy.impl.dom.asynchronously_update_dom.call(null);

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
stylefy.impl.dom.save_style_BANG_ = (function stylefy$impl$dom$save_style_BANG_(p__41458){
var map__41459 = p__41458;
var map__41459__$1 = ((((!((map__41459 == null)))?(((((map__41459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41459):map__41459);
var style = map__41459__$1;
var props = cljs.core.get.call(null,map__41459__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__41459__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
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

return stylefy.impl.dom.asynchronously_update_dom.call(null);
});
stylefy.impl.dom.style_in_dom_QMARK_ = (function stylefy$impl$dom$style_in_dom_QMARK_(style_hash){
return cljs.core.boolean$.call(null,new cljs.core.Keyword("stylefy.impl.dom","in-dom?","stylefy.impl.dom/in-dom?",-1380916144).cljs$core$IFn$_invoke$arity$1(stylefy.impl.dom.style_by_hash.call(null,style_hash)));
});
stylefy.impl.dom.add_keyframes = (function stylefy$impl$dom$add_keyframes(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41463 = arguments.length;
var i__4500__auto___41464 = (0);
while(true){
if((i__4500__auto___41464 < len__4499__auto___41463)){
args__4502__auto__.push((arguments[i__4500__auto___41464]));

var G__41465 = (i__4500__auto___41464 + (1));
i__4500__auto___41464 = G__41465;
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

stylefy.impl.dom.asynchronously_update_dom.call(null);

return garden_definition;
});

stylefy.impl.dom.add_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
stylefy.impl.dom.add_keyframes.cljs$lang$applyTo = (function (seq41461){
var G__41462 = cljs.core.first.call(null,seq41461);
var seq41461__$1 = cljs.core.next.call(null,seq41461);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41462,seq41461__$1);
});

stylefy.impl.dom.add_font_face = (function stylefy$impl$dom$add_font_face(properties){
var garden_definition = garden.stylesheet.at_font_face.call(null,properties);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.font_faces_in_use,cljs.core.conj,garden_definition);

stylefy.impl.dom.asynchronously_update_dom.call(null);

return garden_definition;
});
stylefy.impl.dom.add_tag = (function stylefy$impl$dom$add_tag(name,properties){
var custom_tag_definition = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.impl.dom","tag-name","stylefy.impl.dom/tag-name",-639357087),name,new cljs.core.Keyword("stylefy.impl.dom","tag-properties","stylefy.impl.dom/tag-properties",327168703),properties], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.custom_tags_in_use,cljs.core.conj,custom_tag_definition);

stylefy.impl.dom.asynchronously_update_dom.call(null);

return custom_tag_definition;
});
stylefy.impl.dom.add_class = (function stylefy$impl$dom$add_class(name,properties){
var custom_class_definition = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.impl.dom","class-name","stylefy.impl.dom/class-name",1864711126),name,new cljs.core.Keyword("stylefy.impl.dom","class-properties","stylefy.impl.dom/class-properties",-2034606216),properties], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.custom_classes_in_use,cljs.core.conj,custom_class_definition);

stylefy.impl.dom.asynchronously_update_dom.call(null);

return custom_class_definition;
});
