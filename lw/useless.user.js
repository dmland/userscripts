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

window.setTimeout(function() {
  'use strict';
  console.log("i am here!");
  //

},3000);
