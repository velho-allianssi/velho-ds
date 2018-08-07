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
var G__39564 = arguments.length;
switch (G__39564) {
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
if(typeof cljs.core.async.t_cljs$core$async39565 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39565 = (function (f,blockable,meta39566){
this.f = f;
this.blockable = blockable;
this.meta39566 = meta39566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39567,meta39566__$1){
var self__ = this;
var _39567__$1 = this;
return (new cljs.core.async.t_cljs$core$async39565(self__.f,self__.blockable,meta39566__$1));
});

cljs.core.async.t_cljs$core$async39565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39567){
var self__ = this;
var _39567__$1 = this;
return self__.meta39566;
});

cljs.core.async.t_cljs$core$async39565.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39565.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39565.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39566","meta39566",624066454,null)], null);
});

cljs.core.async.t_cljs$core$async39565.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39565";

cljs.core.async.t_cljs$core$async39565.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39565");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39565.
 */
cljs.core.async.__GT_t_cljs$core$async39565 = (function cljs$core$async$__GT_t_cljs$core$async39565(f__$1,blockable__$1,meta39566){
return (new cljs.core.async.t_cljs$core$async39565(f__$1,blockable__$1,meta39566));
});

}

return (new cljs.core.async.t_cljs$core$async39565(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39571 = arguments.length;
switch (G__39571) {
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
var G__39574 = arguments.length;
switch (G__39574) {
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
var G__39577 = arguments.length;
switch (G__39577) {
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
var val_39579 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39579);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39579,ret){
return (function (){
return fn1.call(null,val_39579);
});})(val_39579,ret))
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
var G__39581 = arguments.length;
switch (G__39581) {
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
var n__4376__auto___39583 = n;
var x_39584 = (0);
while(true){
if((x_39584 < n__4376__auto___39583)){
(a[x_39584] = (0));

var G__39585 = (x_39584 + (1));
x_39584 = G__39585;
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

var G__39586 = (i + (1));
i = G__39586;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39587 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39587 = (function (flag,meta39588){
this.flag = flag;
this.meta39588 = meta39588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39589,meta39588__$1){
var self__ = this;
var _39589__$1 = this;
return (new cljs.core.async.t_cljs$core$async39587(self__.flag,meta39588__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39589){
var self__ = this;
var _39589__$1 = this;
return self__.meta39588;
});})(flag))
;

cljs.core.async.t_cljs$core$async39587.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39587.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39588","meta39588",-1171106684,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39587";

cljs.core.async.t_cljs$core$async39587.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39587");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39587.
 */
cljs.core.async.__GT_t_cljs$core$async39587 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39587(flag__$1,meta39588){
return (new cljs.core.async.t_cljs$core$async39587(flag__$1,meta39588));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39587(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39590 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39590 = (function (flag,cb,meta39591){
this.flag = flag;
this.cb = cb;
this.meta39591 = meta39591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39592,meta39591__$1){
var self__ = this;
var _39592__$1 = this;
return (new cljs.core.async.t_cljs$core$async39590(self__.flag,self__.cb,meta39591__$1));
});

cljs.core.async.t_cljs$core$async39590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39592){
var self__ = this;
var _39592__$1 = this;
return self__.meta39591;
});

cljs.core.async.t_cljs$core$async39590.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39590.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39591","meta39591",863185805,null)], null);
});

cljs.core.async.t_cljs$core$async39590.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39590";

cljs.core.async.t_cljs$core$async39590.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39590");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39590.
 */
cljs.core.async.__GT_t_cljs$core$async39590 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39590(flag__$1,cb__$1,meta39591){
return (new cljs.core.async.t_cljs$core$async39590(flag__$1,cb__$1,meta39591));
});

}

return (new cljs.core.async.t_cljs$core$async39590(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39593_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39593_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39594_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39594_SHARP_,port], null));
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
var G__39595 = (i + (1));
i = G__39595;
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
var len__4499__auto___39601 = arguments.length;
var i__4500__auto___39602 = (0);
while(true){
if((i__4500__auto___39602 < len__4499__auto___39601)){
args__4502__auto__.push((arguments[i__4500__auto___39602]));

var G__39603 = (i__4500__auto___39602 + (1));
i__4500__auto___39602 = G__39603;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39598){
var map__39599 = p__39598;
var map__39599__$1 = ((((!((map__39599 == null)))?(((((map__39599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39599):map__39599);
var opts = map__39599__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39596){
var G__39597 = cljs.core.first.call(null,seq39596);
var seq39596__$1 = cljs.core.next.call(null,seq39596);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39597,seq39596__$1);
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
var G__39605 = arguments.length;
switch (G__39605) {
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
var c__39504__auto___39651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto___39651){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto___39651){
return (function (state_39629){
var state_val_39630 = (state_39629[(1)]);
if((state_val_39630 === (7))){
var inst_39625 = (state_39629[(2)]);
var state_39629__$1 = state_39629;
var statearr_39631_39652 = state_39629__$1;
(statearr_39631_39652[(2)] = inst_39625);

(statearr_39631_39652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (1))){
var state_39629__$1 = state_39629;
var statearr_39632_39653 = state_39629__$1;
(statearr_39632_39653[(2)] = null);

(statearr_39632_39653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (4))){
var inst_39608 = (state_39629[(7)]);
var inst_39608__$1 = (state_39629[(2)]);
var inst_39609 = (inst_39608__$1 == null);
var state_39629__$1 = (function (){var statearr_39633 = state_39629;
(statearr_39633[(7)] = inst_39608__$1);

return statearr_39633;
})();
if(cljs.core.truth_(inst_39609)){
var statearr_39634_39654 = state_39629__$1;
(statearr_39634_39654[(1)] = (5));

} else {
var statearr_39635_39655 = state_39629__$1;
(statearr_39635_39655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (13))){
var state_39629__$1 = state_39629;
var statearr_39636_39656 = state_39629__$1;
(statearr_39636_39656[(2)] = null);

(statearr_39636_39656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (6))){
var inst_39608 = (state_39629[(7)]);
var state_39629__$1 = state_39629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39629__$1,(11),to,inst_39608);
} else {
if((state_val_39630 === (3))){
var inst_39627 = (state_39629[(2)]);
var state_39629__$1 = state_39629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39629__$1,inst_39627);
} else {
if((state_val_39630 === (12))){
var state_39629__$1 = state_39629;
var statearr_39637_39657 = state_39629__$1;
(statearr_39637_39657[(2)] = null);

(statearr_39637_39657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (2))){
var state_39629__$1 = state_39629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39629__$1,(4),from);
} else {
if((state_val_39630 === (11))){
var inst_39618 = (state_39629[(2)]);
var state_39629__$1 = state_39629;
if(cljs.core.truth_(inst_39618)){
var statearr_39638_39658 = state_39629__$1;
(statearr_39638_39658[(1)] = (12));

} else {
var statearr_39639_39659 = state_39629__$1;
(statearr_39639_39659[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (9))){
var state_39629__$1 = state_39629;
var statearr_39640_39660 = state_39629__$1;
(statearr_39640_39660[(2)] = null);

(statearr_39640_39660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (5))){
var state_39629__$1 = state_39629;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39641_39661 = state_39629__$1;
(statearr_39641_39661[(1)] = (8));

} else {
var statearr_39642_39662 = state_39629__$1;
(statearr_39642_39662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (14))){
var inst_39623 = (state_39629[(2)]);
var state_39629__$1 = state_39629;
var statearr_39643_39663 = state_39629__$1;
(statearr_39643_39663[(2)] = inst_39623);

(statearr_39643_39663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (10))){
var inst_39615 = (state_39629[(2)]);
var state_39629__$1 = state_39629;
var statearr_39644_39664 = state_39629__$1;
(statearr_39644_39664[(2)] = inst_39615);

(statearr_39644_39664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (8))){
var inst_39612 = cljs.core.async.close_BANG_.call(null,to);
var state_39629__$1 = state_39629;
var statearr_39645_39665 = state_39629__$1;
(statearr_39645_39665[(2)] = inst_39612);

(statearr_39645_39665[(1)] = (10));


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
});})(c__39504__auto___39651))
;
return ((function (switch__39414__auto__,c__39504__auto___39651){
return (function() {
var cljs$core$async$state_machine__39415__auto__ = null;
var cljs$core$async$state_machine__39415__auto____0 = (function (){
var statearr_39646 = [null,null,null,null,null,null,null,null];
(statearr_39646[(0)] = cljs$core$async$state_machine__39415__auto__);

(statearr_39646[(1)] = (1));

return statearr_39646;
});
var cljs$core$async$state_machine__39415__auto____1 = (function (state_39629){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_39629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e39647){if((e39647 instanceof Object)){
var ex__39418__auto__ = e39647;
var statearr_39648_39666 = state_39629;
(statearr_39648_39666[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39667 = state_39629;
state_39629 = G__39667;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$state_machine__39415__auto__ = function(state_39629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39415__auto____1.call(this,state_39629);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39415__auto____0;
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39415__auto____1;
return cljs$core$async$state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto___39651))
})();
var state__39506__auto__ = (function (){var statearr_39649 = f__39505__auto__.call(null);
(statearr_39649[(6)] = c__39504__auto___39651);

return statearr_39649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto___39651))
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
return (function (p__39668){
var vec__39669 = p__39668;
var v = cljs.core.nth.call(null,vec__39669,(0),null);
var p = cljs.core.nth.call(null,vec__39669,(1),null);
var job = vec__39669;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__39504__auto___39840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto___39840,res,vec__39669,v,p,job,jobs,results){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto___39840,res,vec__39669,v,p,job,jobs,results){
return (function (state_39676){
var state_val_39677 = (state_39676[(1)]);
if((state_val_39677 === (1))){
var state_39676__$1 = state_39676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39676__$1,(2),res,v);
} else {
if((state_val_39677 === (2))){
var inst_39673 = (state_39676[(2)]);
var inst_39674 = cljs.core.async.close_BANG_.call(null,res);
var state_39676__$1 = (function (){var statearr_39678 = state_39676;
(statearr_39678[(7)] = inst_39673);

return statearr_39678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39676__$1,inst_39674);
} else {
return null;
}
}
});})(c__39504__auto___39840,res,vec__39669,v,p,job,jobs,results))
;
return ((function (switch__39414__auto__,c__39504__auto___39840,res,vec__39669,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____0 = (function (){
var statearr_39679 = [null,null,null,null,null,null,null,null];
(statearr_39679[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__);

(statearr_39679[(1)] = (1));

return statearr_39679;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____1 = (function (state_39676){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_39676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e39680){if((e39680 instanceof Object)){
var ex__39418__auto__ = e39680;
var statearr_39681_39841 = state_39676;
(statearr_39681_39841[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39842 = state_39676;
state_39676 = G__39842;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__ = function(state_39676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____1.call(this,state_39676);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto___39840,res,vec__39669,v,p,job,jobs,results))
})();
var state__39506__auto__ = (function (){var statearr_39682 = f__39505__auto__.call(null);
(statearr_39682[(6)] = c__39504__auto___39840);

return statearr_39682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto___39840,res,vec__39669,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39683){
var vec__39684 = p__39683;
var v = cljs.core.nth.call(null,vec__39684,(0),null);
var p = cljs.core.nth.call(null,vec__39684,(1),null);
var job = vec__39684;
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
var n__4376__auto___39843 = n;
var __39844 = (0);
while(true){
if((__39844 < n__4376__auto___39843)){
var G__39687_39845 = type;
var G__39687_39846__$1 = (((G__39687_39845 instanceof cljs.core.Keyword))?G__39687_39845.fqn:null);
switch (G__39687_39846__$1) {
case "compute":
var c__39504__auto___39848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39844,c__39504__auto___39848,G__39687_39845,G__39687_39846__$1,n__4376__auto___39843,jobs,results,process,async){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (__39844,c__39504__auto___39848,G__39687_39845,G__39687_39846__$1,n__4376__auto___39843,jobs,results,process,async){
return (function (state_39700){
var state_val_39701 = (state_39700[(1)]);
if((state_val_39701 === (1))){
var state_39700__$1 = state_39700;
var statearr_39702_39849 = state_39700__$1;
(statearr_39702_39849[(2)] = null);

(statearr_39702_39849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39701 === (2))){
var state_39700__$1 = state_39700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39700__$1,(4),jobs);
} else {
if((state_val_39701 === (3))){
var inst_39698 = (state_39700[(2)]);
var state_39700__$1 = state_39700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39700__$1,inst_39698);
} else {
if((state_val_39701 === (4))){
var inst_39690 = (state_39700[(2)]);
var inst_39691 = process.call(null,inst_39690);
var state_39700__$1 = state_39700;
if(cljs.core.truth_(inst_39691)){
var statearr_39703_39850 = state_39700__$1;
(statearr_39703_39850[(1)] = (5));

} else {
var statearr_39704_39851 = state_39700__$1;
(statearr_39704_39851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39701 === (5))){
var state_39700__$1 = state_39700;
var statearr_39705_39852 = state_39700__$1;
(statearr_39705_39852[(2)] = null);

(statearr_39705_39852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39701 === (6))){
var state_39700__$1 = state_39700;
var statearr_39706_39853 = state_39700__$1;
(statearr_39706_39853[(2)] = null);

(statearr_39706_39853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39701 === (7))){
var inst_39696 = (state_39700[(2)]);
var state_39700__$1 = state_39700;
var statearr_39707_39854 = state_39700__$1;
(statearr_39707_39854[(2)] = inst_39696);

(statearr_39707_39854[(1)] = (3));


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
});})(__39844,c__39504__auto___39848,G__39687_39845,G__39687_39846__$1,n__4376__auto___39843,jobs,results,process,async))
;
return ((function (__39844,switch__39414__auto__,c__39504__auto___39848,G__39687_39845,G__39687_39846__$1,n__4376__auto___39843,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____0 = (function (){
var statearr_39708 = [null,null,null,null,null,null,null];
(statearr_39708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__);

(statearr_39708[(1)] = (1));

return statearr_39708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____1 = (function (state_39700){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_39700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e39709){if((e39709 instanceof Object)){
var ex__39418__auto__ = e39709;
var statearr_39710_39855 = state_39700;
(statearr_39710_39855[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39856 = state_39700;
state_39700 = G__39856;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__ = function(state_39700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____1.call(this,state_39700);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__;
})()
;})(__39844,switch__39414__auto__,c__39504__auto___39848,G__39687_39845,G__39687_39846__$1,n__4376__auto___39843,jobs,results,process,async))
})();
var state__39506__auto__ = (function (){var statearr_39711 = f__39505__auto__.call(null);
(statearr_39711[(6)] = c__39504__auto___39848);

return statearr_39711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(__39844,c__39504__auto___39848,G__39687_39845,G__39687_39846__$1,n__4376__auto___39843,jobs,results,process,async))
);


break;
case "async":
var c__39504__auto___39857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39844,c__39504__auto___39857,G__39687_39845,G__39687_39846__$1,n__4376__auto___39843,jobs,results,process,async){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (__39844,c__39504__auto___39857,G__39687_39845,G__39687_39846__$1,n__4376__auto___39843,jobs,results,process,async){
return (function (state_39724){
var state_val_39725 = (state_39724[(1)]);
if((state_val_39725 === (1))){
var state_39724__$1 = state_39724;
var statearr_39726_39858 = state_39724__$1;
(statearr_39726_39858[(2)] = null);

(statearr_39726_39858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (2))){
var state_39724__$1 = state_39724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39724__$1,(4),jobs);
} else {
if((state_val_39725 === (3))){
var inst_39722 = (state_39724[(2)]);
var state_39724__$1 = state_39724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39724__$1,inst_39722);
} else {
if((state_val_39725 === (4))){
var inst_39714 = (state_39724[(2)]);
var inst_39715 = async.call(null,inst_39714);
var state_39724__$1 = state_39724;
if(cljs.core.truth_(inst_39715)){
var statearr_39727_39859 = state_39724__$1;
(statearr_39727_39859[(1)] = (5));

} else {
var statearr_39728_39860 = state_39724__$1;
(statearr_39728_39860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (5))){
var state_39724__$1 = state_39724;
var statearr_39729_39861 = state_39724__$1;
(statearr_39729_39861[(2)] = null);

(statearr_39729_39861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (6))){
var state_39724__$1 = state_39724;
var statearr_39730_39862 = state_39724__$1;
(statearr_39730_39862[(2)] = null);

(statearr_39730_39862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39725 === (7))){
var inst_39720 = (state_39724[(2)]);
var state_39724__$1 = state_39724;
var statearr_39731_39863 = state_39724__$1;
(statearr_39731_39863[(2)] = inst_39720);

(statearr_39731_39863[(1)] = (3));


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
});})(__39844,c__39504__auto___39857,G__39687_39845,G__39687_39846__$1,n__4376__auto___39843,jobs,results,process,async))
;
return ((function (__39844,switch__39414__auto__,c__39504__auto___39857,G__39687_39845,G__39687_39846__$1,n__4376__auto___39843,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____0 = (function (){
var statearr_39732 = [null,null,null,null,null,null,null];
(statearr_39732[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__);

(statearr_39732[(1)] = (1));

return statearr_39732;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____1 = (function (state_39724){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_39724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e39733){if((e39733 instanceof Object)){
var ex__39418__auto__ = e39733;
var statearr_39734_39864 = state_39724;
(statearr_39734_39864[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39865 = state_39724;
state_39724 = G__39865;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__ = function(state_39724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____1.call(this,state_39724);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__;
})()
;})(__39844,switch__39414__auto__,c__39504__auto___39857,G__39687_39845,G__39687_39846__$1,n__4376__auto___39843,jobs,results,process,async))
})();
var state__39506__auto__ = (function (){var statearr_39735 = f__39505__auto__.call(null);
(statearr_39735[(6)] = c__39504__auto___39857);

return statearr_39735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(__39844,c__39504__auto___39857,G__39687_39845,G__39687_39846__$1,n__4376__auto___39843,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39687_39846__$1)].join('')));

}

var G__39866 = (__39844 + (1));
__39844 = G__39866;
continue;
} else {
}
break;
}

var c__39504__auto___39867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto___39867,jobs,results,process,async){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto___39867,jobs,results,process,async){
return (function (state_39757){
var state_val_39758 = (state_39757[(1)]);
if((state_val_39758 === (1))){
var state_39757__$1 = state_39757;
var statearr_39759_39868 = state_39757__$1;
(statearr_39759_39868[(2)] = null);

(statearr_39759_39868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39758 === (2))){
var state_39757__$1 = state_39757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39757__$1,(4),from);
} else {
if((state_val_39758 === (3))){
var inst_39755 = (state_39757[(2)]);
var state_39757__$1 = state_39757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39757__$1,inst_39755);
} else {
if((state_val_39758 === (4))){
var inst_39738 = (state_39757[(7)]);
var inst_39738__$1 = (state_39757[(2)]);
var inst_39739 = (inst_39738__$1 == null);
var state_39757__$1 = (function (){var statearr_39760 = state_39757;
(statearr_39760[(7)] = inst_39738__$1);

return statearr_39760;
})();
if(cljs.core.truth_(inst_39739)){
var statearr_39761_39869 = state_39757__$1;
(statearr_39761_39869[(1)] = (5));

} else {
var statearr_39762_39870 = state_39757__$1;
(statearr_39762_39870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39758 === (5))){
var inst_39741 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39757__$1 = state_39757;
var statearr_39763_39871 = state_39757__$1;
(statearr_39763_39871[(2)] = inst_39741);

(statearr_39763_39871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39758 === (6))){
var inst_39743 = (state_39757[(8)]);
var inst_39738 = (state_39757[(7)]);
var inst_39743__$1 = cljs.core.async.chan.call(null,(1));
var inst_39744 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39745 = [inst_39738,inst_39743__$1];
var inst_39746 = (new cljs.core.PersistentVector(null,2,(5),inst_39744,inst_39745,null));
var state_39757__$1 = (function (){var statearr_39764 = state_39757;
(statearr_39764[(8)] = inst_39743__$1);

return statearr_39764;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39757__$1,(8),jobs,inst_39746);
} else {
if((state_val_39758 === (7))){
var inst_39753 = (state_39757[(2)]);
var state_39757__$1 = state_39757;
var statearr_39765_39872 = state_39757__$1;
(statearr_39765_39872[(2)] = inst_39753);

(statearr_39765_39872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39758 === (8))){
var inst_39743 = (state_39757[(8)]);
var inst_39748 = (state_39757[(2)]);
var state_39757__$1 = (function (){var statearr_39766 = state_39757;
(statearr_39766[(9)] = inst_39748);

return statearr_39766;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39757__$1,(9),results,inst_39743);
} else {
if((state_val_39758 === (9))){
var inst_39750 = (state_39757[(2)]);
var state_39757__$1 = (function (){var statearr_39767 = state_39757;
(statearr_39767[(10)] = inst_39750);

return statearr_39767;
})();
var statearr_39768_39873 = state_39757__$1;
(statearr_39768_39873[(2)] = null);

(statearr_39768_39873[(1)] = (2));


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
});})(c__39504__auto___39867,jobs,results,process,async))
;
return ((function (switch__39414__auto__,c__39504__auto___39867,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____0 = (function (){
var statearr_39769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__);

(statearr_39769[(1)] = (1));

return statearr_39769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____1 = (function (state_39757){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_39757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e39770){if((e39770 instanceof Object)){
var ex__39418__auto__ = e39770;
var statearr_39771_39874 = state_39757;
(statearr_39771_39874[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39875 = state_39757;
state_39757 = G__39875;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__ = function(state_39757){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____1.call(this,state_39757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto___39867,jobs,results,process,async))
})();
var state__39506__auto__ = (function (){var statearr_39772 = f__39505__auto__.call(null);
(statearr_39772[(6)] = c__39504__auto___39867);

return statearr_39772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto___39867,jobs,results,process,async))
);


var c__39504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto__,jobs,results,process,async){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto__,jobs,results,process,async){
return (function (state_39810){
var state_val_39811 = (state_39810[(1)]);
if((state_val_39811 === (7))){
var inst_39806 = (state_39810[(2)]);
var state_39810__$1 = state_39810;
var statearr_39812_39876 = state_39810__$1;
(statearr_39812_39876[(2)] = inst_39806);

(statearr_39812_39876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (20))){
var state_39810__$1 = state_39810;
var statearr_39813_39877 = state_39810__$1;
(statearr_39813_39877[(2)] = null);

(statearr_39813_39877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (1))){
var state_39810__$1 = state_39810;
var statearr_39814_39878 = state_39810__$1;
(statearr_39814_39878[(2)] = null);

(statearr_39814_39878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (4))){
var inst_39775 = (state_39810[(7)]);
var inst_39775__$1 = (state_39810[(2)]);
var inst_39776 = (inst_39775__$1 == null);
var state_39810__$1 = (function (){var statearr_39815 = state_39810;
(statearr_39815[(7)] = inst_39775__$1);

return statearr_39815;
})();
if(cljs.core.truth_(inst_39776)){
var statearr_39816_39879 = state_39810__$1;
(statearr_39816_39879[(1)] = (5));

} else {
var statearr_39817_39880 = state_39810__$1;
(statearr_39817_39880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (15))){
var inst_39788 = (state_39810[(8)]);
var state_39810__$1 = state_39810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39810__$1,(18),to,inst_39788);
} else {
if((state_val_39811 === (21))){
var inst_39801 = (state_39810[(2)]);
var state_39810__$1 = state_39810;
var statearr_39818_39881 = state_39810__$1;
(statearr_39818_39881[(2)] = inst_39801);

(statearr_39818_39881[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (13))){
var inst_39803 = (state_39810[(2)]);
var state_39810__$1 = (function (){var statearr_39819 = state_39810;
(statearr_39819[(9)] = inst_39803);

return statearr_39819;
})();
var statearr_39820_39882 = state_39810__$1;
(statearr_39820_39882[(2)] = null);

(statearr_39820_39882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (6))){
var inst_39775 = (state_39810[(7)]);
var state_39810__$1 = state_39810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39810__$1,(11),inst_39775);
} else {
if((state_val_39811 === (17))){
var inst_39796 = (state_39810[(2)]);
var state_39810__$1 = state_39810;
if(cljs.core.truth_(inst_39796)){
var statearr_39821_39883 = state_39810__$1;
(statearr_39821_39883[(1)] = (19));

} else {
var statearr_39822_39884 = state_39810__$1;
(statearr_39822_39884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (3))){
var inst_39808 = (state_39810[(2)]);
var state_39810__$1 = state_39810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39810__$1,inst_39808);
} else {
if((state_val_39811 === (12))){
var inst_39785 = (state_39810[(10)]);
var state_39810__$1 = state_39810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39810__$1,(14),inst_39785);
} else {
if((state_val_39811 === (2))){
var state_39810__$1 = state_39810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39810__$1,(4),results);
} else {
if((state_val_39811 === (19))){
var state_39810__$1 = state_39810;
var statearr_39823_39885 = state_39810__$1;
(statearr_39823_39885[(2)] = null);

(statearr_39823_39885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (11))){
var inst_39785 = (state_39810[(2)]);
var state_39810__$1 = (function (){var statearr_39824 = state_39810;
(statearr_39824[(10)] = inst_39785);

return statearr_39824;
})();
var statearr_39825_39886 = state_39810__$1;
(statearr_39825_39886[(2)] = null);

(statearr_39825_39886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (9))){
var state_39810__$1 = state_39810;
var statearr_39826_39887 = state_39810__$1;
(statearr_39826_39887[(2)] = null);

(statearr_39826_39887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (5))){
var state_39810__$1 = state_39810;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39827_39888 = state_39810__$1;
(statearr_39827_39888[(1)] = (8));

} else {
var statearr_39828_39889 = state_39810__$1;
(statearr_39828_39889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (14))){
var inst_39788 = (state_39810[(8)]);
var inst_39790 = (state_39810[(11)]);
var inst_39788__$1 = (state_39810[(2)]);
var inst_39789 = (inst_39788__$1 == null);
var inst_39790__$1 = cljs.core.not.call(null,inst_39789);
var state_39810__$1 = (function (){var statearr_39829 = state_39810;
(statearr_39829[(8)] = inst_39788__$1);

(statearr_39829[(11)] = inst_39790__$1);

return statearr_39829;
})();
if(inst_39790__$1){
var statearr_39830_39890 = state_39810__$1;
(statearr_39830_39890[(1)] = (15));

} else {
var statearr_39831_39891 = state_39810__$1;
(statearr_39831_39891[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (16))){
var inst_39790 = (state_39810[(11)]);
var state_39810__$1 = state_39810;
var statearr_39832_39892 = state_39810__$1;
(statearr_39832_39892[(2)] = inst_39790);

(statearr_39832_39892[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (10))){
var inst_39782 = (state_39810[(2)]);
var state_39810__$1 = state_39810;
var statearr_39833_39893 = state_39810__$1;
(statearr_39833_39893[(2)] = inst_39782);

(statearr_39833_39893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (18))){
var inst_39793 = (state_39810[(2)]);
var state_39810__$1 = state_39810;
var statearr_39834_39894 = state_39810__$1;
(statearr_39834_39894[(2)] = inst_39793);

(statearr_39834_39894[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (8))){
var inst_39779 = cljs.core.async.close_BANG_.call(null,to);
var state_39810__$1 = state_39810;
var statearr_39835_39895 = state_39810__$1;
(statearr_39835_39895[(2)] = inst_39779);

(statearr_39835_39895[(1)] = (10));


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
});})(c__39504__auto__,jobs,results,process,async))
;
return ((function (switch__39414__auto__,c__39504__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____0 = (function (){
var statearr_39836 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__);

(statearr_39836[(1)] = (1));

return statearr_39836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____1 = (function (state_39810){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_39810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e39837){if((e39837 instanceof Object)){
var ex__39418__auto__ = e39837;
var statearr_39838_39896 = state_39810;
(statearr_39838_39896[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39897 = state_39810;
state_39810 = G__39897;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__ = function(state_39810){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____1.call(this,state_39810);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39415__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto__,jobs,results,process,async))
})();
var state__39506__auto__ = (function (){var statearr_39839 = f__39505__auto__.call(null);
(statearr_39839[(6)] = c__39504__auto__);

return statearr_39839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto__,jobs,results,process,async))
);

return c__39504__auto__;
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
var G__39899 = arguments.length;
switch (G__39899) {
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
var G__39902 = arguments.length;
switch (G__39902) {
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
var G__39905 = arguments.length;
switch (G__39905) {
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
var c__39504__auto___39954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto___39954,tc,fc){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto___39954,tc,fc){
return (function (state_39931){
var state_val_39932 = (state_39931[(1)]);
if((state_val_39932 === (7))){
var inst_39927 = (state_39931[(2)]);
var state_39931__$1 = state_39931;
var statearr_39933_39955 = state_39931__$1;
(statearr_39933_39955[(2)] = inst_39927);

(statearr_39933_39955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39932 === (1))){
var state_39931__$1 = state_39931;
var statearr_39934_39956 = state_39931__$1;
(statearr_39934_39956[(2)] = null);

(statearr_39934_39956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39932 === (4))){
var inst_39908 = (state_39931[(7)]);
var inst_39908__$1 = (state_39931[(2)]);
var inst_39909 = (inst_39908__$1 == null);
var state_39931__$1 = (function (){var statearr_39935 = state_39931;
(statearr_39935[(7)] = inst_39908__$1);

return statearr_39935;
})();
if(cljs.core.truth_(inst_39909)){
var statearr_39936_39957 = state_39931__$1;
(statearr_39936_39957[(1)] = (5));

} else {
var statearr_39937_39958 = state_39931__$1;
(statearr_39937_39958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39932 === (13))){
var state_39931__$1 = state_39931;
var statearr_39938_39959 = state_39931__$1;
(statearr_39938_39959[(2)] = null);

(statearr_39938_39959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39932 === (6))){
var inst_39908 = (state_39931[(7)]);
var inst_39914 = p.call(null,inst_39908);
var state_39931__$1 = state_39931;
if(cljs.core.truth_(inst_39914)){
var statearr_39939_39960 = state_39931__$1;
(statearr_39939_39960[(1)] = (9));

} else {
var statearr_39940_39961 = state_39931__$1;
(statearr_39940_39961[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39932 === (3))){
var inst_39929 = (state_39931[(2)]);
var state_39931__$1 = state_39931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39931__$1,inst_39929);
} else {
if((state_val_39932 === (12))){
var state_39931__$1 = state_39931;
var statearr_39941_39962 = state_39931__$1;
(statearr_39941_39962[(2)] = null);

(statearr_39941_39962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39932 === (2))){
var state_39931__$1 = state_39931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39931__$1,(4),ch);
} else {
if((state_val_39932 === (11))){
var inst_39908 = (state_39931[(7)]);
var inst_39918 = (state_39931[(2)]);
var state_39931__$1 = state_39931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39931__$1,(8),inst_39918,inst_39908);
} else {
if((state_val_39932 === (9))){
var state_39931__$1 = state_39931;
var statearr_39942_39963 = state_39931__$1;
(statearr_39942_39963[(2)] = tc);

(statearr_39942_39963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39932 === (5))){
var inst_39911 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39912 = cljs.core.async.close_BANG_.call(null,fc);
var state_39931__$1 = (function (){var statearr_39943 = state_39931;
(statearr_39943[(8)] = inst_39911);

return statearr_39943;
})();
var statearr_39944_39964 = state_39931__$1;
(statearr_39944_39964[(2)] = inst_39912);

(statearr_39944_39964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39932 === (14))){
var inst_39925 = (state_39931[(2)]);
var state_39931__$1 = state_39931;
var statearr_39945_39965 = state_39931__$1;
(statearr_39945_39965[(2)] = inst_39925);

(statearr_39945_39965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39932 === (10))){
var state_39931__$1 = state_39931;
var statearr_39946_39966 = state_39931__$1;
(statearr_39946_39966[(2)] = fc);

(statearr_39946_39966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39932 === (8))){
var inst_39920 = (state_39931[(2)]);
var state_39931__$1 = state_39931;
if(cljs.core.truth_(inst_39920)){
var statearr_39947_39967 = state_39931__$1;
(statearr_39947_39967[(1)] = (12));

} else {
var statearr_39948_39968 = state_39931__$1;
(statearr_39948_39968[(1)] = (13));

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
});})(c__39504__auto___39954,tc,fc))
;
return ((function (switch__39414__auto__,c__39504__auto___39954,tc,fc){
return (function() {
var cljs$core$async$state_machine__39415__auto__ = null;
var cljs$core$async$state_machine__39415__auto____0 = (function (){
var statearr_39949 = [null,null,null,null,null,null,null,null,null];
(statearr_39949[(0)] = cljs$core$async$state_machine__39415__auto__);

(statearr_39949[(1)] = (1));

return statearr_39949;
});
var cljs$core$async$state_machine__39415__auto____1 = (function (state_39931){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_39931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e39950){if((e39950 instanceof Object)){
var ex__39418__auto__ = e39950;
var statearr_39951_39969 = state_39931;
(statearr_39951_39969[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39970 = state_39931;
state_39931 = G__39970;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$state_machine__39415__auto__ = function(state_39931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39415__auto____1.call(this,state_39931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39415__auto____0;
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39415__auto____1;
return cljs$core$async$state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto___39954,tc,fc))
})();
var state__39506__auto__ = (function (){var statearr_39952 = f__39505__auto__.call(null);
(statearr_39952[(6)] = c__39504__auto___39954);

return statearr_39952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto___39954,tc,fc))
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
var c__39504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto__){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto__){
return (function (state_39991){
var state_val_39992 = (state_39991[(1)]);
if((state_val_39992 === (7))){
var inst_39987 = (state_39991[(2)]);
var state_39991__$1 = state_39991;
var statearr_39993_40011 = state_39991__$1;
(statearr_39993_40011[(2)] = inst_39987);

(statearr_39993_40011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39992 === (1))){
var inst_39971 = init;
var state_39991__$1 = (function (){var statearr_39994 = state_39991;
(statearr_39994[(7)] = inst_39971);

return statearr_39994;
})();
var statearr_39995_40012 = state_39991__$1;
(statearr_39995_40012[(2)] = null);

(statearr_39995_40012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39992 === (4))){
var inst_39974 = (state_39991[(8)]);
var inst_39974__$1 = (state_39991[(2)]);
var inst_39975 = (inst_39974__$1 == null);
var state_39991__$1 = (function (){var statearr_39996 = state_39991;
(statearr_39996[(8)] = inst_39974__$1);

return statearr_39996;
})();
if(cljs.core.truth_(inst_39975)){
var statearr_39997_40013 = state_39991__$1;
(statearr_39997_40013[(1)] = (5));

} else {
var statearr_39998_40014 = state_39991__$1;
(statearr_39998_40014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39992 === (6))){
var inst_39978 = (state_39991[(9)]);
var inst_39971 = (state_39991[(7)]);
var inst_39974 = (state_39991[(8)]);
var inst_39978__$1 = f.call(null,inst_39971,inst_39974);
var inst_39979 = cljs.core.reduced_QMARK_.call(null,inst_39978__$1);
var state_39991__$1 = (function (){var statearr_39999 = state_39991;
(statearr_39999[(9)] = inst_39978__$1);

return statearr_39999;
})();
if(inst_39979){
var statearr_40000_40015 = state_39991__$1;
(statearr_40000_40015[(1)] = (8));

} else {
var statearr_40001_40016 = state_39991__$1;
(statearr_40001_40016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39992 === (3))){
var inst_39989 = (state_39991[(2)]);
var state_39991__$1 = state_39991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39991__$1,inst_39989);
} else {
if((state_val_39992 === (2))){
var state_39991__$1 = state_39991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39991__$1,(4),ch);
} else {
if((state_val_39992 === (9))){
var inst_39978 = (state_39991[(9)]);
var inst_39971 = inst_39978;
var state_39991__$1 = (function (){var statearr_40002 = state_39991;
(statearr_40002[(7)] = inst_39971);

return statearr_40002;
})();
var statearr_40003_40017 = state_39991__$1;
(statearr_40003_40017[(2)] = null);

(statearr_40003_40017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39992 === (5))){
var inst_39971 = (state_39991[(7)]);
var state_39991__$1 = state_39991;
var statearr_40004_40018 = state_39991__$1;
(statearr_40004_40018[(2)] = inst_39971);

(statearr_40004_40018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39992 === (10))){
var inst_39985 = (state_39991[(2)]);
var state_39991__$1 = state_39991;
var statearr_40005_40019 = state_39991__$1;
(statearr_40005_40019[(2)] = inst_39985);

(statearr_40005_40019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39992 === (8))){
var inst_39978 = (state_39991[(9)]);
var inst_39981 = cljs.core.deref.call(null,inst_39978);
var state_39991__$1 = state_39991;
var statearr_40006_40020 = state_39991__$1;
(statearr_40006_40020[(2)] = inst_39981);

(statearr_40006_40020[(1)] = (10));


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
});})(c__39504__auto__))
;
return ((function (switch__39414__auto__,c__39504__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__39415__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39415__auto____0 = (function (){
var statearr_40007 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40007[(0)] = cljs$core$async$reduce_$_state_machine__39415__auto__);

(statearr_40007[(1)] = (1));

return statearr_40007;
});
var cljs$core$async$reduce_$_state_machine__39415__auto____1 = (function (state_39991){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_39991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e40008){if((e40008 instanceof Object)){
var ex__39418__auto__ = e40008;
var statearr_40009_40021 = state_39991;
(statearr_40009_40021[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40022 = state_39991;
state_39991 = G__40022;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39415__auto__ = function(state_39991){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39415__auto____1.call(this,state_39991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39415__auto____0;
cljs$core$async$reduce_$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39415__auto____1;
return cljs$core$async$reduce_$_state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto__))
})();
var state__39506__auto__ = (function (){var statearr_40010 = f__39505__auto__.call(null);
(statearr_40010[(6)] = c__39504__auto__);

return statearr_40010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto__))
);

return c__39504__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__39504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto__,f__$1){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto__,f__$1){
return (function (state_40028){
var state_val_40029 = (state_40028[(1)]);
if((state_val_40029 === (1))){
var inst_40023 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_40028__$1 = state_40028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40028__$1,(2),inst_40023);
} else {
if((state_val_40029 === (2))){
var inst_40025 = (state_40028[(2)]);
var inst_40026 = f__$1.call(null,inst_40025);
var state_40028__$1 = state_40028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40028__$1,inst_40026);
} else {
return null;
}
}
});})(c__39504__auto__,f__$1))
;
return ((function (switch__39414__auto__,c__39504__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__39415__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39415__auto____0 = (function (){
var statearr_40030 = [null,null,null,null,null,null,null];
(statearr_40030[(0)] = cljs$core$async$transduce_$_state_machine__39415__auto__);

(statearr_40030[(1)] = (1));

return statearr_40030;
});
var cljs$core$async$transduce_$_state_machine__39415__auto____1 = (function (state_40028){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_40028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e40031){if((e40031 instanceof Object)){
var ex__39418__auto__ = e40031;
var statearr_40032_40034 = state_40028;
(statearr_40032_40034[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40035 = state_40028;
state_40028 = G__40035;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39415__auto__ = function(state_40028){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39415__auto____1.call(this,state_40028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39415__auto____0;
cljs$core$async$transduce_$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39415__auto____1;
return cljs$core$async$transduce_$_state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto__,f__$1))
})();
var state__39506__auto__ = (function (){var statearr_40033 = f__39505__auto__.call(null);
(statearr_40033[(6)] = c__39504__auto__);

return statearr_40033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto__,f__$1))
);

return c__39504__auto__;
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
var G__40037 = arguments.length;
switch (G__40037) {
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
var c__39504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto__){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto__){
return (function (state_40062){
var state_val_40063 = (state_40062[(1)]);
if((state_val_40063 === (7))){
var inst_40044 = (state_40062[(2)]);
var state_40062__$1 = state_40062;
var statearr_40064_40085 = state_40062__$1;
(statearr_40064_40085[(2)] = inst_40044);

(statearr_40064_40085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40063 === (1))){
var inst_40038 = cljs.core.seq.call(null,coll);
var inst_40039 = inst_40038;
var state_40062__$1 = (function (){var statearr_40065 = state_40062;
(statearr_40065[(7)] = inst_40039);

return statearr_40065;
})();
var statearr_40066_40086 = state_40062__$1;
(statearr_40066_40086[(2)] = null);

(statearr_40066_40086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40063 === (4))){
var inst_40039 = (state_40062[(7)]);
var inst_40042 = cljs.core.first.call(null,inst_40039);
var state_40062__$1 = state_40062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40062__$1,(7),ch,inst_40042);
} else {
if((state_val_40063 === (13))){
var inst_40056 = (state_40062[(2)]);
var state_40062__$1 = state_40062;
var statearr_40067_40087 = state_40062__$1;
(statearr_40067_40087[(2)] = inst_40056);

(statearr_40067_40087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40063 === (6))){
var inst_40047 = (state_40062[(2)]);
var state_40062__$1 = state_40062;
if(cljs.core.truth_(inst_40047)){
var statearr_40068_40088 = state_40062__$1;
(statearr_40068_40088[(1)] = (8));

} else {
var statearr_40069_40089 = state_40062__$1;
(statearr_40069_40089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40063 === (3))){
var inst_40060 = (state_40062[(2)]);
var state_40062__$1 = state_40062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40062__$1,inst_40060);
} else {
if((state_val_40063 === (12))){
var state_40062__$1 = state_40062;
var statearr_40070_40090 = state_40062__$1;
(statearr_40070_40090[(2)] = null);

(statearr_40070_40090[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40063 === (2))){
var inst_40039 = (state_40062[(7)]);
var state_40062__$1 = state_40062;
if(cljs.core.truth_(inst_40039)){
var statearr_40071_40091 = state_40062__$1;
(statearr_40071_40091[(1)] = (4));

} else {
var statearr_40072_40092 = state_40062__$1;
(statearr_40072_40092[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40063 === (11))){
var inst_40053 = cljs.core.async.close_BANG_.call(null,ch);
var state_40062__$1 = state_40062;
var statearr_40073_40093 = state_40062__$1;
(statearr_40073_40093[(2)] = inst_40053);

(statearr_40073_40093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40063 === (9))){
var state_40062__$1 = state_40062;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40074_40094 = state_40062__$1;
(statearr_40074_40094[(1)] = (11));

} else {
var statearr_40075_40095 = state_40062__$1;
(statearr_40075_40095[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40063 === (5))){
var inst_40039 = (state_40062[(7)]);
var state_40062__$1 = state_40062;
var statearr_40076_40096 = state_40062__$1;
(statearr_40076_40096[(2)] = inst_40039);

(statearr_40076_40096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40063 === (10))){
var inst_40058 = (state_40062[(2)]);
var state_40062__$1 = state_40062;
var statearr_40077_40097 = state_40062__$1;
(statearr_40077_40097[(2)] = inst_40058);

(statearr_40077_40097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40063 === (8))){
var inst_40039 = (state_40062[(7)]);
var inst_40049 = cljs.core.next.call(null,inst_40039);
var inst_40039__$1 = inst_40049;
var state_40062__$1 = (function (){var statearr_40078 = state_40062;
(statearr_40078[(7)] = inst_40039__$1);

return statearr_40078;
})();
var statearr_40079_40098 = state_40062__$1;
(statearr_40079_40098[(2)] = null);

(statearr_40079_40098[(1)] = (2));


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
});})(c__39504__auto__))
;
return ((function (switch__39414__auto__,c__39504__auto__){
return (function() {
var cljs$core$async$state_machine__39415__auto__ = null;
var cljs$core$async$state_machine__39415__auto____0 = (function (){
var statearr_40080 = [null,null,null,null,null,null,null,null];
(statearr_40080[(0)] = cljs$core$async$state_machine__39415__auto__);

(statearr_40080[(1)] = (1));

return statearr_40080;
});
var cljs$core$async$state_machine__39415__auto____1 = (function (state_40062){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_40062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e40081){if((e40081 instanceof Object)){
var ex__39418__auto__ = e40081;
var statearr_40082_40099 = state_40062;
(statearr_40082_40099[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40100 = state_40062;
state_40062 = G__40100;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$state_machine__39415__auto__ = function(state_40062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39415__auto____1.call(this,state_40062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39415__auto____0;
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39415__auto____1;
return cljs$core$async$state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto__))
})();
var state__39506__auto__ = (function (){var statearr_40083 = f__39505__auto__.call(null);
(statearr_40083[(6)] = c__39504__auto__);

return statearr_40083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto__))
);

return c__39504__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async40101 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40101 = (function (ch,cs,meta40102){
this.ch = ch;
this.cs = cs;
this.meta40102 = meta40102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40103,meta40102__$1){
var self__ = this;
var _40103__$1 = this;
return (new cljs.core.async.t_cljs$core$async40101(self__.ch,self__.cs,meta40102__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40103){
var self__ = this;
var _40103__$1 = this;
return self__.meta40102;
});})(cs))
;

cljs.core.async.t_cljs$core$async40101.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40101.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40101.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40101.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40101.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40101.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40102","meta40102",-2066678411,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40101";

cljs.core.async.t_cljs$core$async40101.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40101");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40101.
 */
cljs.core.async.__GT_t_cljs$core$async40101 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40101(ch__$1,cs__$1,meta40102){
return (new cljs.core.async.t_cljs$core$async40101(ch__$1,cs__$1,meta40102));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40101(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__39504__auto___40323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto___40323,cs,m,dchan,dctr,done){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto___40323,cs,m,dchan,dctr,done){
return (function (state_40238){
var state_val_40239 = (state_40238[(1)]);
if((state_val_40239 === (7))){
var inst_40234 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40240_40324 = state_40238__$1;
(statearr_40240_40324[(2)] = inst_40234);

(statearr_40240_40324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (20))){
var inst_40137 = (state_40238[(7)]);
var inst_40149 = cljs.core.first.call(null,inst_40137);
var inst_40150 = cljs.core.nth.call(null,inst_40149,(0),null);
var inst_40151 = cljs.core.nth.call(null,inst_40149,(1),null);
var state_40238__$1 = (function (){var statearr_40241 = state_40238;
(statearr_40241[(8)] = inst_40150);

return statearr_40241;
})();
if(cljs.core.truth_(inst_40151)){
var statearr_40242_40325 = state_40238__$1;
(statearr_40242_40325[(1)] = (22));

} else {
var statearr_40243_40326 = state_40238__$1;
(statearr_40243_40326[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (27))){
var inst_40181 = (state_40238[(9)]);
var inst_40106 = (state_40238[(10)]);
var inst_40179 = (state_40238[(11)]);
var inst_40186 = (state_40238[(12)]);
var inst_40186__$1 = cljs.core._nth.call(null,inst_40179,inst_40181);
var inst_40187 = cljs.core.async.put_BANG_.call(null,inst_40186__$1,inst_40106,done);
var state_40238__$1 = (function (){var statearr_40244 = state_40238;
(statearr_40244[(12)] = inst_40186__$1);

return statearr_40244;
})();
if(cljs.core.truth_(inst_40187)){
var statearr_40245_40327 = state_40238__$1;
(statearr_40245_40327[(1)] = (30));

} else {
var statearr_40246_40328 = state_40238__$1;
(statearr_40246_40328[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (1))){
var state_40238__$1 = state_40238;
var statearr_40247_40329 = state_40238__$1;
(statearr_40247_40329[(2)] = null);

(statearr_40247_40329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (24))){
var inst_40137 = (state_40238[(7)]);
var inst_40156 = (state_40238[(2)]);
var inst_40157 = cljs.core.next.call(null,inst_40137);
var inst_40115 = inst_40157;
var inst_40116 = null;
var inst_40117 = (0);
var inst_40118 = (0);
var state_40238__$1 = (function (){var statearr_40248 = state_40238;
(statearr_40248[(13)] = inst_40115);

(statearr_40248[(14)] = inst_40117);

(statearr_40248[(15)] = inst_40156);

(statearr_40248[(16)] = inst_40116);

(statearr_40248[(17)] = inst_40118);

return statearr_40248;
})();
var statearr_40249_40330 = state_40238__$1;
(statearr_40249_40330[(2)] = null);

(statearr_40249_40330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (39))){
var state_40238__$1 = state_40238;
var statearr_40253_40331 = state_40238__$1;
(statearr_40253_40331[(2)] = null);

(statearr_40253_40331[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (4))){
var inst_40106 = (state_40238[(10)]);
var inst_40106__$1 = (state_40238[(2)]);
var inst_40107 = (inst_40106__$1 == null);
var state_40238__$1 = (function (){var statearr_40254 = state_40238;
(statearr_40254[(10)] = inst_40106__$1);

return statearr_40254;
})();
if(cljs.core.truth_(inst_40107)){
var statearr_40255_40332 = state_40238__$1;
(statearr_40255_40332[(1)] = (5));

} else {
var statearr_40256_40333 = state_40238__$1;
(statearr_40256_40333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (15))){
var inst_40115 = (state_40238[(13)]);
var inst_40117 = (state_40238[(14)]);
var inst_40116 = (state_40238[(16)]);
var inst_40118 = (state_40238[(17)]);
var inst_40133 = (state_40238[(2)]);
var inst_40134 = (inst_40118 + (1));
var tmp40250 = inst_40115;
var tmp40251 = inst_40117;
var tmp40252 = inst_40116;
var inst_40115__$1 = tmp40250;
var inst_40116__$1 = tmp40252;
var inst_40117__$1 = tmp40251;
var inst_40118__$1 = inst_40134;
var state_40238__$1 = (function (){var statearr_40257 = state_40238;
(statearr_40257[(18)] = inst_40133);

(statearr_40257[(13)] = inst_40115__$1);

(statearr_40257[(14)] = inst_40117__$1);

(statearr_40257[(16)] = inst_40116__$1);

(statearr_40257[(17)] = inst_40118__$1);

return statearr_40257;
})();
var statearr_40258_40334 = state_40238__$1;
(statearr_40258_40334[(2)] = null);

(statearr_40258_40334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (21))){
var inst_40160 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40262_40335 = state_40238__$1;
(statearr_40262_40335[(2)] = inst_40160);

(statearr_40262_40335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (31))){
var inst_40186 = (state_40238[(12)]);
var inst_40190 = done.call(null,null);
var inst_40191 = cljs.core.async.untap_STAR_.call(null,m,inst_40186);
var state_40238__$1 = (function (){var statearr_40263 = state_40238;
(statearr_40263[(19)] = inst_40190);

return statearr_40263;
})();
var statearr_40264_40336 = state_40238__$1;
(statearr_40264_40336[(2)] = inst_40191);

(statearr_40264_40336[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (32))){
var inst_40181 = (state_40238[(9)]);
var inst_40179 = (state_40238[(11)]);
var inst_40180 = (state_40238[(20)]);
var inst_40178 = (state_40238[(21)]);
var inst_40193 = (state_40238[(2)]);
var inst_40194 = (inst_40181 + (1));
var tmp40259 = inst_40179;
var tmp40260 = inst_40180;
var tmp40261 = inst_40178;
var inst_40178__$1 = tmp40261;
var inst_40179__$1 = tmp40259;
var inst_40180__$1 = tmp40260;
var inst_40181__$1 = inst_40194;
var state_40238__$1 = (function (){var statearr_40265 = state_40238;
(statearr_40265[(9)] = inst_40181__$1);

(statearr_40265[(22)] = inst_40193);

(statearr_40265[(11)] = inst_40179__$1);

(statearr_40265[(20)] = inst_40180__$1);

(statearr_40265[(21)] = inst_40178__$1);

return statearr_40265;
})();
var statearr_40266_40337 = state_40238__$1;
(statearr_40266_40337[(2)] = null);

(statearr_40266_40337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (40))){
var inst_40206 = (state_40238[(23)]);
var inst_40210 = done.call(null,null);
var inst_40211 = cljs.core.async.untap_STAR_.call(null,m,inst_40206);
var state_40238__$1 = (function (){var statearr_40267 = state_40238;
(statearr_40267[(24)] = inst_40210);

return statearr_40267;
})();
var statearr_40268_40338 = state_40238__$1;
(statearr_40268_40338[(2)] = inst_40211);

(statearr_40268_40338[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (33))){
var inst_40197 = (state_40238[(25)]);
var inst_40199 = cljs.core.chunked_seq_QMARK_.call(null,inst_40197);
var state_40238__$1 = state_40238;
if(inst_40199){
var statearr_40269_40339 = state_40238__$1;
(statearr_40269_40339[(1)] = (36));

} else {
var statearr_40270_40340 = state_40238__$1;
(statearr_40270_40340[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (13))){
var inst_40127 = (state_40238[(26)]);
var inst_40130 = cljs.core.async.close_BANG_.call(null,inst_40127);
var state_40238__$1 = state_40238;
var statearr_40271_40341 = state_40238__$1;
(statearr_40271_40341[(2)] = inst_40130);

(statearr_40271_40341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (22))){
var inst_40150 = (state_40238[(8)]);
var inst_40153 = cljs.core.async.close_BANG_.call(null,inst_40150);
var state_40238__$1 = state_40238;
var statearr_40272_40342 = state_40238__$1;
(statearr_40272_40342[(2)] = inst_40153);

(statearr_40272_40342[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (36))){
var inst_40197 = (state_40238[(25)]);
var inst_40201 = cljs.core.chunk_first.call(null,inst_40197);
var inst_40202 = cljs.core.chunk_rest.call(null,inst_40197);
var inst_40203 = cljs.core.count.call(null,inst_40201);
var inst_40178 = inst_40202;
var inst_40179 = inst_40201;
var inst_40180 = inst_40203;
var inst_40181 = (0);
var state_40238__$1 = (function (){var statearr_40273 = state_40238;
(statearr_40273[(9)] = inst_40181);

(statearr_40273[(11)] = inst_40179);

(statearr_40273[(20)] = inst_40180);

(statearr_40273[(21)] = inst_40178);

return statearr_40273;
})();
var statearr_40274_40343 = state_40238__$1;
(statearr_40274_40343[(2)] = null);

(statearr_40274_40343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (41))){
var inst_40197 = (state_40238[(25)]);
var inst_40213 = (state_40238[(2)]);
var inst_40214 = cljs.core.next.call(null,inst_40197);
var inst_40178 = inst_40214;
var inst_40179 = null;
var inst_40180 = (0);
var inst_40181 = (0);
var state_40238__$1 = (function (){var statearr_40275 = state_40238;
(statearr_40275[(9)] = inst_40181);

(statearr_40275[(11)] = inst_40179);

(statearr_40275[(20)] = inst_40180);

(statearr_40275[(21)] = inst_40178);

(statearr_40275[(27)] = inst_40213);

return statearr_40275;
})();
var statearr_40276_40344 = state_40238__$1;
(statearr_40276_40344[(2)] = null);

(statearr_40276_40344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (43))){
var state_40238__$1 = state_40238;
var statearr_40277_40345 = state_40238__$1;
(statearr_40277_40345[(2)] = null);

(statearr_40277_40345[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (29))){
var inst_40222 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40278_40346 = state_40238__$1;
(statearr_40278_40346[(2)] = inst_40222);

(statearr_40278_40346[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (44))){
var inst_40231 = (state_40238[(2)]);
var state_40238__$1 = (function (){var statearr_40279 = state_40238;
(statearr_40279[(28)] = inst_40231);

return statearr_40279;
})();
var statearr_40280_40347 = state_40238__$1;
(statearr_40280_40347[(2)] = null);

(statearr_40280_40347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (6))){
var inst_40170 = (state_40238[(29)]);
var inst_40169 = cljs.core.deref.call(null,cs);
var inst_40170__$1 = cljs.core.keys.call(null,inst_40169);
var inst_40171 = cljs.core.count.call(null,inst_40170__$1);
var inst_40172 = cljs.core.reset_BANG_.call(null,dctr,inst_40171);
var inst_40177 = cljs.core.seq.call(null,inst_40170__$1);
var inst_40178 = inst_40177;
var inst_40179 = null;
var inst_40180 = (0);
var inst_40181 = (0);
var state_40238__$1 = (function (){var statearr_40281 = state_40238;
(statearr_40281[(9)] = inst_40181);

(statearr_40281[(29)] = inst_40170__$1);

(statearr_40281[(11)] = inst_40179);

(statearr_40281[(30)] = inst_40172);

(statearr_40281[(20)] = inst_40180);

(statearr_40281[(21)] = inst_40178);

return statearr_40281;
})();
var statearr_40282_40348 = state_40238__$1;
(statearr_40282_40348[(2)] = null);

(statearr_40282_40348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (28))){
var inst_40197 = (state_40238[(25)]);
var inst_40178 = (state_40238[(21)]);
var inst_40197__$1 = cljs.core.seq.call(null,inst_40178);
var state_40238__$1 = (function (){var statearr_40283 = state_40238;
(statearr_40283[(25)] = inst_40197__$1);

return statearr_40283;
})();
if(inst_40197__$1){
var statearr_40284_40349 = state_40238__$1;
(statearr_40284_40349[(1)] = (33));

} else {
var statearr_40285_40350 = state_40238__$1;
(statearr_40285_40350[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (25))){
var inst_40181 = (state_40238[(9)]);
var inst_40180 = (state_40238[(20)]);
var inst_40183 = (inst_40181 < inst_40180);
var inst_40184 = inst_40183;
var state_40238__$1 = state_40238;
if(cljs.core.truth_(inst_40184)){
var statearr_40286_40351 = state_40238__$1;
(statearr_40286_40351[(1)] = (27));

} else {
var statearr_40287_40352 = state_40238__$1;
(statearr_40287_40352[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (34))){
var state_40238__$1 = state_40238;
var statearr_40288_40353 = state_40238__$1;
(statearr_40288_40353[(2)] = null);

(statearr_40288_40353[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (17))){
var state_40238__$1 = state_40238;
var statearr_40289_40354 = state_40238__$1;
(statearr_40289_40354[(2)] = null);

(statearr_40289_40354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (3))){
var inst_40236 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40238__$1,inst_40236);
} else {
if((state_val_40239 === (12))){
var inst_40165 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40290_40355 = state_40238__$1;
(statearr_40290_40355[(2)] = inst_40165);

(statearr_40290_40355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (2))){
var state_40238__$1 = state_40238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40238__$1,(4),ch);
} else {
if((state_val_40239 === (23))){
var state_40238__$1 = state_40238;
var statearr_40291_40356 = state_40238__$1;
(statearr_40291_40356[(2)] = null);

(statearr_40291_40356[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (35))){
var inst_40220 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40292_40357 = state_40238__$1;
(statearr_40292_40357[(2)] = inst_40220);

(statearr_40292_40357[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (19))){
var inst_40137 = (state_40238[(7)]);
var inst_40141 = cljs.core.chunk_first.call(null,inst_40137);
var inst_40142 = cljs.core.chunk_rest.call(null,inst_40137);
var inst_40143 = cljs.core.count.call(null,inst_40141);
var inst_40115 = inst_40142;
var inst_40116 = inst_40141;
var inst_40117 = inst_40143;
var inst_40118 = (0);
var state_40238__$1 = (function (){var statearr_40293 = state_40238;
(statearr_40293[(13)] = inst_40115);

(statearr_40293[(14)] = inst_40117);

(statearr_40293[(16)] = inst_40116);

(statearr_40293[(17)] = inst_40118);

return statearr_40293;
})();
var statearr_40294_40358 = state_40238__$1;
(statearr_40294_40358[(2)] = null);

(statearr_40294_40358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (11))){
var inst_40137 = (state_40238[(7)]);
var inst_40115 = (state_40238[(13)]);
var inst_40137__$1 = cljs.core.seq.call(null,inst_40115);
var state_40238__$1 = (function (){var statearr_40295 = state_40238;
(statearr_40295[(7)] = inst_40137__$1);

return statearr_40295;
})();
if(inst_40137__$1){
var statearr_40296_40359 = state_40238__$1;
(statearr_40296_40359[(1)] = (16));

} else {
var statearr_40297_40360 = state_40238__$1;
(statearr_40297_40360[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (9))){
var inst_40167 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40298_40361 = state_40238__$1;
(statearr_40298_40361[(2)] = inst_40167);

(statearr_40298_40361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (5))){
var inst_40113 = cljs.core.deref.call(null,cs);
var inst_40114 = cljs.core.seq.call(null,inst_40113);
var inst_40115 = inst_40114;
var inst_40116 = null;
var inst_40117 = (0);
var inst_40118 = (0);
var state_40238__$1 = (function (){var statearr_40299 = state_40238;
(statearr_40299[(13)] = inst_40115);

(statearr_40299[(14)] = inst_40117);

(statearr_40299[(16)] = inst_40116);

(statearr_40299[(17)] = inst_40118);

return statearr_40299;
})();
var statearr_40300_40362 = state_40238__$1;
(statearr_40300_40362[(2)] = null);

(statearr_40300_40362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (14))){
var state_40238__$1 = state_40238;
var statearr_40301_40363 = state_40238__$1;
(statearr_40301_40363[(2)] = null);

(statearr_40301_40363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (45))){
var inst_40228 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40302_40364 = state_40238__$1;
(statearr_40302_40364[(2)] = inst_40228);

(statearr_40302_40364[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (26))){
var inst_40170 = (state_40238[(29)]);
var inst_40224 = (state_40238[(2)]);
var inst_40225 = cljs.core.seq.call(null,inst_40170);
var state_40238__$1 = (function (){var statearr_40303 = state_40238;
(statearr_40303[(31)] = inst_40224);

return statearr_40303;
})();
if(inst_40225){
var statearr_40304_40365 = state_40238__$1;
(statearr_40304_40365[(1)] = (42));

} else {
var statearr_40305_40366 = state_40238__$1;
(statearr_40305_40366[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (16))){
var inst_40137 = (state_40238[(7)]);
var inst_40139 = cljs.core.chunked_seq_QMARK_.call(null,inst_40137);
var state_40238__$1 = state_40238;
if(inst_40139){
var statearr_40306_40367 = state_40238__$1;
(statearr_40306_40367[(1)] = (19));

} else {
var statearr_40307_40368 = state_40238__$1;
(statearr_40307_40368[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (38))){
var inst_40217 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40308_40369 = state_40238__$1;
(statearr_40308_40369[(2)] = inst_40217);

(statearr_40308_40369[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (30))){
var state_40238__$1 = state_40238;
var statearr_40309_40370 = state_40238__$1;
(statearr_40309_40370[(2)] = null);

(statearr_40309_40370[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (10))){
var inst_40116 = (state_40238[(16)]);
var inst_40118 = (state_40238[(17)]);
var inst_40126 = cljs.core._nth.call(null,inst_40116,inst_40118);
var inst_40127 = cljs.core.nth.call(null,inst_40126,(0),null);
var inst_40128 = cljs.core.nth.call(null,inst_40126,(1),null);
var state_40238__$1 = (function (){var statearr_40310 = state_40238;
(statearr_40310[(26)] = inst_40127);

return statearr_40310;
})();
if(cljs.core.truth_(inst_40128)){
var statearr_40311_40371 = state_40238__$1;
(statearr_40311_40371[(1)] = (13));

} else {
var statearr_40312_40372 = state_40238__$1;
(statearr_40312_40372[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (18))){
var inst_40163 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40313_40373 = state_40238__$1;
(statearr_40313_40373[(2)] = inst_40163);

(statearr_40313_40373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (42))){
var state_40238__$1 = state_40238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40238__$1,(45),dchan);
} else {
if((state_val_40239 === (37))){
var inst_40106 = (state_40238[(10)]);
var inst_40206 = (state_40238[(23)]);
var inst_40197 = (state_40238[(25)]);
var inst_40206__$1 = cljs.core.first.call(null,inst_40197);
var inst_40207 = cljs.core.async.put_BANG_.call(null,inst_40206__$1,inst_40106,done);
var state_40238__$1 = (function (){var statearr_40314 = state_40238;
(statearr_40314[(23)] = inst_40206__$1);

return statearr_40314;
})();
if(cljs.core.truth_(inst_40207)){
var statearr_40315_40374 = state_40238__$1;
(statearr_40315_40374[(1)] = (39));

} else {
var statearr_40316_40375 = state_40238__$1;
(statearr_40316_40375[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (8))){
var inst_40117 = (state_40238[(14)]);
var inst_40118 = (state_40238[(17)]);
var inst_40120 = (inst_40118 < inst_40117);
var inst_40121 = inst_40120;
var state_40238__$1 = state_40238;
if(cljs.core.truth_(inst_40121)){
var statearr_40317_40376 = state_40238__$1;
(statearr_40317_40376[(1)] = (10));

} else {
var statearr_40318_40377 = state_40238__$1;
(statearr_40318_40377[(1)] = (11));

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
});})(c__39504__auto___40323,cs,m,dchan,dctr,done))
;
return ((function (switch__39414__auto__,c__39504__auto___40323,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__39415__auto__ = null;
var cljs$core$async$mult_$_state_machine__39415__auto____0 = (function (){
var statearr_40319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40319[(0)] = cljs$core$async$mult_$_state_machine__39415__auto__);

(statearr_40319[(1)] = (1));

return statearr_40319;
});
var cljs$core$async$mult_$_state_machine__39415__auto____1 = (function (state_40238){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_40238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e40320){if((e40320 instanceof Object)){
var ex__39418__auto__ = e40320;
var statearr_40321_40378 = state_40238;
(statearr_40321_40378[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40379 = state_40238;
state_40238 = G__40379;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39415__auto__ = function(state_40238){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39415__auto____1.call(this,state_40238);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39415__auto____0;
cljs$core$async$mult_$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39415__auto____1;
return cljs$core$async$mult_$_state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto___40323,cs,m,dchan,dctr,done))
})();
var state__39506__auto__ = (function (){var statearr_40322 = f__39505__auto__.call(null);
(statearr_40322[(6)] = c__39504__auto___40323);

return statearr_40322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto___40323,cs,m,dchan,dctr,done))
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
var G__40381 = arguments.length;
switch (G__40381) {
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
var len__4499__auto___40393 = arguments.length;
var i__4500__auto___40394 = (0);
while(true){
if((i__4500__auto___40394 < len__4499__auto___40393)){
args__4502__auto__.push((arguments[i__4500__auto___40394]));

var G__40395 = (i__4500__auto___40394 + (1));
i__4500__auto___40394 = G__40395;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40387){
var map__40388 = p__40387;
var map__40388__$1 = ((((!((map__40388 == null)))?(((((map__40388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40388):map__40388);
var opts = map__40388__$1;
var statearr_40390_40396 = state;
(statearr_40390_40396[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__40388,map__40388__$1,opts){
return (function (val){
var statearr_40391_40397 = state;
(statearr_40391_40397[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40388,map__40388__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_40392_40398 = state;
(statearr_40392_40398[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40383){
var G__40384 = cljs.core.first.call(null,seq40383);
var seq40383__$1 = cljs.core.next.call(null,seq40383);
var G__40385 = cljs.core.first.call(null,seq40383__$1);
var seq40383__$2 = cljs.core.next.call(null,seq40383__$1);
var G__40386 = cljs.core.first.call(null,seq40383__$2);
var seq40383__$3 = cljs.core.next.call(null,seq40383__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40384,G__40385,G__40386,seq40383__$3);
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
if(typeof cljs.core.async.t_cljs$core$async40399 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40399 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40400){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40400 = meta40400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40401,meta40400__$1){
var self__ = this;
var _40401__$1 = this;
return (new cljs.core.async.t_cljs$core$async40399(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40400__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40399.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40401){
var self__ = this;
var _40401__$1 = this;
return self__.meta40400;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40399.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40399.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40399.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40399.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40399.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40399.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40399.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40399.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async40399.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40400","meta40400",-1665087276,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40399.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40399";

cljs.core.async.t_cljs$core$async40399.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40399");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40399.
 */
cljs.core.async.__GT_t_cljs$core$async40399 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40399(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40400){
return (new cljs.core.async.t_cljs$core$async40399(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40400));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40399(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39504__auto___40563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto___40563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto___40563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40503){
var state_val_40504 = (state_40503[(1)]);
if((state_val_40504 === (7))){
var inst_40418 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
var statearr_40505_40564 = state_40503__$1;
(statearr_40505_40564[(2)] = inst_40418);

(statearr_40505_40564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (20))){
var inst_40430 = (state_40503[(7)]);
var state_40503__$1 = state_40503;
var statearr_40506_40565 = state_40503__$1;
(statearr_40506_40565[(2)] = inst_40430);

(statearr_40506_40565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (27))){
var state_40503__$1 = state_40503;
var statearr_40507_40566 = state_40503__$1;
(statearr_40507_40566[(2)] = null);

(statearr_40507_40566[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (1))){
var inst_40405 = (state_40503[(8)]);
var inst_40405__$1 = calc_state.call(null);
var inst_40407 = (inst_40405__$1 == null);
var inst_40408 = cljs.core.not.call(null,inst_40407);
var state_40503__$1 = (function (){var statearr_40508 = state_40503;
(statearr_40508[(8)] = inst_40405__$1);

return statearr_40508;
})();
if(inst_40408){
var statearr_40509_40567 = state_40503__$1;
(statearr_40509_40567[(1)] = (2));

} else {
var statearr_40510_40568 = state_40503__$1;
(statearr_40510_40568[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (24))){
var inst_40454 = (state_40503[(9)]);
var inst_40463 = (state_40503[(10)]);
var inst_40477 = (state_40503[(11)]);
var inst_40477__$1 = inst_40454.call(null,inst_40463);
var state_40503__$1 = (function (){var statearr_40511 = state_40503;
(statearr_40511[(11)] = inst_40477__$1);

return statearr_40511;
})();
if(cljs.core.truth_(inst_40477__$1)){
var statearr_40512_40569 = state_40503__$1;
(statearr_40512_40569[(1)] = (29));

} else {
var statearr_40513_40570 = state_40503__$1;
(statearr_40513_40570[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (4))){
var inst_40421 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
if(cljs.core.truth_(inst_40421)){
var statearr_40514_40571 = state_40503__$1;
(statearr_40514_40571[(1)] = (8));

} else {
var statearr_40515_40572 = state_40503__$1;
(statearr_40515_40572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (15))){
var inst_40448 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
if(cljs.core.truth_(inst_40448)){
var statearr_40516_40573 = state_40503__$1;
(statearr_40516_40573[(1)] = (19));

} else {
var statearr_40517_40574 = state_40503__$1;
(statearr_40517_40574[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (21))){
var inst_40453 = (state_40503[(12)]);
var inst_40453__$1 = (state_40503[(2)]);
var inst_40454 = cljs.core.get.call(null,inst_40453__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40455 = cljs.core.get.call(null,inst_40453__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40456 = cljs.core.get.call(null,inst_40453__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40503__$1 = (function (){var statearr_40518 = state_40503;
(statearr_40518[(9)] = inst_40454);

(statearr_40518[(12)] = inst_40453__$1);

(statearr_40518[(13)] = inst_40455);

return statearr_40518;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40503__$1,(22),inst_40456);
} else {
if((state_val_40504 === (31))){
var inst_40485 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
if(cljs.core.truth_(inst_40485)){
var statearr_40519_40575 = state_40503__$1;
(statearr_40519_40575[(1)] = (32));

} else {
var statearr_40520_40576 = state_40503__$1;
(statearr_40520_40576[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (32))){
var inst_40462 = (state_40503[(14)]);
var state_40503__$1 = state_40503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40503__$1,(35),out,inst_40462);
} else {
if((state_val_40504 === (33))){
var inst_40453 = (state_40503[(12)]);
var inst_40430 = inst_40453;
var state_40503__$1 = (function (){var statearr_40521 = state_40503;
(statearr_40521[(7)] = inst_40430);

return statearr_40521;
})();
var statearr_40522_40577 = state_40503__$1;
(statearr_40522_40577[(2)] = null);

(statearr_40522_40577[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (13))){
var inst_40430 = (state_40503[(7)]);
var inst_40437 = inst_40430.cljs$lang$protocol_mask$partition0$;
var inst_40438 = (inst_40437 & (64));
var inst_40439 = inst_40430.cljs$core$ISeq$;
var inst_40440 = (cljs.core.PROTOCOL_SENTINEL === inst_40439);
var inst_40441 = ((inst_40438) || (inst_40440));
var state_40503__$1 = state_40503;
if(cljs.core.truth_(inst_40441)){
var statearr_40523_40578 = state_40503__$1;
(statearr_40523_40578[(1)] = (16));

} else {
var statearr_40524_40579 = state_40503__$1;
(statearr_40524_40579[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (22))){
var inst_40462 = (state_40503[(14)]);
var inst_40463 = (state_40503[(10)]);
var inst_40461 = (state_40503[(2)]);
var inst_40462__$1 = cljs.core.nth.call(null,inst_40461,(0),null);
var inst_40463__$1 = cljs.core.nth.call(null,inst_40461,(1),null);
var inst_40464 = (inst_40462__$1 == null);
var inst_40465 = cljs.core._EQ_.call(null,inst_40463__$1,change);
var inst_40466 = ((inst_40464) || (inst_40465));
var state_40503__$1 = (function (){var statearr_40525 = state_40503;
(statearr_40525[(14)] = inst_40462__$1);

(statearr_40525[(10)] = inst_40463__$1);

return statearr_40525;
})();
if(cljs.core.truth_(inst_40466)){
var statearr_40526_40580 = state_40503__$1;
(statearr_40526_40580[(1)] = (23));

} else {
var statearr_40527_40581 = state_40503__$1;
(statearr_40527_40581[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (36))){
var inst_40453 = (state_40503[(12)]);
var inst_40430 = inst_40453;
var state_40503__$1 = (function (){var statearr_40528 = state_40503;
(statearr_40528[(7)] = inst_40430);

return statearr_40528;
})();
var statearr_40529_40582 = state_40503__$1;
(statearr_40529_40582[(2)] = null);

(statearr_40529_40582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (29))){
var inst_40477 = (state_40503[(11)]);
var state_40503__$1 = state_40503;
var statearr_40530_40583 = state_40503__$1;
(statearr_40530_40583[(2)] = inst_40477);

(statearr_40530_40583[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (6))){
var state_40503__$1 = state_40503;
var statearr_40531_40584 = state_40503__$1;
(statearr_40531_40584[(2)] = false);

(statearr_40531_40584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (28))){
var inst_40473 = (state_40503[(2)]);
var inst_40474 = calc_state.call(null);
var inst_40430 = inst_40474;
var state_40503__$1 = (function (){var statearr_40532 = state_40503;
(statearr_40532[(15)] = inst_40473);

(statearr_40532[(7)] = inst_40430);

return statearr_40532;
})();
var statearr_40533_40585 = state_40503__$1;
(statearr_40533_40585[(2)] = null);

(statearr_40533_40585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (25))){
var inst_40499 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
var statearr_40534_40586 = state_40503__$1;
(statearr_40534_40586[(2)] = inst_40499);

(statearr_40534_40586[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (34))){
var inst_40497 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
var statearr_40535_40587 = state_40503__$1;
(statearr_40535_40587[(2)] = inst_40497);

(statearr_40535_40587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (17))){
var state_40503__$1 = state_40503;
var statearr_40536_40588 = state_40503__$1;
(statearr_40536_40588[(2)] = false);

(statearr_40536_40588[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (3))){
var state_40503__$1 = state_40503;
var statearr_40537_40589 = state_40503__$1;
(statearr_40537_40589[(2)] = false);

(statearr_40537_40589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (12))){
var inst_40501 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40503__$1,inst_40501);
} else {
if((state_val_40504 === (2))){
var inst_40405 = (state_40503[(8)]);
var inst_40410 = inst_40405.cljs$lang$protocol_mask$partition0$;
var inst_40411 = (inst_40410 & (64));
var inst_40412 = inst_40405.cljs$core$ISeq$;
var inst_40413 = (cljs.core.PROTOCOL_SENTINEL === inst_40412);
var inst_40414 = ((inst_40411) || (inst_40413));
var state_40503__$1 = state_40503;
if(cljs.core.truth_(inst_40414)){
var statearr_40538_40590 = state_40503__$1;
(statearr_40538_40590[(1)] = (5));

} else {
var statearr_40539_40591 = state_40503__$1;
(statearr_40539_40591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (23))){
var inst_40462 = (state_40503[(14)]);
var inst_40468 = (inst_40462 == null);
var state_40503__$1 = state_40503;
if(cljs.core.truth_(inst_40468)){
var statearr_40540_40592 = state_40503__$1;
(statearr_40540_40592[(1)] = (26));

} else {
var statearr_40541_40593 = state_40503__$1;
(statearr_40541_40593[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (35))){
var inst_40488 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
if(cljs.core.truth_(inst_40488)){
var statearr_40542_40594 = state_40503__$1;
(statearr_40542_40594[(1)] = (36));

} else {
var statearr_40543_40595 = state_40503__$1;
(statearr_40543_40595[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (19))){
var inst_40430 = (state_40503[(7)]);
var inst_40450 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40430);
var state_40503__$1 = state_40503;
var statearr_40544_40596 = state_40503__$1;
(statearr_40544_40596[(2)] = inst_40450);

(statearr_40544_40596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (11))){
var inst_40430 = (state_40503[(7)]);
var inst_40434 = (inst_40430 == null);
var inst_40435 = cljs.core.not.call(null,inst_40434);
var state_40503__$1 = state_40503;
if(inst_40435){
var statearr_40545_40597 = state_40503__$1;
(statearr_40545_40597[(1)] = (13));

} else {
var statearr_40546_40598 = state_40503__$1;
(statearr_40546_40598[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (9))){
var inst_40405 = (state_40503[(8)]);
var state_40503__$1 = state_40503;
var statearr_40547_40599 = state_40503__$1;
(statearr_40547_40599[(2)] = inst_40405);

(statearr_40547_40599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (5))){
var state_40503__$1 = state_40503;
var statearr_40548_40600 = state_40503__$1;
(statearr_40548_40600[(2)] = true);

(statearr_40548_40600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (14))){
var state_40503__$1 = state_40503;
var statearr_40549_40601 = state_40503__$1;
(statearr_40549_40601[(2)] = false);

(statearr_40549_40601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (26))){
var inst_40463 = (state_40503[(10)]);
var inst_40470 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40463);
var state_40503__$1 = state_40503;
var statearr_40550_40602 = state_40503__$1;
(statearr_40550_40602[(2)] = inst_40470);

(statearr_40550_40602[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (16))){
var state_40503__$1 = state_40503;
var statearr_40551_40603 = state_40503__$1;
(statearr_40551_40603[(2)] = true);

(statearr_40551_40603[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (38))){
var inst_40493 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
var statearr_40552_40604 = state_40503__$1;
(statearr_40552_40604[(2)] = inst_40493);

(statearr_40552_40604[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (30))){
var inst_40454 = (state_40503[(9)]);
var inst_40463 = (state_40503[(10)]);
var inst_40455 = (state_40503[(13)]);
var inst_40480 = cljs.core.empty_QMARK_.call(null,inst_40454);
var inst_40481 = inst_40455.call(null,inst_40463);
var inst_40482 = cljs.core.not.call(null,inst_40481);
var inst_40483 = ((inst_40480) && (inst_40482));
var state_40503__$1 = state_40503;
var statearr_40553_40605 = state_40503__$1;
(statearr_40553_40605[(2)] = inst_40483);

(statearr_40553_40605[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (10))){
var inst_40405 = (state_40503[(8)]);
var inst_40426 = (state_40503[(2)]);
var inst_40427 = cljs.core.get.call(null,inst_40426,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40428 = cljs.core.get.call(null,inst_40426,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40429 = cljs.core.get.call(null,inst_40426,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40430 = inst_40405;
var state_40503__$1 = (function (){var statearr_40554 = state_40503;
(statearr_40554[(16)] = inst_40427);

(statearr_40554[(17)] = inst_40428);

(statearr_40554[(18)] = inst_40429);

(statearr_40554[(7)] = inst_40430);

return statearr_40554;
})();
var statearr_40555_40606 = state_40503__$1;
(statearr_40555_40606[(2)] = null);

(statearr_40555_40606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (18))){
var inst_40445 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
var statearr_40556_40607 = state_40503__$1;
(statearr_40556_40607[(2)] = inst_40445);

(statearr_40556_40607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (37))){
var state_40503__$1 = state_40503;
var statearr_40557_40608 = state_40503__$1;
(statearr_40557_40608[(2)] = null);

(statearr_40557_40608[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (8))){
var inst_40405 = (state_40503[(8)]);
var inst_40423 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40405);
var state_40503__$1 = state_40503;
var statearr_40558_40609 = state_40503__$1;
(statearr_40558_40609[(2)] = inst_40423);

(statearr_40558_40609[(1)] = (10));


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
});})(c__39504__auto___40563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__39414__auto__,c__39504__auto___40563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__39415__auto__ = null;
var cljs$core$async$mix_$_state_machine__39415__auto____0 = (function (){
var statearr_40559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40559[(0)] = cljs$core$async$mix_$_state_machine__39415__auto__);

(statearr_40559[(1)] = (1));

return statearr_40559;
});
var cljs$core$async$mix_$_state_machine__39415__auto____1 = (function (state_40503){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_40503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e40560){if((e40560 instanceof Object)){
var ex__39418__auto__ = e40560;
var statearr_40561_40610 = state_40503;
(statearr_40561_40610[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40611 = state_40503;
state_40503 = G__40611;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39415__auto__ = function(state_40503){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39415__auto____1.call(this,state_40503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39415__auto____0;
cljs$core$async$mix_$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39415__auto____1;
return cljs$core$async$mix_$_state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto___40563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__39506__auto__ = (function (){var statearr_40562 = f__39505__auto__.call(null);
(statearr_40562[(6)] = c__39504__auto___40563);

return statearr_40562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto___40563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__40613 = arguments.length;
switch (G__40613) {
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
var G__40617 = arguments.length;
switch (G__40617) {
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
return (function (p1__40615_SHARP_){
if(cljs.core.truth_(p1__40615_SHARP_.call(null,topic))){
return p1__40615_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40615_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40618 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40618 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40619){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40619 = meta40619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40620,meta40619__$1){
var self__ = this;
var _40620__$1 = this;
return (new cljs.core.async.t_cljs$core$async40618(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40619__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40620){
var self__ = this;
var _40620__$1 = this;
return self__.meta40619;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40618.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40618.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40618.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40618.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40618.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40618.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40618.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40619","meta40619",-611263549,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40618.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40618";

cljs.core.async.t_cljs$core$async40618.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40618");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40618.
 */
cljs.core.async.__GT_t_cljs$core$async40618 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40618(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40619){
return (new cljs.core.async.t_cljs$core$async40618(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40619));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40618(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39504__auto___40738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto___40738,mults,ensure_mult,p){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto___40738,mults,ensure_mult,p){
return (function (state_40692){
var state_val_40693 = (state_40692[(1)]);
if((state_val_40693 === (7))){
var inst_40688 = (state_40692[(2)]);
var state_40692__$1 = state_40692;
var statearr_40694_40739 = state_40692__$1;
(statearr_40694_40739[(2)] = inst_40688);

(statearr_40694_40739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (20))){
var state_40692__$1 = state_40692;
var statearr_40695_40740 = state_40692__$1;
(statearr_40695_40740[(2)] = null);

(statearr_40695_40740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (1))){
var state_40692__$1 = state_40692;
var statearr_40696_40741 = state_40692__$1;
(statearr_40696_40741[(2)] = null);

(statearr_40696_40741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (24))){
var inst_40671 = (state_40692[(7)]);
var inst_40680 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40671);
var state_40692__$1 = state_40692;
var statearr_40697_40742 = state_40692__$1;
(statearr_40697_40742[(2)] = inst_40680);

(statearr_40697_40742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (4))){
var inst_40623 = (state_40692[(8)]);
var inst_40623__$1 = (state_40692[(2)]);
var inst_40624 = (inst_40623__$1 == null);
var state_40692__$1 = (function (){var statearr_40698 = state_40692;
(statearr_40698[(8)] = inst_40623__$1);

return statearr_40698;
})();
if(cljs.core.truth_(inst_40624)){
var statearr_40699_40743 = state_40692__$1;
(statearr_40699_40743[(1)] = (5));

} else {
var statearr_40700_40744 = state_40692__$1;
(statearr_40700_40744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (15))){
var inst_40665 = (state_40692[(2)]);
var state_40692__$1 = state_40692;
var statearr_40701_40745 = state_40692__$1;
(statearr_40701_40745[(2)] = inst_40665);

(statearr_40701_40745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (21))){
var inst_40685 = (state_40692[(2)]);
var state_40692__$1 = (function (){var statearr_40702 = state_40692;
(statearr_40702[(9)] = inst_40685);

return statearr_40702;
})();
var statearr_40703_40746 = state_40692__$1;
(statearr_40703_40746[(2)] = null);

(statearr_40703_40746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (13))){
var inst_40647 = (state_40692[(10)]);
var inst_40649 = cljs.core.chunked_seq_QMARK_.call(null,inst_40647);
var state_40692__$1 = state_40692;
if(inst_40649){
var statearr_40704_40747 = state_40692__$1;
(statearr_40704_40747[(1)] = (16));

} else {
var statearr_40705_40748 = state_40692__$1;
(statearr_40705_40748[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (22))){
var inst_40677 = (state_40692[(2)]);
var state_40692__$1 = state_40692;
if(cljs.core.truth_(inst_40677)){
var statearr_40706_40749 = state_40692__$1;
(statearr_40706_40749[(1)] = (23));

} else {
var statearr_40707_40750 = state_40692__$1;
(statearr_40707_40750[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (6))){
var inst_40673 = (state_40692[(11)]);
var inst_40623 = (state_40692[(8)]);
var inst_40671 = (state_40692[(7)]);
var inst_40671__$1 = topic_fn.call(null,inst_40623);
var inst_40672 = cljs.core.deref.call(null,mults);
var inst_40673__$1 = cljs.core.get.call(null,inst_40672,inst_40671__$1);
var state_40692__$1 = (function (){var statearr_40708 = state_40692;
(statearr_40708[(11)] = inst_40673__$1);

(statearr_40708[(7)] = inst_40671__$1);

return statearr_40708;
})();
if(cljs.core.truth_(inst_40673__$1)){
var statearr_40709_40751 = state_40692__$1;
(statearr_40709_40751[(1)] = (19));

} else {
var statearr_40710_40752 = state_40692__$1;
(statearr_40710_40752[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (25))){
var inst_40682 = (state_40692[(2)]);
var state_40692__$1 = state_40692;
var statearr_40711_40753 = state_40692__$1;
(statearr_40711_40753[(2)] = inst_40682);

(statearr_40711_40753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (17))){
var inst_40647 = (state_40692[(10)]);
var inst_40656 = cljs.core.first.call(null,inst_40647);
var inst_40657 = cljs.core.async.muxch_STAR_.call(null,inst_40656);
var inst_40658 = cljs.core.async.close_BANG_.call(null,inst_40657);
var inst_40659 = cljs.core.next.call(null,inst_40647);
var inst_40633 = inst_40659;
var inst_40634 = null;
var inst_40635 = (0);
var inst_40636 = (0);
var state_40692__$1 = (function (){var statearr_40712 = state_40692;
(statearr_40712[(12)] = inst_40658);

(statearr_40712[(13)] = inst_40633);

(statearr_40712[(14)] = inst_40634);

(statearr_40712[(15)] = inst_40636);

(statearr_40712[(16)] = inst_40635);

return statearr_40712;
})();
var statearr_40713_40754 = state_40692__$1;
(statearr_40713_40754[(2)] = null);

(statearr_40713_40754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (3))){
var inst_40690 = (state_40692[(2)]);
var state_40692__$1 = state_40692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40692__$1,inst_40690);
} else {
if((state_val_40693 === (12))){
var inst_40667 = (state_40692[(2)]);
var state_40692__$1 = state_40692;
var statearr_40714_40755 = state_40692__$1;
(statearr_40714_40755[(2)] = inst_40667);

(statearr_40714_40755[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (2))){
var state_40692__$1 = state_40692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40692__$1,(4),ch);
} else {
if((state_val_40693 === (23))){
var state_40692__$1 = state_40692;
var statearr_40715_40756 = state_40692__$1;
(statearr_40715_40756[(2)] = null);

(statearr_40715_40756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (19))){
var inst_40673 = (state_40692[(11)]);
var inst_40623 = (state_40692[(8)]);
var inst_40675 = cljs.core.async.muxch_STAR_.call(null,inst_40673);
var state_40692__$1 = state_40692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40692__$1,(22),inst_40675,inst_40623);
} else {
if((state_val_40693 === (11))){
var inst_40633 = (state_40692[(13)]);
var inst_40647 = (state_40692[(10)]);
var inst_40647__$1 = cljs.core.seq.call(null,inst_40633);
var state_40692__$1 = (function (){var statearr_40716 = state_40692;
(statearr_40716[(10)] = inst_40647__$1);

return statearr_40716;
})();
if(inst_40647__$1){
var statearr_40717_40757 = state_40692__$1;
(statearr_40717_40757[(1)] = (13));

} else {
var statearr_40718_40758 = state_40692__$1;
(statearr_40718_40758[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (9))){
var inst_40669 = (state_40692[(2)]);
var state_40692__$1 = state_40692;
var statearr_40719_40759 = state_40692__$1;
(statearr_40719_40759[(2)] = inst_40669);

(statearr_40719_40759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (5))){
var inst_40630 = cljs.core.deref.call(null,mults);
var inst_40631 = cljs.core.vals.call(null,inst_40630);
var inst_40632 = cljs.core.seq.call(null,inst_40631);
var inst_40633 = inst_40632;
var inst_40634 = null;
var inst_40635 = (0);
var inst_40636 = (0);
var state_40692__$1 = (function (){var statearr_40720 = state_40692;
(statearr_40720[(13)] = inst_40633);

(statearr_40720[(14)] = inst_40634);

(statearr_40720[(15)] = inst_40636);

(statearr_40720[(16)] = inst_40635);

return statearr_40720;
})();
var statearr_40721_40760 = state_40692__$1;
(statearr_40721_40760[(2)] = null);

(statearr_40721_40760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (14))){
var state_40692__$1 = state_40692;
var statearr_40725_40761 = state_40692__$1;
(statearr_40725_40761[(2)] = null);

(statearr_40725_40761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (16))){
var inst_40647 = (state_40692[(10)]);
var inst_40651 = cljs.core.chunk_first.call(null,inst_40647);
var inst_40652 = cljs.core.chunk_rest.call(null,inst_40647);
var inst_40653 = cljs.core.count.call(null,inst_40651);
var inst_40633 = inst_40652;
var inst_40634 = inst_40651;
var inst_40635 = inst_40653;
var inst_40636 = (0);
var state_40692__$1 = (function (){var statearr_40726 = state_40692;
(statearr_40726[(13)] = inst_40633);

(statearr_40726[(14)] = inst_40634);

(statearr_40726[(15)] = inst_40636);

(statearr_40726[(16)] = inst_40635);

return statearr_40726;
})();
var statearr_40727_40762 = state_40692__$1;
(statearr_40727_40762[(2)] = null);

(statearr_40727_40762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (10))){
var inst_40633 = (state_40692[(13)]);
var inst_40634 = (state_40692[(14)]);
var inst_40636 = (state_40692[(15)]);
var inst_40635 = (state_40692[(16)]);
var inst_40641 = cljs.core._nth.call(null,inst_40634,inst_40636);
var inst_40642 = cljs.core.async.muxch_STAR_.call(null,inst_40641);
var inst_40643 = cljs.core.async.close_BANG_.call(null,inst_40642);
var inst_40644 = (inst_40636 + (1));
var tmp40722 = inst_40633;
var tmp40723 = inst_40634;
var tmp40724 = inst_40635;
var inst_40633__$1 = tmp40722;
var inst_40634__$1 = tmp40723;
var inst_40635__$1 = tmp40724;
var inst_40636__$1 = inst_40644;
var state_40692__$1 = (function (){var statearr_40728 = state_40692;
(statearr_40728[(17)] = inst_40643);

(statearr_40728[(13)] = inst_40633__$1);

(statearr_40728[(14)] = inst_40634__$1);

(statearr_40728[(15)] = inst_40636__$1);

(statearr_40728[(16)] = inst_40635__$1);

return statearr_40728;
})();
var statearr_40729_40763 = state_40692__$1;
(statearr_40729_40763[(2)] = null);

(statearr_40729_40763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (18))){
var inst_40662 = (state_40692[(2)]);
var state_40692__$1 = state_40692;
var statearr_40730_40764 = state_40692__$1;
(statearr_40730_40764[(2)] = inst_40662);

(statearr_40730_40764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (8))){
var inst_40636 = (state_40692[(15)]);
var inst_40635 = (state_40692[(16)]);
var inst_40638 = (inst_40636 < inst_40635);
var inst_40639 = inst_40638;
var state_40692__$1 = state_40692;
if(cljs.core.truth_(inst_40639)){
var statearr_40731_40765 = state_40692__$1;
(statearr_40731_40765[(1)] = (10));

} else {
var statearr_40732_40766 = state_40692__$1;
(statearr_40732_40766[(1)] = (11));

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
});})(c__39504__auto___40738,mults,ensure_mult,p))
;
return ((function (switch__39414__auto__,c__39504__auto___40738,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__39415__auto__ = null;
var cljs$core$async$state_machine__39415__auto____0 = (function (){
var statearr_40733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40733[(0)] = cljs$core$async$state_machine__39415__auto__);

(statearr_40733[(1)] = (1));

return statearr_40733;
});
var cljs$core$async$state_machine__39415__auto____1 = (function (state_40692){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_40692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e40734){if((e40734 instanceof Object)){
var ex__39418__auto__ = e40734;
var statearr_40735_40767 = state_40692;
(statearr_40735_40767[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40768 = state_40692;
state_40692 = G__40768;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$state_machine__39415__auto__ = function(state_40692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39415__auto____1.call(this,state_40692);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39415__auto____0;
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39415__auto____1;
return cljs$core$async$state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto___40738,mults,ensure_mult,p))
})();
var state__39506__auto__ = (function (){var statearr_40736 = f__39505__auto__.call(null);
(statearr_40736[(6)] = c__39504__auto___40738);

return statearr_40736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto___40738,mults,ensure_mult,p))
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
var G__40770 = arguments.length;
switch (G__40770) {
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
var G__40773 = arguments.length;
switch (G__40773) {
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
var G__40776 = arguments.length;
switch (G__40776) {
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
var c__39504__auto___40843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto___40843,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto___40843,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40815){
var state_val_40816 = (state_40815[(1)]);
if((state_val_40816 === (7))){
var state_40815__$1 = state_40815;
var statearr_40817_40844 = state_40815__$1;
(statearr_40817_40844[(2)] = null);

(statearr_40817_40844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40816 === (1))){
var state_40815__$1 = state_40815;
var statearr_40818_40845 = state_40815__$1;
(statearr_40818_40845[(2)] = null);

(statearr_40818_40845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40816 === (4))){
var inst_40779 = (state_40815[(7)]);
var inst_40781 = (inst_40779 < cnt);
var state_40815__$1 = state_40815;
if(cljs.core.truth_(inst_40781)){
var statearr_40819_40846 = state_40815__$1;
(statearr_40819_40846[(1)] = (6));

} else {
var statearr_40820_40847 = state_40815__$1;
(statearr_40820_40847[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40816 === (15))){
var inst_40811 = (state_40815[(2)]);
var state_40815__$1 = state_40815;
var statearr_40821_40848 = state_40815__$1;
(statearr_40821_40848[(2)] = inst_40811);

(statearr_40821_40848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40816 === (13))){
var inst_40804 = cljs.core.async.close_BANG_.call(null,out);
var state_40815__$1 = state_40815;
var statearr_40822_40849 = state_40815__$1;
(statearr_40822_40849[(2)] = inst_40804);

(statearr_40822_40849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40816 === (6))){
var state_40815__$1 = state_40815;
var statearr_40823_40850 = state_40815__$1;
(statearr_40823_40850[(2)] = null);

(statearr_40823_40850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40816 === (3))){
var inst_40813 = (state_40815[(2)]);
var state_40815__$1 = state_40815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40815__$1,inst_40813);
} else {
if((state_val_40816 === (12))){
var inst_40801 = (state_40815[(8)]);
var inst_40801__$1 = (state_40815[(2)]);
var inst_40802 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40801__$1);
var state_40815__$1 = (function (){var statearr_40824 = state_40815;
(statearr_40824[(8)] = inst_40801__$1);

return statearr_40824;
})();
if(cljs.core.truth_(inst_40802)){
var statearr_40825_40851 = state_40815__$1;
(statearr_40825_40851[(1)] = (13));

} else {
var statearr_40826_40852 = state_40815__$1;
(statearr_40826_40852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40816 === (2))){
var inst_40778 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40779 = (0);
var state_40815__$1 = (function (){var statearr_40827 = state_40815;
(statearr_40827[(9)] = inst_40778);

(statearr_40827[(7)] = inst_40779);

return statearr_40827;
})();
var statearr_40828_40853 = state_40815__$1;
(statearr_40828_40853[(2)] = null);

(statearr_40828_40853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40816 === (11))){
var inst_40779 = (state_40815[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40815,(10),Object,null,(9));
var inst_40788 = chs__$1.call(null,inst_40779);
var inst_40789 = done.call(null,inst_40779);
var inst_40790 = cljs.core.async.take_BANG_.call(null,inst_40788,inst_40789);
var state_40815__$1 = state_40815;
var statearr_40829_40854 = state_40815__$1;
(statearr_40829_40854[(2)] = inst_40790);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40815__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40816 === (9))){
var inst_40779 = (state_40815[(7)]);
var inst_40792 = (state_40815[(2)]);
var inst_40793 = (inst_40779 + (1));
var inst_40779__$1 = inst_40793;
var state_40815__$1 = (function (){var statearr_40830 = state_40815;
(statearr_40830[(10)] = inst_40792);

(statearr_40830[(7)] = inst_40779__$1);

return statearr_40830;
})();
var statearr_40831_40855 = state_40815__$1;
(statearr_40831_40855[(2)] = null);

(statearr_40831_40855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40816 === (5))){
var inst_40799 = (state_40815[(2)]);
var state_40815__$1 = (function (){var statearr_40832 = state_40815;
(statearr_40832[(11)] = inst_40799);

return statearr_40832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40815__$1,(12),dchan);
} else {
if((state_val_40816 === (14))){
var inst_40801 = (state_40815[(8)]);
var inst_40806 = cljs.core.apply.call(null,f,inst_40801);
var state_40815__$1 = state_40815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40815__$1,(16),out,inst_40806);
} else {
if((state_val_40816 === (16))){
var inst_40808 = (state_40815[(2)]);
var state_40815__$1 = (function (){var statearr_40833 = state_40815;
(statearr_40833[(12)] = inst_40808);

return statearr_40833;
})();
var statearr_40834_40856 = state_40815__$1;
(statearr_40834_40856[(2)] = null);

(statearr_40834_40856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40816 === (10))){
var inst_40783 = (state_40815[(2)]);
var inst_40784 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40815__$1 = (function (){var statearr_40835 = state_40815;
(statearr_40835[(13)] = inst_40783);

return statearr_40835;
})();
var statearr_40836_40857 = state_40815__$1;
(statearr_40836_40857[(2)] = inst_40784);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40815__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40816 === (8))){
var inst_40797 = (state_40815[(2)]);
var state_40815__$1 = state_40815;
var statearr_40837_40858 = state_40815__$1;
(statearr_40837_40858[(2)] = inst_40797);

(statearr_40837_40858[(1)] = (5));


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
});})(c__39504__auto___40843,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__39414__auto__,c__39504__auto___40843,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__39415__auto__ = null;
var cljs$core$async$state_machine__39415__auto____0 = (function (){
var statearr_40838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40838[(0)] = cljs$core$async$state_machine__39415__auto__);

(statearr_40838[(1)] = (1));

return statearr_40838;
});
var cljs$core$async$state_machine__39415__auto____1 = (function (state_40815){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_40815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e40839){if((e40839 instanceof Object)){
var ex__39418__auto__ = e40839;
var statearr_40840_40859 = state_40815;
(statearr_40840_40859[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40860 = state_40815;
state_40815 = G__40860;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$state_machine__39415__auto__ = function(state_40815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39415__auto____1.call(this,state_40815);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39415__auto____0;
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39415__auto____1;
return cljs$core$async$state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto___40843,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__39506__auto__ = (function (){var statearr_40841 = f__39505__auto__.call(null);
(statearr_40841[(6)] = c__39504__auto___40843);

return statearr_40841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto___40843,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__40863 = arguments.length;
switch (G__40863) {
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
var c__39504__auto___40917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto___40917,out){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto___40917,out){
return (function (state_40895){
var state_val_40896 = (state_40895[(1)]);
if((state_val_40896 === (7))){
var inst_40874 = (state_40895[(7)]);
var inst_40875 = (state_40895[(8)]);
var inst_40874__$1 = (state_40895[(2)]);
var inst_40875__$1 = cljs.core.nth.call(null,inst_40874__$1,(0),null);
var inst_40876 = cljs.core.nth.call(null,inst_40874__$1,(1),null);
var inst_40877 = (inst_40875__$1 == null);
var state_40895__$1 = (function (){var statearr_40897 = state_40895;
(statearr_40897[(9)] = inst_40876);

(statearr_40897[(7)] = inst_40874__$1);

(statearr_40897[(8)] = inst_40875__$1);

return statearr_40897;
})();
if(cljs.core.truth_(inst_40877)){
var statearr_40898_40918 = state_40895__$1;
(statearr_40898_40918[(1)] = (8));

} else {
var statearr_40899_40919 = state_40895__$1;
(statearr_40899_40919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40896 === (1))){
var inst_40864 = cljs.core.vec.call(null,chs);
var inst_40865 = inst_40864;
var state_40895__$1 = (function (){var statearr_40900 = state_40895;
(statearr_40900[(10)] = inst_40865);

return statearr_40900;
})();
var statearr_40901_40920 = state_40895__$1;
(statearr_40901_40920[(2)] = null);

(statearr_40901_40920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40896 === (4))){
var inst_40865 = (state_40895[(10)]);
var state_40895__$1 = state_40895;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40895__$1,(7),inst_40865);
} else {
if((state_val_40896 === (6))){
var inst_40891 = (state_40895[(2)]);
var state_40895__$1 = state_40895;
var statearr_40902_40921 = state_40895__$1;
(statearr_40902_40921[(2)] = inst_40891);

(statearr_40902_40921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40896 === (3))){
var inst_40893 = (state_40895[(2)]);
var state_40895__$1 = state_40895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40895__$1,inst_40893);
} else {
if((state_val_40896 === (2))){
var inst_40865 = (state_40895[(10)]);
var inst_40867 = cljs.core.count.call(null,inst_40865);
var inst_40868 = (inst_40867 > (0));
var state_40895__$1 = state_40895;
if(cljs.core.truth_(inst_40868)){
var statearr_40904_40922 = state_40895__$1;
(statearr_40904_40922[(1)] = (4));

} else {
var statearr_40905_40923 = state_40895__$1;
(statearr_40905_40923[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40896 === (11))){
var inst_40865 = (state_40895[(10)]);
var inst_40884 = (state_40895[(2)]);
var tmp40903 = inst_40865;
var inst_40865__$1 = tmp40903;
var state_40895__$1 = (function (){var statearr_40906 = state_40895;
(statearr_40906[(10)] = inst_40865__$1);

(statearr_40906[(11)] = inst_40884);

return statearr_40906;
})();
var statearr_40907_40924 = state_40895__$1;
(statearr_40907_40924[(2)] = null);

(statearr_40907_40924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40896 === (9))){
var inst_40875 = (state_40895[(8)]);
var state_40895__$1 = state_40895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40895__$1,(11),out,inst_40875);
} else {
if((state_val_40896 === (5))){
var inst_40889 = cljs.core.async.close_BANG_.call(null,out);
var state_40895__$1 = state_40895;
var statearr_40908_40925 = state_40895__$1;
(statearr_40908_40925[(2)] = inst_40889);

(statearr_40908_40925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40896 === (10))){
var inst_40887 = (state_40895[(2)]);
var state_40895__$1 = state_40895;
var statearr_40909_40926 = state_40895__$1;
(statearr_40909_40926[(2)] = inst_40887);

(statearr_40909_40926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40896 === (8))){
var inst_40865 = (state_40895[(10)]);
var inst_40876 = (state_40895[(9)]);
var inst_40874 = (state_40895[(7)]);
var inst_40875 = (state_40895[(8)]);
var inst_40879 = (function (){var cs = inst_40865;
var vec__40870 = inst_40874;
var v = inst_40875;
var c = inst_40876;
return ((function (cs,vec__40870,v,c,inst_40865,inst_40876,inst_40874,inst_40875,state_val_40896,c__39504__auto___40917,out){
return (function (p1__40861_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40861_SHARP_);
});
;})(cs,vec__40870,v,c,inst_40865,inst_40876,inst_40874,inst_40875,state_val_40896,c__39504__auto___40917,out))
})();
var inst_40880 = cljs.core.filterv.call(null,inst_40879,inst_40865);
var inst_40865__$1 = inst_40880;
var state_40895__$1 = (function (){var statearr_40910 = state_40895;
(statearr_40910[(10)] = inst_40865__$1);

return statearr_40910;
})();
var statearr_40911_40927 = state_40895__$1;
(statearr_40911_40927[(2)] = null);

(statearr_40911_40927[(1)] = (2));


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
});})(c__39504__auto___40917,out))
;
return ((function (switch__39414__auto__,c__39504__auto___40917,out){
return (function() {
var cljs$core$async$state_machine__39415__auto__ = null;
var cljs$core$async$state_machine__39415__auto____0 = (function (){
var statearr_40912 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40912[(0)] = cljs$core$async$state_machine__39415__auto__);

(statearr_40912[(1)] = (1));

return statearr_40912;
});
var cljs$core$async$state_machine__39415__auto____1 = (function (state_40895){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_40895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e40913){if((e40913 instanceof Object)){
var ex__39418__auto__ = e40913;
var statearr_40914_40928 = state_40895;
(statearr_40914_40928[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40929 = state_40895;
state_40895 = G__40929;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$state_machine__39415__auto__ = function(state_40895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39415__auto____1.call(this,state_40895);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39415__auto____0;
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39415__auto____1;
return cljs$core$async$state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto___40917,out))
})();
var state__39506__auto__ = (function (){var statearr_40915 = f__39505__auto__.call(null);
(statearr_40915[(6)] = c__39504__auto___40917);

return statearr_40915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto___40917,out))
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
var G__40931 = arguments.length;
switch (G__40931) {
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
var c__39504__auto___40976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto___40976,out){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto___40976,out){
return (function (state_40955){
var state_val_40956 = (state_40955[(1)]);
if((state_val_40956 === (7))){
var inst_40937 = (state_40955[(7)]);
var inst_40937__$1 = (state_40955[(2)]);
var inst_40938 = (inst_40937__$1 == null);
var inst_40939 = cljs.core.not.call(null,inst_40938);
var state_40955__$1 = (function (){var statearr_40957 = state_40955;
(statearr_40957[(7)] = inst_40937__$1);

return statearr_40957;
})();
if(inst_40939){
var statearr_40958_40977 = state_40955__$1;
(statearr_40958_40977[(1)] = (8));

} else {
var statearr_40959_40978 = state_40955__$1;
(statearr_40959_40978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (1))){
var inst_40932 = (0);
var state_40955__$1 = (function (){var statearr_40960 = state_40955;
(statearr_40960[(8)] = inst_40932);

return statearr_40960;
})();
var statearr_40961_40979 = state_40955__$1;
(statearr_40961_40979[(2)] = null);

(statearr_40961_40979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (4))){
var state_40955__$1 = state_40955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40955__$1,(7),ch);
} else {
if((state_val_40956 === (6))){
var inst_40950 = (state_40955[(2)]);
var state_40955__$1 = state_40955;
var statearr_40962_40980 = state_40955__$1;
(statearr_40962_40980[(2)] = inst_40950);

(statearr_40962_40980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (3))){
var inst_40952 = (state_40955[(2)]);
var inst_40953 = cljs.core.async.close_BANG_.call(null,out);
var state_40955__$1 = (function (){var statearr_40963 = state_40955;
(statearr_40963[(9)] = inst_40952);

return statearr_40963;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40955__$1,inst_40953);
} else {
if((state_val_40956 === (2))){
var inst_40932 = (state_40955[(8)]);
var inst_40934 = (inst_40932 < n);
var state_40955__$1 = state_40955;
if(cljs.core.truth_(inst_40934)){
var statearr_40964_40981 = state_40955__$1;
(statearr_40964_40981[(1)] = (4));

} else {
var statearr_40965_40982 = state_40955__$1;
(statearr_40965_40982[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (11))){
var inst_40932 = (state_40955[(8)]);
var inst_40942 = (state_40955[(2)]);
var inst_40943 = (inst_40932 + (1));
var inst_40932__$1 = inst_40943;
var state_40955__$1 = (function (){var statearr_40966 = state_40955;
(statearr_40966[(10)] = inst_40942);

(statearr_40966[(8)] = inst_40932__$1);

return statearr_40966;
})();
var statearr_40967_40983 = state_40955__$1;
(statearr_40967_40983[(2)] = null);

(statearr_40967_40983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (9))){
var state_40955__$1 = state_40955;
var statearr_40968_40984 = state_40955__$1;
(statearr_40968_40984[(2)] = null);

(statearr_40968_40984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (5))){
var state_40955__$1 = state_40955;
var statearr_40969_40985 = state_40955__$1;
(statearr_40969_40985[(2)] = null);

(statearr_40969_40985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (10))){
var inst_40947 = (state_40955[(2)]);
var state_40955__$1 = state_40955;
var statearr_40970_40986 = state_40955__$1;
(statearr_40970_40986[(2)] = inst_40947);

(statearr_40970_40986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40956 === (8))){
var inst_40937 = (state_40955[(7)]);
var state_40955__$1 = state_40955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40955__$1,(11),out,inst_40937);
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
});})(c__39504__auto___40976,out))
;
return ((function (switch__39414__auto__,c__39504__auto___40976,out){
return (function() {
var cljs$core$async$state_machine__39415__auto__ = null;
var cljs$core$async$state_machine__39415__auto____0 = (function (){
var statearr_40971 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40971[(0)] = cljs$core$async$state_machine__39415__auto__);

(statearr_40971[(1)] = (1));

return statearr_40971;
});
var cljs$core$async$state_machine__39415__auto____1 = (function (state_40955){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_40955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e40972){if((e40972 instanceof Object)){
var ex__39418__auto__ = e40972;
var statearr_40973_40987 = state_40955;
(statearr_40973_40987[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40988 = state_40955;
state_40955 = G__40988;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$state_machine__39415__auto__ = function(state_40955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39415__auto____1.call(this,state_40955);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39415__auto____0;
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39415__auto____1;
return cljs$core$async$state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto___40976,out))
})();
var state__39506__auto__ = (function (){var statearr_40974 = f__39505__auto__.call(null);
(statearr_40974[(6)] = c__39504__auto___40976);

return statearr_40974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto___40976,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40990 = (function (f,ch,meta40991){
this.f = f;
this.ch = ch;
this.meta40991 = meta40991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40992,meta40991__$1){
var self__ = this;
var _40992__$1 = this;
return (new cljs.core.async.t_cljs$core$async40990(self__.f,self__.ch,meta40991__$1));
});

cljs.core.async.t_cljs$core$async40990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40992){
var self__ = this;
var _40992__$1 = this;
return self__.meta40991;
});

cljs.core.async.t_cljs$core$async40990.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40990.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40990.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40990.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40990.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40993 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40993 = (function (f,ch,meta40991,_,fn1,meta40994){
this.f = f;
this.ch = ch;
this.meta40991 = meta40991;
this._ = _;
this.fn1 = fn1;
this.meta40994 = meta40994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40995,meta40994__$1){
var self__ = this;
var _40995__$1 = this;
return (new cljs.core.async.t_cljs$core$async40993(self__.f,self__.ch,self__.meta40991,self__._,self__.fn1,meta40994__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40995){
var self__ = this;
var _40995__$1 = this;
return self__.meta40994;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40993.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40993.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40993.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40993.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40989_SHARP_){
return f1.call(null,(((p1__40989_SHARP_ == null))?null:self__.f.call(null,p1__40989_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40993.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40991","meta40991",-2100660270,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40990","cljs.core.async/t_cljs$core$async40990",1282848275,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40994","meta40994",996109647,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40993.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40993";

cljs.core.async.t_cljs$core$async40993.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40993");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40993.
 */
cljs.core.async.__GT_t_cljs$core$async40993 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40993(f__$1,ch__$1,meta40991__$1,___$2,fn1__$1,meta40994){
return (new cljs.core.async.t_cljs$core$async40993(f__$1,ch__$1,meta40991__$1,___$2,fn1__$1,meta40994));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40993(self__.f,self__.ch,self__.meta40991,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async40990.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40990.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40991","meta40991",-2100660270,null)], null);
});

cljs.core.async.t_cljs$core$async40990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40990";

cljs.core.async.t_cljs$core$async40990.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40990");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40990.
 */
cljs.core.async.__GT_t_cljs$core$async40990 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40990(f__$1,ch__$1,meta40991){
return (new cljs.core.async.t_cljs$core$async40990(f__$1,ch__$1,meta40991));
});

}

return (new cljs.core.async.t_cljs$core$async40990(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40996 = (function (f,ch,meta40997){
this.f = f;
this.ch = ch;
this.meta40997 = meta40997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40998,meta40997__$1){
var self__ = this;
var _40998__$1 = this;
return (new cljs.core.async.t_cljs$core$async40996(self__.f,self__.ch,meta40997__$1));
});

cljs.core.async.t_cljs$core$async40996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40998){
var self__ = this;
var _40998__$1 = this;
return self__.meta40997;
});

cljs.core.async.t_cljs$core$async40996.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40996.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40996.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40996.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40996.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40996.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40997","meta40997",171983891,null)], null);
});

cljs.core.async.t_cljs$core$async40996.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40996";

cljs.core.async.t_cljs$core$async40996.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40996");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40996.
 */
cljs.core.async.__GT_t_cljs$core$async40996 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40996(f__$1,ch__$1,meta40997){
return (new cljs.core.async.t_cljs$core$async40996(f__$1,ch__$1,meta40997));
});

}

return (new cljs.core.async.t_cljs$core$async40996(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40999 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40999 = (function (p,ch,meta41000){
this.p = p;
this.ch = ch;
this.meta41000 = meta41000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41001,meta41000__$1){
var self__ = this;
var _41001__$1 = this;
return (new cljs.core.async.t_cljs$core$async40999(self__.p,self__.ch,meta41000__$1));
});

cljs.core.async.t_cljs$core$async40999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41001){
var self__ = this;
var _41001__$1 = this;
return self__.meta41000;
});

cljs.core.async.t_cljs$core$async40999.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40999.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40999.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40999.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40999.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40999.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40999.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41000","meta41000",-1925809482,null)], null);
});

cljs.core.async.t_cljs$core$async40999.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40999";

cljs.core.async.t_cljs$core$async40999.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40999");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40999.
 */
cljs.core.async.__GT_t_cljs$core$async40999 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40999(p__$1,ch__$1,meta41000){
return (new cljs.core.async.t_cljs$core$async40999(p__$1,ch__$1,meta41000));
});

}

return (new cljs.core.async.t_cljs$core$async40999(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__41003 = arguments.length;
switch (G__41003) {
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
var c__39504__auto___41043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto___41043,out){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto___41043,out){
return (function (state_41024){
var state_val_41025 = (state_41024[(1)]);
if((state_val_41025 === (7))){
var inst_41020 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41026_41044 = state_41024__$1;
(statearr_41026_41044[(2)] = inst_41020);

(statearr_41026_41044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (1))){
var state_41024__$1 = state_41024;
var statearr_41027_41045 = state_41024__$1;
(statearr_41027_41045[(2)] = null);

(statearr_41027_41045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (4))){
var inst_41006 = (state_41024[(7)]);
var inst_41006__$1 = (state_41024[(2)]);
var inst_41007 = (inst_41006__$1 == null);
var state_41024__$1 = (function (){var statearr_41028 = state_41024;
(statearr_41028[(7)] = inst_41006__$1);

return statearr_41028;
})();
if(cljs.core.truth_(inst_41007)){
var statearr_41029_41046 = state_41024__$1;
(statearr_41029_41046[(1)] = (5));

} else {
var statearr_41030_41047 = state_41024__$1;
(statearr_41030_41047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (6))){
var inst_41006 = (state_41024[(7)]);
var inst_41011 = p.call(null,inst_41006);
var state_41024__$1 = state_41024;
if(cljs.core.truth_(inst_41011)){
var statearr_41031_41048 = state_41024__$1;
(statearr_41031_41048[(1)] = (8));

} else {
var statearr_41032_41049 = state_41024__$1;
(statearr_41032_41049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (3))){
var inst_41022 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41024__$1,inst_41022);
} else {
if((state_val_41025 === (2))){
var state_41024__$1 = state_41024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41024__$1,(4),ch);
} else {
if((state_val_41025 === (11))){
var inst_41014 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41033_41050 = state_41024__$1;
(statearr_41033_41050[(2)] = inst_41014);

(statearr_41033_41050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (9))){
var state_41024__$1 = state_41024;
var statearr_41034_41051 = state_41024__$1;
(statearr_41034_41051[(2)] = null);

(statearr_41034_41051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (5))){
var inst_41009 = cljs.core.async.close_BANG_.call(null,out);
var state_41024__$1 = state_41024;
var statearr_41035_41052 = state_41024__$1;
(statearr_41035_41052[(2)] = inst_41009);

(statearr_41035_41052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (10))){
var inst_41017 = (state_41024[(2)]);
var state_41024__$1 = (function (){var statearr_41036 = state_41024;
(statearr_41036[(8)] = inst_41017);

return statearr_41036;
})();
var statearr_41037_41053 = state_41024__$1;
(statearr_41037_41053[(2)] = null);

(statearr_41037_41053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (8))){
var inst_41006 = (state_41024[(7)]);
var state_41024__$1 = state_41024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41024__$1,(11),out,inst_41006);
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
});})(c__39504__auto___41043,out))
;
return ((function (switch__39414__auto__,c__39504__auto___41043,out){
return (function() {
var cljs$core$async$state_machine__39415__auto__ = null;
var cljs$core$async$state_machine__39415__auto____0 = (function (){
var statearr_41038 = [null,null,null,null,null,null,null,null,null];
(statearr_41038[(0)] = cljs$core$async$state_machine__39415__auto__);

(statearr_41038[(1)] = (1));

return statearr_41038;
});
var cljs$core$async$state_machine__39415__auto____1 = (function (state_41024){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_41024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e41039){if((e41039 instanceof Object)){
var ex__39418__auto__ = e41039;
var statearr_41040_41054 = state_41024;
(statearr_41040_41054[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41055 = state_41024;
state_41024 = G__41055;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$state_machine__39415__auto__ = function(state_41024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39415__auto____1.call(this,state_41024);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39415__auto____0;
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39415__auto____1;
return cljs$core$async$state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto___41043,out))
})();
var state__39506__auto__ = (function (){var statearr_41041 = f__39505__auto__.call(null);
(statearr_41041[(6)] = c__39504__auto___41043);

return statearr_41041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto___41043,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41057 = arguments.length;
switch (G__41057) {
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
var c__39504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto__){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto__){
return (function (state_41120){
var state_val_41121 = (state_41120[(1)]);
if((state_val_41121 === (7))){
var inst_41116 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
var statearr_41122_41160 = state_41120__$1;
(statearr_41122_41160[(2)] = inst_41116);

(statearr_41122_41160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (20))){
var inst_41086 = (state_41120[(7)]);
var inst_41097 = (state_41120[(2)]);
var inst_41098 = cljs.core.next.call(null,inst_41086);
var inst_41072 = inst_41098;
var inst_41073 = null;
var inst_41074 = (0);
var inst_41075 = (0);
var state_41120__$1 = (function (){var statearr_41123 = state_41120;
(statearr_41123[(8)] = inst_41075);

(statearr_41123[(9)] = inst_41074);

(statearr_41123[(10)] = inst_41072);

(statearr_41123[(11)] = inst_41097);

(statearr_41123[(12)] = inst_41073);

return statearr_41123;
})();
var statearr_41124_41161 = state_41120__$1;
(statearr_41124_41161[(2)] = null);

(statearr_41124_41161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (1))){
var state_41120__$1 = state_41120;
var statearr_41125_41162 = state_41120__$1;
(statearr_41125_41162[(2)] = null);

(statearr_41125_41162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (4))){
var inst_41061 = (state_41120[(13)]);
var inst_41061__$1 = (state_41120[(2)]);
var inst_41062 = (inst_41061__$1 == null);
var state_41120__$1 = (function (){var statearr_41126 = state_41120;
(statearr_41126[(13)] = inst_41061__$1);

return statearr_41126;
})();
if(cljs.core.truth_(inst_41062)){
var statearr_41127_41163 = state_41120__$1;
(statearr_41127_41163[(1)] = (5));

} else {
var statearr_41128_41164 = state_41120__$1;
(statearr_41128_41164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (15))){
var state_41120__$1 = state_41120;
var statearr_41132_41165 = state_41120__$1;
(statearr_41132_41165[(2)] = null);

(statearr_41132_41165[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (21))){
var state_41120__$1 = state_41120;
var statearr_41133_41166 = state_41120__$1;
(statearr_41133_41166[(2)] = null);

(statearr_41133_41166[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (13))){
var inst_41075 = (state_41120[(8)]);
var inst_41074 = (state_41120[(9)]);
var inst_41072 = (state_41120[(10)]);
var inst_41073 = (state_41120[(12)]);
var inst_41082 = (state_41120[(2)]);
var inst_41083 = (inst_41075 + (1));
var tmp41129 = inst_41074;
var tmp41130 = inst_41072;
var tmp41131 = inst_41073;
var inst_41072__$1 = tmp41130;
var inst_41073__$1 = tmp41131;
var inst_41074__$1 = tmp41129;
var inst_41075__$1 = inst_41083;
var state_41120__$1 = (function (){var statearr_41134 = state_41120;
(statearr_41134[(8)] = inst_41075__$1);

(statearr_41134[(9)] = inst_41074__$1);

(statearr_41134[(14)] = inst_41082);

(statearr_41134[(10)] = inst_41072__$1);

(statearr_41134[(12)] = inst_41073__$1);

return statearr_41134;
})();
var statearr_41135_41167 = state_41120__$1;
(statearr_41135_41167[(2)] = null);

(statearr_41135_41167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (22))){
var state_41120__$1 = state_41120;
var statearr_41136_41168 = state_41120__$1;
(statearr_41136_41168[(2)] = null);

(statearr_41136_41168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (6))){
var inst_41061 = (state_41120[(13)]);
var inst_41070 = f.call(null,inst_41061);
var inst_41071 = cljs.core.seq.call(null,inst_41070);
var inst_41072 = inst_41071;
var inst_41073 = null;
var inst_41074 = (0);
var inst_41075 = (0);
var state_41120__$1 = (function (){var statearr_41137 = state_41120;
(statearr_41137[(8)] = inst_41075);

(statearr_41137[(9)] = inst_41074);

(statearr_41137[(10)] = inst_41072);

(statearr_41137[(12)] = inst_41073);

return statearr_41137;
})();
var statearr_41138_41169 = state_41120__$1;
(statearr_41138_41169[(2)] = null);

(statearr_41138_41169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (17))){
var inst_41086 = (state_41120[(7)]);
var inst_41090 = cljs.core.chunk_first.call(null,inst_41086);
var inst_41091 = cljs.core.chunk_rest.call(null,inst_41086);
var inst_41092 = cljs.core.count.call(null,inst_41090);
var inst_41072 = inst_41091;
var inst_41073 = inst_41090;
var inst_41074 = inst_41092;
var inst_41075 = (0);
var state_41120__$1 = (function (){var statearr_41139 = state_41120;
(statearr_41139[(8)] = inst_41075);

(statearr_41139[(9)] = inst_41074);

(statearr_41139[(10)] = inst_41072);

(statearr_41139[(12)] = inst_41073);

return statearr_41139;
})();
var statearr_41140_41170 = state_41120__$1;
(statearr_41140_41170[(2)] = null);

(statearr_41140_41170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (3))){
var inst_41118 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41120__$1,inst_41118);
} else {
if((state_val_41121 === (12))){
var inst_41106 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
var statearr_41141_41171 = state_41120__$1;
(statearr_41141_41171[(2)] = inst_41106);

(statearr_41141_41171[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (2))){
var state_41120__$1 = state_41120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41120__$1,(4),in$);
} else {
if((state_val_41121 === (23))){
var inst_41114 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
var statearr_41142_41172 = state_41120__$1;
(statearr_41142_41172[(2)] = inst_41114);

(statearr_41142_41172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (19))){
var inst_41101 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
var statearr_41143_41173 = state_41120__$1;
(statearr_41143_41173[(2)] = inst_41101);

(statearr_41143_41173[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (11))){
var inst_41086 = (state_41120[(7)]);
var inst_41072 = (state_41120[(10)]);
var inst_41086__$1 = cljs.core.seq.call(null,inst_41072);
var state_41120__$1 = (function (){var statearr_41144 = state_41120;
(statearr_41144[(7)] = inst_41086__$1);

return statearr_41144;
})();
if(inst_41086__$1){
var statearr_41145_41174 = state_41120__$1;
(statearr_41145_41174[(1)] = (14));

} else {
var statearr_41146_41175 = state_41120__$1;
(statearr_41146_41175[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (9))){
var inst_41108 = (state_41120[(2)]);
var inst_41109 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41120__$1 = (function (){var statearr_41147 = state_41120;
(statearr_41147[(15)] = inst_41108);

return statearr_41147;
})();
if(cljs.core.truth_(inst_41109)){
var statearr_41148_41176 = state_41120__$1;
(statearr_41148_41176[(1)] = (21));

} else {
var statearr_41149_41177 = state_41120__$1;
(statearr_41149_41177[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (5))){
var inst_41064 = cljs.core.async.close_BANG_.call(null,out);
var state_41120__$1 = state_41120;
var statearr_41150_41178 = state_41120__$1;
(statearr_41150_41178[(2)] = inst_41064);

(statearr_41150_41178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (14))){
var inst_41086 = (state_41120[(7)]);
var inst_41088 = cljs.core.chunked_seq_QMARK_.call(null,inst_41086);
var state_41120__$1 = state_41120;
if(inst_41088){
var statearr_41151_41179 = state_41120__$1;
(statearr_41151_41179[(1)] = (17));

} else {
var statearr_41152_41180 = state_41120__$1;
(statearr_41152_41180[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (16))){
var inst_41104 = (state_41120[(2)]);
var state_41120__$1 = state_41120;
var statearr_41153_41181 = state_41120__$1;
(statearr_41153_41181[(2)] = inst_41104);

(statearr_41153_41181[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41121 === (10))){
var inst_41075 = (state_41120[(8)]);
var inst_41073 = (state_41120[(12)]);
var inst_41080 = cljs.core._nth.call(null,inst_41073,inst_41075);
var state_41120__$1 = state_41120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41120__$1,(13),out,inst_41080);
} else {
if((state_val_41121 === (18))){
var inst_41086 = (state_41120[(7)]);
var inst_41095 = cljs.core.first.call(null,inst_41086);
var state_41120__$1 = state_41120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41120__$1,(20),out,inst_41095);
} else {
if((state_val_41121 === (8))){
var inst_41075 = (state_41120[(8)]);
var inst_41074 = (state_41120[(9)]);
var inst_41077 = (inst_41075 < inst_41074);
var inst_41078 = inst_41077;
var state_41120__$1 = state_41120;
if(cljs.core.truth_(inst_41078)){
var statearr_41154_41182 = state_41120__$1;
(statearr_41154_41182[(1)] = (10));

} else {
var statearr_41155_41183 = state_41120__$1;
(statearr_41155_41183[(1)] = (11));

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
});})(c__39504__auto__))
;
return ((function (switch__39414__auto__,c__39504__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39415__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39415__auto____0 = (function (){
var statearr_41156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41156[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39415__auto__);

(statearr_41156[(1)] = (1));

return statearr_41156;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39415__auto____1 = (function (state_41120){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_41120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e41157){if((e41157 instanceof Object)){
var ex__39418__auto__ = e41157;
var statearr_41158_41184 = state_41120;
(statearr_41158_41184[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41185 = state_41120;
state_41120 = G__41185;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39415__auto__ = function(state_41120){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39415__auto____1.call(this,state_41120);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39415__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39415__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto__))
})();
var state__39506__auto__ = (function (){var statearr_41159 = f__39505__auto__.call(null);
(statearr_41159[(6)] = c__39504__auto__);

return statearr_41159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto__))
);

return c__39504__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41187 = arguments.length;
switch (G__41187) {
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
var G__41190 = arguments.length;
switch (G__41190) {
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
var G__41193 = arguments.length;
switch (G__41193) {
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
var c__39504__auto___41240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto___41240,out){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto___41240,out){
return (function (state_41217){
var state_val_41218 = (state_41217[(1)]);
if((state_val_41218 === (7))){
var inst_41212 = (state_41217[(2)]);
var state_41217__$1 = state_41217;
var statearr_41219_41241 = state_41217__$1;
(statearr_41219_41241[(2)] = inst_41212);

(statearr_41219_41241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41218 === (1))){
var inst_41194 = null;
var state_41217__$1 = (function (){var statearr_41220 = state_41217;
(statearr_41220[(7)] = inst_41194);

return statearr_41220;
})();
var statearr_41221_41242 = state_41217__$1;
(statearr_41221_41242[(2)] = null);

(statearr_41221_41242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41218 === (4))){
var inst_41197 = (state_41217[(8)]);
var inst_41197__$1 = (state_41217[(2)]);
var inst_41198 = (inst_41197__$1 == null);
var inst_41199 = cljs.core.not.call(null,inst_41198);
var state_41217__$1 = (function (){var statearr_41222 = state_41217;
(statearr_41222[(8)] = inst_41197__$1);

return statearr_41222;
})();
if(inst_41199){
var statearr_41223_41243 = state_41217__$1;
(statearr_41223_41243[(1)] = (5));

} else {
var statearr_41224_41244 = state_41217__$1;
(statearr_41224_41244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41218 === (6))){
var state_41217__$1 = state_41217;
var statearr_41225_41245 = state_41217__$1;
(statearr_41225_41245[(2)] = null);

(statearr_41225_41245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41218 === (3))){
var inst_41214 = (state_41217[(2)]);
var inst_41215 = cljs.core.async.close_BANG_.call(null,out);
var state_41217__$1 = (function (){var statearr_41226 = state_41217;
(statearr_41226[(9)] = inst_41214);

return statearr_41226;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41217__$1,inst_41215);
} else {
if((state_val_41218 === (2))){
var state_41217__$1 = state_41217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41217__$1,(4),ch);
} else {
if((state_val_41218 === (11))){
var inst_41197 = (state_41217[(8)]);
var inst_41206 = (state_41217[(2)]);
var inst_41194 = inst_41197;
var state_41217__$1 = (function (){var statearr_41227 = state_41217;
(statearr_41227[(7)] = inst_41194);

(statearr_41227[(10)] = inst_41206);

return statearr_41227;
})();
var statearr_41228_41246 = state_41217__$1;
(statearr_41228_41246[(2)] = null);

(statearr_41228_41246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41218 === (9))){
var inst_41197 = (state_41217[(8)]);
var state_41217__$1 = state_41217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41217__$1,(11),out,inst_41197);
} else {
if((state_val_41218 === (5))){
var inst_41197 = (state_41217[(8)]);
var inst_41194 = (state_41217[(7)]);
var inst_41201 = cljs.core._EQ_.call(null,inst_41197,inst_41194);
var state_41217__$1 = state_41217;
if(inst_41201){
var statearr_41230_41247 = state_41217__$1;
(statearr_41230_41247[(1)] = (8));

} else {
var statearr_41231_41248 = state_41217__$1;
(statearr_41231_41248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41218 === (10))){
var inst_41209 = (state_41217[(2)]);
var state_41217__$1 = state_41217;
var statearr_41232_41249 = state_41217__$1;
(statearr_41232_41249[(2)] = inst_41209);

(statearr_41232_41249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41218 === (8))){
var inst_41194 = (state_41217[(7)]);
var tmp41229 = inst_41194;
var inst_41194__$1 = tmp41229;
var state_41217__$1 = (function (){var statearr_41233 = state_41217;
(statearr_41233[(7)] = inst_41194__$1);

return statearr_41233;
})();
var statearr_41234_41250 = state_41217__$1;
(statearr_41234_41250[(2)] = null);

(statearr_41234_41250[(1)] = (2));


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
});})(c__39504__auto___41240,out))
;
return ((function (switch__39414__auto__,c__39504__auto___41240,out){
return (function() {
var cljs$core$async$state_machine__39415__auto__ = null;
var cljs$core$async$state_machine__39415__auto____0 = (function (){
var statearr_41235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41235[(0)] = cljs$core$async$state_machine__39415__auto__);

(statearr_41235[(1)] = (1));

return statearr_41235;
});
var cljs$core$async$state_machine__39415__auto____1 = (function (state_41217){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_41217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e41236){if((e41236 instanceof Object)){
var ex__39418__auto__ = e41236;
var statearr_41237_41251 = state_41217;
(statearr_41237_41251[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41252 = state_41217;
state_41217 = G__41252;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$state_machine__39415__auto__ = function(state_41217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39415__auto____1.call(this,state_41217);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39415__auto____0;
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39415__auto____1;
return cljs$core$async$state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto___41240,out))
})();
var state__39506__auto__ = (function (){var statearr_41238 = f__39505__auto__.call(null);
(statearr_41238[(6)] = c__39504__auto___41240);

return statearr_41238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto___41240,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41254 = arguments.length;
switch (G__41254) {
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
var c__39504__auto___41320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto___41320,out){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto___41320,out){
return (function (state_41292){
var state_val_41293 = (state_41292[(1)]);
if((state_val_41293 === (7))){
var inst_41288 = (state_41292[(2)]);
var state_41292__$1 = state_41292;
var statearr_41294_41321 = state_41292__$1;
(statearr_41294_41321[(2)] = inst_41288);

(statearr_41294_41321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (1))){
var inst_41255 = (new Array(n));
var inst_41256 = inst_41255;
var inst_41257 = (0);
var state_41292__$1 = (function (){var statearr_41295 = state_41292;
(statearr_41295[(7)] = inst_41256);

(statearr_41295[(8)] = inst_41257);

return statearr_41295;
})();
var statearr_41296_41322 = state_41292__$1;
(statearr_41296_41322[(2)] = null);

(statearr_41296_41322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (4))){
var inst_41260 = (state_41292[(9)]);
var inst_41260__$1 = (state_41292[(2)]);
var inst_41261 = (inst_41260__$1 == null);
var inst_41262 = cljs.core.not.call(null,inst_41261);
var state_41292__$1 = (function (){var statearr_41297 = state_41292;
(statearr_41297[(9)] = inst_41260__$1);

return statearr_41297;
})();
if(inst_41262){
var statearr_41298_41323 = state_41292__$1;
(statearr_41298_41323[(1)] = (5));

} else {
var statearr_41299_41324 = state_41292__$1;
(statearr_41299_41324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (15))){
var inst_41282 = (state_41292[(2)]);
var state_41292__$1 = state_41292;
var statearr_41300_41325 = state_41292__$1;
(statearr_41300_41325[(2)] = inst_41282);

(statearr_41300_41325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (13))){
var state_41292__$1 = state_41292;
var statearr_41301_41326 = state_41292__$1;
(statearr_41301_41326[(2)] = null);

(statearr_41301_41326[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (6))){
var inst_41257 = (state_41292[(8)]);
var inst_41278 = (inst_41257 > (0));
var state_41292__$1 = state_41292;
if(cljs.core.truth_(inst_41278)){
var statearr_41302_41327 = state_41292__$1;
(statearr_41302_41327[(1)] = (12));

} else {
var statearr_41303_41328 = state_41292__$1;
(statearr_41303_41328[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (3))){
var inst_41290 = (state_41292[(2)]);
var state_41292__$1 = state_41292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41292__$1,inst_41290);
} else {
if((state_val_41293 === (12))){
var inst_41256 = (state_41292[(7)]);
var inst_41280 = cljs.core.vec.call(null,inst_41256);
var state_41292__$1 = state_41292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41292__$1,(15),out,inst_41280);
} else {
if((state_val_41293 === (2))){
var state_41292__$1 = state_41292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41292__$1,(4),ch);
} else {
if((state_val_41293 === (11))){
var inst_41272 = (state_41292[(2)]);
var inst_41273 = (new Array(n));
var inst_41256 = inst_41273;
var inst_41257 = (0);
var state_41292__$1 = (function (){var statearr_41304 = state_41292;
(statearr_41304[(7)] = inst_41256);

(statearr_41304[(10)] = inst_41272);

(statearr_41304[(8)] = inst_41257);

return statearr_41304;
})();
var statearr_41305_41329 = state_41292__$1;
(statearr_41305_41329[(2)] = null);

(statearr_41305_41329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (9))){
var inst_41256 = (state_41292[(7)]);
var inst_41270 = cljs.core.vec.call(null,inst_41256);
var state_41292__$1 = state_41292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41292__$1,(11),out,inst_41270);
} else {
if((state_val_41293 === (5))){
var inst_41260 = (state_41292[(9)]);
var inst_41256 = (state_41292[(7)]);
var inst_41265 = (state_41292[(11)]);
var inst_41257 = (state_41292[(8)]);
var inst_41264 = (inst_41256[inst_41257] = inst_41260);
var inst_41265__$1 = (inst_41257 + (1));
var inst_41266 = (inst_41265__$1 < n);
var state_41292__$1 = (function (){var statearr_41306 = state_41292;
(statearr_41306[(11)] = inst_41265__$1);

(statearr_41306[(12)] = inst_41264);

return statearr_41306;
})();
if(cljs.core.truth_(inst_41266)){
var statearr_41307_41330 = state_41292__$1;
(statearr_41307_41330[(1)] = (8));

} else {
var statearr_41308_41331 = state_41292__$1;
(statearr_41308_41331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (14))){
var inst_41285 = (state_41292[(2)]);
var inst_41286 = cljs.core.async.close_BANG_.call(null,out);
var state_41292__$1 = (function (){var statearr_41310 = state_41292;
(statearr_41310[(13)] = inst_41285);

return statearr_41310;
})();
var statearr_41311_41332 = state_41292__$1;
(statearr_41311_41332[(2)] = inst_41286);

(statearr_41311_41332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (10))){
var inst_41276 = (state_41292[(2)]);
var state_41292__$1 = state_41292;
var statearr_41312_41333 = state_41292__$1;
(statearr_41312_41333[(2)] = inst_41276);

(statearr_41312_41333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (8))){
var inst_41256 = (state_41292[(7)]);
var inst_41265 = (state_41292[(11)]);
var tmp41309 = inst_41256;
var inst_41256__$1 = tmp41309;
var inst_41257 = inst_41265;
var state_41292__$1 = (function (){var statearr_41313 = state_41292;
(statearr_41313[(7)] = inst_41256__$1);

(statearr_41313[(8)] = inst_41257);

return statearr_41313;
})();
var statearr_41314_41334 = state_41292__$1;
(statearr_41314_41334[(2)] = null);

(statearr_41314_41334[(1)] = (2));


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
});})(c__39504__auto___41320,out))
;
return ((function (switch__39414__auto__,c__39504__auto___41320,out){
return (function() {
var cljs$core$async$state_machine__39415__auto__ = null;
var cljs$core$async$state_machine__39415__auto____0 = (function (){
var statearr_41315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41315[(0)] = cljs$core$async$state_machine__39415__auto__);

(statearr_41315[(1)] = (1));

return statearr_41315;
});
var cljs$core$async$state_machine__39415__auto____1 = (function (state_41292){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_41292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e41316){if((e41316 instanceof Object)){
var ex__39418__auto__ = e41316;
var statearr_41317_41335 = state_41292;
(statearr_41317_41335[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41336 = state_41292;
state_41292 = G__41336;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$state_machine__39415__auto__ = function(state_41292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39415__auto____1.call(this,state_41292);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39415__auto____0;
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39415__auto____1;
return cljs$core$async$state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto___41320,out))
})();
var state__39506__auto__ = (function (){var statearr_41318 = f__39505__auto__.call(null);
(statearr_41318[(6)] = c__39504__auto___41320);

return statearr_41318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto___41320,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41338 = arguments.length;
switch (G__41338) {
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
var c__39504__auto___41408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39504__auto___41408,out){
return (function (){
var f__39505__auto__ = (function (){var switch__39414__auto__ = ((function (c__39504__auto___41408,out){
return (function (state_41380){
var state_val_41381 = (state_41380[(1)]);
if((state_val_41381 === (7))){
var inst_41376 = (state_41380[(2)]);
var state_41380__$1 = state_41380;
var statearr_41382_41409 = state_41380__$1;
(statearr_41382_41409[(2)] = inst_41376);

(statearr_41382_41409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41381 === (1))){
var inst_41339 = [];
var inst_41340 = inst_41339;
var inst_41341 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41380__$1 = (function (){var statearr_41383 = state_41380;
(statearr_41383[(7)] = inst_41341);

(statearr_41383[(8)] = inst_41340);

return statearr_41383;
})();
var statearr_41384_41410 = state_41380__$1;
(statearr_41384_41410[(2)] = null);

(statearr_41384_41410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41381 === (4))){
var inst_41344 = (state_41380[(9)]);
var inst_41344__$1 = (state_41380[(2)]);
var inst_41345 = (inst_41344__$1 == null);
var inst_41346 = cljs.core.not.call(null,inst_41345);
var state_41380__$1 = (function (){var statearr_41385 = state_41380;
(statearr_41385[(9)] = inst_41344__$1);

return statearr_41385;
})();
if(inst_41346){
var statearr_41386_41411 = state_41380__$1;
(statearr_41386_41411[(1)] = (5));

} else {
var statearr_41387_41412 = state_41380__$1;
(statearr_41387_41412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41381 === (15))){
var inst_41370 = (state_41380[(2)]);
var state_41380__$1 = state_41380;
var statearr_41388_41413 = state_41380__$1;
(statearr_41388_41413[(2)] = inst_41370);

(statearr_41388_41413[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41381 === (13))){
var state_41380__$1 = state_41380;
var statearr_41389_41414 = state_41380__$1;
(statearr_41389_41414[(2)] = null);

(statearr_41389_41414[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41381 === (6))){
var inst_41340 = (state_41380[(8)]);
var inst_41365 = inst_41340.length;
var inst_41366 = (inst_41365 > (0));
var state_41380__$1 = state_41380;
if(cljs.core.truth_(inst_41366)){
var statearr_41390_41415 = state_41380__$1;
(statearr_41390_41415[(1)] = (12));

} else {
var statearr_41391_41416 = state_41380__$1;
(statearr_41391_41416[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41381 === (3))){
var inst_41378 = (state_41380[(2)]);
var state_41380__$1 = state_41380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41380__$1,inst_41378);
} else {
if((state_val_41381 === (12))){
var inst_41340 = (state_41380[(8)]);
var inst_41368 = cljs.core.vec.call(null,inst_41340);
var state_41380__$1 = state_41380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41380__$1,(15),out,inst_41368);
} else {
if((state_val_41381 === (2))){
var state_41380__$1 = state_41380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41380__$1,(4),ch);
} else {
if((state_val_41381 === (11))){
var inst_41344 = (state_41380[(9)]);
var inst_41348 = (state_41380[(10)]);
var inst_41358 = (state_41380[(2)]);
var inst_41359 = [];
var inst_41360 = inst_41359.push(inst_41344);
var inst_41340 = inst_41359;
var inst_41341 = inst_41348;
var state_41380__$1 = (function (){var statearr_41392 = state_41380;
(statearr_41392[(7)] = inst_41341);

(statearr_41392[(11)] = inst_41360);

(statearr_41392[(12)] = inst_41358);

(statearr_41392[(8)] = inst_41340);

return statearr_41392;
})();
var statearr_41393_41417 = state_41380__$1;
(statearr_41393_41417[(2)] = null);

(statearr_41393_41417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41381 === (9))){
var inst_41340 = (state_41380[(8)]);
var inst_41356 = cljs.core.vec.call(null,inst_41340);
var state_41380__$1 = state_41380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41380__$1,(11),out,inst_41356);
} else {
if((state_val_41381 === (5))){
var inst_41344 = (state_41380[(9)]);
var inst_41341 = (state_41380[(7)]);
var inst_41348 = (state_41380[(10)]);
var inst_41348__$1 = f.call(null,inst_41344);
var inst_41349 = cljs.core._EQ_.call(null,inst_41348__$1,inst_41341);
var inst_41350 = cljs.core.keyword_identical_QMARK_.call(null,inst_41341,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41351 = ((inst_41349) || (inst_41350));
var state_41380__$1 = (function (){var statearr_41394 = state_41380;
(statearr_41394[(10)] = inst_41348__$1);

return statearr_41394;
})();
if(cljs.core.truth_(inst_41351)){
var statearr_41395_41418 = state_41380__$1;
(statearr_41395_41418[(1)] = (8));

} else {
var statearr_41396_41419 = state_41380__$1;
(statearr_41396_41419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41381 === (14))){
var inst_41373 = (state_41380[(2)]);
var inst_41374 = cljs.core.async.close_BANG_.call(null,out);
var state_41380__$1 = (function (){var statearr_41398 = state_41380;
(statearr_41398[(13)] = inst_41373);

return statearr_41398;
})();
var statearr_41399_41420 = state_41380__$1;
(statearr_41399_41420[(2)] = inst_41374);

(statearr_41399_41420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41381 === (10))){
var inst_41363 = (state_41380[(2)]);
var state_41380__$1 = state_41380;
var statearr_41400_41421 = state_41380__$1;
(statearr_41400_41421[(2)] = inst_41363);

(statearr_41400_41421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41381 === (8))){
var inst_41344 = (state_41380[(9)]);
var inst_41348 = (state_41380[(10)]);
var inst_41340 = (state_41380[(8)]);
var inst_41353 = inst_41340.push(inst_41344);
var tmp41397 = inst_41340;
var inst_41340__$1 = tmp41397;
var inst_41341 = inst_41348;
var state_41380__$1 = (function (){var statearr_41401 = state_41380;
(statearr_41401[(7)] = inst_41341);

(statearr_41401[(14)] = inst_41353);

(statearr_41401[(8)] = inst_41340__$1);

return statearr_41401;
})();
var statearr_41402_41422 = state_41380__$1;
(statearr_41402_41422[(2)] = null);

(statearr_41402_41422[(1)] = (2));


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
});})(c__39504__auto___41408,out))
;
return ((function (switch__39414__auto__,c__39504__auto___41408,out){
return (function() {
var cljs$core$async$state_machine__39415__auto__ = null;
var cljs$core$async$state_machine__39415__auto____0 = (function (){
var statearr_41403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41403[(0)] = cljs$core$async$state_machine__39415__auto__);

(statearr_41403[(1)] = (1));

return statearr_41403;
});
var cljs$core$async$state_machine__39415__auto____1 = (function (state_41380){
while(true){
var ret_value__39416__auto__ = (function (){try{while(true){
var result__39417__auto__ = switch__39414__auto__.call(null,state_41380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39417__auto__;
}
break;
}
}catch (e41404){if((e41404 instanceof Object)){
var ex__39418__auto__ = e41404;
var statearr_41405_41423 = state_41380;
(statearr_41405_41423[(5)] = ex__39418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41424 = state_41380;
state_41380 = G__41424;
continue;
} else {
return ret_value__39416__auto__;
}
break;
}
});
cljs$core$async$state_machine__39415__auto__ = function(state_41380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39415__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39415__auto____1.call(this,state_41380);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39415__auto____0;
cljs$core$async$state_machine__39415__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39415__auto____1;
return cljs$core$async$state_machine__39415__auto__;
})()
;})(switch__39414__auto__,c__39504__auto___41408,out))
})();
var state__39506__auto__ = (function (){var statearr_41406 = f__39505__auto__.call(null);
(statearr_41406[(6)] = c__39504__auto___41408);

return statearr_41406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39506__auto__);
});})(c__39504__auto___41408,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

