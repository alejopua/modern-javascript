// Pro tip: class multi-builder

class Person{
    static personObj({name, age, city}){
        return new Person(name, age, city);
    }

    constructor(name = 'without name', age = 'without age', city = 'without city'){
        this.name = name;
        this.age = age;
        this.city = city;
    }

    getInfo(){
        console.log(`Mi nombre es: ${this.name}, soy de ${this.city} y tengo ${this.age} años.`);
    }
}
const lleritos = {
    name: 'Diana',
    age: 28,
    city: 'Ubate',
}

const person1 = new Person('Alejandro', '30', 'Cali');
person1.getInfo();
const person2 = Person.personObj(lleritos)
person2.getInfo();