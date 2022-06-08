//Calculo de distancia entre dois ceps
function getCepDistance(origin, destination) {
  const api = `https://distancep.herokuapp.com/distance/${origin}/${destination}`;

  //Retorna a Promisse
  return fetch(api).then((response) => response.json());
}
