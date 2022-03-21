/* 
Enunciado: buscar en una frase la palabra dada
*/
const cadena =
    "IntelliSense is a general term for,,,,,,,------ !!!¡¡¡¡various code editing ,fea???¿¿¿¿¿¿tures including term for,,,,,,,------ !!!¡¡¡¡various code editing ,fea???¿¿tures";

function buscarPalabra(frase, busqueda) {
    const textoManipulado = frase.trim().toLowerCase().replace(/[!¡.,-?¿]/gi, "");

    let resultado = 0;

    if (textoManipulado.includes(busqueda)) {
        let matrizPalabras = textoManipulado.split(" ");

        let mapa = {};

        for (const palabra of matrizPalabras) {
            if (mapa[palabra]) {
                mapa[palabra]++;
            } else {
                mapa[palabra] = 1;
            }
        }
        resultado = mapa[busqueda];
        console.log(mapa);

    } else {
        resultado = 0;
    }
    return resultado;
}

console.log(buscarPalabra(cadena, "for"));