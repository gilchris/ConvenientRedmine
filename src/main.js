var optionKeys = ["workingDomain", "listColors"],
    defaultOptions = {
        "workingDomain": ".*redmine.*",
        "listColors": {
            "1": "#aaeeaa", // 신규
            "2": "#bbffbb", // 진행
            "3": "#cccccc", // 해결
            "4": "#ffff99", // 의견
            "5": "#aaaaaa", // 완료
            "6": "#bbbbbb", // 거절 (Reject)
            "7": "#ffffff", // ??
            "8": "#bbffbb", // 다시 열림 (Reopened)
            "9": "#eeffaa", // 보류
            "10": "#ffff99" // 의견 (Need feedback)
        }
    },
    options = {};
function loadOptions(callback) {
    chrome.storage.sync.get(optionKeys, function (_options) {
        options = Object.assign(_options, defaultOptions);
        if (typeof callback === 'function') {
            callback(_options);
        }
    });
}
function saveOptions(_options) {
    chrome.storage.sync.set(_options);
    options = _options;
}

chrome.runtime.onInstalled.addListener(function () {
    saveOptions(defaultOptions);
});
//chrome.storage.sync.remove(optionKeys);
loadOptions();

chrome.webNavigation.onCompleted.addListener(function (details) {
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
            "file": "run.js"
        });
    }
});