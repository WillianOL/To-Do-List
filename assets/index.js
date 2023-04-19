const addTaskButton = document.querySelector(".btnAddTask");
const taskTittle = document.querySelector('#taskTittle');
const taskDescription = document.querySelector('#taskDescription');


function dataVelidation() {
    const tittleValue = taskTittle.value
    const descriptionValue = taskDescription.value

    if(tittleValue === ''){
        
    }
}

addTaskButton.addEventListener("click", dataVelidation)