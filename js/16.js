// Arrow functions
const sumar = (n = 0, n = 0) => {
    console.log(n + n);
};
sumar(31, 28);

// Cuando se tiene solo 1 línea
const sumar2 = (n = 0, n = 0) => console.log(n + n);
sumar2(31, 28);