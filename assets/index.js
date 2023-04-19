const addTaskButton = document.querySelector(".btnAddTask");
const taskTittle = document.querySelector('#taskTittle');
const taskDescription = document.querySelector('#taskDescription');
const conteinerTasks = document.querySelector('.taskConteiner')


function dataVelidation() {
    const tittleValue = taskTittle.value
    const erroMensageValue = document.querySelector(".containsTask")
    const erroMensageContais = document.querySelector(".jaTemTask");

    if(tittleValue === ''){
        erroMensageContais.classList.remove('showMensage')
        erroMensageValue.classList.add('showMensage')        
    } else if(listTasks.includes(tittleValue)){
        erroMensageValue.classList.remove('showMensage')
        erroMensageContais.classList.add("showMensage")
    } else {
        erroMensageValue.classList.remove('showMensage')
        erroMensageContais.classList.remove("showMensage")
        addTask();
    }
}

addTaskButton.addEventListener("click", dataVelidation)

const listTasks = [];

function addTask(){
    const tittleTask = taskTittle.value
    const descriptionTask = taskDescription.value
    listTasks.push(tittleTask)
    console.log(tittleTask);

    conteinerTasks.innerHTML += `
    <div class="task">
        <div>
            <h1 class="taskTittle">${tittleTask}</h1>
            <p class="taskTittle">${descriptionTask}</p>
        </div>
        <button class="removeTask" title="Remover tarefa">-</button>
    </div>`;


}