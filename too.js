const express = require('express');
const app = express();

// Middleware pour logger méthode et URL
const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Passe au middleware ou à la route suivante
};

// Utilisation du middleware dans toute l'application
app.use(requestLogger);

// Exemple de route
app.get('/', (req, res) => {
  res.send('Bonjour, monde !');
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
