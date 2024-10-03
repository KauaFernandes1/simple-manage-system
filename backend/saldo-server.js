const express = require('express');
const app = express();
const port = 7000;

// Definindo um valor de saldo fictício
const dummyBalance = {
  saldo: 70000.00
};

// Rota principal que retorna o valor de saldo
app.get('/api/saldo', (req, res) => {
  res.json(dummyBalance);
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor dummy rodando em http://localhost:${port}`);
});
