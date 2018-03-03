var elem;
var msnry;

function loadMasonry() {
    elem = document.querySelector('.grid');
    msnry = new Masonry(elem, {
        itemSelector: '.grid-item',
        gutter: 15,
        isFitWidth: true
    });
}

window.onload = loadMasonry;