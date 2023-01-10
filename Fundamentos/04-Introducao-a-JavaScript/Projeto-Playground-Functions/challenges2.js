// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let repetido = 0;
  let contaNumero = 0;
  for (let key in array) {
    let verificaNumero = array[key];
    for (let chave in array) {
      if (verificaNumero === array[chave]) {
        contaNumero += 1;
      }
    }
    if (contaNumero > repetido) {
      repetido = contaNumero;
    }
    contaNumero = 0;
  }
  for (const ofe of array) {
    if (array[ofe] < 0 || array[ofe] > 9 || repetido >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let numeroPronto = array;
  numeroPronto.splice(0, 0, '(');
  numeroPronto.splice(3, 0, ')');
  numeroPronto.splice(4, 0, ' ');
  numeroPronto.splice(10, 0, '-');
  return numeroPronto.join('');
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA > Math.abs(lineB - lineC) && lineA > (lineB - lineC) && lineB > (lineA - lineC) && lineC > (lineA - lineB)) ? true : false;
}

// Desafio 13
function hydrate(string) {
  let quantidade = 0;
  for (const index of string) {
      if (index >= 1) {
        const quantidadeDeBebida = parseInt(index, 10);
        quantidade += quantidadeDeBebida;
      }
  }
  return quantidade <= 1 ? `${quantidade} copo de água` : `${quantidade} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
