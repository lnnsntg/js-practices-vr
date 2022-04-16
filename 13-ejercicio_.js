function dividirArray(arr, numero_elementos) {
  let arreglos = [];
  for (let elemento of arr) {

    console.log("Arreglo es ahora", arreglos);

    let ultimo = arreglos[arreglos.length - 1];

    console.log("ULTIMO es ahora", ultimo);

    console.log("pasa IF?", !ultimo || ultimo.length === 2);

    if (!ultimo || ultimo.length === numero_elementos) {
      arreglos.push([elemento]);
      console.log("if ultimo", ultimo);
      console.log("IF arreglos", arreglos);
    } else {
      console.log("1 else arreglos", arreglos);
      console.log("1 else ultimo", ultimo);
      ultimo.push(elemento);
      console.log("2 else ultimo", ultimo);
      console.log("2 else arreglos", arreglos);
    }
    console.log("-----------------------");
  }
}
dividirArray([1, 2, 3, 4], 2);

/* 
Dado un array, dividirlo en tantos sub-arrays como sea necesario
basandonos en un número que indique su tamaño.
*/