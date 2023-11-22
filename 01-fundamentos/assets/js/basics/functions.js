// En las funciones, después del return no se ejecuta nada

function greeting(name) {
    console.log(arguments);
    console.log('Hello, ' + name);
    return 10;
}

const returnGreeting = greeting('John');
console.log(returnGreeting);

const greeting2 = function(name2) {
    console.log('Hello, ' + name2);
    return [20, 50]
}

const returnGreeting2 = greeting2('Peter');
console.log(returnGreeting2);
console.log(returnGreeting2[1]);

const greeting3 = ( a, b ) => `suma: ${a + b}`;
console.log(greeting3(2, 5));

const getRandom = () => Math.random();
console.log(getRandom());



