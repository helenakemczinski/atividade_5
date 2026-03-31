# O que é o Javascript?
JavaScript e uma linguagem de programação que te permite colocar itens complexos em paginas web.
Com isso a página web pode tanto exibir: informaçãoes estáticas, dinâmicas, mapas ou gráficos em 2D/3D animados, e até conteúdos que atiualizam a cada determidado tempo. Qunado você ver qualquer website com essa características pode apostar que o JavaScript provavelmente está envolvido. 
É a terceira camada do bolo das tecnologias padrões da web, sendo as outras o HTML e o CSS 


[![App Platform](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript/cake.png)](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)

# Para que serve o JavaScript?
 O JavaScript serve para tornar as aplicações Web mais dinâmicas, assim ao JavaScript, os navegadores passaram a ser capazes de responder a interações do usuário e alterar o layout do conteúdo na página, desse modo deixa a página mais interativa para o usuario, podendo atualizar elementos dinamicanmente e lidar melhor com os dados enviados e recebidos na página

# Como ele complementa HTML e CSS?
O JavaScript complementa o HTML e o CSS como se ao todo fossem um corpo, o HTMl é o esqueleto que sustenta todo o sistema, já o CSS é a pele, cabelo e roupas, pois cria todo o visual do site como ele vai aparecer para o usuário, e por fim o JavaScript é o músculo, que dá movimnto, pois torna a página web mais dinâmica, permitindo criar funções como animações, respostas a ações do usuário e atualização de conteúdos em tempo real
[![App Platform](https://i.imgur.com/Eps32Cl_d.webp?maxwidth=760&fidelity=grand)](https://cursos.alura.com.br/forum/topico-dica-sobre-oq-continuar-estudando-218376)

# Onde JavaScript pode ser usado no HTML?
 O JavaScript pode ser usado no HTML para deixar o site mais interativo e dinâmico como responder aos usuarios, alterar textos e elementos, validar formulários e executar ações automaticamente no site.


# Diferença entre script dentro do HTML e script em arquivo separado
A principlal diferença está na organização e desempenho, o Script dentro do HTML são mais utiliza dos para para rápidos e pequenos códigos, pois carregam junto com a página, sem precisar baixar  arquivos extras, o que deixa tudo mais rápido.
Contudo o Scripts em arquivo separado melhoram a organização, manutenção e permitem cache do navegador para projetos maiores, o HTML fica mais limpo, só com a estrutura da página, com o Script separado da para editar muito mais fácil e váris pessoas podem editar ao mesmo tempo sem gerar confusões.
Assim também facilitando conversões e reutilizações, e o navegador guarda eles em cache para carregar mais rápido em projetos grandes 

# Como declarar variáveis?
Em JavaScript você declara variáveis ​​usando var, let ou const, sendo que hoje é mais recomendado usar principalmente let e const
Use let quando o valor da variável pode mudar depois, e const quando o valor não deve ser reatribuído. O nome da variável deve começar com letra, sublinhado _ ou cifrão $, pode ter letras, números, _ ou $ depois, e não pode ser uma palavra reservada da linguagem, como var, let, if ou function

# Diferença entre var, let e const
Var: Declarar variáveis ​​com escopo de função, permitindo redeclaração e reatribuiçãoEla sofre hoisting(a declaração sobe para o topo do escopo, mas inicializada como undefined, o que pode causar problemas se usada antes da linha real) Exemplo: em um laço for, um var sai para fora do bloco, afetando código externo
Let: Tem o escopo de bloco (limitado a {}, como em if, for ou {} simples), permitindo reatribuição mas não redeclaração no mesmo escopo
Também sofre hoisting, mas entra na Temporal Dead Zone (TDZ): usar antes da declaração causa erro, ideal para contadores ou valores mutáveis
Const: Também tem escopo de bloco, mas não da para mudar(não permite reatribuição nem redeclaração, e exige inicialização na declaração)
 Na TDZ como let, mas o valor pode ser um objeto ou array mutável internamente (ex: const obj = {}; obj.prop = 1;)
 Use para constantes verdadeiras

# O que é escopo de váriavel?
O escopo de Variável define a região do código ond uma variável pode ser acessada e utilizada
Naprogramação ele determina a visibilidade e o tempo de vida de uma variavel
eviando conflitos e erros.
Para exemplo de declaracao de variaveis, veja os arquivos na pasta 04_variaveis_tipos_escopo.

# Diferença entre == e ===
== (igualdade  solta/abstrata)
Compara se os valores “podem ser iguais” depois de converter um dos dois para um tipo comum
=== (igualdade estrita / identidade)
Só retorna true se os valores forem iguais e os tipos forem os mesmos

# Diferença entre != e !==
!= diferente abstrato: só verifica se os valores são diferentes, fazendo conversão de tipo se necessário
!== diferente estrito: verifica se valor ou tipo são diferentes, sem conversão de tipo

# Como declarar funções?
Em JavaScript, para declara funções use function nome() { código } para a forma tradicional, const nome = function() { código } para expressões, ou const nome = () => código para arrow functions modernas. Para exemplo de declaracao de funções, veja os arquivos na pasta 08_funções.


# Como fazer operações aritméticas e lógicas básicas?
Operações Aritméticas
operadores para cálculos: + (soma), - (subtração), * (multiplicação), / (divisão), % (resto da divisão), ** (potência)

Operações Lógicas
Combine booleanos com && (E lógico), || (OU lógico) e ! (NÃO)


Útil para condições: if (idade >= 18 && autorizado) { ... }

Para exemplo de operações aritiméticas, veja os arquivos na pasta 06_operadores_e_comparacoes.

# Como usar estruturas condicionais?
As estruturas condicionais em JavaScript servem para fazer o programa tomar decisões, executando ações diferentes dependendo de uma condição.
O if é usado quando queremos executar um código se a condição for verdadeira. O if...else permite escolher entre duas opções, e o else if é usado quando há várias condições possíveis.
Já o switch é indicado quando temos várias opções fixas para comparar, deixando o código mais organizado
Para exemplo de condicionais, veja os arquivos na pasta 06_condionais

 # Como usar estruturas de repetição?
As estruturas de repetição em JavaScript servem para fazer com que um bloco de códigos execute varias vezes até que as condições sejam feitas, as principais são for, while e do...while For: é usando quando se sabe quantas vezes aproximadamente repetir o bloco.
While: é usado quando não se sabe o número de vezes que ira se repetir, mas sabe a condição de parada.
Do...while: é usado uma vez após a condição ser verificada

Para exemplo de estruturas, veja os arquivos na pasta 07_repeticao

# Como JavaScript pode interagir com elementos da página?
JavaScript conversa com a página pelo DOM, que é a estrutura de tudo que você vê: ele acha elementos por nome ou classe, muda o texto, cor ou tamanho deles, fica ouvindo cliques ou teclas para reagir na hora, e também cria ou apaga pedaços da página 

# Fontes
https://aws.amazon.com/pt/what-is/javascript/#:~:text=O%20JavaScript%20surgiu%20como%20uma,layout%20do%20conte%C3%BAdo%20na%20p%C3%A1gina.
https://www.alura.com.br/artigos/html-css-e-js-definicoes#:~:text=Para%20completar%20a%20grande%20tr%C3%ADade,com%20HTML%20de%20forma%20est%C3%A1tica.
https://www.hostinger.com/br/tutoriais/como-adicionar-javascript-no-html
https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/What_is_JavaScript
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions
https://cursos.alura.com.br/forum/topico-dica-sobre-oq-continuar-estudando-218376
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function
http://pt.stackoverflow.com/questions/7/qual-a-diferen%C3%A7a-entre-os-operadores-e-em-javascript
https://materialpublic.imd.ufrn.br/curso/disciplina/3/13/14/6
https://linguagemc.com.br/funcoes-e-escopo-de-variaveis/
https://www.freecodecamp.org/portuguese/news/var-let-e-const-qual-e-a-diferenca/
https://www.devmedia.com.br/javascript-variaveis-e-constantes/41012
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction
https://www.alura.com.br/artigos/html-css-e-js-definicoes?srsltid=AfmBOooq9Z32IbxDqWZV2INZZhpvHak1RHTWNREVj0P4-cSTY6p_FdLG#html
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
