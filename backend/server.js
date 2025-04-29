const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("L'API fonctionne correctement !");
});

app.get("/api/message", (req, res) => {
  res.json({
    message: `Salut, ${process.env.MY_NAME || "l'inconnu (tu n'as pas renseigné la variable d'env MY_NAME)"}, ce message est envoyé depuis l'Azure App Service ${process.env.WEBSITE_SITE_NAME || "OUPS"}, qui tourne à plein régime dans le groupe de ressource ${process.env.WEBSITE_RESOURCE_GROUP || "OUPS"}!`
  });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://0.0.0.0:${PORT}`);
});
