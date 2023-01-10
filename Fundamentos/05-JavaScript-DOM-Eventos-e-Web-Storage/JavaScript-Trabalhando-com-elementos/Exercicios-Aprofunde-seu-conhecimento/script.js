/*O objetivo desses exercícios é colocar em prática o seu conhecimento sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido entre as tags script.

    Comece criando algumas coisas:

    Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
    Adicione a tag main com a classe main-content como filho da tag body;
    Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
    Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
    Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
    Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
    Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
    Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
    Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

    Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

    Adicione a classe title na tag h1 criada;
    Adicione a classe description nas 3 tags h3 criadas;
    Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
    Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
    Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
    Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
    */  
    const pegaBody = document.querySelector('body');
    const criaH1 = document.createElement('h1');
    criaH1.className = 'title';
    const criaMain = document.createElement('main');
    criaH1.innerHTML = 'Exercício - JavaScript DOM';
    pegaBody.appendChild(criaH1);
    pegaBody.appendChild(criaMain);
    const pegaMain = document.querySelector('main');
    const criaSection = document.createElement('section');
    criaSection.className = 'center-content';
    criaSection.style.backgroundColor = 'green'
    pegaMain.appendChild(criaSection);
    const pegaSection = document.querySelector('.center-content');
    const criaP = document.createElement('p');
    criaP.innerHTML = 'TESTANDO!'
    pegaSection.appendChild(criaP);
    const criaSection2 = document.createElement('section');
    criaSection2.className = 'left-content';
    pegaMain.appendChild(criaSection2);
    const criaSection3 = document.createElement('section');
    criaSection3.className = 'right-content';
    criaSection3.style.marginRight = 'auto';
    pegaMain.appendChild(criaSection3);
    const pegaLeft = document.querySelector('.left-content');
    const criaImg = document.createElement('img');
    criaImg.className = 'small-image';
    criaImg.src = 'https://picsum.photos/200';
    pegaLeft.appendChild(criaImg);

    const pegaRight = document.querySelector('.right-content');
    const criaUl = document.createElement('ul');
    pegaRight.appendChild(criaUl);
    const array = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
    for (const key in array) {
        const criaLi = document.createElement('li');
        criaLi.innerHTML = array[key];
        criaUl.appendChild(criaLi)
    }
   
    for (let index = 0; index < 3; index++) {
        const criaH3 = document.createElement('h3');
        criaH3.innerHTML = 'Teste!'
        criaH3.className = 'description';
        pegaMain.appendChild(criaH3);
    
    }
    pegaLeft.remove();
    
    const pegaUl = document.querySelector('ul');
    pegaUl.lastChild.remove();
    pegaUl.lastChild.remove();


    
    








