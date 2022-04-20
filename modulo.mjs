export function quitarAcentos2 (texto) {
  return texto.split("").map(letra => {
    letra = letra.replace(new RegExp(/\s/g), "");
    letra = letra.replace(new RegExp(/[àáâãäå]/g), "a");
    letra = letra.replace(new RegExp(/æ/g), "ae");
    letra = letra.replace(new RegExp(/ç/g), "c");
    letra = letra.replace(new RegExp(/[èéêë]/g), "e");
    letra = letra.replace(new RegExp(/[ìíîï]/g), "i");
    letra = letra.replace(new RegExp(/[òóôõö]/g), "o");
    letra = letra.replace(new RegExp(/œ/g), "oe");
    letra = letra.replace(new RegExp(/[ùúûü]/g), "u");
    letra = letra.replace(new RegExp(/[ýÿ]/g), "y");
    /* letra = letra.replace(new RegExp(/ñ/g), "n"); */
    letra = letra.replace(new RegExp(/\W/g), "");//Elimina caracteres que no sean alfanumericos incluida la ñ
    return letra;
  }).join("").toString().toLowerCase();
}