var sacha = {
    nombre: 'Sacha',
    apellido: 'Morales',
    edad: 28
};

var dario = {
    nombre: 'Dario',
    apellido: 'Ramirez',
    edad: 12
};




function imprimirNombreEnMayusculas(persona){
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
};

function imprimirNombreYEdad(persona){
    //Hola, me llamo sacha y tengo 28 años
    //Hola, me llamo dario y tengo 12 años
    console.log('Hola, me llamo ' + persona.nombre + ' y tengo ' + persona.edad + ' años');  
};

function cumpleanos(persona){
    return{
        ...persona,
        edad: persona.edad +1
    }
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);

imprimirNombreYEdad(sacha);
imprimirNombreYEdad(dario);


