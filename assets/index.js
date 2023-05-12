const botaoAdicionarTarefa = document.querySelector("[data-buttons='addTask']");
const tituloTarefa = document.querySelector("#taskTittle");
const mensagemErroTitulo = document.querySelector("[data-erroMensage='erroTitle']");
const mensagemTemTarefa = document.querySelector("[data-erroMensage='erroTaskIncludes']")

const arrayTarefas = [];

function verificarValorDoInput(event) {
    event.preventDefault();
    const contemTarefa = arrayTarefas.includes(tituloTarefa.value);
    const removeClasseMensagemTitulo = mensagemErroTitulo.classList.remove("showErrorMensage");
    const removeClasseMensagemInclui = mensagemTemTarefa.classList.remove("showErrorMensage");

    if (tituloTarefa.value == "") {
        removeClasseMensagemInclui;
        mensagemErroTitulo.classList.add("showErrorMensage");
    } else if(contemTarefa) {
        removeClasseMensagemTitulo;
        mensagemTemTarefa.classList.add("showErrorMensage");
    } else {
        arrayTarefas.push(tituloTarefa.value);
    }
}

botaoAdicionarTarefa.addEventListener("click", verificarValorDoInput);
