$(document).ready(function () {

    let loaded = 0;
    let five = loaded + 5;
    let scrollTop = sessionStorage.getItem('scrollTop');

    function load() {
        if (loaded < posts.length && (scrollTop || $(window).scrollTop()) + $(window).height() > $(document).height() - 300) {
            for (var i = loaded; i < five; i++) {
                $('#gallery').append(`<a href="${posts[i].url}"><img src="/photos/${posts[i].title}-250.jpg" alt="${posts[i].title}"></a>`);
                loaded++;
                if (loaded >= posts.length) break;
            }
            five = loaded + 5;
            $('#gallery').justifiedGallery();
        } else {
            if (scrollTop) $(window).scrollTop(scrollTop);
            $('#gallery').animate({opacity:1});
        }
    }

    for (var i = 0; i < 5; i++) {
        $('#gallery').append(`<a href="${posts[i].url}"><img src="/photos/${posts[i].title}-250.jpg" alt="${posts[i].title}"></a>`);
        loaded++;
        if (loaded >= posts.length) break;
    }
    five = loaded + 5;
    $('#gallery').justifiedGallery({
        rowHeight: 200,
        maxRowHeight: 250,
        lastRow: 'nojustify',
        margins: 16,
        border: 0,
        captions: false
    }).on('jg.complete', function () {
        load();
    });

    $(window).scroll(() => {
        scrollTop = null;
        load();
    });

    $(window).on('beforeunload', () => {
        sessionStorage.setItem('scrollTop', $(window).scrollTop());
    });

});