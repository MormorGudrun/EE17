mapboxgl.accessToken = 'pk.eyJ1IjoiZGFzb2JpIiwiYSI6ImNqcGRxNzJhZjAwYTMzdW4wNjdxenF0NTkifQ.WK21wCd4v06Hhw19287MlQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/dasobi/cjpdr7hrh1dfs2spcs69hzkbs', // stylesheet location
    center: [17.807164, 59.377914], // starting position [lng, lat]
    zoom: 15 // starting zoom
});

var marker = new mapboxgl.Marker()      // Här skapar vi en marker 
    .setLngLat([17.807164, 59.377914])  // Här ger vi markern en position
    .addTo(map);                        // Här lägger vi till markern på kartan


    var marker = new mapboxgl.Marker()      // Här skapar vi en marker 
    .setLngLat([17.827164, 59.377914])  // Här ger vi markern en position
    .addTo(map);                        // Här lägger vi till markern på kartan

var popup1 = new mapboxgl.Popup()       //Här skapar vi en popup
    .setLngLat([17.807164, 59.377914])  //Här ger vi popup en possition
    .setHTML("<p>Här bor jag</p>")      //Här skriver vi in texten
    .addTo(map);                        //Här infogar vi popup till map


    var popup2 = new mapboxgl.Popup()       //Här skapar vi en popup
    .setLngLat([17.869984, 59.375815])  //Här ger vi popup en possition
    .setHTML("<p>Här bor Pontus</p>")      //Här skriver vi in texten
    .addTo(map);                        //Här infogar vi popup till map
