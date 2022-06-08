// Variável usada somente para teste, enquanto as demais API's não estão feitas
var pedidos = [
  { name: "X-Tudo", value: 18.9 },
  { name: "X-Frango", value: 14.5 },
  { name: "X-Salada", value: 10.9 },
  { name: "Misto quente", value: 10.9 },
  { name: "Coca-Cola 2Lts", value: 8.7 },
];

//Função que atribui o valor do frete (Aleatório)
function calculaFrete(distance) {
  let frete = document.getElementsByName("frete");
  let PRECO_POR_KM = 1.75;

  frete[0].value = `R$${(distance * PRECO_POR_KM).toFixed(0)},00`;
}

//Função que calcula o tempo de entrega (Aleatório)
function calculaTempoEntrega() {
  //TODO: trocar o tempo para o tempo real com base na distancia
  let randomTempo = Math.random() * (120 - 30) + 30;

  let tempoEntrega = document.getElementsByName("tempoEntrega");

  tempoEntrega[0].value = `${randomTempo.toFixed(0)} minutos`;
}

//Função que faz a listagem dos produtos selecionados
function listaPedidos() {
  var ul = document.getElementsByClassName("list-group");

  pedidos.map((pedido) => {
    var name = `list-group-item d-flex justify-content-center`;

    let li = document.createElement("li");
    li.classList = name;

    li.innerHTML = pedido.name;

    ul[0].appendChild(li);
  });
}

//Função que soma os valores dos produtos selecionados
function somaValor() {
  let total = 0;

  pedidos.map((pedido) => (total += pedido.value));

  let valor = document.getElementsByName("valor");

  valor[0].value = `R$${total.toFixed(2).replace(".", ",")}`;
}

//Função que soma a quantidade dos produtos selecionados
function somaQuantidade() {
  let quantidade = document.getElementsByName("quantidade");

  quantidade[0].value = pedidos.length;
}
