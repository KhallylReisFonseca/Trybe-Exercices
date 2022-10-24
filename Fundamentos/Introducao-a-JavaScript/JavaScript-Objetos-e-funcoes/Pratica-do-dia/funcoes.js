/* Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

A manipulação de arrays pode ser complexa em alguns momentos e, por isso, o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada. Se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e, sempre que um método novo for necessário, ele será ensinado a você.

Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.
*/

/* EX 01  
Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

        Exemplo de palíndromo: arara

        verificaPalindrome('arara')
            Retorno esperado: true

        verificaPalindrome('desenvolvimento')
            Retorno esperado: false
*/

function palindromo(str){
    if(str === (str.split("").reverse().join(""))) {
        console.log(true)
    } else{
        console.log(false)
    }
}
palindromo('ovo');




/*EX 02
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

        Array de teste: [2, 3, 6, 7, 10, 1];.

        Valor esperado no retorno da função: 4.
*/
let array = [2, 3, 6, 7, 10, 1];

function maiorNumero(array){
    let resultado = 0;
    for (const key in array) {
        if (resultado < array[key]) {
            resultado = key;
        }
    }
console.log(resultado) 
}
maiorNumero(array);

/* EX 03
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

        Array de teste: [2, 4, 6, 7, 10, 0, -3];.

        Valor esperado no retorno da função: 6.
*/

array = [-10, -11, 4, 6, 7, 10, 0, -3, -5, -3];

function menorIndiceValor(array){
    let resultado = 0;
    for (let index = 0; index < array.length; index++) {
        if (resultado > array[index]){
            resultado = array[index]
        }
    }
    console.log(array.indexOf(resultado));
}
menorIndiceValor(array);

/*EX 04 
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

        Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

        Valor esperado no retorno da função: Fernanda.
*/ 
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'kakakakakkaka'];

function maiorNome(nomes){
    let maiorNome = nomes[0];
    for (let index = 0; index < nomes.length; index++) {
        if(nomes[index].length > maiorNome.length){
            maiorNome = nomes[index];
        }
    }
    console.log(maiorNome);
}

maiorNome(nomes);



/*EX05
Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

        Array de teste: [2, 3, 2, 5, 8, 2, 3];.

        Valor esperado no retorno da função: 2.
*/




/* EX 06 
Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

        Valor de teste: N = 5.

        Valor esperado no retorno da função: 1+2+3+4+5 = 15.
*/




/* EX 07
Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

        Valor de teste: 'trybe' e 'be'

        Valor esperado no retorno da função: true

        verificaFimPalavra('trybe', 'be');
            Retorno esperado: true

        verificaFimPalavra('joaofernando', 'fernan');
            Retorno esperado: false
*/
