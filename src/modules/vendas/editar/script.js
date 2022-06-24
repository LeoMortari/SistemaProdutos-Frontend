//pega o valor digitado no input buscar
function buscaVendaId() {
    let valor = document.getElementById('buscar').value;
    const getId = async () => (await getVendasId(valor))
    getId(valor)
}

//cria select
 async function criarselect(obj){ 
    let id = document.getElementById('buscar').value;
    
    for( i = 0; i < obj.length ;i++){
        let opcao;
        console.log(obj[i].vendedor);
        if(id == obj[i].id_usuario_pk){
          opcao = `<option value="${obj[i].id_usuario_pk}" selected>${obj[i].vendedor}</option>`;
          document.getElementById('selecionar').innerHTML += opcao;
        }else{
          opcao = `<option value="${obj[i].id_usuario_pk}">${obj[i].vendedor}</option>`;
          document.getElementById('selecionar').innerHTML += opcao;
        }
        
    }
}

//lista venda por id
const vendaId = async (userId) => {
    if (userId[0] == null) {
        return window.alert("ID não registrado!")
    }

    let table = `<table id="tabela_venda" class="table table-hover">
                    <thead class="thead" id="titulotab">
                        <tr scope="row">
                            <th colspan="1">ID</th>
                            <th colspan="1">ID VENDEDOR</th>
                            <th colspan="1">ID PEDIDO</th>
                        </tr>
                    </thead>
                    <tbody id="tabBody">
                    </tbody>
                </table>`;

    let linha1 = `<tr class="cursor">
                <td class="idVenda">${userId[0].id_venda_pk}</td>
                <td><select id="selecionar"></select></td>
                <td><input class="inputEditar" type="number" id="pedidoId"></td>
                </tr>`;
    let botaoEnviar = `<button type="button" class="btn btn-success" onclick="voltarIndex()">voltar</button>
    <button id="enviar" type="submit" class="btn btn-success" onclick="editar()">Enviar</button>`
    document.getElementById('tabela').innerHTML = table;
    document.getElementById('tabBody').innerHTML = linha1;
    getNomeVendedor()
    document.getElementById('pedidoId').value = userId[0].id_pedido_fk;
    document.getElementById('botao').innerHTML = botaoEnviar;
    

}

//Função que captura todos os fields
function getFields() {
    let obj = {};

    //Criação do objeto com todas as propriedades dos campos
    obj["id_venda_pk"] = document.getElementById('buscar').value;
    obj["id_usuario_fk"] = document.getElementById("selecionar").value;
    obj["id_pedido_fk"] = document.getElementById("pedidoId").value;

    console.log(obj)
    return obj;
}

async function editar() {
    let venda = getFields();

        venda = ajustaObjetos(venda);

        //default: sucess = true, error = false;
        let request = await patchVendas(venda);

        if (!request) {
            throw new Error("Não foi possivel conectar ao backend");
        } else if (request.error) {
            throw new Error("Houve um erro de comunicação");
        }
        //TODO: alterar a rota a próxima tela
        location.href = "../../index.html";

}

function ajustaObjetos(obj) {
    obj.id_venda_pk = parseInt(obj.id_venda_pk);
    obj.id_usuario_fk = parseInt(obj.id_usuario_fk);
    obj.id_pedido_fk = parseInt(obj.id_pedido_fk);
    return obj;
}

//volta para a pagina listagem geral
function voltarIndex() {
    location.href = '../listar/index.html'
}

function bloquearEnviar(){
    if(document.getElementById("enviar")){
        document.getElementById("enviar").disabled = true;
    }
    
}
