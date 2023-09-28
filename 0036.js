/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/

function removeChar(str){
    return str.slice(1, -1);
}


// function removeChar(str): Esta línea define una función en JavaScript llamada removeChar que toma un parámetro, str, que es la cadena de texto de la cual deseas eliminar el primer y último carácter.

// str.slice(1, -1): Esta línea devuelve una nueva subcadena de la cadena de texto str. El método slice se utiliza para extraer una parte de una cadena de texto. Aquí está lo que significan los argumentos:
//El primer argumento, 1, especifica el índice de inicio desde donde debe comenzar la subcadena. En JavaScript, los índices de las cadenas de texto comienzan en 0, por lo que 1 significa que debe comenzar desde el segundo carácter de la cadena (índice 1).
//El segundo argumento, -1, especifica el índice de finalización. Cuando utilizas un número negativo como índice de finalización, cuenta desde el final de la cadena. En este caso, -1 significa que debe finalizar justo antes del último carácter de la cadena.

// al usar str.slice(1, -1), básicamente estás creando una nueva cadena de texto que consiste en todos los caracteres desde el segundo carácter hasta el penúltimo carácter de la cadena original, lo que efectivamente elimina el primer y último carácte