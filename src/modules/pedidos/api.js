//Calculo de distancia entre dois ceps
async function getDistance(origin, destination) {
  const api = `https://distancep.herokuapp.com/distance/${origin}/${destination}`;

  //Retorna a Promisse
  return await fetch(api).then((response) => response.json());
}
