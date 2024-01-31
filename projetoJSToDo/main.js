// importação de elementos HTML

const form = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// função para adicionar tarefa

const adicionarTarefa = (e) => {
  e.preventDefault();

  if (taskInput.value.trim()) {
    const li = document.createElement("li");
    li.textContent = taskInput.value;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir";
    deleteBtn.classList.add("delete");
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert(`Por favor, adicione uma tarefa.`);
  }
};

const excluirTask = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    if (confirm("Tem certeza que deseja excluir essa tarefa?")) {
      e.target.parentElement.remove();
    }
    {
    }
  }
};

// função para recuperar task no local storage

const getTask = () => {
  let tasks;

  if (localStorage.getItem("tasks") === "null") {
    tasks = [];
  } else {
    tasks.JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = "task";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir";
    deleteBtn.classList.add("delete");
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
};

taskList.addEventListener("click", excluirTask);
form.addEventListener("submit", adicionarTarefa);

// função para armazenar tarefas

const armazenarTask = (task) => {
  let tasks;
  if (localStorage.getItem === "null") {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// função para remover tarefa do localStorage

const removerLocalStorage = (taskItem) => {
  let tasks;
  if (localStorage.getItem("tasks") === "null") {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  let taskText = taskItem.textContent.slice(0, -1);

  tasks.forEach((task, index) => {
    if (taskText === task) {
      tasks.slice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
};
