// Variável usada somente para teste, enquanto as demais API's não estão feitas
var pedidos = [
  { name: "X-Tudo", value: 18.9 },
  { name: "X-Frango", value: 14.5 },
  { name: "X-Salada", value: 10.9 },
  { name: "Misto quente", value: 5.9 },
  { name: "Coca-Cola 2Lts", value: 8.7 },
];

//Função que captura todos os fields
function getFields() {
  let obj = {};

  //Criação do objeto com todas as propriedades dos campos
  obj["infoFrete"] = document.getElementsByName("infoFrete");
  obj["frete"] = document.getElementsByName("frete");
  obj["tempoEntrega"] = document.getElementsByName("tempoEntrega");
  obj["valor"] = document.getElementsByName("valor");
  obj["quantidade"] = document.getElementsByName("quantidade");
  obj["listGroup"] = document.getElementsByClassName("list-group");
  obj["observacao"] = document.getElementById("observacao");

  return obj;
}

function goListar() {
  location.href = "./listar/index.html";
}

//Submit da tela
async function handleSubmit() {
  let pedido = getFields();

  try {
    pedido = extractValues(pedido);
    pedido = ajustaObjetos(pedido);

    //default: sucess = true, error = false;
    let request = await adicionaPedido(pedido);

    if (request.error) {
      throw new Error("Não foi possivel conectar ao backend");
    }
  } catch (error) {
    setInfoCep({ error: `Erro na API: ${error.message}` });
  }
}

function ajustaObjetos(obj) {
  obj.valor = convertValor(obj.valor);
  obj.quantidade = parseInt(obj.quantidade);
  obj.frete = convertValor(obj.frete);
  obj.tempoEntrega = parseInt(obj.tempoEntrega.split(" ")[0]);
  return obj;
}

//Trata o objeto de valores
function extractValues(obj) {
  let values = {};
  let divs = Object.entries(obj);

  divs.map((item) => {
    if (item[0] == "observacao") {
      values[item[0]] = item[1].value;
    } else if (item[1][0].value) {
      values[item[0]] = item[1][0].value;
    }
  });

  return values;
}

//Função que checa se as cidades são iguais
function checkCidades(cidades) {
  //Validação básica de localidade
  if (cidades) {
    return cidades[0].localidade === cidades[1].localidade;
  }

  return false;
}

//Função que dispara uma mensagem informativa na tela
function setInfoCep(cityError) {
  let field = getFields().infoFrete;

  //Validação de erros
  if (cityError?.error) {
    //Atibuição do card de erro
    field[0].insertAdjacentHTML(
      "afterend",
      `<div class="alert alert-danger d-flex justify-content-center" role="alert">${cityError.error}</div>`
    );
  } else {
    //Atibuição do card de informação
    field[0].insertAdjacentHTML(
      "afterend",
      '<div class="alert alert-primary d-flex justify-content-center" role="alert">Localidade não atendida</div>'
    );
  }
}

//Função que atribui o valor do frete
function calculaFrete(cidades) {
  let frete = getFields().frete;
  const PRECO_POR_KM = 1.75;

  //Validação de CEP
  if (cidades.cepsInfo && checkCidades(cidades.cepsInfo)) {
    frete[0].value = `R$${(cidades.distance * PRECO_POR_KM).toFixed(0)},00`;
  } else {
    setInfoCep(cidades);

    frete[0].value = "Não atendido";
    calculaTempoEntrega(cidades);
  }
}

//Função que calcula o tempo de entrega
function calculaTempoEntrega(distance) {
  let tempoEntrega = document.getElementsByName("tempoEntrega");

  const ENTREGA_MINIMA = 30;
  let entregaEstimada = ENTREGA_MINIMA;

  if (distance > 3) {
    entregaEstimada = ENTREGA_MINIMA * 2;
  }

  //Validação de erros
  if (!distance) {
    tempoEntrega[0].value = `Não atendido`;
  } else {
    tempoEntrega[0].value = `${entregaEstimada.toFixed(0)} minutos`;
  }
}

//Função que faz a listagem dos produtos selecionados
function listaPedidos() {
  var ul = getFields().listGroup;

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

  //Iteração do valor dos pedidos
  pedidos.map((pedido) => (total += pedido.value));

  let valor = getFields().valor;

  //Return do valor formatado
  valor[0].value = `R$${total.toFixed(2).replace(".", ",")}`;
}

//Função que soma a quantidade dos produtos selecionados
function somaQuantidade() {
  let quantidade = getFields().quantidade;

  quantidade[0].value = pedidos.length;
}
