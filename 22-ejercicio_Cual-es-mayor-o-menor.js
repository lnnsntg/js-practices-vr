/* 
Dados 2 números, indicar cuál es mayor y cuál es menor.
*/

/* function mayorYMenor(num1, num2) {
  if (num1 === num2) {
    return `Los numeros son iguales`
  } else if(num1 > num2) {
    return `El numero ${num1} es mayor que ${num2}`
  }else{
    return `El numero ${num2} es mayor que ${num1}`
  }
}
console.log(mayorYMenor(10,18)); */

// Mi Solución
function mayorYMenor (num1, num2) {
  return (num1 === num2)
    ? `Los numeros son iguales`
    : (num1 > num2)
      ? `El numero ${num1} es mayor que ${num2}`
      : `El numero ${num2} es mayor que ${num1}`;
}
console.log(mayorYMenor(10, 10.9)) 