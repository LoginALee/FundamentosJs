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

function imprimirSiEsMayorDeEdad(persona){
    if(persona.edad >= 18){
        console.log('Es mayor de edad')
    }
    else{
        console.log('NO es mayor de edad')
    }
}

imprimirProfesiones(sacha);
imprimirSiEsMayorDeEdad(sacha);
