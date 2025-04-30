const API_URL = "backend123-gsfsfvgsgsf8c3a4.westeurope-01.azurewebsites.net"; 


document.getElementById("fetchData").addEventListener("click", () => {
    fetch(`${API_URL}/api/message`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("serverResponse").innerText = data.message;
        })
        .catch(error => console.error("Erreur (message):", error));
});


document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const student = {
        nom: document.getElementById("name").value,
        age: parseInt(document.getElementById("age").value)
    };

    fetch(`${API_URL}/etudiants`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
    .then(response => response.json())
    .then(data => {
        alert("Étudiant ajouté !");
        document.getElementById("studentForm").reset();
        fetchStudents(); // Met à jour la liste
    })
    .catch(error => console.error("Erreur (ajout étudiant):", error));
});

function fetchStudents() {
    fetch(`${API_URL}/etudiants`)
        .then(response => response.json())
        .then(students => {
            const list = document.getElementById("studentList");
            list.innerHTML = "";

            students.forEach(student => {
                const li = document.createElement("li");
                li.textContent = `${student.nom} - ${student.age} ans`;
                list.appendChild(li);
            });
        })
        .catch(error => console.error("Erreur (liste étudiants):", error));
}

document.addEventListener("DOMContentLoaded", function() {
    fetchStudents();
});
