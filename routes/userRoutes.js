const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para criar usuário
router.post('/create', userController.createUser);

// Rota para obter todos os usuários
router.get('/', userController.getUsers);

module.exports = router;
