/* 
Dada una cadena de texto comprobar si es un palindromo.
*/

function palindromo(texto) {
  let invertido = texto.split('').reverse().join("");
  if (texto === invertido){
    console.log('Es palindromo');
  }else{
    console.log('No es palindromo');
  }
}

function palindromoVictor(texto) {
  let invertido = texto.split('').reverse().join("");
  return (texto === invertido)
}


palindromo('cararac')
console.log(palindromoVictor('cararac'));