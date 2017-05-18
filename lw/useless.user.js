// ==UserScript==
// @name         [LW] Doesn't do anything, really
// @namespace    http://land.and.us.com/greasemonkey
// @version      1.0
// @description  Just pops up a useless alert
// @author       Dave Land
// @include      https://qa.login.liveworld.com/case_views/*
// @grant        GM_log
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==
/* jshint multistr: true */

function DL_log(output) {
  GM_log("%c" + GM_info.script.name + ": " + output, "padding: 3px 0px 2px 4px; border-left: 4px solid;");
}

window.setTimeout(function() {
  'use strict';
  DL_log("Ryan is a frikkin' genius!");
  //

},3000);
