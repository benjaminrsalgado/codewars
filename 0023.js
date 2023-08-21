//Complete the square sum function so that it squares each number passed into it and then sums the results together.


function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n * n) + sum;
    }, 0);
    }

/* 
1.una función llamada squareSum que acepta un parámetro llamado numbers, que se espera sea un arreglo de números.

2. Se utiliza el método reduce en el arreglo numbers. Dentro de reduce, se pasa una función anónima con dos parámetros: sum y n.

sum: Actúa como un acumulador que almacena la suma acumulada de los cuadrados a medida que se itera sobre el arreglo.
n: Representa el número actual del arreglo que se está considerando en cada iteración.

3. Dentro de la función anónima, se realiza la operación de sumar el cuadrado del número actual al acumulador. Esto se hace calculando (n * n) para obtener el cuadrado del número y luego sumándolo al acumulador sum.

4. segundo argumento de reduce es 0, que es el valor inicial del acumulador sum. Esto asegura que la primera iteración comienza con el valor del acumulador en cero.

5.  El resultado final de reduce es el valor acumulado de la suma de los cuadrados de los números en el arreglo.
/*
