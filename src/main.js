var options = {};

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set(defaultOptions);
});

chrome.webNavigation.onCompleted.addListener(function (details) {
    chrome.storage.sync.get(['workingDomain'], function (options) {
        if (details.url.match(new RegExp(options.workingDomain, "i"))) {
            chrome.tabs.executeScript(details.tabId, {
                "file": "lib/jquery-3.3.1.min.js"
            });
            chrome.tabs.insertCSS(details.tabId, {
                "file": "lib/viewerjs-1.2.0/viewer.min.css"
            });
            chrome.tabs.executeScript(details.tabId, {
                "file": "lib/viewerjs-1.2.0/viewer.min.js"
            });
            chrome.tabs.executeScript(details.tabId, {
                "file": "default_option.js"
            });
            chrome.tabs.executeScript(details.tabId, {
                "file": "run.js"
            });
        }
    });
});