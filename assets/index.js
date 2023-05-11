const buttonAddTask = document.querySelector("[data-botaoTask='adicionar']");
const containsTaskErro = document.querySelector("[data-erroMensage='taskIsIncluded']");
const valueErroMensage = document.querySelector("[data-erroMensage='valueErro']");
const taskContainer = document.querySelector(".taskArea ul")
const tittleTask = document.querySelector("#taskTittle");

const taskTittlesNames = [];

function taskValueVerification(event) {
    event.preventDefault();
    const containsTask = taskTittlesNames.includes(tittleTask.value);
    const removeClassValueErro = valueErroMensage.classList.remove("showErroMensage");
    const removeClassContainsErro = containsTaskErro.classList.remove("showErroMensage");

    if(containsTask) {
        removeClassValueErro;
        containsTaskErro.classList.add("showErroMensage");
    } else if(tittleTask.value === ""){
        removeClassContainsErro;
        valueErroMensage.classList.add("showErroMensage")
    } else {
        taskTittlesNames.push(tittleTask.value)  
        adicionarTask();
        tittleTask.value = ""

        removeClassValueErro;
        removeClassContainsErro;
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
        <button data-botaoTask="remover" class="remover" title="Remover anotação">-</button>
    </li>
    `
}   

function removerTask(event) {
    const taskButtonRemove = event.target.classList.contains("remover")
    if(taskButtonRemove){
        event.target.parentElement.remove();
        taskTittlesNames.shift(tittleTask.value)
    }
}

taskContainer.addEventListener("click", removerTask)
buttonAddTask.addEventListener("click", taskValueVerification)