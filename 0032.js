/* Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).*/

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

// arrayOfSheeps.filter(Boolean): Aquí, arrayOfSheeps es el array que pasaste como argumento a la función. 

//filter es un método de los arrays en JavaScript que se utiliza para crear un nuevo array con todos los elementos que cumplan una cierta condición. En este caso, la condición que se pasa a filter es Boolean.

//Boolean convierte todos los valores del array en true o false, donde true representa un valor "verdadero" y false representa un valor "falso". Esto es útil para filtrar todos los valores "verdaderos" (en este caso, las ovejas) del array arrayOfSheeps.