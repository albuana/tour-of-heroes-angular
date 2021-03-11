## tour-of-heroes

<h3 id="yui_3_17_2_1_1615490989531_21">Angular</h3>
<ul>
<li>Na <a href="https://angular.io/docs">documentação do Angular</a> ler os capítulos<br>
<ul>
<li><a href="https://angular.io/guide/what-is-angular">Getting Started</a>&nbsp;(todas as secções)</li>
<li>Understanding Angular (todas as secções: <a href="https://angular.io/guide/component-overview">Components</a>, <a href="https://angular.io/guide/template-syntax">Templates</a>, <a href="https://angular.io/guide/built-in-directives">Directives</a>, <a href="https://angular.io/guide/dependency-injection">Dependency Injection</a>)</li>
<li><a href="https://angular.io/guide/router">Routing and Navigation</a></li>
<li><a href="https://angular.io/cli">CLI Commands</a> (secção Overview e aquelas relativos aos comandos que necessitarem)</li>
</ul>
</li>
</ul>
<h2>Preparação do Exercício</h2>
<ol>
<li>Executar o tutorial "<a href="https://angular.io/tutorial">Tour of Heroes</a>" na tua máquina de desenvolvimento (ou em alternativa no <a href="https://stackblitz.com/">stackblitz</a>)</li>
</ol>
<h2>Exercício</h2>
<ul>
<li>Partindo da base construída na preparação do exercício, acrescentar as seguintes funcionalidades:<ol>
<li>Pets
<ul>
<li>Gerar um componente pets que liste um conjunto de pet heroes (cada pet é caracterizado pelo seu nome; podem inicializar uma lista de pets com os nomes que entenderem).</li>
<li>A lista de pets deve ser disponibilizada pelo serviço pet.</li>
<li>Colocar um botão para poder aceder a esse componente (semelhante aos botões Dashboard e Heroes).</li>
<li>Garantir que o acesso à lista usa um router.</li>
</ul>
</li>
<li>My Pet
<ul>
<li>Modificar o componente hero-detail (mais o que for necessário) para poder escolher um pet para um hero (heroes diferentes podem ter o mesmo pet).</li>
<li>Modificar o componente dashboard para passar a indicar o pet de cada hero.</li>
</ul>
</li>
</ol></li>
</ul>

## Como correr o exercicio?
- É necessário tem o angular cli instalado. Consultar em https://cli.angular.io;
- Abrir um terminal na pasta ```tour-of-heroes-angular/``` e executar o comando npm install;
- Nessa mesma pasta fazer ng serve;
- Abrir o browser o http://localhost:4200/ indicado pela consola.
