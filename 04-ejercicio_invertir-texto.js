/* 
Invertir un texto sin usar funciones o métodos propios del lenguaje.
*/

let texto = "Este es mi texto de prueba y de relleno para este ejercicio";

let textoInvertido = "";

function invertirTexto(texto) {
    for (const letra of texto) {
        textoInvertido = letra + textoInvertido;
    }
    return textoInvertido;
}

//Usando métodos propios de Javascript

function invertir(params) {
    return params.split("").reverse().join("");
}
console.log(invertirTexto(texto));

console.log(invertir(texto));