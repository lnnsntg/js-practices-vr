/* 
Dado un número encontrar su factorial
*/
function factorial(num) {
    let factorial = 1
    for (let index = 1; index <= num; index++) {
        factorial *= index
    }
    return factorial
}
console.log(factorial(7));