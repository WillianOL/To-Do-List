const buttonAddTask = document.querySelector("[data-botaoTask='adicionar']");
const containsTaskErro = document.querySelector("[data-erroMensage='taskIsIncluded']");
const valueErroMensage = document.querySelector("[data-erroMensage='valueErro']");

const tasksBox = [];

function taskVerification() {
    const tittleTask = document.querySelector("#taskTittle").value;
    const containsTask = tasksBox.includes(tittleTask);
    const removeClassValueErro = valueErroMensage.classList.remove("showErroMensage");
    const removeClassContainsErro = containsTaskErro.classList.remove("showErroMensage");

    if(containsTask) {
        removeClassValueErro
        containsTaskErro.classList.add("showErroMensage");
    } else if(tittleTask === ""){
        removeClassContainsErro
        valueErroMensage.classList.add("showErroMensage")
    } else {
        removeClassValueErro
        removeClassContainsErro

        tasksBox.push(tittleTask)
        adicionarTask();
    }
}

function adicionarTask() {
    
}

function removerTask() {

}

buttonAddTask.addEventListener("click", taskVerification)