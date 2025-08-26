const express = require("express");
const bodyParser = require("body-parser");

const getTache = require("./routes/getTache");
const postTache = require("./routes/postTache");

const app = express();
const PORT = 3000;

// Middleware pour lire le JSON
app.use(bodyParser.json());

// Stockage en mémoire
let tasks = [];

// Routes
app.use("/tasks", getTache(tasks));
app.use("/tasks", postTache(tasks));

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
