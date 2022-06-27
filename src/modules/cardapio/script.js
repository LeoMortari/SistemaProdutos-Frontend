const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sId = document.querySelector('m-id');
const sNome = document.querySelector('#m-nome');
const sDescricao = document.querySelector('#m-descricao');
const sPreco = document.querySelector('#m-preco');
const btnSalvar = document.querySelector('#btnSalvar');

let itens;
let id;

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = itens[index].nome
    sDescricao.value = itens[index].descricao
    sPreco.value = itens[index].preco
    id = index
  } else {
    sNome.value = ''
    sDescricao.value = ''
    sPreco.value = ''
  }

}

function editItem(index) {

  openModal(true, index)
}

// function deleteItem(index) {
//   itens.splice(index, 1)
//   setItensBD()
//   loadItens()
// }



// btnSalvar.onclick = e => {

//   if (sNome.value == '' || sDescricao.value == '' || sPreco.value == '') {
//     return
//   }

//   e.preventDefault();

//   if (id !== undefined) {

//     itens[id].nome = sNome.value
//     itens[id].descricao = sDescricao.value
//     itens[id].preco = sPreco.value
//   } else {
//     itens.push({'nome': sNome.value, 'descricao': sDescricao.value, 'preco': sPreco.value})
//   }

//   setItensBD()

//   modal.classList.remove('active')
//   loadItens()

// }

// function loadItens() {
//   itens = getItensBD()
//   tbody.innerHTML = ''
//   itens.forEach((item, index) => {
//     insertItem(item, index)
//   })

// }

// const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
// const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

// loadItens()

async function handleSubmit() {

  let obj = {};
  obj["descricao"] = document.getElementById("m-descricao").value;
  obj["nome"] = document.getElementById("m-nome").value
  obj["preco"] = document.getElementById("m-preco").value;



  console.log("dentro do handle: ", typeof obj.preco)
  //default: sucess = true, error = false;

  await adicionaCardapio(obj);

  location.href = "index.html"

}

async function getListar() {
  lista = await listarCardapio();
  
  console.log(typeof lista)

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


