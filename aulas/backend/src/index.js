const express = require('express');
const cors = require('cors'); 

/** Importando as rotas */
const routes = require('./routes');

const app = express();
app.use(cors());

/**Define que o retorno do objeto será do tipo json */
app.use(express.json());
app.use(routes);

/**
 * Rota - o todo, exemplo: localhost:3333/users
 * Recurso - geralmente associado a uma tabela do banco
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criara uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query (request.query): Parâmetros nomeados e enviados na rota após "?" (Filtros, paginação)
   * Route Params (request.params): Parâmetros utilizados para identificar recursos
   * Request Body (request.body): Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MYSQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc.
    */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */

app.listen(3333);