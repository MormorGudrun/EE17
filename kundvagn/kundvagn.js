/* 
* Enkel kundvagn
* 1. Läs av priset på varorna och skriv ut dom i konsolen
* 2. När man klickar på plus fylls rutan "total" med varans pris
* 3. Dessutom skall man addera varans pris till "total"
* 4. När man klickar på plus skall antalet varor räknas upp
* 5. Och priset för vald fraktsät skall visas i rutan "frakt"
*/
window.onload = start;

function start() {
    /* Variabler */
    var skorAntal = 0;
    var byxaAntal = 0;
    var mossaAntal = 0;
    /* Elementen vi jobbar med */
    const eSkorPris = document.querySelector('#skorPris');
    const eSkorAntal = document.querySelector('#skorAntal');
    const eByxaPris = document.querySelector('#byxaPris');
    const eByxaAntal = document.querySelector('#byxaAntal');
    const eMossaPris = document.querySelector('#mossaPris');
    const eMossaAntal = document.querySelector('#mossaAntal');
    const eFrakt = document.querySelector('#frakt');
    const eTotal = document.querySelector('#total');
    const eSkorPlus = document.querySelector('#skorPlus');
    const eByxaPlus = document.querySelector('#byxaPlus');
    const eMossaPlus = document.querySelector('#mossaPlus');
    const eLevForetag = document.querySelectorAll('input[name="frakt"]');


    /* Läs av priset på varorna och skriv ut dom i konsolen */
    console.log(eSkorPris.value);
    console.log(eByxaPris.value);
    console.log(eMossaPris.value);
    
    /* När man klickar på plus fylls rutan "total" med varans pris */
    eSkorPlus.addEventListener('click', laggTillSkor);
    function laggTillSkor() {
        skorAntal += 1;
        eSkorAntal.value = skorAntal;

        if (eLevForetag[0].checked) {
            eFrakt.value = eLevForetag[0].value;
        }
        if (eLevForetag[1].checked) {
            eFrakt.value = eLevForetag[1].value;
        }
        if (eLevForetag[2].checked) {
            eFrakt.value = eLevForetag[2].value;   
        }

        eTotal.value = eSkorPris.value * skorAntal + eByxaPris.value * byxaAntal + eMossaPris.value * mossaAntal + Number(eFrakt.value);
    }
    eByxaPlus.addEventListener('click', laggTillByxa);
    function laggTillByxa() {
        byxaAntal += 1;
        eByxaAntal.value = byxaAntal;
        if (eLevForetag[0].checked) {
            eFrakt.value = eLevForetag[0].value;
        }
        if (eLevForetag[1].checked) {
            eFrakt.value = eLevForetag[1].value;
        }
        if (eLevForetag[2].checked) {
            eFrakt.value = eLevForetag[2].value;   
        }
        eTotal.value = eSkorPris.value * skorAntal + eByxaPris.value * byxaAntal + eMossaPris.value * mossaAntal + Number(eFrakt.value);
    }
    eMossaPlus.addEventListener('click', laggTillMossa);
    function laggTillMossa() {
        mossaAntal += 1;
        eMossaAntal.value = mossaAntal;
        if (eLevForetag[0].checked) {
            eFrakt.value = eLevForetag[0].value;
        }
        if (eLevForetag[1].checked) {
            eFrakt.value = eLevForetag[1].value;
        }
        if (eLevForetag[2].checked) {
            eFrakt.value = eLevForetag[2].value;   
        }
        eTotal.value = eSkorPris.value * skorAntal + eByxaPris.value * byxaAntal + eMossaPris.value * mossaAntal + Number(eFrakt.value);
    }
    
    
    
}