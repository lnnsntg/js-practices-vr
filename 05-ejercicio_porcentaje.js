/* 
¿Cuanto es el X porciento de X numero?

*/

function porcentaje(porcentaje, numero) {
    return `El ${porcentaje} por ciento de ${numero} es ${numero * porcentaje / 100}`
}
console.log(porcentaje(30,2000));