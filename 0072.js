let suma = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        suma += i;
    }
}

console.log("La suma de los números pares del 1 al 50 es: " + suma);

// este es otro

function sumarMultiplo (n,m){
    for(let i = 0; i<= 1000; i++){
        if(i % n  === 0 || i % m === 0 ){
            console.log(i)
        }
    }
}