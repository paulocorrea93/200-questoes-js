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
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert(`Por favor, adicione uma tarefa.`)
  }
};

form.addEventListener('submit', adicionarTarefa)