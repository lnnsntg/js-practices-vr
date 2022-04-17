/* 
Dado un texto, devolver el carácter que más se repite.
*/
const parrafo = "Recibe consejos sobre cómo mejorar tu texto mientras escribes un correo electrónico, una publicación de blog o simplemente un tuit. Independientemente del idioma que estés utilizando, LanguageTool lo detectará";


function caracterMasUsado (texto) {
  let mapeo_letras = {};
  for (let index = 0; index < texto.length; index++) {
    letra = texto.charAt(index);
    if (mapeo_letras[letra]) {
      mapeo_letras[letra]++;

    } else {
      mapeo_letras[letra] = 1;
    }
  }
  return mapeo_letras;

}
// console.log(caracterMasUsado(parrafo));

