// Ejercicio para calcular el factorial de 10 utilizando el ciclo (loop) while.

let num = 10;
let total = 1;
let i = 1;

while (i <= num) {
    total *= i;
    ++i;
    console.log(total);
}

console.log(total);