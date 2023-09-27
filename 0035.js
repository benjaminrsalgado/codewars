/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str){
    return str.split('').reverse().join('');  
}

// str.split(''): En esta parte del código, la función split('') toma la cadena de texto str y la convierte en un array de caracteres. Por ejemplo, si str = 'hola', entonces str.split('') = ['h','o','l','a'].

//  la función reverse() invierte el orden de los elementos de un array. Es decir que reverse invierte las palabras de la cadena de texto.

//.join(''): La función join('') convierte un array en una cadena de texto. Por ejemplo, si arr = ['h','o','l','a'], entonces arr.join('') = 'hola'.

// return: La función devuelve la cadena de texto invertida 'aloH'.