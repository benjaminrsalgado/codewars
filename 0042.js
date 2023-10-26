// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

// reduce() se utiliza para acumular un valor mientras se recorren los elementos de un array.


//(a, b) => a + (b > 0 ? b : 0) es una función de reducción que toma dos argumentos: a es el acumulador, y b es el elemento actual del array que se está procesando. En cada iteración, esta función comprueba Si b es positivo, se suma a a; de lo contrario, se queda en 0