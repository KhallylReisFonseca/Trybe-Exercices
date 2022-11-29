/* Exercícios - agora, a prática
🚀 Se liga nesse foguete!

Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀

Praticando a implementação de testes
Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.

Copie a função já implementada e desenvolva os testes. Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problema.

🚀 Exercício 1
Você ficou responsável por criar os testes de uma aplicação de calculadora. Para isso, copie a função já implementada abaixo e desenvolva os testes: Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problema.

De olho na dica 👀: Crie os arquivos com o respectivo nome da função. Ex: sum.js e sum.test.js

A função sum(a, b) retorna a soma do parâmetro a com o b:
Teste se o retorno de sum(4, 5) é 9;

Teste se o retorno de sum(0, 0) é 0.

Teste se a função sum lança um erro quando os parâmetros são number 4 e string '5';

Teste se a mensagem de erro é 'parameters must be numbers' quando realizar a chamada sum(4, '5');

Copiar
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
🚀 Exercício 2
Neste primeiro exercício, use como base a função a seguir que imprime no terminal uma mensagem de boas-vindas de acordo com as informações de personagem passada

Copiar
// printMessage.js
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const printMessage = (characterInfo) => {
  return ('Boas vindas, ' + characterInfo.personagem);
};

console.log(printMessage(info));

module.exports = { info, printMessage };
Considerando a função printMessage, crie um teste em Jest para garantir que o objeto passado como parâmetro possui a propriedade personagem.
🚀 Exercício 3
Complementando o teste da função acima que valida a entrada de parâmetro, você pode utilizar o matcher toMatch() para validar a resposta da função.

Verifique se a resposta contém a informação Boas vindas,, antes de chamar o nome da personagem;
Verifique se a resposta contém o nome correto da personagem.
Copiar
// printMessageTest.test.js
const { info } = require('./printMessage.js');

describe('Exercício de teste seção 7.3', () => {
  it('teste objeto info', () => {
    expect(info).toHaveProperty('personagem');
  });
  // implemente seus testes aqui
})
🚀 Exercício 4
Para finalizar o teste da função printMessage, você pode ainda criar um fluxo de exceção dentro da função para criar um erro caso seja enviado um parâmetro que não seja um objeto, ou que não tenha a propriedade personagem como no exemplo abaixo.
Copiar
// printMessage.js
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const printMessage = (characterInfo) => {
  if (!characterInfo || characterInfo.personagem === undefined) {
    throw new Error('objeto inválido');
  }
  return ('Boas vindas, '+ characterInfo.personagem);
};

console.log(printMessage(info));

module.exports = { info, printMessage };
Agora que a função possui um fluxo de exceção, crie uma função de teste para validar se a mensagem de erro é lançada caso a função seja chamada com um objeto inválido. 

*/