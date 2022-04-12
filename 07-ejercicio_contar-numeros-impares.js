/* 
Dados 2 numeros, devolver cuantos números impares hay entre ellos
*/

function contarImpares(inicio, fin) {
  let contador = 0;
  while (inicio < fin) {
    if (inicio % 2 !== 0) {
      contador++;
    }
    inicio++;
  }
  return contador;
}
console.log(contarImpares(1, 100));
