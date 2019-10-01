var sacha = {
    nombre: 'Sacha',
    apellido: 'Morales',
    edad: 28,
    peso: 75
};

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_AÑO = 365;
const META = sacha.peso - 3;
var dias = 0;

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`);

const aumentarPeso = (persona) =>
    persona.peso += INCREMENTO_PESO;

const adelgazar = persona =>
    persona.peso -= INCREMENTO_PESO;

const comeMucho = () => 
    Math.random() < 0.3

const realizaDeporte = () =>
    Math.random() < 0.4



while(sacha.peso > META){
    if(comeMucho()){
        aumentarPeso(sacha);
    }
    else if(realizaDeporte()){
        adelgazar(sacha);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} dias hasta que ${sacha.nombre} adelgazó 3kg`);

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`);

