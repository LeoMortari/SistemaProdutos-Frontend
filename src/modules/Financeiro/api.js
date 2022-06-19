
 


//Função de submit da página
async function adicionaFinanceiro(valor,valor2,valor3,valor4) {
    console.log(valor, valor2, valor3, valor4)
    //Criando o Header
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
    //Criando o Body
    var urlencoded = new URLSearchParams();
  
  
    urlencoded.append("Nome", valor);
    urlencoded.append("ValorVenda", valor3);
    urlencoded.append("ValorPedido", valor2);
    urlencoded.append("ValorLucro", valor4);
  
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



  async function calcularaLucro() {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
    //Criando o Body
    var urlencoded = new URLSearchParams();
  
  
    urlencoded.append("ValorLucro", valor);



    var ValorPedido = parseInt(document.getElementById('ValorPedido').value);
    var ValorVenda = parseInt(document.getElementById('ValorVenda').value);
    document.getElementById('ValorLucro').innerHTML = ValorVenda -ValorPedido 

 //instanciando as opção da request
 var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };


}
