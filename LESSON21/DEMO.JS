function uss(a, b) {
    return a * b;
}

var num1 = 5;
var num2 = 10;
var result = uss(num1, num2);
console.log(result); // 50

var b = {
    age: 25,
    johncena: function(v, m) {
        return v * m;
    }
}

var c = b.johncena(6, 7);
console.log(c); // 42

console.log(Math.random()); // Random number 0-1
console.log(Math.floor(7.6)); // 7
console.log(Math.ceil(7.4));  // 8

var tacos = 'walid eats food';
console.log(tacos.toUpperCase());

var i;
for (i = 0; i < 30; i++) {
    console.log("I LOVE TO EAT MANCHURIANS");
    console.log("NOODLES INCLUDED");
}


