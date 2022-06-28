async function editaPedido(pedido) {
  console.log("Pedido: ", pedido);
  //Criando o Header
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  //Criando o Body
  var urlencoded = new URLSearchParams();
  urlencoded.append("quantidade", pedido);

  //instanciando as opção da request
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  //Envio para a API e retornando para a página
  return fetch("http://localhost:3000/pedidos/editar", requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("erro na request: ", error));
}
