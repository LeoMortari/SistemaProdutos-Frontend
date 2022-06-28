



//Função de submit da página
async function adicionaFinanceiro(valor) {
  //Criando o Header
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  //Criando o Body
  var urlencoded = new URLSearchParams();


  urlencoded.append("id_venda_fk", valor[0]);
  urlencoded.append("ValorVenda", valor[1]);
  urlencoded.append("ValorPedido", valor[2]);
  urlencoded.append("ValorLucro", valor[3]);

  //instanciando as opção da request
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };



  //Envio para a API e retornando para a página
  return fetch("http://localhost:3000/financeiro/adcionar", requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("erro na request: ", error));
}







const getProdutoEstoque = async () => (
  fetch(`http://localhost:3000/estoque1`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((erro) => console.log("erro na request: " + erro))
)

const getVendasId = async (id) => (
  fetch(`http://localhost:3000/vendas/${id}`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((erro) => console.log("erro na request: " + erro))
)

// função que lista o financeiro
const getListar = async () => (
  fetch(`http://localhost:3000/financeiros`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((erro) => console.log("erro na request: " + erro))
)

const getFinanceiroId = async (id) => (
  fetch(`http://localhost:3000/BuscarId/${id}`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((erro) => console.log("erro na request: " + erro))
)



async function Editar(valor) {
  //Criando o Header
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  //Criando o Body
  var urlencoded = new URLSearchParams();
  urlencoded.append("ValorVenda", valor[1]);
  urlencoded.append("ValorPedido", valor[2]);
  urlencoded.append("ValorLucro", valor[3]);

  //instanciando as opção da request
  var requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };



  //Envio para a API e retornando para a página
  return fetch(`http://localhost:3000/financeiro/editar/${valor[0]}`, requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("erro na request: ", error));
}
