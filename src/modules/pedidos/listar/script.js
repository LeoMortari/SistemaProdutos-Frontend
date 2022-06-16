//Função que retrocede uma tela
const handleBack = () => (location.href = "../index.html");

//Escreve os dados no HTML
const generateData = (data) => {
  var ul = document.getElementById("list-group");

  data.map((pedido) => {
    var name = `list-group-item d-flex justify-content-center mb-2`;

    let li = document.createElement("li");
    li.classList = name;

    li.innerHTML = `Pedido: ${pedido.id_pk} | Quantidade: ${
      pedido.quantidade
    } | Valor: R$${String(pedido.valor).replace(".", ",")} | Entrega: ${
      pedido.tempoEntrega
    } minutos | Frete: R$${String(pedido.frete).replace(
      ".",
      ","
    )} | Observação: ${pedido.observacao || "Não possui"}`;

    ul.appendChild(li);
  });
};

//Função que recupera cookies;
const getSessionName = (name) => sessionStorage.getItem(name);
