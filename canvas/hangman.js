window.onload = start;

function start() {
    var canvas = document.querySelector("#myCanvas");
    var ctx = canvas.getContext("2d");

/* Rita en linje */
    ctx.moveTo(250, 110);
    ctx.lineTo(250, 250);
    ctx.stroke();
    ctx.moveTo(250, 120);
    ctx.lineTo(300, 200);
    ctx.stroke();
    ctx.moveTo(250, 120);
    ctx.lineTo(200, 200);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(300, 300);
    ctx.stroke();
    ctx.moveTo(250, 250);
    ctx.lineTo(200, 300);
    ctx.stroke(); 

    /* Huvudet */
    ctx.beginPath();
    ctx.arc(250, 60, 50, 0, 2 * Math.PI);
    ctx.stroke();

    /* Ögon */
    ctx.beginPath();
    ctx.arc(230, 60, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(270, 60, 10, 0, 2 * Math.PI);
    ctx.stroke();

    /* Mun */
    ctx.beginPath();
    

}   