  async function adicionaUsuario(usuario) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
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
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
      };

    return fetch("http://localhost:3000/usuarios", requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("erro na request: ", error));
}

