# O que é o Javascript?
JavaScript e uma linguagem de programacao que te permite colocar itens complexos em paginas web.
Com isso a págian web pode tanto exibir: informaçãoes estáticas, dinâmicas, mapas ou gráficos em 2D/3D animados, e até conteúdos que atiualizam a cada determidado tempo. Qunado você ver qualquer website com essa características pode apostar que o JavaScript provavelmente está envolvido. 
É a terceira camada do bolo das tecnologias padrões da web, sendo as outras o HTML e o CSS 
[![App Platform](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript/cake.png)](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)
# Variáveis


Explica o que é variável.
Para exemplo de declaracao de variaveis, veja os arquivos na pasta 04_variaveis_tipos_escopo.
# Para que serve o JavaScript?
 O JavaScript serve para tornar as aplicações Web mais dinâmicas, assim ao JavaScript, os navegadores passaram a ser capazes de responder a interações do usuário e alterar o layout do conteúdo na página, desse modo deixa a página mais interativa para o usuario, podendo atualizar elementos dinamicanmente e lidar melhor com os dados enviados e recebidos na página

# Como ele complementa HTML e CSS?
O JavaScript complementa o HTML e o CSS como se ao todo fossem um corpo, o HTMl é o esqueleto que sustenta todod o sistema, já o CSS é a pele, cabelo e roupas, pois cria todo o visual do site como ele vai aparecer para o usuario, e por fim o JavaScripté o músculo, que dá movimnto, pois torna a página web mais dinâmica, permitindo criar funcões como animações, respostas a ações do usuário e atualização de conteúdos em tempo real
[![App Platform](https://i.imgur.com/Eps32Cl_d.webp?maxwidth=760&fidelity=grand)](https://cursos.alura.com.br/forum/topico-dica-sobre-oq-continuar-estudando-218376)

# Onde JavaScript pode ser usado no HTML?
 O JavaScript pode ser usado no HTML para deixar o site mais interativo e dinâmico como responder aos usuarios, alterar textos e elementos, validar formulários e executar ações automaticamente no site.


# Diferença entre script dentro do HTML e script em arquivo separado
A principlal diferença está na organização e desempenho, o Script dentro do HTML são mais utiliza dos para para rápidos e pequenos códigos, pois carregam junto com a página, sem precisar baixar  arquivos extras, o que deixa tudo mais rápido.
Contudo o Scripts em arquivo separado melhoram a organização, manutenção e permitem cache do navegador para projetos maiores, o HTML fica mais limpo, só com a estrutura da página, com o Script separado da para editar muito mais fácil e váris pessoas podem editar ao mesmo tempo sem gerar confusões.
Assim também facilitando conversõesn e reutilizações, e o navegador guarda eles em cache para carregar mais rápido em projetos grandes 

# Como declarar variáveis?
Em JavaScript você declara variáveis ​​usando var, let ou const, sendo que hoje é mais recomendado usar principalmente let e const
Use let quando o valor da variável pode mudar depois, e const quando o valor não deve ser reatribuído. O nome da variável deve começar com letra, sublinhado _ ou cifrão $, pode ter letras, números, _ ou $ depois, e não pode ser uma palavra reservada da linguagem, como var, let, if ou function.04_variaveis_tipos_escopo

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
eviando conflitos e erros

# Diferença entre == e ===
== (igualdade  solta/abstrata)
Compara se os valores “podem ser iguais” depois de converter um dos dois para um tipo comum
=== (igualdade estrita / identidade)
Só retorna true se os valores forem iguais e os tipos forem os mesmos

# Diferença entre != e !==
!= diferente abstrato: só verifica se os valores são diferentes, fazendo conversão de tipo se necessário
!== diferente estrito: verifica se valor ou tipo são diferentes, sem conversão de tipo

# Como declarar funções?
Em JavaScript, para declara funções use function nome() { código } para a forma tradicional, const nome = function() { código } para expressões, ou const nome = () => código para arrow functions modernas. Chame com nome()
Você declara funções de três formas simples:

Função tradicional: function nome(parametros) { código; }
Exemplo: function soma(a, b) { return a + b; }
Pode ser usada antes da declaração (hoisting)

Função em variável: const nome = function(parametros) { código; }
Exemplo: const saudacao = function(nome) { return 'Olá, ' + nome; }

Arrow function (moderna): const nome = (parametros) => { código; } ou const nome = (a, b) => a + b
Exemplo: const multi = (x, y) => x * y

Para usar: nome() ou nome(valor1, valor2)

# Como fazer operações aritméticas e lógicas básicas?
Operações Aritméticas
operadores para cálculos: + (soma), - (subtração), * (multiplicação), / (divisão), % (resto da divisão), ** (potência)
Exemplo: 10 + 5 resulta em 15
         10 % 3 dá 1

Operações Lógicas
Combine booleanos com && (E lógico), || (OU lógico) e ! (NÃO)
Exemplo: true && false é false
         !true é false.

Útil para condições: if (idade >= 18 && autorizado) { ... }

# Como usar estruturas condicionais?
Em JavaScript, as estruturas condicionais fazem os códigos baseados em condições verdadeiras ou falsa, usando  if, else if e else
Sintaxe básica: if (condição) { código se verdadeiro } else { código se falso }.

Múltiplas condições: if (condição1) { ... } else if (condição2) { ... } else { ... }

 Para uma nota de 8, if (nota >= 9) { "A" } else if (nota >= 7) { "B" } else { "Reprovado" } mostra "B"

 # Como usar estruturas de repetição?
 As estruturas de repetição em JavaScript servem para fazer com que um bloco de códigos execute varias vezes até que as condições sejam feitas, as principais  são for, while e do...while
 For: é usando quando se sabe quantas vezes aproximadamente repetir o bloco
 exemplo: for(le i = 0; i < 5; i++) {
            console.log("Numero: " +i);
            }
    -let i = 0: inicio do condutor
    -i < 5 : condição para continuar
    -i++: após cara interação

While: é usado quando não se sabe o número de vezes que ira se repetir, mas sabe a condição de parada
exemplo: let i = 0;
         while (i < 5) {
            console.log("Número " + 1);
            1++;
            }
A código que esta dentro so while so vai rodar se (i < 5) for true

Do...while: é usado uma vez após a condição ser verificada