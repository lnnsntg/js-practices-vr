/* 
Dado dos cadenas de texto, crear algoritmo que compruebe si son anagramas entre si.
( Una cadena es anagrama de otra, si usa los mismos carácteres y en la misma cantidad )
*/
/* 
 1_ Limpiar la cadena de texto de signos de puntuación, espacios, etc
 2_ Pasarla a minusculas
 3_ Aplicar split y convertir en matriz
 4_ Ordenarla con metodo short 
 5_ Comparar ambas cadenas
*/

let sergio = "lenin";
let riesgo = "niné  ñ l?";
const texto_vocales2 = "áoéáíottAaíuúñ";

function limpiarTildesCaracteres (texto) {
  return texto.toLowerCase()
    .split("")
    .map(letra => {
      arr = letra.replace(new RegExp(/\s/g), "")
      .replace(new RegExp(/[àáâãäå]/g), "a")
      .replace(new RegExp(/æ/g), "ae")
      .replace(new RegExp(/ç/g), "c")
      .replace(new RegExp(/[èéêë]/g), "e")
      .replace(new RegExp(/[ìíîï]/g), "i")
      .replace(new RegExp(/[òóôõö]/g), "o")
      .replace(new RegExp(/œ/g), "oe")
      .replace(new RegExp(/[ùúûü]/g), "u")
      .replace(new RegExp(/[ýÿ]/g), "y")
      .replace(new RegExp(/\W/g), "") 
      return arr;
    });
}
// console.log(limpiarTildesCaracteres(texto_vocales2));
function anagrama (texto1, texto2) {
  let primerTexto = limpiarTildesCaracteres(texto1).sort().join("");

  let segundoTexto = limpiarTildesCaracteres(texto2).sort().join("");
  console.log(primerTexto);
  console.log(segundoTexto);
  return (primerTexto == segundoTexto)
    ? "ES ANAGRAMA"
    : "NO es anagrama";
}
console.log(anagrama(sergio, riesgo));