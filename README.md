<div> 
  <h1 align="center">To-do list - Projeto JS👨‍💻</h1> 
</div>

<div>
  <h3 align="center">Aplicação de uma lista de tarefas funcional</h3>
</div>

<div align='center'>
	<img src= "https://github.com/WillianOL/To-Do-List/assets/112639055/54f88975-c9ae-4005-b4df-8191a2138e6a" width='850px'>
</div>



## Ferramentas utilizadas🛠️

<div>
	<p>Para a elaboração do projeto, foram usadas as tecnologias: </p>
</div>

<ul>
 	<li>
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript
 	</li>
	<br>
	<li> 
		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"> HTML
 	</li>
	<br>
 	<li> 
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"> CSS 
 	</li>

</ul>

<div>
	<h2>Sobre o projeto📃</h2>
</div>
	
<div>
	<p>Aplicação de to do list, onde pode-se criar ou remover as tarefas(anotações). Neste porjeto, foi trabalhado lógica de programação, validação de dados, manipulação de arrays, manipulação do DOM e uso do atributo "data-".</p>
	<p>A aplicação consiste em uma lista de tarefas, onde pode-se tanto adicionar quanto remover as tarefas(anotações), onde elas aparecem ao lado totalmente personalizadas. Ela possui validação, onde se nada for digitado no input irá mostrar a mensagem de alerta, e se a anotação já estiver adicionada a lista irá mostrar outra mensagem de aviso.</p>
</div>

### Acessar projeto: ✈

◻<a href="https://willianol.github.io/To-Do-List/assets/index.html">To Do list - JavaScript</a>


## <img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript

### Vareáveis importantes

<div>
	<p>Primeiramente, foram definidas 6 constantes importantes para a criação da aplicação. São elas:</p>
 	<ul>
		<li><strong>botaoAdicionarTarefa</strong> - Botão que vai adicionar as tarefas;</li>
		<li><strong>tituloTarefa</strong> - Input onde vai ser digitado o titulo da tarefa;</li>
		<li><strong>tarefaConteiner</strong> - ul onde vão ser colocadas as tarefas;</li>
		<li><strong>mensagemErroTitulo</strong> - Mensagem de alerta caso não seja digitado o titulo no input;</li>
		<li><strong>mensagemErroTemTarefa</strong> - Mensagem de alerta caso a tarefa já exista;</li>
		<li><strong>arrayTarefas</strong> - Array onde será armazenado os titulos para a validação;</li>
 	<ul>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/To-Do-List/assets/112639055/b941c10d-2fb3-4687-b358-21c8d86f6546" width="700px">
</div>

&nbsp;
&nbsp;

### Validação das tarefas
		
<div>
	<p>Para fazer a validação do valor digitado no input, mais expecificamente baseado no valor do titulo, no <strong>botão de adicionar tarefa</strong> foi adicionado um <strong>evento de click com a função "validacaoDasTarefas"</strong> através do <strong>addEventListener()</strong>.</p>
<div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/To-Do-List/assets/112639055/7664a19b-8991-4908-b587-6476edd5cc79" width="700px">
</div>

&nbsp;
	
<div>
	<p>Na função, foi passado o parâmetro "event" que foi usado para impedir que o formulário seja enviado, usando o método preventDefault().</p>
<div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/To-Do-List/assets/112639055/e46a4855-69d0-4abb-abf9-4e79083748d5" width="700px">
</div>

&nbsp;

<div>
	<p>Ainda na função, foram criadas três constantes para fazer a validação utilizando uma estrutura condicional (if e else). São elas:</p>
	<ul>
		<li><strong>contemTarefa</strong> - Verifica se na arrayTarefas já possui uma tarefa criada com o mesmo titulo, retornando true ou false;</li>
		<li><strong>removeClasseMensagemTitulo</strong> - Remove a classe responsável por mostrar a mensagem de erro, caso nada seja passado no input(showErrorMensage);</li>
		<li><strong>removeClasseMensagemInclui</strong> - Também remove a classe da mensagem de erro, caso a tarefa já exista na lista;</li>
	</ul>
	<p>Todas elas criadas para deixar o código mais legível e organizado, usando clean code.</p>
<div>
	
<div align="center">
	<img align="center" src="https://github.com/WillianOL/To-Do-List/assets/112639055/0c91f4a4-9c5f-4ceb-9882-a5002242be16" width="700px">
</div>
	
&nbsp;

<div>
	<p>Depois, é criada uma estrutura condicional (if e else) para validar. No primeiro if é vefificado se o titulo da tarefa passado no input é igual a ""(string vazia), ou seja, se nada for digitado no input vai executar. Adicionando a classe na "mensagemErroTitulo" para mostrar a mensagem de alerta, e removendo a classe da "mensagemTemTarefa".</p>
	<p>No "else if" verificando se a tarefa já existe na lista através da constante contemTarefa, caso seja true, vai adicionar a classe na "mensagemTemTarefa" para mostrar a mensagem de alerta, e remove a classe da "mensagemErroTitulo".</p>
	<p>Por fim, no else vai adicionar o titulo da tarefa na arrayTarefas, executar a função para adicionar a tarefa e limpar o input de titulo.</p>
<div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/To-Do-List/assets/112639055/b6bc2697-07d7-4ef0-8bba-28344644e0d0" width="700px">
</div>
	
&nbsp;
&nbsp;
	
### Função adicionar tarefa

<div>
	<p>Para adicionar as tarefas, foi criada uma a função "adicionarTarefa()". Nela, foram definidas duas contantes, "tituloValor" que armazena o titulo da tarefa e "descricaoValor" que armazena a descrição da darefa.</p>
<div>
	
<div align="center">
	<img align="center" src="https://github.com/WillianOL/To-Do-List/assets/112639055/567bc5e4-7eba-4cb5-98e7-a85deb8a215d" width="700px">
</div>
	
&nbsp;

<div>
	<p>Para a construção da tarefa, no "tarefaConteiner" foi utilizado um innerHTML com uma template string, onde possui o titulo e a descrição da tarefa, além do botão de remover a tarefa.</p>
<div>
	
<div align="center">
	<img align="center" src="https://github.com/WillianOL/To-Do-List/assets/112639055/d0eea5ef-5a35-4f43-9ab9-e4f82c28f456" width="700px">
	<img align="center" src="https://github.com/WillianOL/To-Do-List/assets/112639055/e3a76f4f-9679-4ca1-b3e8-de74ee5a0bf3" width="550px">
</div>

### Função remover Tarefa
	
<div>
	<p>Para fazer a remoção da tarefa clicada, primeiro, no "tarefaConteiner" onde fica todas as tarefas criadas é adicionado uma função "removerTarefa" com evento de click, atravéz do addEventListener.</p>
<div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/To-Do-List/assets/112639055/1ccb342e-1c7e-49c1-9c1c-6766e11641ca" width="700px">
</div>	

&nbsp;

<div>
	<p>Na função, é passado o parâmetro "event". Logo após, é criado uma estrutura condicional que tem como condição o seguinte: se o event.target(item clicado em relação ao conteiner) tiver a classe "remover"(que no caso é o botão) através do classList.contains, executa o código.</p>
	<p>Dentro do escopo do if, é feita a remoção da tarefa através do parentElement.remove(), removendo o elemento pai do botão, ou seja, a li(tarefa). Também removendo o primeiro item da lista usando o ".shift".</p>
<div>
	
<div align="center">
	<img align="center" src="https://github.com/WillianOL/To-Do-List/assets/112639055/42c0accf-fae8-487b-95d9-7c05aa4cd72a" width="700px">
</div>	

	
	
	
	
	
	
	
	
	
	
	
