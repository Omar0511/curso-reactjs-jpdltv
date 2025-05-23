const tecnologias = ['HTML', 'CSS', 'JS'];
const mumeros = [20, 30, 40];

const ejemploFilter = (tech) => console.log(tech);
const newArray = tecnologias.filter(ejemploFilter);
const newArray2 = tecnologias.filter( (tech) => tech !== 'HTML' );

console.log(newArray2);

// includes: valida si existe
const resultado = tecnologias.includes('CSS');
console.log(resultado);