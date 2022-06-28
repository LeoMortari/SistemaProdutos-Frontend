const getUsuarios = async () => (await getListarUsuarios())

const ListarUsuario = async (userId) => {
        for (i = 0; i < userId.length; i++) {
            let linha = `<tr onclick="paginaEditar(${userId[i].id_usuario_pk})">
                <td id="id${i}" value="${userId[i].id_usuario_pk}">${userId[i].id_usuario_pk}</td>
                <td nome="nome${i}" value="${userId[i].nome}">${userId[i].nome}</td>
                <td cpf="cpf${i}" value="${userId[i].cpf}">${userId[i].cpf}</td>
                <td email="email${i}" value="${userId[i].email}">${userId[i].email}</td>
                <td senha="senha${i}" value="${userId[i].senha}">${userId[i].senha}</td>
                <td telefone="telefone${i}" value="${userId[i].telefone}">${userId[i].telefone}</td>
                <td cep="cep${i}" value="${userId[i].cep}">${userId[i].cep}</td>
                <td logradouro="logradouro${i}" value="${userId[i].logradouro}">${userId[i].logradouro}</td>
                <td bairro="bairro${i}" value="${userId[i].bairro}">${userId[i].bairro}</td>
                <td numero="numero${i}" value="${userId[i].numero}">${userId[i].numero}</td>
                <td uf="uf${i}" value="${userId[i].uf}">${userId[i].uf}</td>
                <td cidade="cidade${i}" value="${userId[i].cidade}">${userId[i].cidade}</td>
                <td ibge="ibge${i}" value="${userId[i].ibge}">${userId[i].ibge}</td>
                </tr>`;
                document.getElementById('tabBody').innerHTML += linha;
        }
  };

    function editarVenda(){
    location.href = '../editar/index.html'
    }

    function RetornaLogin(){
    location.href = '../login/index.html'
    }

