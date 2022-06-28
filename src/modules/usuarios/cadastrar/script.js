  function getFields() {
      let obj = {};
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

  async function handleSubmit() {
  
  let usuario = getFields();

  try {
    let testeusuario = Object.values(usuario); //retorna array os campos
    let keysusuario = Object.keys(usuario); //retorna array os dados do campo
    let text = "";
    //forEach percorre Array a cada item, faz uma verificação
    testeusuario.forEach((item, index) => {
      if(!item){
        text += `${keysusuario [index]}, `
      }
    } ) 
    console.log(text);
    let request = await adicionaUsuario(usuario);

    if(testeusuario.some(item => !item)){
      throw new Error(` Preencher os campos ${text}`);
    }
    if (!request) {
      throw new Error("Não conectado ao servidor");

    } else if (request.error) {
      throw new Error("Houve um erro");

    } else {
      location.href = "../login/index.html";
    }
  } catch (error) {
    alert(`Houve um erro: ${error.message}` );
  }
}

function RetornarLogin() {
  location.href = '../login/index.html'
}