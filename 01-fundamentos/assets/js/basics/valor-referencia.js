// Todos los primitivos son pasados por valor.
// En JavaScript todos los objetos son pasados por referencia.

let a = 10;
let b = a;
    a = 30;
console.log({a, b});

let pablo = { nombre: 'Pablo' };
let diana = { ...pablo }; // Operador Spread
diana.nombre = 'Diana';
console.log({pablo, diana});
console.log('')

// const changeName = ( ...person ) => { return person }  // Operador Rest
// const changeName = ({ ...person }) => { return person }  // Operador Spread
const changeName = ({ ...person }) => {
    person.nombre = 'Rincon';
    return person;
}
let camilo = { nombre: 'Camilo' };
let ronald = changeName( camilo );
console.log({camilo, ronald});
console.log('')

// Arrays
const fruits = ['Apple', 'Pear', 'Grape'];
const otherFruits = [...fruits];
otherFruits.push('Banana');
console.table({fruits, otherFruits});

console.time('Slice');
const otherFruits2 = fruits.slice();
console.timeEnd('Slice');

console.time('Spread');
const otherFruits3 = [...fruits]; // opción recomendada para copiar arrays
console.timeEnd('Spread');