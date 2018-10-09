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
stylefy.impl.dom.stylefy_node_id = "#_stylefy-styles_";
stylefy.impl.dom.stylefy_constant_node_id = "#_stylefy-constant-styles_";
stylefy.impl.dom.stylefy_base_node = cljs.core.atom.call(null,null);
stylefy.impl.dom.stylefy_instance_id = cljs.core.atom.call(null,null);
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
return new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061).cljs$core$IFn$_invoke$arity$1(keyframes);
});})(styles_in_css))
,cljs.core.deref.call(null,stylefy.impl.dom.keyframes_in_use));
var font_faces_in_use = cljs.core.map.call(null,((function (styles_in_css,keyframes_in_css){
return (function (properties){
return new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061).cljs$core$IFn$_invoke$arity$1(properties);
});})(styles_in_css,keyframes_in_css))
,cljs.core.deref.call(null,stylefy.impl.dom.font_faces_in_use));
var custom_tags_in_use = cljs.core.map.call(null,((function (styles_in_css,keyframes_in_css,font_faces_in_use){
return (function (tag_definition){
return new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061).cljs$core$IFn$_invoke$arity$1(tag_definition);
});})(styles_in_css,keyframes_in_css,font_faces_in_use))
,cljs.core.deref.call(null,stylefy.impl.dom.custom_tags_in_use));
var custom_classes_in_use = cljs.core.map.call(null,((function (styles_in_css,keyframes_in_css,font_faces_in_use,custom_tags_in_use){
return (function (tag_definition){
return new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061).cljs$core$IFn$_invoke$arity$1(tag_definition);
});})(styles_in_css,keyframes_in_css,font_faces_in_use,custom_tags_in_use))
,cljs.core.deref.call(null,stylefy.impl.dom.custom_classes_in_use));
dommy.core.set_text_BANG_.call(null,node_constant,cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,font_faces_in_use,keyframes_in_css,custom_tags_in_use,custom_classes_in_use)));

return dommy.core.set_text_BANG_.call(null,node,cljs.core.apply.call(null,cljs.core.str,styles_in_css));
});
stylefy.impl.dom.mark_all_styles_added_in_dom_BANG_ = (function stylefy$impl$dom$mark_all_styles_added_in_dom_BANG_(){
return cljs.core.reset_BANG_.call(null,stylefy.impl.dom.styles_in_use,cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__41456_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__41456_SHARP_,cljs.core.assoc.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use),p1__41456_SHARP_),new cljs.core.Keyword("stylefy.impl.dom","in-dom?","stylefy.impl.dom/in-dom?",-1380916144),true)]);
}),cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use)))));
});
stylefy.impl.dom.get_stylefy_node = (function stylefy$impl$dom$get_stylefy_node(id,base_node,instance_id){
var final_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(instance_id)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_id)].join(''):null))].join('');
if((base_node == null)){
return document.querySelector(dommy.core.selector.call(null,final_id));
} else {
return base_node.querySelector(dommy.core.selector.call(null,final_id));
}
});
stylefy.impl.dom.update_dom = (function stylefy$impl$dom$update_dom(){
var node = stylefy.impl.dom.get_stylefy_node.call(null,stylefy.impl.dom.stylefy_node_id,cljs.core.deref.call(null,stylefy.impl.dom.stylefy_base_node),cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id));
var node_constant = stylefy.impl.dom.get_stylefy_node.call(null,stylefy.impl.dom.stylefy_constant_node_id,cljs.core.deref.call(null,stylefy.impl.dom.stylefy_base_node),cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id));
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
return (function (p1__41457_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__41457_SHARP_,cljs.core.dissoc.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use),p1__41457_SHARP_),new cljs.core.Keyword("stylefy.impl.dom","in-dom?","stylefy.impl.dom/in-dom?",-1380916144))]);
});})(node,node_constant))
,cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use)))),cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id));
}catch (e41458){var e_41459 = e41458;
console.warn(["Unable to cache styles, error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41459)].join(''));

stylefy.impl.cache.clear_styles.call(null,cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id));

}
return stylefy.impl.dom.mark_all_styles_added_in_dom_BANG_.call(null);
} else {
return console.error("stylefy is unable to find the required <style> tags!");
}
});
/**
 * Updates style tag if needed.
 */
stylefy.impl.dom.asynchronously_update_dom = (function stylefy$impl$dom$asynchronously_update_dom(){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.stylefy_initialised_QMARK_))){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.dom_update_requested_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_update_requested_QMARK_,true);

var c__39516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto__){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto__){
return (function (state_41462){
var state_val_41463 = (state_41462[(1)]);
if((state_val_41463 === (1))){
var inst_41460 = stylefy.impl.dom.update_dom.call(null);
var state_41462__$1 = state_41462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41462__$1,inst_41460);
} else {
return null;
}
});})(c__39516__auto__))
;
return ((function (switch__39426__auto__,c__39516__auto__){
return (function() {
var stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39427__auto__ = null;
var stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39427__auto____0 = (function (){
var statearr_41464 = [null,null,null,null,null,null,null];
(statearr_41464[(0)] = stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39427__auto__);

(statearr_41464[(1)] = (1));

return statearr_41464;
});
var stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39427__auto____1 = (function (state_41462){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_41462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e41465){if((e41465 instanceof Object)){
var ex__39430__auto__ = e41465;
var statearr_41466_41468 = state_41462;
(statearr_41466_41468[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41469 = state_41462;
state_41462 = G__41469;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39427__auto__ = function(state_41462){
switch(arguments.length){
case 0:
return stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39427__auto____0.call(this);
case 1:
return stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39427__auto____1.call(this,state_41462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39427__auto____0;
stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39427__auto____1;
return stylefy$impl$dom$asynchronously_update_dom_$_state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto__))
})();
var state__39518__auto__ = (function (){var statearr_41467 = f__39517__auto__.call(null);
(statearr_41467[(6)] = c__39516__auto__);

return statearr_41467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto__))
);

return c__39516__auto__;
}
} else {
return null;
}
});
stylefy.impl.dom.check_stylefy_initialisation = (function stylefy$impl$dom$check_stylefy_initialisation(){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.stylefy_initialised_QMARK_))){
return null;
} else {
return console.warn(["stylefy has not been initialised correctly. Call stylefy/init once when your application starts."].join(''));
}
});
stylefy.impl.dom.init_multi_instance = (function stylefy$impl$dom$init_multi_instance(p__41470){
var map__41471 = p__41470;
var map__41471__$1 = ((((!((map__41471 == null)))?(((((map__41471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41471):map__41471);
var options = map__41471__$1;
var multi_instance = cljs.core.get.call(null,map__41471__$1,new cljs.core.Keyword(null,"multi-instance","multi-instance",-1525956512));
var base_node = new cljs.core.Keyword(null,"base-node","base-node",-275497090).cljs$core$IFn$_invoke$arity$1(multi_instance);
var instance_id = new cljs.core.Keyword(null,"instance-id","instance-id",951361263).cljs$core$IFn$_invoke$arity$1(multi_instance);
if((((instance_id == null)) || (typeof instance_id === 'string'))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["instance-id must be string. Got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,base_node,instance_id))].join('')),"\n","(or (nil? instance-id) (string? instance-id))"].join('')));
}

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.stylefy_base_node,base_node);

return cljs.core.reset_BANG_.call(null,stylefy.impl.dom.stylefy_instance_id,instance_id);
});
stylefy.impl.dom.init_cache = (function stylefy$impl$dom$init_cache(options){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"use-caching?","use-caching?",427588313).cljs$core$IFn$_invoke$arity$1(options),false)){
stylefy.impl.cache.use_caching_BANG_.call(null,new cljs.core.Keyword(null,"cache-options","cache-options",1443503739).cljs$core$IFn$_invoke$arity$1(options),cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id));

var temp__5457__auto__ = stylefy.impl.cache.read_cache_value.call(null,stylefy.impl.cache.cache_key_styles.call(null,cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id)));
if(cljs.core.truth_(temp__5457__auto__)){
var cached_styles = temp__5457__auto__;
return cljs.core.reset_BANG_.call(null,stylefy.impl.dom.styles_in_use,(function (){var or__3922__auto__ = cached_styles;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
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
stylefy.impl.dom.save_style_BANG_ = (function stylefy$impl$dom$save_style_BANG_(p__41473){
var map__41474 = p__41473;
var map__41474__$1 = ((((!((map__41474 == null)))?(((((map__41474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41474):map__41474);
var style = map__41474__$1;
var props = cljs.core.get.call(null,map__41474__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__41474__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.truth_(props)){
} else {
throw (new Error(["Assert failed: ","Unable to save empty style!","\n","props"].join('')));
}

if(cljs.core.truth_(hash)){
} else {
throw (new Error(["Assert failed: ","Unable to save style without hash!","\n","hash"].join('')));
}

var style_css = stylefy.impl.conversion.style__GT_css.call(null,style);
var style_to_be_saved = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),style_css], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.styles_in_use,cljs.core.assoc,hash,style_to_be_saved);

return stylefy.impl.dom.asynchronously_update_dom.call(null);
});
stylefy.impl.dom.style_in_dom_QMARK_ = (function stylefy$impl$dom$style_in_dom_QMARK_(style_hash){
return cljs.core.boolean$.call(null,new cljs.core.Keyword("stylefy.impl.dom","in-dom?","stylefy.impl.dom/in-dom?",-1380916144).cljs$core$IFn$_invoke$arity$1(stylefy.impl.dom.style_by_hash.call(null,style_hash)));
});
stylefy.impl.dom.add_keyframes = (function stylefy$impl$dom$add_keyframes(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41478 = arguments.length;
var i__4500__auto___41479 = (0);
while(true){
if((i__4500__auto___41479 < len__4499__auto___41478)){
args__4502__auto__.push((arguments[i__4500__auto___41479]));

var G__41480 = (i__4500__auto___41479 + (1));
i__4500__auto___41479 = G__41480;
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
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.keyframes_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),garden.core.css.call(null,garden_definition)], null));

stylefy.impl.dom.asynchronously_update_dom.call(null);

return garden_definition;
});

stylefy.impl.dom.add_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
stylefy.impl.dom.add_keyframes.cljs$lang$applyTo = (function (seq41476){
var G__41477 = cljs.core.first.call(null,seq41476);
var seq41476__$1 = cljs.core.next.call(null,seq41476);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41477,seq41476__$1);
});

stylefy.impl.dom.add_font_face = (function stylefy$impl$dom$add_font_face(properties){
var garden_definition = garden.stylesheet.at_font_face.call(null,properties);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.font_faces_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),garden.core.css.call(null,garden_definition)], null));

stylefy.impl.dom.asynchronously_update_dom.call(null);

return garden_definition;
});
stylefy.impl.dom.add_tag = (function stylefy$impl$dom$add_tag(name,properties){
var custom_tag_definition = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.impl.dom","tag-name","stylefy.impl.dom/tag-name",-639357087),name,new cljs.core.Keyword("stylefy.impl.dom","tag-properties","stylefy.impl.dom/tag-properties",327168703),properties], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.custom_tags_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),stylefy.impl.conversion.style__GT_css.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword("stylefy.impl.dom","tag-properties","stylefy.impl.dom/tag-properties",327168703).cljs$core$IFn$_invoke$arity$1(custom_tag_definition),new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277),new cljs.core.Keyword("stylefy.impl.dom","tag-name","stylefy.impl.dom/tag-name",-639357087).cljs$core$IFn$_invoke$arity$1(custom_tag_definition)], null))], null));

stylefy.impl.dom.asynchronously_update_dom.call(null);

return custom_tag_definition;
});
stylefy.impl.dom.add_class = (function stylefy$impl$dom$add_class(name,properties){
var custom_class_definition = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.impl.dom","class-name","stylefy.impl.dom/class-name",1864711126),name,new cljs.core.Keyword("stylefy.impl.dom","class-properties","stylefy.impl.dom/class-properties",-2034606216),properties], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.custom_classes_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),stylefy.impl.conversion.style__GT_css.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword("stylefy.impl.dom","class-properties","stylefy.impl.dom/class-properties",-2034606216).cljs$core$IFn$_invoke$arity$1(custom_class_definition),new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277),stylefy.impl.conversion.class_selector.call(null,new cljs.core.Keyword("stylefy.impl.dom","class-name","stylefy.impl.dom/class-name",1864711126).cljs$core$IFn$_invoke$arity$1(custom_class_definition))], null))], null));

stylefy.impl.dom.asynchronously_update_dom.call(null);

return custom_class_definition;
});
