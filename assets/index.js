const buttonAddTask = document.querySelector("[data-botaoTask='adicionar']");
const containsTaskErro = document.querySelector("[data-erroMensage='taskIsIncluded']");
const valueErroMensage = document.querySelector("[data-erroMensage='valueErro']");
const taskContainer = document.querySelector(".taskArea ul")

const tasksBox = [];

function taskValueVerification(event) {
    event.preventDefault();
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
    const taskTittle = document.querySelector("#taskTittle").value;
    const taskDescription = document.querySelector("#taskDescription").value;

    taskContainer.innerHTML += `
    <li>
        <div class="task">
            <h1>${taskTittle}</h1>
            <p>${taskDescription}</p>
        </div>
        <button data-botaoTask="remover">-</button>
    </li>
    `

}   

function removerTask() {
    console.log("FOI");
}

buttonAddTask.addEventListener("click", taskValueVerification)