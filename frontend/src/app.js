document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "http://192.168.49.2:32189"; // Ahora usamos una ruta relativa
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
