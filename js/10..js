const tecnologias = ['HTML', 'CSS', 'JS'];
console.log(tecnologias);

tecnologias[4] = 'React';
console.log(tecnologias);

tecnologias[10] = 'Nest.js';
console.log(tecnologias);

// Agregar al final
tecnologias.push('Al último');
console.log(tecnologias);

const nuevoArray = [...tecnologias, 'Angular.js'];
console.log(nuevoArray);

// Elimina el primer elemento de un arreglo
tecnologias.shift();
console.log(tecnologias);

const tecnologias2 = tecnologias.filter(
    function (tech) {
        console.log(tech);

        if (tech !== 'HTML') {
            return tech;
        }
    }
);
console.log(tecnologias2);

const tecnologias3 = tecnologias.map(
    function (tech) {
        console.log(tech);

        if (tech === 'Node.js') {
            return 'Nest.js';
        }
    }
);
console.log(tecnologias3);