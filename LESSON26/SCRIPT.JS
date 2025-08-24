// this both my class work and project
// Parent class
class Human {
    constructor(height, weight, color) {
        this.height = height;
        this.weight = weight;
        this.color = color;
    }

    sound() {
        console.log("DON'T COPY MY FLOW");
        console.log("YOU KNOW!!");
    }
}
// it is like option to be usde in below code
let h1 = new Human(170, 69, 'violet');
let h2 = new Human(165, 59, 'brown');

// here we need it

console.log(h1.color);
console.log(h2.weight);

// Child class
class Aman extends Human {
    constructor(height, weight, color, name, country, email) {
        super(height, weight, color);
        this.name = name;
        this.country = country;
        this.email = email;
    }

    sound() {
        console.log("baa baa sheep");
    }
}

let a1 = new Aman(543, 78, 'AZKABAN', 'mounjiro', 'ohio', 'iamthanoss@gmail.com');
let a2 = new Aman(675, 95, 'SIUU', 'thanoos', 'ronaldo', 'meranhihaiye@gmail.com');

console.log(a1.height);
console.log(a1.country);
// it is being overwritten mean like u r a child if u have 1 rs then u go and buy something ny yourself but if u dont have then u will ask ur parents 
a1.sound();
