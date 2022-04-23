/* 

*/

// function feedback2 (num) {
//   let imprimir = 1;
//   for (let i = 1; i <= num; i++) {
//     if (imprimir % 3 == 0 && imprimir % 5 == 0) {
//       console.log("Buzzlight", imprimir);
//       imprimir += 1;
//       continue;
//     }
//     if (imprimir % 3 == 0) {
//       console.log("buzz", imprimir);
//       imprimir += 1;
//       continue;
//     }
//     if (imprimir % 5 == 0) {
//       console.log("ligth", imprimir);
//       imprimir += 1;
//       continue;
//     }
//     else {
//       console.log(imprimir);
//       imprimir += 1;
//       continue;
//     }
//   }
// }
// feedback2(30);

/* function feedback (num) {
  let imprimir = 1;
  for (let i = 1; i <= num; i++) {
    (imprimir % 3 == 0 && imprimir % 5 == 0)
      ? (console.log("Buzzlight", imprimir), imprimir += 1)
      : (imprimir % 3 == 0)
        ? (console.log("buzz", imprimir), imprimir += 1)
        : (imprimir % 5 == 0)
          ? (console.log("ligth", imprimir), imprimir += 1)
          : (console.log(imprimir), imprimir += 1);
  }
} */
// feedback(30);

//Solucion del curso
function feedback3 (num) {
  (num % 3 == 0 && num % 5 == 0)
    ? (console.log(num, "Multiplo de 3 y 5"))
    : (num % 3 == 0)
      ? (console.log(num, "Multiplo de 3"))
      : (num % 5 == 0)
        ? (console.log(num, "Multiplo de 5"))
        : (console.log(num));
}


function curso (params) {
  for (let index = 1; index <= params; index++) {
    feedback3(index);
  }
}
curso(30);