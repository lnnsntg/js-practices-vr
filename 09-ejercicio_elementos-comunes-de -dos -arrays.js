/* 
Dados 2 array devolver un array solo con los elementos comunes que hay en ambos
*/

const array1 = [4, 5, 9, 45, 7];
const array2 = [4, 15, 9, 145, 7];

function elementosComunes(array1, array2) {
  return array1.filter(item =>  array2.includes(item) );
}

// function elementosComunes(array1, array2) {
//   return array1.filter(item => {
//   return (array2.includes(item));
//   });
// }
console.log(elementosComunes(array1, array2));