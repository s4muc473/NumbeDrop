const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    status: {
        type: Number,
        required: true,
    },
});

gameSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
    }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
