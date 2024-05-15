function numbers (n){
    for(n = 0; n < 100; n++){
        if (n % 3){
            console.log("Fizz")
        }else if(n % 5){
            console.log("Buzz")
        }
    }
}