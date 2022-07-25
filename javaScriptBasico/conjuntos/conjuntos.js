// Un nuevo Set con los nombres de tu familia.
const array = ["Sandra", "Silvana", "Jerónimo", "Andrés", "Nicolás", "Harry", "Angélica", "Judith"];

const miSet = new Set(array);
console.log(array);
console.log(miSet);

// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miSet.add("Andrés");
console.log(miSet);

// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miSet.add("Javascript");
console.log(miSet);