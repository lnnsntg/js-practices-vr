/* 
Dado un número, mostrar todos sus divisores
*/
function divisores (num) {
  let divisor = 1;
  let print = "";
  for (let index = 0; index <= num; index++) {
    if (num % divisor === 0) {
      print += `${divisor} es divisor de ${num}`;
    }
    if (num % divisor === 0 && !(num === divisor)) {
      print += (`\n`);
    }
    divisor++;
  }
  return print;
}
console.log(divisores(15));