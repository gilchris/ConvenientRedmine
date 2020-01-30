chrome.storage.sync.get(optionKeys, function (options) {
    if (location.href.match(new RegExp(options.workingDomain, "i"))) {
        for (var status in options.listColors) {
            $("tr.status-" + status).css("background", options.listColors[status]);
            $("a.status-" + status + ":not(.parent)").parent().parent("tr").css("background", options.listColors[status]);
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

        var imgBox = $('<div id="CR_ImageBox">').css('display', 'none'),
            attachmentsEls = $("div.attachments a, div.thumbnails a"),
            imgUrlMap = [];
        attachmentsEls.filter('[href*="download"]').each(function () {
            var el = $(this),
                url = el.attr('href');
            if (url.match(/jpeg|jpg|bmp|gif|png/i)) {
                imgUrlMap.push(url);
                var imgSrc = $('<img>').attr('src', url);
                imgBox.append(imgSrc);
            }
        });
        $('body').append(imgBox);
        var gallery = new Viewer(document.getElementById('CR_ImageBox'));
        attachmentsEls.each(function () {
            var el = $(this),
                url = el.attr('href'),
                splitedUrl = url.split('/'),
                findName = splitedUrl[splitedUrl.length - 2] + '/' + splitedUrl[splitedUrl.length - 1];
            if (url.match(/jpeg|jpg|bmp|gif|png/i) && url.indexOf('download') === -1) {
                el.attr('href', '#');
                el.click(function () {
                    for (var i = 0, l = imgUrlMap.length; i < l; i++) {
                        if (imgUrlMap[i].indexOf(findName) > -1) {
                            break;
                        }
                    }
                    gallery.view(i);
                    gallery.show();
                    return false;
                });
            }
        });
    }
});