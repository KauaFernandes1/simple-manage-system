// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import loginRouter from './routes/login.js'; // Importa o router de login

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Define a rota /login para usar o loginRouter
app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
