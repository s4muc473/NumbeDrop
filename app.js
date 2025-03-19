require('dotenv').config();  // Certifique-se de que este código esteja no topo do arquivo
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/db');  // Conexão com MongoDB
const userRoutes = require('./routes/userRoutes');
const path = require('path');

const app = express();

// Middleware para analisar corpo da requisição
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index'); 
});

// Usando rotas
app.use('/api/users', userRoutes);

// Iniciar o servidor local
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });

// Exportar para o Vercel
module.exports = app;
