// Compiled by ClojureScript 1.10.238 {}
goog.provide('stylefy.impl.cache');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('garden.core');
goog.require('stylefy.impl.utils');
goog.require('garden.stylesheet');
stylefy.impl.cache.cache_prefix = "stylefy_cache_";
stylefy.impl.cache.cache_styles_QMARK_ = cljs.core.atom.call(null,false);
stylefy.impl.cache.default_cache_expiration_time_s = (((((((1) * (60)) * (60)) * cljs.core._STAR_) * (24)) * cljs.core._STAR_) * (7));
stylefy.impl.cache.cache_key_styles = (function stylefy$impl$cache$cache_key_styles(instance_id){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(stylefy.impl.cache.cache_prefix),"styles",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(instance_id)?["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_id)].join(''):null))].join('');
});
stylefy.impl.cache.cache_key_created = (function stylefy$impl$cache$cache_key_created(instance_id){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(stylefy.impl.cache.cache_prefix),"created",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(instance_id)?["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_id)].join(''):null))].join('');
});
stylefy.impl.cache.now_in_seconds = (function stylefy$impl$cache$now_in_seconds(){
return Math.floor((Date.now() / (1000)));
});
stylefy.impl.cache.cache_expired_QMARK_ = (function stylefy$impl$cache$cache_expired_QMARK_(cache_created,expiration_age,now){
if(cljs.core.truth_((function (){var and__3911__auto__ = cache_created;
if(cljs.core.truth_(and__3911__auto__)){
return expiration_age;
} else {
return and__3911__auto__;
}
})())){
return ((cache_created + expiration_age) < now);
} else {
return false;
}
});
/**
 * Reads the cache if caching is used.
 */
stylefy.impl.cache.read_cache_value = (function stylefy$impl$cache$read_cache_value(key){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.cache.cache_styles_QMARK_))){
var temp__5457__auto__ = window.localStorage.getItem(key);
if(cljs.core.truth_(temp__5457__auto__)){
var cache_contents = temp__5457__auto__;
return cljs.reader.read_string.call(null,cache_contents);
} else {
return null;
}
} else {
return null;
}
});
stylefy.impl.cache.set_cache_created_time = (function stylefy$impl$cache$set_cache_created_time(var_args){
var G__38173 = arguments.length;
switch (G__38173) {
case 1:
return stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$1 = (function (time_created){
return stylefy.impl.cache.set_cache_created_time.call(null,time_created,null);
});

stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$2 = (function (time_created,instance_id){
return window.localStorage.setItem(stylefy.impl.cache.cache_key_created.call(null,instance_id),time_created);
});

stylefy.impl.cache.set_cache_created_time.cljs$lang$maxFixedArity = 2;

stylefy.impl.cache.clear_styles = (function stylefy$impl$cache$clear_styles(var_args){
var G__38176 = arguments.length;
switch (G__38176) {
case 0:
return stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$0 = (function (){
return stylefy.impl.cache.clear_styles.call(null,null);
});

stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1 = (function (instance_id){
return window.localStorage.setItem(stylefy.impl.cache.cache_key_styles.call(null,instance_id),"");
});

stylefy.impl.cache.clear_styles.cljs$lang$maxFixedArity = 1;

stylefy.impl.cache.use_caching_BANG_ = (function stylefy$impl$cache$use_caching_BANG_(var_args){
var G__38179 = arguments.length;
switch (G__38179) {
case 1:
return stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (cache_options){
return stylefy.impl.cache.use_caching_BANG_.call(null,cache_options,null);
});

stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cache_options,instance_id){
cljs.core.reset_BANG_.call(null,stylefy.impl.cache.cache_styles_QMARK_,true);

if(cljs.core.truth_(stylefy.impl.cache.read_cache_value.call(null,stylefy.impl.cache.cache_key_created.call(null,instance_id)))){
} else {
stylefy.impl.cache.set_cache_created_time.call(null,stylefy.impl.cache.now_in_seconds.call(null),instance_id);
}

if(cljs.core.truth_(stylefy.impl.cache.cache_expired_QMARK_.call(null,stylefy.impl.cache.read_cache_value.call(null,stylefy.impl.cache.cache_key_created.call(null,instance_id)),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"expires","expires",1393008816).cljs$core$IFn$_invoke$arity$1(cache_options);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return stylefy.impl.cache.default_cache_expiration_time_s;
}
})(),stylefy.impl.cache.now_in_seconds.call(null)))){
stylefy.impl.cache.clear_styles.call(null,instance_id);

return stylefy.impl.cache.set_cache_created_time.call(null,stylefy.impl.cache.now_in_seconds.call(null),instance_id);
} else {
return null;
}
});

stylefy.impl.cache.use_caching_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Caches the given style if caching is used.
 *   Throws QUOTA_EXCEEDED_ERR if the storage is full.
 */
stylefy.impl.cache.cache_styles = (function stylefy$impl$cache$cache_styles(var_args){
var G__38182 = arguments.length;
switch (G__38182) {
case 1:
return stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return stylefy.impl.cache.cache_styles.call(null,styles,null);
});

stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$2 = (function (styles,instance_id){
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.deref.call(null,stylefy.impl.cache.cache_styles_QMARK_);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.map_QMARK_.call(null,styles);
} else {
return and__3911__auto__;
}
})())){
return window.localStorage.setItem(stylefy.impl.cache.cache_key_styles.call(null,instance_id),styles);
} else {
return null;
}
});

stylefy.impl.cache.cache_styles.cljs$lang$maxFixedArity = 2;

