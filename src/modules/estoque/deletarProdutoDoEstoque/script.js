function getDeletaEstoque(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function deletaProdutosEstoque() {
    let id = document.getElementById("idProdutoEstoque").value
    data = getDeletaEstoque("http://localhost:3000/estoque/deletar/" + id);
    location.href = '../index.html'
}

function botaoVoltar() {
    location.href = '../index.html'
}