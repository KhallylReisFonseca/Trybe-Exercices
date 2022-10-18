/*  EX 01 
    Percorra o array imprimindo todos os valores nele contidos com a função console.log().
*/ 
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function imprimeNumeros(array){
    for (let index = 0; index < numeros.length; index++) {
        console.log(numeros[index])
    }
}

imprimeNumeros(numeros);


/*  EX 02
    Some todos os valores contidos no array e imprima o resultado;
*/
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function somaArray(numeros) {
    let soma = 0;
    for (let index = 0; index < numeros.length; index++) {
            soma += numeros[index]
    }
    console.log(soma)
}
somaArray(numeros);

/*  EX 03
Calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
*/
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function calculaMedia(numeros) {
    let soma = 0;
    for (let index = 0; index < numeros.length; index++) {
            soma += numeros[index]
    }
    console.log(soma / numeros.length)
}
calculaMedia(numeros);

/*  EX 04
Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
*/
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function mediaAcima(numeros) {
    let soma = 0;
    let media = 0;
    for (let index = 0; index < numeros.length; index++) {
            soma += numeros[index];
            media = soma / 10;
        }
    if(media > 20){
        console.log('Valor maior que 20!')
    } else{
        console.log('Valor menor ou igual a 20!')
    }
}
mediaAcima(numeros);

/*  EX 05 
Utilizando for, descubra qual o maior valor contido no array e imprima-o;
*/
/*
Forma facil usando Math.max
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function maiorNumero(numeros) {
    console.log(Math.max.apply(null, numeros));
}

maiorNumero(numeros);
*/
/* MAIOR NUMERO USANDO .sort((a, b) => b - a);

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function maiorNumero(numeros) {
    numeros.sort((a, b) => b - a);
    let maiorNumero = [ ];
    maiorNumero = numeros[0];
    console.log(maiorNumero);
}
maiorNumero(numeros);
*/

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function maiorNumero(numeros) {
    let numeroMaior = [ ];
    for (let index = 0; index <= numeros.length; index++) {
    if (numeros[index] > numeroMaior) {
        numeroMaior = numeros[index];
        }
    }
    console.log(numeroMaior);
}
maiorNumero(numeros);

/* EX 06
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
*/
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function numeroImpar(numeros) {
    let numeroImpar = [];
    for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] % 2 !== 0) {
        numeroImpar.push(numeros[index]);
        }
    }
    console.log(numeroImpar.length);
}
numeroImpar(numeros);

/* EX07
Utilizando for, descubra qual o menor valor contido no array e imprima-o;
*/
/*
Forma facil usando Math.min

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function menorNumero(numeros) {
    console.log(Math.min.apply(null, numeros));
}

menorNumero(numeros);
*/

/* MENOR NUMERO USANDO .sort((a, b) => a - b);

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function menorNumero(numeros) {
    numeros.sort((a, b) => a - b);
    let menorNumero = [ ];
    menorNumero = numeros[0];
    console.log(menorNumero);
}
menorNumero(numeros);
*/




let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function menorNumero(numeros) {
    let numeroMenor = numeros.length;
    for (let index = 0; index <= numeros.length; index++) {
    if (numeroMenor > numeros[index]) {
        numeroMenor = numeros[index];
        }
    }
    console.log(numeroMenor);
}
menorNumero(numeros);

/* EX 08
Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
*/
let novoArray = [];

function criaArray(tamanho){
    for (let index = 1; index <= tamanho; index++) {
    novoArray.push(index);
    }
    console.log(novoArray)
}
criaArray(25);


/* EX 09
Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
*/
let novoArray = [];

function criaArray(tamanho){
    for (let index = 1; index <= tamanho; index++) {
        novoArray.push(index);
    }
    for (let index of novoArray) {
        console.log(index / 2)
    }
}
criaArray(25);


