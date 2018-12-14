window.onload = start;

function start() {
    /* Element vi jobbar med */
    const eKnapp1 = document.querySelector("#knapp1");
    const eKnapp2 = document.querySelector("#knapp2");
    const eTalet = document.querySelector("#talet");
    
    eKnapp1.addEventListener("click", raknaNed);
    eKnapp2.addEventListener("click", raknaUpp);

    function raknaNed() {
        let talet = Number(eTalet.value);
        eTalet.value = talet -1;
    }
    function raknaUpp() {
        let talet = Number(eTalet.value);
        eTalet.value = talet +1;
    }
}