function positiveSum(arr) {
    return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
  }

/*
Este es un callback que se pasa a la función reduce. Cada vez que reduce itera sobre un elemento en el array, este callback se ejecuta.
*/

/*
num > 0 ? sum + num : sum es una expresión condicional (operador ternario). Significa: "Si num es mayor que 0, entonces suma num a sum; de lo contrario, deja sum como está. "
*/


// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x) {
    // Verificar si x es una cadena
    if (typeof x === "string") {
      return "Error";
    }
  
    // Multiplicar por 50 y sumar 6
    let valor = x * 50;
    valor = valor + 6;
  
    // Retornar el resultado
    return valor;
  }
  

/*
Esta condición typeof x === "string" verifica si el tipo de datos de la variable x es una cadena. Si es así, significa que el valor proporcionado a la función en el parámetro x es una cadena, y en ese caso, la función retorna la cadena "Error".
*/


//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.If the function is passed a valid PIN string, return true, else return false.

if (pin.length === 4 || pin.length === 6) {
    // Verificar si todos los caracteres son dígitos
    if (/^\d+$/.test(pin)) {
      return true;
    }
  }
  // Si no cumple con las condiciones, retornar false
  return false;


// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.replace(/\s/g, '');
}

/*
El /\s/g es una expresión regular que encuentra todos los espacios en blanco (\s) en la cadena. El modificador g al final significa "global", lo que indica que debe buscar y reemplazar todas las instancias de espacios en blanco en toda la cadena.
 */




/*
Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm)
*/

function setAlarm(employed, vacation) {
  if (employed && !vacation) {
      return true; // Estás empleado y no estás de vacaciones, entonces debes poner la alarma.
  } else {
      return false; // Cualquier otro caso, no necesitas poner la alarma.
  }
}


/*
En esta variable !vacation verifica si la variable vacation es false. 
*/



/*
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

let name = "name"

function greet(name){
  return `Hello, ${name} how are you doing today?`
}


/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function findAverage(array) {
  if (array.length === 0) {
    return 0; // Si el array está vacío, el promedio es 0
  }
  
  // Suma de todos los elementos en el array
  const sum = array.reduce((a, b) => a + b);
  
  // Dividir la suma por la cantidad de elementos para obtener el promedio
  const average = sum / array.length;
  
  return average; // Devolver el promedio
}

//array.length proporciona el número de elementos en el array. Al dividir la suma total de los elementos sum

