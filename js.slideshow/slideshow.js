window.onload = start;

function start() {
    /* Element vi jobbar med */
    const elementYta = document.querySelector('.yta');
    const elementVanster = document.querySelector('.fa-angle-left');
    const elementHoger = document.querySelector('.fa-angle-right');

    var bildLista = [
        './foton/JPEG/arsams_kusin.jpg',
        './foton/JPEG/billy.jpg',
        './foton/JPEG/delar_ut.jpg',
        './foton/JPEG/EWKND_ Gruppfoto.jpg',
        './foton/JPEG/logo.jpg',
        './foton/JPEG/Min_rygg.jpg',
        './foton/JPEG/redbull.jpg',
        './foton/JPEG/skrattar.2.jpg',
        './foton/JPEG/skrattar.jpg',
        './foton/JPEG/spelar.jpg'
    ];

    /* Lyssnar på knapparna */
    elementVanster.addEventListener('click', bytBild);
    elementHoger.addEventListener('click', bytBild);

    /* Byter bild */
    function bytBild() {
        console.log(this.dataset.riktning);
        
    }
}