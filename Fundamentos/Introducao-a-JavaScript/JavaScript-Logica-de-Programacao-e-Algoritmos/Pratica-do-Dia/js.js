/* EX 01
    O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo: 

    O fatorial é representado pelo sinal !
    4! = 4 x 3 x 2 x 1 = 24
    Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

    5!

*/ 
function fatorial(num) {
    if (num === 0 || num === 1)
      console.log('Número zero ou resultado = 1')
    for (let index = num - 1; index >= 1; index--) {
      num *= index;
    }
    console.log(num)
}
fatorial(10);

/* EX 02
    Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. 

    let word = 'tryber';

*/ 
let word = 'khallyl reis fonseca';

function reverseString(str) {
   console.log(str.split("").reverse().join(""));
}
reverseString(word);


/* EX 03
    Considere o array de strings abaixo: 
    let array = ['java', 'javascript', 'python', 'html', 'css'];

    Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra. 
*/ 
let lista = ['java', 'javascript', 'python', 'html', 'css'];

console.log(Math.min(lista));





/* EX 04
    Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50. 
*/ 


