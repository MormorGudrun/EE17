/* 
 * Skapa ett spamskydd
 * Två slumptal presenteras
 * Användaren räknar ut summan
 */

/* Kör koden när webbsidan laddats klart */
window.onload = start;

function start() {

    /* Skapar globala variabler tal1 och tal2 */
     /* Slumpa fram två tal */
    var tal1 = Math.ceil(Math.random() * 40);
    var tal2 = Math.ceil(Math.random() * 40);

    /* Skriv ut frågan */
    /* 1. Skapa en target till elementet */
    /* 2. Skriv ut, tex "Vad är 2+3?"; */
    const elementFraga = document.querySelector('.fraga');
    elementFraga.textContent = 'vad är ' + tal1 + ' + ' + tal2 + '?';

    /* lyssna på knappen */
    /* 1. Ta tag i knappen */
    /* 2. Lyssna på knappen */
    const elementKnapp = document.querySelector('.knapp');
    elementKnapp.addEventListener('click', rattaSvar);



    /* En funktion som körs när man klickat på knappen */
    function rattaSvar() {
        



        /* Läs in det som användaren skriver i textrutan */
        /* 1. Ta tag i textrutan */
        /* 2. Läs av innehållet in i en variabel */
        const elementSumma = document.querySelector('.summan');
        var summan = elementSumma.value;

        const elementSvaret = document.querySelector('.svaret');

        /* Om svaret = tal1 + tal2 */
        if (summan == (tal1 + tal2)) {
             /* Skriv ut svar: "Rätt svar, du är en människa!" */
            elementSvaret.textContent = 'Rätt svar, du är en människa!';
        } else {
            /* Skriv ut svar: "Fel svar, du en robot eller en människa som räknar fel!" */
            elementSvaret.textContent = 'Fel svar, du en robot eller en människa som räknar fel!';
        }

       

        
    }
}