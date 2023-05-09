const descriptionTask = document.querySelector("#taskDescription").value;
const buttonAddTask = document.querySelector("[data-botaoTask='adicionar']");
const containsTaskErro = document.querySelector("[data-erroMensage='taskIsIncluded']");
const valueErroMensage = document.querySelector("[data-erroMensage='valueErro']");

const tasksBox = [];

function adicionarTask() {
    const tittleTask = document.querySelector("#taskTittle").value;
    const containsTask = tasksBox.includes(tittleTask);

    if(containsTask) {
        containsTaskErro.classList.add("showErroMensage")
    } else if(tittleTask === ""){
        valueErroMensage.classList.add("showErroMensage")
    } else {
        valueErroMensage.classList.remove("showErroMensage")
        containsTaskErro.classList.remove("showErroMensage")
        tasksBox.push(tittleTask)
    }
}

function removerTask() {

}

buttonAddTask.addEventListener("click", adicionarTask)