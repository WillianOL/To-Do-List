const buttonAddTask = document.querySelector("[data-buttons='addTask']");
const titleTask = document.querySelector("#taskTittle");
const titleErrorMessage = document.querySelector("[data-erroMensage='erroTitle']");
const IncludesErrorMensage = document.querySelector("[data-erroMensage='erroTaskIncludes']")

const taskTitles = [];

function inputValueVerification(event) {
    event.preventDefault();
    const containsTask = taskTitles.includes(titleTask.value);
    const removesValueErrorClass = titleErrorMessage.classList.remove("showErroMensage");

    if (titleTask.value == "") {
        titleErrorMessage.classList.add("showErroMensage")
    } else if(containsTask) {

    }
}

buttonAddTask.addEventListener("click", inputValueVerification);
