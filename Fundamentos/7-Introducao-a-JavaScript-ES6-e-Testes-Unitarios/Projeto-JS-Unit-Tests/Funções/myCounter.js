/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija a função myCounter, sem eliminar nenhum dos loops de repetição, para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
    var myArray = [];
    for (let contador = 0; contador <= 3; contador += 1) {
      myArray.push(contador);
      for (let indicador = 2; indicador <= 3; indicador += 1) {
        myArray.push(indicador);
      }
    }
    // console.log(myArray);
    return myArray;
};

module.exports = myCounter;
