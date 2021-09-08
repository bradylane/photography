$('#photo-loading').fadeIn();

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