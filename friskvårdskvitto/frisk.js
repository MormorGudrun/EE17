/* Starten */
window.onload = start;

function start() {
    
    /* Skaffa på alla element vi behöver jobba med: läsa av, skriva i eller lyssna på händelser */

    const eGodkand = document.querySelector("#godkand");
    const eGiltig = document.querySelector("#giltig");
    const eBetalt = document.querySelector("#betalt");
    const eMomssats = document.querySelector("#momssats");
    const eBelopp = document.querySelector("#belopp");
    const eKnapp = document.querySelector("button");
    const eTotal = document.querySelector("#total");

    eKnapp.addEventListener("click", registreraKvitto);
    function registreraKvitto() {
        /* Läs av alla värden */
        let godkand = eGodkand.checked;
        let giltig = eGiltig.checked;
        let betalt = eBetalt.checked;
        let momssats = eMomssats.value;
        let belopp = eBelopp.value;
        console.log(godkand + " " + giltig + " " + betalt + " " + momssats + " " + belopp);

        /* Räkna ut belopp plus vald momssats */
        let total = belopp * (1 + momssats / 100);

        /* Om kvittot är godkänt, giltigt och betalt så fyll i totalen */
        if (godkand && giltig && betalt) {
            /* Skriv ut totalen på webbsidan */
            eTotal.value = total;

        } else {
            alert("Kvittot måste vara godkänt, giltigt och betalt!");
        }
    }
}