let zoomInBot = document.getElementById("detallesBot");
let zoomOutBot = document.getElementById("overlayBotD");

zoomInBot.onclick = () => {
    document.getElementById("overlayBotD").style.display = "block";
    console.log("Funciona")
}

zoomOutBot.onclick = () => {
    document.getElementById("overlayBotD").style.display = "none";
}

let zoomInCaja = document.getElementById("detallesCaj");
let zoomOutCaja = document.getElementById("overlayCajaD");

zoomInCaja.onclick = () => {
    document.getElementById("overlayCajaD").style.display = "block";
    console.log("Funciona")
}

zoomOutCaja.onclick = () => {
    document.getElementById("overlayCajaD").style.display = "none";
}

let botella1 = document.getElementById("botella1");
let botella1Out = document.getElementById("overBote1")

let botella2 = document.getElementById("botella2");
let botella2Out = document.getElementById("overBote2");

let botella3 = document.getElementById("botella3");
let botella3Out = document.getElementById("overBote3")

botella1.onclick = () => {
    document.getElementById("overBote1").style.display = "block";
}
botella1Out.onclick = () => {
    document.getElementById("overBote1").style.display = "none";
}

botella2.onclick = () => {
    document.getElementById("overBote2").style.display = "block";
}
botella2Out.onclick = () => {
    document.getElementById("overBote2").style.display = "none";
}

botella3.onclick = () => {
    document.getElementById("overBote3").style.display = "block";
}
botella3Out.onclick = () => {
    document.getElementById("overBote3").style.display = "none";
}