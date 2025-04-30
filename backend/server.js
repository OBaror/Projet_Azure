require('dotenv').config();
const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configuration de la base de données
const dbConfig = {
    user: "azroot",
    password: "projetazure1.",
    server: "az-projet123.database.windows.net",
    database: "backend123-gsfsfvgsgsf8c3a4.westeurope-01.azurewebsites.net",
    options: {
        encrypt: true,
        trustServerCertificate: false,
    }
};

// Connexion à la base de données
async function connectDB() {
    try {
        await sql.connect(dbConfig);
        console.log("Connecté à Azure SQL Database !");
    } catch (err) {
        console.error("Erreur de connexion à SQL :", err);
    }
}
connectDB();

// Route pour ajouter un étudiant
app.post('/etudiants', async (req, res) => {
    const { nom, age } = req.body;
    try {
        await sql.query`INSERT INTO etudiants (nom, age) VALUES (${nom}, ${age})`;
        res.status(201).json({ message: "Étudiant ajouté !" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route pour récupérer tous les étudiants
app.get('/etudiants', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM etudiants`;
        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur en écoute sur http://localhost:${PORT}`));
