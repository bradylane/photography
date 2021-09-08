let loading = false;
function openPhoto(name) {
    const photo = photos.find(p => p.name == name);
    if (!photo) return;
    loading = true;
    $('#inner-wrap').hide();
    $('#photo').data('name', photo.name);
    $('body').addClass('noscroll');
    $('#photo img').attr({ src: `photos/${photo.title}.jpg`, alt: photo.title });
    $('#title').text(photo.title);
    $('#year').text(photo.year);
    $('#links').empty();
    photo.links.forEach(link => {
        $('#links').append(`<li><a href="${link.url}" target="_blank">${link.text}</a></li>`);
    });
    $('#photo').fadeIn();
    $('#photo-loading').fadeIn();
    $('#photo img').load(() => {
        $('#photo-loading').hide();
        $('#inner-wrap').fadeIn();
        loading = false;
    });
}
function closePhoto() {
    $('#photo').fadeOut();
    $('body').removeClass('noscroll');

}
function nextPhoto() {
    if (loading) return;
    loading = true;
    let i = photos.findIndex(p => p.name == $('#photo').data('name')) + 1;
    if (i >= photos.length) i = 0;
    $('#inner-wrap').fadeOut(() => { openPhoto(photos[i].name); });

}
function previousPhoto() {
    if (loading) return;
    loading = true;
    let i = photos.findIndex(p => p.name == $('#photo').data('name')) - 1;
    if (i < 0) i = photos.length - 1;
    $('#inner-wrap').fadeOut(() => { openPhoto(photos[i].name); });
}

document.querySelector('#photo img').addEventListener('contextmenu', e => {
    e.preventDefault();
});

document.onkeydown = function (e) {
    return;
    if ($('#photo').is(':hidden')) return;
    switch (e.key) {
        case 'ArrowLeft':
            previousPhoto();
            break;
        case 'ArrowRight':
            nextPhoto();
            break;
        case 'Escape':
            closePhoto();
            break;
    }
};

$(document).ready(function () {

    let loaded = 0;
    let five = loaded + 5;

    function load() {
        if (loaded < posts.length && $(window).scrollTop() + $(window).height() > $(document).height() - 300) {
            for (var i = loaded; i < five; i++) {
                //$('#gallery').append(`<a onclick="openPhoto('${photos[i].name.replaceAll("'", "\\'")}');"><img src="photos/${photos[i].title}-250.jpg" alt="${photos[i].title}"></a>`);
                $('#gallery').append(`<a href="${posts[i].url}"><img src="/photos/${posts[i].title}-250.jpg" alt="${posts[i].title}"></a>`);
                loaded++;
                if (loaded >= posts.length) break;
            }
            five = loaded + 5;
            $('#gallery').justifiedGallery();
        }
    }

    for (var i = 0; i < 5; i++) {
        //$('#gallery').append(`<a onclick="openPhoto('${photos[i].name.replaceAll("'", "\\'")}');"><img src="photos/${photos[i].title}-250.jpg" alt="${photos[i].title}"></a>`);
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

    $(window).scroll(load);

});