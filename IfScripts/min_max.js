let a = 5;
let b = 7;
let c = 2;
let min;
let max;


if (a > b && a > c) {
    max = a
} else if (b > a && b > c) {
    max = b
} else if (c > a && c > b) {
    max = c
} else {
    console.log("Error")
}

if (a < b && a < c) {
    min = a
} else if (b < a && b < c) {
    min = b
} else if (c < a && c < b) {
    min = c
} else {
    console.log("Error")
}
console.log("Min: " + min);
console.log("Max: " + max);