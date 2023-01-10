// GLOBAL VARIABLES
const takeTop = document.querySelector('#text-input');
const takeBot = document.querySelector('#text-input2');
const targetTop = document.querySelector('#meme-text');
const targetBot = document.querySelector('#meme-text-bot');
const targetImg = document.querySelector('#meme-image-container');
const inputImg = document.querySelector('#meme-insert');
const takeImg = document.getElementById('meme-image');
//
function putTextTop() {
  targetTop.innerHTML = takeTop.value;
}

function putTextBot() {
  targetBot.innerHTML = takeBot.value;
}

inputImg.addEventListener("change", (event) => {
  const inputTarget = event.target;
  const file = inputTarget.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      const readerTarget = event.target;
      takeImg.src = readerTarget.result;
    });
    reader.readAsDataURL(file);
  }
});

function EventFire() {
  const takeFire = document.querySelector('#fire');
  takeFire.addEventListener('click', () => {
    targetImg.style.border = '3px dashed red';

  });
}

function EventWater() {
  const takeWater = document.querySelector('#water');
  takeWater.addEventListener('click', () => {
    targetImg.style.border = '5px double blue';
  });
}

function EventEarth() {
  const takeEarth = document.querySelector('#earth');
  takeEarth.addEventListener('click', () => {
    targetImg.style.border = '6px groove green';
  });
}

function changeImg() {
  const takeImgs = document.querySelector('#div-memes');
  takeImgs.addEventListener('click', (event) => {
    takeImg.src = event.target.src;
  });
}
// FUNCTIONS GLOBAL CALL
putTextTop();
putTextBot();
EventFire();
EventWater();
EventEarth();
changeImg()
//
