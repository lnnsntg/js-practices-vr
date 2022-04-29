import { quitarAcentos2 } from "./modulo.mjs";

const parrafo = "Recibe consejos sobre cómo mejorar tu texto mientras escribes un correo electrónico, una publicación de blog o simplemente un tuit. Independientemente del idioma que estés utilizando, LanguageTool lo detectará";

function caracterMasUsado (texto) {
  texto = quitarAcentos2(texto);
  let mapeo_letras = {};
  let maximo_repeticiones = 0;
  let letra_mas_repetida = '';
  for (let index = 0; index < texto.length; index++) {
    let letra = texto.charAt(index);

    if (mapeo_letras[letra]) {
      mapeo_letras[letra]++;
    } else {
      mapeo_letras[letra] = 1;
    }
    
  }
  console.log(mapeo_letras);

  for (let letra in mapeo_letras) {
    if (mapeo_letras[letra] > maximo_repeticiones) {
      maximo_repeticiones = mapeo_letras[letra];
      letra_mas_repetida = letra;
    }
  }

  // let obj = {};
  // obj[letra_mas_repetida] = maximo_repeticiones

  // return [letra_mas_repetida , maximo_repeticiones];//Devuelve un array

  return { [letra_mas_repetida]: maximo_repeticiones };//Devuelve un objeto
}
console.log();
/* 
Dado un texto, devolver el carácter que más se repite.
*/