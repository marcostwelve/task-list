<h1 align="center"> API Tasklist </h1>

<p align="center">
  API Tasklist, é uma API criada no treinamento de criação de API´s com Node.
  Utilizando o Insomnia para testar o métodos HTTP, PostgreSQL, para salvar dados no banco de dados,
  cryptografando os dados sensíveis do usuário e validações.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

![Tasklist](https://github.com/marcostwelve/task-list/assets/94411600/a686cf2a-0a64-4356-90ca-e72430812b01)

<br/>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- JavaScript
- Node
- Express
- PostgreSQL
- Insomnia
- Git e Github


## 💻 Projeto

<p>
  API foi criada utilizando todos os métodos HTTP da API Rest.
</p>

 <h2>
   Método GET
 </h2>
 
 <p>
   É utilizado para listar todas as tarefas do usuário. Com validações de Token para verificar se o usuário
   na qual pertence a tarefe, é o mesmo que está logado
 </p>
 
 <h2>
   Método POST
 </h2>
 
 <p>
   Método para criar um novo usuário, com nome, e-mail e senha.
   Para criar uma nova tarefa, também é utilizado o método POST, com validação de token no login, para criar uma tarefa.
 </p>

 <h2>
   Método PUT
 </h2>

 <p>
   Método para atualizar cadastro de usuário, com validações no e-mail, na senha antiga e em uma nova senha que o usuário criar.
   Método para atualizar o status da tarefa, mudando de false (não concluído) para true (concluído). Com validação de token no login,
   para somente o usuário dono da tarefa, possa altera-lá
 </p>

 <h2>
   Método DELETE
 </h2>

 <p>
   Método para excluir as tarefas, independente da mesma estar concluída ou não.
   Validando com token de login, para somente o usuário dono da tarefa, possa deletar.
 </p>
 
