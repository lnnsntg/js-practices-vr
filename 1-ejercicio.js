/* 
Tabla de multiplicar
*/

function tablaMultiplicar(numero) {
  let resultado = `# Tabla de multiplicar del ${numero} # \n`
  for (let i = 1; i <= 10; i++) {
    const multiplicacion = (i * numero)
    resultado += `${numero} X ${i} = ${multiplicacion} \n`
  }
  return resultado;
}
console.log(tablaMultiplicar(5));