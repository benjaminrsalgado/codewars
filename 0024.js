/* 
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

*/

var summation = function (num) {
    let result = 0;  // Inicializa una variable llamada "result" con valor 0.
    for (var i = 1; i <= num; i++){ // Itera desde 1 hasta el número dado "num".
    result += i; // Agrega el valor de "i" a "result" en cada iteración.
    }
    
    return result; // Devuelve la suma total.
}


/*
- var summation = function (num) { ... }: Aquí se define una función llamada summation que acepta un parámetro num.

- let result = 0;: Se inicializa una variable llamada result con un valor de 0. Esta variable se usará para almacenar la suma acumulada de los números.

- for (var i = 1; i <= num; i++) { ... }: Esto es un bucle for que inicia una variable i en 1 y continúa hasta que i sea menor o igual a num. En cada iteración del bucle, se suma el valor de i a la variable result.

result += i;: En cada iteración, el valor de i se suma a la variable result, lo que acumula la suma total de los números desde 1 hasta el valor de num.

return result;: Una vez que el bucle ha terminado de iterar a través de todos los números, la función devuelve el valor almacenado en la variable result, que es la suma total de los números.
*/