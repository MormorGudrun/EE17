window.onload = start;

function start() {
    const elementImg = document.querySelector('img');
    const elementknapp1 = document.querySelector('.knapp1');
    const elementknapp2 = document.querySelector('.knapp2');

    elementknapp1.addEventListener('click', andraText);
    elementknapp2.addEventListener('click', andraText);

    function andraText() {
        console.log('Klickat på knappen');
        console.log(this.dataset.sko);   
        elementImg.scr = this.dataset.sko;
    }
}