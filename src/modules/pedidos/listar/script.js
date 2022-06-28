//Função que retrocede uma tela
const handleBack = () => (location.href = "../index.html");

//Escreve os dados no HTML
const generateData = (data) => {
  var accordion = document.getElementById("accordion");

  data.map((pedido, index) => {
    let date = pedido.data.split(" ")[0];
    let horas = pedido.data.split(" ")[1];

    var divCollapse = `<div class="card">
    <div class="card-header" id="heading${index}">
        <h5 class="mb-0">
            <p class="d-flex justify-content-center" data-toggle="collapse" style="cursor: pointer;" data-target="#collapse${index}"
                aria-expanded="true" aria-controls="collapse${index}">
                Pedido ${pedido.id_pk} feito no dia ${date} às ${horas}
            </p>
        </h5>
    </div>
  
    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
        data-parent="#accordion">
        <div class="card-body">
        Quantidade: ${pedido.quantidade} <br>
        
        Valor: R$${String(pedido.valor).replace(".", ",")}<br>

        Entrega: ${pedido.tempoEntrega} minutos<br>

        Frete: R$${String(pedido.frete).replace(".", ",")} <br>

        Observação: ${pedido.observacao || "Não possui"}

        </div>
    </div>
  </div>`;

    accordion.insertAdjacentHTML("beforeend", divCollapse);
  });
};

//Função que recupera cookies;
const getSessionName = (name) => sessionStorage.getItem(name);
