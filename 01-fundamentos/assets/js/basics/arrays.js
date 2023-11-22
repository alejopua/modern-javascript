// Arrays
// =============================================================
// 1. Create an array called `elements`.

const elements = [
    'hi', 
    1, 
    function () {},
    { a: 2 },
    ['car'],
    true,
    undefined,
    () => {}, 
    ['red', 'blue', 'green'],
    9,
];

const games = [
    'MarioBros',
    'Contra',
    'Sonic',
    'Zelda',
    'MortalKombat',
    'MarioKart',
    'StreetFighter',
    'DonkeyKong',
    'Pacman',
];

console.log(elements);
console.log(elements.length);
console.log('Position 2 the element 9 : ', elements[8][1]);
console.log('')

const startElement = elements[0];
const endElement = elements[elements.length - 1];
console.log({ startElement, endElement });
console.log('')

elements.forEach((item, index, arr) => {
    console.log({ item, index, arr });
})
console.log('')

games.push('Fornite'); // add to the end of the array
let lengthArray = games.length;
console.log({ games, lengthArray });
console.log('')

games.unshift('MarioKart'); // add to the beginning of the array
lengthArray = games.length;
console.log({ games, lengthArray });
console.log('')

let deleteItem = games.pop(); // delete to the end of the array
lengthArray = games.length;
console.log({ deleteItem, games, lengthArray });
console.log('')

deleteItem = games.shift(); // delete to the beginning of the array

let spliceMethod = games.splice(1, 1); // delete element indicated the position of the array and the number of elements to delete.
lengthArray = games.length;
console.log({ spliceMethod, games, lengthArray });
console.log('')

let indexOfMethod = games.indexOf('Pacman'); // case sensitive
lengthArray = games.length;
console.log({ indexOfMethod, games });
console.log('')