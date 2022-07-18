// Una cadena de texto con tu Nombre.
let nombre = "Wilmer Andrés";

// Otra cadena de texto con tu Apellido
let apellido = "Triana Vega";

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias.
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas.
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas.
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios.
let contarCarateresEstudiante = estudiante.length;
console.log(contarCarateresEstudiante);

// Una variable que contenga la primera letra del Nombre.
let primeraLetraNombre = estudiante[0];
console.log(primeraLetraNombre);

// Otra variable que contenga la última letra del Apellido.
let ultimaLetraApellido = estudiante[24];
console.log(ultimaLetraApellido);

// Una cadena de texto que elimine los espacios de la variable "estudiante".
let deleteBlankSpace = estudiante.split(" ").join("");
console.log(deleteBlankSpace);
console.log(estudiante.replace(/ /g, ""));
console.log(estudiante.replace(/\s+/g, ''));

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante".
let includeNombre = estudiante.includes("Wilmer Andrés");
console.log(includeNombre);