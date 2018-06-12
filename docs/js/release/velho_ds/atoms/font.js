// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('velho_ds.atoms.font');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('stylefy.core');
goog.require('velho_ds.atoms.style.font');
velho_ds.atoms.font.font_styles = (function velho_ds$atoms$font$font_styles(){
stylefy.core.tag("p",velho_ds.atoms.style.font.p);

stylefy.core.tag("small",velho_ds.atoms.style.font.small);

stylefy.core.tag("h1",velho_ds.atoms.style.font.h1);

stylefy.core.tag("h2",velho_ds.atoms.style.font.h2);

stylefy.core.tag("h3",velho_ds.atoms.style.font.h3);

return stylefy.core.tag("h4",velho_ds.atoms.style.font.h4);
});
