function quitarAcentos (cadena) {
  const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U' };
  return cadena.split('').map(letra => acentos[letra] || letra).join('').toString();
}

// console.log(quitarAcentos(parrafo));


// ====================================================================
const texto_vocales = "áoéáíottaíuú";
let vocales_split = texto_vocales.split("");
// console.log(split);

const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U' };

// Cambia cada vocal tildada por la vocal no tildada a la letra correspondiente
let mapear = vocales_split.map(letra => {
  console.log(acentos[letra] || letra);
});
// ====================================================================

// En esta variable uso return porqué estoy usando la función de flecha con {}, si elimino lod {} puedo 
// eliminar tambien el return. Así - vocales_split.map(letra =>   return acentos[letra] || letra)   

let mapear2 = vocales_split.map(letra => {
  return acentos[letra] || letra;
}
);
// console.log("mapear2", mapear2);

// ====================================================================

const texto_vocales2 = "áoéáíottaíuúñ";

function limpiarTildesCaracteres (texto) {
  texto.toLowerCase();
  return texto.split("").map(letra => {
    //letra = letra.replace(new RegExp(/\s/g), "");
    letra.replace(new RegExp(/[àáâãäå]/g), "a");
    letra.replace(new RegExp(/æ/g), "ae");
    letra.replace(new RegExp(/ç/g), "c");
    letra.replace(new RegExp(/[èéêë]/g), "e");
    letra.replace(new RegExp(/[ìíîï]/g), "i");
    //letra.replace(new RegExp(/ñ/g), "n");
    letra.replace(new RegExp(/[òóôõö]/g), "o");
    letra.replace(new RegExp(/œ/g), "oe");
    letra.replace(new RegExp(/[ùúûü]/g), "u");
    letra.replace(new RegExp(/[ýÿ]/g), "y");
    //letra = letra.replace(new RegExp(/\W/g), "");
    return letra;
  });//.join("").toString()
}

console.log(quitarAcentos2(texto_vocales2));


// ====================================================================

/*
const obj = params => {
  let objeto = {};
  params.filter(item => {
    if (objeto[item]) {
      objeto[item]++;
    } else {
      objeto[item] = 1;
    }
  });
  return objeto;
};
console.log(obj(alphabet))

*/

// ====================================================================

/* 
Esta solución me parece también muy aceptable, está en:
https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript

*/

// accentsTidy = function (s) {
//   var r = s.toLowerCase();
//   r = r.replace(new RegExp(/\s/g), "");
//   r = r.replace(new RegExp(/[àáâãäå]/g), "a");
//   r = r.replace(new RegExp(/æ/g), "ae");
//   r = r.replace(new RegExp(/ç/g), "c");
//   r = r.replace(new RegExp(/[èéêë]/g), "e");
//   r = r.replace(new RegExp(/[ìíîï]/g), "i");
//   r = r.replace(new RegExp(/ñ/g), "n");
//   r = r.replace(new RegExp(/[òóôõö]/g), "o");
//   r = r.replace(new RegExp(/œ/g), "oe");
//   r = r.replace(new RegExp(/[ùúûü]/g), "u");
//   r = r.replace(new RegExp(/[ýÿ]/g), "y");
//   r = r.replace(new RegExp(/\W/g), "");
//   return r;
// };

// ====================================================================

// Esta solución de stackoverflow no me gusta porque quita la marca de la ñ tambien
// https://desarrolloweb.com/faq/la-mejor-manera-de-eliminar-tildes-o-acentos-en-javascript
// https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript

// const str = "CrèmeÑ Brulée";
// console.log(str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));

// ====================================================================



