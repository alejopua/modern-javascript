// Objetos

const person = {
    name: "John",
    age: 31,
    height: 183,
    favColor: "green",
    favEat: ["pizza", "pasta", "hamburguer"],
    location: {
        country: "Brazil",
        city: "São Paulo",
        state: "SP"
    },
    pets: [
        {
            name: "Bobby",
            type: "dog",
            age: 10
        },
        {
            name: "Tobby",
            type: "cat",
            age: 5
        }
    ]
};

console.log(person);
console.log('name: ', person.name);
console.log('name: ', person['name']);
console.log('length favEat: ', person.favEat.length);
console.log('End meal the favEat: ', person.favEat[person.favEat.length - 1]);

const x = 'age';
console.log('age: ', person[x])

// more details

delete person.pet;
console.log(person);

person.married = true

const entriesPares = Object.entries(person);
console.log(entriesPares);
console.log('');
Object.freeze(person); // bloque la modificación de los datos directos, pero no de los datos internos como los objetos

person.lastName = 'Silva';
person.location.city = 'Rio de Janeiro';
console.log(person);

const propertiesPerson = Object.getOwnPropertyNames(person);
const valuesPerson = Object.values(person);
console.log({ propertiesPerson });
console.log({ valuesPerson });

// more info: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object