$(function () {
    var msg = chrome.i18n.getMessage,
        initOptions = {},
        elWorkingDomain = $("#optWorkingDomain"),
        elSaveButton = $("#btnSave"),
        elListColor1 = $("#listColor1"),
        elListColor2 = $("#listColor2"),
        elListColor3 = $("#listColor3"),
        elListColor4 = $("#listColor4"),
        elListColor5 = $("#listColor5"),
        elListColor6 = $("#listColor6"),
        elListColor7 = $("#listColor7"),
        elListColor8 = $("#listColor8"),
        elListColor9 = $("#listColor9"),
        elListColor10 = $("#listColor10");

    $("h1").text(msg("extOptionTitle"));
    $("#lblWorkingDomain").text(msg("optionWorkingDomain"));
    elWorkingDomain.attr("placeholder", msg("optionWorkingDomain_placeholder"));
    elSaveButton.text(msg("buttonSave"));

    $("#lblStateColorMaybeDescription").text(msg("stateColorMaybeDescription"));
    $("#lblListColor1").text(msg("stateColor1"));
    $("#lblListColor2").text(msg("stateColor2"));
    $("#lblListColor3").text(msg("stateColor3"));
    $("#lblListColor4").text(msg("stateColor4"));
    $("#lblListColor5").text(msg("stateColor5"));
    $("#lblListColor6").text(msg("stateColor6"));
    $("#lblListColor7").text(msg("stateColor7"));
    $("#lblListColor8").text(msg("stateColor8"));
    $("#lblListColor9").text(msg("stateColor9"));
    $("#lblListColor10").text(msg("stateColor10"));
    $("#descriptionListColor1").text(msg("stateColorMaybe1"));
    $("#descriptionListColor2").text(msg("stateColorMaybe2"));
    $("#descriptionListColor3").text(msg("stateColorMaybe3"));
    $("#descriptionListColor4").text(msg("stateColorMaybe4"));
    $("#descriptionListColor5").text(msg("stateColorMaybe5"));
    $("#descriptionListColor6").text(msg("stateColorMaybe6"));
    $("#descriptionListColor7").text(msg("stateColorMaybe7"));
    $("#descriptionListColor8").text(msg("stateColorMaybe8"));
    $("#descriptionListColor9").text(msg("stateColorMaybe9"));
    $("#descriptionListColor10").text(msg("stateColorMaybe10"));

    var bgWin = chrome.extension.getBackgroundPage();
    bgWin.loadOptions(function (_options) {
        initOptions = _options;

        elWorkingDomain.attr("value", initOptions["workingDomain"]);

        elListColor1.val(initOptions["listColors"]["1"]);
        elListColor2.val(initOptions["listColors"]["2"]);
        elListColor3.val(initOptions["listColors"]["3"]);
        elListColor4.val(initOptions["listColors"]["4"]);
        elListColor5.val(initOptions["listColors"]["5"]);
        elListColor6.val(initOptions["listColors"]["6"]);
        elListColor7.val(initOptions["listColors"]["7"]);
        elListColor8.val(initOptions["listColors"]["8"]);
        elListColor9.val(initOptions["listColors"]["9"]);
        elListColor10.val(initOptions["listColors"]["10"]);
    });

    elSaveButton.click(function () {
        bgWin.saveOptions({
            "workingDomain": elWorkingDomain.val(),
            "listColors": {
                "1": elListColor1.val(),
                "2": elListColor2.val(),
                "3": elListColor3.val(),
                "4": elListColor4.val(),
                "5": elListColor5.val(),
                "6": elListColor6.val(),
                "7": elListColor7.val(),
                "8": elListColor8.val(),
                "9": elListColor9.val(),
                "10": elListColor10.val()
            }
        });
    });

});