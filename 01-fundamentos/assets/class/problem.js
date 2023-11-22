// Objetos literales
const pedro = {
    nombre: 'Pedro',
    edad: 30,
    print() {
        return console.log(`nombre: ${this.nombre} - edad: ${this.edad}`)
    },
}

const juan = {
    nombre: 'Juan',
    edad: 20,
    print() {
        return console.log(`nombre: ${this.nombre} - edad: ${this.edad}`)
    },
}

// Funciones constructoras
function Persons(nombre, edad) {
    this.nombre = nombre // this hace referencia al objeto que se acaba de crear
    this.edad = edad
    this.print = function() {
        console.log(`nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}

// Instancias a la función constructora
const maria = new Persons('Maria', 21)
maria.print() // nombre: Maria - edad: 21
console.log(maria) // Persons { nombre: 'Maria', edad: 21, print: [Function] }
