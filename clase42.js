const Ale = {
    nombre: 'Alejandro',
    apellido: 'Tinoco',
    edad: 22
};

const Mariana = {
    nombre: 'Mari',
    apellido: 'Morales',
    edad: 22
};

function saludar(saludo = 'Hola'){
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

// const saludarAAle = saludar.bind(Ale);
// const saludarAMariana = saludar.bind(Mariana);

// setTimeout(saludar.bind(Ale, 'Hola che'), 1000);

saludar.apply(Ale,['Hola che']);