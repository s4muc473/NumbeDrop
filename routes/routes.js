const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// Rota para criar usuário
router.post('/create', playerController.createPlayer);
router.get('/find/:key/:random_number', playerController.findPlayer);

// Rota para obter todos os usuários
// router.get('/', playerController.getUsers);

module.exports = router;
