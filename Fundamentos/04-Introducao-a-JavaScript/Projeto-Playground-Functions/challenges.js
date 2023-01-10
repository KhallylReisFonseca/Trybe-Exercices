// Desafio 1
function compareTrue(param1, param2) {
  return (param1 === true && param2 === true) ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado;
}

// Desafio 4
function concatName(frase) {
  return `${frase[frase.length - 1]}, ${frase[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(nums) {
  let maiorNumero = nums[0];
  for (let key in nums) {
    if (nums[key] > maiorNumero) {
      maiorNumero = nums[key];
    }
  }
  let contador = 0;
  for (let key in nums) {
    if (nums[key] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rT = mouse;
  let gA = cat1;
  let gB = cat2;
  if (Math.abs(rT - gB) < Math.abs(rT - gA)) {
    return 'cat2';
  } else if (Math.abs(rT - gA) === Math.abs(rT - gB)) {
    return 'os gatos trombam e o rato foge';
  } return 'cat1';
  }


// Desafio 8
function fizzBuzz(imput) {
  let result = [];
  for (let index of imput) {
    if (index % 3 === 0 && index % 5 === 0) {
      result.push('fizzBuzz');
    } else if (index % 3 === 0) {
      result.push('fizz');
    } else if (index % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let resultado = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      resultado += '1';
    } else if (string[index] === 'e') {
      resultado += '2';
    } else if (string[index] === 'i') {
      resultado += '3';
    } else if (string[index] === 'o') {
      resultado += '4';
    } else if (string[index] === 'u') {
      resultado += '5';
    } else {
      resultado += string[index];
    }
  }
  return resultado;
}

function decode(string) {
  let resultado = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      resultado += 'a';
    } else if (string[index] === '2') {
      resultado += 'e';
    } else if (string[index] === '3') {
      resultado += 'i';
    } else if (string[index] === '4') {
      resultado += 'o';
    } else if (string[index] === '5') {
      resultado += 'u';
    } else {
      resultado += string[index];
    }
  }
  return resultado;
}
// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  } else if (array.length === 5) {
    array = array.sort();
  }
  let novoObjeto = [];
  for (let index = 0; index < array.length; index += 1) {
    novoObjeto.push({
      tech: array[index],
      name: name,
    });
  }
  return novoObjeto;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
