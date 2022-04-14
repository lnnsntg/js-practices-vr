/* 

*/
let texto = "Escribe o pega tu texto aquí para tenerlo revisado continuamente. tenerlo Los errores se subrayarán en diferentes colores"

function censurar(texto = false, busqueda = false) {
  let resultado = "";
  if (!texto && !busqueda) {
    resultado = "No puedes leer el texo y la busqueda";
  } else if (!texto && busqueda) {
    resultado = "No puedes leer el texo";
  } else if (texto && !busqueda) {
    resultado = "No puedes leer la busqueda";
  } else if (texto && busqueda) {
      resultado = texto.replace(new RegExp(busqueda, "gi") , "[-CENSURADO-]")
  }
  console.log(resultado);
  return resultado;
}
censurar(texto, "pega");