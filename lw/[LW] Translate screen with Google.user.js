// ==UserScript==
// @name         [LW] Translate screen with Google
// @namespace    https://github.com/dmland/userscripts/
// @version      1.0
// @description  desc
// @author       Dave Land
// @include      https://*login.liveworld.com/*
// @exclude      https://help.login.liveworld.com/*
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

  var gte = document.createElement('div');
  gte.id = "google_translate_element";
  var gts = document.createElement('script');
  gts.type = "text/javascript";
  gts.innerHTML = "function googleTranslateElementInit() {\n\
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');\n\
}";
  var gti = document.createElement('script');
  gti.type = "text/javascript";
  gti.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(gte);
  document.body.appendChild(gts);
  document.body.appendChild(gti);
  GM_addStyle('\n\
/* Accomodate the "Google Translated to …" bar at the top */\n\
body > .skiptranslate ~ div#main {\n\
  height: calc(100% - 40px);\n\
}\n\
\n\
div#google_translate_element {\n\
  position: absolute;\n\
  right: 250px;\n\
  top: 12px;\n\
  z-index: 11;\n\
}\n\
\n\
.goog-te-gadget-simple {\n\
  background-color: transparent !important;\n\
  border: 0px solid transparent !important;\n\
}\n\
\n\
.goog-te-gadget-simple .goog-te-menu-value span:first-of-type::after {\n\
  content: "\\F1AB";\n\
  font-size: 1rem;\n\
  font-family: fontawesome;\n\
  color: #CCC;\n\
}\n\
\n\
.goog-te-gadget-simple .goog-te-menu-value span:first-of-type {\n\
  font-size: 0px;\n\
}\n\
\n\
.goog-te-gadget img.goog-te-gadget-icon {\n\
  display: none;\n\
}\n\
\n\
.goog-te-gadget-simple .goog-te-menu-value span:first-of-type + img {\n\
  display: none;\n\
}\n\
\n\
.goog-te-gadget-simple .goog-te-menu-value span:first-of-type + img + span {\n\
  display: none;  \n\
}\n\
\n\
.goog-te-gadget a.goog-te-menu-value:hover {\n\
  text-decoration: none;\n\
}\n\
');
  var nt_sel = [
    "title",									/* Page title (browser tab title) */
    "header",									/* Top nav (black bg) */
    "#header",									/* Header bar (blue bg) */
    "nav",										/* Side nav */
    ".stream-items content-meta-description",	/* "Comment on wall" etc */
    ".stream-items case-core-top-right",		/* Timestamp, sentiment, etc */
    "case-details-header-row",					/* "Case #1234 Details" and locked/timeout bars */
    ".stream-items .item-action-bar",			/* Action bar under each item */
    "#right-pane .detail-top-info-pane",		/* Case details metadata */
    "#right-pane #case-info-owner",    			/* "Post a Reply"/"Add a Note" forms */
    "#right-pane .detail-bottom-buttons"		/* "Update Case" bar */
  ];
  for (var this_sel in nt_sel) {
    var notrans = document.querySelectorAll(nt_sel[this_sel]);
    for (var idx=0; idx<notrans.length; idx++) {
      notrans[idx].setAttribute("class",notrans[idx].getAttribute("class") + " notranslate");
    }
  }
},6000);
