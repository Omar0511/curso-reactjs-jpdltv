const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
};

// Unie objetos
const cliente = {
    nombre : "Curso",
    edad : 31,
    sexo : 'masculino'
};

const carrito = {
    cantidad: 1,
    // unir objeto, sin crear un nuevo objeto dentro
    ...producto
};
console.log(carrito);
console.log(carrito.nombre);

const uniones = {
    producto: { ...producto },
    cliente: { ...cliente }
};
console.log(uniones);

// Simplificado
const uniones2 = {
    producto,
    cliente
};
console.log(uniones2);

// Optimizando
const uniones3 = Object.assign(producto, cliente);
console.log(uniones3);