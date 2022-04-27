/* 
Dado un array de objetos, devolver el que tengo valor true o false, en el caso del curso usan un array de objetos de peliculas.
*/

const collection = [
  {
    titulo: "El señor de los anillos",
    director: "Peter Jackson",
    vista: true
  },
  {
    titulo: "La liga de la justicia",
    director: "Zack Snyder",
    vista: false
  },
  {
    titulo: "Los vengadores 3: Endgame",
    director: "Joe Russo",
    vista: true
  },
  {
    titulo: "Batman vs Superman",
    director: "Zack Snyder",
    vista: false
  },
];
function misPeliculas (peliculas) {
  let printar = ""
  for (let i = 0; i <= peliculas.length - 1; i++) {
    if (peliculas[i].vista) {
      printar += `Ya has visto: "${peliculas[i].titulo}"\n`;
    } else {
      printar += `Aún no has visto: "${peliculas[i].titulo}"\n`;
    }
  }
  return printar
}
console.log(misPeliculas(collection));;