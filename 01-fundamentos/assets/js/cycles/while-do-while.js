const colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange", "black", "white", "brown"];
console.warn("While");
let i = 0;
while (colors[i]) {
    if (i === 8) {
        i++;
        continue;
    }
    console.log(colors[i]);
    i++;
}

console.warn("Do While");
let j = 0;
do {
    console.log(colors[j])
    j++;
} while (colors[j]);