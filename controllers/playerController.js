const Player = require('../models/player');
const Game = require('../controllers/gameController');

// Função para criar um usuário 
exports.createPlayer = async (req, res) => {
  try {
    const playerCount = await Game.getPlayersCount();
    const { random_number } = req.body;
    let key;
    
    if (playerCount >= 2) {
      res.status(201).json({"Erro":"Numero maximo de players alcançado."});
    } else {
      if (playerCount == 0) {
        key = 1;
      } else {
        key = 2;
      }
      const newPlayer = new Player({ random_number, key });
      await newPlayer.save();
      res.status(201).json(newPlayer); // Retorna ao front o id e o numero aleatorio que são armazenados no localstorage
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro ao criar usuário', error });
  }
};

exports.findPlayer = async (req, res) => {
  try {
    // pegar NA e ID na requisição
    const {key, random_number } = req.params;
    // Procurar NA do Jogador com ID diferente

    let keyPlayer;
    if (key == 1) {
      keyPlayer = 2
    } else {
      keyPlayer = 1
    }

    const player = await Player.findOne({key: keyPlayer}); 
    res.status(200).json(player)

  } catch (error) {
    console.log(error);
    res.status(500).json({"erro":"erro no servidor"})
  }
}

// // Função para obter todos os usuários
// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao obter usuários', error });
//   }
// };

// exports.getUserById = async (req, res) => {
//   try {
//     const { id } = req.params;  // Pegando o ID do usuário da URL
//     const user = await User.findById(id);  // Usando findById para buscar por índice (ID)
    
//     if (!user) {
//       return res.status(404).json({ message: 'Usuário não encontrado' });
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao obter usuário', error });
//   }
// };
