const getHistoricoVendas = async () => {
    fetch(`http://localhost:3000/vendas`)
      .then((response) => response.json())
      .then((result) => historicoVenda(result))
      .catch((erro) => console.log("erro na request: " + erro))
}
