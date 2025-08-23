var a = [456, 74, 5674, 456745 , 547645, 4757, 457, 4754, 457, 475647]
console.log(a[7])
console.log(a.length)
console.log(a.length - 5)

// accending order sorting using classic js
a.sort(function(a, b){ return a - b})
console.log(a)

// descending order sorting using classic js
a.sort(function(a, b){ return b - a})
console.log(a)

// same same but different like kim jong un and hitler ,  i mean it doesn't need any "function" to be written
a.sort((a, b)=>b-a)

a.sort((a, b)=>a-b)

var c = a.map(a=>a*56)
console.log(c)
