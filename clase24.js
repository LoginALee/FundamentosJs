function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}


function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}


Persona.prototype.soyAlto = function(){
    return this.altura >= 1.8;
};

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

function Desarrollador(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
};

heredaDe(Desarrollador,Persona);

Desarrollador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
};


// var sacha = new Persona('Sacha', 'Morales', 1.4);
// var erika = new Persona('Erika', 'Luna', 1.6);
// var arturo = new Persona('Arturo', 'Coral', 1.8);
