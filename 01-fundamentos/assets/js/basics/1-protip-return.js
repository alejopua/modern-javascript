// Pro tips

const createPerson = ( name, surname ) => ({ name, surname})
const person = createPerson('Peter', 'Sagan');
console.log(person);
console.log('')

function arguments() {
    console.log(arguments);
}
arguments( 10, 20, true, 'Peter', 'Sagan')
console.log('')

const args = ( ...args ) => console.log(args); // arguments no funciona en arrow functions, por lo cual se usa un rest operator. Después del parámetro rest operator, no se pueden poner mas parámetros
args( 10, 20, true, 'Peter', 'Sagan');
console.log('')

const args2 = ( age, ...args ) => console.log({ age, args }); 
args2( 10, 20, true, 'Peter', 'Sagan');
console.log('')

const args3 = ( ...args ) => { return args }; 
const [ age, married, children, name, surname ] = args3( 10, true, false,  'Peter', 'Sagan');
console.log({ age, married, children, name, surname });
console.log('')

const { name: newName } = createPerson('Nadal', 'Conde');
console.log({ newName });
console.log('')


const personObj = {
    name: "John",
    // age: 31,
    height: 183,
    favColor: "green",
    favEat: "pizza",
};
const printDataPersonObj = ({name, age = 0, height, favColor, favEat}) => {
    console.log({name}),
    console.log({age}), 
    console.log({height}), 
    console.log({favColor}), 
    console.log({favEat});
}
printDataPersonObj(personObj);