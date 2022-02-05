import {defaultOptions} from './default_option.js';

let options = {};

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set(defaultOptions);
});

chrome.webNavigation.onCompleted.addListener(function (details) {
    chrome.storage.sync.get(['workingDomain'], function (options) {
        if (details.url.match(new RegExp(options.workingDomain, "i"))) {
            chrome.scripting.insertCSS({
                target: {tabId: details.tabId},
                files: [
                    "lib/viewerjs-1.2.0/viewer.min.css"
                ]
            });
            chrome.scripting.executeScript({
                target: {tabId: details.tabId},
                files: [
                    "lib/jquery-3.3.1.min.js",
                    "lib/viewerjs-1.2.0/viewer.min.js",
                    "run.js"
                ]
            });
        }
    });
});