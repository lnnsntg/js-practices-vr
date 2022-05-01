/* 
Dado un número mostrar su  serie fibonacci 
*/
function fibonacci (serie) {  //comenzando desde el 1

 
  let arr = [0,1];

  let ultimo = arr[arr.length -1] 
  for (let index = 3; index <= serie; index++) {
    let suma = ultimo + arr[arr.length -2 ]
    arr.push(suma);
    ultimo = arr[arr.length -1]
  }
  return arr
}
console.log(fibonacci(100));

