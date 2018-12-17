window.onload = start;

function start() {
/* Elementen vi jobbar med */
    const eAlien = document.querySelector("img");
    
/* Skeppets position */
    let x = 0;
    let y = 0;
    
/* Lyssna på tangenttryck */
    document.addEventListener("keydown", flygaSkepp)

    function flygaSkepp(event) {
        console.log(event.key);

        /* Minska vid tryck på vänsterpil */
        if (event.key == "ArrowLeft") {
            x -= 10;
        }
        /* Öka vid tryck av högeråil */
        if (event.key == "ArrowRight") {
            x += 10;
        }
        if (event.key == "ArrowUp") {
            y -= 10;
        }
        if (event.key == "ArrowDown") {
            y += 10;
        }
        console.log(x + " " + y);

        if (x > window.innerWidth) {
            x = 0
        } else if (x < 0) {
            x = window.innerHeight - 20;
        }
        if (y > window.innerWidth) {
            y = 0
        } else if (x < 0) {
            y = window.innerHeight - 20;
        }
         /* Flytta på skeppet */
         eAlien.style.left = x + "px";
         eAlien.style.top = y + "px";
    }
}