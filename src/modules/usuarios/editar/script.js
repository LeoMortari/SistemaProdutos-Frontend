    function buscaUsuarioId() {
        let valor = document.getElementById('buscar').value;
        const getId = async () => (await getUsuariosId(valor))
        if (valor == null || valor == '') {
            return window.alert("Espaço em Branco!")

        }    
        console.log(valor)    
         getId(valor)

    }

        const usuarioId = async (userId) => {
        if (userId[0] == null ) {
            return window.alert("ID não registrado!")
        }

        let table = `<table id="tabela_usuario" class="table table-hover">
                        <thead class="thead" id="titulotab">
                            <tr scope="row">
                                <th colspan="1"></th>
                                <th colspan="1">CAMPO</th>
                             
                            </tr>
                        </thead>
                        <tbody id="tabBody">
                        </tbody>
                    </table>`;

        let linha1 = `<tr class="cursor">
                    <th scope="row">ID</th>
                    <td class="idUsuario">${userId[0].id_usuario_pk}</td>
                    </tr>
                    <tr class="cursor">
                    <th scope="row">NOME</th>
                    <td><input class="inputEditar" type="text" id="nome"></td>
                    </tr>
                    <tr class="cursor">
                    <th scope="row">CPF</th>
                    <td><input class="inputEditar" type="text" id="cpf"></td>
                    </tr>
                    <tr class="cursor">
                    <th scope="row">EMAIL</th>
                    <td><input class="inputEditar" type="text" id="email"></td>
                    </tr>
                    <tr class="cursor">
                    <th scope="row">SENHA</th>
                    <td><input class="inputEditar" type="password" id="senha"></td>
                    </tr>
                    <tr class="cursor">
                    <th scope="row">TELEFONE</th>
                    <td><input class="inputEditar" type="text" id="telefone"></td>
                    </tr>
                    <tr class="cursor">
                    <th scope="row">CEP</th>
                    <td><input class="inputEditar" type="text" id="cep"></td>
                    </tr>
                    <tr class="cursor">
                    <th scope="row">LOGRADOURO</th>
                    <td><input class="inputEditar" type="text" id="logradouro"></td>
                    </tr>
                    <tr class="cursor">
                    <th scope="row">BAIRRO</th>
                    <td><input class="inputEditar" type="text" id="bairro"></td>
                    </tr>
                    <tr class="cursor">
                    <th scope="row">NÚMERO</th>
                    <td><input class="inputEditar" type="number" id="numero"></td>
                    </tr>
                    <tr class="cursor">
                    <th scope="row">UF</th>
                    <td><input class="inputEditar" type="text" id="uf"></td>
                    </tr>
                    <tr class="cursor">
                    <th scope="row">CIDADE</th>
                    <td><input class="inputEditar" type="text" id="cidade"></td>
                    </tr>
                    <tr class="cursor">
                    <th scope="row">IBGE</th>
                    <td><input class="inputEditar" type="text" id="ibge"></td>
                    </tr>`;

        let botaoEnviar = `<button type="button" style="float: left"   class="div1" onclick="voltarIndex()">voltar</button>
        <button id="enviar" type="submit" style=" float: left" class="div1"  onclick="editar()">Enviar</button>`
        document.getElementById('tabela').innerHTML = table;
        document.getElementById('tabBody').innerHTML = linha1;
        document.getElementById('nome').value = userId[0].nome;
        document.getElementById('cpf').value = userId[0].cpf;
        document.getElementById('email').value = userId[0].email;
        document.getElementById('senha').value = userId[0].senha;
        document.getElementById('telefone').value = userId[0].telefone;
        document.getElementById('cep').value = userId[0].cep;
        document.getElementById('logradouro').value = userId[0].logradouro;
        document.getElementById('bairro').value = userId[0].bairro;
        document.getElementById('numero').value = userId[0].numero;
        document.getElementById('uf').value = userId[0].uf;
        document.getElementById('cidade').value = userId[0].cidade;
        document.getElementById('ibge').value = userId[0].ibge;
        document.getElementById('botao').innerHTML = botaoEnviar;


    }

//Função que captura todos os fields
    function getFields() {
        let obj = {};
        obj["id_usuario_pk"] = document.getElementById('buscar').value;
        obj["nome"] = document.getElementById("nome").value;
        obj["cpf"] = document.getElementById("cpf").value;
        obj["email"] = document.getElementById("email").value;
        obj["senha"] = document.getElementById("senha").value;
        obj["telefone"] = document.getElementById("telefone").value;
        obj["cep"] = document.getElementById("cep").value;
        obj["logradouro"] = document.getElementById("logradouro").value;
        obj["bairro"] = document.getElementById("bairro").value;
        obj["numero"] = document.getElementById("numero").value;
        obj["uf"] = document.getElementById("uf").value;
        obj["cidade"] = document.getElementById("cidade").value;
        obj["ibge"] = document.getElementById("ibge").value;
        

        return obj;
    }

    async function editar() {
        let usuario = getFields();
        let request = await patchUsuarios(usuario);

        if (!request) {
            throw new Error("Não foi possivel conectar ao backend");
        } else if (request.error) {
            throw new Error("Houve um erro de comunicação");
        }

        location.href = "../../index.html";

    }

    //volta para a pagina listagem geral
    function voltarIndex() {
        location.href = '../listar/index.html'
    }

    function Enviar(){
        if(document.getElementById("enviar")){
        document.getElementById("enviar").disabled = true;
    }
    
}
