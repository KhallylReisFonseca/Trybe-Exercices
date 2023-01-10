// VARIAVEIS GLOBAIS
const diasDezembro = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    weekDaysList.appendChild(dayListItem);
  };
}

function criaDias(){
  const pegaDays = document.querySelector('#days');
  for (let index in diasDezembro) {
    const criaDias = document.createElement('li');
    criaDias.innerHTML = diasDezembro[index]
    if (diasDezembro[index] == 24 || diasDezembro[index] == 31) {
      criaDias.classList = 'day holiday';
    } else if (diasDezembro[index] == 4 || diasDezembro[index] == 11 || diasDezembro[index] == 18) {
      criaDias.classList = 'day friday';
    } else if (diasDezembro[index] == 25) {
      criaDias.classList = 'day holiday friday';
    } else {
      criaDias.classList = 'day';
    }
    pegaDays.appendChild(criaDias);
  }
}
function pintaHolyDay (){
  const pegaHoliday = document.getElementsByClassName('holiday')
  for (let index = 0; index < pegaHoliday.length; index++) {
    pegaHoliday[index].style.backgroundColor = 'red';
  }
}
function pintaFriday(){
  const pegaFriday = document.getElementsByClassName('friday');
  for (let index = 0; index < pegaFriday.length; index++) {
    pegaFriday[index].style.backgroundColor = 'yellow';
    pegaFriday[index].innerText = 'SEXTOU!!!';
  }
}
function voltaCorHoliday(){
  const pegaHoliday = document.getElementsByClassName('holiday')
  for (let index = 0; index < pegaHoliday.length; index++) {
    pegaHoliday[index].style.backgroundColor = 'rgb(238,238,238)';
  }
}
function voltaCorFriday(){
  const pegaFriday = document.getElementsByClassName('friday');
  for (let index = 0; index < pegaFriday.length; index++) {
    pegaFriday[index].style.backgroundColor = 'rgb(238,238,238)';
    let array = [4, 11, 18, 25];
    pegaFriday[index].textContent = array[index];
  }
}

function criaBotao(){
  const pegaDiv = document.querySelector('.buttons-container');
  const criaBotao2 = document.createElement('button');
  criaBotao2.innerText = 'Sexta-feira';
  criaBotao2.id = 'btn-friday';
  const criaBotao = document.createElement('button');
  criaBotao.innerText = 'Feriados';
  criaBotao.id = 'btn-holiday';
  criaBotao.addEventListener('click', () => {
    pintaHolyDay(true);
  })
  criaBotao.addEventListener('dblclick', () => {
    voltaCorHoliday(true);
  })
  criaBotao2.addEventListener('click', () => {
    pintaFriday(true);
  })
  criaBotao2.addEventListener('dblclick', () => {
    voltaCorFriday(true);
  })
  pegaDiv.appendChild(criaBotao);
  pegaDiv.appendChild(criaBotao2);
}
const mouseOver = (event) => {
  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeigth = '600';
  })
}

const mouseOut = (event) => {
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeigth = '200';
  })
}

const addTarefa = (tarefa) => {
  let localTarefa = document.querySelector('.my-tasks');
  let nomeTarefa = document.createElement('span');
  nomeTarefa.innerHTML = tarefa;
  localTarefa.appendChild(nomeTarefa);
}

const divTarefa = (cor) => {
  let localTarefa = document.querySelector('.my-tasks');
  let criaDiv = document.createElement('div');
  criaDiv.className = 'task';
  criaDiv.style.backgroundColor = cor;
  localTarefa.appendChild(criaDiv)
}

const selecionaTasks = () => {
  let pegaTask = document.getElementsByClassName('task selected')
  let minhaTask = document.querySelector('.task');
  minhaTask.addEventListener('click', (event) => {
    (pegaTask.length === 0) ? event.target.className = 'task selected' : event.target.className = 'task'
  });
}

const fixaCor = () => {
  let pegaCor = document.querySelector('.task');
  let pegaDia = document.querySelector('#days');
  let tarefa = document.getElementsByClassName('task selected');
  let tarefaCor = pegaCor.style.backgroundColor;
  console.log(tarefaCor);
  pegaDia.addEventListener('click', (event) => {
    let corEvento = event.target.style.color
    if (tarefa.length > 0 && corEvento !== tarefaCor) {
      let color = tarefa[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (corEvento === tarefaCor){
      event.target.style.color = 'rgb(119,119,119)';
    }
  })
}

// CHAMADA DAS FUNÇÕES

createDaysOfTheWeek();
criaDias();
criaBotao();
mouseOut();
mouseOver();
addTarefa('FESTAAAAAA!');
divTarefa('yellow');
selecionaTasks();
fixaCor();