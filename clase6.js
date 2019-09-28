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




function imprimirNombreEnMayusculas({ nombre }){
    console.log(nombre.toUpperCase());
};

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre: 'Pepito'});


