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

let arrowLeft = document.getElementById("arrowLeft");
let arrowRight = document.getElementById("arrowRight");
let navLine = document.getElementById("navLine");
let nawOffset = 0;


const  toLeft =() =>{
    nawOffset -=930;
    if(nawOffset< -930*2) {
        nawOffset = 0;
    }
    navLine.style.left = `${nawOffset}px`;
}
const  toRight =() =>{
    nawOffset +=930;
    if(nawOffset > 0) {
        nawOffset = -930*2;
    }
    navLine.style.left = `${nawOffset}px`;
}

arrowLeft.addEventListener("click", toRight );
arrowRight.addEventListener("click", toLeft );

let offset = 0;

let galleryLine = document.getElementById('sliderTopLine');

document.getElementById('PicMiniOne').addEventListener('click',function () {
    offset = 0;
    galleryLine.style.left = offset + 'px';

});
document.getElementById('PicMiniTwo').addEventListener('click',function () {
    offset = -400;
    galleryLine.style.left = offset + 'px';
});
document.getElementById('PicMiniThree').addEventListener('click',function () {
    offset = -800;
    galleryLine.style.left = offset + 'px';
});
document.getElementById('PicMiniFour').addEventListener('click',function () {
    offset = -1200;
    galleryLine.style.left = offset + 'px';
});
document.getElementById('PicMiniFifth').addEventListener('click',function () {
    offset = -1600;
    galleryLine.style.left = offset + 'px';
});
document.getElementById('PicMiniSixth').addEventListener('click',function () {
    offset = -2000;
    galleryLine.style.left = offset + 'px';
});
document.getElementById('PicMiniSeventh').addEventListener('click',function () {
    offset = -2400;
    galleryLine.style.left = offset + 'px';
});
document.getElementById('PicMiniEighth').addEventListener('click',function () {
    offset = -2800;
    galleryLine.style.left = offset + 'px';
});