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


