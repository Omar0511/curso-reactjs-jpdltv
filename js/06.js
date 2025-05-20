const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
};

// Destructuring de más de 2 objetos
const cliente = {
    nombre : "Curso",
    edad : 31,
    sexo : 'masculino',
    direccion: {
        calle: "Nuevo México"
    }
};

const { nombre } = producto;
// Teenemos que renombrar para que no marque error, agregando -> :
const { nombre: nombreCliente, direccion: { calle } } = cliente;
console.log(nombre);
console.log(nombreCliente);
console.log(calle);