// Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ["Pan tajado", "Mortadela", "Quesillo", "Atún", "Salsa de tomate"]

// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {titulo: "El Camino", director: "Vince Gilligan", fecha: "October 11, 2019"},
    {titulo: "El señor de los anillos", director: "Peter Jackson", fecha: "December 25, 2001"},
    {titulo: "Avatar", director: "James Cameron", fecha: "December 17, 2009"}
];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const filterPeliculas= peliculas.filter(objeto => objeto.fecha > "January 01, 2010");
console.log(filterPeliculas);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map((valor) => `${valor.director}`);
console.log(directores);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map((valor) => `${valor.titulo}`);
console.log(titulos);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const titulosDirectores = directores.concat(titulos);
console.log(titulosDirectores);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const newTitulosDirectores = [...directores, ...titulos];
console.log(newTitulosDirectores);