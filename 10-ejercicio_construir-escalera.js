/* 

*/

function escalera(numero_escalones) {
  let escalera = "";
  for (let nivel = 1; nivel <= numero_escalones; nivel++) {
    let escalones = "";

    for (let escalon = 1; escalon <= nivel; escalon++) {
      escalones += "[-]";
    }
    escalera += escalones + "\n";
  }
  return escalera;
}
console.log(escalera(8));