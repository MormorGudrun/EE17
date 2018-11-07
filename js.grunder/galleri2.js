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

    /* Klicka på en knapp*/
    elementKnapp1.addEventListener('click', visaBild);
    elementKnapp2.addEventListener('click', visaBild);
    elementKnapp3.addEventListener('click', visaBild);
    elementKnapp4.addEventListener('click', visaBild);

    /* Visa motsvarande stor bild och skriv ut bildtext*/

    function visaBild() {
        console.log(this.dataset.bild);
        
      /*   elementImg.src = './bilder/jpeg/alex-perez-580371-unsplash.jpg';
        elementP.textContent = 'Photo by Alex perez'; */
    }

   

}