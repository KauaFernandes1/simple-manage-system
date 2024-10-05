const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); // Permitir requisições de outros domínios
app.use(bodyParser.json());

const users = {
  username: 'admin',
  password: '12345'
};

// Endpoint de autenticação
app.post('/data', (req, res) => {
  const { username, password } = req.body;

  if (username === users.username && password === users.password) {
    res.json({ success: true, message: 'Login realizado com sucesso!' });
  } else {
    res.status(401).json({ success: false, message: 'Nome ou senha incorretos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
