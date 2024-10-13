// server.js (ou app.js)
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Simulação de senha no backend
const VALID_PASSWORD = '1234';

// Endpoint para validar senha
app.post('/api/cofre', (req, res) => {
  const { password } = req.body;

  if (password === VALID_PASSWORD) {
    return res.status(200).json({ message: 'Senha correta', authorized: true });
  } else {
    return res.status(401).json({ message: 'Senha incorreta', authorized: false });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
