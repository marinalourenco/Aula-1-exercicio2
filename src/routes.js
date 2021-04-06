const express = require("express")

const routes = express()

//routes.get("/", HelloWordControllerg.index)

routes.get("/",function(request, response){
    const data = {message: "hello word"}
    return response.json(data)
})

routes.get("/primeiraQuestao", function(request, response){
    const moedaBrl  = request.body.moedaBrl
    const moedaDolar = Number(moedaBrl)/3.27;
    return response.json({moedaDolar})

})

routes.get("/segundaQuestao",function(request, response){
    const largura = request.body.largura
    const altura = request.body.altura
    const area = largura*altura
    const qnttinta = area/2
    return response.json({area, qnttinta})
})

routes.get("/terceiraQuestao",function(request, response){
    const precoAtual = request.body.precoAtual
    const precoComDesconto = precoAtual*0.95
    return response.json({precoComDesconto})
})

routes.get("/quartaQuestao",function(request, response){
    const nome = request.body.nome
    const sobrenome = request.body.sobrenome
    const salario = request.body.salario
    const aumento = salario*1.15
    const nomeCompleto = {nome,sobrenome}
    return response.json({nomeCompleto, aumento})
})

routes.get("/quintaQuestao",function(request, response){
    const metro = request.body.metro
    const centimetro = metro*100
    const milimetro = metro*1000
    return response.json({centimetro, milimetro})
})

routes.get("/sextaQuestao",function(request, response){
    const quilometragem = request.body.quilometragem
    const periodo = request.body.periodo
    const precoDias = periodo*60
    const precoKm = quilometragem*0.15
    const valorAluguel = precoDias+precoKm
    return response.json({valorAluguel})
})

routes.get("/setimaQuestao",function(request, response){
    const {primeiroValor, segundoValor, terceiroValor} = request.body
    const primeiroResultado = (primeiroValor+terceiroValor) > segundoValor
    const segundoResultado = segundoValor >= (primeiroValor+2)
    const terceiroResultado = terceiroValor === (segundoValor- primeiroValor)
    const quartoResultado = (segundoValor+primeiroValor)<= terceiroValor
    const quintoResultado = (terceiroValor+primeiroValor)>segundoValor
    return response.json({primeiroResultado, segundoResultado, terceiroResultado, quartoResultado, quintoResultado})
})

routes.get("/oitavaQuestao",function(request, response){
    const {x} = request.body
    if (x%8>5) {
        return response.json({resultado:true})
    } else {
        return response.json({resultado:false})
    }
   
})

routes.get("/nonaQuestao",function(request, response){
    const {idade} = request.body
    const dias = idade*365
    return response.json({dias})
})

//rotas
routes.get("/decimaQuestao",function(request, response){
    const {votosValidos, votosNulos, votosBrancos} = request.body // controllers
    const totalVotos = votosBrancos+votosNulos+votosValidos // serviços
    const percentualVotosValidos = votosValidos/totalVotos *100 // serviços
    const percentualVotosBrancos = votosBrancos/totalVotos *100 // serviços
    const percentualVotosNulos = votosNulos/totalVotos *100 // serviços
    return response.json({totalVotos, percentualVotosValidos, percentualVotosBrancos, percentualVotosNulos}) // controllers
})

module.exports = routes