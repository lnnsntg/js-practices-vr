/* 
Dado un número mostrar mostrar todos los numeros desde ese al cero en una
lista con guiones donde cada fila debe empezar con nº
*/
const print = restarHastaCero(100);

function restarHastaCero(numero) {
  salida = `--- Del ${numero}  al 0 --- \nnº --- ${numero} --- \n`;

  while (numero >= 8) {
    salida += `nº --- ${numero -= 8} --- \n`;
  }

  if (numero < 8 && numero != 0) {
    numero = 0;
    salida += `nº --- ${numero} --- \n`;
  }

  salida += `--- FIN ---`;
  return salida;
}

console.log(print);


/* 
function restarHastaCero(numero) {
  let salida = "--- Del " + numero + " al 0 ---" + "\n";
  while (numero > 0) {
    salida += `-- nº ${numero} \n`
    numero -= 8;
  }
  salida += `--- FIN ---`;
  return salida;
}

print = restarHastaCero(100);
console.log(print);
*/