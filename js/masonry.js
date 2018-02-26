var elem = document.querySelector('.grid');
var msnry;

function loadMasonry() {
    msnry = new Masonry(elem, {
        itemSelector: '.grid-item',
        columnWidth: 112,
        isFitWidth: true
        });
}

window.onload = loadMasonry();