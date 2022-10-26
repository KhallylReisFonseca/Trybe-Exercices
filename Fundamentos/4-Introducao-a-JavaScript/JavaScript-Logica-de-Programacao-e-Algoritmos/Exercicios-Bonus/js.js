/*EX 01
Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 
Por exemplo:
n = 5

*****
*****
*****
*****
***** 
*/

function imprimeAsterisco(numero){
    for (let index = 0; index < numero; index++) {
        console.log(numero * '*')
    }
}
imprimeAsterisco(5);


/* EX 02
Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
Por exemplo: 
n = 5

*
**
***
****
*****
*/

/* EX 03
Agora inverta o lado do triângulo. 
Por exemplo: 
n = 5

    *
   **
  ***
 ****
*****

Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
*/


/* EX 04 
Depois, faça uma pirâmide com n asteriscos de base: 

n = 5

  *
 ***
*****
*/

/* EX05
Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar: 
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******

*/

/* EX 06
Faça um programa que diz se um número definido numa variável é primo ou não.
*/ 




/* EX 07
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero. 

Dica: você vai precisar de fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. 
*/


