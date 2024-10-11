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

// sub-rota /home/compartilhar
router.get('/profile', (req, res) => {
  res.json({ message: 'Esta é a página de compartilhar' });
});

// sub-rota /home/extratos
router.get('/profile', (req, res) => {
  res.json({ message: 'Esta é a página de extratos' });
});

// sub-rota /home/lembretes
router.get('/profile', (req, res) => {
  res.json({ message: 'Esta é a página de extratos' });
});

// sub-rota /home/lembretes
router.get('/profile', (req, res) => {
  res.json({ message: 'Esta é a página de extratos' });
});

// sub-rota /home/lembretes
router.get('/profile', (req, res) => {
  res.json({ message: 'Esta é a página de extratos' });
});

export default router;
