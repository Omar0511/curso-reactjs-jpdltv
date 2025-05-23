// Optional Chaining - '?', revisa si existe la propiedad
const alumno = {
    nombre: 'Omar',
    clase: 'curso',
    aprobador: true
};
console.log(alumno);
console.log(alumno.examenes?.examen1);

console.log('Después del console');

//  NUllish coolescing operator - '??'
const pagina = null ?? 1;
console.log(pagina);