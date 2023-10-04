// We need a function that can transform a number (integer) into a string.

function numberToString(num) {
    let cono = num.toString()
    return cono
}

//  *Functions*
//Create a function that returns rock, paper, or scissors as randomly as possible
function game (){
    let random = Math.random()
    if (random < .33){
        return rock
    }else if (random < .66){
        return paper
    }else{
        return scissors
    }
}

// function game se define una función

// let random = Math.random(): La variable random se declara dentro de la función y se le asigna el valor de Math.random() para capturar y retener un valor aleatorio generado por Math.random() durante la ejecución de la función.

// Los if son condicionales que ya sabes manejarlo 