let cliente;
console.log(typeof cliente);

// String - Cadena
const alumno = "pruebas";
const producto = 'Servidores';
console.log(typeof alumno, typeof producto);

// Number
const decimal = 20.20;
const entero = 31;
const stringNumber = "1";
console.log(typeof decimal, typeof entero, typeof stringNumber);

// BinInt
const numeroGrande = BigInt(1233321564654984321321165489323431231231564849764654);
console.log(typeof numeroGrande);

// Boolean
const autenticado = false;
const activo = true;
console.log(typeof autenticado, typeof activo);

// Null
const descuento = null;
console.log(typeof descuento);

const precios = undefined;
console.log(typeof precios);

// Symbol - no existen 2 Symbols iguales, todos son únicos
const primerSymbol = Symbol(30);
console.log(typeof primerSymbol);
