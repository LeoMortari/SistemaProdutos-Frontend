const getUsuariosId = async (id) => {
    fetch(`http://localhost:3000/usuarios/${id}`)
      .then((response) => response.json())
      .then((result) => usuarioId(result))
      .catch((erro) => console.log("erro na request: " + erro))
  }
  
  const patchUsuarios = async (usuario) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
    var urlencoded = new URLSearchParams();
    urlencoded.append("id_usuario_pk", usuario.id_usuario_pk);
    urlencoded.append("nome", usuario.nome);
    urlencoded.append("cpf", usuario.cpf);
    urlencoded.append("email", usuario.email);
    urlencoded.append("senha", usuario.senha);
    urlencoded.append("telefone", usuario.telefone);
    urlencoded.append("cep", usuario.cep);
    urlencoded.append("logradouro", usuario.logradouro);
    urlencoded.append("bairro", usuario.bairro);
    urlencoded.append("numero", usuario.numero);
    urlencoded.append("uf", usuario.uf);
    urlencoded.append("cidade", usuario.cidade);
    urlencoded.append("ibge", usuario.ibge);

      var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
      };
  
     fetch(`http://localhost:3000/usuarios/${usuario.id_usuario_pk}`, requestOptions)
      .then((response) => response)
      .then((result) => result)
      .catch((error) => console.log("erro na request: ", error))
  
      window.alert(`Usuario "${usuario.id_usuario_pk}" editada com sucesso!`)
      location.href = '../listar/index.html'
  }
