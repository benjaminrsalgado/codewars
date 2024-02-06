/*
Eres el organizador de un evento y necesitas verificar la edad de los asistentes para determinar qué tipo de pulsera deben recibir. Cada pulsera tiene un color diferente y representa ciertos privilegios en el evento.
*/

function checkAge(age){
    if(age < 18){
        console.log("pulsera rojo")
    }else if(age  < 21){
        console.log("pulsera amarilla")
    }else{
        console.log("pulsera verde")
    }
}

checkAge(25)


