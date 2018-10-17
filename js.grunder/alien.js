/* https://www.smashingmagazine.com/2018/02/freebie-hand-drawn-space-icons/ */

/* När webbsidan laddtas klart kör start() */
window.onload = start;

/* Start-delen */
function start() {
    /* Kör-delen */

    /* Infoga en text på sidan när du klickar på knapp 1: Här kommer freebies Space ikoner */
    /*  */
    const elementFire = document.querySelector('.fire');
    console.log(elementFire);
    const elementIce = document.querySelector('.ice');
    console.log(elementIce);
    const elementAttack = document.querySelector('.attack');
    console.log(elementAttack);
    const elementDiv = document.querySelector('div');
    console.log(elementDiv);

    /* Lyssna på klick-signaler */
    elementFire.addEventListener('click', infogaText);

    function infogaText() {
        elementDiv.textContent = 'Läskigt BUUUUUUUUUU';
    }

    /* Infoga en bild när du klickar på knapp 2 */
    elementIce.addEventListener('click', infogaBild);

    function infogaBild() {
        elementDiv.innerHTML += '<img src="./ikoner/alien-1-64x64.png" alt="alien">';

    }
    /* Skjut in en till ikon för varje klick på knapp 3 */
    elementAttack.addEventListener('click', infogaBilder);

    function infogaBilder() {
        elementDiv.innerHTML += '<img src="./ikoner/alien-3-64x64.png" alt="alien">';

    }
    /* Extra uppgift infoga slumpvis vald ikon */
    elementDiv.addEventListener('click', infogaSlumpBild);
    var ikoner = [
        '/ikoner/alien-5-64x64.png',
        'ikoner/alien-3-64x64.png',
        'ikoner/alien-1-64x64.png',
        'ikoner/alien-ship-64x64.png',
        'ikoner/asteroid-2-64x64.png',
        'ikoner/astronaut-helmet-64x64.png',
        'ikoner/earth-64x64.png'
    ];

    function infogaSlumpBild() {
        var slump = Math.ceil(Math.random() * 7);
        elementDiv.innerHTML += '<img src="./' + ikoner[slump] + '"alt=ikon">';

    }
}