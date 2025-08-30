//  as u can see js doesn't wait for the function to complete it , js put it in the queue and move foward
function hitler(){
    console.log("hitler bhai ka comeback")
}
// 1000 = 1sec
setTimeout(hitler,10000)

// showing the diff. 
var a = {name: 'hitler', age: 87};
console.log(a)
// it is a special type giving info to server and taking it into JSON format
a = JSON.stringify(a)
// see the diiference
console.log(a)
// it is a type of method to convert JSON format into raw so it could work for us
a = JSON.parse(a)
console.log(a)
 
function A(x){
    x()  // call back function
}

A(function(){
    console.log("i yum back")
}) //here it calbacks

// promise in javascript
var p = new Promise(function(resolve, reject){
    // some code to connect with backend server and get some data
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
