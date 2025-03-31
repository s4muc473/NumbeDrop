const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const gameController = require('../controllers/gameController');

// Rota para criar usuário
router.post('/create', playerController.createPlayer);
router.get('/find/:key/:random_number', playerController.findPlayer);
router.get('/delete/:key', playerController.deletePlayer);
router.post('/game/status/', gameController.setStatus);
router.get('/game/status/', gameController.getGameStatus);
router.get('/game/time/', gameController.getTimeStatus);
router.post('/game/time/',gameController.setTime);

// Rota para obter todos os usuários
// router.get('/', playerController.getUsers);

module.exports = router;


