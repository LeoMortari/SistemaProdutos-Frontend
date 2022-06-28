const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sId = document.querySelector('#m-id');
const sNome = document.querySelector('#m-nome');
const sDescricao = document.querySelector('#m-descricao');
const sPreco = document.querySelector('#m-preco');
const btnSalvar = document.querySelector('#btnSalvar');


async function openModal(edit = false, index) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {

    const cardapio = async () => (await listarCardapioId(index))
    let lista = await cardapio(index)
      lista.forEach(item => {
        sId.value = item.id_pk
        sNome.value = item.nome
        sDescricao.value = item.descricao
        sPreco.value = item.preco
      })
  }

}

function editItem(index) {
  openModal(true, index)
}

//captura e envia os dados do input para a api
async function handleSubmit() {
  let id_pk = document.getElementById("m-id").value;
  let obj = {};
  // se o id existir, ele irá editar o cardapio, e se não existir, irá cadastrar os dados no cardapio
  if(id_pk != '' && id_pk!= null){
    obj["id_pk"] = id_pk
    console.log("passou id: ", obj.id_pk)
  obj["descricao"] = document.getElementById("m-descricao").value;
  obj["nome"] = document.getElementById("m-nome").value
  obj["preco"] = document.getElementById("m-preco").value;
  }else{
  obj["descricao"] = document.getElementById("m-descricao").value;
  obj["nome"] = document.getElementById("m-nome").value
  obj["preco"] = document.getElementById("m-preco").value;
  }

  await adicionaCardapio(obj);

  location.href = "index.html"

}

//lista o cardapio
async function getListar() {
  lista = await listarCardapio();

  lista.map((item) => {
    let tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${item.id_pk}</td>
      <td>${item.nome}</td>
      <td>${item.descricao}</td>
      <td>R$ ${item.preco}</td>
      <td class="acao">
        <button onclick="editItem(${item.id_pk})"><i class='bx bx-edit' ></i></button>
      </td>
      <td class="acao">
        <button onclick="deleteItem(${item.id_pk})"><i class='bx bx-trash'></i></button>
      </td>
    `
    tbody.appendChild(tr)
  })
}


