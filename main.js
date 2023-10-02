const url = 'https://jsonplaceholder.typicode.com/users';

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("miFormulario");
  form.addEventListener("submit", function(event){
    debugger;
    event.preventDefault();

      jsonData = {}; 
      jsonData.nombre    = document.getElementById("nombre").value;
      jsonData.apellido  = document.getElementById("apellido").value;
      jsonData.fechaNac  = document.getElementById("fechaNac").value;

      let jsonBody = JSON.stringify(jsonData);

      setAPI(jsonBody);
  });

});


function setAPI(jsonBody){
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonBody,
  };
  
  
  fetch(url, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json(); // Si esperas una respuesta JSON del servidor
  })
  .then(data => {
    console.log('Respuesta del servidor:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
} 