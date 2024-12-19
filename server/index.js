const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Fazer com que o Node sirva os arquivos do app em React criado
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
   res.json({ message: "Hello Nathalia Marins!" });
});

// Todas as outras solicitações GET não tratadas retornarão nosso app em React
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});