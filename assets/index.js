const addTaskButton = document.querySelector(".btnAddTask");
const taskTittle = document.querySelector('#taskTittle');
const taskDescription = document.querySelector('#taskDescription');


function dataVelidation() {
    const tittleValue = taskTittle.value
    const descriptionValue = taskDescription.value
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
    
}