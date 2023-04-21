const addTaskButton = document.querySelector(".btnAddTask");
const taskTittle = document.querySelector('#taskTittle');
const taskDescription = document.querySelector('#taskDescription');
const conteinerTasks = document.querySelector('.taskConteiner')


function dataVelidation() {
    const tittleValue = taskTittle.value
    const erroMensageValue = document.querySelector(".containsTask")
    const erroMensageContains = document.querySelector(".jaTemTask");

    const removeClassValue = erroMensageValue.classList.remove("showMensage")
    const removeClassContains = erroMensageContains.classList.remove("showMensage");

    if(tittleValue === ''){
        removeClassContains
        erroMensageValue.classList.add('showMensage')
    } else if(listTasks.includes(tittleValue)){
        removeClassValue
        erroMensageContains.classList.add("showMensage")
    } else {
        removeClassValue
        removeClassContains
        addTask();
    }
}

addTaskButton.addEventListener("click", dataVelidation)

const listTasks = [];

function addTask(){
    const tittleTask = taskTittle.value
    const descriptionTask = taskDescription.value
    listTasks.push(tittleTask)

    conteinerTasks.innerHTML += `
    <div class="task">
        <div>
            <h1 class="taskTittle">${tittleTask}</h1>
            <p class="taskTittle">${descriptionTask}</p>
        </div>
        <button class="removeTask" title="Remover tarefa">-</button>
    </div>`;
}

function removerTask() {
    console.log("Funcionou");
}

const btnRemoveTask = document.querySelectorAll(".removeTask");
btnRemoveTask.forEach((item) => {
    item.addEventListener("click", removerTask)
})