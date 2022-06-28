




//Submit da tela e recarrega a pagina
async function adicionahandlefinan() {
  let ids = new Array();
  for (i = 0; i < 4; i++) {
    let { id } = document.querySelectorAll('td')[i];
    ids.push(id)

  }
     await adicionaFinanceiro(ids);
     location.href = "financeiross.html"

}

const getProdutoVenda = async () => (await getProdutoEstoque())

const getprodutos = async (result) => {

  //envia o obj para a request
  let obj = getProdutoVenda()
  console.log(obj)
};

//busca a financa por id para cadastrar
const teste = async () => {
  let valor = document.getElementById('buscar').value;
  let produtoVenda = await getVendasId(valor)
  let historico = await getProdutoVenda()

  let produtoUnico = produtoVenda[0].produtos;
  //separa os produto a cada virgula
  let prod = produtoUnico.split(',');
  let total = 0;

//soma o valor dos produtos do estoque apara calcular a despesa
  for (let i = 0; i < prod.length; i++) {
    for (let j = 0; j < historico.length; j++) {
      if (prod[i] == historico[j].descricao) {
        total += historico[j].valor;
      }
    }
  }
  let td = `<tr>
   <td id="${valor}">${valor}</td>
   <td id="${produtoVenda[0].valor}" >${produtoVenda[0].valor}</td>
   <td id="${total}">${total}</td>
   <td id="${produtoVenda[0].valor - total}">${produtoVenda[0].valor - total}</td>
   </tr>`
  document.getElementById('tabela').innerHTML = td;
       
  let bot ='<button class="btn btn-success" type="submit" onclick="adicionahandlefinan()"> Enviar</button>'
  document.getElementById("bot").innerHTML = bot
}

//lista todas as finanças
async function teste2() {
  let table = document.getElementById('tabela');
  let result = await getListar();
  result.map((lista) => {
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = lista.id_financeiro_pk;
    cell4.innerHTML = 'R$' + String(lista.ValorLucro.toFixed(2)).replace('.', ',');
    cell2.innerHTML = 'R$' + String(lista.ValorVenda.toFixed(2)).replace('.', ',');
    cell3.innerHTML = 'R$' + String(lista.ValorPedido.toFixed(2)).replace('.', ',');
    let botao = `<button class="btn btn-success" onclick="listaFinanceiroId(${lista.id_financeiro_pk})">Editar</button>`
    cell5.innerHTML = botao;
    
  });
}
//lista a finança selecionada para edição
async function listaFinanceiroId(id) {
  let result = await getFinanceiroId(id)
  result.map((lista) => {
    // lista.ValorLucro = 'R$' + String(lista .toFixed(2)).replace('.', ',');
    // lista.ValorVenda = 'R$' + String(lista.ValorVenda.toFixed(2)).replace('.', ',');
    // lista.ValorPedido = 'R$' + String(lista.ValorPedido.toFixed(2)).replace('.', ',');
  let linha = `<tr>
  <td><input type="number" id="id"></td>
  <td><input type="number" id="venda" onchange="calcularLucro()"></td>
  <td><input type="number" id="pedido" onchange="calcularLucro()"></td>
  <td><input type="number" id="lucro"></td>
  </tr>`
  document.getElementById('tabela').innerHTML = linha;
  document.getElementById('id').value = lista.id_financeiro_pk
  document.getElementById('id').disabled = true
  document.getElementById('venda').value = lista.ValorVenda
  document.getElementById('pedido').value = lista.ValorPedido
  document.getElementById('lucro').value = lista.ValorLucro;
  document.getElementById('lucro').disabled = true


});

}
//edita os dados ja cadastrados
async function editar() {
  let id = document.getElementById('id').value
  let venda = document.getElementById('venda').value
  let pedido = document.getElementById('pedido').value
  let lucro = document.getElementById('lucro').value

  //guarda os valores dentro de um array/vetor
  let valor = new Array(id,venda,pedido,lucro)
  try {
    //default: sucess = true, error = false;
    let request = await Editar(valor);

  } catch (error) {
    console.log(error)
  }
  location.href = "./financeiross.html"
 
}
//calcula o lucro cd vez que o valor for mudado na edição
function calcularLucro(){
  let venda = document.getElementById('venda').value;
  let pedido = document.getElementById('pedido').value;
  document.getElementById('lucro').value = venda - pedido;
}