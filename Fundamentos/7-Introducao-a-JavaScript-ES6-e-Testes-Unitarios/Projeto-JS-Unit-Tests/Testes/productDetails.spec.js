const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    //fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails('carro', 'barco')).toBe(typeof productDetails('carro', 'barco'));
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('carro', 'barco'))).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('carro', 'barco')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('carro', 'barco')[0] && typeof productDetails('carro', 'barco')[1]).toBe(typeof productDetails('carro', 'barco'));
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('carro', 'barco')).toEqual(productDetails('carro', 'barco'));
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('avião', 'avião')[0].details.productId && productDetails('avião', 'avião')[1].details.productId).toEqual('avião123');
  });
});
