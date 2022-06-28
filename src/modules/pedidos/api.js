//Calculo de distancia entre dois ceps
async function getCepDistance(origin, destination) {
  const api = `https://distancep.herokuapp.com/distance/${origin}/${destination}`;

  //Retorna a Promisse
  return fetch(api).then((response) => response.json());
}

//Função de submit da página
async function adicionaPedido(pedido) {
  //Criando o Header
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  //Criando o Body
  var urlencoded = new URLSearchParams();
  urlencoded.append("produtos", pedido.produtos);
  urlencoded.append("quantidade", pedido.quantidade);
  urlencoded.append("tempoEntrega", pedido.tempoEntrega);
  urlencoded.append("frete", pedido.frete);
  urlencoded.append("valor", pedido.valor);
  urlencoded.append("observacao", pedido.observacao);
  urlencoded.append("email", pedido.email);

  //instanciando as opção da request
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  //Envio para a API e retornando para a página
  return fetch("http://localhost:3000/pedidos/adicionar", requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("erro na request: ", error));
}

async function getUsuarioRequest(email, senha) {
  //Criando o Header
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  //Criando o Body
  var urlencoded = new URLSearchParams();
  urlencoded.append("email", email);
  urlencoded.append("senha", senha);

  //instanciando as opção da request
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  //Envio para a API e retornando para a página
  return fetch("http://localhost:3000/usuarios/listar", requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("erro na request: ", error));
}
