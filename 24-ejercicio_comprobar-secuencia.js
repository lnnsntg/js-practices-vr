/* 
Dado un array de enteros y un número, detectar si esa lista de números
es un permutación de 1 al numero aportado
*/

function comprobarSecuencia (array, numSec, com) {
  let contador = 0;
  let comutador = com;
  let esSecuencia = true;
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === (contador + comutador)) {
      // console.log(array[i]);
      esSecuencia = true;
      contador += comutador;
      index++;
      // console.log(contador);
    } else {
      esSecuencia = false;
      break;
    }
  }
  if (!esSecuencia) {
    console.log('aqui');
    return `La secuencia no es válida`;
  } if (numSec > index) {
    return `La secuencia No es válida`;
  } if (numSec < index) {
    return `La secuencia NO es válida`;
  } else {
    return `La secuencia ES válida`;
  }

}

console.log(comprobarSecuencia([2, 4, 6, 8], 4, 2));
