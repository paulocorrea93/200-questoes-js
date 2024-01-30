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
  if (e.target.classList.conteins("delete")) {
    if (confirm("Tem certeza que deseja excluir essa tarefa?")) {
      e.target.parentElement.remove();
    }
    {
    }
  }
};

taskList.addEventListener('click', excluirTask)
form.addEventListener("submit", adicionarTarefa);
