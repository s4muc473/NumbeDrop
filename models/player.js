const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  random_number: {
    type: Number,
    required: true,
  },
  key: {
    type: Number,
    required: true,
  },
});

playerSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  }
});

const Player = mongoose.model('player', playerSchema);

module.exports = Player;
