// Dias de  la semana se abre a las 8
// pero los fines de semana se abre a las 11
// entra al sitio web para consultar si esta abierto hoy...

const day = 3; // 0: domingo, 1: lunes...
const currentTime = 7;
let openingTime
let messageDay
let message

//if (day === 0 || day === 6) {
// if ([0, 6].includes(day)) {
//     console.log('weekends')
//     openingTime = 11
// } else {
//     console.log('weekdays')
//     openingTime = 8
// }

// if (currentTime >= openingTime) {
//     console.log('is open')
// } else {
//     console.log(`is closed, today open at ${openingTime}`)
// }

// ternary operator
messageDay = [0, 6].includes(day) 
    ? (openingTime = 11, messageDay = `it's ${currentTime} o'clock at the weekend.`) 
    : (openingTime = 8, messageDay = `it's ${currentTime} o'clock at the weekdays.`);

message = (currentTime >= openingTime) 
    ? (message = 'is open') 
    : (message = `is closed, today open at ${openingTime} o'clock`);

console.log({messageDay, message})

// pro Tip

const nota = 86
const grado = nota >= 95 ? 'A+'
            : nota >= 90 ? 'A'
            : nota >= 85 ? 'B+'
            : nota >= 80 ? 'B'
            : nota >= 75 ? 'C+'
            : nota >= 70 ? 'C'
            : nota >= 65 ? 'D+'
            : nota >= 60 ? 'D'
            : 'F'
console.log({nota, grado})