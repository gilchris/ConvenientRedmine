(function () {
    var $ = document.getElementById,
        msg = chrome.i18n.getMessage,
        initOptions = {},
        elWorkingDomain = $("optWorkingDomain");

    $("lblWorkingDomain").innerHTML = msg("optionWorkingDomain");
    elWorkingDomain.setAttribute("placeholder", msg("optionWorkingDomain_placeholder"));
    $("btnSave").innerHTML = msg("buttonSave");

    chrome.storage.sync.get({
        "workingDomain": ".*redmine.*"
    }, function (options) {
        initOptions = options;

        elWorkingDomain.setAttribute("value", initOptions["workingDomain"]);
    });

    $("btnSave").onclick = function () {
        chrome.storage.sync.set({
            "workingDomain": elWorkingDomain.getAttribute("value")
        })
    };
})();