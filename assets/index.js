const buttonAddTask = document.querySelector("[data-botaoTask='adicionar']");
const containsTaskErro = document.querySelector("[data-erroMensage='taskIsIncluded']");
const valueErroMensage = document.querySelector("[data-erroMensage='valueErro']");
const taskContainer = document.querySelector(".taskArea")

const tasksBox = [];

function taskVerification() {
    const tittleTask = document.querySelector("#taskTittle").value;
    const containsTask = tasksBox.includes(tittleTask);
    const removeClassValueErro = valueErroMensage.classList.remove("showErroMensage");
    const removeClassContainsErro = containsTaskErro.classList.remove("showErroMensage");

    if(containsTask) {
        removeClassValueErro;
        containsTaskErro.classList.add("showErroMensage");
    } else if(tittleTask === ""){
        removeClassContainsErro;
        valueErroMensage.classList.add("showErroMensage")
    } else {
        removeClassValueErro;
        removeClassContainsErro;

        tasksBox.push(tittleTask)
        adicionarTask();
    }
}

function adicionarTask() {
    const taskTittle = document.querySelector("#taskTittle");
    const taskDescription = document.querySelector("#taskDescription");

    const taskCreate = `
        <div class="taskConteiner">
            <div class="task">
                <h1>${taskTittle.value}</h1>
                <p>${taskDescription.value}</p>
            </div>
                <button class="removeTask" data-botaoTask="remover" title="Remover anotação">-</button>
            </div>
    `
    taskContainer.innerHTML += taskCreate
}   

function removerTask() {
    console.log("FOI");
}

buttonAddTask.addEventListener("click", taskVerification)