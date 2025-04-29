document.getElementById("fetchData").addEventListener("click", () => {
    fetch("https://<url-backend>/api/message")  // Remplace <url-backend> par ton URL Azure App Service
        .then(response => response.json())
        .then(data => {
            document.getElementById("serverResponse").innerText = data.message;
        })
        .catch(error => console.error("Erreur:", error));
});
