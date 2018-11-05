/* 
* När man klickar på en knapp byts bilden ut till aktuell bild.
*/

/* När webbsidan laddats klart så kör start */
window.onload = start();

/* Start-delen */
function start() {
    

    /* Vilka element arbetar vi med? */
    const elementImg = document.querySelector('.bild img');
    const elementP = document.querySelector('.bild p');
    const elementKnapp1 = document.querySelector('.knapp1');
    const elementKnapp2 = document.querySelector('.knapp2');
    const elementKnapp3 = document.querySelector('.knapp3');
    const elementKnapp4 = document.querySelector('.knapp4');
    /* Vilka händelser behöver vi lyssna på? */
    
    elementKnapp1.addEventListener('click', visaBild1);
    elementKnapp2.addEventListener('click', visaBild2);
    elementKnapp3.addEventListener('click', visaBild3);
    elementKnapp4.addEventListener('click', visaBild4);

    /* Vad ska hända när man klickat på knapp 1 */
    function visaBild1() {
        elementImg.src = './bilder/jpeg/michael-olsen-584366-unsplash.jpg';
        elementP.textContent = 'Photo by Michel olsen';
    }
    function visaBild2() {
        elementImg.src = './bilder/jpeg/sacha-styles-552126-unsplash.jpg';
        elementP.textContent = 'Photo by Sacha styles';
    }
    function visaBild3() {
        elementImg.src = './bilder/jpeg/will-turner-508747-unsplash.jpg';
        elementP.textContent = 'Photo by Will turner';
    }
    function visaBild4() {
        elementImg.src = './bilder/jpeg/alex-perez-580371-unsplash.jpg';
        elementP.textContent = 'Photo by Alex perez';
    }
}