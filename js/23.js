// Ternarios
const edad = 18;
const empleado = true;

(edad > 18)
    ? console.log('Mayor de edad')
    : console.log('Aún eres menor...');

(edad < 18)
    ? console.log('Aún eres menor de edad')
    : (empleado)
        ? console.log('Ya eres mayor de edad, eres empleado')
        : console.log('No eres empleado aún por tu edad...');
