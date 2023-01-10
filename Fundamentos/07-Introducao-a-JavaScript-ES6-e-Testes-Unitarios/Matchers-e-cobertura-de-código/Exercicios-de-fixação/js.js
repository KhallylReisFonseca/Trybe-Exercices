/* Exercícios de fixação
Vamos consolidar os conceitos passados até o momento através de alguns desafios.

Preparando o terreno:

Crie uma nova pasta e entre nela.
Copiar
mkdir fixacao-testes
cd fixacao-testes
Inicialize esta pasta como um projeto do node.
Copiar
npm init -y
Instale o Jest.
Copiar
npm install -D jest
Em seu arquivo package.json, altere a chave "scripts"para que seja
Copiar
"scripts": {
  "test": "jest --coverage"
},
Crie um arquivo chamado createItem.js com o seguinte conteúdo:
Copiar
const createItem = (name, unit, price, quantity) => {
  if (typeof name !== 'string') {
    throw new Error('O nome do item deve ser uma string');
  }
  if (price <= 0) {
    throw new Error('O preço do item deve ser maior que zero');
  }
  if (quantity === undefined) {
    quantity = 0;
  }
  return {
    name: name,
    quantity: quantity,
    unit: unit,
    price: price,
  };
}
module.exports = createItem;
Crie um arquivo chamado createItem.test.js com o conteúdo abaixo:
Copiar
const createItem = require('./createItem');
describe('a função createItem', () => {
  it.todo('cria um item válido');
  it.todo('utiliza zero como quantidade padrão');
  it.todo('Lança um erro quando não recebe parâmetros');
  it.todo('Lança um erro se o nome do item não é uma string');
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});
Tudo pronto!

De olho na dica 👀: antes de começar, que tal dar uma lida na função createItem e procurar entender o que ela faz? Você também pode ler sobre a função todo do Jest na sua documentação

Teste se a função createItem cria um item válido.

Remova o .todo do primeiro it e adicione a função que irá implementar o teste:
Copiar
  it('cria um item válido', () => {
    // seus testes vão aqui!
  });
Construindo nosso teste:
O que a função createItem recebe como parâmetro?
Para a chamada da função createItem com os argumentos 'banana', 'kg', 1.99 e 20, qual o resultado esperado?
Considerando como resultado esperado o objeto { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 }, qual matcher mais adequado?
Remova o .todo e implemente o teste para a chamada da função createItem com os argumentos 'banana', 'kg', 1.99 e 20, e verifique se o resultado é o objeto { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 }.

Qual a cobertura de código atual da nossa função?

Teste se a função createItem utiliza zero como quantidade padrão.

Construindo nosso teste:
Qual condição da função createItem implementa essa característica?
Como podemos chamar a função para que entre nessa condição?
Para a chamada da função createItem com os argumentos 'banana', 'kg' e 1.99, sem o quarto argumento, qual o resultado esperado?
Considerando que o resultado esperado é um objeto que tenha a propriedade quantity igual a zero, qual o matcher mais adequado?
Remova o .todo e implemente o teste para a chamada da função createItem com os argumentos 'banana', 'kg' e 1.99, e verifique se o resultado tem a propriedade quantity com o valor 0.

Qual a cobertura de código atual da nossa função? Aumentou em comparação com o exercício anterior?

Teste se a função createItem lança algum erro quando não recebe parâmetros.

Implemente o teste para a chamada da função createItem sem argumentos e verifique se é lançada alguma exceção. Qual o matcher mais adequado? Lembre-se de envolver a chamada da função em uma nova função, para que o Jest possa capturar o erro, conforme orienta a documentação. Não se preocupe em qual erro é retornado, vamos fazer isso no próximo exercício.

Analise a cobertura de código. Qual a cobertura atual?

Teste se a função createItem lança um erro se o nome do item não é uma string.

Vamos supor que tenhamos invertido o nome do item com o preço na chamada da função, passando como parâmetro: 1.99, 'kg', 'banana' e 20. Essa chamada deverá retornar o erro 'O nome do item deve ser uma string'.Afinal, estamos passando 1.99 para o parâmetro name. Como podemos verificar se retorna exatamente esse erro?

Analise a cobertura de código. Mudaram as linhas cobertas no exercício anterior?

Teste se a função createItem lança um erro se o preço do item é negativo ou zero.

Crie um teste que, ao chamar a função passando -0.01 para o preço, verifica se a função lança o erro 'O preço do item deve ser maior que zero'.

Analise a cobertura de código.

Crie um teste que, ao chamar a função passando 0.00 para o preço, verifica se a função lança o erro 'O preço do item deve ser maior que zero'.

Analise novamente a cobertura de código. A cobertura não muda, mas foram testados casos diferentes 😉.

*/