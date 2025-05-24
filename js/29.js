// FETCH API
const url = 'https://jsonplaceholder.typicode.com/comments';

fetch(url)
    .then( (response) => {
        console.log(response);

        if (response.ok) {
            return response.json();
        }

        throw new Error('Hubo un error');
    } )
    .then( (resultado) => { // puede ser: data
        console.log(resultado);
    } )
    .catch( error => {// en FETCH, el CATCH solo se ejecuta cuando tiene problemas de WIFI
        console.log(error);
        console.log(error.message);
    }) 