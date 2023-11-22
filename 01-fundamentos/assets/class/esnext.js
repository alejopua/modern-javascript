class Rectangle {
    #area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    #areaxdos(){
        return console.log(`el ${this.#area} por dos es: ${this.#area * 2}`)
    }
}

const rectangleOne = new Rectangle(10, 15)
console.log(rectangleOne)