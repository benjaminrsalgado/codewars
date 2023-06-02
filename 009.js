let man, woman, child, adult, old;
man = true;
woman = 20;
child = 'hello world';
adult = [ 'woman', 25, false];
old = function() {
    return 'old';
}

function dog (){
    console.log(dog)
}

function acceptTwoNumbers(a, b){
    console.log(a + b)
}
acceptTwoNumbers (7, 9) 

acceptTwoNumbers (20, 5)

function acceptNames (name){
    console.log(`Hello, ${name}`)
}
acceptNames('juan')

function acept (weekday){
    if ( weekday === 'lunes'){
    console.log('what a mess')
    }else if (weekday === 'martes' || weekday === 'miercoles'){
    console.log ('You can do it')
    }else if (weekday === 'jueves' || weekday === 'viernes'){
        console.log (`I love ${weekday}`)
    }else if (weekday === 'sabado' || weekday === 'domingo'){
        console.log(`${weekday} this is te best day` )
    }else{
        console.log('this is not a datatype')
    }
}
acept ('lunes')
acept ('martes')
acept ('jueves')
acept ('sabado')
acept ('ls')