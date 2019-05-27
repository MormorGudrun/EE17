window.onload = start;

function start() {
    var canvas = document.querySelector("#myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.canvas.width = 500;
    ctx.canvas.height = 500;
    var raknare = 0;
    var slumpStad = "";


    const stader = ["Abu Dhabi", "Abuja", "Accra", "Addis Abeba", "Alger", "Amman", "Amsterdam", "Andorra la Vella", "Ankara", "Antananarivo", "Apia", "Asjchabad", "Asmara", "Astana", "Asunci\u00f3n", "Aten", "Bagdad", "Baku", "Bamako", "Bandar Seri Begawan", "Bangkok", "Bangui", "Banjul", "Basseterre", "Beirut", "Belgrad", "Belmopan", "Berlin", "Bern", "Bisjkek", "Bissau", "Bogot\u00e1", "Bras\u00edlia", "Bratislava", "Brazzaville", "Bridgetown", "Bryssel", "Budapest", "Buenos Aires", "Bukarest", "Canberra", "Caracas", "Castries", "Chi\u0219in\u0103u", "Colombo", "Conakry", "Dakar", "Damaskus", "Dhaka", "Dili", "Djibouti", "Dodoma", "Doha", "Dublin", "Dusjanbe", "Funafuti", "Freetown", "Gaborone", "Georgetown", "Gitega", "Guatemala City", "Hanoi", "Harare", "Havanna", "Helsingfors", "Honiara", "Islamabad", "Jakarta", "Jerevan", "Jerusalem", "Juba", "Kabul", "Kairo", "Kampala", "Katmandu", "Khartoum", "Kiev", "Kigali", "Kingston", "Kingstown", "Kinshasa", "Kuala Lumpur", "Kuwait", "K\u00f6penhamn", "Libreville", "Lilongwe", "Lima", "Lissabon", "Ljubljana", "Lom\u00e9", "London", "Luanda", "Lusaka", "Luxemburg", "Madrid", "Majuro", "Malabo", "Mal\u00e9", "Managua", "Manama", "Manila", "Maputo", "Maseru", "Mbabane", "Mexico City", "Minsk", "Mogadishu", "Monaco", "Monrovia", "Montevideo", "Moroni", "Moskva", "Muskat", "N'Djamena", "Nairobi", "Nassau", "Naypyidaw", "New Delhi", "Ngerulmud", "Niamey", "Nicosia", "Nouakchott", "Nuku'alofa", "Nuuk", "Oslo", "Ottawa", "Ouagadougou", "Palikir", "Panama City", "Paramaribo", "Paris", "Peking", "Phnom Penh", "Podgorica", "Port Louis", "Port Moresby", "Port of Spain", "Port-au-Prince", "Porto-Novo", "Port Vila", "Prag", "Praia", "Pretoria", "Pristina", "Pyongyang", "Quito", "Rabat", "Reykjavik", "Riga", "Riyadh", "Rom", "Roseau", "Saint George's", "Saint John's", "San Jos\u00e9", "San Marino", "San Salvador", "Sanaa", "Santiago de Chile", "Santo Domingo", "S\u00e3o Tom\u00e9", "Sarajevo", "Seoul", "Singapore", "Skopje", "Sofia", "Stockholm", "Sucre", "Suva", "Taipei", "Tallinn", "Tarawa", "Tasjkent", "Tbilisi", "Tegucigalpa", "Teheran", "Thimphu", "Tirana", "Tokyo", "Torshamn", "Tripoli", "Tunis", "Ulan Bator", "Vaduz", "Valletta", "Vatikanstaden", "Victoria", "Vientiane", "Vilnius", "Warszawa", "Washington D.C.", "Wellington", "Wien", "Windhoek", "Yamoussoukro", "Yaound\u00e9", "Zagreb"];
    

    function slumpaStad() {
        let slump = Math.ceil(Math.random() * stader.length);
        console.log(slump, stader[slump]);
        return slumpStad = stader[slump].toLowerCase();
    }
    slumpStad = slumpaStad();

    /* Element vi jobbar med */
    const eKnapp = document.querySelector("button");
    const eLista = document.querySelector("select")

    /* Lyssna på knappen */
    eKnapp.addEventListener("click", visaHangman);

    function visaHangman() {
      
        var bokstav = eLista.value.toLowerCase();
        console.log(bokstav);
        
        if (slumpStad.indexOf(bokstav) !== -1) {
            console.log("Bokstaven hittas i ordet");
            
        } else {
            console.log("Bokstaven hittas inte i ordet");
            raknare++;
        }

        /* Jorden */
        if (raknare == 1) {
            ctx.arc(300, 800, 400, 0, 2 * Math.PI);
            ctx.stroke();
        }

        /* Galgen 1:3 */
        if (raknare == 2) {
            ctx.moveTo(200, 420);
            ctx.lineTo(200, 30);
            ctx.stroke();
        }

        /* Galgen 2:3 */
        if (raknare == 3) {
            ctx.moveTo(200, 30);
            ctx.lineTo(450, 30);
            ctx.stroke();
        }

        /* Galgen 3:3 */
        if (raknare == 4) {
            ctx.moveTo(400, 30);
            ctx.lineTo(400, 70);
            ctx.stroke();
        }

        /* Huvudet */
        if (raknare == 5) {
            ctx.beginPath();
            ctx.arc(400, 100, 30, 0, 2 * Math.PI);
            ctx.stroke();
        }

        /* Kroppen */
        if (raknare == 6) {
            ctx.moveTo(400, 130);
            ctx.lineTo(400, 250);
            ctx.stroke();
        }

        /* Höger arm */
        if (raknare == 7) {
            ctx.moveTo(400, 150);
            ctx.lineTo(450, 200);
            ctx.stroke();
        }

        /* Vänster arm */
        if (raknare == 8) {
            ctx.moveTo(400, 150);
            ctx.lineTo(350, 200);
            ctx.stroke();
        }

        /* Höger ben */
        if (raknare == 9) {
            ctx.moveTo(400, 250);
            ctx.lineTo(450, 350);
            ctx.stroke();
        }

        /* Vänster ben */
        if (raknare == 10) {
            ctx.moveTo(400, 250);
            ctx.lineTo(350, 350);
            ctx.stroke();
        }
    }
}