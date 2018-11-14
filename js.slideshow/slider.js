window.onload = start;

function start() {
    /* Element vi jobbar med */
    const elementImg = document.querySelector('img');
    const elementBredd = document.querySelector('#bredd');
    const elementHojd = document.querySelector('#hojd');
    const elementOutput = document.querySelector('#output')

    elementImg.width = 400;
    elementImg.height = 400;

    /* Läs av värdet på slidern */
    console.log(elementBredd.value);
    
    /* lyssna på när man drar i slidern */
    elementBredd.addEventListener('input', andraBredd);
    elementHojd.addEventListener('input', andraHojd);

    function andraBredd() {
        console.log(elementBredd.value);
        elementImg.width = elementBredd.value;
        elementOutput.textContent = '(' + elementBredd.value + 'x' + elementHojd.value + ')' 
    }
    function andraHojd() {
        console.log(elementHojd.value);
        elementImg.height = elementHojd.value;
        elementOutput.textContent = '(' + elementBredd.value + 'x' + elementHojd.value + ')'
    }
}
