// String
let name = 'Lleritos';
console.log(name);

name = 'Llera';
console.log(name);

name = "Geraldine";
console.log(name);

name = `Tocanchon`;
console.log(name);
console.log( typeof name);

name = 20;
console.log(name);
console.log( typeof name);

// Boolean

let isTrue = true; 
console.log(typeof isTrue);

// Number

let age = 20;
console.log(typeof age);

age = 31.001;
console.log(typeof age);

// Undefined

let lastName;
console.log(typeof lastName);

// Null

let car = null;
console.log(typeof car);  // retorna object por (todo son objetos excepto los primitivos)

// Symbol

let symbol = Symbol('a');
let symbol2 = Symbol('a')
console.log(typeof symbol);
console.log(symbol === symbol2); // false