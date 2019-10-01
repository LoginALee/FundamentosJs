var sacha = {
    nombre: 'Sacha',
    apellido: 'Morales',
    edad: 28,
    peso: 75
};

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`);

const aumentarPeso = (persona) =>
    persona.peso += INCREMENTO_PESO;

const adelgazar = persona =>
    persona.peso -= INCREMENTO_PESO;

for(var i = 1; i <= DIAS_DEL_AÑO; i++){
    var random = Math.random()

    if(random < 0.25){
        aumentarPeso(sacha);
    }
    else if (random < 0.50){
        adelgazar(sacha);
    }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`);

