import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import loginRouter from './routes/login.js'; // Importa o router de login
import homeRouter from './routes/home.js'
import cofreRouter from './routes/cofre.js'

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Define a rota /login para usar o loginRouter
app.use('/login', loginRouter);
app.use('/home', homeRouter);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
