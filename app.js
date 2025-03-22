require('dotenv').config(); 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/db');  
const userRoutes = require('./routes/routes');
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index'); 
});


app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Exportar para o Vercel
// module.exports = app;
