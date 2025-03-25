const Player = require('../models/player');
const Game = require('../controllers/gameController');

// Função para criar um usuário 
exports.createPlayer = async (req, res) => {
  try {
    const playerCount = await Game.getPlayersCount();
    const { random_number } = req.body;
    let key;

    if (playerCount >= 2) {
      res.status(201).json({ 
        "Erro": "Numero maximo de players alcançado.",
        "status": "0"
      });
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
    const { key, random_number } = req.params;
    // Procurar NA do Jogador com ID diferente

    let keyPlayer;
    if (key == 1) {
      keyPlayer = 2
    } else {
      keyPlayer = 1
    }

    const player = await Player.findOne({ key: keyPlayer });

    let randomNumberOtherPlayer = player.random_number;
    let numerosContidos = verificarDigitos(random_number, randomNumberOtherPlayer)


    if (random_number == randomNumberOtherPlayer) {
      console.log("NUMERO CORRETO!")
      res.status(200).json({"API":"Numero 100% correto!"});
    } else {

      console.log(random_number);
      console.log(randomNumberOtherPlayer);

      res.status(200).json({
        "numerosContidos":numerosContidos,
      });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ "erro": "erro no servidor" })
  }
}

function verificarDigitos(num1, num2) {
  const arr = [];
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  for (let i = 0; i < num1Str.length; i++) {
    if (!num2Str.includes(num1Str[i])) {
      console.log(num1Str[i]);
    } else {
      arr.push(num1Str[i]);
      console.log(arr);
    }
  }
  return arr.length;
}

exports.deletePlayer = async (req, res) => {
  try {
    const { key } = req.params;

    const deletedPlayer = await Player.deleteOne({ key });

    if (deletedPlayer.deletedCount === 0) {
      return res.status(404).json({
        message: "Jogador não encontrado para deletar.",
        status: "0"
      });
    }

    res.status(200).json({
      message: "Jogador deletado com sucesso.",
      status: "1"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro ao deletar jogador', error });
  }
};