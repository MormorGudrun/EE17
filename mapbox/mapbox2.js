mapboxgl.accessToken = 'pk.eyJ1IjoiZGFzb2JpIiwiYSI6ImNqcGRxNzJhZjAwYTMzdW4wNjdxenF0NTkifQ.WK21wCd4v06Hhw19287MlQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/dasobi/cjpdr7hrh1dfs2spcs69hzkbs', // stylesheet location
    center: [17.807164, 59.377914], // starting position [lng, lat]
    zoom: 15 // starting zoom
});

/* Lista på positionerna */
var positioner = [
    [17.807164, 59.377914],
    [17.817164, 59.377914],
    [17.827164, 59.377914]
];
/* Lista på beskrivningar på positionerna */
let beskrivningar = [
    "Här bor jag",
    "Här bor inte jag",
    "Lodisarna"
];

/* Loopa igenom listan och planera ut markers på kartan */
for (let index = 0; index < positioner.length; index++) {
    let popup = new mapboxgl.Popup({  //Här skapar vi en popup
        offset: 25
    })
        .setText(beskrivningar[index]);
     
    var marker = new mapboxgl.Marker()  // Här skapar vi en marker 
        .setLngLat(positioner[index])   // Här ger vi markern en position
        .setPopup(popup)
        .addTo(map);                   // Här lägger vi till markern på kartan
    
}