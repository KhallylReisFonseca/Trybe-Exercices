// ==================> GLOBAL VARIABLES <==================
const takeDiv = document.querySelector('#div-main')
const takeAnswer = document.querySelector('#answer');
const takeRgb = document.querySelector('#rgb-color');
const takeScore = document.querySelector('#score');
const takeDivColors = document.querySelector('#div-colors');
// 

function randomColors() {
    const first = Math.floor(Math.random() * 256);
    const second = Math.floor(Math.random() * 256);
    const third = Math.floor(Math.random() * 256);
    return `rgb(${first}, ${second}, ${third})`;
}

function createBalls() {
    const p = document.getElementById('rgb-color');
    const randomId = Math.floor(Math.random() * 6);
    for (let index = 0; index < 6; index += 1) {
        const colorRandom = randomColors();
        const createDivs = document.createElement('div');
        createDivs.className = 'ball';
        createDivs.style.backgroundColor = colorRandom;
        takeDivColors.appendChild(createDivs);
        if (index === randomId) {
            p.innerText = colorRandom
            createDivs.classList.add('guess');
        }
    }
}

function addEventBalls (){
    let score = 0;
    const takeBalls = document.querySelector('#div-colors');
    const takeGuess = document.querySelector('.guess');
    takeBalls.addEventListener('click', (event) => {
        if (event.target.style.backgroundColor === takeGuess.style.backgroundColor) {
            takeAnswer.innerHTML = 'Acertou!';
            takeScore.innerHTML = score += 3;
           } else {
            takeAnswer.innerHTML = 'Errou! Tente novamente!';
           }
    })
}

function createResetButton() {
    const createButton = document.createElement('button');
    const takeColors = document.querySelectorAll('.ball');
    createButton.id = 'reset-game';
    createButton.addEventListener('click', () => {
        for (let index = 0; index < takeColors.length; index += 1) {
            takeColors[index].style.backgroundColor = randomColors();
        }
        takeAnswer.innerHTML = 'Escolha uma cor';
        const takeGuess = document.querySelector('.guess');
        takeRgb.innerHTML = takeGuess.style.backgroundColor;
      });
    takeDiv.appendChild(createButton);
}

// ==================> CALL FUNCTIONS <==================
createBalls();
addEventBalls();
createResetButton();
// 
