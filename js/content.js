'use strict';
window.onload = function() {
    console.log('from extension');
    chrome.runtime.sendMessage({
        "greeting": "clear"
    });
}