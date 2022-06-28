
function putEditarProdutoEstoque(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("PUT", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

function editarProdutoEstoque() {
    let id = document.getElementById("idProdutoEstoque").value
    let url = "http://localhost:3000/estoque/atualiza/" + id
    let descricao = document.getElementById("descricao").value
    let quantidade = document.getElementById("quantidade").value
    let valor = document.getElementById("valor").value

    body = {
        "descricao": descricao,
        "quantidade": quantidade,
        "valor": valor
    }

    putEditarProdutoEstoque(url, body)
    location.href = '../index.html'
}

function botaoVoltar() {
    location.href = '../index.html'
}