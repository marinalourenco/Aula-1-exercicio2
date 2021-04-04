const express = require("express")
const bodyParser = require("body-parser")

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


app.use(bodyParser.json())

app.get("/",function(request, response){
    const data = {message: "hello word"}
    response.json(data)
})

app.get("/primeiraQuestao", function(request, response){
    const moedaBrl  = request.body.moedaBrl
    const moedaDolar = Number(moedaBrl)/3.27;
    response.json({moedaDolar})

})

app.get("/segundaQuestao",function(request, response){
    const largura = request.body.largura
    const altura = request.body.altura
    const area = largura*altura
    const qnttinta = area/2
    response.json({area, qnttinta})
})

app.get("/terceiraQuestao",function(request, response){
    const precoAtual = request.body.precoAtual
    const precoComDesconto = precoAtual*0.95
    response.json({precoComDesconto})
})

app.listen(3000)
