// Creating an object, object literal
//This is a simple way to define an object 
// Esta bien hacerlo cuando vas a hacer varios pero sin methods (behaviors)

const circle = {
    radius: 1,
    location: {
    X: 1,
    y: 1
    },
    draw: function() {
    console.log('draw');
    }
};
circle.draw();


//Factory function
// this is another way to define an object
// es una función que se utiliza para crear y devolver objetos. En lugar de utilizar la palabra clave "new" para crear instancias de objetos como lo harías con un constructor, una factory function simplemente crea y retorna un objeto literal dentro de su cuerpo.
// Las factory functions son útiles cuando deseas crear múltiples objetos con la misma estructura pero con diferentes valores iniciales. 

function createCircle(radius) {
    return {
    radius,
    draw: function () {
    console. log ('draw');
    }
    };
    }
    const circle = createCircle(1);
    circle.draw();


// Constructor Function

Function 