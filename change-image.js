let images = ['img/top/top-image-1.png', 'img/top/top-image-2.png', 'img/top/top-image-3.png'];
let index = 0;

const imgDiv = document.querySelector(".image1");

function swap() {
    imgDiv.src = images[index];
    index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(swap, 30000)
};