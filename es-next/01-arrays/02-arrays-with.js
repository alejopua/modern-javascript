const state = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Spiderman',
    },
    {
        id: 3,
        name: 'Superman',
    },
    {
        id: 4,
        name: 'Flash',
    },
    {
        id: 5,
        name: 'Wolverine',
    }
]

const index = 1;
const newName = 'guason';

// para cambiar el nombre en ese indice, usualmente se hace asi


// const newState = state.map((hero, i) => {
//     if (i === index) {
//         hero.name = newName;
//     }

//     return hero;
// });

// state[0].name = 'Pedro';
// console.table(newState);

// para cambiar el nombre en ese indice, usualmente se hace asi


// const newState = state.map((hero, i) => {
//     if (i === index) {
//         hero.name = newName;
//     }

//     return {...hero};
// });

// state[0].name = 'Pedro';
// console.table(newState);

// el metodo with nos ayuda a crear un nuevo objeto y a la vez modificarlo

// const newState = state.with(index, {
//     ...state[index],
//     name: newName,
// })

const newState = state.with(index, {
    ...state.at(index),
    name: newName,
})

state[0].name = 'Pedro';
console.table(newState);