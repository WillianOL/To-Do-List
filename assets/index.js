const addTaskButton = document.querySelector(".btnAddTask");
const taskTittle = document.querySelector('#taskTittle');
const taskDescription = document.querySelector('#taskDescription');
const conteinerTasks = document.querySelector('.taskConteiner')


function dataVelidation() {
    const tittleValue = taskTittle.value
    const erroMensage = document.querySelector(".erroMensageTask")

    if(tittleValue === ''){
        erroMensage.classList.add('showMensage')        
    } else{
        erroMensage.classList.remove('showMensage')
        
        addTask();
    }
}

addTaskButton.addEventListener("click", dataVelidation)

function addTask(){
    const tittleTask = taskTittle.value
    const descriptionTask = taskDescription.value

    conteinerTasks.innerHTML += `
    <div class="task">
        <div>
            <h1 class="taskTittle">${tittleTask}</h1>
            <p class="taskTittle">${descriptionTask}</p>
        </div>
        <button class="removeTask" title="Remover tarefa">-</button>
    </div>`

}