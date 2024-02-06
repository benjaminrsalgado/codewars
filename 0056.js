document.querySelector(button).addEventListener('click', checkAge)

function checkAge(){
    let age = Number (document.querySelector('input').value)
    if(age < 18){
        console.log("pulsera rojo")
    }else if(age  < 21){
        console.log("pulsera amarilla")
    }else{
        console.log("pulsera verde")
    }
}