const pegaElemento = document.getElementById('elementoOndeVoceEsta');

const criaElemento = document.createElement('section');
const criaElemento2 = document.createElement('section');
pegaElemento.appendChild(criaElemento)
pegaElemento.appendChild(criaElemento2)


const pegaFilho = document.getElementById('primeiroFilhoDoFilho')

pegaFilho.appendChild(criaElemento);

