const heroes = ['Superman', 'Batman', 'Wonder Woman', 'Spider-Man', 'Iron Man'];

console.warn('For traditional');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('For in');
for (const j in heroes) {
    console.log(heroes[j]);
}

console.warn('For of'); 
for (const heroe of heroes) {
    console.log(heroe)
}