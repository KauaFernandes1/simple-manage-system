// routes/login.js
import express from 'express';

const router = express.Router();

const users = {
  username: 'admin',
  password: '12345'
};

// endpoint de autenticação
router.post('/', (req, res) => {
  const { username, password } = req.body;

  if (username === users.username && password === users.password) {
    res.json({ success: true, message: 'Login realizado com sucesso!' });
  } else {
    res.status(401).json({ success: false, message: 'Nome ou senha incorretos' });
  }
});

export default router;
