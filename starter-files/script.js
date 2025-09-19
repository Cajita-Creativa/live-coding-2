// API
const API_ENDPOINT = 'https://yesno.wtf/api';

function fetchAnswer() {
    fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta de la API:", data);
    })
    .catch(error => {
        console.error("Error en la petición:", error);
    });
}