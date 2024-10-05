import express from 'express';
const router = express.Router();

// Rota principal de /home
router.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à página principal de Home' });
});

// Sub-rota de /home/dashboard
router.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo ao Dashboard!' });
});

// Sub-rota de /home/profile
router.get('/profile', (req, res) => {
  res.json({ message: 'Esta é a página de perfil' });
});

export default router;
