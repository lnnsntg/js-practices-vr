/* 
Dado un numero entero, inviertelo y devuelve de nuevo el entero
*/
/* 
function invertirNumero(numero) {
    return parseInt(numero.toString().split("").reverse().join("")) * Math.sign(numero)
}
console.log(invertirNumero(-1256));
 */
function invertirNumero(param) {
  return parseInt(param.toString().split("").reverse().join("")) * Math.sign(param);
}
console.log(invertirNumero(-1289));