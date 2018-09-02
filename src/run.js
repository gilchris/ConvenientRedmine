chrome.storage.sync.get({
    "workingDomain": ".*redmine.*"
}, function (options) {
    if (location.href.match(new RegExp(options.workingDomain, "i"))) {
        var colors = {
            "1": "#aea", // 신규
            "2": "#bfb", // 진행
            "3": "#ccc", // 해결
            "4": "#ff9", // 의견
            "5": "#aaa", // 완료
            "9": "#efa", // 보류
            "10": "#ff9" // 의견
            };
        for (var status in colors) {
            $("tr.status-" + status).css("background", colors[status]);
            $("a.status-" + status + ":not(.parent)").parent().parent("tr").css("background", colors[status]);
        }
    
        if (location.href.indexOf('/issues/') > -1) {
            $("a[title^='20']").each(function() {
                var el = $(this);
                if (el.find('img').length === 0) {
                    el.text(el.text() + " (" + el.attr('title') + ")");
                }
            });
        }
    
        var activeUserLink = $("div[id='loggedas'] > a").attr('href');
        $("a[href='" + activeUserLink + "']").each(function(i) {
            if (i > 1) {
                var el = $(this);
                el.html("<b style='color:#000000'>" + el.html() + "</b>");
            }
        });

        $("div.attachments a, div.thumbnails a").each(function () {
            var el = $(this),
                url = el.attr('href');
            if (url.match(/jpeg|jpg|bmp|gif|png/i)) {
                el.attr('href', '#'+el.attr('title'));
                el.click(function () {
                    $('<div id="customImageLayerBG">').css({
                        'position': 'absolute',
                        'top': 0,
                        'left': 0,
                        'width': '100%',
                        'height': '100%',
                        'background-color': '#DDDDDD',
                        'opacity': 0.8,
                        'z-index': 50
                    }).appendTo('body');
                    $('<img id="customImageLayer" src="'+url+'">').css({
                        'position': 'absolute',
                        'top': '50px',
                        'left': '50px',
                        'cursor': 'pointer',
                        'z-index': 51
                    }).click(function () {
                        $('#customImageLayer').remove();
                        $('#customImageLayerBG').remove();
                    }).appendTo('body');
                });
            }
        });
    }
});