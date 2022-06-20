//funcao para dar um efeito de carregamento de cada linha na tabela
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getVendas = async () => (await getHistoricoVendas())

// lista todos as vendas
const historicoVenda = async (userId) => {
    for (i = 0; i < userId.length; i++) {
        let data = new Date(userId[i].data)
        let formatData = data.getHours() + ":"
        + data.getMinutes() + " "
        + (data.getDate() + 1) + "/" 
        + (data.getMonth() + 1) + "/" 
        + data.getFullYear();
        await sleep(100)
        let linha = `<tr onclick="paginaEditar(${userId[i].id_venda_pk})">
            <td id="id${i}" value="${userId[i].id_venda_pk}">${userId[i].id_venda_pk}</td>
            <td>${formatData}</td>
            <td>${userId[i].vendedor}</td>   
            <td>${userId[i].produtos}</td>    
            <td>R$${userId[i].valor}</td>
            </tr>`;
        document.getElementById('tabBody').innerHTML += linha;
    }
};
// vai para a pagina buscar por id
function editarVenda(){
    location.href = '../editar/index.html'
}




  


