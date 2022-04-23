const parrafo = "Recibe consejos sobre cómo mejorar tu texto mientras escribes un correo electrónico, una publicación de blog o simplemente un tuit. Independientemente del idioma que estés utilizando, LanguageTool lo detectará";
let texto1 = "aEiou";
let texto2 = "hjklp";

/* 
function quitarAcentos (cadena) {
  const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U' };
  return cadena.split('').map(letra => acentos[letra] || letra).join('').toString();
}

function contarVocales (texto) {
  let numerosVocales = 0;

  let vocales = { a: true, e: true, i: true, o: true, u: true };

  quitarAcentos(texto).toLowerCase().split('').map((letra) => {
    if (vocales[letra]) {
      numerosVocales++;
    }
  });
  return numerosVocales;
}

console.log(contarVocales(parrafo)); 
*/

/*
Dada una cadena de texto, devolver cuantas vocales tiene.
*/
//Solución del curso
function contarVocalesCurso (texto) {
  let coincidencias = texto.match(/[aeiouáéíóú]/gi)
  return coincidencias ? coincidencias.length : 0
}
ma
console.log(contarVocalesCurso(texto2));