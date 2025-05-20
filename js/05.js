const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
};

// Manipulación de OBJETOS
producto.disponible = true;
console.log(producto);

// Agregando nueva propiedad
producto.imagen = "imagen.jpge";
console.log(producto);

// Eliminar propiedad
delete producto.precio;
console.log(producto);

// Bloquear acciones en OBJETOS
Object.freeze(producto);
producto.nuevo = "Alterando";
console.log(producto);

// Permite modificar propiedades existentes
Object.seal(producto);
producto.nombre = "Modificando";
console.log(producto);
