class Benja{
    constructor(name, age, genero){
        this.name = name
        this.age = age
        this.genero = genero

        talk(){
            console.log(`Hi ${name} nice to meet you`)
        }
    }
}

let person1 = new Benja("max", "38", "male")