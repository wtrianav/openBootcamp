// Una variable que contenga tu altura en centímetros (entero).
let alturaCentimetros = 168;

// Una variable que contenga tu altura en metros (número de coma flotante).
let alturaMetros = 1.68;

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 70.5;

// Una variable que contenga tu altura en metros redondeada hacia arriba.
let alturaMetrosRedondeo = alturaMetros.toFixed();
console.log(alturaMetrosRedondeo);

alturaMetrosRedondeo = Math.round(alturaMetros);
console.log(alturaMetrosRedondeo);

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo.
let pesoRedondeo = Math.floor(peso);
console.log(pesoRedondeo);

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript.
let max_valor_JS = Number.MAX_VALUE;
console.log(max_valor_JS);

let comparacion = (max_valor_JS + 1 == max_valor_JS);
console.log(comparacion);