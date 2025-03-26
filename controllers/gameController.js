const Player = require('../models/player');
const Game = require('../models/game')

exports.getPlayersCount = async () => {
    try {
        const count = await Player.countDocuments();
        return count;
    } catch (error) {
        console.log(error);
    }
};

exports.setStatus = async (req, res) => {
    try {
        const game = await Game.findOne()
        console.log(game.time);

        const { status } = req.body;

        const updatedGame = await Game.findOneAndUpdate(
            {},  
            { $set: { status } }, 
            { new: true }  
        );

        if (updatedGame) {
            res.status(200).json(updatedGame);  
        } else {
            res.status(404).json({ message: 'No game found to update' });  
        }

    } catch (error) {
        console.log(error);
    }
}

exports.getGameStatus = async (req, res) => {
    try {
        const game = await Game.findOne()
        console.log(game.time);

        res.status(200).json({status: game.time});

    } catch (error) {
        console.log(error);
    } 
}