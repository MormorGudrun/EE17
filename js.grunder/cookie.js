/* http://www.chinese-fortune-cookie.com/fortune-cookie-quotes.html */

/* När webbsidan laddtas klart kör start() */
window.onload = start;

/* Start-delen */
function start() {
    /* alla knappar */
    const elementKaka = document.querySelector('.kaka');
    console.log(elementKaka);
    const elementCookie = document.querySelector('.cookie');
    console.log(elementCookie);
    const elementKakor = document.querySelector('.kakor');
    console.log(elementKakor);
    const elementDiv = document.querySelector('div');
    console.log(elementDiv);

    /* Knapp 1: skriv ut en cookie i loggen */
    elementKaka.addEventListener('click', skrivLog);

    function skrivLog() {
        console.log('The joyfulness of a man prolongeth his days.');
        
    }
    /* Knapp 2: skriv ut cookie i webbsidan */
    elementCookie.addEventListener('click', infogaText);

    function infogaText() {
        elementDiv.textContent = 'Something you lost will soon turn up.';
    }

    /* Knapp 3: skriv ut nya cookies en-efter-en som en lista */
    elementKakor.addEventListener('click', infogaLista);

    function infogaLista() {
        elementDiv.textContent += 'A pleasant surprise is in store for you.';
    }
    /* Slumpa fram cookies */
    elementSlump.addEventListener('click', slumpaCookies);
    var cookies = [
        'You will be invited to an exciting event.',
        'A friend asks only for your time, not your money.',
        'Your ability to juggle many tasks will take you far.',
        'Your heart is a place to draw true happiness.',
        'Your great attention to detail is both a blessing and a curse.'];
    function slumpaCookies() {
        var slumpTal = Math.ceil(Math.random() * 5 - 1);
        elementDiv.textHTML += cookies[slumpTal] + '<br>';
    }

}