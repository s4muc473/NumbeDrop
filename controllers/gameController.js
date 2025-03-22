const Player = require('../models/player');

exports.getPlayersCount = async () => {
    try {
        const count = await Player.countDocuments(); 
        return count; 
    } catch (error) {
        console.log(error);
    }
};
