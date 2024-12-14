const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route principale
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route pour additionner deux nombres
app.get('/add', (req, res) => {
  const num1 = parseInt(req.query.num1, 10);
  const num2 = parseInt(req.query.num2, 10);
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send({ error: 'Invalid numbers provided' });
  }
  res.send({ result: num1 + num2 });
});

// Démarrage du serveur
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
  });
}

module.exports = app; // Exporter l'application pour les tests
