/* 

*/
/* let a = [1, 2, 3, 4, 5, 6, 7];
function myFunction (a, b) {
  let sum = 0;
  a.map(x => {
    if (x > b) {
      sum += x;
    }
  });
  return sum;
}
console.log(myFunction(a, 2)); */

let a = [1, 2, 3, 4, 5, 6, 7];
function myFunction (a, b) {
  let sum = 0;
  a.map((x) => {
    x > b ? sum += x : false;
  }
  );
  return sum;
}
console.log(myFunction(a, 2));

function myFunction(a, b) {
  return a.reduce((sum, cur) => {
    if (cur > b) return sum + cur;
    return sum;
  }, 0);
}