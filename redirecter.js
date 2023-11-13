// ==UserScript==
// @name         Reddit redirecter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (!window.location.href.endsWith(".png") && !window.location.href.endsWith(".jpg")) {
        window.location.href = window.location.href.replace('www', 'old')
    }
})();