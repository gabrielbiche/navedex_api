# Navedex API 

## O Sistema:
O sistema consiste em um criador de navedex's, nele tu poderá se cadastrar utilizando email e senha, e então ao logar terá acesso ao banco de dados dos seus navers, possuindo informações como: nomes, data de nascimento, cargos, tempo de empresa e projetos que participou. É possível saber em quais projetos um naver está e vice-versa, tudo baseado no usuário que fez a requisição.

## Postman
[**Documentation in Postman**](https://documenter.getpostman.com/view/16658273/UVkmQbyA)
**Coleção disponível na raiz do projeto**

### Tecnologias utilizadas:
RESTful usando Node.js, PostgreSQL, koa, knex, objection.

### Arquitetura:
Para a criação do projeto foi utilizado o padrão arquitetural de software MVC.

## Siga os passos abaixo para executar o projeto:
1. Crie um banco de dados
2. Defina seus dados de acesso ao banco de dados em: ./src/config.js 
3. Renomeie o arquivo da raiz do projeto chamado .env.example para .env e neste defina uma senha secreta para a chave CHAVE_JWT e também defina seus dados de acesso ao banco de dados em DATABASE_URL
4. Inicie as dependências do projeto com o seguinte comando: npm install
5. Crie as tabelas do banco de dados executando as migrações com o seguinte comando: npm run db:migrate
7. (OPICIONAL) Caso queira você pode popular o banco de dados com as seeds fornecidas, para isto execute o seguinte comando: npm run db:seed
6. Execute o seguinte comando para iniciar o servidor: npm run dev 

## Estrutura de diretórios:
```
├── /src
|   ├── /controllers
|   ├── /database
|   |   ├── /migrations
|   |   ├── /seeds
|   ├── /helpers
|   ├── /middlewares
|   ├── /models
|   ├── /routes
```
## Modelo relacional do banco de dados:
![modeloRelacionalNavedexAPI](https://user-images.githubusercontent.com/63760217/152434760-eef2ce01-dabf-4819-bc51-20fb66ca910b.png)
