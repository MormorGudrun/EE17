window.onload = start;

function start() {
    /* Element vi jobbar med */
    const elementYta = document.querySelector('.yta');
    const elementVanster = document.querySelector('.fa-angle-left');
    const elementHoger = document.querySelector('.fa-angle-right');
    const elementPunkter = document.querySelector('.punkter');

    /* Lista på alla bilder */
    var bildLista = [
        './foton/JPEG/Min_rygg.jpg',
        './foton/JPEG/billy.jpg',
        './foton/JPEG/delar_ut.jpg',
        './foton/JPEG/EWKND_ Gruppfoto.jpg',
        './foton/JPEG/logo.jpg',
        './foton/JPEG/arsams_kusin.jpg',
        './foton/JPEG/redbull.jpg',
        './foton/JPEG/skrattar.2.jpg',
        './foton/JPEG/skrattar.jpg',
        './foton/JPEG/spelar.jpg'
    ];
    /* Posotion på bilden man tittar på */
    var index = 0;

    /* Visa första bilden */
    elementYta.style.cssText = 'background: url("' + bildLista[0] + '") no-repeat center;';

    /* Skapa alla punkter */
    for (let i = 0; i < bildLista.length; i++) {
        elementPunkter.innerHTML += '<i class="fas fa-dot-circle"></i>';
    }
    
    /* Lyssnar på knapparna */
    elementVanster.addEventListener('click', bytBild);
    elementHoger.addEventListener('click', bytBild);

    /* Byter bild */
    function bytBild() {
        /* Om man klickat på pil höger */
        if (this.dataset.riktning == 'höger') {
            index++;            
        }
       
        /* Om man klickat på pil vänster */
        if (this.dataset.riktning == 'vänster') {
            index--; 
        }
        
        /* Om man går förbi 0, dvs -1, ta bort knappe vänster */
        if (index == -1) {
            index = bildLista.length - 1;
        }
        /* Om man gåt förbi sista, ta bort höger knapp */
        if (index == bildLista.length) {
            index = 0;
        }
        console.log(this.dataset.riktning + ' ' + index + ' ' + bildLista[index]);

        /* Byt ut bakgrudsbilden */
        elementYta.style.cssText = 'background: url("' + bildLista[index] + '") no-repeat center;';
    }
}