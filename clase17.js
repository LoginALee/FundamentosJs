var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.80
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Morales',
    altura: 1.70
}

var miguel = {
    nombre: 'Miguel',
    apellido: 'Nogales',
    altura: 1.82
}

var alejandro = {
    nombre: 'Alejandro',
    apellido: 'Tinoco',
    altura: 1.85
}

var maria = {
    nombre: 'Maria',
    apellido: 'DB',
    altura: 1.40
}

var lupita = {
    nombre: 'Lupita',
    apellido: 'Cañas',
    altura: 1.60
}

var personas = [lupita, maria, alejandro, miguel, vicky, alan];

// for(var i = 0; i < personas.length; i++){
//     var persona = personas[i];
//     console.log(`${persona.nombre} mide ${persona.altura}mts`)
// }

for (let persona of personas){
    console.log(`${persona.nombre} mide ${persona.altura.toFixed(2)} mts`);
}