const tecnologias = ['HTML', 'CSS', 'JS'];

const arrayForEach = tecnologias.forEach(tech => {
    return tech;
});

// Genera un nuevo arreglo
const arrayMap = tecnologias.map(tech => {
    return tech;
});

console.log(arrayForEach);
console.log(arrayMap);

for (let tech of tecnologias) {
    console.log(tech);
}