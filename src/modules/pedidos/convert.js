function convertValor(valor) {
  valor = valor.replace("R$", "");
  return parseFloat(valor.replace(",", "."));
}
