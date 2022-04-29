/* 
Dado un string, verificar si hay más minúsculas: devolver todo en minúsculas, si hay más mayúsculas: devolver todo en mayúsculas.
*/
function limpiarTildesCaracteres (texto) {
  return texto.split("")
    .map(letra => {
      return letra.replace(new RegExp(/\s/g), "")
        .replace(new RegExp(/[àáâãäå]/g), "a")
        .replace(new RegExp(/Á/g), "A")
        .replace(new RegExp(/É/g), "E")
        .replace(new RegExp(/[èéêë]/g), "e")
        .replace(new RegExp(/Í/g), "I")
        .replace(new RegExp(/[ìíîï]/g), "i")
        .replace(new RegExp(/Ó/g), "O")
        .replace(new RegExp(/[òóôõö]/g), "o")
        .replace(new RegExp(/Ú/g), "U")
        .replace(new RegExp(/[ùúûü]/g), "u")
        .replace(new RegExp(/æ/g), "ae")
        .replace(new RegExp(/ç/g), "c")
        .replace(new RegExp(/ñ/g), "n")
        .replace(new RegExp(/Ñ/g), "N")
        .replace(new RegExp(/œ/g), "oe")
        .replace(new RegExp(/[ýÿ]/g), "y")
        .replace(new RegExp(/\W/g), "");
    })
    .join("");
}
//-----------------------------------------------------------------

let str = "Dado un string, verificar si hay más minúsculas: devolver todo en minúsculas, si hay más mayúsculas: devolver todo en mayúsculas.";
let expMay = /[A-Z]/;
let expMin = /[a-z]/;

function convertirAMayuscualasOMinusculas (texto) {
  let textoLimpio = limpiarTildesCaracteres(texto);
  console.log(textoLimpio);

  let contadorMayusculas = 0;
  let contadorMinusculas = 0;
  for (const letra of textoLimpio) {
    if (expMay.test(letra)) { contadorMayusculas++; };
    if (expMin.test(letra)) { contadorMinusculas++; };
  }

  console.log(contadorMayusculas);
  console.log(contadorMinusculas);
  if (contadorMayusculas >= contadorMinusculas) {
    return texto.toUpperCase();
  } else {
    return texto.toLowerCase();
  }
}

console.log(convertirAMayuscualasOMinusculas(str));