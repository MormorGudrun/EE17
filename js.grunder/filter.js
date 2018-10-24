/* 
* Testar tre oilka filter på ett foto.
* Foto kommer från http://unsplash.com
*/

/* När webbsidan laddtas klart kör start() */
window.onload = start;

/* Start-delen */
function start() {
    
    /* Välj ut alla elementen att jobba med: target */
    const elementSuddig = document.querySelector('#suddigKnapp');
    const elementGraskala = document.querySelector('#graskalaKnapp');
    const elementSepia = document.querySelector('#sepiaKnapp');
    const elementOutput = document.querySelector('.output');
    const elementFoto = document.querySelector('img');
    
    
    /* Lyssna på knapparna */
    elementSuddig.addEventListener('click', suddigt);
    elementGraskala.addEventListener('click', graskala);
    elementSepia.addEventListener('click', sepia);


    /* Funktion för att göra fotot suddigt */
    function suddigt() {
        elementFoto.classList.remove('suddigt', 'graskala', 'sepia');
        elementFoto.classList.add('suddigt');
        elementFoto.classList.value = 'suddigt';
        elementOutput.textContent = 'Använder filter: blur(5px)';

    }

    /* Funktion för att göra fotot gråskala */
    function graskala() {
        elementFoto.classList.remove('suddigt', 'graskala', 'sepia');
        elementFoto.classList.add('graskala');
        elementOutput.textContent = 'Använder filter: grayscale (80%)';
    }

    /* Funktion för att göra fotot sepia-färgat */
    function sepia() {
        elementFoto.classList.remove('suddigt', 'graskala', 'sepia');
        elementFoto.classList.add('sepia');
        elementOutput.textContent = 'Använder filter: sepia (80%)';
    }

}