window.onload = start;

function start() {
    const eKnapp = document.querySelector("button");
    const eRuta1 = document.querySelector("#ruta1");
    const eRuta2 = document.querySelector("#ruta2");
    const eBild = document.querySelector("img");

/* Lista på spelkaraktärer */
    let listaKarak = [
        "Sonic",    //0
        "Mario",    //1
        "Anton",  //2 
        "Luigi",    //3
        "Zelda",    //4
        "Kirby",    //5
        "Taco",     //6
        "Pontus",   //7
        "Spyro",    //8
        "BagarPoppi" //9
    ];

    let listaBilder = [
        "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjZ7pDl757fAhWMJSwKHdFXA7kQjRx6BAgBEAU&url=https%3A%2F%2Fspela.aftonbladet.se%2F2018%2F12%2Fforsta-bilden-fran-sonic-filmen-chockar-fansen%2F&psig=AOvVaw0s4fEgrPP2oUwE3csT8c11&ust=1544861518860886",
        "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjxk9D2757fAhXFkCwKHTpSDycQjRx6BAgBEAU&url=http%3A%2F%2Fadtodate.mk%2Fuploads%2Frecords%2Fimage%2F%3FC%3DS%3BO%3DD&psig=AOvVaw1rev7yq5cp9EtFtbvU0ma1&ust=1544861551007588",
        "https://scontent-arn2-1.xx.fbcdn.net/v/t34.0-12/10529685_10152546915889573_1718423591_n.jpg?_nc_cat=108&_nc_ht=scontent-arn2-1.xx&oh=bcc7f2b831d00191bee51078322f8c36&oe=5C1602B3",
        "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj2nuHV8J7fAhXI2SwKHZ1GDMIQjRx6BAgBEAU&url=http%3A%2F%2Fnintendo.wikia.com%2Fwiki%2FFile%3ALuigi_Artwork_-_Super_Mario_3D_World.png&psig=AOvVaw1ELKMVDr_mxgM_OPfPrbw8&ust=1544861759900687",
        "https://i.kinja-img.com/gawker-media/image/upload/s--y5XXGJRR--/c_scale,f_auto,fl_progressive,q_80,w_800/uyly11kynacib7z6hmar.jpg",
        "http://static2.uk.businessinsider.com/image/56ec6aaedd08952b588b46f3/ranked-the-10-best-super-mario-games-ever-made.jpg",
        "https://www.tacobell.com/images/22100_crunchy_taco_269x269.jpg",
        "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/28168792_2086320831651742_449906826120121097_n.jpg?_nc_cat=101&_nc_ht=scontent-arn2-1.xx&oh=f4aaf80646ea8c116684ec94216be5ec&oe=5CAAA786",
        "https://pbs.twimg.com/profile_images/1062210297769984000/X2zf9SS8_400x400.jpg",
        "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/34484505_2138846183065873_6643618682339590144_n.jpg?_nc_cat=103&_nc_ht=scontent-arn2-1.xx&oh=f1bf2827ea30a05c4ea76a070558ac8d&oe=5C96874B"
    ];
/* Lyssna på knappen */
    eKnapp.addEventListener("click", slumpaTal);

    function slumpaTal() {
    /* Skapa ett slumptal */
        
        let slump = Math.ceil(Math.random() * 10 - 1);
        
    /* Skriv ut slumptalet i rutan */
        eRuta1.value = slump;

        eRuta2.value = listaKarak[slump];
        eBild.src = listaBilder[slump];

    }
    
}