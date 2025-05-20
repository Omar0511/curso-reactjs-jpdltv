const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
};
console.log(typeof producto);

// Acceder a propidades
console.log(producto.nombre);

// Destructuring
const { nombre } = producto;
console.log(nombre);

// Object Literal Enhacement
const autenticado = true;
const usuario = "Omar";

const nuevoObjeto = {
    autenticado: autenticado,
    usuario: usuario
};
console.log(nuevoObjeto);

// Si se llama igual la llave con el valor, solo dejamos 1
const autenticado2 = true;
const usuario2 = "Omar";

const nuevoObjeto2 = {
    autenticado2,
    usuario2
};
console.log(nuevoObjeto2);