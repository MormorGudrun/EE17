/* 
 * Räknar ut en körsträckan för en bil.
 * Mata in hastighet och tid.
 * Få avtsånd som svar.
 */

/* Kör koden när webbsidan laddats klart */
window.onload = start;

function start() {

    /* Välj ut alla elementen att jobba med: target */
    const elementHastighet = document.querySelector('.hastighet');
    const elementTid = document.querySelector('.tid');
    const elementRaknaUt = document.querySelector('.raknaUt');
    const elementSvar = document.querySelector('.svar');
    

    /* Lyssna på knappen */
    elementRaknaUt.addEventListener('click', raknaUt);

    /* Räkna ut avståndet */
    function raknaUt() {
        
        /* Läs av hastigheten och tiden */
        var hastighet = elementHastighet.textContent;
        var tid = elementTid.textContent;
        

        /* Räkna ut avståndet = hastigheten * tid */
        var avstand = hastighet * tid / 60;

        /* Skriv ut resultatet tex 'Körsträckan blir 57 km.' */
        elementSvar.textContent = 'körsträckan blir ' + avstand + ' km.';
    }
}