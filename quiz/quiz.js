window.onload = start;

function start() {
    /* Element vi använder */
    const eOrdet = document.querySelector("#ordet");
    const eSvaret = document.querySelector("#svaret");
    const eKnappRatta = document.querySelector("#ratta");
    const eOutput = document.querySelector("#output");
    const eKnappNytt = document.querySelector("#nytt");

    /* En massa ord */
    let ordlistaEng = [
        "Fun",
        "Correct",
        "Easy",
        "Hungry",
        "Fast",
        "Car",
        "Library",
        "Cat",
        "Plane",
        "Holliday"
    ];
    let ordlistaSv = [
        "Kul",
        "Korrekt",
        "Lätt",
        "Hungrig",
        "Snabb",
        "Bil",
        "Bibliotek",
        "Katt",
        "Plan",
        "Semester"
    ];

    /* För att komma ihåg på ordet och översättningen */
    let ordetEng = "";
    let ordetSv = "";

    /* Slumpa fram ett ord */
    function slumpOrd() {
        let slumptal = Math.ceil(Math.random() * 10 - 1);
        ordetEng = ordlistaEng[slumptal];
        ordetSv = ordlistaSv[slumptal];
    }

    /* Kör funktioen och skapa slumpade ord */
    slumpOrd();
    console.log(ordetEng + " " + ordetSv);
    eOrdet.textContent = ordetEng;

    eKnappRatta.addEventListener("click", rattaSvaret);
    function rattaSvaret() {
        let svaret = eSvaret.value;
        if (svaret == ordetSv) {
            eOutput.textContent = "Rätt Svar";
        } else {
            eOutput.textContent = "Fel Svar";
        }
    }

    eKnappNytt.addEventListener("click", nyFraga);
    function nyFraga() {
        slumpOrd();
        eOrdet.textContent = ordetEng;
        eSvaret.value = "";
        eOutput.textContent = "";
    }
}