const returnTrue = () => {
    console.log('true');
    return true;
}
const returnFalse = () => {
    console.log('false');
    return false;
}

console.log('1.', !true) // false
console.log('2.', !false) // true
console.log('3.', !returnTrue()) // false
console.log('4.', true && !false) // true
console.log('')

console.log('===== && =====')
returnFalse() && returnTrue() // false

console.log('===== OR =====')
returnFalse() || returnTrue() // false

// Pro Tip 2 (protip)

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const rta1 = true && 'hi' && 'hello';
console.log({rta1})

const rta2 = soyFalse && 'hi' && 'hello'; // AND devuelve el primer valor falso o el último valor si todos son verdaderos
console.log({rta2})

const rta3 = soyFalse || 'hi' || 'hello' || 'world' || soyUndefined || soyNull || 'soy un resultado'; // OR devuelve el primer valor verdadero
console.log({rta3})