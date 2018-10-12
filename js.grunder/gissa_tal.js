/* Skapa ett slumptal mellan 1-100 */
var slumptal = Math.ceil(Math.random() * 100);
var elementGissning = document.querySelector('#gissning');
var elementSvar = document.querySelector('#svar');
console.log('Nytt slumptal: ' + slumptal);


/* Reagera på när man trycker på knappen */
function gissa() {
     /* Läsa av gissningen i första input */
    var gissning = elementGissning.value;
    console.log('Gissningen: ' + gissning);

    /* Om gissning = slumptal då har man vinnit */
    if (gissning == slumptal) {
        console.log('Yippee! Du har vinnit Äran!');

        /* skriv i andra input-rutan */
        elementSvar.value = 'Yippee! Du har vinnit äran!'
    }
    /* Om gissningen > slumptal, skriv ut "för högt" */
    if (gissning > slumptal) {
        console.log('För högt');
         /* skriv i andra input-rutan */
        elementSvar.value = 'för högt!';

    }
    /* Om gissningen < slumptal, skriv ut "för lågt" */
    if (gissning < slumptal) {
        console.log('För lågt');
        /* skriv i andra input-rutan */
        elementSvar.value = 'för Lågt!';
    }
    /* Om gissnig > 100, skriv ut "Är du du!" */
    if (gissning > 100) {
        console.log('Är du dum!');
        elementSvar.value = 'Är du dum!';
    }

}