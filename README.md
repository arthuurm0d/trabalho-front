# Trabalho — Controle de Tarefas

**Nome do projeto: TASKFLOW**

## 1. Descrição do problema e da solução

No dia a dia, muitas pessoas têm várias coisas para fazer e acabam esquecendo algumas tarefas ou se confundindo com o que já foi feito e o que ainda está pendente.

Pensando nisso, desenvolvi um site simples para ajudar na organização dessas atividades. Nele, o usuário pode adicionar tarefas, marcar as que já foram concluídas, excluir tarefas e filtrar a lista de acordo com o que precisa visualizar.

O site também mostra a quantidade de tarefas cadastradas, pendentes e concluídas. Além disso, as informações ficam salvas no próprio navegador, mesmo quando a página é atualizada.

## 2. Público-alvo

O projeto foi pensado principalmente para estudantes e pessoas que precisam organizar suas atividades do dia a dia. A ideia é oferecer uma ferramenta simples, que funcione diretamente no navegador, sem precisar criar uma conta ou instalar programas.

## 3. Funcionalidades do projeto

Durante o desenvolvimento, foram implementadas as seguintes funcionalidades:

* Adicionar tarefas por meio de um formulário.
* Impedir o cadastro de tarefas vazias e mostrar uma mensagem de erro.
* Marcar tarefas como concluídas e desfazer essa ação.
* Excluir tarefas que não são mais necessárias.
* Mostrar o total de tarefas, quantas estão pendentes e quantas foram concluídas.
* Filtrar as tarefas entre todas, pendentes e concluídas.
* Adaptar o layout para computadores e celulares.
* Utilizar recursos básicos de acessibilidade, como campos com identificação, foco visível e avisos que podem ser reconhecidos por leitores de tela.

## 4. Tecnologias utilizadas

Para desenvolver o projeto, utilizei as seguintes tecnologias e ferramentas:

* **HTML5:** para montar a estrutura da página.
* **CSS3:** para definir as cores, os estilos, o layout e as animações.
* **JavaScript:** para fazer as funcionalidades do site funcionarem.
* **Git e GitHub:** para controlar as versões do projeto e guardar o código.
* **Visual Studio Code:** para escrever e editar os arquivos.
* **Live Server:** para abrir o site no navegador e acompanhar as alterações.

Optei por utilizar apenas HTML, CSS e JavaScript puro, sem frameworks ou bibliotecas externas. Também não foi necessário utilizar banco de dados, APIs ou Node.js.

## 5. Organização dos arquivos

O projeto ficou organizado em quatro arquivos principais:

```text
trabalho_front/
├── index.html
├── script.js
├── style.css
└── README.md
```


## 6. Decisões tomadas durante o desenvolvimento

Uma das decisões foi utilizar JavaScript puro, porque o projeto não precisava de ferramentas muito complexas. Como o objetivo era criar um controle de tarefas simples, as tecnologias utilizadas foram suficientes para desenvolver as funcionalidades necessárias.

Também utilizei um array de objetos para armazenar as tarefas enquanto o site está funcionando. Cada tarefa possui um identificador, um texto e uma informação que indica se ela foi concluída.


## 7. Comparação com outras tecnologias

### Por que escolhi HTML, CSS e JavaScript?

O HTML é responsável pela estrutura, o CSS cuida da aparência e o JavaScript faz as ações funcionarem. Com essas três tecnologias, consegui desenvolver o que precisava sem adicionar ferramentas desnecessárias.

### O que mudaria se eu utilizasse React?

O React poderia facilitar algumas partes do desenvolvimento, principalmente se o projeto crescesse.



### O React seria a melhor escolha?

Na minha opinião, não necessariamente. A escolha depende do tamanho do projeto e do que ele precisa fazer.

Para o meu controle de tarefas, o JavaScript puro foi suficiente e permitiu desenvolver as funcionalidades sem muitas complicações. Além disso, não precisei me preocupar com dependências de frameworks.

Se o sistema tivesse muitas páginas, mais funcionalidades e uma estrutura maior, o React poderia ser uma opção interessante, principalmente pela organização em componentes.

### O Vue e o Angular também poderiam ser utilizados?

Sim. O Vue seria uma alternativa interessante por ter uma estrutura que pode ser mais simples de aprender inicialmente. Já o Angular oferece mais recursos e uma estrutura mais completa, sendo bastante útil em projetos maiores.

As três opções poderiam funcionar, mas, para este trabalho, preferi manter a solução mais simples.

## 8. Dificuldades encontradas

Durante o desenvolvimento, encontrei algumas dificuldades e precisei fazer ajustes para conseguir executar o projeto corretamente.


## 9. Divisão do trabalho

O projeto foi desenvolvido por Arthur Marques, João victor e Bruno otavio

Fiquei responsável pelas etapas de planejamento, desenvolvimento da página, implementação das funcionalidades, organização dos arquivos, versionamento com Git e documentação do projeto.

Também utilizei ferramentas de inteligência artificial como apoio durante o desenvolvimento, conforme explicado na seção 13.

## 10. Histórico do desenvolvimento

O desenvolvimento foi organizado em dois commits, permitindo separar a versão inicial das melhorias realizadas posteriormente.

| Etapa | Mensagem do commit                                       | Alterações realizadas                                                                                                                                    |
| ----- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | `feat: cria versão inicial do controle de tarefas`       | Criação da primeira versão, com formulário, lista de tarefas, opção de concluir e remover, além de um CSS básico.                                        |
| 2     | `feat: aprimora interface e funcionalidades das tarefas` | Melhorias no visual, adaptação para celulares, contadores, filtros, validação, animações, acessibilidade básica, salvamento no navegador e documentação. |

A segunda etapa foi desenvolvida na branch `desenvolvimento` e depois integrada à branch `main` por meio de um fast-forward, sem a necessidade de criar um commit de merge.

## 12. Melhorias que poderiam ser feitas no futuro

Apesar de o projeto já atender ao objetivo principal, existem algumas funcionalidades que poderiam ser adicionadas futuramente:

* Permitir editar uma tarefa depois de cadastrada.
* Adicionar datas de entrega e níveis de prioridade.
* Criar categorias para separar diferentes tipos de tarefas.
* Adicionar uma opção para excluir todas as tarefas concluídas.
* Permitir organizar as tarefas por ordem de prioridade ou data.
* Criar um tema escuro.
* Melhorar a organização do código caso o projeto fique maior.

Essas melhorias poderiam deixar o sistema mais completo e facilitar ainda mais a organização das atividades.

## 11. Utilização de inteligência artificial

Durante o desenvolvimento, utilizei o Claude Sonnet 5.5 como ferramenta de apoio para criar o projeto, resolver problemas e esclarecer dúvidas.
                   |
| 08/10/2026 | Claude Sonnet 5.5 | Ajuda para identificar e corrigir os erros dos arquivos, codigos                         |


### O que foi revisado ou adaptado por mim?

Durante o processo, acompnhei as etapas de desenvolvimento e busquei entender os problemas que apareceram. Entre os ajustes realizados, estão a correção dos caminhos dos arquivos para que o HTML encontrasse o CSS e o JavaScript e a alteração do nome do projeto para "Trabalho".

Também acompanhei o processo de criação do repositório e a utilização dos comandos do Git e do GitHub.

A inteligência artificial foi utilizada como apoio para desenvolver o projeto e esclarecer dúvidas durante o processo. **[Completar com outras partes do código que você revisou, testou, modificou ou conseguiu entender por conta própria.]**

## Conclusão

Com este trabalho, consegui desenvolver uma aplicação web para organizar tarefas e colocar em prática conhecimentos de HTML, CSS, JavaScript e Git.

