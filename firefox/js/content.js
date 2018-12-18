'use strict';
window.onload = function() {
    browser.runtime.sendMessage({
        "greeting": "clear"
    });
}