Pokédex TypeScript Lite

Aplicação back-end desenvolvida em Node.js e TypeScript para consultar informações de Pokémon através da PokeAPI e organizar os resultados em um catálogo local durante a execução do programa.

Objetivo

O projeto foi desenvolvido para praticar conceitos de desenvolvimento back-end utilizando Node.js e TypeScript, incluindo:

- Consumo de API externa;
- Requisições com "fetch";
- Programação assíncrona com "async/await";
- Tratamento de erros com "try/catch";
- Interfaces e tipagem com TypeScript;
- Classes e métodos;
- Manipulação de arrays;
- Organização do projeto em camadas;
- Versionamento utilizando Git e GitHub.

Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub

Pré-requisitos

Para executar o projeto é necessário ter instalado:

- Node.js
- npm

Instalação

Clone o repositório e acesse a pasta do projeto.

Depois, instale as dependências:

npm install

Como executar

Para executar o projeto:

npm run start

Durante o desenvolvimento, também é possível utilizar:

npm run dev

Para verificar a compilação do TypeScript:

npm run build

Funcionalidades

O projeto permite:

- Buscar Pokémon pelo nome ou ID;
- Consultar dados diretamente da PokeAPI;
- Transformar os dados da API em um objeto simplificado;
- Adicionar Pokémon ao catálogo;
- Impedir Pokémon duplicados pelo ID;
- Listar os Pokémon cadastrados;
- Remover Pokémon pelo ID;
- Tratar Pokémon inexistente sem interromper a aplicação.

Arquitetura

O projeto foi organizado em camadas para separar as responsabilidades:

src/
├── controllers/
│   └── TerminalController.ts
├── models/
│   ├── CatalogoPokemon.ts
│   └── Pokemon.ts
├── services/
│   ├── BoxService.ts
│   └── PokeApiService.ts
├── utils/
│   └── textFormatters.ts
└── main.ts

Principais arquivos

main.ts

Ponto de entrada da aplicação. Instancia os serviços, o catálogo e o controller.

TerminalController.ts

Responsável por organizar o fluxo de execução da aplicação.

PokeApiService.ts

Responsável por consultar a PokeAPI utilizando "fetch", tratar erros e mapear os dados recebidos.

CatalogoPokemon.ts

Responsável por armazenar os Pokémon durante a execução, adicionar novos registros, impedir duplicidades, listar e remover Pokémon.

Pokemon.ts

Contém as interfaces utilizadas para tipar os dados dos Pokémon.

BoxService.ts

Responsável pelas operações de leitura e escrita do arquivo local "pc_box.json".

textFormatters.ts

Contém funções utilitárias para formatação de dados.

Persistência local

O projeto possui o arquivo:

pc_box.json

A base inicial é um array vazio:

[]

Métodos de array utilizados

Durante o desenvolvimento foram utilizados diferentes métodos de array:

- "map()" — transforma os tipos retornados pela API;
- "some()" — verifica a existência de Pokémon no catálogo;
- "forEach()" — percorre os Pokémon para exibição;
- "filter()" — remove Pokémon pelo ID.

Exemplos de execução

Busca e cadastro

[OK] pikachu adicionado ao catálogo.
[OK] charmander adicionado ao catálogo.

Tentativa de cadastro duplicado

[AVISO] pikachu já está no catálogo.

Pokémon inexistente

[ERRO] Não foi possível buscar o Pokémon: pokemon-inexistente

Listagem do catálogo

Catálogo atual:
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85

Remoção

[OK] Pokémon removido do catálogo.

Após a remoção:

Catálogo atual:
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85

Scripts disponíveis

Comando| Função
"npm run dev"| Executa o projeto em desenvolvimento
"npm run build"| Compila o TypeScript
"npm run start"| Executa a aplicação

Kanban

Link do quadro Kanban:

https://github.com/users/mesquitajayne/projects/1/views/1

Branches utilizadas

- "main"
- "develop"
- "feat/pokedex"
- "docs/readme"

Testes realizados

O projeto foi executado pelo terminal utilizando:

npm run dev

e:

npm run start

Também foi realizada a verificação de compilação utilizando:

npm run build

A compilação foi concluída sem erros.