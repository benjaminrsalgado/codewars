let str = "nadie podra"
let num = 12
let boy = true
let arr = ["o no"]
let pencil = {
    color: "red"
}
let dog = function(){
console.log("TUS CHILES REBOTAN")
}
dog()

let low = [str, num, boy, arr, pencil, dog]
console.log(low.reverse())
console.log(low.shift())
console.log(low)
console.log(low)

function nam (name, age){
console.log(`${name} has ${age}`)
}
nam ("juan", 23)

//function acept one number if the number + 20 es menor que 50 console somos pobre y si es mayor somos ricos 

function money (a){
    if (a + 20 > 50){
        console.log("somo ricos")
    }else{
        console.log("somos pobres")
    }
    
}
money (14)

//make a function reciba un numero, si el numero es par que regrese true y si es impar false

function positive (c) {
    if (c % 2 === 0){
        console.log(true)
    }else {
        console.log(false)
    }
}
