import express, { Request, Response } from 'express';

// Inicializando o app Express
const app = express();

// Middleware para o Express entender JSON
app.use(express.json());

// Definindo uma rota de exemplo
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'API está funcionando corretamente!' });
});

// Definindo a porta onde a API ficará escutando
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});