// CHAMADA VARIAVEIS GLOBAIS ===================

const botaoLogin = document.querySelector('#botao1');
const inputLogin = document.querySelector('#login-email');
const inputSenha = document.querySelector('#login-senha');
const botaoSubmit = document.querySelector('#submit-btn');
const termosCheckbox = document.querySelector('#agreement');
const counterInput = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const takeForm = document.querySelector('#evaluation-form');
const takeMain = document.querySelector('main');

// =============================================

const validarLogin = () => {
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const validarBotao = () => {
  if (botaoSubmit.disabled) {
    botaoSubmit.disabled = false;
  } else {
    botaoSubmit.disabled = true;
  }
};

const contarLetras = (event) => {
  const contador = event.target.value.length;
  counter.innerHTML = 500 - contador;
};

// REQUESITO 21 -> CAPTURA VALORES DAS MATÉRIAS

const Subjects = () => {
  const takeSubjects = document.querySelectorAll('input.subject:checked');
  const subject = [...takeSubjects].map((subjects) => subjects.value).join(', ');
  return subject;
};

// =============================================

// REQUESITO 21 -> CAPTURA VALORES DOS INPUTS

const takeInfos = () => {
  const takeName = document.querySelector('#input-name').value;
  const takeLastName = document.querySelector('#input-lastname').value;
  const takeEmail = document.querySelector('#input-email').value;
  const takeHouse = document.querySelector('#house').value;
  const takeFamily = document.querySelector('input[name="family"]:checked').value;
  const takeRate = document.querySelector('input[name="rate"]:checked').value;
  const takeObs = document.querySelector('#textarea').value;

  // QUEBRA O ARRAY DE VALORES EM 3 PARTES PORQUE O LINT ESTAVA RECLAMANDO DO TAMANHO!

  const newInfos1 = [`Nome: ${takeName} ${takeLastName}.`, `Email: ${takeEmail}.`];
  const newInfos2 = [`Casa: ${takeHouse}.`, `Família: ${takeFamily}.`, `Matérias: ${Subjects()}.`];
  const newInfos3 = [`Avaliação: ${takeRate}.`, `Observações: ${takeObs}`];
  const newInfos = newInfos1.concat(newInfos2, newInfos3);

  // =================================================================================

  return newInfos;
};

// =============================================

// REQUESITO 21 -> CRIA NOVO FORM ==============

const createNewForm = () => {
  const createForm = document.createElement('form');
  createForm.id = 'form-data';
  takeMain.appendChild(createForm);
  const createSection = document.createElement('section');
  createSection.id = 'section-newform';
  createForm.appendChild(createSection);
  for (let index = 0; index < 7; index += 1) {
    const createP = document.createElement('p');
    createP.className = 'infos';
    createSection.appendChild(createP);
  }
};

// =============================================

// REQUESITO 21 -> MUDA VALORES DO NOVO FORM ===

const changeNewForm = () => {
  const infos = document.querySelectorAll('.infos');
  for (let index = 0; index < infos.length; index += 1) {
    infos[index].innerHTML = takeInfos()[index];
  }
};

// REQUESITO 21 -> MUDA O NOVO FORM ============

const changeForm = () => {
  /* Captura as infos */ takeInfos();
  /* Cria novo form */ createNewForm();
  /* Muda novo form */ changeNewForm();
};

// =============================================

// CHAMADA FUNÇÕES GLOBAIS =====================

window.onload = () => {
  botaoLogin.addEventListener('click', validarLogin);
  termosCheckbox.addEventListener('click', validarBotao);
  counterInput.addEventListener('keyup', contarLetras);

  // REQUESITO 21 -> ADICIONA EVENT LISTENER NO BOTÃO

  botaoSubmit.addEventListener('click', (event) => {
    /* Adiciona o prevent default */ event.preventDefault();
    /* Esconde o form antigo */ takeForm.style.display = 'none';
    /* Chamada da função do requesito 21 */ changeForm();
  });
};

// =============================================
