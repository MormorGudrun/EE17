/* Skapa ett slumptal mellan 1-100 */
var slumptal = Math.ceil(Math.random() * 100);
var elementGissning = document.querySelector('#gissning');
var elementSvar = document.querySelector('#svar');
console.log('Nytt slumptal: ' + slumptal);
/* antal försök */
var antal = 0;

/* Reagera på när man trycker på knappen */
function gissa() {

    /* räkna upp */
    antal++;

    /* Läsa av gissningen i första input */
    var gissning = elementGissning.value;
    console.log('Gissningen: ' + gissning);

    /* Om gissning = slumptal då har man vinnit */
    if (gissning == slumptal) {
        svar = '<p class="animated yipee">' + antal + ') ' + gissning + 'yippee! Du har vunnit äran!</p > ';
        elementSvar.insertAdjacentHTML('beforeend', svar);

        /* skriv i andra input-rutan */
        elementSvar.value = 'Yippee! Du har vinnit äran!';

        /* stäng av kappen */
        document.querySelector('buttom').disabled = true;
        /* en rolig effekt */
        document.querySelector('.yipee').classList.add('fadeInDown');
    }



    /* Om gissningen > slumptal, skriv ut "för högt" */
    if (gissning > slumptal) {
        svar = '<p class="hogt">' + antal + ') ' + gissning + ' för högt!</p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);
    }
    /* Om gissningen < slumptal, skriv ut "för lågt" */
    if (gissning < slumptal) {
        svar = '<p class="lagt">' + antal + ') ' + gissning + ' för lågt!</p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);
    }
    /* Om gissnig > 100, skriv ut "Är du du!" */
    if (gissning > 100) {
        svar = '<p class="dum">' + antal + ') ' + gissning + ' är du dum!!</p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);
    }

}