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
var G__39576 = arguments.length;
switch (G__39576) {
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
if(typeof cljs.core.async.t_cljs$core$async39577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39577 = (function (f,blockable,meta39578){
this.f = f;
this.blockable = blockable;
this.meta39578 = meta39578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39579,meta39578__$1){
var self__ = this;
var _39579__$1 = this;
return (new cljs.core.async.t_cljs$core$async39577(self__.f,self__.blockable,meta39578__$1));
});

cljs.core.async.t_cljs$core$async39577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39579){
var self__ = this;
var _39579__$1 = this;
return self__.meta39578;
});

cljs.core.async.t_cljs$core$async39577.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39577.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39578","meta39578",1868852280,null)], null);
});

cljs.core.async.t_cljs$core$async39577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39577";

cljs.core.async.t_cljs$core$async39577.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39577");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39577.
 */
cljs.core.async.__GT_t_cljs$core$async39577 = (function cljs$core$async$__GT_t_cljs$core$async39577(f__$1,blockable__$1,meta39578){
return (new cljs.core.async.t_cljs$core$async39577(f__$1,blockable__$1,meta39578));
});

}

return (new cljs.core.async.t_cljs$core$async39577(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39583 = arguments.length;
switch (G__39583) {
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
var G__39586 = arguments.length;
switch (G__39586) {
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
var G__39589 = arguments.length;
switch (G__39589) {
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
var val_39591 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39591);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39591,ret){
return (function (){
return fn1.call(null,val_39591);
});})(val_39591,ret))
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
var G__39593 = arguments.length;
switch (G__39593) {
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
var n__4376__auto___39595 = n;
var x_39596 = (0);
while(true){
if((x_39596 < n__4376__auto___39595)){
(a[x_39596] = (0));

var G__39597 = (x_39596 + (1));
x_39596 = G__39597;
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

var G__39598 = (i + (1));
i = G__39598;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39599 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39599 = (function (flag,meta39600){
this.flag = flag;
this.meta39600 = meta39600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39601,meta39600__$1){
var self__ = this;
var _39601__$1 = this;
return (new cljs.core.async.t_cljs$core$async39599(self__.flag,meta39600__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39601){
var self__ = this;
var _39601__$1 = this;
return self__.meta39600;
});})(flag))
;

cljs.core.async.t_cljs$core$async39599.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39599.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39599.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39600","meta39600",917379637,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39599";

cljs.core.async.t_cljs$core$async39599.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39599");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39599.
 */
cljs.core.async.__GT_t_cljs$core$async39599 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39599(flag__$1,meta39600){
return (new cljs.core.async.t_cljs$core$async39599(flag__$1,meta39600));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39599(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39602 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39602 = (function (flag,cb,meta39603){
this.flag = flag;
this.cb = cb;
this.meta39603 = meta39603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39604,meta39603__$1){
var self__ = this;
var _39604__$1 = this;
return (new cljs.core.async.t_cljs$core$async39602(self__.flag,self__.cb,meta39603__$1));
});

cljs.core.async.t_cljs$core$async39602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39604){
var self__ = this;
var _39604__$1 = this;
return self__.meta39603;
});

cljs.core.async.t_cljs$core$async39602.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39602.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39602.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39602.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39603","meta39603",978208243,null)], null);
});

cljs.core.async.t_cljs$core$async39602.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39602";

cljs.core.async.t_cljs$core$async39602.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39602");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39602.
 */
cljs.core.async.__GT_t_cljs$core$async39602 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39602(flag__$1,cb__$1,meta39603){
return (new cljs.core.async.t_cljs$core$async39602(flag__$1,cb__$1,meta39603));
});

}

return (new cljs.core.async.t_cljs$core$async39602(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39605_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39605_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39606_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39606_SHARP_,port], null));
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
var G__39607 = (i + (1));
i = G__39607;
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
var len__4499__auto___39613 = arguments.length;
var i__4500__auto___39614 = (0);
while(true){
if((i__4500__auto___39614 < len__4499__auto___39613)){
args__4502__auto__.push((arguments[i__4500__auto___39614]));

var G__39615 = (i__4500__auto___39614 + (1));
i__4500__auto___39614 = G__39615;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39610){
var map__39611 = p__39610;
var map__39611__$1 = ((((!((map__39611 == null)))?(((((map__39611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39611):map__39611);
var opts = map__39611__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39608){
var G__39609 = cljs.core.first.call(null,seq39608);
var seq39608__$1 = cljs.core.next.call(null,seq39608);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39609,seq39608__$1);
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
var G__39617 = arguments.length;
switch (G__39617) {
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
var c__39516__auto___39663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto___39663){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto___39663){
return (function (state_39641){
var state_val_39642 = (state_39641[(1)]);
if((state_val_39642 === (7))){
var inst_39637 = (state_39641[(2)]);
var state_39641__$1 = state_39641;
var statearr_39643_39664 = state_39641__$1;
(statearr_39643_39664[(2)] = inst_39637);

(statearr_39643_39664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (1))){
var state_39641__$1 = state_39641;
var statearr_39644_39665 = state_39641__$1;
(statearr_39644_39665[(2)] = null);

(statearr_39644_39665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (4))){
var inst_39620 = (state_39641[(7)]);
var inst_39620__$1 = (state_39641[(2)]);
var inst_39621 = (inst_39620__$1 == null);
var state_39641__$1 = (function (){var statearr_39645 = state_39641;
(statearr_39645[(7)] = inst_39620__$1);

return statearr_39645;
})();
if(cljs.core.truth_(inst_39621)){
var statearr_39646_39666 = state_39641__$1;
(statearr_39646_39666[(1)] = (5));

} else {
var statearr_39647_39667 = state_39641__$1;
(statearr_39647_39667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (13))){
var state_39641__$1 = state_39641;
var statearr_39648_39668 = state_39641__$1;
(statearr_39648_39668[(2)] = null);

(statearr_39648_39668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (6))){
var inst_39620 = (state_39641[(7)]);
var state_39641__$1 = state_39641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39641__$1,(11),to,inst_39620);
} else {
if((state_val_39642 === (3))){
var inst_39639 = (state_39641[(2)]);
var state_39641__$1 = state_39641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39641__$1,inst_39639);
} else {
if((state_val_39642 === (12))){
var state_39641__$1 = state_39641;
var statearr_39649_39669 = state_39641__$1;
(statearr_39649_39669[(2)] = null);

(statearr_39649_39669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (2))){
var state_39641__$1 = state_39641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39641__$1,(4),from);
} else {
if((state_val_39642 === (11))){
var inst_39630 = (state_39641[(2)]);
var state_39641__$1 = state_39641;
if(cljs.core.truth_(inst_39630)){
var statearr_39650_39670 = state_39641__$1;
(statearr_39650_39670[(1)] = (12));

} else {
var statearr_39651_39671 = state_39641__$1;
(statearr_39651_39671[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (9))){
var state_39641__$1 = state_39641;
var statearr_39652_39672 = state_39641__$1;
(statearr_39652_39672[(2)] = null);

(statearr_39652_39672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (5))){
var state_39641__$1 = state_39641;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39653_39673 = state_39641__$1;
(statearr_39653_39673[(1)] = (8));

} else {
var statearr_39654_39674 = state_39641__$1;
(statearr_39654_39674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (14))){
var inst_39635 = (state_39641[(2)]);
var state_39641__$1 = state_39641;
var statearr_39655_39675 = state_39641__$1;
(statearr_39655_39675[(2)] = inst_39635);

(statearr_39655_39675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (10))){
var inst_39627 = (state_39641[(2)]);
var state_39641__$1 = state_39641;
var statearr_39656_39676 = state_39641__$1;
(statearr_39656_39676[(2)] = inst_39627);

(statearr_39656_39676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (8))){
var inst_39624 = cljs.core.async.close_BANG_.call(null,to);
var state_39641__$1 = state_39641;
var statearr_39657_39677 = state_39641__$1;
(statearr_39657_39677[(2)] = inst_39624);

(statearr_39657_39677[(1)] = (10));


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
});})(c__39516__auto___39663))
;
return ((function (switch__39426__auto__,c__39516__auto___39663){
return (function() {
var cljs$core$async$state_machine__39427__auto__ = null;
var cljs$core$async$state_machine__39427__auto____0 = (function (){
var statearr_39658 = [null,null,null,null,null,null,null,null];
(statearr_39658[(0)] = cljs$core$async$state_machine__39427__auto__);

(statearr_39658[(1)] = (1));

return statearr_39658;
});
var cljs$core$async$state_machine__39427__auto____1 = (function (state_39641){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_39641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e39659){if((e39659 instanceof Object)){
var ex__39430__auto__ = e39659;
var statearr_39660_39678 = state_39641;
(statearr_39660_39678[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39679 = state_39641;
state_39641 = G__39679;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$state_machine__39427__auto__ = function(state_39641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39427__auto____1.call(this,state_39641);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39427__auto____0;
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39427__auto____1;
return cljs$core$async$state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto___39663))
})();
var state__39518__auto__ = (function (){var statearr_39661 = f__39517__auto__.call(null);
(statearr_39661[(6)] = c__39516__auto___39663);

return statearr_39661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto___39663))
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
return (function (p__39680){
var vec__39681 = p__39680;
var v = cljs.core.nth.call(null,vec__39681,(0),null);
var p = cljs.core.nth.call(null,vec__39681,(1),null);
var job = vec__39681;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__39516__auto___39852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto___39852,res,vec__39681,v,p,job,jobs,results){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto___39852,res,vec__39681,v,p,job,jobs,results){
return (function (state_39688){
var state_val_39689 = (state_39688[(1)]);
if((state_val_39689 === (1))){
var state_39688__$1 = state_39688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39688__$1,(2),res,v);
} else {
if((state_val_39689 === (2))){
var inst_39685 = (state_39688[(2)]);
var inst_39686 = cljs.core.async.close_BANG_.call(null,res);
var state_39688__$1 = (function (){var statearr_39690 = state_39688;
(statearr_39690[(7)] = inst_39685);

return statearr_39690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39688__$1,inst_39686);
} else {
return null;
}
}
});})(c__39516__auto___39852,res,vec__39681,v,p,job,jobs,results))
;
return ((function (switch__39426__auto__,c__39516__auto___39852,res,vec__39681,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____0 = (function (){
var statearr_39691 = [null,null,null,null,null,null,null,null];
(statearr_39691[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__);

(statearr_39691[(1)] = (1));

return statearr_39691;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____1 = (function (state_39688){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_39688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e39692){if((e39692 instanceof Object)){
var ex__39430__auto__ = e39692;
var statearr_39693_39853 = state_39688;
(statearr_39693_39853[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39854 = state_39688;
state_39688 = G__39854;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__ = function(state_39688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____1.call(this,state_39688);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto___39852,res,vec__39681,v,p,job,jobs,results))
})();
var state__39518__auto__ = (function (){var statearr_39694 = f__39517__auto__.call(null);
(statearr_39694[(6)] = c__39516__auto___39852);

return statearr_39694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto___39852,res,vec__39681,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39695){
var vec__39696 = p__39695;
var v = cljs.core.nth.call(null,vec__39696,(0),null);
var p = cljs.core.nth.call(null,vec__39696,(1),null);
var job = vec__39696;
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
var n__4376__auto___39855 = n;
var __39856 = (0);
while(true){
if((__39856 < n__4376__auto___39855)){
var G__39699_39857 = type;
var G__39699_39858__$1 = (((G__39699_39857 instanceof cljs.core.Keyword))?G__39699_39857.fqn:null);
switch (G__39699_39858__$1) {
case "compute":
var c__39516__auto___39860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39856,c__39516__auto___39860,G__39699_39857,G__39699_39858__$1,n__4376__auto___39855,jobs,results,process,async){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (__39856,c__39516__auto___39860,G__39699_39857,G__39699_39858__$1,n__4376__auto___39855,jobs,results,process,async){
return (function (state_39712){
var state_val_39713 = (state_39712[(1)]);
if((state_val_39713 === (1))){
var state_39712__$1 = state_39712;
var statearr_39714_39861 = state_39712__$1;
(statearr_39714_39861[(2)] = null);

(statearr_39714_39861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39713 === (2))){
var state_39712__$1 = state_39712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39712__$1,(4),jobs);
} else {
if((state_val_39713 === (3))){
var inst_39710 = (state_39712[(2)]);
var state_39712__$1 = state_39712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39712__$1,inst_39710);
} else {
if((state_val_39713 === (4))){
var inst_39702 = (state_39712[(2)]);
var inst_39703 = process.call(null,inst_39702);
var state_39712__$1 = state_39712;
if(cljs.core.truth_(inst_39703)){
var statearr_39715_39862 = state_39712__$1;
(statearr_39715_39862[(1)] = (5));

} else {
var statearr_39716_39863 = state_39712__$1;
(statearr_39716_39863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39713 === (5))){
var state_39712__$1 = state_39712;
var statearr_39717_39864 = state_39712__$1;
(statearr_39717_39864[(2)] = null);

(statearr_39717_39864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39713 === (6))){
var state_39712__$1 = state_39712;
var statearr_39718_39865 = state_39712__$1;
(statearr_39718_39865[(2)] = null);

(statearr_39718_39865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39713 === (7))){
var inst_39708 = (state_39712[(2)]);
var state_39712__$1 = state_39712;
var statearr_39719_39866 = state_39712__$1;
(statearr_39719_39866[(2)] = inst_39708);

(statearr_39719_39866[(1)] = (3));


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
});})(__39856,c__39516__auto___39860,G__39699_39857,G__39699_39858__$1,n__4376__auto___39855,jobs,results,process,async))
;
return ((function (__39856,switch__39426__auto__,c__39516__auto___39860,G__39699_39857,G__39699_39858__$1,n__4376__auto___39855,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____0 = (function (){
var statearr_39720 = [null,null,null,null,null,null,null];
(statearr_39720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__);

(statearr_39720[(1)] = (1));

return statearr_39720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____1 = (function (state_39712){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_39712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e39721){if((e39721 instanceof Object)){
var ex__39430__auto__ = e39721;
var statearr_39722_39867 = state_39712;
(statearr_39722_39867[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39868 = state_39712;
state_39712 = G__39868;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__ = function(state_39712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____1.call(this,state_39712);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__;
})()
;})(__39856,switch__39426__auto__,c__39516__auto___39860,G__39699_39857,G__39699_39858__$1,n__4376__auto___39855,jobs,results,process,async))
})();
var state__39518__auto__ = (function (){var statearr_39723 = f__39517__auto__.call(null);
(statearr_39723[(6)] = c__39516__auto___39860);

return statearr_39723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(__39856,c__39516__auto___39860,G__39699_39857,G__39699_39858__$1,n__4376__auto___39855,jobs,results,process,async))
);


break;
case "async":
var c__39516__auto___39869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39856,c__39516__auto___39869,G__39699_39857,G__39699_39858__$1,n__4376__auto___39855,jobs,results,process,async){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (__39856,c__39516__auto___39869,G__39699_39857,G__39699_39858__$1,n__4376__auto___39855,jobs,results,process,async){
return (function (state_39736){
var state_val_39737 = (state_39736[(1)]);
if((state_val_39737 === (1))){
var state_39736__$1 = state_39736;
var statearr_39738_39870 = state_39736__$1;
(statearr_39738_39870[(2)] = null);

(statearr_39738_39870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39737 === (2))){
var state_39736__$1 = state_39736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39736__$1,(4),jobs);
} else {
if((state_val_39737 === (3))){
var inst_39734 = (state_39736[(2)]);
var state_39736__$1 = state_39736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39736__$1,inst_39734);
} else {
if((state_val_39737 === (4))){
var inst_39726 = (state_39736[(2)]);
var inst_39727 = async.call(null,inst_39726);
var state_39736__$1 = state_39736;
if(cljs.core.truth_(inst_39727)){
var statearr_39739_39871 = state_39736__$1;
(statearr_39739_39871[(1)] = (5));

} else {
var statearr_39740_39872 = state_39736__$1;
(statearr_39740_39872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39737 === (5))){
var state_39736__$1 = state_39736;
var statearr_39741_39873 = state_39736__$1;
(statearr_39741_39873[(2)] = null);

(statearr_39741_39873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39737 === (6))){
var state_39736__$1 = state_39736;
var statearr_39742_39874 = state_39736__$1;
(statearr_39742_39874[(2)] = null);

(statearr_39742_39874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39737 === (7))){
var inst_39732 = (state_39736[(2)]);
var state_39736__$1 = state_39736;
var statearr_39743_39875 = state_39736__$1;
(statearr_39743_39875[(2)] = inst_39732);

(statearr_39743_39875[(1)] = (3));


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
});})(__39856,c__39516__auto___39869,G__39699_39857,G__39699_39858__$1,n__4376__auto___39855,jobs,results,process,async))
;
return ((function (__39856,switch__39426__auto__,c__39516__auto___39869,G__39699_39857,G__39699_39858__$1,n__4376__auto___39855,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____0 = (function (){
var statearr_39744 = [null,null,null,null,null,null,null];
(statearr_39744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__);

(statearr_39744[(1)] = (1));

return statearr_39744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____1 = (function (state_39736){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_39736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e39745){if((e39745 instanceof Object)){
var ex__39430__auto__ = e39745;
var statearr_39746_39876 = state_39736;
(statearr_39746_39876[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39877 = state_39736;
state_39736 = G__39877;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__ = function(state_39736){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____1.call(this,state_39736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__;
})()
;})(__39856,switch__39426__auto__,c__39516__auto___39869,G__39699_39857,G__39699_39858__$1,n__4376__auto___39855,jobs,results,process,async))
})();
var state__39518__auto__ = (function (){var statearr_39747 = f__39517__auto__.call(null);
(statearr_39747[(6)] = c__39516__auto___39869);

return statearr_39747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(__39856,c__39516__auto___39869,G__39699_39857,G__39699_39858__$1,n__4376__auto___39855,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39699_39858__$1)].join('')));

}

var G__39878 = (__39856 + (1));
__39856 = G__39878;
continue;
} else {
}
break;
}

var c__39516__auto___39879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto___39879,jobs,results,process,async){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto___39879,jobs,results,process,async){
return (function (state_39769){
var state_val_39770 = (state_39769[(1)]);
if((state_val_39770 === (1))){
var state_39769__$1 = state_39769;
var statearr_39771_39880 = state_39769__$1;
(statearr_39771_39880[(2)] = null);

(statearr_39771_39880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (2))){
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39769__$1,(4),from);
} else {
if((state_val_39770 === (3))){
var inst_39767 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39769__$1,inst_39767);
} else {
if((state_val_39770 === (4))){
var inst_39750 = (state_39769[(7)]);
var inst_39750__$1 = (state_39769[(2)]);
var inst_39751 = (inst_39750__$1 == null);
var state_39769__$1 = (function (){var statearr_39772 = state_39769;
(statearr_39772[(7)] = inst_39750__$1);

return statearr_39772;
})();
if(cljs.core.truth_(inst_39751)){
var statearr_39773_39881 = state_39769__$1;
(statearr_39773_39881[(1)] = (5));

} else {
var statearr_39774_39882 = state_39769__$1;
(statearr_39774_39882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (5))){
var inst_39753 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39769__$1 = state_39769;
var statearr_39775_39883 = state_39769__$1;
(statearr_39775_39883[(2)] = inst_39753);

(statearr_39775_39883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (6))){
var inst_39755 = (state_39769[(8)]);
var inst_39750 = (state_39769[(7)]);
var inst_39755__$1 = cljs.core.async.chan.call(null,(1));
var inst_39756 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39757 = [inst_39750,inst_39755__$1];
var inst_39758 = (new cljs.core.PersistentVector(null,2,(5),inst_39756,inst_39757,null));
var state_39769__$1 = (function (){var statearr_39776 = state_39769;
(statearr_39776[(8)] = inst_39755__$1);

return statearr_39776;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39769__$1,(8),jobs,inst_39758);
} else {
if((state_val_39770 === (7))){
var inst_39765 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39777_39884 = state_39769__$1;
(statearr_39777_39884[(2)] = inst_39765);

(statearr_39777_39884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (8))){
var inst_39755 = (state_39769[(8)]);
var inst_39760 = (state_39769[(2)]);
var state_39769__$1 = (function (){var statearr_39778 = state_39769;
(statearr_39778[(9)] = inst_39760);

return statearr_39778;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39769__$1,(9),results,inst_39755);
} else {
if((state_val_39770 === (9))){
var inst_39762 = (state_39769[(2)]);
var state_39769__$1 = (function (){var statearr_39779 = state_39769;
(statearr_39779[(10)] = inst_39762);

return statearr_39779;
})();
var statearr_39780_39885 = state_39769__$1;
(statearr_39780_39885[(2)] = null);

(statearr_39780_39885[(1)] = (2));


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
});})(c__39516__auto___39879,jobs,results,process,async))
;
return ((function (switch__39426__auto__,c__39516__auto___39879,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____0 = (function (){
var statearr_39781 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__);

(statearr_39781[(1)] = (1));

return statearr_39781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____1 = (function (state_39769){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_39769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e39782){if((e39782 instanceof Object)){
var ex__39430__auto__ = e39782;
var statearr_39783_39886 = state_39769;
(statearr_39783_39886[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39887 = state_39769;
state_39769 = G__39887;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__ = function(state_39769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____1.call(this,state_39769);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto___39879,jobs,results,process,async))
})();
var state__39518__auto__ = (function (){var statearr_39784 = f__39517__auto__.call(null);
(statearr_39784[(6)] = c__39516__auto___39879);

return statearr_39784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto___39879,jobs,results,process,async))
);


var c__39516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto__,jobs,results,process,async){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto__,jobs,results,process,async){
return (function (state_39822){
var state_val_39823 = (state_39822[(1)]);
if((state_val_39823 === (7))){
var inst_39818 = (state_39822[(2)]);
var state_39822__$1 = state_39822;
var statearr_39824_39888 = state_39822__$1;
(statearr_39824_39888[(2)] = inst_39818);

(statearr_39824_39888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (20))){
var state_39822__$1 = state_39822;
var statearr_39825_39889 = state_39822__$1;
(statearr_39825_39889[(2)] = null);

(statearr_39825_39889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (1))){
var state_39822__$1 = state_39822;
var statearr_39826_39890 = state_39822__$1;
(statearr_39826_39890[(2)] = null);

(statearr_39826_39890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (4))){
var inst_39787 = (state_39822[(7)]);
var inst_39787__$1 = (state_39822[(2)]);
var inst_39788 = (inst_39787__$1 == null);
var state_39822__$1 = (function (){var statearr_39827 = state_39822;
(statearr_39827[(7)] = inst_39787__$1);

return statearr_39827;
})();
if(cljs.core.truth_(inst_39788)){
var statearr_39828_39891 = state_39822__$1;
(statearr_39828_39891[(1)] = (5));

} else {
var statearr_39829_39892 = state_39822__$1;
(statearr_39829_39892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (15))){
var inst_39800 = (state_39822[(8)]);
var state_39822__$1 = state_39822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39822__$1,(18),to,inst_39800);
} else {
if((state_val_39823 === (21))){
var inst_39813 = (state_39822[(2)]);
var state_39822__$1 = state_39822;
var statearr_39830_39893 = state_39822__$1;
(statearr_39830_39893[(2)] = inst_39813);

(statearr_39830_39893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (13))){
var inst_39815 = (state_39822[(2)]);
var state_39822__$1 = (function (){var statearr_39831 = state_39822;
(statearr_39831[(9)] = inst_39815);

return statearr_39831;
})();
var statearr_39832_39894 = state_39822__$1;
(statearr_39832_39894[(2)] = null);

(statearr_39832_39894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (6))){
var inst_39787 = (state_39822[(7)]);
var state_39822__$1 = state_39822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39822__$1,(11),inst_39787);
} else {
if((state_val_39823 === (17))){
var inst_39808 = (state_39822[(2)]);
var state_39822__$1 = state_39822;
if(cljs.core.truth_(inst_39808)){
var statearr_39833_39895 = state_39822__$1;
(statearr_39833_39895[(1)] = (19));

} else {
var statearr_39834_39896 = state_39822__$1;
(statearr_39834_39896[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (3))){
var inst_39820 = (state_39822[(2)]);
var state_39822__$1 = state_39822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39822__$1,inst_39820);
} else {
if((state_val_39823 === (12))){
var inst_39797 = (state_39822[(10)]);
var state_39822__$1 = state_39822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39822__$1,(14),inst_39797);
} else {
if((state_val_39823 === (2))){
var state_39822__$1 = state_39822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39822__$1,(4),results);
} else {
if((state_val_39823 === (19))){
var state_39822__$1 = state_39822;
var statearr_39835_39897 = state_39822__$1;
(statearr_39835_39897[(2)] = null);

(statearr_39835_39897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (11))){
var inst_39797 = (state_39822[(2)]);
var state_39822__$1 = (function (){var statearr_39836 = state_39822;
(statearr_39836[(10)] = inst_39797);

return statearr_39836;
})();
var statearr_39837_39898 = state_39822__$1;
(statearr_39837_39898[(2)] = null);

(statearr_39837_39898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (9))){
var state_39822__$1 = state_39822;
var statearr_39838_39899 = state_39822__$1;
(statearr_39838_39899[(2)] = null);

(statearr_39838_39899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (5))){
var state_39822__$1 = state_39822;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39839_39900 = state_39822__$1;
(statearr_39839_39900[(1)] = (8));

} else {
var statearr_39840_39901 = state_39822__$1;
(statearr_39840_39901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (14))){
var inst_39802 = (state_39822[(11)]);
var inst_39800 = (state_39822[(8)]);
var inst_39800__$1 = (state_39822[(2)]);
var inst_39801 = (inst_39800__$1 == null);
var inst_39802__$1 = cljs.core.not.call(null,inst_39801);
var state_39822__$1 = (function (){var statearr_39841 = state_39822;
(statearr_39841[(11)] = inst_39802__$1);

(statearr_39841[(8)] = inst_39800__$1);

return statearr_39841;
})();
if(inst_39802__$1){
var statearr_39842_39902 = state_39822__$1;
(statearr_39842_39902[(1)] = (15));

} else {
var statearr_39843_39903 = state_39822__$1;
(statearr_39843_39903[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (16))){
var inst_39802 = (state_39822[(11)]);
var state_39822__$1 = state_39822;
var statearr_39844_39904 = state_39822__$1;
(statearr_39844_39904[(2)] = inst_39802);

(statearr_39844_39904[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (10))){
var inst_39794 = (state_39822[(2)]);
var state_39822__$1 = state_39822;
var statearr_39845_39905 = state_39822__$1;
(statearr_39845_39905[(2)] = inst_39794);

(statearr_39845_39905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (18))){
var inst_39805 = (state_39822[(2)]);
var state_39822__$1 = state_39822;
var statearr_39846_39906 = state_39822__$1;
(statearr_39846_39906[(2)] = inst_39805);

(statearr_39846_39906[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (8))){
var inst_39791 = cljs.core.async.close_BANG_.call(null,to);
var state_39822__$1 = state_39822;
var statearr_39847_39907 = state_39822__$1;
(statearr_39847_39907[(2)] = inst_39791);

(statearr_39847_39907[(1)] = (10));


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
});})(c__39516__auto__,jobs,results,process,async))
;
return ((function (switch__39426__auto__,c__39516__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____0 = (function (){
var statearr_39848 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__);

(statearr_39848[(1)] = (1));

return statearr_39848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____1 = (function (state_39822){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_39822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e39849){if((e39849 instanceof Object)){
var ex__39430__auto__ = e39849;
var statearr_39850_39908 = state_39822;
(statearr_39850_39908[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39909 = state_39822;
state_39822 = G__39909;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__ = function(state_39822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____1.call(this,state_39822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto__,jobs,results,process,async))
})();
var state__39518__auto__ = (function (){var statearr_39851 = f__39517__auto__.call(null);
(statearr_39851[(6)] = c__39516__auto__);

return statearr_39851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto__,jobs,results,process,async))
);

return c__39516__auto__;
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
var G__39911 = arguments.length;
switch (G__39911) {
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
var G__39914 = arguments.length;
switch (G__39914) {
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
var G__39917 = arguments.length;
switch (G__39917) {
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
var c__39516__auto___39966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto___39966,tc,fc){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto___39966,tc,fc){
return (function (state_39943){
var state_val_39944 = (state_39943[(1)]);
if((state_val_39944 === (7))){
var inst_39939 = (state_39943[(2)]);
var state_39943__$1 = state_39943;
var statearr_39945_39967 = state_39943__$1;
(statearr_39945_39967[(2)] = inst_39939);

(statearr_39945_39967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (1))){
var state_39943__$1 = state_39943;
var statearr_39946_39968 = state_39943__$1;
(statearr_39946_39968[(2)] = null);

(statearr_39946_39968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (4))){
var inst_39920 = (state_39943[(7)]);
var inst_39920__$1 = (state_39943[(2)]);
var inst_39921 = (inst_39920__$1 == null);
var state_39943__$1 = (function (){var statearr_39947 = state_39943;
(statearr_39947[(7)] = inst_39920__$1);

return statearr_39947;
})();
if(cljs.core.truth_(inst_39921)){
var statearr_39948_39969 = state_39943__$1;
(statearr_39948_39969[(1)] = (5));

} else {
var statearr_39949_39970 = state_39943__$1;
(statearr_39949_39970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (13))){
var state_39943__$1 = state_39943;
var statearr_39950_39971 = state_39943__$1;
(statearr_39950_39971[(2)] = null);

(statearr_39950_39971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (6))){
var inst_39920 = (state_39943[(7)]);
var inst_39926 = p.call(null,inst_39920);
var state_39943__$1 = state_39943;
if(cljs.core.truth_(inst_39926)){
var statearr_39951_39972 = state_39943__$1;
(statearr_39951_39972[(1)] = (9));

} else {
var statearr_39952_39973 = state_39943__$1;
(statearr_39952_39973[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (3))){
var inst_39941 = (state_39943[(2)]);
var state_39943__$1 = state_39943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39943__$1,inst_39941);
} else {
if((state_val_39944 === (12))){
var state_39943__$1 = state_39943;
var statearr_39953_39974 = state_39943__$1;
(statearr_39953_39974[(2)] = null);

(statearr_39953_39974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (2))){
var state_39943__$1 = state_39943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39943__$1,(4),ch);
} else {
if((state_val_39944 === (11))){
var inst_39920 = (state_39943[(7)]);
var inst_39930 = (state_39943[(2)]);
var state_39943__$1 = state_39943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39943__$1,(8),inst_39930,inst_39920);
} else {
if((state_val_39944 === (9))){
var state_39943__$1 = state_39943;
var statearr_39954_39975 = state_39943__$1;
(statearr_39954_39975[(2)] = tc);

(statearr_39954_39975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (5))){
var inst_39923 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39924 = cljs.core.async.close_BANG_.call(null,fc);
var state_39943__$1 = (function (){var statearr_39955 = state_39943;
(statearr_39955[(8)] = inst_39923);

return statearr_39955;
})();
var statearr_39956_39976 = state_39943__$1;
(statearr_39956_39976[(2)] = inst_39924);

(statearr_39956_39976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (14))){
var inst_39937 = (state_39943[(2)]);
var state_39943__$1 = state_39943;
var statearr_39957_39977 = state_39943__$1;
(statearr_39957_39977[(2)] = inst_39937);

(statearr_39957_39977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (10))){
var state_39943__$1 = state_39943;
var statearr_39958_39978 = state_39943__$1;
(statearr_39958_39978[(2)] = fc);

(statearr_39958_39978[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39944 === (8))){
var inst_39932 = (state_39943[(2)]);
var state_39943__$1 = state_39943;
if(cljs.core.truth_(inst_39932)){
var statearr_39959_39979 = state_39943__$1;
(statearr_39959_39979[(1)] = (12));

} else {
var statearr_39960_39980 = state_39943__$1;
(statearr_39960_39980[(1)] = (13));

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
});})(c__39516__auto___39966,tc,fc))
;
return ((function (switch__39426__auto__,c__39516__auto___39966,tc,fc){
return (function() {
var cljs$core$async$state_machine__39427__auto__ = null;
var cljs$core$async$state_machine__39427__auto____0 = (function (){
var statearr_39961 = [null,null,null,null,null,null,null,null,null];
(statearr_39961[(0)] = cljs$core$async$state_machine__39427__auto__);

(statearr_39961[(1)] = (1));

return statearr_39961;
});
var cljs$core$async$state_machine__39427__auto____1 = (function (state_39943){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_39943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e39962){if((e39962 instanceof Object)){
var ex__39430__auto__ = e39962;
var statearr_39963_39981 = state_39943;
(statearr_39963_39981[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39982 = state_39943;
state_39943 = G__39982;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$state_machine__39427__auto__ = function(state_39943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39427__auto____1.call(this,state_39943);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39427__auto____0;
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39427__auto____1;
return cljs$core$async$state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto___39966,tc,fc))
})();
var state__39518__auto__ = (function (){var statearr_39964 = f__39517__auto__.call(null);
(statearr_39964[(6)] = c__39516__auto___39966);

return statearr_39964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto___39966,tc,fc))
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
var c__39516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto__){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto__){
return (function (state_40003){
var state_val_40004 = (state_40003[(1)]);
if((state_val_40004 === (7))){
var inst_39999 = (state_40003[(2)]);
var state_40003__$1 = state_40003;
var statearr_40005_40023 = state_40003__$1;
(statearr_40005_40023[(2)] = inst_39999);

(statearr_40005_40023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (1))){
var inst_39983 = init;
var state_40003__$1 = (function (){var statearr_40006 = state_40003;
(statearr_40006[(7)] = inst_39983);

return statearr_40006;
})();
var statearr_40007_40024 = state_40003__$1;
(statearr_40007_40024[(2)] = null);

(statearr_40007_40024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (4))){
var inst_39986 = (state_40003[(8)]);
var inst_39986__$1 = (state_40003[(2)]);
var inst_39987 = (inst_39986__$1 == null);
var state_40003__$1 = (function (){var statearr_40008 = state_40003;
(statearr_40008[(8)] = inst_39986__$1);

return statearr_40008;
})();
if(cljs.core.truth_(inst_39987)){
var statearr_40009_40025 = state_40003__$1;
(statearr_40009_40025[(1)] = (5));

} else {
var statearr_40010_40026 = state_40003__$1;
(statearr_40010_40026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (6))){
var inst_39983 = (state_40003[(7)]);
var inst_39990 = (state_40003[(9)]);
var inst_39986 = (state_40003[(8)]);
var inst_39990__$1 = f.call(null,inst_39983,inst_39986);
var inst_39991 = cljs.core.reduced_QMARK_.call(null,inst_39990__$1);
var state_40003__$1 = (function (){var statearr_40011 = state_40003;
(statearr_40011[(9)] = inst_39990__$1);

return statearr_40011;
})();
if(inst_39991){
var statearr_40012_40027 = state_40003__$1;
(statearr_40012_40027[(1)] = (8));

} else {
var statearr_40013_40028 = state_40003__$1;
(statearr_40013_40028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (3))){
var inst_40001 = (state_40003[(2)]);
var state_40003__$1 = state_40003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40003__$1,inst_40001);
} else {
if((state_val_40004 === (2))){
var state_40003__$1 = state_40003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40003__$1,(4),ch);
} else {
if((state_val_40004 === (9))){
var inst_39990 = (state_40003[(9)]);
var inst_39983 = inst_39990;
var state_40003__$1 = (function (){var statearr_40014 = state_40003;
(statearr_40014[(7)] = inst_39983);

return statearr_40014;
})();
var statearr_40015_40029 = state_40003__$1;
(statearr_40015_40029[(2)] = null);

(statearr_40015_40029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (5))){
var inst_39983 = (state_40003[(7)]);
var state_40003__$1 = state_40003;
var statearr_40016_40030 = state_40003__$1;
(statearr_40016_40030[(2)] = inst_39983);

(statearr_40016_40030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (10))){
var inst_39997 = (state_40003[(2)]);
var state_40003__$1 = state_40003;
var statearr_40017_40031 = state_40003__$1;
(statearr_40017_40031[(2)] = inst_39997);

(statearr_40017_40031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40004 === (8))){
var inst_39990 = (state_40003[(9)]);
var inst_39993 = cljs.core.deref.call(null,inst_39990);
var state_40003__$1 = state_40003;
var statearr_40018_40032 = state_40003__$1;
(statearr_40018_40032[(2)] = inst_39993);

(statearr_40018_40032[(1)] = (10));


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
});})(c__39516__auto__))
;
return ((function (switch__39426__auto__,c__39516__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__39427__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39427__auto____0 = (function (){
var statearr_40019 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40019[(0)] = cljs$core$async$reduce_$_state_machine__39427__auto__);

(statearr_40019[(1)] = (1));

return statearr_40019;
});
var cljs$core$async$reduce_$_state_machine__39427__auto____1 = (function (state_40003){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_40003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e40020){if((e40020 instanceof Object)){
var ex__39430__auto__ = e40020;
var statearr_40021_40033 = state_40003;
(statearr_40021_40033[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40034 = state_40003;
state_40003 = G__40034;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39427__auto__ = function(state_40003){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39427__auto____1.call(this,state_40003);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39427__auto____0;
cljs$core$async$reduce_$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39427__auto____1;
return cljs$core$async$reduce_$_state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto__))
})();
var state__39518__auto__ = (function (){var statearr_40022 = f__39517__auto__.call(null);
(statearr_40022[(6)] = c__39516__auto__);

return statearr_40022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto__))
);

return c__39516__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__39516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto__,f__$1){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto__,f__$1){
return (function (state_40040){
var state_val_40041 = (state_40040[(1)]);
if((state_val_40041 === (1))){
var inst_40035 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_40040__$1 = state_40040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40040__$1,(2),inst_40035);
} else {
if((state_val_40041 === (2))){
var inst_40037 = (state_40040[(2)]);
var inst_40038 = f__$1.call(null,inst_40037);
var state_40040__$1 = state_40040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40040__$1,inst_40038);
} else {
return null;
}
}
});})(c__39516__auto__,f__$1))
;
return ((function (switch__39426__auto__,c__39516__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__39427__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39427__auto____0 = (function (){
var statearr_40042 = [null,null,null,null,null,null,null];
(statearr_40042[(0)] = cljs$core$async$transduce_$_state_machine__39427__auto__);

(statearr_40042[(1)] = (1));

return statearr_40042;
});
var cljs$core$async$transduce_$_state_machine__39427__auto____1 = (function (state_40040){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_40040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e40043){if((e40043 instanceof Object)){
var ex__39430__auto__ = e40043;
var statearr_40044_40046 = state_40040;
(statearr_40044_40046[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40047 = state_40040;
state_40040 = G__40047;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39427__auto__ = function(state_40040){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39427__auto____1.call(this,state_40040);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39427__auto____0;
cljs$core$async$transduce_$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39427__auto____1;
return cljs$core$async$transduce_$_state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto__,f__$1))
})();
var state__39518__auto__ = (function (){var statearr_40045 = f__39517__auto__.call(null);
(statearr_40045[(6)] = c__39516__auto__);

return statearr_40045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto__,f__$1))
);

return c__39516__auto__;
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
var G__40049 = arguments.length;
switch (G__40049) {
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
var c__39516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto__){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto__){
return (function (state_40074){
var state_val_40075 = (state_40074[(1)]);
if((state_val_40075 === (7))){
var inst_40056 = (state_40074[(2)]);
var state_40074__$1 = state_40074;
var statearr_40076_40097 = state_40074__$1;
(statearr_40076_40097[(2)] = inst_40056);

(statearr_40076_40097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (1))){
var inst_40050 = cljs.core.seq.call(null,coll);
var inst_40051 = inst_40050;
var state_40074__$1 = (function (){var statearr_40077 = state_40074;
(statearr_40077[(7)] = inst_40051);

return statearr_40077;
})();
var statearr_40078_40098 = state_40074__$1;
(statearr_40078_40098[(2)] = null);

(statearr_40078_40098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (4))){
var inst_40051 = (state_40074[(7)]);
var inst_40054 = cljs.core.first.call(null,inst_40051);
var state_40074__$1 = state_40074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40074__$1,(7),ch,inst_40054);
} else {
if((state_val_40075 === (13))){
var inst_40068 = (state_40074[(2)]);
var state_40074__$1 = state_40074;
var statearr_40079_40099 = state_40074__$1;
(statearr_40079_40099[(2)] = inst_40068);

(statearr_40079_40099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (6))){
var inst_40059 = (state_40074[(2)]);
var state_40074__$1 = state_40074;
if(cljs.core.truth_(inst_40059)){
var statearr_40080_40100 = state_40074__$1;
(statearr_40080_40100[(1)] = (8));

} else {
var statearr_40081_40101 = state_40074__$1;
(statearr_40081_40101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (3))){
var inst_40072 = (state_40074[(2)]);
var state_40074__$1 = state_40074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40074__$1,inst_40072);
} else {
if((state_val_40075 === (12))){
var state_40074__$1 = state_40074;
var statearr_40082_40102 = state_40074__$1;
(statearr_40082_40102[(2)] = null);

(statearr_40082_40102[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (2))){
var inst_40051 = (state_40074[(7)]);
var state_40074__$1 = state_40074;
if(cljs.core.truth_(inst_40051)){
var statearr_40083_40103 = state_40074__$1;
(statearr_40083_40103[(1)] = (4));

} else {
var statearr_40084_40104 = state_40074__$1;
(statearr_40084_40104[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (11))){
var inst_40065 = cljs.core.async.close_BANG_.call(null,ch);
var state_40074__$1 = state_40074;
var statearr_40085_40105 = state_40074__$1;
(statearr_40085_40105[(2)] = inst_40065);

(statearr_40085_40105[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (9))){
var state_40074__$1 = state_40074;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40086_40106 = state_40074__$1;
(statearr_40086_40106[(1)] = (11));

} else {
var statearr_40087_40107 = state_40074__$1;
(statearr_40087_40107[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (5))){
var inst_40051 = (state_40074[(7)]);
var state_40074__$1 = state_40074;
var statearr_40088_40108 = state_40074__$1;
(statearr_40088_40108[(2)] = inst_40051);

(statearr_40088_40108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (10))){
var inst_40070 = (state_40074[(2)]);
var state_40074__$1 = state_40074;
var statearr_40089_40109 = state_40074__$1;
(statearr_40089_40109[(2)] = inst_40070);

(statearr_40089_40109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (8))){
var inst_40051 = (state_40074[(7)]);
var inst_40061 = cljs.core.next.call(null,inst_40051);
var inst_40051__$1 = inst_40061;
var state_40074__$1 = (function (){var statearr_40090 = state_40074;
(statearr_40090[(7)] = inst_40051__$1);

return statearr_40090;
})();
var statearr_40091_40110 = state_40074__$1;
(statearr_40091_40110[(2)] = null);

(statearr_40091_40110[(1)] = (2));


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
});})(c__39516__auto__))
;
return ((function (switch__39426__auto__,c__39516__auto__){
return (function() {
var cljs$core$async$state_machine__39427__auto__ = null;
var cljs$core$async$state_machine__39427__auto____0 = (function (){
var statearr_40092 = [null,null,null,null,null,null,null,null];
(statearr_40092[(0)] = cljs$core$async$state_machine__39427__auto__);

(statearr_40092[(1)] = (1));

return statearr_40092;
});
var cljs$core$async$state_machine__39427__auto____1 = (function (state_40074){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_40074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e40093){if((e40093 instanceof Object)){
var ex__39430__auto__ = e40093;
var statearr_40094_40111 = state_40074;
(statearr_40094_40111[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40112 = state_40074;
state_40074 = G__40112;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$state_machine__39427__auto__ = function(state_40074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39427__auto____1.call(this,state_40074);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39427__auto____0;
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39427__auto____1;
return cljs$core$async$state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto__))
})();
var state__39518__auto__ = (function (){var statearr_40095 = f__39517__auto__.call(null);
(statearr_40095[(6)] = c__39516__auto__);

return statearr_40095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto__))
);

return c__39516__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async40113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40113 = (function (ch,cs,meta40114){
this.ch = ch;
this.cs = cs;
this.meta40114 = meta40114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40115,meta40114__$1){
var self__ = this;
var _40115__$1 = this;
return (new cljs.core.async.t_cljs$core$async40113(self__.ch,self__.cs,meta40114__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40115){
var self__ = this;
var _40115__$1 = this;
return self__.meta40114;
});})(cs))
;

cljs.core.async.t_cljs$core$async40113.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40113.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40113.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40113.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40113.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40113.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40113.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40114","meta40114",2121982764,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40113";

cljs.core.async.t_cljs$core$async40113.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40113");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40113.
 */
cljs.core.async.__GT_t_cljs$core$async40113 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40113(ch__$1,cs__$1,meta40114){
return (new cljs.core.async.t_cljs$core$async40113(ch__$1,cs__$1,meta40114));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40113(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__39516__auto___40335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto___40335,cs,m,dchan,dctr,done){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto___40335,cs,m,dchan,dctr,done){
return (function (state_40250){
var state_val_40251 = (state_40250[(1)]);
if((state_val_40251 === (7))){
var inst_40246 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
var statearr_40252_40336 = state_40250__$1;
(statearr_40252_40336[(2)] = inst_40246);

(statearr_40252_40336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (20))){
var inst_40149 = (state_40250[(7)]);
var inst_40161 = cljs.core.first.call(null,inst_40149);
var inst_40162 = cljs.core.nth.call(null,inst_40161,(0),null);
var inst_40163 = cljs.core.nth.call(null,inst_40161,(1),null);
var state_40250__$1 = (function (){var statearr_40253 = state_40250;
(statearr_40253[(8)] = inst_40162);

return statearr_40253;
})();
if(cljs.core.truth_(inst_40163)){
var statearr_40254_40337 = state_40250__$1;
(statearr_40254_40337[(1)] = (22));

} else {
var statearr_40255_40338 = state_40250__$1;
(statearr_40255_40338[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (27))){
var inst_40193 = (state_40250[(9)]);
var inst_40191 = (state_40250[(10)]);
var inst_40198 = (state_40250[(11)]);
var inst_40118 = (state_40250[(12)]);
var inst_40198__$1 = cljs.core._nth.call(null,inst_40191,inst_40193);
var inst_40199 = cljs.core.async.put_BANG_.call(null,inst_40198__$1,inst_40118,done);
var state_40250__$1 = (function (){var statearr_40256 = state_40250;
(statearr_40256[(11)] = inst_40198__$1);

return statearr_40256;
})();
if(cljs.core.truth_(inst_40199)){
var statearr_40257_40339 = state_40250__$1;
(statearr_40257_40339[(1)] = (30));

} else {
var statearr_40258_40340 = state_40250__$1;
(statearr_40258_40340[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (1))){
var state_40250__$1 = state_40250;
var statearr_40259_40341 = state_40250__$1;
(statearr_40259_40341[(2)] = null);

(statearr_40259_40341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (24))){
var inst_40149 = (state_40250[(7)]);
var inst_40168 = (state_40250[(2)]);
var inst_40169 = cljs.core.next.call(null,inst_40149);
var inst_40127 = inst_40169;
var inst_40128 = null;
var inst_40129 = (0);
var inst_40130 = (0);
var state_40250__$1 = (function (){var statearr_40260 = state_40250;
(statearr_40260[(13)] = inst_40127);

(statearr_40260[(14)] = inst_40129);

(statearr_40260[(15)] = inst_40128);

(statearr_40260[(16)] = inst_40130);

(statearr_40260[(17)] = inst_40168);

return statearr_40260;
})();
var statearr_40261_40342 = state_40250__$1;
(statearr_40261_40342[(2)] = null);

(statearr_40261_40342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (39))){
var state_40250__$1 = state_40250;
var statearr_40265_40343 = state_40250__$1;
(statearr_40265_40343[(2)] = null);

(statearr_40265_40343[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (4))){
var inst_40118 = (state_40250[(12)]);
var inst_40118__$1 = (state_40250[(2)]);
var inst_40119 = (inst_40118__$1 == null);
var state_40250__$1 = (function (){var statearr_40266 = state_40250;
(statearr_40266[(12)] = inst_40118__$1);

return statearr_40266;
})();
if(cljs.core.truth_(inst_40119)){
var statearr_40267_40344 = state_40250__$1;
(statearr_40267_40344[(1)] = (5));

} else {
var statearr_40268_40345 = state_40250__$1;
(statearr_40268_40345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (15))){
var inst_40127 = (state_40250[(13)]);
var inst_40129 = (state_40250[(14)]);
var inst_40128 = (state_40250[(15)]);
var inst_40130 = (state_40250[(16)]);
var inst_40145 = (state_40250[(2)]);
var inst_40146 = (inst_40130 + (1));
var tmp40262 = inst_40127;
var tmp40263 = inst_40129;
var tmp40264 = inst_40128;
var inst_40127__$1 = tmp40262;
var inst_40128__$1 = tmp40264;
var inst_40129__$1 = tmp40263;
var inst_40130__$1 = inst_40146;
var state_40250__$1 = (function (){var statearr_40269 = state_40250;
(statearr_40269[(13)] = inst_40127__$1);

(statearr_40269[(14)] = inst_40129__$1);

(statearr_40269[(15)] = inst_40128__$1);

(statearr_40269[(16)] = inst_40130__$1);

(statearr_40269[(18)] = inst_40145);

return statearr_40269;
})();
var statearr_40270_40346 = state_40250__$1;
(statearr_40270_40346[(2)] = null);

(statearr_40270_40346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (21))){
var inst_40172 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
var statearr_40274_40347 = state_40250__$1;
(statearr_40274_40347[(2)] = inst_40172);

(statearr_40274_40347[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (31))){
var inst_40198 = (state_40250[(11)]);
var inst_40202 = done.call(null,null);
var inst_40203 = cljs.core.async.untap_STAR_.call(null,m,inst_40198);
var state_40250__$1 = (function (){var statearr_40275 = state_40250;
(statearr_40275[(19)] = inst_40202);

return statearr_40275;
})();
var statearr_40276_40348 = state_40250__$1;
(statearr_40276_40348[(2)] = inst_40203);

(statearr_40276_40348[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (32))){
var inst_40192 = (state_40250[(20)]);
var inst_40193 = (state_40250[(9)]);
var inst_40191 = (state_40250[(10)]);
var inst_40190 = (state_40250[(21)]);
var inst_40205 = (state_40250[(2)]);
var inst_40206 = (inst_40193 + (1));
var tmp40271 = inst_40192;
var tmp40272 = inst_40191;
var tmp40273 = inst_40190;
var inst_40190__$1 = tmp40273;
var inst_40191__$1 = tmp40272;
var inst_40192__$1 = tmp40271;
var inst_40193__$1 = inst_40206;
var state_40250__$1 = (function (){var statearr_40277 = state_40250;
(statearr_40277[(20)] = inst_40192__$1);

(statearr_40277[(22)] = inst_40205);

(statearr_40277[(9)] = inst_40193__$1);

(statearr_40277[(10)] = inst_40191__$1);

(statearr_40277[(21)] = inst_40190__$1);

return statearr_40277;
})();
var statearr_40278_40349 = state_40250__$1;
(statearr_40278_40349[(2)] = null);

(statearr_40278_40349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (40))){
var inst_40218 = (state_40250[(23)]);
var inst_40222 = done.call(null,null);
var inst_40223 = cljs.core.async.untap_STAR_.call(null,m,inst_40218);
var state_40250__$1 = (function (){var statearr_40279 = state_40250;
(statearr_40279[(24)] = inst_40222);

return statearr_40279;
})();
var statearr_40280_40350 = state_40250__$1;
(statearr_40280_40350[(2)] = inst_40223);

(statearr_40280_40350[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (33))){
var inst_40209 = (state_40250[(25)]);
var inst_40211 = cljs.core.chunked_seq_QMARK_.call(null,inst_40209);
var state_40250__$1 = state_40250;
if(inst_40211){
var statearr_40281_40351 = state_40250__$1;
(statearr_40281_40351[(1)] = (36));

} else {
var statearr_40282_40352 = state_40250__$1;
(statearr_40282_40352[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (13))){
var inst_40139 = (state_40250[(26)]);
var inst_40142 = cljs.core.async.close_BANG_.call(null,inst_40139);
var state_40250__$1 = state_40250;
var statearr_40283_40353 = state_40250__$1;
(statearr_40283_40353[(2)] = inst_40142);

(statearr_40283_40353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (22))){
var inst_40162 = (state_40250[(8)]);
var inst_40165 = cljs.core.async.close_BANG_.call(null,inst_40162);
var state_40250__$1 = state_40250;
var statearr_40284_40354 = state_40250__$1;
(statearr_40284_40354[(2)] = inst_40165);

(statearr_40284_40354[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (36))){
var inst_40209 = (state_40250[(25)]);
var inst_40213 = cljs.core.chunk_first.call(null,inst_40209);
var inst_40214 = cljs.core.chunk_rest.call(null,inst_40209);
var inst_40215 = cljs.core.count.call(null,inst_40213);
var inst_40190 = inst_40214;
var inst_40191 = inst_40213;
var inst_40192 = inst_40215;
var inst_40193 = (0);
var state_40250__$1 = (function (){var statearr_40285 = state_40250;
(statearr_40285[(20)] = inst_40192);

(statearr_40285[(9)] = inst_40193);

(statearr_40285[(10)] = inst_40191);

(statearr_40285[(21)] = inst_40190);

return statearr_40285;
})();
var statearr_40286_40355 = state_40250__$1;
(statearr_40286_40355[(2)] = null);

(statearr_40286_40355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (41))){
var inst_40209 = (state_40250[(25)]);
var inst_40225 = (state_40250[(2)]);
var inst_40226 = cljs.core.next.call(null,inst_40209);
var inst_40190 = inst_40226;
var inst_40191 = null;
var inst_40192 = (0);
var inst_40193 = (0);
var state_40250__$1 = (function (){var statearr_40287 = state_40250;
(statearr_40287[(20)] = inst_40192);

(statearr_40287[(9)] = inst_40193);

(statearr_40287[(10)] = inst_40191);

(statearr_40287[(21)] = inst_40190);

(statearr_40287[(27)] = inst_40225);

return statearr_40287;
})();
var statearr_40288_40356 = state_40250__$1;
(statearr_40288_40356[(2)] = null);

(statearr_40288_40356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (43))){
var state_40250__$1 = state_40250;
var statearr_40289_40357 = state_40250__$1;
(statearr_40289_40357[(2)] = null);

(statearr_40289_40357[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (29))){
var inst_40234 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
var statearr_40290_40358 = state_40250__$1;
(statearr_40290_40358[(2)] = inst_40234);

(statearr_40290_40358[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (44))){
var inst_40243 = (state_40250[(2)]);
var state_40250__$1 = (function (){var statearr_40291 = state_40250;
(statearr_40291[(28)] = inst_40243);

return statearr_40291;
})();
var statearr_40292_40359 = state_40250__$1;
(statearr_40292_40359[(2)] = null);

(statearr_40292_40359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (6))){
var inst_40182 = (state_40250[(29)]);
var inst_40181 = cljs.core.deref.call(null,cs);
var inst_40182__$1 = cljs.core.keys.call(null,inst_40181);
var inst_40183 = cljs.core.count.call(null,inst_40182__$1);
var inst_40184 = cljs.core.reset_BANG_.call(null,dctr,inst_40183);
var inst_40189 = cljs.core.seq.call(null,inst_40182__$1);
var inst_40190 = inst_40189;
var inst_40191 = null;
var inst_40192 = (0);
var inst_40193 = (0);
var state_40250__$1 = (function (){var statearr_40293 = state_40250;
(statearr_40293[(20)] = inst_40192);

(statearr_40293[(9)] = inst_40193);

(statearr_40293[(10)] = inst_40191);

(statearr_40293[(30)] = inst_40184);

(statearr_40293[(21)] = inst_40190);

(statearr_40293[(29)] = inst_40182__$1);

return statearr_40293;
})();
var statearr_40294_40360 = state_40250__$1;
(statearr_40294_40360[(2)] = null);

(statearr_40294_40360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (28))){
var inst_40190 = (state_40250[(21)]);
var inst_40209 = (state_40250[(25)]);
var inst_40209__$1 = cljs.core.seq.call(null,inst_40190);
var state_40250__$1 = (function (){var statearr_40295 = state_40250;
(statearr_40295[(25)] = inst_40209__$1);

return statearr_40295;
})();
if(inst_40209__$1){
var statearr_40296_40361 = state_40250__$1;
(statearr_40296_40361[(1)] = (33));

} else {
var statearr_40297_40362 = state_40250__$1;
(statearr_40297_40362[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (25))){
var inst_40192 = (state_40250[(20)]);
var inst_40193 = (state_40250[(9)]);
var inst_40195 = (inst_40193 < inst_40192);
var inst_40196 = inst_40195;
var state_40250__$1 = state_40250;
if(cljs.core.truth_(inst_40196)){
var statearr_40298_40363 = state_40250__$1;
(statearr_40298_40363[(1)] = (27));

} else {
var statearr_40299_40364 = state_40250__$1;
(statearr_40299_40364[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (34))){
var state_40250__$1 = state_40250;
var statearr_40300_40365 = state_40250__$1;
(statearr_40300_40365[(2)] = null);

(statearr_40300_40365[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (17))){
var state_40250__$1 = state_40250;
var statearr_40301_40366 = state_40250__$1;
(statearr_40301_40366[(2)] = null);

(statearr_40301_40366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (3))){
var inst_40248 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40250__$1,inst_40248);
} else {
if((state_val_40251 === (12))){
var inst_40177 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
var statearr_40302_40367 = state_40250__$1;
(statearr_40302_40367[(2)] = inst_40177);

(statearr_40302_40367[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (2))){
var state_40250__$1 = state_40250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40250__$1,(4),ch);
} else {
if((state_val_40251 === (23))){
var state_40250__$1 = state_40250;
var statearr_40303_40368 = state_40250__$1;
(statearr_40303_40368[(2)] = null);

(statearr_40303_40368[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (35))){
var inst_40232 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
var statearr_40304_40369 = state_40250__$1;
(statearr_40304_40369[(2)] = inst_40232);

(statearr_40304_40369[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (19))){
var inst_40149 = (state_40250[(7)]);
var inst_40153 = cljs.core.chunk_first.call(null,inst_40149);
var inst_40154 = cljs.core.chunk_rest.call(null,inst_40149);
var inst_40155 = cljs.core.count.call(null,inst_40153);
var inst_40127 = inst_40154;
var inst_40128 = inst_40153;
var inst_40129 = inst_40155;
var inst_40130 = (0);
var state_40250__$1 = (function (){var statearr_40305 = state_40250;
(statearr_40305[(13)] = inst_40127);

(statearr_40305[(14)] = inst_40129);

(statearr_40305[(15)] = inst_40128);

(statearr_40305[(16)] = inst_40130);

return statearr_40305;
})();
var statearr_40306_40370 = state_40250__$1;
(statearr_40306_40370[(2)] = null);

(statearr_40306_40370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (11))){
var inst_40149 = (state_40250[(7)]);
var inst_40127 = (state_40250[(13)]);
var inst_40149__$1 = cljs.core.seq.call(null,inst_40127);
var state_40250__$1 = (function (){var statearr_40307 = state_40250;
(statearr_40307[(7)] = inst_40149__$1);

return statearr_40307;
})();
if(inst_40149__$1){
var statearr_40308_40371 = state_40250__$1;
(statearr_40308_40371[(1)] = (16));

} else {
var statearr_40309_40372 = state_40250__$1;
(statearr_40309_40372[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (9))){
var inst_40179 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
var statearr_40310_40373 = state_40250__$1;
(statearr_40310_40373[(2)] = inst_40179);

(statearr_40310_40373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (5))){
var inst_40125 = cljs.core.deref.call(null,cs);
var inst_40126 = cljs.core.seq.call(null,inst_40125);
var inst_40127 = inst_40126;
var inst_40128 = null;
var inst_40129 = (0);
var inst_40130 = (0);
var state_40250__$1 = (function (){var statearr_40311 = state_40250;
(statearr_40311[(13)] = inst_40127);

(statearr_40311[(14)] = inst_40129);

(statearr_40311[(15)] = inst_40128);

(statearr_40311[(16)] = inst_40130);

return statearr_40311;
})();
var statearr_40312_40374 = state_40250__$1;
(statearr_40312_40374[(2)] = null);

(statearr_40312_40374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (14))){
var state_40250__$1 = state_40250;
var statearr_40313_40375 = state_40250__$1;
(statearr_40313_40375[(2)] = null);

(statearr_40313_40375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (45))){
var inst_40240 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
var statearr_40314_40376 = state_40250__$1;
(statearr_40314_40376[(2)] = inst_40240);

(statearr_40314_40376[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (26))){
var inst_40182 = (state_40250[(29)]);
var inst_40236 = (state_40250[(2)]);
var inst_40237 = cljs.core.seq.call(null,inst_40182);
var state_40250__$1 = (function (){var statearr_40315 = state_40250;
(statearr_40315[(31)] = inst_40236);

return statearr_40315;
})();
if(inst_40237){
var statearr_40316_40377 = state_40250__$1;
(statearr_40316_40377[(1)] = (42));

} else {
var statearr_40317_40378 = state_40250__$1;
(statearr_40317_40378[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (16))){
var inst_40149 = (state_40250[(7)]);
var inst_40151 = cljs.core.chunked_seq_QMARK_.call(null,inst_40149);
var state_40250__$1 = state_40250;
if(inst_40151){
var statearr_40318_40379 = state_40250__$1;
(statearr_40318_40379[(1)] = (19));

} else {
var statearr_40319_40380 = state_40250__$1;
(statearr_40319_40380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (38))){
var inst_40229 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
var statearr_40320_40381 = state_40250__$1;
(statearr_40320_40381[(2)] = inst_40229);

(statearr_40320_40381[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (30))){
var state_40250__$1 = state_40250;
var statearr_40321_40382 = state_40250__$1;
(statearr_40321_40382[(2)] = null);

(statearr_40321_40382[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (10))){
var inst_40128 = (state_40250[(15)]);
var inst_40130 = (state_40250[(16)]);
var inst_40138 = cljs.core._nth.call(null,inst_40128,inst_40130);
var inst_40139 = cljs.core.nth.call(null,inst_40138,(0),null);
var inst_40140 = cljs.core.nth.call(null,inst_40138,(1),null);
var state_40250__$1 = (function (){var statearr_40322 = state_40250;
(statearr_40322[(26)] = inst_40139);

return statearr_40322;
})();
if(cljs.core.truth_(inst_40140)){
var statearr_40323_40383 = state_40250__$1;
(statearr_40323_40383[(1)] = (13));

} else {
var statearr_40324_40384 = state_40250__$1;
(statearr_40324_40384[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (18))){
var inst_40175 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
var statearr_40325_40385 = state_40250__$1;
(statearr_40325_40385[(2)] = inst_40175);

(statearr_40325_40385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (42))){
var state_40250__$1 = state_40250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40250__$1,(45),dchan);
} else {
if((state_val_40251 === (37))){
var inst_40218 = (state_40250[(23)]);
var inst_40209 = (state_40250[(25)]);
var inst_40118 = (state_40250[(12)]);
var inst_40218__$1 = cljs.core.first.call(null,inst_40209);
var inst_40219 = cljs.core.async.put_BANG_.call(null,inst_40218__$1,inst_40118,done);
var state_40250__$1 = (function (){var statearr_40326 = state_40250;
(statearr_40326[(23)] = inst_40218__$1);

return statearr_40326;
})();
if(cljs.core.truth_(inst_40219)){
var statearr_40327_40386 = state_40250__$1;
(statearr_40327_40386[(1)] = (39));

} else {
var statearr_40328_40387 = state_40250__$1;
(statearr_40328_40387[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (8))){
var inst_40129 = (state_40250[(14)]);
var inst_40130 = (state_40250[(16)]);
var inst_40132 = (inst_40130 < inst_40129);
var inst_40133 = inst_40132;
var state_40250__$1 = state_40250;
if(cljs.core.truth_(inst_40133)){
var statearr_40329_40388 = state_40250__$1;
(statearr_40329_40388[(1)] = (10));

} else {
var statearr_40330_40389 = state_40250__$1;
(statearr_40330_40389[(1)] = (11));

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
});})(c__39516__auto___40335,cs,m,dchan,dctr,done))
;
return ((function (switch__39426__auto__,c__39516__auto___40335,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__39427__auto__ = null;
var cljs$core$async$mult_$_state_machine__39427__auto____0 = (function (){
var statearr_40331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40331[(0)] = cljs$core$async$mult_$_state_machine__39427__auto__);

(statearr_40331[(1)] = (1));

return statearr_40331;
});
var cljs$core$async$mult_$_state_machine__39427__auto____1 = (function (state_40250){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_40250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e40332){if((e40332 instanceof Object)){
var ex__39430__auto__ = e40332;
var statearr_40333_40390 = state_40250;
(statearr_40333_40390[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40391 = state_40250;
state_40250 = G__40391;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39427__auto__ = function(state_40250){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39427__auto____1.call(this,state_40250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39427__auto____0;
cljs$core$async$mult_$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39427__auto____1;
return cljs$core$async$mult_$_state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto___40335,cs,m,dchan,dctr,done))
})();
var state__39518__auto__ = (function (){var statearr_40334 = f__39517__auto__.call(null);
(statearr_40334[(6)] = c__39516__auto___40335);

return statearr_40334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto___40335,cs,m,dchan,dctr,done))
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
var G__40393 = arguments.length;
switch (G__40393) {
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
var len__4499__auto___40405 = arguments.length;
var i__4500__auto___40406 = (0);
while(true){
if((i__4500__auto___40406 < len__4499__auto___40405)){
args__4502__auto__.push((arguments[i__4500__auto___40406]));

var G__40407 = (i__4500__auto___40406 + (1));
i__4500__auto___40406 = G__40407;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40399){
var map__40400 = p__40399;
var map__40400__$1 = ((((!((map__40400 == null)))?(((((map__40400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40400):map__40400);
var opts = map__40400__$1;
var statearr_40402_40408 = state;
(statearr_40402_40408[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__40400,map__40400__$1,opts){
return (function (val){
var statearr_40403_40409 = state;
(statearr_40403_40409[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40400,map__40400__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_40404_40410 = state;
(statearr_40404_40410[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40395){
var G__40396 = cljs.core.first.call(null,seq40395);
var seq40395__$1 = cljs.core.next.call(null,seq40395);
var G__40397 = cljs.core.first.call(null,seq40395__$1);
var seq40395__$2 = cljs.core.next.call(null,seq40395__$1);
var G__40398 = cljs.core.first.call(null,seq40395__$2);
var seq40395__$3 = cljs.core.next.call(null,seq40395__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40396,G__40397,G__40398,seq40395__$3);
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
if(typeof cljs.core.async.t_cljs$core$async40411 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40411 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40412){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40412 = meta40412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40413,meta40412__$1){
var self__ = this;
var _40413__$1 = this;
return (new cljs.core.async.t_cljs$core$async40411(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40412__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40413){
var self__ = this;
var _40413__$1 = this;
return self__.meta40412;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async40411.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40412","meta40412",-868054381,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40411";

cljs.core.async.t_cljs$core$async40411.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40411");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40411.
 */
cljs.core.async.__GT_t_cljs$core$async40411 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40411(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40412){
return (new cljs.core.async.t_cljs$core$async40411(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40412));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40411(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39516__auto___40575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto___40575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto___40575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40515){
var state_val_40516 = (state_40515[(1)]);
if((state_val_40516 === (7))){
var inst_40430 = (state_40515[(2)]);
var state_40515__$1 = state_40515;
var statearr_40517_40576 = state_40515__$1;
(statearr_40517_40576[(2)] = inst_40430);

(statearr_40517_40576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (20))){
var inst_40442 = (state_40515[(7)]);
var state_40515__$1 = state_40515;
var statearr_40518_40577 = state_40515__$1;
(statearr_40518_40577[(2)] = inst_40442);

(statearr_40518_40577[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (27))){
var state_40515__$1 = state_40515;
var statearr_40519_40578 = state_40515__$1;
(statearr_40519_40578[(2)] = null);

(statearr_40519_40578[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (1))){
var inst_40417 = (state_40515[(8)]);
var inst_40417__$1 = calc_state.call(null);
var inst_40419 = (inst_40417__$1 == null);
var inst_40420 = cljs.core.not.call(null,inst_40419);
var state_40515__$1 = (function (){var statearr_40520 = state_40515;
(statearr_40520[(8)] = inst_40417__$1);

return statearr_40520;
})();
if(inst_40420){
var statearr_40521_40579 = state_40515__$1;
(statearr_40521_40579[(1)] = (2));

} else {
var statearr_40522_40580 = state_40515__$1;
(statearr_40522_40580[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (24))){
var inst_40475 = (state_40515[(9)]);
var inst_40489 = (state_40515[(10)]);
var inst_40466 = (state_40515[(11)]);
var inst_40489__$1 = inst_40466.call(null,inst_40475);
var state_40515__$1 = (function (){var statearr_40523 = state_40515;
(statearr_40523[(10)] = inst_40489__$1);

return statearr_40523;
})();
if(cljs.core.truth_(inst_40489__$1)){
var statearr_40524_40581 = state_40515__$1;
(statearr_40524_40581[(1)] = (29));

} else {
var statearr_40525_40582 = state_40515__$1;
(statearr_40525_40582[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (4))){
var inst_40433 = (state_40515[(2)]);
var state_40515__$1 = state_40515;
if(cljs.core.truth_(inst_40433)){
var statearr_40526_40583 = state_40515__$1;
(statearr_40526_40583[(1)] = (8));

} else {
var statearr_40527_40584 = state_40515__$1;
(statearr_40527_40584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (15))){
var inst_40460 = (state_40515[(2)]);
var state_40515__$1 = state_40515;
if(cljs.core.truth_(inst_40460)){
var statearr_40528_40585 = state_40515__$1;
(statearr_40528_40585[(1)] = (19));

} else {
var statearr_40529_40586 = state_40515__$1;
(statearr_40529_40586[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (21))){
var inst_40465 = (state_40515[(12)]);
var inst_40465__$1 = (state_40515[(2)]);
var inst_40466 = cljs.core.get.call(null,inst_40465__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40467 = cljs.core.get.call(null,inst_40465__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40468 = cljs.core.get.call(null,inst_40465__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40515__$1 = (function (){var statearr_40530 = state_40515;
(statearr_40530[(13)] = inst_40467);

(statearr_40530[(12)] = inst_40465__$1);

(statearr_40530[(11)] = inst_40466);

return statearr_40530;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40515__$1,(22),inst_40468);
} else {
if((state_val_40516 === (31))){
var inst_40497 = (state_40515[(2)]);
var state_40515__$1 = state_40515;
if(cljs.core.truth_(inst_40497)){
var statearr_40531_40587 = state_40515__$1;
(statearr_40531_40587[(1)] = (32));

} else {
var statearr_40532_40588 = state_40515__$1;
(statearr_40532_40588[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (32))){
var inst_40474 = (state_40515[(14)]);
var state_40515__$1 = state_40515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40515__$1,(35),out,inst_40474);
} else {
if((state_val_40516 === (33))){
var inst_40465 = (state_40515[(12)]);
var inst_40442 = inst_40465;
var state_40515__$1 = (function (){var statearr_40533 = state_40515;
(statearr_40533[(7)] = inst_40442);

return statearr_40533;
})();
var statearr_40534_40589 = state_40515__$1;
(statearr_40534_40589[(2)] = null);

(statearr_40534_40589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (13))){
var inst_40442 = (state_40515[(7)]);
var inst_40449 = inst_40442.cljs$lang$protocol_mask$partition0$;
var inst_40450 = (inst_40449 & (64));
var inst_40451 = inst_40442.cljs$core$ISeq$;
var inst_40452 = (cljs.core.PROTOCOL_SENTINEL === inst_40451);
var inst_40453 = ((inst_40450) || (inst_40452));
var state_40515__$1 = state_40515;
if(cljs.core.truth_(inst_40453)){
var statearr_40535_40590 = state_40515__$1;
(statearr_40535_40590[(1)] = (16));

} else {
var statearr_40536_40591 = state_40515__$1;
(statearr_40536_40591[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (22))){
var inst_40475 = (state_40515[(9)]);
var inst_40474 = (state_40515[(14)]);
var inst_40473 = (state_40515[(2)]);
var inst_40474__$1 = cljs.core.nth.call(null,inst_40473,(0),null);
var inst_40475__$1 = cljs.core.nth.call(null,inst_40473,(1),null);
var inst_40476 = (inst_40474__$1 == null);
var inst_40477 = cljs.core._EQ_.call(null,inst_40475__$1,change);
var inst_40478 = ((inst_40476) || (inst_40477));
var state_40515__$1 = (function (){var statearr_40537 = state_40515;
(statearr_40537[(9)] = inst_40475__$1);

(statearr_40537[(14)] = inst_40474__$1);

return statearr_40537;
})();
if(cljs.core.truth_(inst_40478)){
var statearr_40538_40592 = state_40515__$1;
(statearr_40538_40592[(1)] = (23));

} else {
var statearr_40539_40593 = state_40515__$1;
(statearr_40539_40593[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (36))){
var inst_40465 = (state_40515[(12)]);
var inst_40442 = inst_40465;
var state_40515__$1 = (function (){var statearr_40540 = state_40515;
(statearr_40540[(7)] = inst_40442);

return statearr_40540;
})();
var statearr_40541_40594 = state_40515__$1;
(statearr_40541_40594[(2)] = null);

(statearr_40541_40594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (29))){
var inst_40489 = (state_40515[(10)]);
var state_40515__$1 = state_40515;
var statearr_40542_40595 = state_40515__$1;
(statearr_40542_40595[(2)] = inst_40489);

(statearr_40542_40595[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (6))){
var state_40515__$1 = state_40515;
var statearr_40543_40596 = state_40515__$1;
(statearr_40543_40596[(2)] = false);

(statearr_40543_40596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (28))){
var inst_40485 = (state_40515[(2)]);
var inst_40486 = calc_state.call(null);
var inst_40442 = inst_40486;
var state_40515__$1 = (function (){var statearr_40544 = state_40515;
(statearr_40544[(15)] = inst_40485);

(statearr_40544[(7)] = inst_40442);

return statearr_40544;
})();
var statearr_40545_40597 = state_40515__$1;
(statearr_40545_40597[(2)] = null);

(statearr_40545_40597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (25))){
var inst_40511 = (state_40515[(2)]);
var state_40515__$1 = state_40515;
var statearr_40546_40598 = state_40515__$1;
(statearr_40546_40598[(2)] = inst_40511);

(statearr_40546_40598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (34))){
var inst_40509 = (state_40515[(2)]);
var state_40515__$1 = state_40515;
var statearr_40547_40599 = state_40515__$1;
(statearr_40547_40599[(2)] = inst_40509);

(statearr_40547_40599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (17))){
var state_40515__$1 = state_40515;
var statearr_40548_40600 = state_40515__$1;
(statearr_40548_40600[(2)] = false);

(statearr_40548_40600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (3))){
var state_40515__$1 = state_40515;
var statearr_40549_40601 = state_40515__$1;
(statearr_40549_40601[(2)] = false);

(statearr_40549_40601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (12))){
var inst_40513 = (state_40515[(2)]);
var state_40515__$1 = state_40515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40515__$1,inst_40513);
} else {
if((state_val_40516 === (2))){
var inst_40417 = (state_40515[(8)]);
var inst_40422 = inst_40417.cljs$lang$protocol_mask$partition0$;
var inst_40423 = (inst_40422 & (64));
var inst_40424 = inst_40417.cljs$core$ISeq$;
var inst_40425 = (cljs.core.PROTOCOL_SENTINEL === inst_40424);
var inst_40426 = ((inst_40423) || (inst_40425));
var state_40515__$1 = state_40515;
if(cljs.core.truth_(inst_40426)){
var statearr_40550_40602 = state_40515__$1;
(statearr_40550_40602[(1)] = (5));

} else {
var statearr_40551_40603 = state_40515__$1;
(statearr_40551_40603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (23))){
var inst_40474 = (state_40515[(14)]);
var inst_40480 = (inst_40474 == null);
var state_40515__$1 = state_40515;
if(cljs.core.truth_(inst_40480)){
var statearr_40552_40604 = state_40515__$1;
(statearr_40552_40604[(1)] = (26));

} else {
var statearr_40553_40605 = state_40515__$1;
(statearr_40553_40605[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (35))){
var inst_40500 = (state_40515[(2)]);
var state_40515__$1 = state_40515;
if(cljs.core.truth_(inst_40500)){
var statearr_40554_40606 = state_40515__$1;
(statearr_40554_40606[(1)] = (36));

} else {
var statearr_40555_40607 = state_40515__$1;
(statearr_40555_40607[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (19))){
var inst_40442 = (state_40515[(7)]);
var inst_40462 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40442);
var state_40515__$1 = state_40515;
var statearr_40556_40608 = state_40515__$1;
(statearr_40556_40608[(2)] = inst_40462);

(statearr_40556_40608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (11))){
var inst_40442 = (state_40515[(7)]);
var inst_40446 = (inst_40442 == null);
var inst_40447 = cljs.core.not.call(null,inst_40446);
var state_40515__$1 = state_40515;
if(inst_40447){
var statearr_40557_40609 = state_40515__$1;
(statearr_40557_40609[(1)] = (13));

} else {
var statearr_40558_40610 = state_40515__$1;
(statearr_40558_40610[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (9))){
var inst_40417 = (state_40515[(8)]);
var state_40515__$1 = state_40515;
var statearr_40559_40611 = state_40515__$1;
(statearr_40559_40611[(2)] = inst_40417);

(statearr_40559_40611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (5))){
var state_40515__$1 = state_40515;
var statearr_40560_40612 = state_40515__$1;
(statearr_40560_40612[(2)] = true);

(statearr_40560_40612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (14))){
var state_40515__$1 = state_40515;
var statearr_40561_40613 = state_40515__$1;
(statearr_40561_40613[(2)] = false);

(statearr_40561_40613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (26))){
var inst_40475 = (state_40515[(9)]);
var inst_40482 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40475);
var state_40515__$1 = state_40515;
var statearr_40562_40614 = state_40515__$1;
(statearr_40562_40614[(2)] = inst_40482);

(statearr_40562_40614[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (16))){
var state_40515__$1 = state_40515;
var statearr_40563_40615 = state_40515__$1;
(statearr_40563_40615[(2)] = true);

(statearr_40563_40615[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (38))){
var inst_40505 = (state_40515[(2)]);
var state_40515__$1 = state_40515;
var statearr_40564_40616 = state_40515__$1;
(statearr_40564_40616[(2)] = inst_40505);

(statearr_40564_40616[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (30))){
var inst_40467 = (state_40515[(13)]);
var inst_40475 = (state_40515[(9)]);
var inst_40466 = (state_40515[(11)]);
var inst_40492 = cljs.core.empty_QMARK_.call(null,inst_40466);
var inst_40493 = inst_40467.call(null,inst_40475);
var inst_40494 = cljs.core.not.call(null,inst_40493);
var inst_40495 = ((inst_40492) && (inst_40494));
var state_40515__$1 = state_40515;
var statearr_40565_40617 = state_40515__$1;
(statearr_40565_40617[(2)] = inst_40495);

(statearr_40565_40617[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (10))){
var inst_40417 = (state_40515[(8)]);
var inst_40438 = (state_40515[(2)]);
var inst_40439 = cljs.core.get.call(null,inst_40438,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40440 = cljs.core.get.call(null,inst_40438,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40441 = cljs.core.get.call(null,inst_40438,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40442 = inst_40417;
var state_40515__$1 = (function (){var statearr_40566 = state_40515;
(statearr_40566[(16)] = inst_40439);

(statearr_40566[(17)] = inst_40441);

(statearr_40566[(18)] = inst_40440);

(statearr_40566[(7)] = inst_40442);

return statearr_40566;
})();
var statearr_40567_40618 = state_40515__$1;
(statearr_40567_40618[(2)] = null);

(statearr_40567_40618[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (18))){
var inst_40457 = (state_40515[(2)]);
var state_40515__$1 = state_40515;
var statearr_40568_40619 = state_40515__$1;
(statearr_40568_40619[(2)] = inst_40457);

(statearr_40568_40619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (37))){
var state_40515__$1 = state_40515;
var statearr_40569_40620 = state_40515__$1;
(statearr_40569_40620[(2)] = null);

(statearr_40569_40620[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (8))){
var inst_40417 = (state_40515[(8)]);
var inst_40435 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40417);
var state_40515__$1 = state_40515;
var statearr_40570_40621 = state_40515__$1;
(statearr_40570_40621[(2)] = inst_40435);

(statearr_40570_40621[(1)] = (10));


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
});})(c__39516__auto___40575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__39426__auto__,c__39516__auto___40575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__39427__auto__ = null;
var cljs$core$async$mix_$_state_machine__39427__auto____0 = (function (){
var statearr_40571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40571[(0)] = cljs$core$async$mix_$_state_machine__39427__auto__);

(statearr_40571[(1)] = (1));

return statearr_40571;
});
var cljs$core$async$mix_$_state_machine__39427__auto____1 = (function (state_40515){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_40515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e40572){if((e40572 instanceof Object)){
var ex__39430__auto__ = e40572;
var statearr_40573_40622 = state_40515;
(statearr_40573_40622[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40623 = state_40515;
state_40515 = G__40623;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39427__auto__ = function(state_40515){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39427__auto____1.call(this,state_40515);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39427__auto____0;
cljs$core$async$mix_$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39427__auto____1;
return cljs$core$async$mix_$_state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto___40575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__39518__auto__ = (function (){var statearr_40574 = f__39517__auto__.call(null);
(statearr_40574[(6)] = c__39516__auto___40575);

return statearr_40574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto___40575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__40625 = arguments.length;
switch (G__40625) {
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
var G__40629 = arguments.length;
switch (G__40629) {
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
return (function (p1__40627_SHARP_){
if(cljs.core.truth_(p1__40627_SHARP_.call(null,topic))){
return p1__40627_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40627_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40630 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40631){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40631 = meta40631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40632,meta40631__$1){
var self__ = this;
var _40632__$1 = this;
return (new cljs.core.async.t_cljs$core$async40630(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40631__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40632){
var self__ = this;
var _40632__$1 = this;
return self__.meta40631;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40630.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40630.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40630.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40630.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40630.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40630.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40630.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40630.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40631","meta40631",947971860,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40630";

cljs.core.async.t_cljs$core$async40630.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40630");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40630.
 */
cljs.core.async.__GT_t_cljs$core$async40630 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40630(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40631){
return (new cljs.core.async.t_cljs$core$async40630(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40631));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40630(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39516__auto___40750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto___40750,mults,ensure_mult,p){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto___40750,mults,ensure_mult,p){
return (function (state_40704){
var state_val_40705 = (state_40704[(1)]);
if((state_val_40705 === (7))){
var inst_40700 = (state_40704[(2)]);
var state_40704__$1 = state_40704;
var statearr_40706_40751 = state_40704__$1;
(statearr_40706_40751[(2)] = inst_40700);

(statearr_40706_40751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (20))){
var state_40704__$1 = state_40704;
var statearr_40707_40752 = state_40704__$1;
(statearr_40707_40752[(2)] = null);

(statearr_40707_40752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (1))){
var state_40704__$1 = state_40704;
var statearr_40708_40753 = state_40704__$1;
(statearr_40708_40753[(2)] = null);

(statearr_40708_40753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (24))){
var inst_40683 = (state_40704[(7)]);
var inst_40692 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40683);
var state_40704__$1 = state_40704;
var statearr_40709_40754 = state_40704__$1;
(statearr_40709_40754[(2)] = inst_40692);

(statearr_40709_40754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (4))){
var inst_40635 = (state_40704[(8)]);
var inst_40635__$1 = (state_40704[(2)]);
var inst_40636 = (inst_40635__$1 == null);
var state_40704__$1 = (function (){var statearr_40710 = state_40704;
(statearr_40710[(8)] = inst_40635__$1);

return statearr_40710;
})();
if(cljs.core.truth_(inst_40636)){
var statearr_40711_40755 = state_40704__$1;
(statearr_40711_40755[(1)] = (5));

} else {
var statearr_40712_40756 = state_40704__$1;
(statearr_40712_40756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (15))){
var inst_40677 = (state_40704[(2)]);
var state_40704__$1 = state_40704;
var statearr_40713_40757 = state_40704__$1;
(statearr_40713_40757[(2)] = inst_40677);

(statearr_40713_40757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (21))){
var inst_40697 = (state_40704[(2)]);
var state_40704__$1 = (function (){var statearr_40714 = state_40704;
(statearr_40714[(9)] = inst_40697);

return statearr_40714;
})();
var statearr_40715_40758 = state_40704__$1;
(statearr_40715_40758[(2)] = null);

(statearr_40715_40758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (13))){
var inst_40659 = (state_40704[(10)]);
var inst_40661 = cljs.core.chunked_seq_QMARK_.call(null,inst_40659);
var state_40704__$1 = state_40704;
if(inst_40661){
var statearr_40716_40759 = state_40704__$1;
(statearr_40716_40759[(1)] = (16));

} else {
var statearr_40717_40760 = state_40704__$1;
(statearr_40717_40760[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (22))){
var inst_40689 = (state_40704[(2)]);
var state_40704__$1 = state_40704;
if(cljs.core.truth_(inst_40689)){
var statearr_40718_40761 = state_40704__$1;
(statearr_40718_40761[(1)] = (23));

} else {
var statearr_40719_40762 = state_40704__$1;
(statearr_40719_40762[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (6))){
var inst_40685 = (state_40704[(11)]);
var inst_40683 = (state_40704[(7)]);
var inst_40635 = (state_40704[(8)]);
var inst_40683__$1 = topic_fn.call(null,inst_40635);
var inst_40684 = cljs.core.deref.call(null,mults);
var inst_40685__$1 = cljs.core.get.call(null,inst_40684,inst_40683__$1);
var state_40704__$1 = (function (){var statearr_40720 = state_40704;
(statearr_40720[(11)] = inst_40685__$1);

(statearr_40720[(7)] = inst_40683__$1);

return statearr_40720;
})();
if(cljs.core.truth_(inst_40685__$1)){
var statearr_40721_40763 = state_40704__$1;
(statearr_40721_40763[(1)] = (19));

} else {
var statearr_40722_40764 = state_40704__$1;
(statearr_40722_40764[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (25))){
var inst_40694 = (state_40704[(2)]);
var state_40704__$1 = state_40704;
var statearr_40723_40765 = state_40704__$1;
(statearr_40723_40765[(2)] = inst_40694);

(statearr_40723_40765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (17))){
var inst_40659 = (state_40704[(10)]);
var inst_40668 = cljs.core.first.call(null,inst_40659);
var inst_40669 = cljs.core.async.muxch_STAR_.call(null,inst_40668);
var inst_40670 = cljs.core.async.close_BANG_.call(null,inst_40669);
var inst_40671 = cljs.core.next.call(null,inst_40659);
var inst_40645 = inst_40671;
var inst_40646 = null;
var inst_40647 = (0);
var inst_40648 = (0);
var state_40704__$1 = (function (){var statearr_40724 = state_40704;
(statearr_40724[(12)] = inst_40648);

(statearr_40724[(13)] = inst_40646);

(statearr_40724[(14)] = inst_40647);

(statearr_40724[(15)] = inst_40645);

(statearr_40724[(16)] = inst_40670);

return statearr_40724;
})();
var statearr_40725_40766 = state_40704__$1;
(statearr_40725_40766[(2)] = null);

(statearr_40725_40766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (3))){
var inst_40702 = (state_40704[(2)]);
var state_40704__$1 = state_40704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40704__$1,inst_40702);
} else {
if((state_val_40705 === (12))){
var inst_40679 = (state_40704[(2)]);
var state_40704__$1 = state_40704;
var statearr_40726_40767 = state_40704__$1;
(statearr_40726_40767[(2)] = inst_40679);

(statearr_40726_40767[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (2))){
var state_40704__$1 = state_40704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40704__$1,(4),ch);
} else {
if((state_val_40705 === (23))){
var state_40704__$1 = state_40704;
var statearr_40727_40768 = state_40704__$1;
(statearr_40727_40768[(2)] = null);

(statearr_40727_40768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (19))){
var inst_40685 = (state_40704[(11)]);
var inst_40635 = (state_40704[(8)]);
var inst_40687 = cljs.core.async.muxch_STAR_.call(null,inst_40685);
var state_40704__$1 = state_40704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40704__$1,(22),inst_40687,inst_40635);
} else {
if((state_val_40705 === (11))){
var inst_40659 = (state_40704[(10)]);
var inst_40645 = (state_40704[(15)]);
var inst_40659__$1 = cljs.core.seq.call(null,inst_40645);
var state_40704__$1 = (function (){var statearr_40728 = state_40704;
(statearr_40728[(10)] = inst_40659__$1);

return statearr_40728;
})();
if(inst_40659__$1){
var statearr_40729_40769 = state_40704__$1;
(statearr_40729_40769[(1)] = (13));

} else {
var statearr_40730_40770 = state_40704__$1;
(statearr_40730_40770[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (9))){
var inst_40681 = (state_40704[(2)]);
var state_40704__$1 = state_40704;
var statearr_40731_40771 = state_40704__$1;
(statearr_40731_40771[(2)] = inst_40681);

(statearr_40731_40771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (5))){
var inst_40642 = cljs.core.deref.call(null,mults);
var inst_40643 = cljs.core.vals.call(null,inst_40642);
var inst_40644 = cljs.core.seq.call(null,inst_40643);
var inst_40645 = inst_40644;
var inst_40646 = null;
var inst_40647 = (0);
var inst_40648 = (0);
var state_40704__$1 = (function (){var statearr_40732 = state_40704;
(statearr_40732[(12)] = inst_40648);

(statearr_40732[(13)] = inst_40646);

(statearr_40732[(14)] = inst_40647);

(statearr_40732[(15)] = inst_40645);

return statearr_40732;
})();
var statearr_40733_40772 = state_40704__$1;
(statearr_40733_40772[(2)] = null);

(statearr_40733_40772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (14))){
var state_40704__$1 = state_40704;
var statearr_40737_40773 = state_40704__$1;
(statearr_40737_40773[(2)] = null);

(statearr_40737_40773[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (16))){
var inst_40659 = (state_40704[(10)]);
var inst_40663 = cljs.core.chunk_first.call(null,inst_40659);
var inst_40664 = cljs.core.chunk_rest.call(null,inst_40659);
var inst_40665 = cljs.core.count.call(null,inst_40663);
var inst_40645 = inst_40664;
var inst_40646 = inst_40663;
var inst_40647 = inst_40665;
var inst_40648 = (0);
var state_40704__$1 = (function (){var statearr_40738 = state_40704;
(statearr_40738[(12)] = inst_40648);

(statearr_40738[(13)] = inst_40646);

(statearr_40738[(14)] = inst_40647);

(statearr_40738[(15)] = inst_40645);

return statearr_40738;
})();
var statearr_40739_40774 = state_40704__$1;
(statearr_40739_40774[(2)] = null);

(statearr_40739_40774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (10))){
var inst_40648 = (state_40704[(12)]);
var inst_40646 = (state_40704[(13)]);
var inst_40647 = (state_40704[(14)]);
var inst_40645 = (state_40704[(15)]);
var inst_40653 = cljs.core._nth.call(null,inst_40646,inst_40648);
var inst_40654 = cljs.core.async.muxch_STAR_.call(null,inst_40653);
var inst_40655 = cljs.core.async.close_BANG_.call(null,inst_40654);
var inst_40656 = (inst_40648 + (1));
var tmp40734 = inst_40646;
var tmp40735 = inst_40647;
var tmp40736 = inst_40645;
var inst_40645__$1 = tmp40736;
var inst_40646__$1 = tmp40734;
var inst_40647__$1 = tmp40735;
var inst_40648__$1 = inst_40656;
var state_40704__$1 = (function (){var statearr_40740 = state_40704;
(statearr_40740[(12)] = inst_40648__$1);

(statearr_40740[(13)] = inst_40646__$1);

(statearr_40740[(17)] = inst_40655);

(statearr_40740[(14)] = inst_40647__$1);

(statearr_40740[(15)] = inst_40645__$1);

return statearr_40740;
})();
var statearr_40741_40775 = state_40704__$1;
(statearr_40741_40775[(2)] = null);

(statearr_40741_40775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (18))){
var inst_40674 = (state_40704[(2)]);
var state_40704__$1 = state_40704;
var statearr_40742_40776 = state_40704__$1;
(statearr_40742_40776[(2)] = inst_40674);

(statearr_40742_40776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (8))){
var inst_40648 = (state_40704[(12)]);
var inst_40647 = (state_40704[(14)]);
var inst_40650 = (inst_40648 < inst_40647);
var inst_40651 = inst_40650;
var state_40704__$1 = state_40704;
if(cljs.core.truth_(inst_40651)){
var statearr_40743_40777 = state_40704__$1;
(statearr_40743_40777[(1)] = (10));

} else {
var statearr_40744_40778 = state_40704__$1;
(statearr_40744_40778[(1)] = (11));

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
});})(c__39516__auto___40750,mults,ensure_mult,p))
;
return ((function (switch__39426__auto__,c__39516__auto___40750,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__39427__auto__ = null;
var cljs$core$async$state_machine__39427__auto____0 = (function (){
var statearr_40745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40745[(0)] = cljs$core$async$state_machine__39427__auto__);

(statearr_40745[(1)] = (1));

return statearr_40745;
});
var cljs$core$async$state_machine__39427__auto____1 = (function (state_40704){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_40704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e40746){if((e40746 instanceof Object)){
var ex__39430__auto__ = e40746;
var statearr_40747_40779 = state_40704;
(statearr_40747_40779[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40780 = state_40704;
state_40704 = G__40780;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$state_machine__39427__auto__ = function(state_40704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39427__auto____1.call(this,state_40704);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39427__auto____0;
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39427__auto____1;
return cljs$core$async$state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto___40750,mults,ensure_mult,p))
})();
var state__39518__auto__ = (function (){var statearr_40748 = f__39517__auto__.call(null);
(statearr_40748[(6)] = c__39516__auto___40750);

return statearr_40748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto___40750,mults,ensure_mult,p))
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
var G__40782 = arguments.length;
switch (G__40782) {
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
var G__40785 = arguments.length;
switch (G__40785) {
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
var G__40788 = arguments.length;
switch (G__40788) {
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
var c__39516__auto___40855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto___40855,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto___40855,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40827){
var state_val_40828 = (state_40827[(1)]);
if((state_val_40828 === (7))){
var state_40827__$1 = state_40827;
var statearr_40829_40856 = state_40827__$1;
(statearr_40829_40856[(2)] = null);

(statearr_40829_40856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (1))){
var state_40827__$1 = state_40827;
var statearr_40830_40857 = state_40827__$1;
(statearr_40830_40857[(2)] = null);

(statearr_40830_40857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (4))){
var inst_40791 = (state_40827[(7)]);
var inst_40793 = (inst_40791 < cnt);
var state_40827__$1 = state_40827;
if(cljs.core.truth_(inst_40793)){
var statearr_40831_40858 = state_40827__$1;
(statearr_40831_40858[(1)] = (6));

} else {
var statearr_40832_40859 = state_40827__$1;
(statearr_40832_40859[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (15))){
var inst_40823 = (state_40827[(2)]);
var state_40827__$1 = state_40827;
var statearr_40833_40860 = state_40827__$1;
(statearr_40833_40860[(2)] = inst_40823);

(statearr_40833_40860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (13))){
var inst_40816 = cljs.core.async.close_BANG_.call(null,out);
var state_40827__$1 = state_40827;
var statearr_40834_40861 = state_40827__$1;
(statearr_40834_40861[(2)] = inst_40816);

(statearr_40834_40861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (6))){
var state_40827__$1 = state_40827;
var statearr_40835_40862 = state_40827__$1;
(statearr_40835_40862[(2)] = null);

(statearr_40835_40862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (3))){
var inst_40825 = (state_40827[(2)]);
var state_40827__$1 = state_40827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40827__$1,inst_40825);
} else {
if((state_val_40828 === (12))){
var inst_40813 = (state_40827[(8)]);
var inst_40813__$1 = (state_40827[(2)]);
var inst_40814 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40813__$1);
var state_40827__$1 = (function (){var statearr_40836 = state_40827;
(statearr_40836[(8)] = inst_40813__$1);

return statearr_40836;
})();
if(cljs.core.truth_(inst_40814)){
var statearr_40837_40863 = state_40827__$1;
(statearr_40837_40863[(1)] = (13));

} else {
var statearr_40838_40864 = state_40827__$1;
(statearr_40838_40864[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (2))){
var inst_40790 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40791 = (0);
var state_40827__$1 = (function (){var statearr_40839 = state_40827;
(statearr_40839[(7)] = inst_40791);

(statearr_40839[(9)] = inst_40790);

return statearr_40839;
})();
var statearr_40840_40865 = state_40827__$1;
(statearr_40840_40865[(2)] = null);

(statearr_40840_40865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (11))){
var inst_40791 = (state_40827[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40827,(10),Object,null,(9));
var inst_40800 = chs__$1.call(null,inst_40791);
var inst_40801 = done.call(null,inst_40791);
var inst_40802 = cljs.core.async.take_BANG_.call(null,inst_40800,inst_40801);
var state_40827__$1 = state_40827;
var statearr_40841_40866 = state_40827__$1;
(statearr_40841_40866[(2)] = inst_40802);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40827__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (9))){
var inst_40791 = (state_40827[(7)]);
var inst_40804 = (state_40827[(2)]);
var inst_40805 = (inst_40791 + (1));
var inst_40791__$1 = inst_40805;
var state_40827__$1 = (function (){var statearr_40842 = state_40827;
(statearr_40842[(7)] = inst_40791__$1);

(statearr_40842[(10)] = inst_40804);

return statearr_40842;
})();
var statearr_40843_40867 = state_40827__$1;
(statearr_40843_40867[(2)] = null);

(statearr_40843_40867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (5))){
var inst_40811 = (state_40827[(2)]);
var state_40827__$1 = (function (){var statearr_40844 = state_40827;
(statearr_40844[(11)] = inst_40811);

return statearr_40844;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40827__$1,(12),dchan);
} else {
if((state_val_40828 === (14))){
var inst_40813 = (state_40827[(8)]);
var inst_40818 = cljs.core.apply.call(null,f,inst_40813);
var state_40827__$1 = state_40827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40827__$1,(16),out,inst_40818);
} else {
if((state_val_40828 === (16))){
var inst_40820 = (state_40827[(2)]);
var state_40827__$1 = (function (){var statearr_40845 = state_40827;
(statearr_40845[(12)] = inst_40820);

return statearr_40845;
})();
var statearr_40846_40868 = state_40827__$1;
(statearr_40846_40868[(2)] = null);

(statearr_40846_40868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (10))){
var inst_40795 = (state_40827[(2)]);
var inst_40796 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40827__$1 = (function (){var statearr_40847 = state_40827;
(statearr_40847[(13)] = inst_40795);

return statearr_40847;
})();
var statearr_40848_40869 = state_40827__$1;
(statearr_40848_40869[(2)] = inst_40796);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40827__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (8))){
var inst_40809 = (state_40827[(2)]);
var state_40827__$1 = state_40827;
var statearr_40849_40870 = state_40827__$1;
(statearr_40849_40870[(2)] = inst_40809);

(statearr_40849_40870[(1)] = (5));


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
});})(c__39516__auto___40855,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__39426__auto__,c__39516__auto___40855,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__39427__auto__ = null;
var cljs$core$async$state_machine__39427__auto____0 = (function (){
var statearr_40850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40850[(0)] = cljs$core$async$state_machine__39427__auto__);

(statearr_40850[(1)] = (1));

return statearr_40850;
});
var cljs$core$async$state_machine__39427__auto____1 = (function (state_40827){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_40827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e40851){if((e40851 instanceof Object)){
var ex__39430__auto__ = e40851;
var statearr_40852_40871 = state_40827;
(statearr_40852_40871[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40872 = state_40827;
state_40827 = G__40872;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$state_machine__39427__auto__ = function(state_40827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39427__auto____1.call(this,state_40827);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39427__auto____0;
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39427__auto____1;
return cljs$core$async$state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto___40855,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__39518__auto__ = (function (){var statearr_40853 = f__39517__auto__.call(null);
(statearr_40853[(6)] = c__39516__auto___40855);

return statearr_40853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto___40855,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__40875 = arguments.length;
switch (G__40875) {
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
var c__39516__auto___40929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto___40929,out){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto___40929,out){
return (function (state_40907){
var state_val_40908 = (state_40907[(1)]);
if((state_val_40908 === (7))){
var inst_40887 = (state_40907[(7)]);
var inst_40886 = (state_40907[(8)]);
var inst_40886__$1 = (state_40907[(2)]);
var inst_40887__$1 = cljs.core.nth.call(null,inst_40886__$1,(0),null);
var inst_40888 = cljs.core.nth.call(null,inst_40886__$1,(1),null);
var inst_40889 = (inst_40887__$1 == null);
var state_40907__$1 = (function (){var statearr_40909 = state_40907;
(statearr_40909[(9)] = inst_40888);

(statearr_40909[(7)] = inst_40887__$1);

(statearr_40909[(8)] = inst_40886__$1);

return statearr_40909;
})();
if(cljs.core.truth_(inst_40889)){
var statearr_40910_40930 = state_40907__$1;
(statearr_40910_40930[(1)] = (8));

} else {
var statearr_40911_40931 = state_40907__$1;
(statearr_40911_40931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40908 === (1))){
var inst_40876 = cljs.core.vec.call(null,chs);
var inst_40877 = inst_40876;
var state_40907__$1 = (function (){var statearr_40912 = state_40907;
(statearr_40912[(10)] = inst_40877);

return statearr_40912;
})();
var statearr_40913_40932 = state_40907__$1;
(statearr_40913_40932[(2)] = null);

(statearr_40913_40932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40908 === (4))){
var inst_40877 = (state_40907[(10)]);
var state_40907__$1 = state_40907;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40907__$1,(7),inst_40877);
} else {
if((state_val_40908 === (6))){
var inst_40903 = (state_40907[(2)]);
var state_40907__$1 = state_40907;
var statearr_40914_40933 = state_40907__$1;
(statearr_40914_40933[(2)] = inst_40903);

(statearr_40914_40933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40908 === (3))){
var inst_40905 = (state_40907[(2)]);
var state_40907__$1 = state_40907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40907__$1,inst_40905);
} else {
if((state_val_40908 === (2))){
var inst_40877 = (state_40907[(10)]);
var inst_40879 = cljs.core.count.call(null,inst_40877);
var inst_40880 = (inst_40879 > (0));
var state_40907__$1 = state_40907;
if(cljs.core.truth_(inst_40880)){
var statearr_40916_40934 = state_40907__$1;
(statearr_40916_40934[(1)] = (4));

} else {
var statearr_40917_40935 = state_40907__$1;
(statearr_40917_40935[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40908 === (11))){
var inst_40877 = (state_40907[(10)]);
var inst_40896 = (state_40907[(2)]);
var tmp40915 = inst_40877;
var inst_40877__$1 = tmp40915;
var state_40907__$1 = (function (){var statearr_40918 = state_40907;
(statearr_40918[(11)] = inst_40896);

(statearr_40918[(10)] = inst_40877__$1);

return statearr_40918;
})();
var statearr_40919_40936 = state_40907__$1;
(statearr_40919_40936[(2)] = null);

(statearr_40919_40936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40908 === (9))){
var inst_40887 = (state_40907[(7)]);
var state_40907__$1 = state_40907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40907__$1,(11),out,inst_40887);
} else {
if((state_val_40908 === (5))){
var inst_40901 = cljs.core.async.close_BANG_.call(null,out);
var state_40907__$1 = state_40907;
var statearr_40920_40937 = state_40907__$1;
(statearr_40920_40937[(2)] = inst_40901);

(statearr_40920_40937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40908 === (10))){
var inst_40899 = (state_40907[(2)]);
var state_40907__$1 = state_40907;
var statearr_40921_40938 = state_40907__$1;
(statearr_40921_40938[(2)] = inst_40899);

(statearr_40921_40938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40908 === (8))){
var inst_40888 = (state_40907[(9)]);
var inst_40887 = (state_40907[(7)]);
var inst_40877 = (state_40907[(10)]);
var inst_40886 = (state_40907[(8)]);
var inst_40891 = (function (){var cs = inst_40877;
var vec__40882 = inst_40886;
var v = inst_40887;
var c = inst_40888;
return ((function (cs,vec__40882,v,c,inst_40888,inst_40887,inst_40877,inst_40886,state_val_40908,c__39516__auto___40929,out){
return (function (p1__40873_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40873_SHARP_);
});
;})(cs,vec__40882,v,c,inst_40888,inst_40887,inst_40877,inst_40886,state_val_40908,c__39516__auto___40929,out))
})();
var inst_40892 = cljs.core.filterv.call(null,inst_40891,inst_40877);
var inst_40877__$1 = inst_40892;
var state_40907__$1 = (function (){var statearr_40922 = state_40907;
(statearr_40922[(10)] = inst_40877__$1);

return statearr_40922;
})();
var statearr_40923_40939 = state_40907__$1;
(statearr_40923_40939[(2)] = null);

(statearr_40923_40939[(1)] = (2));


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
});})(c__39516__auto___40929,out))
;
return ((function (switch__39426__auto__,c__39516__auto___40929,out){
return (function() {
var cljs$core$async$state_machine__39427__auto__ = null;
var cljs$core$async$state_machine__39427__auto____0 = (function (){
var statearr_40924 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40924[(0)] = cljs$core$async$state_machine__39427__auto__);

(statearr_40924[(1)] = (1));

return statearr_40924;
});
var cljs$core$async$state_machine__39427__auto____1 = (function (state_40907){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_40907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e40925){if((e40925 instanceof Object)){
var ex__39430__auto__ = e40925;
var statearr_40926_40940 = state_40907;
(statearr_40926_40940[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40941 = state_40907;
state_40907 = G__40941;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$state_machine__39427__auto__ = function(state_40907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39427__auto____1.call(this,state_40907);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39427__auto____0;
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39427__auto____1;
return cljs$core$async$state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto___40929,out))
})();
var state__39518__auto__ = (function (){var statearr_40927 = f__39517__auto__.call(null);
(statearr_40927[(6)] = c__39516__auto___40929);

return statearr_40927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto___40929,out))
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
var G__40943 = arguments.length;
switch (G__40943) {
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
var c__39516__auto___40988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto___40988,out){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto___40988,out){
return (function (state_40967){
var state_val_40968 = (state_40967[(1)]);
if((state_val_40968 === (7))){
var inst_40949 = (state_40967[(7)]);
var inst_40949__$1 = (state_40967[(2)]);
var inst_40950 = (inst_40949__$1 == null);
var inst_40951 = cljs.core.not.call(null,inst_40950);
var state_40967__$1 = (function (){var statearr_40969 = state_40967;
(statearr_40969[(7)] = inst_40949__$1);

return statearr_40969;
})();
if(inst_40951){
var statearr_40970_40989 = state_40967__$1;
(statearr_40970_40989[(1)] = (8));

} else {
var statearr_40971_40990 = state_40967__$1;
(statearr_40971_40990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (1))){
var inst_40944 = (0);
var state_40967__$1 = (function (){var statearr_40972 = state_40967;
(statearr_40972[(8)] = inst_40944);

return statearr_40972;
})();
var statearr_40973_40991 = state_40967__$1;
(statearr_40973_40991[(2)] = null);

(statearr_40973_40991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (4))){
var state_40967__$1 = state_40967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40967__$1,(7),ch);
} else {
if((state_val_40968 === (6))){
var inst_40962 = (state_40967[(2)]);
var state_40967__$1 = state_40967;
var statearr_40974_40992 = state_40967__$1;
(statearr_40974_40992[(2)] = inst_40962);

(statearr_40974_40992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (3))){
var inst_40964 = (state_40967[(2)]);
var inst_40965 = cljs.core.async.close_BANG_.call(null,out);
var state_40967__$1 = (function (){var statearr_40975 = state_40967;
(statearr_40975[(9)] = inst_40964);

return statearr_40975;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40967__$1,inst_40965);
} else {
if((state_val_40968 === (2))){
var inst_40944 = (state_40967[(8)]);
var inst_40946 = (inst_40944 < n);
var state_40967__$1 = state_40967;
if(cljs.core.truth_(inst_40946)){
var statearr_40976_40993 = state_40967__$1;
(statearr_40976_40993[(1)] = (4));

} else {
var statearr_40977_40994 = state_40967__$1;
(statearr_40977_40994[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (11))){
var inst_40944 = (state_40967[(8)]);
var inst_40954 = (state_40967[(2)]);
var inst_40955 = (inst_40944 + (1));
var inst_40944__$1 = inst_40955;
var state_40967__$1 = (function (){var statearr_40978 = state_40967;
(statearr_40978[(8)] = inst_40944__$1);

(statearr_40978[(10)] = inst_40954);

return statearr_40978;
})();
var statearr_40979_40995 = state_40967__$1;
(statearr_40979_40995[(2)] = null);

(statearr_40979_40995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (9))){
var state_40967__$1 = state_40967;
var statearr_40980_40996 = state_40967__$1;
(statearr_40980_40996[(2)] = null);

(statearr_40980_40996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (5))){
var state_40967__$1 = state_40967;
var statearr_40981_40997 = state_40967__$1;
(statearr_40981_40997[(2)] = null);

(statearr_40981_40997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (10))){
var inst_40959 = (state_40967[(2)]);
var state_40967__$1 = state_40967;
var statearr_40982_40998 = state_40967__$1;
(statearr_40982_40998[(2)] = inst_40959);

(statearr_40982_40998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40968 === (8))){
var inst_40949 = (state_40967[(7)]);
var state_40967__$1 = state_40967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40967__$1,(11),out,inst_40949);
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
});})(c__39516__auto___40988,out))
;
return ((function (switch__39426__auto__,c__39516__auto___40988,out){
return (function() {
var cljs$core$async$state_machine__39427__auto__ = null;
var cljs$core$async$state_machine__39427__auto____0 = (function (){
var statearr_40983 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40983[(0)] = cljs$core$async$state_machine__39427__auto__);

(statearr_40983[(1)] = (1));

return statearr_40983;
});
var cljs$core$async$state_machine__39427__auto____1 = (function (state_40967){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_40967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e40984){if((e40984 instanceof Object)){
var ex__39430__auto__ = e40984;
var statearr_40985_40999 = state_40967;
(statearr_40985_40999[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41000 = state_40967;
state_40967 = G__41000;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$state_machine__39427__auto__ = function(state_40967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39427__auto____1.call(this,state_40967);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39427__auto____0;
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39427__auto____1;
return cljs$core$async$state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto___40988,out))
})();
var state__39518__auto__ = (function (){var statearr_40986 = f__39517__auto__.call(null);
(statearr_40986[(6)] = c__39516__auto___40988);

return statearr_40986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto___40988,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41002 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41002 = (function (f,ch,meta41003){
this.f = f;
this.ch = ch;
this.meta41003 = meta41003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41004,meta41003__$1){
var self__ = this;
var _41004__$1 = this;
return (new cljs.core.async.t_cljs$core$async41002(self__.f,self__.ch,meta41003__$1));
});

cljs.core.async.t_cljs$core$async41002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41004){
var self__ = this;
var _41004__$1 = this;
return self__.meta41003;
});

cljs.core.async.t_cljs$core$async41002.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41002.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41002.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41002.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41002.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async41005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41005 = (function (f,ch,meta41003,_,fn1,meta41006){
this.f = f;
this.ch = ch;
this.meta41003 = meta41003;
this._ = _;
this.fn1 = fn1;
this.meta41006 = meta41006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41007,meta41006__$1){
var self__ = this;
var _41007__$1 = this;
return (new cljs.core.async.t_cljs$core$async41005(self__.f,self__.ch,self__.meta41003,self__._,self__.fn1,meta41006__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async41005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41007){
var self__ = this;
var _41007__$1 = this;
return self__.meta41006;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41005.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41005.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41001_SHARP_){
return f1.call(null,(((p1__41001_SHARP_ == null))?null:self__.f.call(null,p1__41001_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async41005.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41003","meta41003",-1741712362,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41002","cljs.core.async/t_cljs$core$async41002",-2075778247,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41006","meta41006",843670409,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41005";

cljs.core.async.t_cljs$core$async41005.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async41005");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41005.
 */
cljs.core.async.__GT_t_cljs$core$async41005 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41005(f__$1,ch__$1,meta41003__$1,___$2,fn1__$1,meta41006){
return (new cljs.core.async.t_cljs$core$async41005(f__$1,ch__$1,meta41003__$1,___$2,fn1__$1,meta41006));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async41005(self__.f,self__.ch,self__.meta41003,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async41002.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41002.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async41002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41003","meta41003",-1741712362,null)], null);
});

cljs.core.async.t_cljs$core$async41002.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41002";

cljs.core.async.t_cljs$core$async41002.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async41002");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41002.
 */
cljs.core.async.__GT_t_cljs$core$async41002 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41002(f__$1,ch__$1,meta41003){
return (new cljs.core.async.t_cljs$core$async41002(f__$1,ch__$1,meta41003));
});

}

return (new cljs.core.async.t_cljs$core$async41002(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41008 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41008 = (function (f,ch,meta41009){
this.f = f;
this.ch = ch;
this.meta41009 = meta41009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41010,meta41009__$1){
var self__ = this;
var _41010__$1 = this;
return (new cljs.core.async.t_cljs$core$async41008(self__.f,self__.ch,meta41009__$1));
});

cljs.core.async.t_cljs$core$async41008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41010){
var self__ = this;
var _41010__$1 = this;
return self__.meta41009;
});

cljs.core.async.t_cljs$core$async41008.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41008.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41008.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41008.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41008.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41008.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async41008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41009","meta41009",719425052,null)], null);
});

cljs.core.async.t_cljs$core$async41008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41008";

cljs.core.async.t_cljs$core$async41008.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async41008");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41008.
 */
cljs.core.async.__GT_t_cljs$core$async41008 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41008(f__$1,ch__$1,meta41009){
return (new cljs.core.async.t_cljs$core$async41008(f__$1,ch__$1,meta41009));
});

}

return (new cljs.core.async.t_cljs$core$async41008(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async41011 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41011 = (function (p,ch,meta41012){
this.p = p;
this.ch = ch;
this.meta41012 = meta41012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41013,meta41012__$1){
var self__ = this;
var _41013__$1 = this;
return (new cljs.core.async.t_cljs$core$async41011(self__.p,self__.ch,meta41012__$1));
});

cljs.core.async.t_cljs$core$async41011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41013){
var self__ = this;
var _41013__$1 = this;
return self__.meta41012;
});

cljs.core.async.t_cljs$core$async41011.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41011.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41011.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41011.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41011.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41011.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41011.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async41011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41012","meta41012",174756907,null)], null);
});

cljs.core.async.t_cljs$core$async41011.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41011";

cljs.core.async.t_cljs$core$async41011.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async41011");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41011.
 */
cljs.core.async.__GT_t_cljs$core$async41011 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41011(p__$1,ch__$1,meta41012){
return (new cljs.core.async.t_cljs$core$async41011(p__$1,ch__$1,meta41012));
});

}

return (new cljs.core.async.t_cljs$core$async41011(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__41015 = arguments.length;
switch (G__41015) {
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
var c__39516__auto___41055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto___41055,out){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto___41055,out){
return (function (state_41036){
var state_val_41037 = (state_41036[(1)]);
if((state_val_41037 === (7))){
var inst_41032 = (state_41036[(2)]);
var state_41036__$1 = state_41036;
var statearr_41038_41056 = state_41036__$1;
(statearr_41038_41056[(2)] = inst_41032);

(statearr_41038_41056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41037 === (1))){
var state_41036__$1 = state_41036;
var statearr_41039_41057 = state_41036__$1;
(statearr_41039_41057[(2)] = null);

(statearr_41039_41057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41037 === (4))){
var inst_41018 = (state_41036[(7)]);
var inst_41018__$1 = (state_41036[(2)]);
var inst_41019 = (inst_41018__$1 == null);
var state_41036__$1 = (function (){var statearr_41040 = state_41036;
(statearr_41040[(7)] = inst_41018__$1);

return statearr_41040;
})();
if(cljs.core.truth_(inst_41019)){
var statearr_41041_41058 = state_41036__$1;
(statearr_41041_41058[(1)] = (5));

} else {
var statearr_41042_41059 = state_41036__$1;
(statearr_41042_41059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41037 === (6))){
var inst_41018 = (state_41036[(7)]);
var inst_41023 = p.call(null,inst_41018);
var state_41036__$1 = state_41036;
if(cljs.core.truth_(inst_41023)){
var statearr_41043_41060 = state_41036__$1;
(statearr_41043_41060[(1)] = (8));

} else {
var statearr_41044_41061 = state_41036__$1;
(statearr_41044_41061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41037 === (3))){
var inst_41034 = (state_41036[(2)]);
var state_41036__$1 = state_41036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41036__$1,inst_41034);
} else {
if((state_val_41037 === (2))){
var state_41036__$1 = state_41036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41036__$1,(4),ch);
} else {
if((state_val_41037 === (11))){
var inst_41026 = (state_41036[(2)]);
var state_41036__$1 = state_41036;
var statearr_41045_41062 = state_41036__$1;
(statearr_41045_41062[(2)] = inst_41026);

(statearr_41045_41062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41037 === (9))){
var state_41036__$1 = state_41036;
var statearr_41046_41063 = state_41036__$1;
(statearr_41046_41063[(2)] = null);

(statearr_41046_41063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41037 === (5))){
var inst_41021 = cljs.core.async.close_BANG_.call(null,out);
var state_41036__$1 = state_41036;
var statearr_41047_41064 = state_41036__$1;
(statearr_41047_41064[(2)] = inst_41021);

(statearr_41047_41064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41037 === (10))){
var inst_41029 = (state_41036[(2)]);
var state_41036__$1 = (function (){var statearr_41048 = state_41036;
(statearr_41048[(8)] = inst_41029);

return statearr_41048;
})();
var statearr_41049_41065 = state_41036__$1;
(statearr_41049_41065[(2)] = null);

(statearr_41049_41065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41037 === (8))){
var inst_41018 = (state_41036[(7)]);
var state_41036__$1 = state_41036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41036__$1,(11),out,inst_41018);
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
});})(c__39516__auto___41055,out))
;
return ((function (switch__39426__auto__,c__39516__auto___41055,out){
return (function() {
var cljs$core$async$state_machine__39427__auto__ = null;
var cljs$core$async$state_machine__39427__auto____0 = (function (){
var statearr_41050 = [null,null,null,null,null,null,null,null,null];
(statearr_41050[(0)] = cljs$core$async$state_machine__39427__auto__);

(statearr_41050[(1)] = (1));

return statearr_41050;
});
var cljs$core$async$state_machine__39427__auto____1 = (function (state_41036){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_41036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e41051){if((e41051 instanceof Object)){
var ex__39430__auto__ = e41051;
var statearr_41052_41066 = state_41036;
(statearr_41052_41066[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41067 = state_41036;
state_41036 = G__41067;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$state_machine__39427__auto__ = function(state_41036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39427__auto____1.call(this,state_41036);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39427__auto____0;
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39427__auto____1;
return cljs$core$async$state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto___41055,out))
})();
var state__39518__auto__ = (function (){var statearr_41053 = f__39517__auto__.call(null);
(statearr_41053[(6)] = c__39516__auto___41055);

return statearr_41053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto___41055,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41069 = arguments.length;
switch (G__41069) {
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
var c__39516__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto__){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto__){
return (function (state_41132){
var state_val_41133 = (state_41132[(1)]);
if((state_val_41133 === (7))){
var inst_41128 = (state_41132[(2)]);
var state_41132__$1 = state_41132;
var statearr_41134_41172 = state_41132__$1;
(statearr_41134_41172[(2)] = inst_41128);

(statearr_41134_41172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (20))){
var inst_41098 = (state_41132[(7)]);
var inst_41109 = (state_41132[(2)]);
var inst_41110 = cljs.core.next.call(null,inst_41098);
var inst_41084 = inst_41110;
var inst_41085 = null;
var inst_41086 = (0);
var inst_41087 = (0);
var state_41132__$1 = (function (){var statearr_41135 = state_41132;
(statearr_41135[(8)] = inst_41087);

(statearr_41135[(9)] = inst_41086);

(statearr_41135[(10)] = inst_41109);

(statearr_41135[(11)] = inst_41085);

(statearr_41135[(12)] = inst_41084);

return statearr_41135;
})();
var statearr_41136_41173 = state_41132__$1;
(statearr_41136_41173[(2)] = null);

(statearr_41136_41173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (1))){
var state_41132__$1 = state_41132;
var statearr_41137_41174 = state_41132__$1;
(statearr_41137_41174[(2)] = null);

(statearr_41137_41174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (4))){
var inst_41073 = (state_41132[(13)]);
var inst_41073__$1 = (state_41132[(2)]);
var inst_41074 = (inst_41073__$1 == null);
var state_41132__$1 = (function (){var statearr_41138 = state_41132;
(statearr_41138[(13)] = inst_41073__$1);

return statearr_41138;
})();
if(cljs.core.truth_(inst_41074)){
var statearr_41139_41175 = state_41132__$1;
(statearr_41139_41175[(1)] = (5));

} else {
var statearr_41140_41176 = state_41132__$1;
(statearr_41140_41176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (15))){
var state_41132__$1 = state_41132;
var statearr_41144_41177 = state_41132__$1;
(statearr_41144_41177[(2)] = null);

(statearr_41144_41177[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (21))){
var state_41132__$1 = state_41132;
var statearr_41145_41178 = state_41132__$1;
(statearr_41145_41178[(2)] = null);

(statearr_41145_41178[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (13))){
var inst_41087 = (state_41132[(8)]);
var inst_41086 = (state_41132[(9)]);
var inst_41085 = (state_41132[(11)]);
var inst_41084 = (state_41132[(12)]);
var inst_41094 = (state_41132[(2)]);
var inst_41095 = (inst_41087 + (1));
var tmp41141 = inst_41086;
var tmp41142 = inst_41085;
var tmp41143 = inst_41084;
var inst_41084__$1 = tmp41143;
var inst_41085__$1 = tmp41142;
var inst_41086__$1 = tmp41141;
var inst_41087__$1 = inst_41095;
var state_41132__$1 = (function (){var statearr_41146 = state_41132;
(statearr_41146[(14)] = inst_41094);

(statearr_41146[(8)] = inst_41087__$1);

(statearr_41146[(9)] = inst_41086__$1);

(statearr_41146[(11)] = inst_41085__$1);

(statearr_41146[(12)] = inst_41084__$1);

return statearr_41146;
})();
var statearr_41147_41179 = state_41132__$1;
(statearr_41147_41179[(2)] = null);

(statearr_41147_41179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (22))){
var state_41132__$1 = state_41132;
var statearr_41148_41180 = state_41132__$1;
(statearr_41148_41180[(2)] = null);

(statearr_41148_41180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (6))){
var inst_41073 = (state_41132[(13)]);
var inst_41082 = f.call(null,inst_41073);
var inst_41083 = cljs.core.seq.call(null,inst_41082);
var inst_41084 = inst_41083;
var inst_41085 = null;
var inst_41086 = (0);
var inst_41087 = (0);
var state_41132__$1 = (function (){var statearr_41149 = state_41132;
(statearr_41149[(8)] = inst_41087);

(statearr_41149[(9)] = inst_41086);

(statearr_41149[(11)] = inst_41085);

(statearr_41149[(12)] = inst_41084);

return statearr_41149;
})();
var statearr_41150_41181 = state_41132__$1;
(statearr_41150_41181[(2)] = null);

(statearr_41150_41181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (17))){
var inst_41098 = (state_41132[(7)]);
var inst_41102 = cljs.core.chunk_first.call(null,inst_41098);
var inst_41103 = cljs.core.chunk_rest.call(null,inst_41098);
var inst_41104 = cljs.core.count.call(null,inst_41102);
var inst_41084 = inst_41103;
var inst_41085 = inst_41102;
var inst_41086 = inst_41104;
var inst_41087 = (0);
var state_41132__$1 = (function (){var statearr_41151 = state_41132;
(statearr_41151[(8)] = inst_41087);

(statearr_41151[(9)] = inst_41086);

(statearr_41151[(11)] = inst_41085);

(statearr_41151[(12)] = inst_41084);

return statearr_41151;
})();
var statearr_41152_41182 = state_41132__$1;
(statearr_41152_41182[(2)] = null);

(statearr_41152_41182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (3))){
var inst_41130 = (state_41132[(2)]);
var state_41132__$1 = state_41132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41132__$1,inst_41130);
} else {
if((state_val_41133 === (12))){
var inst_41118 = (state_41132[(2)]);
var state_41132__$1 = state_41132;
var statearr_41153_41183 = state_41132__$1;
(statearr_41153_41183[(2)] = inst_41118);

(statearr_41153_41183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (2))){
var state_41132__$1 = state_41132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41132__$1,(4),in$);
} else {
if((state_val_41133 === (23))){
var inst_41126 = (state_41132[(2)]);
var state_41132__$1 = state_41132;
var statearr_41154_41184 = state_41132__$1;
(statearr_41154_41184[(2)] = inst_41126);

(statearr_41154_41184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (19))){
var inst_41113 = (state_41132[(2)]);
var state_41132__$1 = state_41132;
var statearr_41155_41185 = state_41132__$1;
(statearr_41155_41185[(2)] = inst_41113);

(statearr_41155_41185[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (11))){
var inst_41098 = (state_41132[(7)]);
var inst_41084 = (state_41132[(12)]);
var inst_41098__$1 = cljs.core.seq.call(null,inst_41084);
var state_41132__$1 = (function (){var statearr_41156 = state_41132;
(statearr_41156[(7)] = inst_41098__$1);

return statearr_41156;
})();
if(inst_41098__$1){
var statearr_41157_41186 = state_41132__$1;
(statearr_41157_41186[(1)] = (14));

} else {
var statearr_41158_41187 = state_41132__$1;
(statearr_41158_41187[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (9))){
var inst_41120 = (state_41132[(2)]);
var inst_41121 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41132__$1 = (function (){var statearr_41159 = state_41132;
(statearr_41159[(15)] = inst_41120);

return statearr_41159;
})();
if(cljs.core.truth_(inst_41121)){
var statearr_41160_41188 = state_41132__$1;
(statearr_41160_41188[(1)] = (21));

} else {
var statearr_41161_41189 = state_41132__$1;
(statearr_41161_41189[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (5))){
var inst_41076 = cljs.core.async.close_BANG_.call(null,out);
var state_41132__$1 = state_41132;
var statearr_41162_41190 = state_41132__$1;
(statearr_41162_41190[(2)] = inst_41076);

(statearr_41162_41190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (14))){
var inst_41098 = (state_41132[(7)]);
var inst_41100 = cljs.core.chunked_seq_QMARK_.call(null,inst_41098);
var state_41132__$1 = state_41132;
if(inst_41100){
var statearr_41163_41191 = state_41132__$1;
(statearr_41163_41191[(1)] = (17));

} else {
var statearr_41164_41192 = state_41132__$1;
(statearr_41164_41192[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (16))){
var inst_41116 = (state_41132[(2)]);
var state_41132__$1 = state_41132;
var statearr_41165_41193 = state_41132__$1;
(statearr_41165_41193[(2)] = inst_41116);

(statearr_41165_41193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (10))){
var inst_41087 = (state_41132[(8)]);
var inst_41085 = (state_41132[(11)]);
var inst_41092 = cljs.core._nth.call(null,inst_41085,inst_41087);
var state_41132__$1 = state_41132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41132__$1,(13),out,inst_41092);
} else {
if((state_val_41133 === (18))){
var inst_41098 = (state_41132[(7)]);
var inst_41107 = cljs.core.first.call(null,inst_41098);
var state_41132__$1 = state_41132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41132__$1,(20),out,inst_41107);
} else {
if((state_val_41133 === (8))){
var inst_41087 = (state_41132[(8)]);
var inst_41086 = (state_41132[(9)]);
var inst_41089 = (inst_41087 < inst_41086);
var inst_41090 = inst_41089;
var state_41132__$1 = state_41132;
if(cljs.core.truth_(inst_41090)){
var statearr_41166_41194 = state_41132__$1;
(statearr_41166_41194[(1)] = (10));

} else {
var statearr_41167_41195 = state_41132__$1;
(statearr_41167_41195[(1)] = (11));

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
});})(c__39516__auto__))
;
return ((function (switch__39426__auto__,c__39516__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39427__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39427__auto____0 = (function (){
var statearr_41168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41168[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39427__auto__);

(statearr_41168[(1)] = (1));

return statearr_41168;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39427__auto____1 = (function (state_41132){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_41132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e41169){if((e41169 instanceof Object)){
var ex__39430__auto__ = e41169;
var statearr_41170_41196 = state_41132;
(statearr_41170_41196[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41197 = state_41132;
state_41132 = G__41197;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39427__auto__ = function(state_41132){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39427__auto____1.call(this,state_41132);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39427__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39427__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto__))
})();
var state__39518__auto__ = (function (){var statearr_41171 = f__39517__auto__.call(null);
(statearr_41171[(6)] = c__39516__auto__);

return statearr_41171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto__))
);

return c__39516__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41199 = arguments.length;
switch (G__41199) {
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
var G__41202 = arguments.length;
switch (G__41202) {
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
var G__41205 = arguments.length;
switch (G__41205) {
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
var c__39516__auto___41252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto___41252,out){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto___41252,out){
return (function (state_41229){
var state_val_41230 = (state_41229[(1)]);
if((state_val_41230 === (7))){
var inst_41224 = (state_41229[(2)]);
var state_41229__$1 = state_41229;
var statearr_41231_41253 = state_41229__$1;
(statearr_41231_41253[(2)] = inst_41224);

(statearr_41231_41253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (1))){
var inst_41206 = null;
var state_41229__$1 = (function (){var statearr_41232 = state_41229;
(statearr_41232[(7)] = inst_41206);

return statearr_41232;
})();
var statearr_41233_41254 = state_41229__$1;
(statearr_41233_41254[(2)] = null);

(statearr_41233_41254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (4))){
var inst_41209 = (state_41229[(8)]);
var inst_41209__$1 = (state_41229[(2)]);
var inst_41210 = (inst_41209__$1 == null);
var inst_41211 = cljs.core.not.call(null,inst_41210);
var state_41229__$1 = (function (){var statearr_41234 = state_41229;
(statearr_41234[(8)] = inst_41209__$1);

return statearr_41234;
})();
if(inst_41211){
var statearr_41235_41255 = state_41229__$1;
(statearr_41235_41255[(1)] = (5));

} else {
var statearr_41236_41256 = state_41229__$1;
(statearr_41236_41256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (6))){
var state_41229__$1 = state_41229;
var statearr_41237_41257 = state_41229__$1;
(statearr_41237_41257[(2)] = null);

(statearr_41237_41257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (3))){
var inst_41226 = (state_41229[(2)]);
var inst_41227 = cljs.core.async.close_BANG_.call(null,out);
var state_41229__$1 = (function (){var statearr_41238 = state_41229;
(statearr_41238[(9)] = inst_41226);

return statearr_41238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41229__$1,inst_41227);
} else {
if((state_val_41230 === (2))){
var state_41229__$1 = state_41229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41229__$1,(4),ch);
} else {
if((state_val_41230 === (11))){
var inst_41209 = (state_41229[(8)]);
var inst_41218 = (state_41229[(2)]);
var inst_41206 = inst_41209;
var state_41229__$1 = (function (){var statearr_41239 = state_41229;
(statearr_41239[(10)] = inst_41218);

(statearr_41239[(7)] = inst_41206);

return statearr_41239;
})();
var statearr_41240_41258 = state_41229__$1;
(statearr_41240_41258[(2)] = null);

(statearr_41240_41258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (9))){
var inst_41209 = (state_41229[(8)]);
var state_41229__$1 = state_41229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41229__$1,(11),out,inst_41209);
} else {
if((state_val_41230 === (5))){
var inst_41209 = (state_41229[(8)]);
var inst_41206 = (state_41229[(7)]);
var inst_41213 = cljs.core._EQ_.call(null,inst_41209,inst_41206);
var state_41229__$1 = state_41229;
if(inst_41213){
var statearr_41242_41259 = state_41229__$1;
(statearr_41242_41259[(1)] = (8));

} else {
var statearr_41243_41260 = state_41229__$1;
(statearr_41243_41260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (10))){
var inst_41221 = (state_41229[(2)]);
var state_41229__$1 = state_41229;
var statearr_41244_41261 = state_41229__$1;
(statearr_41244_41261[(2)] = inst_41221);

(statearr_41244_41261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (8))){
var inst_41206 = (state_41229[(7)]);
var tmp41241 = inst_41206;
var inst_41206__$1 = tmp41241;
var state_41229__$1 = (function (){var statearr_41245 = state_41229;
(statearr_41245[(7)] = inst_41206__$1);

return statearr_41245;
})();
var statearr_41246_41262 = state_41229__$1;
(statearr_41246_41262[(2)] = null);

(statearr_41246_41262[(1)] = (2));


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
});})(c__39516__auto___41252,out))
;
return ((function (switch__39426__auto__,c__39516__auto___41252,out){
return (function() {
var cljs$core$async$state_machine__39427__auto__ = null;
var cljs$core$async$state_machine__39427__auto____0 = (function (){
var statearr_41247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41247[(0)] = cljs$core$async$state_machine__39427__auto__);

(statearr_41247[(1)] = (1));

return statearr_41247;
});
var cljs$core$async$state_machine__39427__auto____1 = (function (state_41229){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_41229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e41248){if((e41248 instanceof Object)){
var ex__39430__auto__ = e41248;
var statearr_41249_41263 = state_41229;
(statearr_41249_41263[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41264 = state_41229;
state_41229 = G__41264;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$state_machine__39427__auto__ = function(state_41229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39427__auto____1.call(this,state_41229);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39427__auto____0;
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39427__auto____1;
return cljs$core$async$state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto___41252,out))
})();
var state__39518__auto__ = (function (){var statearr_41250 = f__39517__auto__.call(null);
(statearr_41250[(6)] = c__39516__auto___41252);

return statearr_41250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto___41252,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41266 = arguments.length;
switch (G__41266) {
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
var c__39516__auto___41332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto___41332,out){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto___41332,out){
return (function (state_41304){
var state_val_41305 = (state_41304[(1)]);
if((state_val_41305 === (7))){
var inst_41300 = (state_41304[(2)]);
var state_41304__$1 = state_41304;
var statearr_41306_41333 = state_41304__$1;
(statearr_41306_41333[(2)] = inst_41300);

(statearr_41306_41333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (1))){
var inst_41267 = (new Array(n));
var inst_41268 = inst_41267;
var inst_41269 = (0);
var state_41304__$1 = (function (){var statearr_41307 = state_41304;
(statearr_41307[(7)] = inst_41269);

(statearr_41307[(8)] = inst_41268);

return statearr_41307;
})();
var statearr_41308_41334 = state_41304__$1;
(statearr_41308_41334[(2)] = null);

(statearr_41308_41334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (4))){
var inst_41272 = (state_41304[(9)]);
var inst_41272__$1 = (state_41304[(2)]);
var inst_41273 = (inst_41272__$1 == null);
var inst_41274 = cljs.core.not.call(null,inst_41273);
var state_41304__$1 = (function (){var statearr_41309 = state_41304;
(statearr_41309[(9)] = inst_41272__$1);

return statearr_41309;
})();
if(inst_41274){
var statearr_41310_41335 = state_41304__$1;
(statearr_41310_41335[(1)] = (5));

} else {
var statearr_41311_41336 = state_41304__$1;
(statearr_41311_41336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (15))){
var inst_41294 = (state_41304[(2)]);
var state_41304__$1 = state_41304;
var statearr_41312_41337 = state_41304__$1;
(statearr_41312_41337[(2)] = inst_41294);

(statearr_41312_41337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (13))){
var state_41304__$1 = state_41304;
var statearr_41313_41338 = state_41304__$1;
(statearr_41313_41338[(2)] = null);

(statearr_41313_41338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (6))){
var inst_41269 = (state_41304[(7)]);
var inst_41290 = (inst_41269 > (0));
var state_41304__$1 = state_41304;
if(cljs.core.truth_(inst_41290)){
var statearr_41314_41339 = state_41304__$1;
(statearr_41314_41339[(1)] = (12));

} else {
var statearr_41315_41340 = state_41304__$1;
(statearr_41315_41340[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (3))){
var inst_41302 = (state_41304[(2)]);
var state_41304__$1 = state_41304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41304__$1,inst_41302);
} else {
if((state_val_41305 === (12))){
var inst_41268 = (state_41304[(8)]);
var inst_41292 = cljs.core.vec.call(null,inst_41268);
var state_41304__$1 = state_41304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41304__$1,(15),out,inst_41292);
} else {
if((state_val_41305 === (2))){
var state_41304__$1 = state_41304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41304__$1,(4),ch);
} else {
if((state_val_41305 === (11))){
var inst_41284 = (state_41304[(2)]);
var inst_41285 = (new Array(n));
var inst_41268 = inst_41285;
var inst_41269 = (0);
var state_41304__$1 = (function (){var statearr_41316 = state_41304;
(statearr_41316[(7)] = inst_41269);

(statearr_41316[(10)] = inst_41284);

(statearr_41316[(8)] = inst_41268);

return statearr_41316;
})();
var statearr_41317_41341 = state_41304__$1;
(statearr_41317_41341[(2)] = null);

(statearr_41317_41341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (9))){
var inst_41268 = (state_41304[(8)]);
var inst_41282 = cljs.core.vec.call(null,inst_41268);
var state_41304__$1 = state_41304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41304__$1,(11),out,inst_41282);
} else {
if((state_val_41305 === (5))){
var inst_41272 = (state_41304[(9)]);
var inst_41269 = (state_41304[(7)]);
var inst_41277 = (state_41304[(11)]);
var inst_41268 = (state_41304[(8)]);
var inst_41276 = (inst_41268[inst_41269] = inst_41272);
var inst_41277__$1 = (inst_41269 + (1));
var inst_41278 = (inst_41277__$1 < n);
var state_41304__$1 = (function (){var statearr_41318 = state_41304;
(statearr_41318[(12)] = inst_41276);

(statearr_41318[(11)] = inst_41277__$1);

return statearr_41318;
})();
if(cljs.core.truth_(inst_41278)){
var statearr_41319_41342 = state_41304__$1;
(statearr_41319_41342[(1)] = (8));

} else {
var statearr_41320_41343 = state_41304__$1;
(statearr_41320_41343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (14))){
var inst_41297 = (state_41304[(2)]);
var inst_41298 = cljs.core.async.close_BANG_.call(null,out);
var state_41304__$1 = (function (){var statearr_41322 = state_41304;
(statearr_41322[(13)] = inst_41297);

return statearr_41322;
})();
var statearr_41323_41344 = state_41304__$1;
(statearr_41323_41344[(2)] = inst_41298);

(statearr_41323_41344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (10))){
var inst_41288 = (state_41304[(2)]);
var state_41304__$1 = state_41304;
var statearr_41324_41345 = state_41304__$1;
(statearr_41324_41345[(2)] = inst_41288);

(statearr_41324_41345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (8))){
var inst_41277 = (state_41304[(11)]);
var inst_41268 = (state_41304[(8)]);
var tmp41321 = inst_41268;
var inst_41268__$1 = tmp41321;
var inst_41269 = inst_41277;
var state_41304__$1 = (function (){var statearr_41325 = state_41304;
(statearr_41325[(7)] = inst_41269);

(statearr_41325[(8)] = inst_41268__$1);

return statearr_41325;
})();
var statearr_41326_41346 = state_41304__$1;
(statearr_41326_41346[(2)] = null);

(statearr_41326_41346[(1)] = (2));


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
});})(c__39516__auto___41332,out))
;
return ((function (switch__39426__auto__,c__39516__auto___41332,out){
return (function() {
var cljs$core$async$state_machine__39427__auto__ = null;
var cljs$core$async$state_machine__39427__auto____0 = (function (){
var statearr_41327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41327[(0)] = cljs$core$async$state_machine__39427__auto__);

(statearr_41327[(1)] = (1));

return statearr_41327;
});
var cljs$core$async$state_machine__39427__auto____1 = (function (state_41304){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_41304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e41328){if((e41328 instanceof Object)){
var ex__39430__auto__ = e41328;
var statearr_41329_41347 = state_41304;
(statearr_41329_41347[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41348 = state_41304;
state_41304 = G__41348;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$state_machine__39427__auto__ = function(state_41304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39427__auto____1.call(this,state_41304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39427__auto____0;
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39427__auto____1;
return cljs$core$async$state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto___41332,out))
})();
var state__39518__auto__ = (function (){var statearr_41330 = f__39517__auto__.call(null);
(statearr_41330[(6)] = c__39516__auto___41332);

return statearr_41330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto___41332,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41350 = arguments.length;
switch (G__41350) {
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
var c__39516__auto___41420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39516__auto___41420,out){
return (function (){
var f__39517__auto__ = (function (){var switch__39426__auto__ = ((function (c__39516__auto___41420,out){
return (function (state_41392){
var state_val_41393 = (state_41392[(1)]);
if((state_val_41393 === (7))){
var inst_41388 = (state_41392[(2)]);
var state_41392__$1 = state_41392;
var statearr_41394_41421 = state_41392__$1;
(statearr_41394_41421[(2)] = inst_41388);

(statearr_41394_41421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41393 === (1))){
var inst_41351 = [];
var inst_41352 = inst_41351;
var inst_41353 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41392__$1 = (function (){var statearr_41395 = state_41392;
(statearr_41395[(7)] = inst_41352);

(statearr_41395[(8)] = inst_41353);

return statearr_41395;
})();
var statearr_41396_41422 = state_41392__$1;
(statearr_41396_41422[(2)] = null);

(statearr_41396_41422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41393 === (4))){
var inst_41356 = (state_41392[(9)]);
var inst_41356__$1 = (state_41392[(2)]);
var inst_41357 = (inst_41356__$1 == null);
var inst_41358 = cljs.core.not.call(null,inst_41357);
var state_41392__$1 = (function (){var statearr_41397 = state_41392;
(statearr_41397[(9)] = inst_41356__$1);

return statearr_41397;
})();
if(inst_41358){
var statearr_41398_41423 = state_41392__$1;
(statearr_41398_41423[(1)] = (5));

} else {
var statearr_41399_41424 = state_41392__$1;
(statearr_41399_41424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41393 === (15))){
var inst_41382 = (state_41392[(2)]);
var state_41392__$1 = state_41392;
var statearr_41400_41425 = state_41392__$1;
(statearr_41400_41425[(2)] = inst_41382);

(statearr_41400_41425[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41393 === (13))){
var state_41392__$1 = state_41392;
var statearr_41401_41426 = state_41392__$1;
(statearr_41401_41426[(2)] = null);

(statearr_41401_41426[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41393 === (6))){
var inst_41352 = (state_41392[(7)]);
var inst_41377 = inst_41352.length;
var inst_41378 = (inst_41377 > (0));
var state_41392__$1 = state_41392;
if(cljs.core.truth_(inst_41378)){
var statearr_41402_41427 = state_41392__$1;
(statearr_41402_41427[(1)] = (12));

} else {
var statearr_41403_41428 = state_41392__$1;
(statearr_41403_41428[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41393 === (3))){
var inst_41390 = (state_41392[(2)]);
var state_41392__$1 = state_41392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41392__$1,inst_41390);
} else {
if((state_val_41393 === (12))){
var inst_41352 = (state_41392[(7)]);
var inst_41380 = cljs.core.vec.call(null,inst_41352);
var state_41392__$1 = state_41392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41392__$1,(15),out,inst_41380);
} else {
if((state_val_41393 === (2))){
var state_41392__$1 = state_41392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41392__$1,(4),ch);
} else {
if((state_val_41393 === (11))){
var inst_41356 = (state_41392[(9)]);
var inst_41360 = (state_41392[(10)]);
var inst_41370 = (state_41392[(2)]);
var inst_41371 = [];
var inst_41372 = inst_41371.push(inst_41356);
var inst_41352 = inst_41371;
var inst_41353 = inst_41360;
var state_41392__$1 = (function (){var statearr_41404 = state_41392;
(statearr_41404[(7)] = inst_41352);

(statearr_41404[(8)] = inst_41353);

(statearr_41404[(11)] = inst_41372);

(statearr_41404[(12)] = inst_41370);

return statearr_41404;
})();
var statearr_41405_41429 = state_41392__$1;
(statearr_41405_41429[(2)] = null);

(statearr_41405_41429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41393 === (9))){
var inst_41352 = (state_41392[(7)]);
var inst_41368 = cljs.core.vec.call(null,inst_41352);
var state_41392__$1 = state_41392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41392__$1,(11),out,inst_41368);
} else {
if((state_val_41393 === (5))){
var inst_41356 = (state_41392[(9)]);
var inst_41360 = (state_41392[(10)]);
var inst_41353 = (state_41392[(8)]);
var inst_41360__$1 = f.call(null,inst_41356);
var inst_41361 = cljs.core._EQ_.call(null,inst_41360__$1,inst_41353);
var inst_41362 = cljs.core.keyword_identical_QMARK_.call(null,inst_41353,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41363 = ((inst_41361) || (inst_41362));
var state_41392__$1 = (function (){var statearr_41406 = state_41392;
(statearr_41406[(10)] = inst_41360__$1);

return statearr_41406;
})();
if(cljs.core.truth_(inst_41363)){
var statearr_41407_41430 = state_41392__$1;
(statearr_41407_41430[(1)] = (8));

} else {
var statearr_41408_41431 = state_41392__$1;
(statearr_41408_41431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41393 === (14))){
var inst_41385 = (state_41392[(2)]);
var inst_41386 = cljs.core.async.close_BANG_.call(null,out);
var state_41392__$1 = (function (){var statearr_41410 = state_41392;
(statearr_41410[(13)] = inst_41385);

return statearr_41410;
})();
var statearr_41411_41432 = state_41392__$1;
(statearr_41411_41432[(2)] = inst_41386);

(statearr_41411_41432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41393 === (10))){
var inst_41375 = (state_41392[(2)]);
var state_41392__$1 = state_41392;
var statearr_41412_41433 = state_41392__$1;
(statearr_41412_41433[(2)] = inst_41375);

(statearr_41412_41433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41393 === (8))){
var inst_41356 = (state_41392[(9)]);
var inst_41352 = (state_41392[(7)]);
var inst_41360 = (state_41392[(10)]);
var inst_41365 = inst_41352.push(inst_41356);
var tmp41409 = inst_41352;
var inst_41352__$1 = tmp41409;
var inst_41353 = inst_41360;
var state_41392__$1 = (function (){var statearr_41413 = state_41392;
(statearr_41413[(14)] = inst_41365);

(statearr_41413[(7)] = inst_41352__$1);

(statearr_41413[(8)] = inst_41353);

return statearr_41413;
})();
var statearr_41414_41434 = state_41392__$1;
(statearr_41414_41434[(2)] = null);

(statearr_41414_41434[(1)] = (2));


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
});})(c__39516__auto___41420,out))
;
return ((function (switch__39426__auto__,c__39516__auto___41420,out){
return (function() {
var cljs$core$async$state_machine__39427__auto__ = null;
var cljs$core$async$state_machine__39427__auto____0 = (function (){
var statearr_41415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41415[(0)] = cljs$core$async$state_machine__39427__auto__);

(statearr_41415[(1)] = (1));

return statearr_41415;
});
var cljs$core$async$state_machine__39427__auto____1 = (function (state_41392){
while(true){
var ret_value__39428__auto__ = (function (){try{while(true){
var result__39429__auto__ = switch__39426__auto__.call(null,state_41392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39429__auto__;
}
break;
}
}catch (e41416){if((e41416 instanceof Object)){
var ex__39430__auto__ = e41416;
var statearr_41417_41435 = state_41392;
(statearr_41417_41435[(5)] = ex__39430__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41436 = state_41392;
state_41392 = G__41436;
continue;
} else {
return ret_value__39428__auto__;
}
break;
}
});
cljs$core$async$state_machine__39427__auto__ = function(state_41392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39427__auto____1.call(this,state_41392);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39427__auto____0;
cljs$core$async$state_machine__39427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39427__auto____1;
return cljs$core$async$state_machine__39427__auto__;
})()
;})(switch__39426__auto__,c__39516__auto___41420,out))
})();
var state__39518__auto__ = (function (){var statearr_41418 = f__39517__auto__.call(null);
(statearr_41418[(6)] = c__39516__auto___41420);

return statearr_41418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39518__auto__);
});})(c__39516__auto___41420,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

