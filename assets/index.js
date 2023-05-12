const buttonAddTask = document.querySelector("[data-buttons='addTask']");
const titleTask = document.querySelector("#taskTittle");
const taskTitles = [];

function inputValueVerification(event) {
    event.preventDefault();
    const removesValueErrorClass = ;

    const containsTask = taskTitles.includes(titleTask.value);
    if (containsTask) {
    }
}

buttonAddTask.addEventListener("click", inputValueVerification);
