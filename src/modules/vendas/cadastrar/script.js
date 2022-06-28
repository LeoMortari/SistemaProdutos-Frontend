//pega o valor digitado no input buscar

//cria select
 async function criarselect(obj){  
    for( i = 0; i < obj.length ;i++){
        let opcao;
          opcao = `<option value="${obj[i].id_usuario_pk}">${obj[i].nome}</option>`;
          document.getElementById('selecionar1').innerHTML += opcao;
        }
        
    }

async function criarselectPedido(obj){ 
    for( i = 0; i < obj.length ;i++){
        let opcao;
          opcao = `<option>${obj[i].id_pk}</option>`;
          document.getElementById('selecionar2').innerHTML += opcao;
        }
        
    }

const vendaId = async () => {
    let table = `<table id="tabela_venda" class="table table-hover">
                    <thead class="thead" id="titulotab">
                        <tr scope="row">
                            <th colspan="1">NOME VENDEDOR</th>
                            <th colspan="1">ID PEDIDO</th>
                        </tr>
                    </thead>
                    <tbody id="tabBody">
                    </tbody>
                </table>`;

    let linha1 = `<tr class="cursor">
                <td><select id="selecionar1"></select></td>
                <td><select id="selecionar2"></select></td>
                </tr>`;
    let botaoEnviar = `<button type="button" class="btn btn-secondary" onclick="voltarIndex()">voltar</button>
    <button id="enviar" type="submit" class="btn btn-secondary" onclick="cadastrar()">Enviar</button>`
    document.getElementById('tabela').innerHTML = table;
    document.getElementById('tabBody').innerHTML = linha1;
    getNomeVendedor()
    getIdPedido()
    document.getElementById('botao').innerHTML = botaoEnviar;
}

//Função que captura todos os fields
function getFields() {
    let obj = {};

    //Criação do objeto com todas as propriedades dos campos
    obj["id_usuario_fk"] = document.getElementById("selecionar1").value;
    obj["id_pedido_fk"] = document.getElementById("selecionar2").value;

    console.log(obj)
    return obj;
}

async function cadastrar() {
    let venda = getFields();

        venda = ajustaObjetos(venda);

        //default: sucess = true, error = false;
        let request = await cadastraVenda(venda);
        if (!request) {
            throw new Error("Não foi possivel conectar ao backend");
        } else if (request.error) {
            throw new Error("Houve um erro de comunicação");
        }
        //TODO: alterar a rota a próxima tela
        location.href = "../index.html";
}

function ajustaObjetos(obj) {
    obj.id_usuario_fk = parseInt(obj.id_usuario_fk);
    obj.id_pedido_fk = parseInt(obj.id_pedido_fk);
    return obj;
}

function voltarIndex() {
    location.href = '../index.html'
}
