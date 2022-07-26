// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
    nombre: "Wilmer Andrés",
    apellido: "Triana Vega",
    edad: 37,
    altura: 1.68,
    isDeveloper: true,
};

console.log(datosPersonales);

// Una variable que obtenga tu edad a partir del objeto anterior
let miEdad = datosPersonales.edad;
console.log(miEdad);

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const listDatosPersonales = [
    datosPersonales,
    {nombre: "Edgar", apellido: "Rios", edad: 52, altura: 1.86, isDeveloper: false},
    {nombre: "Gabriel", apellido: "Zapata", edad: 39, altura: 1.67, isDeveloper: false},
];

console.log(listDatosPersonales);

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor.
const edades = listDatosPersonales.sort((a, b) => a.edad - b.edad);
console.log(listDatosPersonales);