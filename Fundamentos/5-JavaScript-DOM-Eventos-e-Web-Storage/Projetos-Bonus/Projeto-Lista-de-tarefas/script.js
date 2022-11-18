// GLOBAL VARIABLES

const takeList = document.querySelector('#lista-tarefas')
const takeInput = document.querySelector('#texto-tarefa');
const takeButtonCreate = document.querySelector('#criar-tarefa');
const takeButtonReset = document.querySelector('#apaga-tudo');
const takeButtonSave = document.querySelector('#salvar-tarefas');
const takeButtonFinished = document.querySelector('#remover-finalizados');
const takeContainerHeader = document.querySelector('#container-header');
const takeContainerButtons = document.querySelector('#container-buttons');
const takeContainerTasks = document.getElementById('container-tasks');

// ================

function addEventButtonTasks() {
  takeButtonCreate.addEventListener('click', () => {
    if (takeInput.value.length !== 0) {
      const createLi = document.createElement('li');
      createLi.innerHTML = takeInput.value;
      createLi.className = 'task';
      takeList.appendChild(createLi);
      saveTasks();
      takeInput.value = '';
    } else {
      alert('Digite alguma tarefa!');
    }
  });
}

function addEventResetButton() {
   takeButtonReset.addEventListener('click', () => {
     takeList.innerHTML = '';
     saveTasks();
   });
}

function removeSelected() {
    const tasks = document.querySelectorAll('.task');
    for (let index = 0; index < tasks.length; index += 1) {
      if (tasks[index].classList.contains('selected')) {
        tasks[index].classList.remove('selected');
      }
    }
}

function addEventTasks() {
    takeList.addEventListener('click', (event) => {
        removeSelected();
        event.target.classList.toggle('selected');
        saveTasks();
    });
    takeList.addEventListener('dblclick', (event) => {
        event.target.classList.toggle('completed');
        saveTasks();
    });
}

function removeCompleted() {
    const tasks = document.querySelectorAll('.task');
    for (let index = 0; index < tasks.length; index += 1) {
      if (tasks[index].classList.contains('completed')) {
        tasks[index].remove();
      }
    }
}

function addEventFinished() {
    takeButtonFinished.addEventListener('click', () => {
        removeCompleted();
        saveTasks();
    });
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(takeContainerTasks.innerHTML));
}

function addEventSave() {
  takeButtonSave.addEventListener('click', () => {
    saveTasks();
  });
}

function initialTasks() {
  const createLi = document.createElement('li');
  createLi.innerHTML = oi;
  createLi.className = 'task';
  takeList.appendChild(createLi);
}

function getTasks() {
  const tasks = localStorage.getItem('tasks');
  if (tasks === null) {
  } else {
    takeContainerTasks.innerHTML = JSON.parse(tasks);
  }
}

// CALL FUNCTIONS //

addEventButtonTasks();
addEventResetButton();
addEventTasks();
addEventFinished();
addEventSave();
getTasks();

// =================
