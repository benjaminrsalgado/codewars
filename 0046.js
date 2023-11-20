/*
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
*/

const stringToNumber = function(str) {
    return +str; // O puedes usar return Number(str);
};
  let stringNumero = "456";
  let numero = stringToNumber(stringNumero);
  console.log(numero); // Resultado: 456


  //+str convierte str a un numero 
  // se define una variable llamada stringNumero que contiene una cadena que representa un número.
  //función stringToNumber para convertir la cadena stringNumero a un número y se asigna el resultado a una variable llamada numero.
  // se imprime en la consola el valor de la variable numero, que ahora contiene el número convertido.


 //Let's play! You have to return which player won! In case of a draw return Draw!.
 const rps = (p1, p2) => {
    if(p1 === "scissors" &&  p2 === "paper"){
      return "Player 1 won!"
    }else if(p1 === "scissors" && p2 === "rock"){
      return "Player 2 won!"
    }else if (p1 === "paper" && p2 === "paper"){
      return "Draw!"
    }else if(p1 === "paper" && p2 ==="scissors"){
      return "Player 2 won!"
    }else if (p1 === "rock" && p2 === "scissors"){
      return "Player 1 won!"
    }else if (p1 === "scissors" && p2 === "scissors"){
      return "Draw!"
    }else if (p1 === "rock" && p2 === "rock"){
      return "Draw!"
    }else if (p1 === "rock" && p2 === "paper"){
      return "Player 2 won!"
    }else if (p1 === "paper" && p2 === "rock" ){
      return "Player 1 won!"
    }
    
  };

  