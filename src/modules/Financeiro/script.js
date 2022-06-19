

 

  
  //Submit da tela
  async function adicionahandlefinan() {
      
    let Nome = document.getElementById("name").value
    let ValorPedido = document.getElementById("Valor_Pedido").value
    let ValorVenda = document.getElementById("Valor_Venda").value
  
    try {
      
      //default: sucess = true, error = false;
      let request = await adicionaFinanceiro(Nome,ValorPedido,ValorVenda,(ValorVenda - ValorPedido));
  
      
    } catch (error) {
     console.log(error)
    }
  


 }
  
  
 async function calcularaLucro() {
    var ValorPedido = parseInt(document.getElementById('Valor_Pedido').value);
    var ValorVenda = parseInt(document.getElementById('Valor_Venda').value);
    document.getElementById('Valor_Lucro').innerHTML = ValorVenda -ValorPedido }
  
    
