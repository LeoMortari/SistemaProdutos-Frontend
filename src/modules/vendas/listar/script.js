//funcao para dar um efeito de carregamento de cada linha na tabela
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getVendas = async () => (await getHistoricoVendas())

// lista todos as vendas
const historicoVenda = async (userId) => {

    if(userId.length == 0){
        window.alert("Nenhuma venda encontrada")
        location.href = '../index.html';
    }

    for (i = 0; i < userId.length; i++) {
        await sleep(100)
        let linha = `<tr>
            <td id="id${i}" value="${userId[i].id_venda_pk}">${userId[i].id_venda_pk}</td>
            <td>${userId[i].data}</td>
            <td>${userId[i].vendedor}</td>   
            <td>${userId[i].produtos}</td>    
            <td>R$${userId[i].valor}</td>
            </tr>`;
        document.getElementById('tabBody').innerHTML += linha;
    }
};
// vai para a pagina menu
function voltarIndex() {
    location.href = '../index.html'
}






  


