// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X

let resultado = 0;

for (let index = 0; index <= 50; index++) {
    resultado += index
}
console.log('A soma total de 1 a 50 é: ' + resultado + '.')

// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let resultado = 0;
for (let index = 2; index <= 150; index++) {
    if(index % 3 == 0){
        resultado += 1
    }
}
console.log(`O numero total é: ${resultado}.`)

// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
let player1 = 'pedra';
let player2 = 'papel';
if((player1 === 'pedra' && player2 === 'tesoura') || (player1 === 'tesoura' && player2 === 'papel') || (player1 === 'papel' && player2 === 'pedra')){
    console.log('Player 1 won!')
} else if((player2 === 'pedra' && player1 === 'tesoura') || (player2 === 'tesoura' && player1 === 'papel') || (player2 === 'papel' && player1 === 'pedra')){
    console.log('Player 2 won!')
} else{
    console.log('A Ties!')
}



// 4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// Bônus: Crie a condição utilizando operador ternário.

let idade = 11;
idade >= 18 ? console.log('A pessoa é maior de idade!') : console.log('A pessoa é menor de idade!')


// 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let Carolzita = 10;
let Murilo = 20;
let Baêta = 15;

if(Carolzita < Murilo && Carolzita < Baêta){
    console.log('Carolzita é a pessoa mais nova!')
}else if(Baêta < Murilo && Baêta < Carolzita){
    console.log('Baêta é a pessoa mais nova!')
} else{
    console.log('Murilo é a pessoa mais nova!')
}