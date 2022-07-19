# 🐔😡 Galódio 😡🐔

## Status: 
**Projeto ainda em construção!** ⏳⚠️

## Para rodar na sua máquina:
- Clonar este repositório;
- Rodar npm install no seu terminal, para instalar as dependências;
```
npm install
```
- Criar um arquivo .env na raiz do projeto (fora da pasta ./src) com os seguintes atributos e os valores necessários:
```
// para estabelecer conexão com o banco de dados:
DB_HOST = 
DB_USER = 
DB_DATABASE_NAME = 
DB_PASSWORD =

// para configurar o web token:
JWT_KEY = 
ACCESS_TOKEN_EXPIRES_IN = 

// para rodar o nodemailer:
NODEMAILER_USER = 
NODEMAILER_PASS = 

```

As tabelas estão no arquivo queries.sql

## Sobre o projeto:

Projeto feito com o intuito de colocar em prática conhecimentos em Nodejs, TypeScript, JavaScript e React.

Ao fim da confecção, é esperado que o usuário possa efetuar login, desde que tenha um cadastro, possa fazer apostas no "Bolódio" (Bolão da Galódio). "Galódio" é um grupo de amigos que torcem para o Clube Atlético Mineiro.

##  🔧 Ferramentas utilizadas:

- Knex;
- MySql;
- Typescript;
- Express;
- Node.js;
- Cors;
- Nodemailer;
- Jwt;
- generate-password;
- UUID;

### Desenvolvido por:
[Lucas Txai](https://github.com/LTxai)

### Documentação Postman:
[Postman](https://documenter.getpostman.com/view/18693913/UzQyq3DL)
