'use strict'
let offsetTop = 0;
let text = 0;
let textBlock = document.getElementById('sliderText');
let sliderLine = document.getElementById('sliderLine');
let offsetOtzivy = 0;
let otzivyLine = document.getElementById('otzivyLine');


setInterval(topSlider, 3000);
setInterval(OtzivySlider, 6000);

function topSlider() {

    offsetTop -= 1200;
    if (offsetTop < -1200*4) {
        offsetTop = 0;
    }
    sliderLine.style.left = offsetTop + 'px';
};
function OtzivySlider() {
    offsetOtzivy -= 1200;
    if (offsetOtzivy < -1200*3) {
        offsetOtzivy = 0;
    }
    otzivyLine.style.left = offsetOtzivy + 'px';
};
const date = new Date;
document.getElementById("date").innerHTML = `Desing&Print 2019-${date.getFullYear()}.`

document.getElementById("slog").innerHTML = "Полиграфия с душой!"