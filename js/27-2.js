// import { sumar, restar } from './27.js';

// Otra forma cuando tenemos funcions con el mismo nombre
import { sumar as funcionSumar, restar} from './27';

const resta = restar(20, 10);
console.log(resta);

const suma = funcionSumar(1, 5);
console.log(suma);