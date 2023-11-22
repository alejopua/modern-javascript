// ton
class ton {
    static instancia;
    nombre = '';
    
    constructor(nombre = '') {
        if (!!ton.instancia) {
            return ton.instancia
        }
        ton.instancia = this
        this.nombre = nombre
    }
}

const ironMan = new ton('Iron Man')
const spiderMan = new ton('spiderMan')
console.log(`este es: ${ironMan.nombre}`)
console.log(`este es: ${spiderMan.nombre}`)