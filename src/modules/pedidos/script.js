// Variável usada somente para teste, enquanto as demais API's não estão feitas
var newPedidos = sessionStorage.getItem("newPedidos");
var pedidos = newPedidos
  ? JSON.parse(newPedidos)
  : [
      { id: 1, name: "X-Tudo", value: 18.9, quantidade: 1 },
      { id: 2, name: "X-Frango", value: 14.5, quantidade: 2 },
      { id: 3, name: "X-Salada", value: 10.9, quantidade: 1 },
      { id: 4, name: "Misto quente", value: 5.9, quantidade: 2 },
      { id: 5, name: "Coca-Cola 2Lts", value: 8.7, quantidade: 1 },
      { id: 6, name: "Bom-Bom", value: 1.2, quantidade: 1 },
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

async function goEditar() {
  sessionStorage.setItem("pedido", JSON.stringify(pedidos));

  let pedido = getFields();
  let produtos = pedidos.map((item) => String(item.id)).join(",");
  let email = sessionStorage.getItem("email");

  try {
    pedido = extractValues(pedido);
    pedido = ajustaObjetos(pedido);

    let request = await adicionaPedido({ ...pedido, produtos, email });
    console.log(request);

    if (!JSON.parse(request).sucess) {
      throw new Error("Sem acesso ao banco de dados");
    }

    location.href = "./editar/index.html";
  } catch (error) {
    setInfoCep({ error: `Houve um erro: ${error.message}` });
  }
}

function btnSubmit(submit) {
  let btn = document.getElementById("btnSubmit");

  if (submit) {
    btn.disabled = true;
    btn.textContent = "Carregando...";
  } else {
    btn.disabled = false;
    btn.textContent = "Realizar Pedido";
  }
}

//Submit da tela
async function handleSubmit() {
  let pedido = getFields();
  let produtos = pedidos.map((item) => String(item.id)).join(",");
  let email = sessionStorage.getItem("email");
  btnSubmit(true);

  try {
    pedido = extractValues(pedido);
    pedido = ajustaObjetos(pedido);

    //default: sucess = true, error = false;
    let request = await adicionaPedido({ ...pedido, produtos, email });

    if (!request) {
      throw new Error("Não foi possivel conectar ao servidor");
    } else if (request.error) {
      throw new Error("Houve um erro");
    } else {
      //TODO: alterar a rota a próxima tela
      location.href = "../../index.html";
    }
  } catch (error) {
    setInfoCep({ error: `Houve um erro: ${error.message}` });
  } finally {
    btnSubmit(false);
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

    li.innerHTML = pedido.name + "  x" + pedido.quantidade;

    ul[0].appendChild(li);
  });
}

//Função que soma os valores dos produtos selecionados
function somaValor() {
  let total = 0;

  //Iteração do valor dos pedidos
  pedidos.map((pedido) => (total += pedido.value * pedido.quantidade));

  let valor = getFields().valor;

  //Return do valor formatado
  valor[0].value = `R$${total.toFixed(2).replace(".", ",")}`;
}

//Função que soma a quantidade dos produtos selecionados
function somaQuantidade() {
  let quantidade = getFields().quantidade;

  quantidade[0].value = pedidos.length;
}
