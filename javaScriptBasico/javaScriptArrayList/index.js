const elements = {
    nombre: "Wilmer Triana",
    edad: 37,
    isDeveloper: true,
    libroFavorito: {
        libro: "Inquebrantable", 
        autor: "Tony Robbins", 
        fecha: "May 30 2019", 
        url: "https://www.panamericana.com.co/inquebrantable-563181/p"
    }
}
elements.fechaNacimiento = new Date(1984, 10, 27);

console.log(elements);