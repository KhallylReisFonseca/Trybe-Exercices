// GLOBAL VARIABLES

const takeInput = document.querySelector('#carta-texto');
const takeButton = document.querySelector('#criar-carta');
const takeP = document.querySelector('#carta-gerada');
const takeCount = document.querySelector('#carta-contador');
const classes = {
    style: ['newspaper', 'magazine1', 'magazine2'],
    height: ['medium', 'big', 'reallybig'],
    inclination: ['skewleft', 'skewright'],
    rotation: ['rotateleft', 'rotateright'],
}

// ================

function checkInputText() { 
    takeButton.addEventListener('click', () => {
        if (takeInput.value.length === 0 || !takeInput.value.trim()) { 
            takeP.innerHTML = 'Por favor, digite o conteúdo da carta.';
            takeCount.innerHTML = '';
        } else {
            takeP.innerHTML = '';
            const newLetter = takeInput.value.split(' ');
            for (let index = 0; index < newLetter.length; index += 1) {
                var createSpan = document.createElement('span');
                takeP.appendChild(createSpan);
                takeCount.innerHTML = newLetter.length
            }
            const takeSpan = document.getElementsByTagName('span');
            for (let index = 0; index < takeSpan.length; index++) {
                takeSpan[index].innerHTML = newLetter[index];
            }
            for (const key in classes) {
                const random = Math.floor(Math.random() * classes[key].length)
                createSpan.classList.add(classes[key][random])
            }
        }
    }) 
}

// GLOBAL FUNCTIONS CALL

checkInputText();

// ================