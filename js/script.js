let input = document.querySelector('.input');
let addNewTaskButton = document.querySelector('.addButton');
let containerTask = document.querySelector('.container')

addNewTaskButton.addEventListener('click', (e)=>{
  addNewTask();
});
window.addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    addNewTask(); 
  }
});

function createNewTask(){
 const task = document.createElement('div');
 task.classList.add('item');

 const taskName = document.createElement('input');
 taskName.classList.add('new_task');
 taskName.type = 'text';
 taskName.value = input.value;
 taskName.setAttribute('readonly', 'readonly');

 const editTaskButton = document.createElement('button');
 editTaskButton.textContent = 'Editar';
 editTaskButton.classList.add('editButton');

 editTaskButton.addEventListener('click', (e) => {
  if (editTaskButton.innerText.toLowerCase() == "editar") {
    editTaskButton.innerText = "Save";
    taskName.removeAttribute("readonly");
    taskName.focus();
  } else {
    editTaskButton.innerText = "Editar";
    taskName.setAttribute("readonly", "readonly");
  }
 });

 const deleteTaskButton = document.createElement('button');
 deleteTaskButton.textContent = 'Excluir';
 deleteTaskButton.classList.add('removeButton');
 deleteTaskButton.addEventListener('click', (e) => {
  containerTask.removeChild(task);
 });

 containerTask.appendChild(task);
 task.appendChild(taskName);
 task.appendChild(editTaskButton);
 task.appendChild(deleteTaskButton);

 clearInput();

}

function clearInput(){
  input.value = '';
}

function addNewTask(){
  if(input.value === ''){
    alert('Não é um tarefa valida')
  } else{
    createNewTask();
  }
}

