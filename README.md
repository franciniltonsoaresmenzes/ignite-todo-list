<p align="center">
    <img src="/preview/icon.svg" width="100"  >
<p/>
<h1 align="center">
     Challenge Ignite Nodejs
</h1>
<h2>📷 Preview </h2>
  <div style="display: flex; flex-direction: row;">
    <p align="center">
      <img width="400" style="border-radius: 10px" height="auto" alt="Class-02" title="Class-02" src="/preview/preview-complete-task.gif"  />
      <img width="400" style="border-radius: 10px" height="auto" alt="Class-02" title="Class-02" src="/preview/preview-test.gif"  />
    </p>
  <div>
    
   <h3>Funcionalidades</h3>
 <p>
  Uma API como funcionalidades de CRUD para realizar controle de tasks.
 <p/>

    
    
  - `POST - /tasks`
    
    Criar uma task no banco de dados, enviando os campos `title` e `description` por meio do `body` da requisição.
    
- `GET - /tasks`
    
    Listar todas as tasks salvas no banco de dados.
   
    Filtrando as tasks pelo `title` e `description`
    
 - `PUT - /tasks/:id`
    
    Atualizar os campos `title` e `description`.
    
- `DELETE - /tasks/:id`
    
    Remover uma task pelo id.
    
- `PATCH - /tasks/:id/complete`
    
    Marcar a task como completa ou não. Isso significa que se a task estiver concluída.
    
```bash

# Clone este repositório
$ git clone https://github.com/franciniltonsoaresmenzes/ignite-todo-list

# Acesse a pasta do projeto no terminal/cmd
$ cd ignite-todo-list

# Instale as dependências com:
$ npm install

# Rode a aplicação em modo de desenvolvimento:
$ npm run dev
```
## :hammer_and_wrench: Tecnologias
  * __Javascript__
  * __NodeJs__+__Test Native
