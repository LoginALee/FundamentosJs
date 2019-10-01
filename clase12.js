var sacha = {
    nombre: 'Sacha',
    apellido: 'Morales',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
};

var juan = {
    nombre:'Juan',
    apellido:'Gomez',
    edad: 13
};

const MAYORIA_DE_EDAD = 18;

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)

    if(persona.ingeniero){
        console.log('Ingeniero')
    }
    else{
        console.log('NO es ingeniero')
    }

    if(persona.cocinero){
        console.log('Cocinero')
    }

    if(persona.dj){
        console.log('dj')
    }

    if(persona.cantante){
        console.log('cantante')
    }

    if(persona.guitarrista){
        console.log('guitarrista')
    }

    if(persona.drone){
        console.log('vuela drone')
    }
}

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;
const esMenorDeEdad = persona =>!esMayorDeEdad(persona);

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else{
        console.log(`${persona.nombre} NO es mayor de edad`)
    }
}

function permitirAcceso(persona){
    if(esMenorDeEdad(persona)){
        console.log('Acceso denegado');
    }
    else{
        console.log('Acceso concedido!')
    }
}