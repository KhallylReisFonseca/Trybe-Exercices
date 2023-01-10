// =================> GLOBAL VARIABLES <=================
const links = '<a href="https://www.linkedin.com/in/khallyl-reis-fonseca" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> <a href = "mailto:khallylreis@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a> <a href="https://twitter.com/khallylreis" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" target="_blank"></a> <a href="https://instagram.com/dev_em_construcao" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>';
// ======================================================

function createTitle() {
  const takeHeaderSection = document.querySelector('header section');
  const createDiv = document.createElement('div');
  createDiv.id = 'div-container-header';
  takeHeaderSection.appendChild(createDiv);
  const takeDiv = document.querySelector('#div-container-header');
  const createH1 = document.createElement('h1');
  createH1.id = 'h1-title';
  createH1.innerHTML = 'PIXEL ART';
  takeDiv.appendChild(createH1);
}

function createPalletTitle() {
  const takeSection = document.querySelectorAll('main section');
  const createH1 = document.createElement('h1');
  createH1.id = 'title';
  createH1.innerHTML = 'Paleta de Cores';
  takeSection[0].appendChild(createH1);
}

function createDivsPallet() {
  const takeSection = document.querySelector('#pallet-divs');
  const createDiv = document.createElement('div');
  createDiv.id = 'color-palette';
  takeSection.appendChild(createDiv);
  for (let index = 0; index < 4; index += 1) {
    const takeDiv = document.querySelector('#color-palette');
    const createDivs = document.createElement('div');
    createDivs.className = 'color';
    takeDiv.appendChild(createDivs);
  }
}

function randomColors() {
  const first = Math.floor(Math.random() * 256);
  const second = Math.floor(Math.random() * 256);
  const third = Math.floor(Math.random() * 256);
  return `rgb(${first}, ${second}, ${third})`;
}

function initialColors() {
  const takePallet = document.querySelectorAll('.color');
  takePallet[0].classList = 'color selected';
  takePallet[0].style.backgroundColor = 'black';
  takePallet[1].style.backgroundColor = 'blue';
  takePallet[2].style.backgroundColor = 'yellow';
  takePallet[3].style.backgroundColor = 'red';
}

function createButtons() {
  const takeSection = document.querySelector('#pallet-divs');
  const createDiv = document.createElement('div');
  takeSection.appendChild(createDiv);
  createDiv.id = 'div-buttons';
  const createRandomButton = document.createElement('button');
  createRandomButton.id = 'button-random-color';
  createRandomButton.innerHTML = 'Cores aleatórias';
  createDiv.appendChild(createRandomButton);
  const takeDiv = document.querySelector('#div-buttons');
  const createResetButton = document.createElement('button');
  createResetButton.id = 'clear-board';
  createResetButton.innerHTML = 'Limpar';
  takeDiv.appendChild(createResetButton);
  const createInput = document.createElement('input');
  createInput.id = 'board-size';
  createInput.type = 'number';
  createInput.min = '1';
  createInput.max = '50';
  takeDiv.appendChild(createInput);
  const createVQVButton = document.createElement('button');
  createVQVButton.id = 'generate-board';
  createVQVButton.innerHTML = 'VQV';
  takeDiv.appendChild(createVQVButton);
}

function paintPallet() {
  const takePallet = document.querySelectorAll('.color');
  for (let index = 1; index < takePallet.length; index += 1) {
    takePallet[index].style.backgroundColor = randomColors();
  }
}
function saveLocalPalette() {
  const takePallet = document.getElementById('color-palette');
  localStorage.setItem('colorPalette', JSON.stringify(takePallet.innerHTML));
}

function resetColors() {
  const takeButton = document.querySelector('#button-random-color');
  takeButton.addEventListener('click', () => {
    paintPallet();
    saveLocalPalette();
  });
}

function resetButton() {
  const takeButton = document.querySelector('#clear-board');
  takeButton.addEventListener('click', () => {
    const takeGrid = document.querySelectorAll('.pixel');
    for (let index = 0; index < takeGrid.length; index += 1) {
      takeGrid[index].style.backgroundColor = 'white';
      saveLocalGrid();
    }
  });
}

function getPaletteLocal() {
  const colors = localStorage.getItem('colorPalette');
  if (colors === null) {
    initialColors();
  } else {
    const takePallete = document.getElementById('color-palette');
    takePallete.innerHTML = JSON.parse(colors);
  }
}

function createGridPixels() {
  const takeSection = document.querySelector('#grid-pixels');
  const createDiv = document.createElement('div');
  createDiv.id = 'pixel-board';
  takeSection.appendChild(createDiv);
  for (let index = 1; index <= 25; index += 1) {
    const takeBoard = document.querySelector('#pixel-board');
    const createPixels = document.createElement('div');
    createPixels.className = 'pixel';
    createPixels.id = index;
    takeBoard.appendChild(createPixels);
  }
}

function changeBoard() {
  takeInput = document.querySelector('#board-size').value;
  const takeBoard = document.querySelector('#pixel-board');
  if (takeInput < 5) {
    takeInput = 5;
  } else if (takeInput > 50) {
    takeInput = 50;
  }
  for (let index = 1; index <= takeInput * takeInput; index += 1) {
    const takeBoard = document.querySelector('#pixel-board');
    takeBoard.style.gridTemplateColumns = `repeat(${takeInput}, ${takeInput}fr)`;
    takeBoard.style.width = `${20 * takeInput}px`;
    takeBoard.style.height = `${20 * takeInput}px`;
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    createPixel.id = index;
    takeBoard.appendChild(createPixel);
  }
}

function checkInput() {
  const takeInput = document.querySelector('#board-size');
  const takeButton = document.querySelector('#generate-board');
  takeButton.addEventListener('click', () => {
    if (takeInput.value < 1) {
      alert('Board inválido!');
    } else {
      const takeBoard = document.querySelector('#pixel-board');
      takeBoard.innerHTML = '';
      changeBoard();
      changePixelColor();
      saveNewBoard()
    }
  });
}

function removeSelected() {
  const color = document.querySelectorAll('.color');
  for (let index = 0; index < color.length; index += 1) {
    if (color[index].classList.contains('selected')) {
      color[index].classList.remove('selected');
    }
  }
}

function addE() {
  const paletteColors = document.querySelectorAll('.color');
  for (let index = 0; index < paletteColors.length; index += 1) {
    paletteColors[index].addEventListener('click', (event) => {
      removeSelected();
      event.target.classList.toggle('selected');
    });
  }
}

let colorS = 'black';

function selectColor() {
  const paletteColors = document.querySelectorAll('.color');
  for (let index = 0; index < paletteColors.length; index += 1) {
    paletteColors[index].addEventListener('click', (event) => {
      colorS = event.target.style.backgroundColor;
      return colorS;
    });
  }
}

function changePixelColor() {
  const getPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < getPixels.length; index += 1) {
    getPixels[index].addEventListener('click', (event) => {
      event.target.style.backgroundColor = colorS;
      saveLocalGrid();
      saveNewBoard();
    });
  }
}

function saveLocalGrid() {
  const takePixels = document.getElementById('grid-pixels');
  localStorage.setItem('pixelBoard', JSON.stringify(takePixels.innerHTML));
}

function getGridLocal() {
  const painted = localStorage.getItem('pixelBoard');
  if (painted === null) {
    resetButton();
  } else {
    const takePixels = document.getElementById('grid-pixels');
    takePixels.innerHTML = JSON.parse(painted);
  }
}

function saveNewBoard() {
  const takePixels = document.getElementById('grid-pixels');
  localStorage.setItem('boardSize', JSON.stringify(takePixels.innerHTML));
}

function getNewBoard() {
  const painted = localStorage.getItem('boardSize');
  if (painted === null) {
    resetButton();
  } else {
    const takePixels = document.getElementById('grid-pixels');
    takePixels.innerHTML = JSON.parse(painted);
  }
  changePixelColor();
}

function createFooter() {
  const takeSection = document.querySelector('#footer-section');
  const createDiv = document.createElement('div');
  createDiv.id = 'div-container-footer';
  takeSection.appendChild(createDiv);
  const takeDiv = document.querySelector('#div-container-footer');
  const createH3 = document.createElement('p');
  createH3.innerHTML = '<p>Produzido por: &copy; Khallyl Reis Fonseca</p>';
  createH3.id = 'p-footer';
  takeDiv.innerHTML = links;
  takeDiv.appendChild(createH3);
}

// =================> CALL FUNCTIONS <=================
createTitle();
createPalletTitle();
createDivsPallet();
initialColors();
createButtons();
checkInput();
resetColors();
resetButton();
createGridPixels();
getPaletteLocal();
getGridLocal();
addE();
selectColor();
changePixelColor();
getNewBoard();
createFooter();
// ====================================================
