const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./routes")

const app = express()

//Tipos de rotas

// GET -> mostrar conteudo
// POST -> Cadastro de novas entidades
// PUT/PATCH -> Editar dados de uma entidade
// DELETE -> Deletar uma entidade

//Parametros de rotas
// Body { id: 1, nome: Marina}  -> { id, nome} = request.body
// Params "www.ead.com/id/01"   -> "/id/:id" -> { id } = request.params
// Query  "www.ead.com/nome?=marina" -> {nome} = request.query


app.use(bodyParser.json()) //server

app.use(routes)

app.listen(3000) //server
