/* EX 01 
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

    Adição (a + b)
    Subtração (a - b)
    Multiplicação (a * b)
    Divisão (a / b)
    Módulo (a % b)                 
*/

function operacaoAritmetica(operador, a, b){
    if(operador === '+'){
        console.log(a+b)
    } else if(operador === '-'){
        console.log(a-b)
    } else if(operador === '*'){
        console.log(a*b)
    } else if(operador === '/'){
        console.log(a/b)
    } else if(operador === '%'){
        console.log(a%b)
    } else if(operador === '**'){
        console.log(a**b)
    } else {
        console.log('Parametros incorretos!')
    }
}

operacaoAritmetica('*', 100, 100);

/* EX 02
Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados. 
*/

function maior(numero1, numero2){
    if(numero1 > numero2){
        console.log(numero1)
    } else if(numero2 > numero1){
        console.log(numero2)
    } else{
        console.log('Números iguais!')
    }
}

maior(10, 20);

/* EX 03 
Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados. 
*/

function maior(numero1, numero2, numero3){
    if(numero1 > numero2 && numero1 > numero3){
        console.log(numero1)
    } else if(numero2 > numero1 && numero2 > numero3){
        console.log(numero2)
    } else if(numero3 > numero1 && numero3 > numero2){
        console.log(numero3)
    } else{
        console.log('Números iguais!')
    }
}

maior(50, 50, 80);

/* EX 04
Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”. 
*/


function positivoNegativo(parametro){
    if(parametro > 0){
        console.log('Positivo!')
    } else if(parametro < 0){
        console.log('Negativo!')
    } else{
        console.log('Zero!')
    }
}

positivoNegativo(+10.1);

/* EX 05 
🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

    Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

    Um ângulo será considerado inválido se não tiver um valor positivo. 
*/



function triangulo(ladoA, ladoB, ladoC){
    if (ladoA + ladoB + ladoC === 180) {
        console.log(true)
    }
     else {
        console.log(false)
    }
}

triangulo(100, 30, 51);

/* EX 06
Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

    Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

    Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

    Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

    Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

function pecaXadrez(peca){
    switch (peca.toLowerCase()) {
        case 'bishop':
            console.log('Diagonal quantas casas quiser!')
            break;
        case 'tower':
            console.log('Horizontal e Vertical quantas casas quiser!')
            break;
        case 'queen':
            console.log('Horizontal, Vertical e Diagonal  quantas casas quiser!')
            break;
        case 'king':
            console.log('Horizontal, Vertical e Diagonal apenas uma casa!')
            break; 
        case 'peon':
            console.log('Vertical apenas uma casa!')
            break;           
        case 'horse':
            console.log('Movimentação em L')
            break; 
        default:
        console.log('Peça invalida!')
    }
}
pecaXadrez('BISHOP');

/* EX 07
Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

    Porcentagem >= 90 -> A

    Porcentagem >= 80 -> B

    Porcentagem >= 70 -> C

    Porcentagem >= 60 -> D

    Porcentagem >= 50 -> E

    Porcentagem < 50 -> F

    O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

function calculaNota(nota){
    if(nota >= 90 && nota <= 100){
        console.log('Nota A!')
    } else if(nota >= 80 && nota <= 89){
        console.log('Nota B!')
    } else if(nota >= 70 && nota <= 79){
        console.log('Nota C!')
    } else if(nota >= 60 && nota <= 69){
        console.log('Nota D!')
    } else if(nota >= 50 && nota <= 59){
        console.log('Nota E!')
    } else if(nota <= 50 && nota >= 0){
        console.log('Nota F!')
    } else{
        console.log('Nota invalida!')
    }
}
calculaNota(-10);

/* EX 08
 🚀 Há um par entre nós

    Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
        Bonus: use somente um if.

*/ 

function calcula(numero1, numero2, numero3){
    let resultado = false;
    if(numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0){
        resultado = true;
    }
    console.log(resultado)
}

calcula(10, 15, 25);

/* EX 09 
Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.

    Bonus: use somente um if.

*/ 

function calcula(numero1, numero2, numero3){
    let resultado = false;
    if(numero1 % 2 !== 0 || numero2 % 2 !== 0 || numero3 % 2 !== 0){
        resultado = true;
    }
    console.log(resultado)
}

calcula(10, 10, 10);



/* EX 10
Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.

    Atente que, sobre o custo do produto, incide um imposto de 20%.

    Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

    O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
    valorCustoTotal = valorCusto + impostoSobreOCusto;
    lucro = valorVenda - valorCustoTotal (lucro de um produto);

*/ 


function calculaLucro(valorCusto, valorVenda, numeroVendas){
    if(valorCusto < 0 || valorVenda < 0 || numeroVendas < 0){
        console.log('Erro! Valor negativo!')
    } else{
        let custoTotal = valorCusto + (valorCusto*0.20);
        let lucro = valorVenda - custoTotal;
        let lucroFinal = lucro * numeroVendas;
        console.log(lucroFinal)
    }
}

calculaLucro(100, 200, 100);

/* EX 11 
Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.

Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

    A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

        INSS (Instituto Nacional do Seguro Social)

            Salário bruto até R$ 1.556,94: alíquota de 8%

            Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

            Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

            Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

        IR (Imposto de Renda)

            Até R$ 1.903,98: isento de imposto de renda

            De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

            De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

            De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

            Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

    O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

    Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

    Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
        R$ 2.670,00: salário com INSS já deduzido;
        7.5%: alíquota de imposto de renda;
        R$ 142,80 parcela a se deduzir do imposto.

    Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

    O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55.

    De olho na dica 👀: que tal identificar as alíquotas com variáveis de nomes explicativos?

*/ 

function calculaSalarioFinal(salarioBruto){
    let alicotaINSS = 0;
    if(salarioBruto > 0 && salarioBruto < 1556.95){
        alicotaINSS = (salarioBruto / 100) * 8;
    } else if(salarioBruto > 1556.94 && salarioBruto < 2594.93){
        alicotaINSS = (salarioBruto / 100) * 9;
    } else if(salarioBruto > 2594.93 && salarioBruto < 5189.82){
        alicotaINSS = (salarioBruto / 100) * 11;
    } else{
        alicotaINSS = 570.88;
    }
    //console.log(alicotaINSS)

    let alicotaIR = 0;
    let salarioDeduzidoINSS = salarioBruto - alicotaINSS;
    if(salarioDeduzidoINSS > 1903.98 && salarioDeduzidoINSS < 2826.66){
        alicotaIR = (salarioDeduzidoINSS / 100) * 7.5;
    } else if(salarioDeduzidoINSS > 2826.65 && salarioDeduzidoINSS < 3751.06){
        alicotaIR = (salarioDeduzidoINSS / 100) * 15;
    } else if(salarioDeduzidoINSS > 3751.05 && salarioDeduzidoINSS < 4664.68){
        alicotaIR = (salarioDeduzidoINSS / 100) * 22.5;
    } else{
        alicotaIR = 869.36
    }
    //console.log(alicotaIR)
    let salarioLiquido = salarioDeduzidoINSS - alicotaIR;
    console.log(salarioLiquido);
}

calculaSalarioFinal(5500);
