// Compiled by ClojureScript 1.10.238 {}
goog.provide('stylefy.core');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('stylefy.impl.styles');
goog.require('stylefy.impl.dom');
/**
 * Defines a style for a component by converting the given style map in to an unique CSS class,
 * and returning a pointer (a map with :class keyword) to it so that the component can use it.
 * 
 * Calling use-style does not immediately add the generated CSS class to DOM, because doing this
 * in a single render would slow everything down if use-style is called multiple times.
 * If the style has not been added into the DOM yet, it also returns the given props as inline style, so that
 * the component looks good even if CSS class has not been generated yet.
 * 
 * Important exception: if the style contains specific modes or media query definitions,
 * {:style {:visibility "hidden"}} is returned until the DOM is ready.
 * This is done because these definitions cannot be present as inline style.
 * If this is a problem, see prepare-styles function.
 * 
 * The given 'style' parameter is a map which contains CSS style properties
 * (as supported by Garden library). There can also be special namespaced keywords
 * along with the style definitions:
 * 
 * ::sub-styles        Makes it possible to define a named style map inside of the main style map.
 *                     The contents of ::sub-styles should be a map,
 *                     in which keys define the name of the sub-style and
 *                     values contain the style properties.
 *                     Sub-styles are nothing special, they are supposed to contain the same contents
 *                     as the main style map. ::sub-styles helps you to define styles that are closely
 *                     related to the main style map but do not deserve their own 'def'.
 * ::mode              A map in which keys are mode names and values are style properties.
 *                     Internally all modes are converted to CSS pseudoclasses. You can use any mode name
 *                     that is a valid CSS speudoclass.
 * ::media             A map in which keys are maps presenting CSS media query definitions, and values
 *                     are style maps which are used when the media query is active.
 * ::vendors           A vector of vendor prefixes that are used with ::auto-prefix.
 * ::auto-prefix       A set of style properties that should be prefixed with ::vendors.
 * ::with-classes      A collection of additional class names that should always be used with
 *                     this style definition.
 * 
 * Options is an optional map, which contains HTML attributes (:class, :href, :src etc.).
 * It can also contain the the following features:
 * 
 * ::with-classes       DEPRECATED. A vector of additional class names used with the current style.
 *                      Deprecated since version 1.3.0: The options map can now contain
 *                      any HTML attributes. Thus, you can just use :class instead of ::with-classes.
 */
stylefy.core.use_style = (function stylefy$core$use_style(var_args){
var G__39353 = arguments.length;
switch (G__39353) {
case 1:
return stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1 = (function (style){
return stylefy.core.use_style.call(null,style,cljs.core.PersistentArrayMap.EMPTY);
});

stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2 = (function (style,options){
if(((cljs.core.map_QMARK_.call(null,style)) || ((style == null)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Style should be a map or nil, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,style))].join('')),"\n","(or (map? style) (nil? style))"].join('')));
}

if(((cljs.core.map_QMARK_.call(null,options)) || ((options == null)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Options should be a map or nil, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,options))].join('')),"\n","(or (map? options) (nil? options))"].join('')));
}

return stylefy.impl.styles.use_style_BANG_.call(null,style,options);
});

stylefy.core.use_style.cljs$lang$maxFixedArity = 2;

/**
 * Defines style for a component using sub-style.
 * 
 * The style and options are the same as you would use with use-style.
 * sub-style is the name of the sub-stale in the given style map.
 * 
 * If you have a deeper sub-style nesting, ie. you want to get a sub-style from sub-style,
 * take a look at sub-style function.
 */
stylefy.core.use_sub_style = (function stylefy$core$use_sub_style(var_args){
var G__39356 = arguments.length;
switch (G__39356) {
case 2:
return stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2 = (function (style,sub_style){
return stylefy.core.use_sub_style.call(null,style,sub_style,cljs.core.PersistentArrayMap.EMPTY);
});

stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$3 = (function (style,sub_style,options){
if(((cljs.core.map_QMARK_.call(null,style)) || ((style == null)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Style should be a map or nil, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,style))].join('')),"\n","(or (map? style) (nil? style))"].join('')));
}

if(((cljs.core.map_QMARK_.call(null,options)) || ((options == null)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Options should be a map or nil, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,options))].join('')),"\n","(or (map? options) (nil? options))"].join('')));
}

return stylefy.impl.styles.use_sub_style_BANG_.call(null,style,sub_style,options);
});

stylefy.core.use_sub_style.cljs$lang$maxFixedArity = 3;

/**
 * Returns sub-style for a given style.
 */
stylefy.core.sub_style = (function stylefy$core$sub_style(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39360 = arguments.length;
var i__4500__auto___39361 = (0);
while(true){
if((i__4500__auto___39361 < len__4499__auto___39360)){
args__4502__auto__.push((arguments[i__4500__auto___39361]));

var G__39362 = (i__4500__auto___39361 + (1));
i__4500__auto___39361 = G__39362;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return stylefy.core.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

stylefy.core.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,sub_styles)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Sub style should be referenced by keyword, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,sub_styles))].join('')),"\n","(every? keyword? sub-styles)"].join('')));
}

return cljs.core.apply.call(null,stylefy.impl.styles.sub_style,cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style], null),sub_styles));
});

stylefy.core.sub_style.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
stylefy.core.sub_style.cljs$lang$applyTo = (function (seq39358){
var G__39359 = cljs.core.first.call(null,seq39358);
var seq39358__$1 = cljs.core.next.call(null,seq39358);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39359,seq39358__$1);
});

/**
 * Initialises stylefy.
 * 
 *   Internally checks cache once and starts checking if new styles need to be added into
 *   the DOM as CSS classes.
 * 
 *   The following options are supported:
 *  use-caching?              If true, caches the generated CSS code using localstorage
 *                            so that future page loads work faster. Defaults to false.
 *                            Also check :cache-options.
 *  cache-options             A map which can contain the following keywords:
 *    expires                 Number of seconds after the cache is cleared automatically.
 *                            For example, value 604800 clears the cache after one week.
 *                            By default, the cache is never cleared automatically.
 *                            You can also clear the cache manually by calling stylefy.cache/clear.
 *  global-vendor-prefixes    A map containing a set of ::stylefy/vendors and
 *                            ::stylefy/auto-prefix properties.
 *                            These properties are globally prefixed in all CSS code.
 */
stylefy.core.init = (function stylefy$core$init(var_args){
var G__39364 = arguments.length;
switch (G__39364) {
case 0:
return stylefy.core.init.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stylefy.core.init.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.core.init.cljs$core$IFn$_invoke$arity$0 = (function (){
return stylefy.core.init.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

stylefy.core.init.cljs$core$IFn$_invoke$arity$1 = (function (options){
stylefy.impl.dom.init_dom_update.call(null);

stylefy.impl.dom.init_styles_in_use.call(null,options);

return stylefy.impl.styles.init_global_vendor_prefixes.call(null,options);
});

stylefy.core.init.cljs$lang$maxFixedArity = 1;

/**
 * Adds the given keyframe definition to DOM.
 * Identifier is the name of the keyframes.
 * Frames are given in the same form as Garden accepts them.
 * 
 * Example:
 * (stylefy/keyframes "simple-animation"
 *                     [:from
 *                      {:opacity 0}]
 *                     [:to
 *                      {:opacity 1}])
 */
stylefy.core.keyframes = (function stylefy$core$keyframes(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39368 = arguments.length;
var i__4500__auto___39369 = (0);
while(true){
if((i__4500__auto___39369 < len__4499__auto___39368)){
args__4502__auto__.push((arguments[i__4500__auto___39369]));

var G__39370 = (i__4500__auto___39369 + (1));
i__4500__auto___39369 = G__39370;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
if(typeof identifier === 'string'){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Identifier should be string, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,identifier))].join('')),"\n","(string? identifier)"].join('')));
}

return cljs.core.apply.call(null,stylefy.impl.dom.add_keyframes,identifier,frames);
});

stylefy.core.keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
stylefy.core.keyframes.cljs$lang$applyTo = (function (seq39366){
var G__39367 = cljs.core.first.call(null,seq39366);
var seq39366__$1 = cljs.core.next.call(null,seq39366);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39367,seq39366__$1);
});

/**
 * Adds the given font-face definition to DOM.
 * Properties are given in the same form as Garden accepts them.
 * 
 * Example:
 * (stylefy/font-face {:font-family "open_sans"
 *                     :src "url('../fonts/OpenSans-Regular-webfont.woff') format('woff')"
 *                     :font-weight "normal"
 *                     :font-style "normal"})
 */
stylefy.core.font_face = (function stylefy$core$font_face(properties){
if(cljs.core.map_QMARK_.call(null,properties)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Properties should be a map, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,properties))].join('')),"\n","(map? properties)"].join('')));
}

return stylefy.impl.dom.add_font_face.call(null,properties);
});
/**
 * Creates a CSS selector for the given tag and properties.
 * Normally you should let stylefy convert your style maps to unique CSS classes by calling
 * use-style, instead of creating tag selectors. However, custom tag styles
 * can be useful for setting styles on base elements, like html or body.
 * 
 * Example:
 * (stylefy/tag "code"
 *               {:background-color "lightyellow"})
 */
stylefy.core.tag = (function stylefy$core$tag(name,properties){
if(typeof name === 'string'){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Tag name should be a string, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,name))].join('')),"\n","(string? name)"].join('')));
}

if(cljs.core.map_QMARK_.call(null,properties)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Properties should be a map, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,properties))].join('')),"\n","(map? properties)"].join('')));
}

return stylefy.impl.dom.add_tag.call(null,name,properties);
});
/**
 * Creates a CSS class with the given name and properties.
 * Normally you should let stylefy convert your style maps to unique CSS classes by calling
 * use-style. Thus, there is usually no need to create customly named classes when using stylefy,
 * unless you work with some 3rd party framework.
 * 
 * Example:
 * (stylefy/class "enter-transition"
 *                 {:transition "background-color 2s"})
 */
stylefy.core.class$ = (function stylefy$core$class(name,properties){
if(typeof name === 'string'){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Name should be a string, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,name))].join('')),"\n","(string? name)"].join('')));
}

if(cljs.core.map_QMARK_.call(null,properties)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Properties should be a map, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,properties))].join('')),"\n","(map? properties)"].join('')));
}

return stylefy.impl.dom.add_class.call(null,name,properties);
});
/**
 * Will convert the given styles and their sub-styles to CSS
 * and add them into the DOM immediately, all at once.
 * 
 * Normally, when you call use-style, the given style is converted to CSS and will
 * be added into the DOM very soon. Until then, the style is returned as inline style, except
 * if it cannot be present as inline style (it contains some specific modes and media queries).
 * In this purpose, it can be useful to ask stylefy to prepare
 * certain styles before they are used in a component. This way, components using these styles
 * can start using CSS classes and media queries immediately.
 * 
 * This function should be called when a component is going to be created
 * (in :component-will-mount lifecycle method).
 */
stylefy.core.prepare_styles = (function stylefy$core$prepare_styles(styles){
if(cljs.core.seqable_QMARK_.call(null,styles)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Styles should be seqable, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,styles))].join('')),"\n","(seqable? styles)"].join('')));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,cljs.core.remove.call(null,cljs.core.nil_QMARK_,styles))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Every style should be a map or nil, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,styles))].join('')),"\n","(every? map? (remove nil? styles))"].join('')));
}

return stylefy.impl.styles.prepare_styles.call(null,styles);
});
