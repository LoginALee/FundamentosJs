var Alejandro = {
    nombre: 'Alejandro',
    apellido: 'Tinoco',
    edad: 22
}

function esMayorDeEdad(persona){
    let mensaje;
    const MAYORIA_DE_EDAD = 18;

    if(persona.edad >= MAYORIA_DE_EDAD){
        mensaje = 'Es mayor de edad'
    }
    else{
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje);
}

for(let i = 0; i < 10; i++){
    console.log(i);
}

console.log(`Terminó el for, el valor de i es ${i}`);


