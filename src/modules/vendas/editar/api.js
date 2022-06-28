const getVendasId = async (id) => {
    fetch(`http://localhost:3000/vendas/${id}`)
      .then((response) => response.json())
      .then((result) => vendaId(result))
      .catch((erro) => console.log("erro na request: " + erro))
  }

  const getNomeVendedor = async () => {
    fetch(`http://localhost:3000/usuario1`)
      .then((response) => response.json())
      .then((result) => criarselect(result))
      .catch((erro) => console.log("erro na request: " + erro))
}

const getIdPedido = async () => {
  fetch(`http://localhost:3000/pedido1`)
    .then((response) => response.json())
    .then((result) => criarselectPedido(result))
    .catch((erro) => console.log("erro na request: " + erro))
}
  
  const patchVendas = async (venda) => {
    //Criando o Header
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
    //Criando o Body
   
    console.log(venda)
    var urlencoded = new URLSearchParams();
    urlencoded.append("id_usuario_fk", venda.id_usuario_fk);
    urlencoded.append("id_pedido_fk", venda.id_pedido_fk);
    //instanciando as opção da request
    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
  
    // Envio para a API e retornando para a página
     return fetch(`http://localhost:3000/vendas/${venda.id_venda_pk}`, requestOptions)
      .then((response) => response)
      .then((result) => result)
      .catch((error) => console.log("erro na request: ", error))
  
      
  }

