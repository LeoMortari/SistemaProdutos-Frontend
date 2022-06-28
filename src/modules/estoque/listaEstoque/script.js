function getListaEstoque(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criaLinha(produtosNoEstoque) {
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdDescricao = document.createElement("td");
    tdQuantidade = document.createElement("td");
    tdValor = document.createElement("td");

    tdId.innerHTML = produtosNoEstoque.id_pk
    tdDescricao.innerHTML = produtosNoEstoque.descricao
    tdQuantidade.innerHTML = produtosNoEstoque.quantidade
    tdValor.innerHTML = produtosNoEstoque.valor

    linha.appendChild(tdId);
    linha.appendChild(tdDescricao);
    linha.appendChild(tdQuantidade);
    linha.appendChild(tdValor);

    return linha;
}

function listaProdutosEstoque() {
    data = getListaEstoque("http://localhost:3000/estoque/listar");
    
    produtosNoEstoque = JSON.parse(data);
    let tabela = document.getElementById("table")

    produtosNoEstoque.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

function listaProdutosEstoqueId() {
    let id = document.getElementById("idProdutoEstoque").value
    data = getListaEstoque("http://localhost:3000/estoque/listar/" + id);
    
    produtosNoEstoque = JSON.parse(data);
    let tabela = document.getElementById("table")

    produtosNoEstoque.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

function botaoCadastrar() {
    location.href = 'cadastrarProdutoEstoque/index.html'
}

function botaoDeletar() {
    location.href = './deletarProdutoDoEstoque/index.html'
}

function botaoEditar() {
    location.href = './EditarEstoque/index.html'
}

listaProdutosEstoque()