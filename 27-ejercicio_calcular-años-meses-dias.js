/* 
Dado un número calcualar años, meses, dias
*/

// Mi solución
function transformarDias(num_dias) {
    if (num_dias <= 0) { return `Tu parametro apesta` } else {
        let aniios = (num_dias >= 365)
            ? Math.floor((num_dias / 365))
            : 0
        let meses = (aniios > 0)
            ? Math.floor((num_dias - aniios * 365) / 30)
            : Math.floor(num_dias / 30)
        let dias = num_dias - (aniios * 365) - (meses * 30)
        return `Los dias se han convetido en ${aniios} años ${meses} meses y ${dias} dias`
    }
}
console.log(transformarDias(1200));

// Solución del curso

function calcularDias(dias) {
    let anios = Math.floor(dias / 365)
    let dias_restantes = (dias % 365)
    let meses = Math.floor(dias_restantes / 30)
    dias_restantes = dias_restantes % 30
    return `Los dias se han convetido en ${anios} años ${meses} meses y ${dias_restantes} dias`
}
console.log(calcularDias(1200))