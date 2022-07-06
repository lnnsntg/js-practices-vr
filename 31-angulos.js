/* 
Dado un número, indicar el tipo de angulo que es.
*/
const angulo = (abertura) => {
    let resultado = "Angulo Campleto";
    if (abertura < 90) {
        resultado = "Angulo agudo";

    } else if (abertura === 90) {
        resultado = "Angulo recto";

    } else if (abertura > 90 && abertura < 180) {
        resultado = "Angulo obtuso";

    } else if (abertura === 180) {
        resultado = "Angulo llano";

    }else if (abertura === 180) {
        resultado = "Angulo llano";
        
    }else if (abertura > 180 && abertura < 360) {
        resultado = "Angulo concavo";
        
    }

    return resultado;
};

console.log(angulo(359))