const tecnologias = ['HTML', 'CSS', 'JS'];
const numeros = [20, 30, 40];

// Some - devuelve si al menos 1 cumple la condición
const resultado = numeros.some( numero => numero > 15 );
console.log(resultado);

// Find - devuelve el primero elemento que cumpla la función
const resultado2 = numeros.find( numero => numero > 15);
console.log(resultado2);

// Every - retorna true o false si todos cumplen la condición
const resultado3 = numeros.every( numero => numero > 1);
console.log(resultado3);

// Reduce - retorna un acmulado del total
const resultado4 = numeros.reduce( (total, numero) => {
    console.log(total);
    console.log(numero);

    return total + numero;
});
console.log(resultado4);