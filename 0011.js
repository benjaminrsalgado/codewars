let userName = 'Ta',
age = 42,
luckyNumber = 13,
albums = 10

if (userName === 'Taylor' ){
    console.log('hi buddy ');
}else if ( age <= 32){
    console.log('you are in')
}else if (age >= 32){
    console.log('you are not the person')
}else if (luckyNumber <= 13){
    console.log('you will have a good life')
}else if (albums <= 10){
    console.log(`you will be rich with your ${albums}`)
}

// i am doing a ternary operation just por practicing 

userName === 'Ta' ? console.log('your own kid'): console.log ('i dont know you');
age  <= 32 ? console.log('hi buddy') : console.log ( 'you are so old');