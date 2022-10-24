/* EX 01
1. Encontre o index através do valor de um elemento

Escreva um algoritmo que recebe 2 parâmetros:

    Um array contendo um conjunto de números
    O valor de um desses elementos

Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.

Caso não o encontre, imprima:

"Elemento não encontrado no array"
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numero = 1;

function indiceNumero(array, numero){
    if (array.indexOf(numero) >= 0) {
      console.log(array.indexOf(numero));
    } else {
      console.log('Elemento não encontrado no array');
    }

}
indiceNumero(array, numero);

/* EX 02 
2. Retorne os números ímpares

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura na impressão:

"x, y, z, ...n"
*/
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function numeroImpar(array){
    let impar = [];
    for (let index = 0; index < array.length; index++) {
        if (index % 2 == 1) {
            impar.push(index)
        }
    }
    console.log(impar)
}

numeroImpar(array);
/* EX 03
3. Números divisíveis por 3

Escreva um algoritmo que cria uma sequência numérica de inteiros com intervalo de 1 entre eles. O algoritmo deve receber antes de criar essa sequência, o valor inicial e final.

Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:

Se houver 50 ou mais:

"Há 50 ou mais números divisíveis por 3"

Caso o contrário: "Sequência muito pequena."
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function divisivelPorTres(array){
    let inicial = 80;
    let final = 150;
    let contagem = 0;
    for (let index = inicial; index <= final; index++) {
        if(index % 3 == 0){
            contagem += 1
        }
    }   
    if (contagem < 50) {
        console.log('Sequência muito pequena.');
    } else {
        console.log('Há 50 ou mais números diviseis por 3');
    }
}
divisivelPorTres(array);