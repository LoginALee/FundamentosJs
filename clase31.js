const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const OPTS = { crossDomain: true };



function obtenerPersonaje(id, callback){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $.get(URL, OPTS, callback).fail(function(){
        console.log(`Sucedió un error, no se pudo obtener el personaje ${id}`)
    })

    
};

obtenerPersonaje(1, function(persona) {
    console.log(`Hola, soy ${persona.name}`)

    obtenerPersonaje(2, function(persona) {
        console.log(`Hola, soy ${persona.name}`)

        obtenerPersonaje(3, function(persona) {
            console.log(`Hola, soy ${persona.name}`)

            obtenerPersonaje(4, function(persona) {
                console.log(`Hola, soy ${persona.name}`)

                obtenerPersonaje(5, function(persona) {
                    console.log(`Hola, soy ${persona.name}`)
                    
                });
            });
        });
    });  
});

