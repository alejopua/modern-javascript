const heroes = [
    'pedro',
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    }
]

const heroesCopy = [...heroes];


heroesCopy[0] = 'Fernando'; // No afecta al array original. por que es un string y los datos primitivos no se modifican
// heroesCopy[1].name = 'Ironman'; // Si afecta al array original, por que es un objeto y los objetos se pasan por referencia

// solucion para no modificar el array original

const heroesCopy2 = structuredClone(heroes);

heroesCopy2[1].name = 'Ironman'; // no afecta el array original por que la copia al array original utiliza el método structuredClone que crea una copia exacta del array original y no afecta al array original


console.table(heroes);
console.table(heroesCopy);
console.table(heroesCopy2);