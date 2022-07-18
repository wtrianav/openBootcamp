// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let num = 10;
let total = 1;
let i = 1;

while (i <= num) {
    total *= i;
    ++i;
    console.log(total);
    if (false) {
        console.log(total);
        break;
    }
}
console.log(total);
