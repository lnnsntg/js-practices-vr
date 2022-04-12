/* 
Dibujar un cuadrado hueco con asteriscos.

****
*  *
*  *
****

*/

/* 
function lado(numero) {
    let lado = "";
    for (let i = 0; i < numero; i++) {
        lado += "*";
    }
    return lado;
}
function cuadrado(numero) {
    let dibujo = lado(numero) + "\n";

    for (let i = 0; i < (numero - 2); i++) {
        contenido = "*";

        for (let x = 0; x < (numero - 2); x++) {
            contenido += " ";
        }
        contenido += "*";
        dibujo += contenido + "\n";

    }
    dibujo += lado(numero);

    return dibujo;
}
console.log(cuadrado(4)); 

*/

function pintarCuadrado(numero) {
    let cuadrado = "";
    //Pintar primera fila
    for (let i = 0; i < numero; i++) {
        cuadrado += "*";
    }
    cuadrado += "\n";
    //Filas intermedias desde la segunda hasta la penúltima
    for (let i = 0; i < numero - 2; i++) {
        cuadrado += "*";
        for (let i = 0; i < numero - 2; i++) {
            cuadrado += " ";
        }
        cuadrado += "*" + "\n";
    }
    //Pintar la última fila sin salto de línea al final
    for (let i = 0; i < numero; i++) {
        cuadrado += "*";
    }
    return cuadrado;
}



console.log(pintarCuadrado(4));