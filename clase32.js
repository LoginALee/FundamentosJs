const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const OPTS = { crossDomain: true };



function obtenerPersonaje(id){
    return new Promise((resolve, reject) =>{
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        
        $
        .get(URL, OPTS, function(data){
            resolve(data)
        })

        .fail(()=> reject(id))
    })
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

    obtenerPersonaje(1)
        .then(persona => {
            console.log(`El personaje 1 es ${persona.name}`);
            return obtenerPersonaje(2);
        })
        .then(persona => {
            console.log(`El personaje 2 es ${persona.name}`);
            return obtenerPersonaje(3);
        })
        .then(persona => {
            console.log(`El personaje 3 es ${persona.name}`);
            return obtenerPersonaje(4);
        })
        .then(persona => {
            console.log(`El personaje 4 es ${persona.name}`);
            return obtenerPersonaje(5);
        })
        .then(persona => {
            console.log(`El personaje 5 es ${persona.name}`);
            return obtenerPersonaje(6);
        })
        .then(persona => {
            console.log(`El personaje 6 es ${persona.name}`);
            return obtenerPersonaje(7);
        })
        .then(persona => {
            console.log(`El personaje 7 es ${persona.name}`);
        })
        .catch(onError)

    


