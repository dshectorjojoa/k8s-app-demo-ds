document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "http://backend-service:8000"; // Dirección del backend
    const visitsDiv = document.getElementById("visits");
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        visitsDiv.innerHTML = `<p>${data.message} - Visitas: ${data.visits}</p>`;
      })
      .catch((error) => {
        visitsDiv.innerHTML = "<p>Error al conectar con el backend</p>";
      });
  });