const Ale = {
    nombre: 'Alejandro',
    apellido: 'Tinoco',
    edad: 22
};

//const cumpleaños = persona => persona.edad++;

const cumpleañosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
});