/* 
Dado un numero entero, inviertelo y devuelve de nuevo el entero
*/

function invertirNumero(numero) {
    return parseInt(numero.toString().split("").reverse().join("")) * Math.sign(numero)
}
console.log(invertirNumero(-1256));
