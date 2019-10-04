function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}


Persona.prototype.soyAlto = () =>{
    return this.altura > 1.8;
};

Persona.prototype.saludar = () =>{
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

var sacha = new Persona('Sacha', 'Morales', 1.4);
var erika = new Persona('Erika', 'Luna', 1.6);
var arturo = new Persona('Arturo', 'Coral', 1.8);
