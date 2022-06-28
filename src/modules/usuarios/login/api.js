async function getUsuarioRequest(email, senha) {
  var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("email", email);
  urlencoded.append("senha", senha);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
    
  };
      return fetch("http://localhost:3000/usuarios/listar", requestOptions)
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => console.log("erro na request: ", error));
}
  