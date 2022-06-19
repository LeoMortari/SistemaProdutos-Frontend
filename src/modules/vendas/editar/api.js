const getVendasId = async (id) => {
    fetch(`http://localhost:3000/vendas/${id}`)
      .then((response) => response.json())
      .then((result) => vendaId(result))
      .catch((erro) => console.log("erro na request: " + erro))
  }
  
  const patchVendas = async (venda) => {
    //Criando o Header
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
    //Criando o Body
   
    console.log(venda)
    var urlencoded = new URLSearchParams();
    urlencoded.append("id_usuario_fk", venda.id_usuario_fk);
    urlencoded.append("id_pedido_fk", venda.id_pedido_fk);
    //instanciando as opção da request
    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
  
    // Envio para a API e retornando para a página
     fetch(`http://localhost:3000/vendas/${venda.id_venda_pk}`, requestOptions)
      .then((response) => response)
      .then((result) => result)
      .catch((error) => console.log("erro na request: ", error))
  
      window.alert(`Venda "${venda.id_venda_pk}" editada com sucesso!`)
      location.href = '../listar/index.html'
  }

