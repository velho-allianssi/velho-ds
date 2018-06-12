// Compiled by ClojureScript 1.10.238 {}
goog.provide('velho_ds.organisms.heading');
goog.require('cljs.core');
goog.require('stylefy.core');
velho_ds.organisms.heading.header_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"1fr",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"1fr",new cljs.core.Keyword(null,"color","color",1011675173),"#FEFEFE",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center"], null);
velho_ds.organisms.heading.heading_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),"start",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 5px"], null);
velho_ds.organisms.heading.main = (function velho_ds$organisms$heading$main(content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),stylefy.core.use_style.call(null,velho_ds.organisms.heading.header_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.call(null,velho_ds.organisms.heading.heading_style),content], null)], null);
});
