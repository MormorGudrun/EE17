window.onload = start;

function start() {
    /* Element vi jobbar med */
    const elementGrid = document.querySelector('.grid');

    /* Lyssna på klick */
    elementGrid.addEventListener('click', lucka);

        /* Vinsten någonstans mellan 1-24 */
    let vinst = Math.ceil(Math.random() * 23 + 1);
    console.log(vinst);
    

    /* Öppna en lucka */
    function lucka(event) {
        console.log('klickat på grid');
        console.log(event.target.className);
        
        if (event.target.className == 'animated dag') {
            console.log(event.target.textContent);

            if (event.target.textContent == vinst) {
                console.log('HurraaaH!');
                event.target.classList.add('bild');
            } else {
                event.target.classList.add('zoomOut');
            }
        }
    }

}