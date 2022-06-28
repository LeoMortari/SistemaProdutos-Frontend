const getListarUsuarios = async () => {
    fetch(`http://localhost:3000/usuarios`)
      .then((response) => response.json())
      .then((result) => ListarUsuario(result))
      .catch((erro) => console.log("erro na request: " + erro))
}