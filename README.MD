# Descrição

Projeto final da materia de TDS

> ${pasta do projeto}/frontend/src/
> ${pasta do projeto}/backend/src/

# Descrição

Todas as rotas disponiveis estão no <b>/swagger</b> sendo:

> localhost:3000/swagger

- <b>/users</b> - Para consulta de todos os usuários.
- <b>/content</b> - Para consulta de todos os passeios.
- <b>/typeUser</b> - Entidade type de usuários.
- <b>/typeContent</b> - Entidade types de conteudo.
- <b>/auth</b> - Rota de autenticação.

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [NestJs](https://nestjs.com/)
- [React.js](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/)
- [Postgresq](https://postgresql.org/)
- [Docket](https://docker.com/)
- [TypeORM](https://typeorm.io/)

### <b>Estrutura de pastas</b>

```
├──src/
│   ├── V1/
│   │    ├── config/
│   │    ├── modules/
│   │    │       │
│   │    │       ├── content/
│   │    │       │      │
│   │    │       │      ├── controllers/
│   │    │       │      ├── services/
│   │    │       │      ├── repositories/
│   │    │       │      │
│   │    │       │      ├── typeorm/
│   │    │       │      │      │
│   │    │       │      │      ├── repositories/
│   │    │       │      │      │      │
│   │    │       │      │      │      ├── index.ts
│   │    │       │      │      │      │
│   │    │       │      │      │      ├── ...
│   │    │       │      │      │      │
│   │    │       │      │      ├── entities/
│   │    │       │      │      │      │
│   │    │       │      │      │      ├── index.ts
│   │    │       │      │      │      │
│   │    │       │      │      │      ├── ...
│   │    │       │      │      │      │
│   │    │       │      │      │
│   │    │       │      │      ├── index.ts
│   │    │       │      │      │
│   │    │       │      ├── dtos/
│   │    │       │      │
│   │    │       ├── users/
│   │    │       │
│   │    │       ├── types/
│   │    │       │
│   │    ├── providers/
│   │    ├── utils
│   │    ├── V1.module.ts
│   │    │
│   ├── app.module.ts
│   ├── main.ts
│   ├── swagger.ts
│   │
├── package.json
├── README.md
...
├── Dockerfile
├── .dockerignore
├── docker-compose.yml
├── stage.dev.env

```

# Como executar

```bash
# Clone este repositório
$ git clone <git@github.com:quieregatog/ProjetoFinal-TDS.git>

# Em um terminal acesse o frontend
$ cd ${pwd}/frontend

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn start

# Em um terminal acesse o backend
$ cd ${pwd}/backend

# Logo em seguida instale as dependências
$ yarn

# Inicie o docker
$ docker-compose up --build

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

> Arquivo teste do insomnia estará junto se quiser testar

MER

# Desenvolvedor

<center>
<a href="https://www.linkedin.com/in/gustavo-silva-quieregato/">
 <br />
 <sub><b>Gustavo Silva Quieregato - Linkedin</b></sub></a> <a href="https://www.linkedin.com/in/gustavo-silva-quieregato/" title="Linkedin">🚀</a>
 <br/>
 <sub><b>Quieregatog - Github</b></sub></a> <a href="https://github.com/quieregatog" title="Linkedin"></a>
 </center>
