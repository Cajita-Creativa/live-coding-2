// API
const API_ENDPOINT = 'https://yesno.wtf/api';

function fetchAnswer() {
    fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta de la API:", data);
    const answerDiv = document.getElementById("answer");
        answerDiv.textContent = data.answer; 
    })
    .catch(error => {
        console.error("Error en la petición:", error);
    });
}