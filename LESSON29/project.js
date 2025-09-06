function hitler(){
    console.log("hitler bhai ka comeback")
}
setTimeout(hitler,10000)
var a = {name: 'hitler', age: 87};
console.log(a)

a = JSON.stringify(a)

console.log(a)

a = JSON.parse(a)
console.log(a)
 
function A(x){
    x() 
}

A(function(){
    console.log("i yum back")
}) 

var p = new Promise(function(resolve, reject){

    setTimeout(function(){
        var error = true;
        if(!error){
            console.log("hitler bhai ne bomb gira diya")
            resolve()
        }
        else{
            console.log("soiloder plane leke bhag gya")
            reject()
        }
    }, 5000)
})

p.then(function(){
    console.log("waa yaar!! bhai amir hogya")
}).catch(function(err){
    console.log("aur dikha hoshyari")
})
