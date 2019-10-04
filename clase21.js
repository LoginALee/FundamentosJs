function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}


Persona.prototype.soyAlto = function(){
    if(this.altura >= 1.8){
        console.log(`Soy alto`);
    }
    else{
        console.log(`Soy bajo`);
    }
};

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

var sacha = new Persona('Sacha', 'Morales', 1.4);
var erika = new Persona('Erika', 'Luna', 1.6);
var arturo = new Persona('Arturo', 'Coral', 1.8);
