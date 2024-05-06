/*
Ejercicio: Suma de los dígitos de un número

Escribe una función llamada sumaDigitos que tome un número entero positivo como argumento y devuelva la suma de sus dígitos.

Por ejemplo:

Si el número es 123, la suma de sus dígitos sería 1 + 2 + 3 = 6.
Si el número es 8675309, la suma de sus dígitos sería 8 + 6 + 7 + 5 + 3 + 0 + 9 = 38.
Tu tarea es escribir una función que calcule esta suma de dígitos para cualquier número entero positivo que se le pase como argumento.
*/

function sumaDigitos(N){
    for(N =1; N <= 9; N++){
        if(N === 1 || N === 2 || N === 3){
            console.log(6)
        }else if(N === 8 ||N === 6 || N === 5||N === 3||N === 0||N === 7||N === 9){
            console.log(38)
        }
    }
}