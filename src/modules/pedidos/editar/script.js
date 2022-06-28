var pedidos = JSON.parse(sessionStorage.getItem("pedido"));

function goBack() {
  location.href = "../index.html";
}

function generateData() {
  let ul = document.getElementsByClassName("list-group");

  pedidos.map((pedido) => {
    var name = `list-group-item d-flex justify-content-center`;

    let li = document.createElement("li");
    li.classList = name;

    li.innerHTML = `${pedido.name} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <input 'class='col-1' id='${pedido.id}' type='number' value='${pedido.quantidade}' />`;

    ul[0].appendChild(li);
  });
}

async function handleSubmit() {
  let newPedidos;

  try {
    document.getElementById("btnSubmit").textContent = "Salvando...";
    newPedidos = pedidos.map((item) => {
      item.quantidade = document.getElementById(item.id).value;

      return item;
    });

    sessionStorage.setItem("newPedidos", JSON.stringify(newPedidos));
    console.log(newPedidos);
    let res = await editaPedido(
      newPedidos.map((item) => item.quantidade).length
    );

    if (!JSON.parse(res).sucess) {
      throw new Error("Ocorreu um erro");
    }

    setInterval(() => {
      document.getElementById("btnSubmit").textContent =
        "Voltando ao carrinho...";
    }, 2000);

    setInterval(() => {
      location.href = "../index.html";
    }, 4000);
  } catch (error) {
    console.log(error.message);
  }
}
