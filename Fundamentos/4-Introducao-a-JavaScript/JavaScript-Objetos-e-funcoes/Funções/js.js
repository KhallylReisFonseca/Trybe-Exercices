
/* EX 01
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/ 
function adicao(valor1, valor2){
    console.log(valor1 + valor2)
}

adicao(10, 20);

function subtração(valor1, valor2){
    console.log(valor1 - valor2)
}
subtração(40, 70);

function multiplicacao(valor1, valor2){
    console.log(valor1 * valor2)
}
multiplicacao(10, 5);

function divisao(valor1, valor2){
    console.log(valor1 / valor2)
}
divisao(2, 10);

function restoDaDivisao(valor1){
    console.log(valor1 % 10)
}
restoDaDivisao(1000);

/* EX 02
Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
*/

function maiorDeDois(numero1, numero2){
    if(numero1 > numero2){
        console.log(`${numero1} é maior que ${numero2}.`)
    } else{
        console.log(`${numero2} é maior que ${numero1}.`)
    }
}

maiorDeDois(50, 20);

/* EX 03
Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
*/


function maiorDeTres(numero1, numero2, numero3){
    if(numero1 > numero2 && numero1 > numero3){
        console.log(`${numero1} é maior que ${numero2} e ${numero3}.`)
    } else if (numero2 > numero1 && numero2 > numero3){
        console.log(`${numero2} é maior que ${numero1} e ${numero3}.`)
    } else{
        console.log(`${numero3} é maior que ${numero1} e ${numero2}.`)
    }
}

maiorDeTres(80, 20, 30);


/* EX 04
Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
*/
function positivoNegativo(valor){
    if(valor > 0){
        console.log('Positivo!')
    } else if(valor < 0){
        console.log('Negativo!')
    } else{
        console.log('Valor igual a zero!')
    }
}

positivoNegativo(0);

/* EX 05
Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
*/
function triangulo(ladoA, ladoB, ladoC){
    if((ladoA < 0) || (ladoB < 0) || (ladoC < 0)){
        console.log('Erro! lados invalidos!')
    } else if((ladoA + ladoB + ladoC) === 180){
        console.log('Verdadeiro!')
    } else{
        console.log('False!')
    }
}

triangulo(60, 60, -60);
