// Compiled by ClojureScript 1.10.238 {}
goog.provide('clj_chrome_devtools_runner');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('velho_ds.atoms.button_test');
clj_chrome_devtools_runner.PRINTED = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
clj_chrome_devtools_runner.get_printed = (function clj_chrome_devtools_runner$get_printed(){
var v = cljs.core.deref.call(null,clj_chrome_devtools_runner.PRINTED);
cljs.core.reset_BANG_.call(null,clj_chrome_devtools_runner.PRINTED,cljs.core.PersistentVector.EMPTY);

return cljs.core.clj__GT_js.call(null,v);
});
clj_chrome_devtools_runner.run_chrome_tests = (function clj_chrome_devtools_runner$run_chrome_tests(){
cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36119__delegate = function (msg){
return cljs.core.swap_BANG_.call(null,clj_chrome_devtools_runner.PRINTED,cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,msg));
};
var G__36119 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__36120__i = 0, G__36120__a = new Array(arguments.length -  0);
while (G__36120__i < G__36120__a.length) {G__36120__a[G__36120__i] = arguments[G__36120__i + 0]; ++G__36120__i;}
  msg = new cljs.core.IndexedSeq(G__36120__a,0,null);
} 
return G__36119__delegate.call(this,msg);};
G__36119.cljs$lang$maxFixedArity = 0;
G__36119.cljs$lang$applyTo = (function (arglist__36121){
var msg = cljs.core.seq(arglist__36121);
return G__36119__delegate(msg);
});
G__36119.cljs$core$IFn$_invoke$arity$variadic = G__36119__delegate;
return G__36119;
})()
;

return cljs.test.run_block.call(null,(function (){var env36117 = cljs.test.empty_env.call(null);
var summary36118 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env36117,summary36118){
return (function (){
cljs.test.set_env_BANG_.call(null,env36117);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"velho-ds.atoms.button-test","velho-ds.atoms.button-test",1451672919,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__35982__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__35982__auto__,env36117,summary36118){
return (function (){
if((env__35982__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__35982__auto__,env36117,summary36118))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return velho_ds.atoms.button_test.default_button;},new cljs.core.Symbol("velho-ds.atoms.button-test","default-button","velho-ds.atoms.button-test/default-button",1228505490,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"velho-ds.atoms.button-test","velho-ds.atoms.button-test",1451672919,null),new cljs.core.Symbol(null,"default-button","default-button",302528871,null),"/home/travis/build/velho-allianssi/velho-ds/test/cljs/velho_ds/atoms/button_test.cljs",24,1,4,4,cljs.core.List.EMPTY,null,(cljs.core.truth_(velho_ds.atoms.button_test.default_button)?velho_ds.atoms.button_test.default_button.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__35982__auto__,env36117,summary36118){
return (function (){
if((env__35982__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__35982__auto__,env36117,summary36118))
], null));
})());
});})(env36117,summary36118))
,((function (env36117,summary36118){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"velho-ds.atoms.button-test","velho-ds.atoms.button-test",1451672919,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env36117,summary36118))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env36117,summary36118){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary36118,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary36118),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env36117,summary36118))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env36117,summary36118){
return (function (){
cljs.test.set_env_BANG_.call(null,env36117);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary36118));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary36118),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env36117,summary36118))
], null));
})());
});
