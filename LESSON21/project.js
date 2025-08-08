function uss(a,b){
    return a*b
}

var a = uss(5,10)
console.log(a)

var b = {age: 25, johncena: function(v,m){return v*m}}

var c = b.johncena(6,7)
console.log(c)

console.log(Math.random())
console.log(Math.floor(7.6))
console.log(Math.ceil(7.4))

var tacos = 'walid eats food'
console.log(tacos.toUpperCase())

var i 
for(i=0; i<5; i++){
    console.log("I LOVE TO EAT MANCHURIANS")
    console.log("NOODLES INCLUDED")
}

var food = "burger"
switch(food){
    case "burger":
        console.log("BURGER TIME")
        break
    case "pizza":
        console.log("PIZZAAA TIME")
        break
    default:
        console.log("IDK BRO")
}
