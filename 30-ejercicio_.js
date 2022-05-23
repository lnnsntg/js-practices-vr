/*

Dado un array de números, devolver el array sin elementos duplicados. si hay algún string eliminarlo del array.

*/

let arr = new Array(1, 3, 8, 8, 2, 65, 2, 1, "caniche", "patatas", 89, 7, 3)

function eliminarDuplicados(param) {
    param = param.filter(item => {
        return typeof item === "number"
    })
    return Array.from(new Set(param))
}
console.log(eliminarDuplicados(arr))