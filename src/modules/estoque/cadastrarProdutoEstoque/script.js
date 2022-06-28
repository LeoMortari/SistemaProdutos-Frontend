function postCadastraProdutoEstoque(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}


function cadastrarProdutoEstoque() {
    let url = "http://localhost:3000/estoque/adiciona"
    let descricao = document.getElementById("descricao").value
    let quantidade = document.getElementById("quantidade").value
    let valor = document.getElementById("valor").value
    console.log(descricao)
    console.log(quantidade)
    console.log(valor)

    body = {
        "descricao": descricao,
        "quantidade": quantidade,
        "valor": valor
    }

    postCadastraProdutoEstoque(url, body)
    location.href = '../index.html'
}

function botaoVoltar() {
    location.href = '../index.html'
}