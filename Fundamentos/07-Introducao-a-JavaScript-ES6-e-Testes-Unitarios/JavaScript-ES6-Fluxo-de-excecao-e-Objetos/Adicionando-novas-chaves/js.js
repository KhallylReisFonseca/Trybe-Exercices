// EXERCICIOS INCOMPLETO TERMINAR DEPOIS

const pessoaEstudante = {};

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor
};

adicionaPropriedade(pessoaEstudante, `nome`, `Fulano da Silva`);
adicionaPropriedade(pessoaEstudante, `email`, `exemplo-fulano.silva@email.com`);
adicionaPropriedade(pessoaEstudante, `telefone`, `11 1111-1111`);
adicionaPropriedade(pessoaEstudante, `github`, `github.com/exemplo-fulano-da-silva`);
adicionaPropriedade(pessoaEstudante, `linkedIn`, `linkedin.com/exemplo-fulano-da-silva`);
