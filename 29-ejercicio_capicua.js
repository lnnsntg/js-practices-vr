/* 
Dado un número, indicar si es un número capicúa o no.
*/
function capicua(num) {
    return num === parseInt(num.toString().split("").reverse().join(""))
}
console.log(capicua(20988902));