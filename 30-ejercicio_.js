/*
Dado un array de números, devolver el array sin elementos duplicados. si hay algún string eliminarlo del array.
*/

let arr = new Array(1, 3, 8, 8, 2, 65, 2, 1, "caniche", "patatas", 89, 7, 3);

function eliminarDuplicados(param) {
  param = param.filter((item) => {
    return typeof item === "number";
  });
  return Array.from(new Set(param));
}

console.log(eliminarDuplicados(arr));

/* const letters = new Set(["a", "b", "c"]);
// console.log(letters instanceof Set) */

const mapX = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
// console.log(map)
Array.from(mapX);
// console.log(Array.from(map))
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
// console.log(mapper)
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(function myFunction(num) {
  // return num
});
// ['1', '2'];
// console.log(newArr)

/* 
const map = new Map();
console.log(map)
map.set('firstName', 'Luke')
map.set('lastName', 'Skywalker')
map.set('occupation', 'Jedi Knight')
map.set('Espadas laser', 1)
map.set('Esta vivo?', true)
console.log(map)
 */

/* 
const luke = {
    firstName: 'Luke',
    lastName: 'Skywalker',
    occupation: 'Jedi Knight',
  }
  
  console.log(Object.entries(luke)) 
  */