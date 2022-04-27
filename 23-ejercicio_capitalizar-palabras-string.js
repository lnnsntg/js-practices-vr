/* 

*/
// function enMayusculas (texto) {
//   let resultado = "";
//   for (const caracter in texto) {
//     if (parseInt(caracter) === 0 || texto[parseInt(caracter) - 1] === " ") {
//       resultado += texto[caracter].toUpperCase();
//     } else {
//       resultado += texto[caracter];
//     }
//   }
//   return resultado;
// }
// console.log(enMayusculas("el texto lo es todo"))

const txt = 'foo, foo, huu, lenin, antonio, santiago, delgado';

function capitalizeFirstLetter (texto) {
  let palabrasArray = texto.split(" ");
  let nuevoTexto = [];
  for (const palabra of palabrasArray) {
    nuevoTexto.push(palabra.charAt(0).toLocaleUpperCase() + palabra.slice(1));
  }
  console.log(nuevoTexto);
  return nuevoTexto.join(" ");
}

console.log(capitalizeFirstLetter(txt));