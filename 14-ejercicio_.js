/* 
Dado un string y número, repetir el string tantas veces como en númeto indique.
*/

function repetir(texto, numero_repeticiones) {
  let resultado = "";
  for (let index = 0; index < numero_repeticiones; index++) {
    resultado += texto;
  }
  return resultado;
}


String.prototype.repetir = function(numero_repeticiones) {
  let resultado = "";
  for (let i = 0; i < numero_repeticiones; i++) {
    resultado += this
  }
  return resultado
};


console.log("numero_repeticiones".repetir(5));;

// console.log(repetir("lenin", 10));