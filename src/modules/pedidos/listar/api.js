//Função que recupera o historico de poedidos no back-end
const getHistoricoPedidos = async (email) =>
  fetch(`http://localhost:3000/pedidos/listar/${email}`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.error("erro na request: ", error));
