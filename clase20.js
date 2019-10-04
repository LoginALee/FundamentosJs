var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.80,
    cantidadDeLibros: 39

}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Morales',
    altura: 1.70,
    cantidadDeLibros: 5
}

var miguel = {
    nombre: 'Miguel',
    apellido: 'Nogales',
    altura: 1.82,
    cantidadDeLibros: 50
}

var alejandro = {
    nombre: 'Alejandro',
    apellido: 'Tinoco',
    altura: 1.85,
    cantidadDeLibros: 100
}

var maria = {
    nombre: 'Maria',
    apellido: 'DB',
    altura: 1.40,
    cantidadDeLibros: 45
}

var lupita = {
    nombre: 'Lupita',
    apellido: 'Cañas',
    altura: 1.60,
    cantidadDeLibros: 800
}

var acum = 0;

var personas = [lupita, maria, alejandro, miguel, vicky, alan];

// for(var i = 0; i < personas.length; i++){
//     var persona = personas[i];
//     console.log(`${persona.nombre} mide ${persona.altura}mts`)
// }

// for (let persona of personas){
//     console.log(`${persona.nombre} mide ${persona.altura.toFixed(2)} mts`);
// }

const esAlta = ({ altura }) => {
    return altura > 1.8;
};

const pasarAlturaACms = (persona) =>({
    
        ...persona,
        altura: persona.altura * 100
    
});

var personasAltas = personas.filter(esAlta);

// var personasCms = personas.map(pasarAlturaACms);

// for(var i = 0; i < personas.length; i++){
//     acum += personas[i].cantidadDeLibros;
// };

const reducer = (acum, { cantidadDeLibros }) => {
    return acum + cantidadDeLibros;
};

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalDeLibros} libros`);
