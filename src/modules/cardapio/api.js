async function adicionaCardapio(cardapio) {
    //Criando o Header
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
    //Criando o Body

    // se o id existir, irá editar o cardapio, 
    if(cardapio.id_pk != undefined && cardapio.id_pk != null){
      var urlencoded = new URLSearchParams();
    urlencoded.append("id_pk", cardapio.id_pk);
    urlencoded.append("descricao", cardapio.descricao);
    urlencoded.append("nome", cardapio.nome);
    urlencoded.append("preco", cardapio.preco);

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
  
    //Envio para a API e retornando para a página
    return fetch(`http://localhost:3000/cardapio/editar/${cardapio.id_pk}`, requestOptions)
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => console.log("erro na request: ", error));

    }else{
      var urlencoded = new URLSearchParams();
    urlencoded.append("descricao", cardapio.descricao);
    urlencoded.append("nome", cardapio.nome);
    urlencoded.append("preco", cardapio.preco);
    console.log("passou pelo cadastrar: ", cardapio)
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
  
    //Envio para a API e retornando para a página
    return fetch("http://localhost:3000/cardapio/adiciona", requestOptions)
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => console.log("erro na request: ", error));
    }
  
    //instanciando as opção da request

  }
  //lista o cardapio geral
  listarCardapio = async () => 
   fetch("http://localhost:3000/cardapio/listar")
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("erro na request: ", error));


// busca o cardapio por id para edita-lo
    listarCardapioId = async (id) => 
    fetch(`http://localhost:3000/cardapio/listar/${id}`)
     .then((response) => response.json())
     .then((result) => result)
     .catch((error) => console.log("erro na request: ", error));
  