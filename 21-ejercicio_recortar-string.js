/* 
Dada una cadena de texto y un numero, recortar el string mostrando los X primeros carácteres
*/
function recortar (texto, numero) {
  return texto.slice(0, numero);
}
console.log(recortar("Cursos de desarrollo", 6));


function recortar2(texto, numero) {
  if (typeof texto === 'string' && typeof numero === 'number') {
    return texto.substring(0, numero);
  }else{
    return "Datos incorrectos"
  }
}
console.log(recortar2("Tiempos de desarrollo", 6));