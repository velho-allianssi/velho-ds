// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43594 = arguments.length;
switch (G__43594) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async43595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43595 = (function (f,blockable,meta43596){
this.f = f;
this.blockable = blockable;
this.meta43596 = meta43596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43597,meta43596__$1){
var self__ = this;
var _43597__$1 = this;
return (new cljs.core.async.t_cljs$core$async43595(self__.f,self__.blockable,meta43596__$1));
});

cljs.core.async.t_cljs$core$async43595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43597){
var self__ = this;
var _43597__$1 = this;
return self__.meta43596;
});

cljs.core.async.t_cljs$core$async43595.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43595.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async43595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43596","meta43596",-540161449,null)], null);
});

cljs.core.async.t_cljs$core$async43595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43595";

cljs.core.async.t_cljs$core$async43595.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async43595");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43595.
 */
cljs.core.async.__GT_t_cljs$core$async43595 = (function cljs$core$async$__GT_t_cljs$core$async43595(f__$1,blockable__$1,meta43596){
return (new cljs.core.async.t_cljs$core$async43595(f__$1,blockable__$1,meta43596));
});

}

return (new cljs.core.async.t_cljs$core$async43595(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__43601 = arguments.length;
switch (G__43601) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43604 = arguments.length;
switch (G__43604) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__43607 = arguments.length;
switch (G__43607) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_43609 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43609);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_43609,ret){
return (function (){
return fn1.call(null,val_43609);
});})(val_43609,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43611 = arguments.length;
switch (G__43611) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___43613 = n;
var x_43614 = (0);
while(true){
if((x_43614 < n__4376__auto___43613)){
(a[x_43614] = (0));

var G__43615 = (x_43614 + (1));
x_43614 = G__43615;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__43616 = (i + (1));
i = G__43616;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async43617 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43617 = (function (flag,meta43618){
this.flag = flag;
this.meta43618 = meta43618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43619,meta43618__$1){
var self__ = this;
var _43619__$1 = this;
return (new cljs.core.async.t_cljs$core$async43617(self__.flag,meta43618__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async43617.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43619){
var self__ = this;
var _43619__$1 = this;
return self__.meta43618;
});})(flag))
;

cljs.core.async.t_cljs$core$async43617.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43617.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async43617.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43617.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43617.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43618","meta43618",-19261026,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43617.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43617";

cljs.core.async.t_cljs$core$async43617.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async43617");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43617.
 */
cljs.core.async.__GT_t_cljs$core$async43617 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43617(flag__$1,meta43618){
return (new cljs.core.async.t_cljs$core$async43617(flag__$1,meta43618));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43617(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async43620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43620 = (function (flag,cb,meta43621){
this.flag = flag;
this.cb = cb;
this.meta43621 = meta43621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43622,meta43621__$1){
var self__ = this;
var _43622__$1 = this;
return (new cljs.core.async.t_cljs$core$async43620(self__.flag,self__.cb,meta43621__$1));
});

cljs.core.async.t_cljs$core$async43620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43622){
var self__ = this;
var _43622__$1 = this;
return self__.meta43621;
});

cljs.core.async.t_cljs$core$async43620.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async43620.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43621","meta43621",2005776100,null)], null);
});

cljs.core.async.t_cljs$core$async43620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43620";

cljs.core.async.t_cljs$core$async43620.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async43620");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43620.
 */
cljs.core.async.__GT_t_cljs$core$async43620 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43620(flag__$1,cb__$1,meta43621){
return (new cljs.core.async.t_cljs$core$async43620(flag__$1,cb__$1,meta43621));
});

}

return (new cljs.core.async.t_cljs$core$async43620(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43623_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43623_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43624_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43624_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43625 = (i + (1));
i = G__43625;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43631 = arguments.length;
var i__4500__auto___43632 = (0);
while(true){
if((i__4500__auto___43632 < len__4499__auto___43631)){
args__4502__auto__.push((arguments[i__4500__auto___43632]));

var G__43633 = (i__4500__auto___43632 + (1));
i__4500__auto___43632 = G__43633;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43628){
var map__43629 = p__43628;
var map__43629__$1 = ((((!((map__43629 == null)))?(((((map__43629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43629):map__43629);
var opts = map__43629__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43626){
var G__43627 = cljs.core.first.call(null,seq43626);
var seq43626__$1 = cljs.core.next.call(null,seq43626);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43627,seq43626__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43635 = arguments.length;
switch (G__43635) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43534__auto___43681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto___43681){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto___43681){
return (function (state_43659){
var state_val_43660 = (state_43659[(1)]);
if((state_val_43660 === (7))){
var inst_43655 = (state_43659[(2)]);
var state_43659__$1 = state_43659;
var statearr_43661_43682 = state_43659__$1;
(statearr_43661_43682[(2)] = inst_43655);

(statearr_43661_43682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43660 === (1))){
var state_43659__$1 = state_43659;
var statearr_43662_43683 = state_43659__$1;
(statearr_43662_43683[(2)] = null);

(statearr_43662_43683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43660 === (4))){
var inst_43638 = (state_43659[(7)]);
var inst_43638__$1 = (state_43659[(2)]);
var inst_43639 = (inst_43638__$1 == null);
var state_43659__$1 = (function (){var statearr_43663 = state_43659;
(statearr_43663[(7)] = inst_43638__$1);

return statearr_43663;
})();
if(cljs.core.truth_(inst_43639)){
var statearr_43664_43684 = state_43659__$1;
(statearr_43664_43684[(1)] = (5));

} else {
var statearr_43665_43685 = state_43659__$1;
(statearr_43665_43685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43660 === (13))){
var state_43659__$1 = state_43659;
var statearr_43666_43686 = state_43659__$1;
(statearr_43666_43686[(2)] = null);

(statearr_43666_43686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43660 === (6))){
var inst_43638 = (state_43659[(7)]);
var state_43659__$1 = state_43659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43659__$1,(11),to,inst_43638);
} else {
if((state_val_43660 === (3))){
var inst_43657 = (state_43659[(2)]);
var state_43659__$1 = state_43659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43659__$1,inst_43657);
} else {
if((state_val_43660 === (12))){
var state_43659__$1 = state_43659;
var statearr_43667_43687 = state_43659__$1;
(statearr_43667_43687[(2)] = null);

(statearr_43667_43687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43660 === (2))){
var state_43659__$1 = state_43659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43659__$1,(4),from);
} else {
if((state_val_43660 === (11))){
var inst_43648 = (state_43659[(2)]);
var state_43659__$1 = state_43659;
if(cljs.core.truth_(inst_43648)){
var statearr_43668_43688 = state_43659__$1;
(statearr_43668_43688[(1)] = (12));

} else {
var statearr_43669_43689 = state_43659__$1;
(statearr_43669_43689[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43660 === (9))){
var state_43659__$1 = state_43659;
var statearr_43670_43690 = state_43659__$1;
(statearr_43670_43690[(2)] = null);

(statearr_43670_43690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43660 === (5))){
var state_43659__$1 = state_43659;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43671_43691 = state_43659__$1;
(statearr_43671_43691[(1)] = (8));

} else {
var statearr_43672_43692 = state_43659__$1;
(statearr_43672_43692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43660 === (14))){
var inst_43653 = (state_43659[(2)]);
var state_43659__$1 = state_43659;
var statearr_43673_43693 = state_43659__$1;
(statearr_43673_43693[(2)] = inst_43653);

(statearr_43673_43693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43660 === (10))){
var inst_43645 = (state_43659[(2)]);
var state_43659__$1 = state_43659;
var statearr_43674_43694 = state_43659__$1;
(statearr_43674_43694[(2)] = inst_43645);

(statearr_43674_43694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43660 === (8))){
var inst_43642 = cljs.core.async.close_BANG_.call(null,to);
var state_43659__$1 = state_43659;
var statearr_43675_43695 = state_43659__$1;
(statearr_43675_43695[(2)] = inst_43642);

(statearr_43675_43695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto___43681))
;
return ((function (switch__43444__auto__,c__43534__auto___43681){
return (function() {
var cljs$core$async$state_machine__43445__auto__ = null;
var cljs$core$async$state_machine__43445__auto____0 = (function (){
var statearr_43676 = [null,null,null,null,null,null,null,null];
(statearr_43676[(0)] = cljs$core$async$state_machine__43445__auto__);

(statearr_43676[(1)] = (1));

return statearr_43676;
});
var cljs$core$async$state_machine__43445__auto____1 = (function (state_43659){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_43659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e43677){if((e43677 instanceof Object)){
var ex__43448__auto__ = e43677;
var statearr_43678_43696 = state_43659;
(statearr_43678_43696[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43697 = state_43659;
state_43659 = G__43697;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$state_machine__43445__auto__ = function(state_43659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43445__auto____1.call(this,state_43659);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43445__auto____0;
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43445__auto____1;
return cljs$core$async$state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto___43681))
})();
var state__43536__auto__ = (function (){var statearr_43679 = f__43535__auto__.call(null);
(statearr_43679[(6)] = c__43534__auto___43681);

return statearr_43679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto___43681))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__43698){
var vec__43699 = p__43698;
var v = cljs.core.nth.call(null,vec__43699,(0),null);
var p = cljs.core.nth.call(null,vec__43699,(1),null);
var job = vec__43699;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__43534__auto___43870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto___43870,res,vec__43699,v,p,job,jobs,results){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto___43870,res,vec__43699,v,p,job,jobs,results){
return (function (state_43706){
var state_val_43707 = (state_43706[(1)]);
if((state_val_43707 === (1))){
var state_43706__$1 = state_43706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43706__$1,(2),res,v);
} else {
if((state_val_43707 === (2))){
var inst_43703 = (state_43706[(2)]);
var inst_43704 = cljs.core.async.close_BANG_.call(null,res);
var state_43706__$1 = (function (){var statearr_43708 = state_43706;
(statearr_43708[(7)] = inst_43703);

return statearr_43708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43706__$1,inst_43704);
} else {
return null;
}
}
});})(c__43534__auto___43870,res,vec__43699,v,p,job,jobs,results))
;
return ((function (switch__43444__auto__,c__43534__auto___43870,res,vec__43699,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____0 = (function (){
var statearr_43709 = [null,null,null,null,null,null,null,null];
(statearr_43709[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__);

(statearr_43709[(1)] = (1));

return statearr_43709;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____1 = (function (state_43706){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_43706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e43710){if((e43710 instanceof Object)){
var ex__43448__auto__ = e43710;
var statearr_43711_43871 = state_43706;
(statearr_43711_43871[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43872 = state_43706;
state_43706 = G__43872;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__ = function(state_43706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____1.call(this,state_43706);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto___43870,res,vec__43699,v,p,job,jobs,results))
})();
var state__43536__auto__ = (function (){var statearr_43712 = f__43535__auto__.call(null);
(statearr_43712[(6)] = c__43534__auto___43870);

return statearr_43712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto___43870,res,vec__43699,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43713){
var vec__43714 = p__43713;
var v = cljs.core.nth.call(null,vec__43714,(0),null);
var p = cljs.core.nth.call(null,vec__43714,(1),null);
var job = vec__43714;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___43873 = n;
var __43874 = (0);
while(true){
if((__43874 < n__4376__auto___43873)){
var G__43717_43875 = type;
var G__43717_43876__$1 = (((G__43717_43875 instanceof cljs.core.Keyword))?G__43717_43875.fqn:null);
switch (G__43717_43876__$1) {
case "compute":
var c__43534__auto___43878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43874,c__43534__auto___43878,G__43717_43875,G__43717_43876__$1,n__4376__auto___43873,jobs,results,process,async){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (__43874,c__43534__auto___43878,G__43717_43875,G__43717_43876__$1,n__4376__auto___43873,jobs,results,process,async){
return (function (state_43730){
var state_val_43731 = (state_43730[(1)]);
if((state_val_43731 === (1))){
var state_43730__$1 = state_43730;
var statearr_43732_43879 = state_43730__$1;
(statearr_43732_43879[(2)] = null);

(statearr_43732_43879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43731 === (2))){
var state_43730__$1 = state_43730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43730__$1,(4),jobs);
} else {
if((state_val_43731 === (3))){
var inst_43728 = (state_43730[(2)]);
var state_43730__$1 = state_43730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43730__$1,inst_43728);
} else {
if((state_val_43731 === (4))){
var inst_43720 = (state_43730[(2)]);
var inst_43721 = process.call(null,inst_43720);
var state_43730__$1 = state_43730;
if(cljs.core.truth_(inst_43721)){
var statearr_43733_43880 = state_43730__$1;
(statearr_43733_43880[(1)] = (5));

} else {
var statearr_43734_43881 = state_43730__$1;
(statearr_43734_43881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43731 === (5))){
var state_43730__$1 = state_43730;
var statearr_43735_43882 = state_43730__$1;
(statearr_43735_43882[(2)] = null);

(statearr_43735_43882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43731 === (6))){
var state_43730__$1 = state_43730;
var statearr_43736_43883 = state_43730__$1;
(statearr_43736_43883[(2)] = null);

(statearr_43736_43883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43731 === (7))){
var inst_43726 = (state_43730[(2)]);
var state_43730__$1 = state_43730;
var statearr_43737_43884 = state_43730__$1;
(statearr_43737_43884[(2)] = inst_43726);

(statearr_43737_43884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43874,c__43534__auto___43878,G__43717_43875,G__43717_43876__$1,n__4376__auto___43873,jobs,results,process,async))
;
return ((function (__43874,switch__43444__auto__,c__43534__auto___43878,G__43717_43875,G__43717_43876__$1,n__4376__auto___43873,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____0 = (function (){
var statearr_43738 = [null,null,null,null,null,null,null];
(statearr_43738[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__);

(statearr_43738[(1)] = (1));

return statearr_43738;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____1 = (function (state_43730){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_43730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e43739){if((e43739 instanceof Object)){
var ex__43448__auto__ = e43739;
var statearr_43740_43885 = state_43730;
(statearr_43740_43885[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43886 = state_43730;
state_43730 = G__43886;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__ = function(state_43730){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____1.call(this,state_43730);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__;
})()
;})(__43874,switch__43444__auto__,c__43534__auto___43878,G__43717_43875,G__43717_43876__$1,n__4376__auto___43873,jobs,results,process,async))
})();
var state__43536__auto__ = (function (){var statearr_43741 = f__43535__auto__.call(null);
(statearr_43741[(6)] = c__43534__auto___43878);

return statearr_43741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(__43874,c__43534__auto___43878,G__43717_43875,G__43717_43876__$1,n__4376__auto___43873,jobs,results,process,async))
);


break;
case "async":
var c__43534__auto___43887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43874,c__43534__auto___43887,G__43717_43875,G__43717_43876__$1,n__4376__auto___43873,jobs,results,process,async){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (__43874,c__43534__auto___43887,G__43717_43875,G__43717_43876__$1,n__4376__auto___43873,jobs,results,process,async){
return (function (state_43754){
var state_val_43755 = (state_43754[(1)]);
if((state_val_43755 === (1))){
var state_43754__$1 = state_43754;
var statearr_43756_43888 = state_43754__$1;
(statearr_43756_43888[(2)] = null);

(statearr_43756_43888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43755 === (2))){
var state_43754__$1 = state_43754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43754__$1,(4),jobs);
} else {
if((state_val_43755 === (3))){
var inst_43752 = (state_43754[(2)]);
var state_43754__$1 = state_43754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43754__$1,inst_43752);
} else {
if((state_val_43755 === (4))){
var inst_43744 = (state_43754[(2)]);
var inst_43745 = async.call(null,inst_43744);
var state_43754__$1 = state_43754;
if(cljs.core.truth_(inst_43745)){
var statearr_43757_43889 = state_43754__$1;
(statearr_43757_43889[(1)] = (5));

} else {
var statearr_43758_43890 = state_43754__$1;
(statearr_43758_43890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43755 === (5))){
var state_43754__$1 = state_43754;
var statearr_43759_43891 = state_43754__$1;
(statearr_43759_43891[(2)] = null);

(statearr_43759_43891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43755 === (6))){
var state_43754__$1 = state_43754;
var statearr_43760_43892 = state_43754__$1;
(statearr_43760_43892[(2)] = null);

(statearr_43760_43892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43755 === (7))){
var inst_43750 = (state_43754[(2)]);
var state_43754__$1 = state_43754;
var statearr_43761_43893 = state_43754__$1;
(statearr_43761_43893[(2)] = inst_43750);

(statearr_43761_43893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43874,c__43534__auto___43887,G__43717_43875,G__43717_43876__$1,n__4376__auto___43873,jobs,results,process,async))
;
return ((function (__43874,switch__43444__auto__,c__43534__auto___43887,G__43717_43875,G__43717_43876__$1,n__4376__auto___43873,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____0 = (function (){
var statearr_43762 = [null,null,null,null,null,null,null];
(statearr_43762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__);

(statearr_43762[(1)] = (1));

return statearr_43762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____1 = (function (state_43754){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_43754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e43763){if((e43763 instanceof Object)){
var ex__43448__auto__ = e43763;
var statearr_43764_43894 = state_43754;
(statearr_43764_43894[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43895 = state_43754;
state_43754 = G__43895;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__ = function(state_43754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____1.call(this,state_43754);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__;
})()
;})(__43874,switch__43444__auto__,c__43534__auto___43887,G__43717_43875,G__43717_43876__$1,n__4376__auto___43873,jobs,results,process,async))
})();
var state__43536__auto__ = (function (){var statearr_43765 = f__43535__auto__.call(null);
(statearr_43765[(6)] = c__43534__auto___43887);

return statearr_43765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(__43874,c__43534__auto___43887,G__43717_43875,G__43717_43876__$1,n__4376__auto___43873,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43717_43876__$1)].join('')));

}

var G__43896 = (__43874 + (1));
__43874 = G__43896;
continue;
} else {
}
break;
}

var c__43534__auto___43897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto___43897,jobs,results,process,async){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto___43897,jobs,results,process,async){
return (function (state_43787){
var state_val_43788 = (state_43787[(1)]);
if((state_val_43788 === (1))){
var state_43787__$1 = state_43787;
var statearr_43789_43898 = state_43787__$1;
(statearr_43789_43898[(2)] = null);

(statearr_43789_43898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43788 === (2))){
var state_43787__$1 = state_43787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43787__$1,(4),from);
} else {
if((state_val_43788 === (3))){
var inst_43785 = (state_43787[(2)]);
var state_43787__$1 = state_43787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43787__$1,inst_43785);
} else {
if((state_val_43788 === (4))){
var inst_43768 = (state_43787[(7)]);
var inst_43768__$1 = (state_43787[(2)]);
var inst_43769 = (inst_43768__$1 == null);
var state_43787__$1 = (function (){var statearr_43790 = state_43787;
(statearr_43790[(7)] = inst_43768__$1);

return statearr_43790;
})();
if(cljs.core.truth_(inst_43769)){
var statearr_43791_43899 = state_43787__$1;
(statearr_43791_43899[(1)] = (5));

} else {
var statearr_43792_43900 = state_43787__$1;
(statearr_43792_43900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43788 === (5))){
var inst_43771 = cljs.core.async.close_BANG_.call(null,jobs);
var state_43787__$1 = state_43787;
var statearr_43793_43901 = state_43787__$1;
(statearr_43793_43901[(2)] = inst_43771);

(statearr_43793_43901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43788 === (6))){
var inst_43773 = (state_43787[(8)]);
var inst_43768 = (state_43787[(7)]);
var inst_43773__$1 = cljs.core.async.chan.call(null,(1));
var inst_43774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43775 = [inst_43768,inst_43773__$1];
var inst_43776 = (new cljs.core.PersistentVector(null,2,(5),inst_43774,inst_43775,null));
var state_43787__$1 = (function (){var statearr_43794 = state_43787;
(statearr_43794[(8)] = inst_43773__$1);

return statearr_43794;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43787__$1,(8),jobs,inst_43776);
} else {
if((state_val_43788 === (7))){
var inst_43783 = (state_43787[(2)]);
var state_43787__$1 = state_43787;
var statearr_43795_43902 = state_43787__$1;
(statearr_43795_43902[(2)] = inst_43783);

(statearr_43795_43902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43788 === (8))){
var inst_43773 = (state_43787[(8)]);
var inst_43778 = (state_43787[(2)]);
var state_43787__$1 = (function (){var statearr_43796 = state_43787;
(statearr_43796[(9)] = inst_43778);

return statearr_43796;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43787__$1,(9),results,inst_43773);
} else {
if((state_val_43788 === (9))){
var inst_43780 = (state_43787[(2)]);
var state_43787__$1 = (function (){var statearr_43797 = state_43787;
(statearr_43797[(10)] = inst_43780);

return statearr_43797;
})();
var statearr_43798_43903 = state_43787__$1;
(statearr_43798_43903[(2)] = null);

(statearr_43798_43903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__43534__auto___43897,jobs,results,process,async))
;
return ((function (switch__43444__auto__,c__43534__auto___43897,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____0 = (function (){
var statearr_43799 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__);

(statearr_43799[(1)] = (1));

return statearr_43799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____1 = (function (state_43787){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_43787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e43800){if((e43800 instanceof Object)){
var ex__43448__auto__ = e43800;
var statearr_43801_43904 = state_43787;
(statearr_43801_43904[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43905 = state_43787;
state_43787 = G__43905;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__ = function(state_43787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____1.call(this,state_43787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto___43897,jobs,results,process,async))
})();
var state__43536__auto__ = (function (){var statearr_43802 = f__43535__auto__.call(null);
(statearr_43802[(6)] = c__43534__auto___43897);

return statearr_43802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto___43897,jobs,results,process,async))
);


var c__43534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto__,jobs,results,process,async){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto__,jobs,results,process,async){
return (function (state_43840){
var state_val_43841 = (state_43840[(1)]);
if((state_val_43841 === (7))){
var inst_43836 = (state_43840[(2)]);
var state_43840__$1 = state_43840;
var statearr_43842_43906 = state_43840__$1;
(statearr_43842_43906[(2)] = inst_43836);

(statearr_43842_43906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43841 === (20))){
var state_43840__$1 = state_43840;
var statearr_43843_43907 = state_43840__$1;
(statearr_43843_43907[(2)] = null);

(statearr_43843_43907[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43841 === (1))){
var state_43840__$1 = state_43840;
var statearr_43844_43908 = state_43840__$1;
(statearr_43844_43908[(2)] = null);

(statearr_43844_43908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43841 === (4))){
var inst_43805 = (state_43840[(7)]);
var inst_43805__$1 = (state_43840[(2)]);
var inst_43806 = (inst_43805__$1 == null);
var state_43840__$1 = (function (){var statearr_43845 = state_43840;
(statearr_43845[(7)] = inst_43805__$1);

return statearr_43845;
})();
if(cljs.core.truth_(inst_43806)){
var statearr_43846_43909 = state_43840__$1;
(statearr_43846_43909[(1)] = (5));

} else {
var statearr_43847_43910 = state_43840__$1;
(statearr_43847_43910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43841 === (15))){
var inst_43818 = (state_43840[(8)]);
var state_43840__$1 = state_43840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43840__$1,(18),to,inst_43818);
} else {
if((state_val_43841 === (21))){
var inst_43831 = (state_43840[(2)]);
var state_43840__$1 = state_43840;
var statearr_43848_43911 = state_43840__$1;
(statearr_43848_43911[(2)] = inst_43831);

(statearr_43848_43911[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43841 === (13))){
var inst_43833 = (state_43840[(2)]);
var state_43840__$1 = (function (){var statearr_43849 = state_43840;
(statearr_43849[(9)] = inst_43833);

return statearr_43849;
})();
var statearr_43850_43912 = state_43840__$1;
(statearr_43850_43912[(2)] = null);

(statearr_43850_43912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43841 === (6))){
var inst_43805 = (state_43840[(7)]);
var state_43840__$1 = state_43840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43840__$1,(11),inst_43805);
} else {
if((state_val_43841 === (17))){
var inst_43826 = (state_43840[(2)]);
var state_43840__$1 = state_43840;
if(cljs.core.truth_(inst_43826)){
var statearr_43851_43913 = state_43840__$1;
(statearr_43851_43913[(1)] = (19));

} else {
var statearr_43852_43914 = state_43840__$1;
(statearr_43852_43914[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43841 === (3))){
var inst_43838 = (state_43840[(2)]);
var state_43840__$1 = state_43840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43840__$1,inst_43838);
} else {
if((state_val_43841 === (12))){
var inst_43815 = (state_43840[(10)]);
var state_43840__$1 = state_43840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43840__$1,(14),inst_43815);
} else {
if((state_val_43841 === (2))){
var state_43840__$1 = state_43840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43840__$1,(4),results);
} else {
if((state_val_43841 === (19))){
var state_43840__$1 = state_43840;
var statearr_43853_43915 = state_43840__$1;
(statearr_43853_43915[(2)] = null);

(statearr_43853_43915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43841 === (11))){
var inst_43815 = (state_43840[(2)]);
var state_43840__$1 = (function (){var statearr_43854 = state_43840;
(statearr_43854[(10)] = inst_43815);

return statearr_43854;
})();
var statearr_43855_43916 = state_43840__$1;
(statearr_43855_43916[(2)] = null);

(statearr_43855_43916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43841 === (9))){
var state_43840__$1 = state_43840;
var statearr_43856_43917 = state_43840__$1;
(statearr_43856_43917[(2)] = null);

(statearr_43856_43917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43841 === (5))){
var state_43840__$1 = state_43840;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43857_43918 = state_43840__$1;
(statearr_43857_43918[(1)] = (8));

} else {
var statearr_43858_43919 = state_43840__$1;
(statearr_43858_43919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43841 === (14))){
var inst_43820 = (state_43840[(11)]);
var inst_43818 = (state_43840[(8)]);
var inst_43818__$1 = (state_43840[(2)]);
var inst_43819 = (inst_43818__$1 == null);
var inst_43820__$1 = cljs.core.not.call(null,inst_43819);
var state_43840__$1 = (function (){var statearr_43859 = state_43840;
(statearr_43859[(11)] = inst_43820__$1);

(statearr_43859[(8)] = inst_43818__$1);

return statearr_43859;
})();
if(inst_43820__$1){
var statearr_43860_43920 = state_43840__$1;
(statearr_43860_43920[(1)] = (15));

} else {
var statearr_43861_43921 = state_43840__$1;
(statearr_43861_43921[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43841 === (16))){
var inst_43820 = (state_43840[(11)]);
var state_43840__$1 = state_43840;
var statearr_43862_43922 = state_43840__$1;
(statearr_43862_43922[(2)] = inst_43820);

(statearr_43862_43922[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43841 === (10))){
var inst_43812 = (state_43840[(2)]);
var state_43840__$1 = state_43840;
var statearr_43863_43923 = state_43840__$1;
(statearr_43863_43923[(2)] = inst_43812);

(statearr_43863_43923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43841 === (18))){
var inst_43823 = (state_43840[(2)]);
var state_43840__$1 = state_43840;
var statearr_43864_43924 = state_43840__$1;
(statearr_43864_43924[(2)] = inst_43823);

(statearr_43864_43924[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43841 === (8))){
var inst_43809 = cljs.core.async.close_BANG_.call(null,to);
var state_43840__$1 = state_43840;
var statearr_43865_43925 = state_43840__$1;
(statearr_43865_43925[(2)] = inst_43809);

(statearr_43865_43925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto__,jobs,results,process,async))
;
return ((function (switch__43444__auto__,c__43534__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____0 = (function (){
var statearr_43866 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__);

(statearr_43866[(1)] = (1));

return statearr_43866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____1 = (function (state_43840){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_43840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e43867){if((e43867 instanceof Object)){
var ex__43448__auto__ = e43867;
var statearr_43868_43926 = state_43840;
(statearr_43868_43926[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43927 = state_43840;
state_43840 = G__43927;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__ = function(state_43840){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____1.call(this,state_43840);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43445__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto__,jobs,results,process,async))
})();
var state__43536__auto__ = (function (){var statearr_43869 = f__43535__auto__.call(null);
(statearr_43869[(6)] = c__43534__auto__);

return statearr_43869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto__,jobs,results,process,async))
);

return c__43534__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__43929 = arguments.length;
switch (G__43929) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__43932 = arguments.length;
switch (G__43932) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__43935 = arguments.length;
switch (G__43935) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__43534__auto___43984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto___43984,tc,fc){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto___43984,tc,fc){
return (function (state_43961){
var state_val_43962 = (state_43961[(1)]);
if((state_val_43962 === (7))){
var inst_43957 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
var statearr_43963_43985 = state_43961__$1;
(statearr_43963_43985[(2)] = inst_43957);

(statearr_43963_43985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (1))){
var state_43961__$1 = state_43961;
var statearr_43964_43986 = state_43961__$1;
(statearr_43964_43986[(2)] = null);

(statearr_43964_43986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (4))){
var inst_43938 = (state_43961[(7)]);
var inst_43938__$1 = (state_43961[(2)]);
var inst_43939 = (inst_43938__$1 == null);
var state_43961__$1 = (function (){var statearr_43965 = state_43961;
(statearr_43965[(7)] = inst_43938__$1);

return statearr_43965;
})();
if(cljs.core.truth_(inst_43939)){
var statearr_43966_43987 = state_43961__$1;
(statearr_43966_43987[(1)] = (5));

} else {
var statearr_43967_43988 = state_43961__$1;
(statearr_43967_43988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (13))){
var state_43961__$1 = state_43961;
var statearr_43968_43989 = state_43961__$1;
(statearr_43968_43989[(2)] = null);

(statearr_43968_43989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (6))){
var inst_43938 = (state_43961[(7)]);
var inst_43944 = p.call(null,inst_43938);
var state_43961__$1 = state_43961;
if(cljs.core.truth_(inst_43944)){
var statearr_43969_43990 = state_43961__$1;
(statearr_43969_43990[(1)] = (9));

} else {
var statearr_43970_43991 = state_43961__$1;
(statearr_43970_43991[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (3))){
var inst_43959 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43961__$1,inst_43959);
} else {
if((state_val_43962 === (12))){
var state_43961__$1 = state_43961;
var statearr_43971_43992 = state_43961__$1;
(statearr_43971_43992[(2)] = null);

(statearr_43971_43992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (2))){
var state_43961__$1 = state_43961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43961__$1,(4),ch);
} else {
if((state_val_43962 === (11))){
var inst_43938 = (state_43961[(7)]);
var inst_43948 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43961__$1,(8),inst_43948,inst_43938);
} else {
if((state_val_43962 === (9))){
var state_43961__$1 = state_43961;
var statearr_43972_43993 = state_43961__$1;
(statearr_43972_43993[(2)] = tc);

(statearr_43972_43993[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (5))){
var inst_43941 = cljs.core.async.close_BANG_.call(null,tc);
var inst_43942 = cljs.core.async.close_BANG_.call(null,fc);
var state_43961__$1 = (function (){var statearr_43973 = state_43961;
(statearr_43973[(8)] = inst_43941);

return statearr_43973;
})();
var statearr_43974_43994 = state_43961__$1;
(statearr_43974_43994[(2)] = inst_43942);

(statearr_43974_43994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (14))){
var inst_43955 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
var statearr_43975_43995 = state_43961__$1;
(statearr_43975_43995[(2)] = inst_43955);

(statearr_43975_43995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (10))){
var state_43961__$1 = state_43961;
var statearr_43976_43996 = state_43961__$1;
(statearr_43976_43996[(2)] = fc);

(statearr_43976_43996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43962 === (8))){
var inst_43950 = (state_43961[(2)]);
var state_43961__$1 = state_43961;
if(cljs.core.truth_(inst_43950)){
var statearr_43977_43997 = state_43961__$1;
(statearr_43977_43997[(1)] = (12));

} else {
var statearr_43978_43998 = state_43961__$1;
(statearr_43978_43998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto___43984,tc,fc))
;
return ((function (switch__43444__auto__,c__43534__auto___43984,tc,fc){
return (function() {
var cljs$core$async$state_machine__43445__auto__ = null;
var cljs$core$async$state_machine__43445__auto____0 = (function (){
var statearr_43979 = [null,null,null,null,null,null,null,null,null];
(statearr_43979[(0)] = cljs$core$async$state_machine__43445__auto__);

(statearr_43979[(1)] = (1));

return statearr_43979;
});
var cljs$core$async$state_machine__43445__auto____1 = (function (state_43961){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_43961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e43980){if((e43980 instanceof Object)){
var ex__43448__auto__ = e43980;
var statearr_43981_43999 = state_43961;
(statearr_43981_43999[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44000 = state_43961;
state_43961 = G__44000;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$state_machine__43445__auto__ = function(state_43961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43445__auto____1.call(this,state_43961);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43445__auto____0;
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43445__auto____1;
return cljs$core$async$state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto___43984,tc,fc))
})();
var state__43536__auto__ = (function (){var statearr_43982 = f__43535__auto__.call(null);
(statearr_43982[(6)] = c__43534__auto___43984);

return statearr_43982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto___43984,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto__){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto__){
return (function (state_44021){
var state_val_44022 = (state_44021[(1)]);
if((state_val_44022 === (7))){
var inst_44017 = (state_44021[(2)]);
var state_44021__$1 = state_44021;
var statearr_44023_44041 = state_44021__$1;
(statearr_44023_44041[(2)] = inst_44017);

(statearr_44023_44041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44022 === (1))){
var inst_44001 = init;
var state_44021__$1 = (function (){var statearr_44024 = state_44021;
(statearr_44024[(7)] = inst_44001);

return statearr_44024;
})();
var statearr_44025_44042 = state_44021__$1;
(statearr_44025_44042[(2)] = null);

(statearr_44025_44042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44022 === (4))){
var inst_44004 = (state_44021[(8)]);
var inst_44004__$1 = (state_44021[(2)]);
var inst_44005 = (inst_44004__$1 == null);
var state_44021__$1 = (function (){var statearr_44026 = state_44021;
(statearr_44026[(8)] = inst_44004__$1);

return statearr_44026;
})();
if(cljs.core.truth_(inst_44005)){
var statearr_44027_44043 = state_44021__$1;
(statearr_44027_44043[(1)] = (5));

} else {
var statearr_44028_44044 = state_44021__$1;
(statearr_44028_44044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44022 === (6))){
var inst_44008 = (state_44021[(9)]);
var inst_44004 = (state_44021[(8)]);
var inst_44001 = (state_44021[(7)]);
var inst_44008__$1 = f.call(null,inst_44001,inst_44004);
var inst_44009 = cljs.core.reduced_QMARK_.call(null,inst_44008__$1);
var state_44021__$1 = (function (){var statearr_44029 = state_44021;
(statearr_44029[(9)] = inst_44008__$1);

return statearr_44029;
})();
if(inst_44009){
var statearr_44030_44045 = state_44021__$1;
(statearr_44030_44045[(1)] = (8));

} else {
var statearr_44031_44046 = state_44021__$1;
(statearr_44031_44046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44022 === (3))){
var inst_44019 = (state_44021[(2)]);
var state_44021__$1 = state_44021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44021__$1,inst_44019);
} else {
if((state_val_44022 === (2))){
var state_44021__$1 = state_44021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44021__$1,(4),ch);
} else {
if((state_val_44022 === (9))){
var inst_44008 = (state_44021[(9)]);
var inst_44001 = inst_44008;
var state_44021__$1 = (function (){var statearr_44032 = state_44021;
(statearr_44032[(7)] = inst_44001);

return statearr_44032;
})();
var statearr_44033_44047 = state_44021__$1;
(statearr_44033_44047[(2)] = null);

(statearr_44033_44047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44022 === (5))){
var inst_44001 = (state_44021[(7)]);
var state_44021__$1 = state_44021;
var statearr_44034_44048 = state_44021__$1;
(statearr_44034_44048[(2)] = inst_44001);

(statearr_44034_44048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44022 === (10))){
var inst_44015 = (state_44021[(2)]);
var state_44021__$1 = state_44021;
var statearr_44035_44049 = state_44021__$1;
(statearr_44035_44049[(2)] = inst_44015);

(statearr_44035_44049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44022 === (8))){
var inst_44008 = (state_44021[(9)]);
var inst_44011 = cljs.core.deref.call(null,inst_44008);
var state_44021__$1 = state_44021;
var statearr_44036_44050 = state_44021__$1;
(statearr_44036_44050[(2)] = inst_44011);

(statearr_44036_44050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto__))
;
return ((function (switch__43444__auto__,c__43534__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__43445__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43445__auto____0 = (function (){
var statearr_44037 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44037[(0)] = cljs$core$async$reduce_$_state_machine__43445__auto__);

(statearr_44037[(1)] = (1));

return statearr_44037;
});
var cljs$core$async$reduce_$_state_machine__43445__auto____1 = (function (state_44021){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_44021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e44038){if((e44038 instanceof Object)){
var ex__43448__auto__ = e44038;
var statearr_44039_44051 = state_44021;
(statearr_44039_44051[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44052 = state_44021;
state_44021 = G__44052;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43445__auto__ = function(state_44021){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43445__auto____1.call(this,state_44021);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43445__auto____0;
cljs$core$async$reduce_$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43445__auto____1;
return cljs$core$async$reduce_$_state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto__))
})();
var state__43536__auto__ = (function (){var statearr_44040 = f__43535__auto__.call(null);
(statearr_44040[(6)] = c__43534__auto__);

return statearr_44040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto__))
);

return c__43534__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__43534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto__,f__$1){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto__,f__$1){
return (function (state_44058){
var state_val_44059 = (state_44058[(1)]);
if((state_val_44059 === (1))){
var inst_44053 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44058__$1 = state_44058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44058__$1,(2),inst_44053);
} else {
if((state_val_44059 === (2))){
var inst_44055 = (state_44058[(2)]);
var inst_44056 = f__$1.call(null,inst_44055);
var state_44058__$1 = state_44058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44058__$1,inst_44056);
} else {
return null;
}
}
});})(c__43534__auto__,f__$1))
;
return ((function (switch__43444__auto__,c__43534__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__43445__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43445__auto____0 = (function (){
var statearr_44060 = [null,null,null,null,null,null,null];
(statearr_44060[(0)] = cljs$core$async$transduce_$_state_machine__43445__auto__);

(statearr_44060[(1)] = (1));

return statearr_44060;
});
var cljs$core$async$transduce_$_state_machine__43445__auto____1 = (function (state_44058){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_44058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e44061){if((e44061 instanceof Object)){
var ex__43448__auto__ = e44061;
var statearr_44062_44064 = state_44058;
(statearr_44062_44064[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44065 = state_44058;
state_44058 = G__44065;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43445__auto__ = function(state_44058){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43445__auto____1.call(this,state_44058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43445__auto____0;
cljs$core$async$transduce_$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43445__auto____1;
return cljs$core$async$transduce_$_state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto__,f__$1))
})();
var state__43536__auto__ = (function (){var statearr_44063 = f__43535__auto__.call(null);
(statearr_44063[(6)] = c__43534__auto__);

return statearr_44063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto__,f__$1))
);

return c__43534__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44067 = arguments.length;
switch (G__44067) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto__){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto__){
return (function (state_44092){
var state_val_44093 = (state_44092[(1)]);
if((state_val_44093 === (7))){
var inst_44074 = (state_44092[(2)]);
var state_44092__$1 = state_44092;
var statearr_44094_44115 = state_44092__$1;
(statearr_44094_44115[(2)] = inst_44074);

(statearr_44094_44115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44093 === (1))){
var inst_44068 = cljs.core.seq.call(null,coll);
var inst_44069 = inst_44068;
var state_44092__$1 = (function (){var statearr_44095 = state_44092;
(statearr_44095[(7)] = inst_44069);

return statearr_44095;
})();
var statearr_44096_44116 = state_44092__$1;
(statearr_44096_44116[(2)] = null);

(statearr_44096_44116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44093 === (4))){
var inst_44069 = (state_44092[(7)]);
var inst_44072 = cljs.core.first.call(null,inst_44069);
var state_44092__$1 = state_44092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44092__$1,(7),ch,inst_44072);
} else {
if((state_val_44093 === (13))){
var inst_44086 = (state_44092[(2)]);
var state_44092__$1 = state_44092;
var statearr_44097_44117 = state_44092__$1;
(statearr_44097_44117[(2)] = inst_44086);

(statearr_44097_44117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44093 === (6))){
var inst_44077 = (state_44092[(2)]);
var state_44092__$1 = state_44092;
if(cljs.core.truth_(inst_44077)){
var statearr_44098_44118 = state_44092__$1;
(statearr_44098_44118[(1)] = (8));

} else {
var statearr_44099_44119 = state_44092__$1;
(statearr_44099_44119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44093 === (3))){
var inst_44090 = (state_44092[(2)]);
var state_44092__$1 = state_44092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44092__$1,inst_44090);
} else {
if((state_val_44093 === (12))){
var state_44092__$1 = state_44092;
var statearr_44100_44120 = state_44092__$1;
(statearr_44100_44120[(2)] = null);

(statearr_44100_44120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44093 === (2))){
var inst_44069 = (state_44092[(7)]);
var state_44092__$1 = state_44092;
if(cljs.core.truth_(inst_44069)){
var statearr_44101_44121 = state_44092__$1;
(statearr_44101_44121[(1)] = (4));

} else {
var statearr_44102_44122 = state_44092__$1;
(statearr_44102_44122[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44093 === (11))){
var inst_44083 = cljs.core.async.close_BANG_.call(null,ch);
var state_44092__$1 = state_44092;
var statearr_44103_44123 = state_44092__$1;
(statearr_44103_44123[(2)] = inst_44083);

(statearr_44103_44123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44093 === (9))){
var state_44092__$1 = state_44092;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44104_44124 = state_44092__$1;
(statearr_44104_44124[(1)] = (11));

} else {
var statearr_44105_44125 = state_44092__$1;
(statearr_44105_44125[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44093 === (5))){
var inst_44069 = (state_44092[(7)]);
var state_44092__$1 = state_44092;
var statearr_44106_44126 = state_44092__$1;
(statearr_44106_44126[(2)] = inst_44069);

(statearr_44106_44126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44093 === (10))){
var inst_44088 = (state_44092[(2)]);
var state_44092__$1 = state_44092;
var statearr_44107_44127 = state_44092__$1;
(statearr_44107_44127[(2)] = inst_44088);

(statearr_44107_44127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44093 === (8))){
var inst_44069 = (state_44092[(7)]);
var inst_44079 = cljs.core.next.call(null,inst_44069);
var inst_44069__$1 = inst_44079;
var state_44092__$1 = (function (){var statearr_44108 = state_44092;
(statearr_44108[(7)] = inst_44069__$1);

return statearr_44108;
})();
var statearr_44109_44128 = state_44092__$1;
(statearr_44109_44128[(2)] = null);

(statearr_44109_44128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto__))
;
return ((function (switch__43444__auto__,c__43534__auto__){
return (function() {
var cljs$core$async$state_machine__43445__auto__ = null;
var cljs$core$async$state_machine__43445__auto____0 = (function (){
var statearr_44110 = [null,null,null,null,null,null,null,null];
(statearr_44110[(0)] = cljs$core$async$state_machine__43445__auto__);

(statearr_44110[(1)] = (1));

return statearr_44110;
});
var cljs$core$async$state_machine__43445__auto____1 = (function (state_44092){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_44092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e44111){if((e44111 instanceof Object)){
var ex__43448__auto__ = e44111;
var statearr_44112_44129 = state_44092;
(statearr_44112_44129[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44130 = state_44092;
state_44092 = G__44130;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$state_machine__43445__auto__ = function(state_44092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43445__auto____1.call(this,state_44092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43445__auto____0;
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43445__auto____1;
return cljs$core$async$state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto__))
})();
var state__43536__auto__ = (function (){var statearr_44113 = f__43535__auto__.call(null);
(statearr_44113[(6)] = c__43534__auto__);

return statearr_44113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto__))
);

return c__43534__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async44131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44131 = (function (ch,cs,meta44132){
this.ch = ch;
this.cs = cs;
this.meta44132 = meta44132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44133,meta44132__$1){
var self__ = this;
var _44133__$1 = this;
return (new cljs.core.async.t_cljs$core$async44131(self__.ch,self__.cs,meta44132__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44133){
var self__ = this;
var _44133__$1 = this;
return self__.meta44132;
});})(cs))
;

cljs.core.async.t_cljs$core$async44131.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44131.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44131.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44131.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44131.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44131.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44132","meta44132",1765665081,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44131";

cljs.core.async.t_cljs$core$async44131.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async44131");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44131.
 */
cljs.core.async.__GT_t_cljs$core$async44131 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44131(ch__$1,cs__$1,meta44132){
return (new cljs.core.async.t_cljs$core$async44131(ch__$1,cs__$1,meta44132));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44131(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__43534__auto___44353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto___44353,cs,m,dchan,dctr,done){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto___44353,cs,m,dchan,dctr,done){
return (function (state_44268){
var state_val_44269 = (state_44268[(1)]);
if((state_val_44269 === (7))){
var inst_44264 = (state_44268[(2)]);
var state_44268__$1 = state_44268;
var statearr_44270_44354 = state_44268__$1;
(statearr_44270_44354[(2)] = inst_44264);

(statearr_44270_44354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (20))){
var inst_44167 = (state_44268[(7)]);
var inst_44179 = cljs.core.first.call(null,inst_44167);
var inst_44180 = cljs.core.nth.call(null,inst_44179,(0),null);
var inst_44181 = cljs.core.nth.call(null,inst_44179,(1),null);
var state_44268__$1 = (function (){var statearr_44271 = state_44268;
(statearr_44271[(8)] = inst_44180);

return statearr_44271;
})();
if(cljs.core.truth_(inst_44181)){
var statearr_44272_44355 = state_44268__$1;
(statearr_44272_44355[(1)] = (22));

} else {
var statearr_44273_44356 = state_44268__$1;
(statearr_44273_44356[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (27))){
var inst_44136 = (state_44268[(9)]);
var inst_44216 = (state_44268[(10)]);
var inst_44211 = (state_44268[(11)]);
var inst_44209 = (state_44268[(12)]);
var inst_44216__$1 = cljs.core._nth.call(null,inst_44209,inst_44211);
var inst_44217 = cljs.core.async.put_BANG_.call(null,inst_44216__$1,inst_44136,done);
var state_44268__$1 = (function (){var statearr_44274 = state_44268;
(statearr_44274[(10)] = inst_44216__$1);

return statearr_44274;
})();
if(cljs.core.truth_(inst_44217)){
var statearr_44275_44357 = state_44268__$1;
(statearr_44275_44357[(1)] = (30));

} else {
var statearr_44276_44358 = state_44268__$1;
(statearr_44276_44358[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (1))){
var state_44268__$1 = state_44268;
var statearr_44277_44359 = state_44268__$1;
(statearr_44277_44359[(2)] = null);

(statearr_44277_44359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (24))){
var inst_44167 = (state_44268[(7)]);
var inst_44186 = (state_44268[(2)]);
var inst_44187 = cljs.core.next.call(null,inst_44167);
var inst_44145 = inst_44187;
var inst_44146 = null;
var inst_44147 = (0);
var inst_44148 = (0);
var state_44268__$1 = (function (){var statearr_44278 = state_44268;
(statearr_44278[(13)] = inst_44146);

(statearr_44278[(14)] = inst_44148);

(statearr_44278[(15)] = inst_44147);

(statearr_44278[(16)] = inst_44186);

(statearr_44278[(17)] = inst_44145);

return statearr_44278;
})();
var statearr_44279_44360 = state_44268__$1;
(statearr_44279_44360[(2)] = null);

(statearr_44279_44360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (39))){
var state_44268__$1 = state_44268;
var statearr_44283_44361 = state_44268__$1;
(statearr_44283_44361[(2)] = null);

(statearr_44283_44361[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (4))){
var inst_44136 = (state_44268[(9)]);
var inst_44136__$1 = (state_44268[(2)]);
var inst_44137 = (inst_44136__$1 == null);
var state_44268__$1 = (function (){var statearr_44284 = state_44268;
(statearr_44284[(9)] = inst_44136__$1);

return statearr_44284;
})();
if(cljs.core.truth_(inst_44137)){
var statearr_44285_44362 = state_44268__$1;
(statearr_44285_44362[(1)] = (5));

} else {
var statearr_44286_44363 = state_44268__$1;
(statearr_44286_44363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (15))){
var inst_44146 = (state_44268[(13)]);
var inst_44148 = (state_44268[(14)]);
var inst_44147 = (state_44268[(15)]);
var inst_44145 = (state_44268[(17)]);
var inst_44163 = (state_44268[(2)]);
var inst_44164 = (inst_44148 + (1));
var tmp44280 = inst_44146;
var tmp44281 = inst_44147;
var tmp44282 = inst_44145;
var inst_44145__$1 = tmp44282;
var inst_44146__$1 = tmp44280;
var inst_44147__$1 = tmp44281;
var inst_44148__$1 = inst_44164;
var state_44268__$1 = (function (){var statearr_44287 = state_44268;
(statearr_44287[(13)] = inst_44146__$1);

(statearr_44287[(14)] = inst_44148__$1);

(statearr_44287[(15)] = inst_44147__$1);

(statearr_44287[(18)] = inst_44163);

(statearr_44287[(17)] = inst_44145__$1);

return statearr_44287;
})();
var statearr_44288_44364 = state_44268__$1;
(statearr_44288_44364[(2)] = null);

(statearr_44288_44364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (21))){
var inst_44190 = (state_44268[(2)]);
var state_44268__$1 = state_44268;
var statearr_44292_44365 = state_44268__$1;
(statearr_44292_44365[(2)] = inst_44190);

(statearr_44292_44365[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (31))){
var inst_44216 = (state_44268[(10)]);
var inst_44220 = done.call(null,null);
var inst_44221 = cljs.core.async.untap_STAR_.call(null,m,inst_44216);
var state_44268__$1 = (function (){var statearr_44293 = state_44268;
(statearr_44293[(19)] = inst_44220);

return statearr_44293;
})();
var statearr_44294_44366 = state_44268__$1;
(statearr_44294_44366[(2)] = inst_44221);

(statearr_44294_44366[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (32))){
var inst_44208 = (state_44268[(20)]);
var inst_44210 = (state_44268[(21)]);
var inst_44211 = (state_44268[(11)]);
var inst_44209 = (state_44268[(12)]);
var inst_44223 = (state_44268[(2)]);
var inst_44224 = (inst_44211 + (1));
var tmp44289 = inst_44208;
var tmp44290 = inst_44210;
var tmp44291 = inst_44209;
var inst_44208__$1 = tmp44289;
var inst_44209__$1 = tmp44291;
var inst_44210__$1 = tmp44290;
var inst_44211__$1 = inst_44224;
var state_44268__$1 = (function (){var statearr_44295 = state_44268;
(statearr_44295[(20)] = inst_44208__$1);

(statearr_44295[(21)] = inst_44210__$1);

(statearr_44295[(22)] = inst_44223);

(statearr_44295[(11)] = inst_44211__$1);

(statearr_44295[(12)] = inst_44209__$1);

return statearr_44295;
})();
var statearr_44296_44367 = state_44268__$1;
(statearr_44296_44367[(2)] = null);

(statearr_44296_44367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (40))){
var inst_44236 = (state_44268[(23)]);
var inst_44240 = done.call(null,null);
var inst_44241 = cljs.core.async.untap_STAR_.call(null,m,inst_44236);
var state_44268__$1 = (function (){var statearr_44297 = state_44268;
(statearr_44297[(24)] = inst_44240);

return statearr_44297;
})();
var statearr_44298_44368 = state_44268__$1;
(statearr_44298_44368[(2)] = inst_44241);

(statearr_44298_44368[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (33))){
var inst_44227 = (state_44268[(25)]);
var inst_44229 = cljs.core.chunked_seq_QMARK_.call(null,inst_44227);
var state_44268__$1 = state_44268;
if(inst_44229){
var statearr_44299_44369 = state_44268__$1;
(statearr_44299_44369[(1)] = (36));

} else {
var statearr_44300_44370 = state_44268__$1;
(statearr_44300_44370[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (13))){
var inst_44157 = (state_44268[(26)]);
var inst_44160 = cljs.core.async.close_BANG_.call(null,inst_44157);
var state_44268__$1 = state_44268;
var statearr_44301_44371 = state_44268__$1;
(statearr_44301_44371[(2)] = inst_44160);

(statearr_44301_44371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (22))){
var inst_44180 = (state_44268[(8)]);
var inst_44183 = cljs.core.async.close_BANG_.call(null,inst_44180);
var state_44268__$1 = state_44268;
var statearr_44302_44372 = state_44268__$1;
(statearr_44302_44372[(2)] = inst_44183);

(statearr_44302_44372[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (36))){
var inst_44227 = (state_44268[(25)]);
var inst_44231 = cljs.core.chunk_first.call(null,inst_44227);
var inst_44232 = cljs.core.chunk_rest.call(null,inst_44227);
var inst_44233 = cljs.core.count.call(null,inst_44231);
var inst_44208 = inst_44232;
var inst_44209 = inst_44231;
var inst_44210 = inst_44233;
var inst_44211 = (0);
var state_44268__$1 = (function (){var statearr_44303 = state_44268;
(statearr_44303[(20)] = inst_44208);

(statearr_44303[(21)] = inst_44210);

(statearr_44303[(11)] = inst_44211);

(statearr_44303[(12)] = inst_44209);

return statearr_44303;
})();
var statearr_44304_44373 = state_44268__$1;
(statearr_44304_44373[(2)] = null);

(statearr_44304_44373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (41))){
var inst_44227 = (state_44268[(25)]);
var inst_44243 = (state_44268[(2)]);
var inst_44244 = cljs.core.next.call(null,inst_44227);
var inst_44208 = inst_44244;
var inst_44209 = null;
var inst_44210 = (0);
var inst_44211 = (0);
var state_44268__$1 = (function (){var statearr_44305 = state_44268;
(statearr_44305[(20)] = inst_44208);

(statearr_44305[(27)] = inst_44243);

(statearr_44305[(21)] = inst_44210);

(statearr_44305[(11)] = inst_44211);

(statearr_44305[(12)] = inst_44209);

return statearr_44305;
})();
var statearr_44306_44374 = state_44268__$1;
(statearr_44306_44374[(2)] = null);

(statearr_44306_44374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (43))){
var state_44268__$1 = state_44268;
var statearr_44307_44375 = state_44268__$1;
(statearr_44307_44375[(2)] = null);

(statearr_44307_44375[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (29))){
var inst_44252 = (state_44268[(2)]);
var state_44268__$1 = state_44268;
var statearr_44308_44376 = state_44268__$1;
(statearr_44308_44376[(2)] = inst_44252);

(statearr_44308_44376[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (44))){
var inst_44261 = (state_44268[(2)]);
var state_44268__$1 = (function (){var statearr_44309 = state_44268;
(statearr_44309[(28)] = inst_44261);

return statearr_44309;
})();
var statearr_44310_44377 = state_44268__$1;
(statearr_44310_44377[(2)] = null);

(statearr_44310_44377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (6))){
var inst_44200 = (state_44268[(29)]);
var inst_44199 = cljs.core.deref.call(null,cs);
var inst_44200__$1 = cljs.core.keys.call(null,inst_44199);
var inst_44201 = cljs.core.count.call(null,inst_44200__$1);
var inst_44202 = cljs.core.reset_BANG_.call(null,dctr,inst_44201);
var inst_44207 = cljs.core.seq.call(null,inst_44200__$1);
var inst_44208 = inst_44207;
var inst_44209 = null;
var inst_44210 = (0);
var inst_44211 = (0);
var state_44268__$1 = (function (){var statearr_44311 = state_44268;
(statearr_44311[(20)] = inst_44208);

(statearr_44311[(21)] = inst_44210);

(statearr_44311[(29)] = inst_44200__$1);

(statearr_44311[(30)] = inst_44202);

(statearr_44311[(11)] = inst_44211);

(statearr_44311[(12)] = inst_44209);

return statearr_44311;
})();
var statearr_44312_44378 = state_44268__$1;
(statearr_44312_44378[(2)] = null);

(statearr_44312_44378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (28))){
var inst_44208 = (state_44268[(20)]);
var inst_44227 = (state_44268[(25)]);
var inst_44227__$1 = cljs.core.seq.call(null,inst_44208);
var state_44268__$1 = (function (){var statearr_44313 = state_44268;
(statearr_44313[(25)] = inst_44227__$1);

return statearr_44313;
})();
if(inst_44227__$1){
var statearr_44314_44379 = state_44268__$1;
(statearr_44314_44379[(1)] = (33));

} else {
var statearr_44315_44380 = state_44268__$1;
(statearr_44315_44380[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (25))){
var inst_44210 = (state_44268[(21)]);
var inst_44211 = (state_44268[(11)]);
var inst_44213 = (inst_44211 < inst_44210);
var inst_44214 = inst_44213;
var state_44268__$1 = state_44268;
if(cljs.core.truth_(inst_44214)){
var statearr_44316_44381 = state_44268__$1;
(statearr_44316_44381[(1)] = (27));

} else {
var statearr_44317_44382 = state_44268__$1;
(statearr_44317_44382[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (34))){
var state_44268__$1 = state_44268;
var statearr_44318_44383 = state_44268__$1;
(statearr_44318_44383[(2)] = null);

(statearr_44318_44383[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (17))){
var state_44268__$1 = state_44268;
var statearr_44319_44384 = state_44268__$1;
(statearr_44319_44384[(2)] = null);

(statearr_44319_44384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (3))){
var inst_44266 = (state_44268[(2)]);
var state_44268__$1 = state_44268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44268__$1,inst_44266);
} else {
if((state_val_44269 === (12))){
var inst_44195 = (state_44268[(2)]);
var state_44268__$1 = state_44268;
var statearr_44320_44385 = state_44268__$1;
(statearr_44320_44385[(2)] = inst_44195);

(statearr_44320_44385[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (2))){
var state_44268__$1 = state_44268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44268__$1,(4),ch);
} else {
if((state_val_44269 === (23))){
var state_44268__$1 = state_44268;
var statearr_44321_44386 = state_44268__$1;
(statearr_44321_44386[(2)] = null);

(statearr_44321_44386[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (35))){
var inst_44250 = (state_44268[(2)]);
var state_44268__$1 = state_44268;
var statearr_44322_44387 = state_44268__$1;
(statearr_44322_44387[(2)] = inst_44250);

(statearr_44322_44387[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (19))){
var inst_44167 = (state_44268[(7)]);
var inst_44171 = cljs.core.chunk_first.call(null,inst_44167);
var inst_44172 = cljs.core.chunk_rest.call(null,inst_44167);
var inst_44173 = cljs.core.count.call(null,inst_44171);
var inst_44145 = inst_44172;
var inst_44146 = inst_44171;
var inst_44147 = inst_44173;
var inst_44148 = (0);
var state_44268__$1 = (function (){var statearr_44323 = state_44268;
(statearr_44323[(13)] = inst_44146);

(statearr_44323[(14)] = inst_44148);

(statearr_44323[(15)] = inst_44147);

(statearr_44323[(17)] = inst_44145);

return statearr_44323;
})();
var statearr_44324_44388 = state_44268__$1;
(statearr_44324_44388[(2)] = null);

(statearr_44324_44388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (11))){
var inst_44167 = (state_44268[(7)]);
var inst_44145 = (state_44268[(17)]);
var inst_44167__$1 = cljs.core.seq.call(null,inst_44145);
var state_44268__$1 = (function (){var statearr_44325 = state_44268;
(statearr_44325[(7)] = inst_44167__$1);

return statearr_44325;
})();
if(inst_44167__$1){
var statearr_44326_44389 = state_44268__$1;
(statearr_44326_44389[(1)] = (16));

} else {
var statearr_44327_44390 = state_44268__$1;
(statearr_44327_44390[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (9))){
var inst_44197 = (state_44268[(2)]);
var state_44268__$1 = state_44268;
var statearr_44328_44391 = state_44268__$1;
(statearr_44328_44391[(2)] = inst_44197);

(statearr_44328_44391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (5))){
var inst_44143 = cljs.core.deref.call(null,cs);
var inst_44144 = cljs.core.seq.call(null,inst_44143);
var inst_44145 = inst_44144;
var inst_44146 = null;
var inst_44147 = (0);
var inst_44148 = (0);
var state_44268__$1 = (function (){var statearr_44329 = state_44268;
(statearr_44329[(13)] = inst_44146);

(statearr_44329[(14)] = inst_44148);

(statearr_44329[(15)] = inst_44147);

(statearr_44329[(17)] = inst_44145);

return statearr_44329;
})();
var statearr_44330_44392 = state_44268__$1;
(statearr_44330_44392[(2)] = null);

(statearr_44330_44392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (14))){
var state_44268__$1 = state_44268;
var statearr_44331_44393 = state_44268__$1;
(statearr_44331_44393[(2)] = null);

(statearr_44331_44393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (45))){
var inst_44258 = (state_44268[(2)]);
var state_44268__$1 = state_44268;
var statearr_44332_44394 = state_44268__$1;
(statearr_44332_44394[(2)] = inst_44258);

(statearr_44332_44394[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (26))){
var inst_44200 = (state_44268[(29)]);
var inst_44254 = (state_44268[(2)]);
var inst_44255 = cljs.core.seq.call(null,inst_44200);
var state_44268__$1 = (function (){var statearr_44333 = state_44268;
(statearr_44333[(31)] = inst_44254);

return statearr_44333;
})();
if(inst_44255){
var statearr_44334_44395 = state_44268__$1;
(statearr_44334_44395[(1)] = (42));

} else {
var statearr_44335_44396 = state_44268__$1;
(statearr_44335_44396[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (16))){
var inst_44167 = (state_44268[(7)]);
var inst_44169 = cljs.core.chunked_seq_QMARK_.call(null,inst_44167);
var state_44268__$1 = state_44268;
if(inst_44169){
var statearr_44336_44397 = state_44268__$1;
(statearr_44336_44397[(1)] = (19));

} else {
var statearr_44337_44398 = state_44268__$1;
(statearr_44337_44398[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (38))){
var inst_44247 = (state_44268[(2)]);
var state_44268__$1 = state_44268;
var statearr_44338_44399 = state_44268__$1;
(statearr_44338_44399[(2)] = inst_44247);

(statearr_44338_44399[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (30))){
var state_44268__$1 = state_44268;
var statearr_44339_44400 = state_44268__$1;
(statearr_44339_44400[(2)] = null);

(statearr_44339_44400[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (10))){
var inst_44146 = (state_44268[(13)]);
var inst_44148 = (state_44268[(14)]);
var inst_44156 = cljs.core._nth.call(null,inst_44146,inst_44148);
var inst_44157 = cljs.core.nth.call(null,inst_44156,(0),null);
var inst_44158 = cljs.core.nth.call(null,inst_44156,(1),null);
var state_44268__$1 = (function (){var statearr_44340 = state_44268;
(statearr_44340[(26)] = inst_44157);

return statearr_44340;
})();
if(cljs.core.truth_(inst_44158)){
var statearr_44341_44401 = state_44268__$1;
(statearr_44341_44401[(1)] = (13));

} else {
var statearr_44342_44402 = state_44268__$1;
(statearr_44342_44402[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (18))){
var inst_44193 = (state_44268[(2)]);
var state_44268__$1 = state_44268;
var statearr_44343_44403 = state_44268__$1;
(statearr_44343_44403[(2)] = inst_44193);

(statearr_44343_44403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (42))){
var state_44268__$1 = state_44268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44268__$1,(45),dchan);
} else {
if((state_val_44269 === (37))){
var inst_44236 = (state_44268[(23)]);
var inst_44136 = (state_44268[(9)]);
var inst_44227 = (state_44268[(25)]);
var inst_44236__$1 = cljs.core.first.call(null,inst_44227);
var inst_44237 = cljs.core.async.put_BANG_.call(null,inst_44236__$1,inst_44136,done);
var state_44268__$1 = (function (){var statearr_44344 = state_44268;
(statearr_44344[(23)] = inst_44236__$1);

return statearr_44344;
})();
if(cljs.core.truth_(inst_44237)){
var statearr_44345_44404 = state_44268__$1;
(statearr_44345_44404[(1)] = (39));

} else {
var statearr_44346_44405 = state_44268__$1;
(statearr_44346_44405[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (8))){
var inst_44148 = (state_44268[(14)]);
var inst_44147 = (state_44268[(15)]);
var inst_44150 = (inst_44148 < inst_44147);
var inst_44151 = inst_44150;
var state_44268__$1 = state_44268;
if(cljs.core.truth_(inst_44151)){
var statearr_44347_44406 = state_44268__$1;
(statearr_44347_44406[(1)] = (10));

} else {
var statearr_44348_44407 = state_44268__$1;
(statearr_44348_44407[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto___44353,cs,m,dchan,dctr,done))
;
return ((function (switch__43444__auto__,c__43534__auto___44353,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__43445__auto__ = null;
var cljs$core$async$mult_$_state_machine__43445__auto____0 = (function (){
var statearr_44349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44349[(0)] = cljs$core$async$mult_$_state_machine__43445__auto__);

(statearr_44349[(1)] = (1));

return statearr_44349;
});
var cljs$core$async$mult_$_state_machine__43445__auto____1 = (function (state_44268){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_44268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e44350){if((e44350 instanceof Object)){
var ex__43448__auto__ = e44350;
var statearr_44351_44408 = state_44268;
(statearr_44351_44408[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44409 = state_44268;
state_44268 = G__44409;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43445__auto__ = function(state_44268){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43445__auto____1.call(this,state_44268);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43445__auto____0;
cljs$core$async$mult_$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43445__auto____1;
return cljs$core$async$mult_$_state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto___44353,cs,m,dchan,dctr,done))
})();
var state__43536__auto__ = (function (){var statearr_44352 = f__43535__auto__.call(null);
(statearr_44352[(6)] = c__43534__auto___44353);

return statearr_44352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto___44353,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44411 = arguments.length;
switch (G__44411) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44423 = arguments.length;
var i__4500__auto___44424 = (0);
while(true){
if((i__4500__auto___44424 < len__4499__auto___44423)){
args__4502__auto__.push((arguments[i__4500__auto___44424]));

var G__44425 = (i__4500__auto___44424 + (1));
i__4500__auto___44424 = G__44425;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44417){
var map__44418 = p__44417;
var map__44418__$1 = ((((!((map__44418 == null)))?(((((map__44418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44418):map__44418);
var opts = map__44418__$1;
var statearr_44420_44426 = state;
(statearr_44420_44426[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__44418,map__44418__$1,opts){
return (function (val){
var statearr_44421_44427 = state;
(statearr_44421_44427[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__44418,map__44418__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_44422_44428 = state;
(statearr_44422_44428[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44413){
var G__44414 = cljs.core.first.call(null,seq44413);
var seq44413__$1 = cljs.core.next.call(null,seq44413);
var G__44415 = cljs.core.first.call(null,seq44413__$1);
var seq44413__$2 = cljs.core.next.call(null,seq44413__$1);
var G__44416 = cljs.core.first.call(null,seq44413__$2);
var seq44413__$3 = cljs.core.next.call(null,seq44413__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44414,G__44415,G__44416,seq44413__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async44429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44429 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta44430){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta44430 = meta44430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44431,meta44430__$1){
var self__ = this;
var _44431__$1 = this;
return (new cljs.core.async.t_cljs$core$async44429(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta44430__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44431){
var self__ = this;
var _44431__$1 = this;
return self__.meta44430;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44429.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44429.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44429.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44429.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44429.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44429.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44429.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44429.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44429.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta44430","meta44430",2105956969,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44429";

cljs.core.async.t_cljs$core$async44429.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async44429");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44429.
 */
cljs.core.async.__GT_t_cljs$core$async44429 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44429(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44430){
return (new cljs.core.async.t_cljs$core$async44429(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44430));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44429(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43534__auto___44593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto___44593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto___44593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44533){
var state_val_44534 = (state_44533[(1)]);
if((state_val_44534 === (7))){
var inst_44448 = (state_44533[(2)]);
var state_44533__$1 = state_44533;
var statearr_44535_44594 = state_44533__$1;
(statearr_44535_44594[(2)] = inst_44448);

(statearr_44535_44594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (20))){
var inst_44460 = (state_44533[(7)]);
var state_44533__$1 = state_44533;
var statearr_44536_44595 = state_44533__$1;
(statearr_44536_44595[(2)] = inst_44460);

(statearr_44536_44595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (27))){
var state_44533__$1 = state_44533;
var statearr_44537_44596 = state_44533__$1;
(statearr_44537_44596[(2)] = null);

(statearr_44537_44596[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (1))){
var inst_44435 = (state_44533[(8)]);
var inst_44435__$1 = calc_state.call(null);
var inst_44437 = (inst_44435__$1 == null);
var inst_44438 = cljs.core.not.call(null,inst_44437);
var state_44533__$1 = (function (){var statearr_44538 = state_44533;
(statearr_44538[(8)] = inst_44435__$1);

return statearr_44538;
})();
if(inst_44438){
var statearr_44539_44597 = state_44533__$1;
(statearr_44539_44597[(1)] = (2));

} else {
var statearr_44540_44598 = state_44533__$1;
(statearr_44540_44598[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (24))){
var inst_44507 = (state_44533[(9)]);
var inst_44484 = (state_44533[(10)]);
var inst_44493 = (state_44533[(11)]);
var inst_44507__$1 = inst_44484.call(null,inst_44493);
var state_44533__$1 = (function (){var statearr_44541 = state_44533;
(statearr_44541[(9)] = inst_44507__$1);

return statearr_44541;
})();
if(cljs.core.truth_(inst_44507__$1)){
var statearr_44542_44599 = state_44533__$1;
(statearr_44542_44599[(1)] = (29));

} else {
var statearr_44543_44600 = state_44533__$1;
(statearr_44543_44600[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (4))){
var inst_44451 = (state_44533[(2)]);
var state_44533__$1 = state_44533;
if(cljs.core.truth_(inst_44451)){
var statearr_44544_44601 = state_44533__$1;
(statearr_44544_44601[(1)] = (8));

} else {
var statearr_44545_44602 = state_44533__$1;
(statearr_44545_44602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (15))){
var inst_44478 = (state_44533[(2)]);
var state_44533__$1 = state_44533;
if(cljs.core.truth_(inst_44478)){
var statearr_44546_44603 = state_44533__$1;
(statearr_44546_44603[(1)] = (19));

} else {
var statearr_44547_44604 = state_44533__$1;
(statearr_44547_44604[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (21))){
var inst_44483 = (state_44533[(12)]);
var inst_44483__$1 = (state_44533[(2)]);
var inst_44484 = cljs.core.get.call(null,inst_44483__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44485 = cljs.core.get.call(null,inst_44483__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44486 = cljs.core.get.call(null,inst_44483__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44533__$1 = (function (){var statearr_44548 = state_44533;
(statearr_44548[(12)] = inst_44483__$1);

(statearr_44548[(10)] = inst_44484);

(statearr_44548[(13)] = inst_44485);

return statearr_44548;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44533__$1,(22),inst_44486);
} else {
if((state_val_44534 === (31))){
var inst_44515 = (state_44533[(2)]);
var state_44533__$1 = state_44533;
if(cljs.core.truth_(inst_44515)){
var statearr_44549_44605 = state_44533__$1;
(statearr_44549_44605[(1)] = (32));

} else {
var statearr_44550_44606 = state_44533__$1;
(statearr_44550_44606[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (32))){
var inst_44492 = (state_44533[(14)]);
var state_44533__$1 = state_44533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44533__$1,(35),out,inst_44492);
} else {
if((state_val_44534 === (33))){
var inst_44483 = (state_44533[(12)]);
var inst_44460 = inst_44483;
var state_44533__$1 = (function (){var statearr_44551 = state_44533;
(statearr_44551[(7)] = inst_44460);

return statearr_44551;
})();
var statearr_44552_44607 = state_44533__$1;
(statearr_44552_44607[(2)] = null);

(statearr_44552_44607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (13))){
var inst_44460 = (state_44533[(7)]);
var inst_44467 = inst_44460.cljs$lang$protocol_mask$partition0$;
var inst_44468 = (inst_44467 & (64));
var inst_44469 = inst_44460.cljs$core$ISeq$;
var inst_44470 = (cljs.core.PROTOCOL_SENTINEL === inst_44469);
var inst_44471 = ((inst_44468) || (inst_44470));
var state_44533__$1 = state_44533;
if(cljs.core.truth_(inst_44471)){
var statearr_44553_44608 = state_44533__$1;
(statearr_44553_44608[(1)] = (16));

} else {
var statearr_44554_44609 = state_44533__$1;
(statearr_44554_44609[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (22))){
var inst_44493 = (state_44533[(11)]);
var inst_44492 = (state_44533[(14)]);
var inst_44491 = (state_44533[(2)]);
var inst_44492__$1 = cljs.core.nth.call(null,inst_44491,(0),null);
var inst_44493__$1 = cljs.core.nth.call(null,inst_44491,(1),null);
var inst_44494 = (inst_44492__$1 == null);
var inst_44495 = cljs.core._EQ_.call(null,inst_44493__$1,change);
var inst_44496 = ((inst_44494) || (inst_44495));
var state_44533__$1 = (function (){var statearr_44555 = state_44533;
(statearr_44555[(11)] = inst_44493__$1);

(statearr_44555[(14)] = inst_44492__$1);

return statearr_44555;
})();
if(cljs.core.truth_(inst_44496)){
var statearr_44556_44610 = state_44533__$1;
(statearr_44556_44610[(1)] = (23));

} else {
var statearr_44557_44611 = state_44533__$1;
(statearr_44557_44611[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (36))){
var inst_44483 = (state_44533[(12)]);
var inst_44460 = inst_44483;
var state_44533__$1 = (function (){var statearr_44558 = state_44533;
(statearr_44558[(7)] = inst_44460);

return statearr_44558;
})();
var statearr_44559_44612 = state_44533__$1;
(statearr_44559_44612[(2)] = null);

(statearr_44559_44612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (29))){
var inst_44507 = (state_44533[(9)]);
var state_44533__$1 = state_44533;
var statearr_44560_44613 = state_44533__$1;
(statearr_44560_44613[(2)] = inst_44507);

(statearr_44560_44613[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (6))){
var state_44533__$1 = state_44533;
var statearr_44561_44614 = state_44533__$1;
(statearr_44561_44614[(2)] = false);

(statearr_44561_44614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (28))){
var inst_44503 = (state_44533[(2)]);
var inst_44504 = calc_state.call(null);
var inst_44460 = inst_44504;
var state_44533__$1 = (function (){var statearr_44562 = state_44533;
(statearr_44562[(7)] = inst_44460);

(statearr_44562[(15)] = inst_44503);

return statearr_44562;
})();
var statearr_44563_44615 = state_44533__$1;
(statearr_44563_44615[(2)] = null);

(statearr_44563_44615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (25))){
var inst_44529 = (state_44533[(2)]);
var state_44533__$1 = state_44533;
var statearr_44564_44616 = state_44533__$1;
(statearr_44564_44616[(2)] = inst_44529);

(statearr_44564_44616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (34))){
var inst_44527 = (state_44533[(2)]);
var state_44533__$1 = state_44533;
var statearr_44565_44617 = state_44533__$1;
(statearr_44565_44617[(2)] = inst_44527);

(statearr_44565_44617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (17))){
var state_44533__$1 = state_44533;
var statearr_44566_44618 = state_44533__$1;
(statearr_44566_44618[(2)] = false);

(statearr_44566_44618[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (3))){
var state_44533__$1 = state_44533;
var statearr_44567_44619 = state_44533__$1;
(statearr_44567_44619[(2)] = false);

(statearr_44567_44619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (12))){
var inst_44531 = (state_44533[(2)]);
var state_44533__$1 = state_44533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44533__$1,inst_44531);
} else {
if((state_val_44534 === (2))){
var inst_44435 = (state_44533[(8)]);
var inst_44440 = inst_44435.cljs$lang$protocol_mask$partition0$;
var inst_44441 = (inst_44440 & (64));
var inst_44442 = inst_44435.cljs$core$ISeq$;
var inst_44443 = (cljs.core.PROTOCOL_SENTINEL === inst_44442);
var inst_44444 = ((inst_44441) || (inst_44443));
var state_44533__$1 = state_44533;
if(cljs.core.truth_(inst_44444)){
var statearr_44568_44620 = state_44533__$1;
(statearr_44568_44620[(1)] = (5));

} else {
var statearr_44569_44621 = state_44533__$1;
(statearr_44569_44621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (23))){
var inst_44492 = (state_44533[(14)]);
var inst_44498 = (inst_44492 == null);
var state_44533__$1 = state_44533;
if(cljs.core.truth_(inst_44498)){
var statearr_44570_44622 = state_44533__$1;
(statearr_44570_44622[(1)] = (26));

} else {
var statearr_44571_44623 = state_44533__$1;
(statearr_44571_44623[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (35))){
var inst_44518 = (state_44533[(2)]);
var state_44533__$1 = state_44533;
if(cljs.core.truth_(inst_44518)){
var statearr_44572_44624 = state_44533__$1;
(statearr_44572_44624[(1)] = (36));

} else {
var statearr_44573_44625 = state_44533__$1;
(statearr_44573_44625[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (19))){
var inst_44460 = (state_44533[(7)]);
var inst_44480 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44460);
var state_44533__$1 = state_44533;
var statearr_44574_44626 = state_44533__$1;
(statearr_44574_44626[(2)] = inst_44480);

(statearr_44574_44626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (11))){
var inst_44460 = (state_44533[(7)]);
var inst_44464 = (inst_44460 == null);
var inst_44465 = cljs.core.not.call(null,inst_44464);
var state_44533__$1 = state_44533;
if(inst_44465){
var statearr_44575_44627 = state_44533__$1;
(statearr_44575_44627[(1)] = (13));

} else {
var statearr_44576_44628 = state_44533__$1;
(statearr_44576_44628[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (9))){
var inst_44435 = (state_44533[(8)]);
var state_44533__$1 = state_44533;
var statearr_44577_44629 = state_44533__$1;
(statearr_44577_44629[(2)] = inst_44435);

(statearr_44577_44629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (5))){
var state_44533__$1 = state_44533;
var statearr_44578_44630 = state_44533__$1;
(statearr_44578_44630[(2)] = true);

(statearr_44578_44630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (14))){
var state_44533__$1 = state_44533;
var statearr_44579_44631 = state_44533__$1;
(statearr_44579_44631[(2)] = false);

(statearr_44579_44631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (26))){
var inst_44493 = (state_44533[(11)]);
var inst_44500 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44493);
var state_44533__$1 = state_44533;
var statearr_44580_44632 = state_44533__$1;
(statearr_44580_44632[(2)] = inst_44500);

(statearr_44580_44632[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (16))){
var state_44533__$1 = state_44533;
var statearr_44581_44633 = state_44533__$1;
(statearr_44581_44633[(2)] = true);

(statearr_44581_44633[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (38))){
var inst_44523 = (state_44533[(2)]);
var state_44533__$1 = state_44533;
var statearr_44582_44634 = state_44533__$1;
(statearr_44582_44634[(2)] = inst_44523);

(statearr_44582_44634[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (30))){
var inst_44484 = (state_44533[(10)]);
var inst_44485 = (state_44533[(13)]);
var inst_44493 = (state_44533[(11)]);
var inst_44510 = cljs.core.empty_QMARK_.call(null,inst_44484);
var inst_44511 = inst_44485.call(null,inst_44493);
var inst_44512 = cljs.core.not.call(null,inst_44511);
var inst_44513 = ((inst_44510) && (inst_44512));
var state_44533__$1 = state_44533;
var statearr_44583_44635 = state_44533__$1;
(statearr_44583_44635[(2)] = inst_44513);

(statearr_44583_44635[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (10))){
var inst_44435 = (state_44533[(8)]);
var inst_44456 = (state_44533[(2)]);
var inst_44457 = cljs.core.get.call(null,inst_44456,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44458 = cljs.core.get.call(null,inst_44456,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44459 = cljs.core.get.call(null,inst_44456,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44460 = inst_44435;
var state_44533__$1 = (function (){var statearr_44584 = state_44533;
(statearr_44584[(16)] = inst_44459);

(statearr_44584[(7)] = inst_44460);

(statearr_44584[(17)] = inst_44457);

(statearr_44584[(18)] = inst_44458);

return statearr_44584;
})();
var statearr_44585_44636 = state_44533__$1;
(statearr_44585_44636[(2)] = null);

(statearr_44585_44636[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (18))){
var inst_44475 = (state_44533[(2)]);
var state_44533__$1 = state_44533;
var statearr_44586_44637 = state_44533__$1;
(statearr_44586_44637[(2)] = inst_44475);

(statearr_44586_44637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (37))){
var state_44533__$1 = state_44533;
var statearr_44587_44638 = state_44533__$1;
(statearr_44587_44638[(2)] = null);

(statearr_44587_44638[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44534 === (8))){
var inst_44435 = (state_44533[(8)]);
var inst_44453 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44435);
var state_44533__$1 = state_44533;
var statearr_44588_44639 = state_44533__$1;
(statearr_44588_44639[(2)] = inst_44453);

(statearr_44588_44639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto___44593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__43444__auto__,c__43534__auto___44593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__43445__auto__ = null;
var cljs$core$async$mix_$_state_machine__43445__auto____0 = (function (){
var statearr_44589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44589[(0)] = cljs$core$async$mix_$_state_machine__43445__auto__);

(statearr_44589[(1)] = (1));

return statearr_44589;
});
var cljs$core$async$mix_$_state_machine__43445__auto____1 = (function (state_44533){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_44533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e44590){if((e44590 instanceof Object)){
var ex__43448__auto__ = e44590;
var statearr_44591_44640 = state_44533;
(statearr_44591_44640[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44641 = state_44533;
state_44533 = G__44641;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43445__auto__ = function(state_44533){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43445__auto____1.call(this,state_44533);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43445__auto____0;
cljs$core$async$mix_$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43445__auto____1;
return cljs$core$async$mix_$_state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto___44593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__43536__auto__ = (function (){var statearr_44592 = f__43535__auto__.call(null);
(statearr_44592[(6)] = c__43534__auto___44593);

return statearr_44592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto___44593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44643 = arguments.length;
switch (G__44643) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__44647 = arguments.length;
switch (G__44647) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__44645_SHARP_){
if(cljs.core.truth_(p1__44645_SHARP_.call(null,topic))){
return p1__44645_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44645_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async44648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44648 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44649){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44649 = meta44649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44650,meta44649__$1){
var self__ = this;
var _44650__$1 = this;
return (new cljs.core.async.t_cljs$core$async44648(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44649__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44650){
var self__ = this;
var _44650__$1 = this;
return self__.meta44649;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44648.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44648.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44648.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44648.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44648.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44648.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44648.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44648.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44649","meta44649",-1300005458,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44648";

cljs.core.async.t_cljs$core$async44648.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async44648");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44648.
 */
cljs.core.async.__GT_t_cljs$core$async44648 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44648(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44649){
return (new cljs.core.async.t_cljs$core$async44648(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44649));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44648(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43534__auto___44768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto___44768,mults,ensure_mult,p){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto___44768,mults,ensure_mult,p){
return (function (state_44722){
var state_val_44723 = (state_44722[(1)]);
if((state_val_44723 === (7))){
var inst_44718 = (state_44722[(2)]);
var state_44722__$1 = state_44722;
var statearr_44724_44769 = state_44722__$1;
(statearr_44724_44769[(2)] = inst_44718);

(statearr_44724_44769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (20))){
var state_44722__$1 = state_44722;
var statearr_44725_44770 = state_44722__$1;
(statearr_44725_44770[(2)] = null);

(statearr_44725_44770[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (1))){
var state_44722__$1 = state_44722;
var statearr_44726_44771 = state_44722__$1;
(statearr_44726_44771[(2)] = null);

(statearr_44726_44771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (24))){
var inst_44701 = (state_44722[(7)]);
var inst_44710 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44701);
var state_44722__$1 = state_44722;
var statearr_44727_44772 = state_44722__$1;
(statearr_44727_44772[(2)] = inst_44710);

(statearr_44727_44772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (4))){
var inst_44653 = (state_44722[(8)]);
var inst_44653__$1 = (state_44722[(2)]);
var inst_44654 = (inst_44653__$1 == null);
var state_44722__$1 = (function (){var statearr_44728 = state_44722;
(statearr_44728[(8)] = inst_44653__$1);

return statearr_44728;
})();
if(cljs.core.truth_(inst_44654)){
var statearr_44729_44773 = state_44722__$1;
(statearr_44729_44773[(1)] = (5));

} else {
var statearr_44730_44774 = state_44722__$1;
(statearr_44730_44774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (15))){
var inst_44695 = (state_44722[(2)]);
var state_44722__$1 = state_44722;
var statearr_44731_44775 = state_44722__$1;
(statearr_44731_44775[(2)] = inst_44695);

(statearr_44731_44775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (21))){
var inst_44715 = (state_44722[(2)]);
var state_44722__$1 = (function (){var statearr_44732 = state_44722;
(statearr_44732[(9)] = inst_44715);

return statearr_44732;
})();
var statearr_44733_44776 = state_44722__$1;
(statearr_44733_44776[(2)] = null);

(statearr_44733_44776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (13))){
var inst_44677 = (state_44722[(10)]);
var inst_44679 = cljs.core.chunked_seq_QMARK_.call(null,inst_44677);
var state_44722__$1 = state_44722;
if(inst_44679){
var statearr_44734_44777 = state_44722__$1;
(statearr_44734_44777[(1)] = (16));

} else {
var statearr_44735_44778 = state_44722__$1;
(statearr_44735_44778[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (22))){
var inst_44707 = (state_44722[(2)]);
var state_44722__$1 = state_44722;
if(cljs.core.truth_(inst_44707)){
var statearr_44736_44779 = state_44722__$1;
(statearr_44736_44779[(1)] = (23));

} else {
var statearr_44737_44780 = state_44722__$1;
(statearr_44737_44780[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (6))){
var inst_44653 = (state_44722[(8)]);
var inst_44701 = (state_44722[(7)]);
var inst_44703 = (state_44722[(11)]);
var inst_44701__$1 = topic_fn.call(null,inst_44653);
var inst_44702 = cljs.core.deref.call(null,mults);
var inst_44703__$1 = cljs.core.get.call(null,inst_44702,inst_44701__$1);
var state_44722__$1 = (function (){var statearr_44738 = state_44722;
(statearr_44738[(7)] = inst_44701__$1);

(statearr_44738[(11)] = inst_44703__$1);

return statearr_44738;
})();
if(cljs.core.truth_(inst_44703__$1)){
var statearr_44739_44781 = state_44722__$1;
(statearr_44739_44781[(1)] = (19));

} else {
var statearr_44740_44782 = state_44722__$1;
(statearr_44740_44782[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (25))){
var inst_44712 = (state_44722[(2)]);
var state_44722__$1 = state_44722;
var statearr_44741_44783 = state_44722__$1;
(statearr_44741_44783[(2)] = inst_44712);

(statearr_44741_44783[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (17))){
var inst_44677 = (state_44722[(10)]);
var inst_44686 = cljs.core.first.call(null,inst_44677);
var inst_44687 = cljs.core.async.muxch_STAR_.call(null,inst_44686);
var inst_44688 = cljs.core.async.close_BANG_.call(null,inst_44687);
var inst_44689 = cljs.core.next.call(null,inst_44677);
var inst_44663 = inst_44689;
var inst_44664 = null;
var inst_44665 = (0);
var inst_44666 = (0);
var state_44722__$1 = (function (){var statearr_44742 = state_44722;
(statearr_44742[(12)] = inst_44665);

(statearr_44742[(13)] = inst_44664);

(statearr_44742[(14)] = inst_44688);

(statearr_44742[(15)] = inst_44663);

(statearr_44742[(16)] = inst_44666);

return statearr_44742;
})();
var statearr_44743_44784 = state_44722__$1;
(statearr_44743_44784[(2)] = null);

(statearr_44743_44784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (3))){
var inst_44720 = (state_44722[(2)]);
var state_44722__$1 = state_44722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44722__$1,inst_44720);
} else {
if((state_val_44723 === (12))){
var inst_44697 = (state_44722[(2)]);
var state_44722__$1 = state_44722;
var statearr_44744_44785 = state_44722__$1;
(statearr_44744_44785[(2)] = inst_44697);

(statearr_44744_44785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (2))){
var state_44722__$1 = state_44722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44722__$1,(4),ch);
} else {
if((state_val_44723 === (23))){
var state_44722__$1 = state_44722;
var statearr_44745_44786 = state_44722__$1;
(statearr_44745_44786[(2)] = null);

(statearr_44745_44786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (19))){
var inst_44653 = (state_44722[(8)]);
var inst_44703 = (state_44722[(11)]);
var inst_44705 = cljs.core.async.muxch_STAR_.call(null,inst_44703);
var state_44722__$1 = state_44722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44722__$1,(22),inst_44705,inst_44653);
} else {
if((state_val_44723 === (11))){
var inst_44663 = (state_44722[(15)]);
var inst_44677 = (state_44722[(10)]);
var inst_44677__$1 = cljs.core.seq.call(null,inst_44663);
var state_44722__$1 = (function (){var statearr_44746 = state_44722;
(statearr_44746[(10)] = inst_44677__$1);

return statearr_44746;
})();
if(inst_44677__$1){
var statearr_44747_44787 = state_44722__$1;
(statearr_44747_44787[(1)] = (13));

} else {
var statearr_44748_44788 = state_44722__$1;
(statearr_44748_44788[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (9))){
var inst_44699 = (state_44722[(2)]);
var state_44722__$1 = state_44722;
var statearr_44749_44789 = state_44722__$1;
(statearr_44749_44789[(2)] = inst_44699);

(statearr_44749_44789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (5))){
var inst_44660 = cljs.core.deref.call(null,mults);
var inst_44661 = cljs.core.vals.call(null,inst_44660);
var inst_44662 = cljs.core.seq.call(null,inst_44661);
var inst_44663 = inst_44662;
var inst_44664 = null;
var inst_44665 = (0);
var inst_44666 = (0);
var state_44722__$1 = (function (){var statearr_44750 = state_44722;
(statearr_44750[(12)] = inst_44665);

(statearr_44750[(13)] = inst_44664);

(statearr_44750[(15)] = inst_44663);

(statearr_44750[(16)] = inst_44666);

return statearr_44750;
})();
var statearr_44751_44790 = state_44722__$1;
(statearr_44751_44790[(2)] = null);

(statearr_44751_44790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (14))){
var state_44722__$1 = state_44722;
var statearr_44755_44791 = state_44722__$1;
(statearr_44755_44791[(2)] = null);

(statearr_44755_44791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (16))){
var inst_44677 = (state_44722[(10)]);
var inst_44681 = cljs.core.chunk_first.call(null,inst_44677);
var inst_44682 = cljs.core.chunk_rest.call(null,inst_44677);
var inst_44683 = cljs.core.count.call(null,inst_44681);
var inst_44663 = inst_44682;
var inst_44664 = inst_44681;
var inst_44665 = inst_44683;
var inst_44666 = (0);
var state_44722__$1 = (function (){var statearr_44756 = state_44722;
(statearr_44756[(12)] = inst_44665);

(statearr_44756[(13)] = inst_44664);

(statearr_44756[(15)] = inst_44663);

(statearr_44756[(16)] = inst_44666);

return statearr_44756;
})();
var statearr_44757_44792 = state_44722__$1;
(statearr_44757_44792[(2)] = null);

(statearr_44757_44792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (10))){
var inst_44665 = (state_44722[(12)]);
var inst_44664 = (state_44722[(13)]);
var inst_44663 = (state_44722[(15)]);
var inst_44666 = (state_44722[(16)]);
var inst_44671 = cljs.core._nth.call(null,inst_44664,inst_44666);
var inst_44672 = cljs.core.async.muxch_STAR_.call(null,inst_44671);
var inst_44673 = cljs.core.async.close_BANG_.call(null,inst_44672);
var inst_44674 = (inst_44666 + (1));
var tmp44752 = inst_44665;
var tmp44753 = inst_44664;
var tmp44754 = inst_44663;
var inst_44663__$1 = tmp44754;
var inst_44664__$1 = tmp44753;
var inst_44665__$1 = tmp44752;
var inst_44666__$1 = inst_44674;
var state_44722__$1 = (function (){var statearr_44758 = state_44722;
(statearr_44758[(17)] = inst_44673);

(statearr_44758[(12)] = inst_44665__$1);

(statearr_44758[(13)] = inst_44664__$1);

(statearr_44758[(15)] = inst_44663__$1);

(statearr_44758[(16)] = inst_44666__$1);

return statearr_44758;
})();
var statearr_44759_44793 = state_44722__$1;
(statearr_44759_44793[(2)] = null);

(statearr_44759_44793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (18))){
var inst_44692 = (state_44722[(2)]);
var state_44722__$1 = state_44722;
var statearr_44760_44794 = state_44722__$1;
(statearr_44760_44794[(2)] = inst_44692);

(statearr_44760_44794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (8))){
var inst_44665 = (state_44722[(12)]);
var inst_44666 = (state_44722[(16)]);
var inst_44668 = (inst_44666 < inst_44665);
var inst_44669 = inst_44668;
var state_44722__$1 = state_44722;
if(cljs.core.truth_(inst_44669)){
var statearr_44761_44795 = state_44722__$1;
(statearr_44761_44795[(1)] = (10));

} else {
var statearr_44762_44796 = state_44722__$1;
(statearr_44762_44796[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto___44768,mults,ensure_mult,p))
;
return ((function (switch__43444__auto__,c__43534__auto___44768,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__43445__auto__ = null;
var cljs$core$async$state_machine__43445__auto____0 = (function (){
var statearr_44763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44763[(0)] = cljs$core$async$state_machine__43445__auto__);

(statearr_44763[(1)] = (1));

return statearr_44763;
});
var cljs$core$async$state_machine__43445__auto____1 = (function (state_44722){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_44722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e44764){if((e44764 instanceof Object)){
var ex__43448__auto__ = e44764;
var statearr_44765_44797 = state_44722;
(statearr_44765_44797[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44798 = state_44722;
state_44722 = G__44798;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$state_machine__43445__auto__ = function(state_44722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43445__auto____1.call(this,state_44722);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43445__auto____0;
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43445__auto____1;
return cljs$core$async$state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto___44768,mults,ensure_mult,p))
})();
var state__43536__auto__ = (function (){var statearr_44766 = f__43535__auto__.call(null);
(statearr_44766[(6)] = c__43534__auto___44768);

return statearr_44766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto___44768,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__44800 = arguments.length;
switch (G__44800) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__44803 = arguments.length;
switch (G__44803) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__44806 = arguments.length;
switch (G__44806) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__43534__auto___44873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto___44873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto___44873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_44845){
var state_val_44846 = (state_44845[(1)]);
if((state_val_44846 === (7))){
var state_44845__$1 = state_44845;
var statearr_44847_44874 = state_44845__$1;
(statearr_44847_44874[(2)] = null);

(statearr_44847_44874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (1))){
var state_44845__$1 = state_44845;
var statearr_44848_44875 = state_44845__$1;
(statearr_44848_44875[(2)] = null);

(statearr_44848_44875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (4))){
var inst_44809 = (state_44845[(7)]);
var inst_44811 = (inst_44809 < cnt);
var state_44845__$1 = state_44845;
if(cljs.core.truth_(inst_44811)){
var statearr_44849_44876 = state_44845__$1;
(statearr_44849_44876[(1)] = (6));

} else {
var statearr_44850_44877 = state_44845__$1;
(statearr_44850_44877[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (15))){
var inst_44841 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
var statearr_44851_44878 = state_44845__$1;
(statearr_44851_44878[(2)] = inst_44841);

(statearr_44851_44878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (13))){
var inst_44834 = cljs.core.async.close_BANG_.call(null,out);
var state_44845__$1 = state_44845;
var statearr_44852_44879 = state_44845__$1;
(statearr_44852_44879[(2)] = inst_44834);

(statearr_44852_44879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (6))){
var state_44845__$1 = state_44845;
var statearr_44853_44880 = state_44845__$1;
(statearr_44853_44880[(2)] = null);

(statearr_44853_44880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (3))){
var inst_44843 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44845__$1,inst_44843);
} else {
if((state_val_44846 === (12))){
var inst_44831 = (state_44845[(8)]);
var inst_44831__$1 = (state_44845[(2)]);
var inst_44832 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_44831__$1);
var state_44845__$1 = (function (){var statearr_44854 = state_44845;
(statearr_44854[(8)] = inst_44831__$1);

return statearr_44854;
})();
if(cljs.core.truth_(inst_44832)){
var statearr_44855_44881 = state_44845__$1;
(statearr_44855_44881[(1)] = (13));

} else {
var statearr_44856_44882 = state_44845__$1;
(statearr_44856_44882[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (2))){
var inst_44808 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_44809 = (0);
var state_44845__$1 = (function (){var statearr_44857 = state_44845;
(statearr_44857[(9)] = inst_44808);

(statearr_44857[(7)] = inst_44809);

return statearr_44857;
})();
var statearr_44858_44883 = state_44845__$1;
(statearr_44858_44883[(2)] = null);

(statearr_44858_44883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (11))){
var inst_44809 = (state_44845[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44845,(10),Object,null,(9));
var inst_44818 = chs__$1.call(null,inst_44809);
var inst_44819 = done.call(null,inst_44809);
var inst_44820 = cljs.core.async.take_BANG_.call(null,inst_44818,inst_44819);
var state_44845__$1 = state_44845;
var statearr_44859_44884 = state_44845__$1;
(statearr_44859_44884[(2)] = inst_44820);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44845__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (9))){
var inst_44809 = (state_44845[(7)]);
var inst_44822 = (state_44845[(2)]);
var inst_44823 = (inst_44809 + (1));
var inst_44809__$1 = inst_44823;
var state_44845__$1 = (function (){var statearr_44860 = state_44845;
(statearr_44860[(10)] = inst_44822);

(statearr_44860[(7)] = inst_44809__$1);

return statearr_44860;
})();
var statearr_44861_44885 = state_44845__$1;
(statearr_44861_44885[(2)] = null);

(statearr_44861_44885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (5))){
var inst_44829 = (state_44845[(2)]);
var state_44845__$1 = (function (){var statearr_44862 = state_44845;
(statearr_44862[(11)] = inst_44829);

return statearr_44862;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44845__$1,(12),dchan);
} else {
if((state_val_44846 === (14))){
var inst_44831 = (state_44845[(8)]);
var inst_44836 = cljs.core.apply.call(null,f,inst_44831);
var state_44845__$1 = state_44845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44845__$1,(16),out,inst_44836);
} else {
if((state_val_44846 === (16))){
var inst_44838 = (state_44845[(2)]);
var state_44845__$1 = (function (){var statearr_44863 = state_44845;
(statearr_44863[(12)] = inst_44838);

return statearr_44863;
})();
var statearr_44864_44886 = state_44845__$1;
(statearr_44864_44886[(2)] = null);

(statearr_44864_44886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (10))){
var inst_44813 = (state_44845[(2)]);
var inst_44814 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_44845__$1 = (function (){var statearr_44865 = state_44845;
(statearr_44865[(13)] = inst_44813);

return statearr_44865;
})();
var statearr_44866_44887 = state_44845__$1;
(statearr_44866_44887[(2)] = inst_44814);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44845__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (8))){
var inst_44827 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
var statearr_44867_44888 = state_44845__$1;
(statearr_44867_44888[(2)] = inst_44827);

(statearr_44867_44888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto___44873,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__43444__auto__,c__43534__auto___44873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__43445__auto__ = null;
var cljs$core$async$state_machine__43445__auto____0 = (function (){
var statearr_44868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44868[(0)] = cljs$core$async$state_machine__43445__auto__);

(statearr_44868[(1)] = (1));

return statearr_44868;
});
var cljs$core$async$state_machine__43445__auto____1 = (function (state_44845){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_44845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e44869){if((e44869 instanceof Object)){
var ex__43448__auto__ = e44869;
var statearr_44870_44889 = state_44845;
(statearr_44870_44889[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44890 = state_44845;
state_44845 = G__44890;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$state_machine__43445__auto__ = function(state_44845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43445__auto____1.call(this,state_44845);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43445__auto____0;
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43445__auto____1;
return cljs$core$async$state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto___44873,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__43536__auto__ = (function (){var statearr_44871 = f__43535__auto__.call(null);
(statearr_44871[(6)] = c__43534__auto___44873);

return statearr_44871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto___44873,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__44893 = arguments.length;
switch (G__44893) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43534__auto___44947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto___44947,out){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto___44947,out){
return (function (state_44925){
var state_val_44926 = (state_44925[(1)]);
if((state_val_44926 === (7))){
var inst_44905 = (state_44925[(7)]);
var inst_44904 = (state_44925[(8)]);
var inst_44904__$1 = (state_44925[(2)]);
var inst_44905__$1 = cljs.core.nth.call(null,inst_44904__$1,(0),null);
var inst_44906 = cljs.core.nth.call(null,inst_44904__$1,(1),null);
var inst_44907 = (inst_44905__$1 == null);
var state_44925__$1 = (function (){var statearr_44927 = state_44925;
(statearr_44927[(7)] = inst_44905__$1);

(statearr_44927[(8)] = inst_44904__$1);

(statearr_44927[(9)] = inst_44906);

return statearr_44927;
})();
if(cljs.core.truth_(inst_44907)){
var statearr_44928_44948 = state_44925__$1;
(statearr_44928_44948[(1)] = (8));

} else {
var statearr_44929_44949 = state_44925__$1;
(statearr_44929_44949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44926 === (1))){
var inst_44894 = cljs.core.vec.call(null,chs);
var inst_44895 = inst_44894;
var state_44925__$1 = (function (){var statearr_44930 = state_44925;
(statearr_44930[(10)] = inst_44895);

return statearr_44930;
})();
var statearr_44931_44950 = state_44925__$1;
(statearr_44931_44950[(2)] = null);

(statearr_44931_44950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44926 === (4))){
var inst_44895 = (state_44925[(10)]);
var state_44925__$1 = state_44925;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44925__$1,(7),inst_44895);
} else {
if((state_val_44926 === (6))){
var inst_44921 = (state_44925[(2)]);
var state_44925__$1 = state_44925;
var statearr_44932_44951 = state_44925__$1;
(statearr_44932_44951[(2)] = inst_44921);

(statearr_44932_44951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44926 === (3))){
var inst_44923 = (state_44925[(2)]);
var state_44925__$1 = state_44925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44925__$1,inst_44923);
} else {
if((state_val_44926 === (2))){
var inst_44895 = (state_44925[(10)]);
var inst_44897 = cljs.core.count.call(null,inst_44895);
var inst_44898 = (inst_44897 > (0));
var state_44925__$1 = state_44925;
if(cljs.core.truth_(inst_44898)){
var statearr_44934_44952 = state_44925__$1;
(statearr_44934_44952[(1)] = (4));

} else {
var statearr_44935_44953 = state_44925__$1;
(statearr_44935_44953[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44926 === (11))){
var inst_44895 = (state_44925[(10)]);
var inst_44914 = (state_44925[(2)]);
var tmp44933 = inst_44895;
var inst_44895__$1 = tmp44933;
var state_44925__$1 = (function (){var statearr_44936 = state_44925;
(statearr_44936[(10)] = inst_44895__$1);

(statearr_44936[(11)] = inst_44914);

return statearr_44936;
})();
var statearr_44937_44954 = state_44925__$1;
(statearr_44937_44954[(2)] = null);

(statearr_44937_44954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44926 === (9))){
var inst_44905 = (state_44925[(7)]);
var state_44925__$1 = state_44925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44925__$1,(11),out,inst_44905);
} else {
if((state_val_44926 === (5))){
var inst_44919 = cljs.core.async.close_BANG_.call(null,out);
var state_44925__$1 = state_44925;
var statearr_44938_44955 = state_44925__$1;
(statearr_44938_44955[(2)] = inst_44919);

(statearr_44938_44955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44926 === (10))){
var inst_44917 = (state_44925[(2)]);
var state_44925__$1 = state_44925;
var statearr_44939_44956 = state_44925__$1;
(statearr_44939_44956[(2)] = inst_44917);

(statearr_44939_44956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44926 === (8))){
var inst_44905 = (state_44925[(7)]);
var inst_44895 = (state_44925[(10)]);
var inst_44904 = (state_44925[(8)]);
var inst_44906 = (state_44925[(9)]);
var inst_44909 = (function (){var cs = inst_44895;
var vec__44900 = inst_44904;
var v = inst_44905;
var c = inst_44906;
return ((function (cs,vec__44900,v,c,inst_44905,inst_44895,inst_44904,inst_44906,state_val_44926,c__43534__auto___44947,out){
return (function (p1__44891_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__44891_SHARP_);
});
;})(cs,vec__44900,v,c,inst_44905,inst_44895,inst_44904,inst_44906,state_val_44926,c__43534__auto___44947,out))
})();
var inst_44910 = cljs.core.filterv.call(null,inst_44909,inst_44895);
var inst_44895__$1 = inst_44910;
var state_44925__$1 = (function (){var statearr_44940 = state_44925;
(statearr_44940[(10)] = inst_44895__$1);

return statearr_44940;
})();
var statearr_44941_44957 = state_44925__$1;
(statearr_44941_44957[(2)] = null);

(statearr_44941_44957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto___44947,out))
;
return ((function (switch__43444__auto__,c__43534__auto___44947,out){
return (function() {
var cljs$core$async$state_machine__43445__auto__ = null;
var cljs$core$async$state_machine__43445__auto____0 = (function (){
var statearr_44942 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44942[(0)] = cljs$core$async$state_machine__43445__auto__);

(statearr_44942[(1)] = (1));

return statearr_44942;
});
var cljs$core$async$state_machine__43445__auto____1 = (function (state_44925){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_44925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e44943){if((e44943 instanceof Object)){
var ex__43448__auto__ = e44943;
var statearr_44944_44958 = state_44925;
(statearr_44944_44958[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44959 = state_44925;
state_44925 = G__44959;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$state_machine__43445__auto__ = function(state_44925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43445__auto____1.call(this,state_44925);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43445__auto____0;
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43445__auto____1;
return cljs$core$async$state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto___44947,out))
})();
var state__43536__auto__ = (function (){var statearr_44945 = f__43535__auto__.call(null);
(statearr_44945[(6)] = c__43534__auto___44947);

return statearr_44945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto___44947,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__44961 = arguments.length;
switch (G__44961) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43534__auto___45006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto___45006,out){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto___45006,out){
return (function (state_44985){
var state_val_44986 = (state_44985[(1)]);
if((state_val_44986 === (7))){
var inst_44967 = (state_44985[(7)]);
var inst_44967__$1 = (state_44985[(2)]);
var inst_44968 = (inst_44967__$1 == null);
var inst_44969 = cljs.core.not.call(null,inst_44968);
var state_44985__$1 = (function (){var statearr_44987 = state_44985;
(statearr_44987[(7)] = inst_44967__$1);

return statearr_44987;
})();
if(inst_44969){
var statearr_44988_45007 = state_44985__$1;
(statearr_44988_45007[(1)] = (8));

} else {
var statearr_44989_45008 = state_44985__$1;
(statearr_44989_45008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44986 === (1))){
var inst_44962 = (0);
var state_44985__$1 = (function (){var statearr_44990 = state_44985;
(statearr_44990[(8)] = inst_44962);

return statearr_44990;
})();
var statearr_44991_45009 = state_44985__$1;
(statearr_44991_45009[(2)] = null);

(statearr_44991_45009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44986 === (4))){
var state_44985__$1 = state_44985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44985__$1,(7),ch);
} else {
if((state_val_44986 === (6))){
var inst_44980 = (state_44985[(2)]);
var state_44985__$1 = state_44985;
var statearr_44992_45010 = state_44985__$1;
(statearr_44992_45010[(2)] = inst_44980);

(statearr_44992_45010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44986 === (3))){
var inst_44982 = (state_44985[(2)]);
var inst_44983 = cljs.core.async.close_BANG_.call(null,out);
var state_44985__$1 = (function (){var statearr_44993 = state_44985;
(statearr_44993[(9)] = inst_44982);

return statearr_44993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44985__$1,inst_44983);
} else {
if((state_val_44986 === (2))){
var inst_44962 = (state_44985[(8)]);
var inst_44964 = (inst_44962 < n);
var state_44985__$1 = state_44985;
if(cljs.core.truth_(inst_44964)){
var statearr_44994_45011 = state_44985__$1;
(statearr_44994_45011[(1)] = (4));

} else {
var statearr_44995_45012 = state_44985__$1;
(statearr_44995_45012[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44986 === (11))){
var inst_44962 = (state_44985[(8)]);
var inst_44972 = (state_44985[(2)]);
var inst_44973 = (inst_44962 + (1));
var inst_44962__$1 = inst_44973;
var state_44985__$1 = (function (){var statearr_44996 = state_44985;
(statearr_44996[(8)] = inst_44962__$1);

(statearr_44996[(10)] = inst_44972);

return statearr_44996;
})();
var statearr_44997_45013 = state_44985__$1;
(statearr_44997_45013[(2)] = null);

(statearr_44997_45013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44986 === (9))){
var state_44985__$1 = state_44985;
var statearr_44998_45014 = state_44985__$1;
(statearr_44998_45014[(2)] = null);

(statearr_44998_45014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44986 === (5))){
var state_44985__$1 = state_44985;
var statearr_44999_45015 = state_44985__$1;
(statearr_44999_45015[(2)] = null);

(statearr_44999_45015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44986 === (10))){
var inst_44977 = (state_44985[(2)]);
var state_44985__$1 = state_44985;
var statearr_45000_45016 = state_44985__$1;
(statearr_45000_45016[(2)] = inst_44977);

(statearr_45000_45016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44986 === (8))){
var inst_44967 = (state_44985[(7)]);
var state_44985__$1 = state_44985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44985__$1,(11),out,inst_44967);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto___45006,out))
;
return ((function (switch__43444__auto__,c__43534__auto___45006,out){
return (function() {
var cljs$core$async$state_machine__43445__auto__ = null;
var cljs$core$async$state_machine__43445__auto____0 = (function (){
var statearr_45001 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45001[(0)] = cljs$core$async$state_machine__43445__auto__);

(statearr_45001[(1)] = (1));

return statearr_45001;
});
var cljs$core$async$state_machine__43445__auto____1 = (function (state_44985){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_44985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e45002){if((e45002 instanceof Object)){
var ex__43448__auto__ = e45002;
var statearr_45003_45017 = state_44985;
(statearr_45003_45017[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45018 = state_44985;
state_44985 = G__45018;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$state_machine__43445__auto__ = function(state_44985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43445__auto____1.call(this,state_44985);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43445__auto____0;
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43445__auto____1;
return cljs$core$async$state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto___45006,out))
})();
var state__43536__auto__ = (function (){var statearr_45004 = f__43535__auto__.call(null);
(statearr_45004[(6)] = c__43534__auto___45006);

return statearr_45004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto___45006,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45020 = (function (f,ch,meta45021){
this.f = f;
this.ch = ch;
this.meta45021 = meta45021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45022,meta45021__$1){
var self__ = this;
var _45022__$1 = this;
return (new cljs.core.async.t_cljs$core$async45020(self__.f,self__.ch,meta45021__$1));
});

cljs.core.async.t_cljs$core$async45020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45022){
var self__ = this;
var _45022__$1 = this;
return self__.meta45021;
});

cljs.core.async.t_cljs$core$async45020.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45020.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45020.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45020.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45020.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async45023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45023 = (function (f,ch,meta45021,_,fn1,meta45024){
this.f = f;
this.ch = ch;
this.meta45021 = meta45021;
this._ = _;
this.fn1 = fn1;
this.meta45024 = meta45024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45025,meta45024__$1){
var self__ = this;
var _45025__$1 = this;
return (new cljs.core.async.t_cljs$core$async45023(self__.f,self__.ch,self__.meta45021,self__._,self__.fn1,meta45024__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45025){
var self__ = this;
var _45025__$1 = this;
return self__.meta45024;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45023.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45019_SHARP_){
return f1.call(null,(((p1__45019_SHARP_ == null))?null:self__.f.call(null,p1__45019_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45023.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45021","meta45021",-1285687660,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45020","cljs.core.async/t_cljs$core$async45020",340966360,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45024","meta45024",-241422739,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45023";

cljs.core.async.t_cljs$core$async45023.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async45023");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45023.
 */
cljs.core.async.__GT_t_cljs$core$async45023 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45023(f__$1,ch__$1,meta45021__$1,___$2,fn1__$1,meta45024){
return (new cljs.core.async.t_cljs$core$async45023(f__$1,ch__$1,meta45021__$1,___$2,fn1__$1,meta45024));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45023(self__.f,self__.ch,self__.meta45021,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async45020.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45020.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45021","meta45021",-1285687660,null)], null);
});

cljs.core.async.t_cljs$core$async45020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45020";

cljs.core.async.t_cljs$core$async45020.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async45020");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45020.
 */
cljs.core.async.__GT_t_cljs$core$async45020 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45020(f__$1,ch__$1,meta45021){
return (new cljs.core.async.t_cljs$core$async45020(f__$1,ch__$1,meta45021));
});

}

return (new cljs.core.async.t_cljs$core$async45020(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45026 = (function (f,ch,meta45027){
this.f = f;
this.ch = ch;
this.meta45027 = meta45027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45028,meta45027__$1){
var self__ = this;
var _45028__$1 = this;
return (new cljs.core.async.t_cljs$core$async45026(self__.f,self__.ch,meta45027__$1));
});

cljs.core.async.t_cljs$core$async45026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45028){
var self__ = this;
var _45028__$1 = this;
return self__.meta45027;
});

cljs.core.async.t_cljs$core$async45026.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45026.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45026.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45026.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45026.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45026.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45027","meta45027",1379627654,null)], null);
});

cljs.core.async.t_cljs$core$async45026.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45026";

cljs.core.async.t_cljs$core$async45026.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async45026");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45026.
 */
cljs.core.async.__GT_t_cljs$core$async45026 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45026(f__$1,ch__$1,meta45027){
return (new cljs.core.async.t_cljs$core$async45026(f__$1,ch__$1,meta45027));
});

}

return (new cljs.core.async.t_cljs$core$async45026(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async45029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45029 = (function (p,ch,meta45030){
this.p = p;
this.ch = ch;
this.meta45030 = meta45030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45031,meta45030__$1){
var self__ = this;
var _45031__$1 = this;
return (new cljs.core.async.t_cljs$core$async45029(self__.p,self__.ch,meta45030__$1));
});

cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45031){
var self__ = this;
var _45031__$1 = this;
return self__.meta45030;
});

cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45029.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45030","meta45030",-130080934,null)], null);
});

cljs.core.async.t_cljs$core$async45029.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45029";

cljs.core.async.t_cljs$core$async45029.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async45029");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45029.
 */
cljs.core.async.__GT_t_cljs$core$async45029 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45029(p__$1,ch__$1,meta45030){
return (new cljs.core.async.t_cljs$core$async45029(p__$1,ch__$1,meta45030));
});

}

return (new cljs.core.async.t_cljs$core$async45029(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45033 = arguments.length;
switch (G__45033) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43534__auto___45073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto___45073,out){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto___45073,out){
return (function (state_45054){
var state_val_45055 = (state_45054[(1)]);
if((state_val_45055 === (7))){
var inst_45050 = (state_45054[(2)]);
var state_45054__$1 = state_45054;
var statearr_45056_45074 = state_45054__$1;
(statearr_45056_45074[(2)] = inst_45050);

(statearr_45056_45074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45055 === (1))){
var state_45054__$1 = state_45054;
var statearr_45057_45075 = state_45054__$1;
(statearr_45057_45075[(2)] = null);

(statearr_45057_45075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45055 === (4))){
var inst_45036 = (state_45054[(7)]);
var inst_45036__$1 = (state_45054[(2)]);
var inst_45037 = (inst_45036__$1 == null);
var state_45054__$1 = (function (){var statearr_45058 = state_45054;
(statearr_45058[(7)] = inst_45036__$1);

return statearr_45058;
})();
if(cljs.core.truth_(inst_45037)){
var statearr_45059_45076 = state_45054__$1;
(statearr_45059_45076[(1)] = (5));

} else {
var statearr_45060_45077 = state_45054__$1;
(statearr_45060_45077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45055 === (6))){
var inst_45036 = (state_45054[(7)]);
var inst_45041 = p.call(null,inst_45036);
var state_45054__$1 = state_45054;
if(cljs.core.truth_(inst_45041)){
var statearr_45061_45078 = state_45054__$1;
(statearr_45061_45078[(1)] = (8));

} else {
var statearr_45062_45079 = state_45054__$1;
(statearr_45062_45079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45055 === (3))){
var inst_45052 = (state_45054[(2)]);
var state_45054__$1 = state_45054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45054__$1,inst_45052);
} else {
if((state_val_45055 === (2))){
var state_45054__$1 = state_45054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45054__$1,(4),ch);
} else {
if((state_val_45055 === (11))){
var inst_45044 = (state_45054[(2)]);
var state_45054__$1 = state_45054;
var statearr_45063_45080 = state_45054__$1;
(statearr_45063_45080[(2)] = inst_45044);

(statearr_45063_45080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45055 === (9))){
var state_45054__$1 = state_45054;
var statearr_45064_45081 = state_45054__$1;
(statearr_45064_45081[(2)] = null);

(statearr_45064_45081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45055 === (5))){
var inst_45039 = cljs.core.async.close_BANG_.call(null,out);
var state_45054__$1 = state_45054;
var statearr_45065_45082 = state_45054__$1;
(statearr_45065_45082[(2)] = inst_45039);

(statearr_45065_45082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45055 === (10))){
var inst_45047 = (state_45054[(2)]);
var state_45054__$1 = (function (){var statearr_45066 = state_45054;
(statearr_45066[(8)] = inst_45047);

return statearr_45066;
})();
var statearr_45067_45083 = state_45054__$1;
(statearr_45067_45083[(2)] = null);

(statearr_45067_45083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45055 === (8))){
var inst_45036 = (state_45054[(7)]);
var state_45054__$1 = state_45054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45054__$1,(11),out,inst_45036);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto___45073,out))
;
return ((function (switch__43444__auto__,c__43534__auto___45073,out){
return (function() {
var cljs$core$async$state_machine__43445__auto__ = null;
var cljs$core$async$state_machine__43445__auto____0 = (function (){
var statearr_45068 = [null,null,null,null,null,null,null,null,null];
(statearr_45068[(0)] = cljs$core$async$state_machine__43445__auto__);

(statearr_45068[(1)] = (1));

return statearr_45068;
});
var cljs$core$async$state_machine__43445__auto____1 = (function (state_45054){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_45054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e45069){if((e45069 instanceof Object)){
var ex__43448__auto__ = e45069;
var statearr_45070_45084 = state_45054;
(statearr_45070_45084[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45085 = state_45054;
state_45054 = G__45085;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$state_machine__43445__auto__ = function(state_45054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43445__auto____1.call(this,state_45054);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43445__auto____0;
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43445__auto____1;
return cljs$core$async$state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto___45073,out))
})();
var state__43536__auto__ = (function (){var statearr_45071 = f__43535__auto__.call(null);
(statearr_45071[(6)] = c__43534__auto___45073);

return statearr_45071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto___45073,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45087 = arguments.length;
switch (G__45087) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto__){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto__){
return (function (state_45150){
var state_val_45151 = (state_45150[(1)]);
if((state_val_45151 === (7))){
var inst_45146 = (state_45150[(2)]);
var state_45150__$1 = state_45150;
var statearr_45152_45190 = state_45150__$1;
(statearr_45152_45190[(2)] = inst_45146);

(statearr_45152_45190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (20))){
var inst_45116 = (state_45150[(7)]);
var inst_45127 = (state_45150[(2)]);
var inst_45128 = cljs.core.next.call(null,inst_45116);
var inst_45102 = inst_45128;
var inst_45103 = null;
var inst_45104 = (0);
var inst_45105 = (0);
var state_45150__$1 = (function (){var statearr_45153 = state_45150;
(statearr_45153[(8)] = inst_45103);

(statearr_45153[(9)] = inst_45127);

(statearr_45153[(10)] = inst_45104);

(statearr_45153[(11)] = inst_45105);

(statearr_45153[(12)] = inst_45102);

return statearr_45153;
})();
var statearr_45154_45191 = state_45150__$1;
(statearr_45154_45191[(2)] = null);

(statearr_45154_45191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (1))){
var state_45150__$1 = state_45150;
var statearr_45155_45192 = state_45150__$1;
(statearr_45155_45192[(2)] = null);

(statearr_45155_45192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (4))){
var inst_45091 = (state_45150[(13)]);
var inst_45091__$1 = (state_45150[(2)]);
var inst_45092 = (inst_45091__$1 == null);
var state_45150__$1 = (function (){var statearr_45156 = state_45150;
(statearr_45156[(13)] = inst_45091__$1);

return statearr_45156;
})();
if(cljs.core.truth_(inst_45092)){
var statearr_45157_45193 = state_45150__$1;
(statearr_45157_45193[(1)] = (5));

} else {
var statearr_45158_45194 = state_45150__$1;
(statearr_45158_45194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (15))){
var state_45150__$1 = state_45150;
var statearr_45162_45195 = state_45150__$1;
(statearr_45162_45195[(2)] = null);

(statearr_45162_45195[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (21))){
var state_45150__$1 = state_45150;
var statearr_45163_45196 = state_45150__$1;
(statearr_45163_45196[(2)] = null);

(statearr_45163_45196[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (13))){
var inst_45103 = (state_45150[(8)]);
var inst_45104 = (state_45150[(10)]);
var inst_45105 = (state_45150[(11)]);
var inst_45102 = (state_45150[(12)]);
var inst_45112 = (state_45150[(2)]);
var inst_45113 = (inst_45105 + (1));
var tmp45159 = inst_45103;
var tmp45160 = inst_45104;
var tmp45161 = inst_45102;
var inst_45102__$1 = tmp45161;
var inst_45103__$1 = tmp45159;
var inst_45104__$1 = tmp45160;
var inst_45105__$1 = inst_45113;
var state_45150__$1 = (function (){var statearr_45164 = state_45150;
(statearr_45164[(14)] = inst_45112);

(statearr_45164[(8)] = inst_45103__$1);

(statearr_45164[(10)] = inst_45104__$1);

(statearr_45164[(11)] = inst_45105__$1);

(statearr_45164[(12)] = inst_45102__$1);

return statearr_45164;
})();
var statearr_45165_45197 = state_45150__$1;
(statearr_45165_45197[(2)] = null);

(statearr_45165_45197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (22))){
var state_45150__$1 = state_45150;
var statearr_45166_45198 = state_45150__$1;
(statearr_45166_45198[(2)] = null);

(statearr_45166_45198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (6))){
var inst_45091 = (state_45150[(13)]);
var inst_45100 = f.call(null,inst_45091);
var inst_45101 = cljs.core.seq.call(null,inst_45100);
var inst_45102 = inst_45101;
var inst_45103 = null;
var inst_45104 = (0);
var inst_45105 = (0);
var state_45150__$1 = (function (){var statearr_45167 = state_45150;
(statearr_45167[(8)] = inst_45103);

(statearr_45167[(10)] = inst_45104);

(statearr_45167[(11)] = inst_45105);

(statearr_45167[(12)] = inst_45102);

return statearr_45167;
})();
var statearr_45168_45199 = state_45150__$1;
(statearr_45168_45199[(2)] = null);

(statearr_45168_45199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (17))){
var inst_45116 = (state_45150[(7)]);
var inst_45120 = cljs.core.chunk_first.call(null,inst_45116);
var inst_45121 = cljs.core.chunk_rest.call(null,inst_45116);
var inst_45122 = cljs.core.count.call(null,inst_45120);
var inst_45102 = inst_45121;
var inst_45103 = inst_45120;
var inst_45104 = inst_45122;
var inst_45105 = (0);
var state_45150__$1 = (function (){var statearr_45169 = state_45150;
(statearr_45169[(8)] = inst_45103);

(statearr_45169[(10)] = inst_45104);

(statearr_45169[(11)] = inst_45105);

(statearr_45169[(12)] = inst_45102);

return statearr_45169;
})();
var statearr_45170_45200 = state_45150__$1;
(statearr_45170_45200[(2)] = null);

(statearr_45170_45200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (3))){
var inst_45148 = (state_45150[(2)]);
var state_45150__$1 = state_45150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45150__$1,inst_45148);
} else {
if((state_val_45151 === (12))){
var inst_45136 = (state_45150[(2)]);
var state_45150__$1 = state_45150;
var statearr_45171_45201 = state_45150__$1;
(statearr_45171_45201[(2)] = inst_45136);

(statearr_45171_45201[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (2))){
var state_45150__$1 = state_45150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45150__$1,(4),in$);
} else {
if((state_val_45151 === (23))){
var inst_45144 = (state_45150[(2)]);
var state_45150__$1 = state_45150;
var statearr_45172_45202 = state_45150__$1;
(statearr_45172_45202[(2)] = inst_45144);

(statearr_45172_45202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (19))){
var inst_45131 = (state_45150[(2)]);
var state_45150__$1 = state_45150;
var statearr_45173_45203 = state_45150__$1;
(statearr_45173_45203[(2)] = inst_45131);

(statearr_45173_45203[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (11))){
var inst_45116 = (state_45150[(7)]);
var inst_45102 = (state_45150[(12)]);
var inst_45116__$1 = cljs.core.seq.call(null,inst_45102);
var state_45150__$1 = (function (){var statearr_45174 = state_45150;
(statearr_45174[(7)] = inst_45116__$1);

return statearr_45174;
})();
if(inst_45116__$1){
var statearr_45175_45204 = state_45150__$1;
(statearr_45175_45204[(1)] = (14));

} else {
var statearr_45176_45205 = state_45150__$1;
(statearr_45176_45205[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (9))){
var inst_45138 = (state_45150[(2)]);
var inst_45139 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45150__$1 = (function (){var statearr_45177 = state_45150;
(statearr_45177[(15)] = inst_45138);

return statearr_45177;
})();
if(cljs.core.truth_(inst_45139)){
var statearr_45178_45206 = state_45150__$1;
(statearr_45178_45206[(1)] = (21));

} else {
var statearr_45179_45207 = state_45150__$1;
(statearr_45179_45207[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (5))){
var inst_45094 = cljs.core.async.close_BANG_.call(null,out);
var state_45150__$1 = state_45150;
var statearr_45180_45208 = state_45150__$1;
(statearr_45180_45208[(2)] = inst_45094);

(statearr_45180_45208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (14))){
var inst_45116 = (state_45150[(7)]);
var inst_45118 = cljs.core.chunked_seq_QMARK_.call(null,inst_45116);
var state_45150__$1 = state_45150;
if(inst_45118){
var statearr_45181_45209 = state_45150__$1;
(statearr_45181_45209[(1)] = (17));

} else {
var statearr_45182_45210 = state_45150__$1;
(statearr_45182_45210[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (16))){
var inst_45134 = (state_45150[(2)]);
var state_45150__$1 = state_45150;
var statearr_45183_45211 = state_45150__$1;
(statearr_45183_45211[(2)] = inst_45134);

(statearr_45183_45211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45151 === (10))){
var inst_45103 = (state_45150[(8)]);
var inst_45105 = (state_45150[(11)]);
var inst_45110 = cljs.core._nth.call(null,inst_45103,inst_45105);
var state_45150__$1 = state_45150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45150__$1,(13),out,inst_45110);
} else {
if((state_val_45151 === (18))){
var inst_45116 = (state_45150[(7)]);
var inst_45125 = cljs.core.first.call(null,inst_45116);
var state_45150__$1 = state_45150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45150__$1,(20),out,inst_45125);
} else {
if((state_val_45151 === (8))){
var inst_45104 = (state_45150[(10)]);
var inst_45105 = (state_45150[(11)]);
var inst_45107 = (inst_45105 < inst_45104);
var inst_45108 = inst_45107;
var state_45150__$1 = state_45150;
if(cljs.core.truth_(inst_45108)){
var statearr_45184_45212 = state_45150__$1;
(statearr_45184_45212[(1)] = (10));

} else {
var statearr_45185_45213 = state_45150__$1;
(statearr_45185_45213[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto__))
;
return ((function (switch__43444__auto__,c__43534__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43445__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43445__auto____0 = (function (){
var statearr_45186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45186[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43445__auto__);

(statearr_45186[(1)] = (1));

return statearr_45186;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43445__auto____1 = (function (state_45150){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_45150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e45187){if((e45187 instanceof Object)){
var ex__43448__auto__ = e45187;
var statearr_45188_45214 = state_45150;
(statearr_45188_45214[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45215 = state_45150;
state_45150 = G__45215;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43445__auto__ = function(state_45150){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43445__auto____1.call(this,state_45150);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43445__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43445__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto__))
})();
var state__43536__auto__ = (function (){var statearr_45189 = f__43535__auto__.call(null);
(statearr_45189[(6)] = c__43534__auto__);

return statearr_45189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto__))
);

return c__43534__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45217 = arguments.length;
switch (G__45217) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45220 = arguments.length;
switch (G__45220) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45223 = arguments.length;
switch (G__45223) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43534__auto___45270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto___45270,out){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto___45270,out){
return (function (state_45247){
var state_val_45248 = (state_45247[(1)]);
if((state_val_45248 === (7))){
var inst_45242 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
var statearr_45249_45271 = state_45247__$1;
(statearr_45249_45271[(2)] = inst_45242);

(statearr_45249_45271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (1))){
var inst_45224 = null;
var state_45247__$1 = (function (){var statearr_45250 = state_45247;
(statearr_45250[(7)] = inst_45224);

return statearr_45250;
})();
var statearr_45251_45272 = state_45247__$1;
(statearr_45251_45272[(2)] = null);

(statearr_45251_45272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (4))){
var inst_45227 = (state_45247[(8)]);
var inst_45227__$1 = (state_45247[(2)]);
var inst_45228 = (inst_45227__$1 == null);
var inst_45229 = cljs.core.not.call(null,inst_45228);
var state_45247__$1 = (function (){var statearr_45252 = state_45247;
(statearr_45252[(8)] = inst_45227__$1);

return statearr_45252;
})();
if(inst_45229){
var statearr_45253_45273 = state_45247__$1;
(statearr_45253_45273[(1)] = (5));

} else {
var statearr_45254_45274 = state_45247__$1;
(statearr_45254_45274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (6))){
var state_45247__$1 = state_45247;
var statearr_45255_45275 = state_45247__$1;
(statearr_45255_45275[(2)] = null);

(statearr_45255_45275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (3))){
var inst_45244 = (state_45247[(2)]);
var inst_45245 = cljs.core.async.close_BANG_.call(null,out);
var state_45247__$1 = (function (){var statearr_45256 = state_45247;
(statearr_45256[(9)] = inst_45244);

return statearr_45256;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45247__$1,inst_45245);
} else {
if((state_val_45248 === (2))){
var state_45247__$1 = state_45247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45247__$1,(4),ch);
} else {
if((state_val_45248 === (11))){
var inst_45227 = (state_45247[(8)]);
var inst_45236 = (state_45247[(2)]);
var inst_45224 = inst_45227;
var state_45247__$1 = (function (){var statearr_45257 = state_45247;
(statearr_45257[(10)] = inst_45236);

(statearr_45257[(7)] = inst_45224);

return statearr_45257;
})();
var statearr_45258_45276 = state_45247__$1;
(statearr_45258_45276[(2)] = null);

(statearr_45258_45276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (9))){
var inst_45227 = (state_45247[(8)]);
var state_45247__$1 = state_45247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45247__$1,(11),out,inst_45227);
} else {
if((state_val_45248 === (5))){
var inst_45227 = (state_45247[(8)]);
var inst_45224 = (state_45247[(7)]);
var inst_45231 = cljs.core._EQ_.call(null,inst_45227,inst_45224);
var state_45247__$1 = state_45247;
if(inst_45231){
var statearr_45260_45277 = state_45247__$1;
(statearr_45260_45277[(1)] = (8));

} else {
var statearr_45261_45278 = state_45247__$1;
(statearr_45261_45278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (10))){
var inst_45239 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
var statearr_45262_45279 = state_45247__$1;
(statearr_45262_45279[(2)] = inst_45239);

(statearr_45262_45279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (8))){
var inst_45224 = (state_45247[(7)]);
var tmp45259 = inst_45224;
var inst_45224__$1 = tmp45259;
var state_45247__$1 = (function (){var statearr_45263 = state_45247;
(statearr_45263[(7)] = inst_45224__$1);

return statearr_45263;
})();
var statearr_45264_45280 = state_45247__$1;
(statearr_45264_45280[(2)] = null);

(statearr_45264_45280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto___45270,out))
;
return ((function (switch__43444__auto__,c__43534__auto___45270,out){
return (function() {
var cljs$core$async$state_machine__43445__auto__ = null;
var cljs$core$async$state_machine__43445__auto____0 = (function (){
var statearr_45265 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45265[(0)] = cljs$core$async$state_machine__43445__auto__);

(statearr_45265[(1)] = (1));

return statearr_45265;
});
var cljs$core$async$state_machine__43445__auto____1 = (function (state_45247){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_45247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e45266){if((e45266 instanceof Object)){
var ex__43448__auto__ = e45266;
var statearr_45267_45281 = state_45247;
(statearr_45267_45281[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45282 = state_45247;
state_45247 = G__45282;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$state_machine__43445__auto__ = function(state_45247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43445__auto____1.call(this,state_45247);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43445__auto____0;
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43445__auto____1;
return cljs$core$async$state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto___45270,out))
})();
var state__43536__auto__ = (function (){var statearr_45268 = f__43535__auto__.call(null);
(statearr_45268[(6)] = c__43534__auto___45270);

return statearr_45268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto___45270,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45284 = arguments.length;
switch (G__45284) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43534__auto___45350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto___45350,out){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto___45350,out){
return (function (state_45322){
var state_val_45323 = (state_45322[(1)]);
if((state_val_45323 === (7))){
var inst_45318 = (state_45322[(2)]);
var state_45322__$1 = state_45322;
var statearr_45324_45351 = state_45322__$1;
(statearr_45324_45351[(2)] = inst_45318);

(statearr_45324_45351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45323 === (1))){
var inst_45285 = (new Array(n));
var inst_45286 = inst_45285;
var inst_45287 = (0);
var state_45322__$1 = (function (){var statearr_45325 = state_45322;
(statearr_45325[(7)] = inst_45287);

(statearr_45325[(8)] = inst_45286);

return statearr_45325;
})();
var statearr_45326_45352 = state_45322__$1;
(statearr_45326_45352[(2)] = null);

(statearr_45326_45352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45323 === (4))){
var inst_45290 = (state_45322[(9)]);
var inst_45290__$1 = (state_45322[(2)]);
var inst_45291 = (inst_45290__$1 == null);
var inst_45292 = cljs.core.not.call(null,inst_45291);
var state_45322__$1 = (function (){var statearr_45327 = state_45322;
(statearr_45327[(9)] = inst_45290__$1);

return statearr_45327;
})();
if(inst_45292){
var statearr_45328_45353 = state_45322__$1;
(statearr_45328_45353[(1)] = (5));

} else {
var statearr_45329_45354 = state_45322__$1;
(statearr_45329_45354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45323 === (15))){
var inst_45312 = (state_45322[(2)]);
var state_45322__$1 = state_45322;
var statearr_45330_45355 = state_45322__$1;
(statearr_45330_45355[(2)] = inst_45312);

(statearr_45330_45355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45323 === (13))){
var state_45322__$1 = state_45322;
var statearr_45331_45356 = state_45322__$1;
(statearr_45331_45356[(2)] = null);

(statearr_45331_45356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45323 === (6))){
var inst_45287 = (state_45322[(7)]);
var inst_45308 = (inst_45287 > (0));
var state_45322__$1 = state_45322;
if(cljs.core.truth_(inst_45308)){
var statearr_45332_45357 = state_45322__$1;
(statearr_45332_45357[(1)] = (12));

} else {
var statearr_45333_45358 = state_45322__$1;
(statearr_45333_45358[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45323 === (3))){
var inst_45320 = (state_45322[(2)]);
var state_45322__$1 = state_45322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45322__$1,inst_45320);
} else {
if((state_val_45323 === (12))){
var inst_45286 = (state_45322[(8)]);
var inst_45310 = cljs.core.vec.call(null,inst_45286);
var state_45322__$1 = state_45322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45322__$1,(15),out,inst_45310);
} else {
if((state_val_45323 === (2))){
var state_45322__$1 = state_45322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45322__$1,(4),ch);
} else {
if((state_val_45323 === (11))){
var inst_45302 = (state_45322[(2)]);
var inst_45303 = (new Array(n));
var inst_45286 = inst_45303;
var inst_45287 = (0);
var state_45322__$1 = (function (){var statearr_45334 = state_45322;
(statearr_45334[(7)] = inst_45287);

(statearr_45334[(8)] = inst_45286);

(statearr_45334[(10)] = inst_45302);

return statearr_45334;
})();
var statearr_45335_45359 = state_45322__$1;
(statearr_45335_45359[(2)] = null);

(statearr_45335_45359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45323 === (9))){
var inst_45286 = (state_45322[(8)]);
var inst_45300 = cljs.core.vec.call(null,inst_45286);
var state_45322__$1 = state_45322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45322__$1,(11),out,inst_45300);
} else {
if((state_val_45323 === (5))){
var inst_45295 = (state_45322[(11)]);
var inst_45287 = (state_45322[(7)]);
var inst_45286 = (state_45322[(8)]);
var inst_45290 = (state_45322[(9)]);
var inst_45294 = (inst_45286[inst_45287] = inst_45290);
var inst_45295__$1 = (inst_45287 + (1));
var inst_45296 = (inst_45295__$1 < n);
var state_45322__$1 = (function (){var statearr_45336 = state_45322;
(statearr_45336[(11)] = inst_45295__$1);

(statearr_45336[(12)] = inst_45294);

return statearr_45336;
})();
if(cljs.core.truth_(inst_45296)){
var statearr_45337_45360 = state_45322__$1;
(statearr_45337_45360[(1)] = (8));

} else {
var statearr_45338_45361 = state_45322__$1;
(statearr_45338_45361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45323 === (14))){
var inst_45315 = (state_45322[(2)]);
var inst_45316 = cljs.core.async.close_BANG_.call(null,out);
var state_45322__$1 = (function (){var statearr_45340 = state_45322;
(statearr_45340[(13)] = inst_45315);

return statearr_45340;
})();
var statearr_45341_45362 = state_45322__$1;
(statearr_45341_45362[(2)] = inst_45316);

(statearr_45341_45362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45323 === (10))){
var inst_45306 = (state_45322[(2)]);
var state_45322__$1 = state_45322;
var statearr_45342_45363 = state_45322__$1;
(statearr_45342_45363[(2)] = inst_45306);

(statearr_45342_45363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45323 === (8))){
var inst_45295 = (state_45322[(11)]);
var inst_45286 = (state_45322[(8)]);
var tmp45339 = inst_45286;
var inst_45286__$1 = tmp45339;
var inst_45287 = inst_45295;
var state_45322__$1 = (function (){var statearr_45343 = state_45322;
(statearr_45343[(7)] = inst_45287);

(statearr_45343[(8)] = inst_45286__$1);

return statearr_45343;
})();
var statearr_45344_45364 = state_45322__$1;
(statearr_45344_45364[(2)] = null);

(statearr_45344_45364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto___45350,out))
;
return ((function (switch__43444__auto__,c__43534__auto___45350,out){
return (function() {
var cljs$core$async$state_machine__43445__auto__ = null;
var cljs$core$async$state_machine__43445__auto____0 = (function (){
var statearr_45345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45345[(0)] = cljs$core$async$state_machine__43445__auto__);

(statearr_45345[(1)] = (1));

return statearr_45345;
});
var cljs$core$async$state_machine__43445__auto____1 = (function (state_45322){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_45322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e45346){if((e45346 instanceof Object)){
var ex__43448__auto__ = e45346;
var statearr_45347_45365 = state_45322;
(statearr_45347_45365[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45366 = state_45322;
state_45322 = G__45366;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$state_machine__43445__auto__ = function(state_45322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43445__auto____1.call(this,state_45322);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43445__auto____0;
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43445__auto____1;
return cljs$core$async$state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto___45350,out))
})();
var state__43536__auto__ = (function (){var statearr_45348 = f__43535__auto__.call(null);
(statearr_45348[(6)] = c__43534__auto___45350);

return statearr_45348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto___45350,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45368 = arguments.length;
switch (G__45368) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43534__auto___45438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43534__auto___45438,out){
return (function (){
var f__43535__auto__ = (function (){var switch__43444__auto__ = ((function (c__43534__auto___45438,out){
return (function (state_45410){
var state_val_45411 = (state_45410[(1)]);
if((state_val_45411 === (7))){
var inst_45406 = (state_45410[(2)]);
var state_45410__$1 = state_45410;
var statearr_45412_45439 = state_45410__$1;
(statearr_45412_45439[(2)] = inst_45406);

(statearr_45412_45439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45411 === (1))){
var inst_45369 = [];
var inst_45370 = inst_45369;
var inst_45371 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45410__$1 = (function (){var statearr_45413 = state_45410;
(statearr_45413[(7)] = inst_45371);

(statearr_45413[(8)] = inst_45370);

return statearr_45413;
})();
var statearr_45414_45440 = state_45410__$1;
(statearr_45414_45440[(2)] = null);

(statearr_45414_45440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45411 === (4))){
var inst_45374 = (state_45410[(9)]);
var inst_45374__$1 = (state_45410[(2)]);
var inst_45375 = (inst_45374__$1 == null);
var inst_45376 = cljs.core.not.call(null,inst_45375);
var state_45410__$1 = (function (){var statearr_45415 = state_45410;
(statearr_45415[(9)] = inst_45374__$1);

return statearr_45415;
})();
if(inst_45376){
var statearr_45416_45441 = state_45410__$1;
(statearr_45416_45441[(1)] = (5));

} else {
var statearr_45417_45442 = state_45410__$1;
(statearr_45417_45442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45411 === (15))){
var inst_45400 = (state_45410[(2)]);
var state_45410__$1 = state_45410;
var statearr_45418_45443 = state_45410__$1;
(statearr_45418_45443[(2)] = inst_45400);

(statearr_45418_45443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45411 === (13))){
var state_45410__$1 = state_45410;
var statearr_45419_45444 = state_45410__$1;
(statearr_45419_45444[(2)] = null);

(statearr_45419_45444[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45411 === (6))){
var inst_45370 = (state_45410[(8)]);
var inst_45395 = inst_45370.length;
var inst_45396 = (inst_45395 > (0));
var state_45410__$1 = state_45410;
if(cljs.core.truth_(inst_45396)){
var statearr_45420_45445 = state_45410__$1;
(statearr_45420_45445[(1)] = (12));

} else {
var statearr_45421_45446 = state_45410__$1;
(statearr_45421_45446[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45411 === (3))){
var inst_45408 = (state_45410[(2)]);
var state_45410__$1 = state_45410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45410__$1,inst_45408);
} else {
if((state_val_45411 === (12))){
var inst_45370 = (state_45410[(8)]);
var inst_45398 = cljs.core.vec.call(null,inst_45370);
var state_45410__$1 = state_45410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45410__$1,(15),out,inst_45398);
} else {
if((state_val_45411 === (2))){
var state_45410__$1 = state_45410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45410__$1,(4),ch);
} else {
if((state_val_45411 === (11))){
var inst_45378 = (state_45410[(10)]);
var inst_45374 = (state_45410[(9)]);
var inst_45388 = (state_45410[(2)]);
var inst_45389 = [];
var inst_45390 = inst_45389.push(inst_45374);
var inst_45370 = inst_45389;
var inst_45371 = inst_45378;
var state_45410__$1 = (function (){var statearr_45422 = state_45410;
(statearr_45422[(7)] = inst_45371);

(statearr_45422[(11)] = inst_45388);

(statearr_45422[(12)] = inst_45390);

(statearr_45422[(8)] = inst_45370);

return statearr_45422;
})();
var statearr_45423_45447 = state_45410__$1;
(statearr_45423_45447[(2)] = null);

(statearr_45423_45447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45411 === (9))){
var inst_45370 = (state_45410[(8)]);
var inst_45386 = cljs.core.vec.call(null,inst_45370);
var state_45410__$1 = state_45410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45410__$1,(11),out,inst_45386);
} else {
if((state_val_45411 === (5))){
var inst_45378 = (state_45410[(10)]);
var inst_45374 = (state_45410[(9)]);
var inst_45371 = (state_45410[(7)]);
var inst_45378__$1 = f.call(null,inst_45374);
var inst_45379 = cljs.core._EQ_.call(null,inst_45378__$1,inst_45371);
var inst_45380 = cljs.core.keyword_identical_QMARK_.call(null,inst_45371,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45381 = ((inst_45379) || (inst_45380));
var state_45410__$1 = (function (){var statearr_45424 = state_45410;
(statearr_45424[(10)] = inst_45378__$1);

return statearr_45424;
})();
if(cljs.core.truth_(inst_45381)){
var statearr_45425_45448 = state_45410__$1;
(statearr_45425_45448[(1)] = (8));

} else {
var statearr_45426_45449 = state_45410__$1;
(statearr_45426_45449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45411 === (14))){
var inst_45403 = (state_45410[(2)]);
var inst_45404 = cljs.core.async.close_BANG_.call(null,out);
var state_45410__$1 = (function (){var statearr_45428 = state_45410;
(statearr_45428[(13)] = inst_45403);

return statearr_45428;
})();
var statearr_45429_45450 = state_45410__$1;
(statearr_45429_45450[(2)] = inst_45404);

(statearr_45429_45450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45411 === (10))){
var inst_45393 = (state_45410[(2)]);
var state_45410__$1 = state_45410;
var statearr_45430_45451 = state_45410__$1;
(statearr_45430_45451[(2)] = inst_45393);

(statearr_45430_45451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45411 === (8))){
var inst_45378 = (state_45410[(10)]);
var inst_45374 = (state_45410[(9)]);
var inst_45370 = (state_45410[(8)]);
var inst_45383 = inst_45370.push(inst_45374);
var tmp45427 = inst_45370;
var inst_45370__$1 = tmp45427;
var inst_45371 = inst_45378;
var state_45410__$1 = (function (){var statearr_45431 = state_45410;
(statearr_45431[(7)] = inst_45371);

(statearr_45431[(14)] = inst_45383);

(statearr_45431[(8)] = inst_45370__$1);

return statearr_45431;
})();
var statearr_45432_45452 = state_45410__$1;
(statearr_45432_45452[(2)] = null);

(statearr_45432_45452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43534__auto___45438,out))
;
return ((function (switch__43444__auto__,c__43534__auto___45438,out){
return (function() {
var cljs$core$async$state_machine__43445__auto__ = null;
var cljs$core$async$state_machine__43445__auto____0 = (function (){
var statearr_45433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45433[(0)] = cljs$core$async$state_machine__43445__auto__);

(statearr_45433[(1)] = (1));

return statearr_45433;
});
var cljs$core$async$state_machine__43445__auto____1 = (function (state_45410){
while(true){
var ret_value__43446__auto__ = (function (){try{while(true){
var result__43447__auto__ = switch__43444__auto__.call(null,state_45410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43447__auto__;
}
break;
}
}catch (e45434){if((e45434 instanceof Object)){
var ex__43448__auto__ = e45434;
var statearr_45435_45453 = state_45410;
(statearr_45435_45453[(5)] = ex__43448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45454 = state_45410;
state_45410 = G__45454;
continue;
} else {
return ret_value__43446__auto__;
}
break;
}
});
cljs$core$async$state_machine__43445__auto__ = function(state_45410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43445__auto____1.call(this,state_45410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43445__auto____0;
cljs$core$async$state_machine__43445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43445__auto____1;
return cljs$core$async$state_machine__43445__auto__;
})()
;})(switch__43444__auto__,c__43534__auto___45438,out))
})();
var state__43536__auto__ = (function (){var statearr_45436 = f__43535__auto__.call(null);
(statearr_45436[(6)] = c__43534__auto___45438);

return statearr_45436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43536__auto__);
});})(c__43534__auto___45438,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

