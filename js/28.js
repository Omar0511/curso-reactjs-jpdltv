// Modules
export function sumar(n1 = 0, n2 = 0) {
    return n1 + n2;
};

export function restar(n1 = 0, n2 = 0) {
    return n1 - n2;
};

// Solo puede haber 1 por archivo
export default function multiplicar(n1, n2) {
    return n1 * n2;
};

// Podemos exportar ARROW FUNCTIONS
export const division = (n1, n2) => {
    n1 / n2
};

// Otra forma, recordando que no podemos tener más de 1 export default por archivo
const sumas =  (n1, n2, n3) => n1 + n2 + n3;
// export default sumas;