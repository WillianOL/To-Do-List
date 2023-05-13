const botaoAdicionarTarefa = document.querySelector("[data-buttons='addTask']");
const tituloTarefa = document.querySelector("#taskTittle");
const tarefaConteiner = document.querySelector(".taskArea ul");
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
        adicionarTarefa();
        tituloTarefa.value = ""
    }
}
botaoAdicionarTarefa.addEventListener("click", verificarValorDoInput);

function adicionarTarefa() {
    const tituloValor = tituloTarefa.value;
    const descricaoValor = document.querySelector("#taskDescription").value;
    

    tarefaConteiner.innerHTML += `
    <li>
        <div class="task">
            <h1>${tituloValor}</h1>
            <p>${descricaoValor}</p>
        </div>
        <button data-buttons="removeTask" class="remover" title="Remover anotação">-</button>
    </li>
    `
}


const botaoRemoverTarefa = document.querySelector("[data-buttons='removeTask']")

function removerTarefa(event) {
    if(event.target.classList.contains("remover")){
        event.target.parentElement.remove();
        arrayTarefas.shift(tituloTarefa.value);
    }
}

tarefaConteiner.addEventListener("click", removerTarefa);