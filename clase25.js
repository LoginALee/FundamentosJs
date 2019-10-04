class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }

    soyAlto(){
        return this.altura >= 1.8;
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura);
    };

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    }
}


// var sacha = new Persona('Sacha', 'Morales', 1.4);
// var erika = new Persona('Erika', 'Luna', 1.6);
// var arturo = new Persona('Arturo', 'Coral', 1.8);
