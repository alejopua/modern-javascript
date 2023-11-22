
class Persons { // manera de crear e inicializar una clase
    // static - propiedad estática
    static _count = 0; // propiedad estática

    // static - get
    static get getCount(){
        return Persons._count + ' instancias';
    }

    // static - method
    static message(){
        console.log(this.name) // undefined
        console.log(`hello, there is/are ${Persons._count} instances`)
        console.log('Hello, I am a static method')
    }

    name; // propiedad
    codeName;
    phraseName;
    food;

    constructor(name = 'unnamed', codeName = 'without code', phraseName = 'without phrase') {
        this.name = name;
        this.codeName = codeName;
        this.phraseName = phraseName;
        Persons._count++; // propiedad estática
    }

    // set - me permite modificar el valor de una propiedad
    set setFavoriteFood(food){
        this.food = food.toUpperCase();
    }
    // get - me permite obtener el valor de una propiedad
    get getFavoriteFood(){
        return console.log(`Favourite food the ${this.name} is: ${this.food}`)
    }

    //methods - son funciones dentro de una clase
    whoIAm(){
        console.log(`Soy ${this.codeName} y mi identidad es ${this.name}`)
    }
    myPhrase(){
        this.whoIAm() // method into method
        console.log(`Always say: ${this.phraseName}`)
    }
}

const spiderMan = new Persons('Peter Parker', 'Spider Man', 'Life is not perfect. Never will be.'); // instanciar una clase

spiderMan.myPhrase(); // ejecutar un método

spiderMan.setFavoriteFood = 'pizza' // set
spiderMan.getFavoriteFood // get

console.log(spiderMan) // ver el objeto completo

console.log(Persons._count) // ver la propiedad estática
console.log (Persons.getCount) // ver la propiedad estática
console.log(Persons.message()) // ver la propiedad estática
