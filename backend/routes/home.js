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
router.get('/compartilhar', (req, res) => {
  res.json({ message: 'Esta é a página de compartilhar' });
});

// sub-rota /home/extratos
router.get('/extratos', (req, res) => {
  res.json({ message: 'Esta é a página de extratos' });
});

// sub-rota /home/lembretes
router.get('/lembretes', (req, res) => {
  res.json({ message: 'Esta é a página de extratos' });
});

// sub-rota /home/contas
router.get('/contas', (req, res) => {
  res.json({ message: 'Esta é a página de extratos' });
});

// sub-rota /home/configuraçao
router.get('/configuraçao', (req, res) => {
  res.json({ message: 'Esta é a página de extratos' });
});

export default router;
