const auth = true;

if (31) {
    console.log('Truthy');
} else {
    console.log('Falsy');
}

const user = {};

// Ejemplo: si esta autenticado, solo hará la acción que le indiquemos...
user && console.log('Autenticado');