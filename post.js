document.querySelector('#photo-loading').addEventListener('load', () => {
    $('#photo-loading').fadeIn();
});

document.querySelector('#photo img').addEventListener('load', () => {
    $('#photo-loading').hide();
    $('#inner-wrap').fadeIn();
});

document.querySelectorAll('#photo-nav a').forEach(a => {
    a.addEventListener('click', (event) => {
        event.preventDefault();
        $('#inner-wrap').fadeOut(() => {
            window.location = event.currentTarget.href;
        });
    });
});

document.onkeydown = event => {
    switch (event.key) {
        case 'ArrowLeft':
            $('#previous-photo').click();
            break;
        case 'ArrowRight':
            $('#next-photo').click();
            break;
        case 'Escape':
            $('#all-photos').click();
            break;
    }
};

document.querySelector('#photo img').addEventListener('contextmenu', event => {
    event.preventDefault();
});