const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player Name is Required"]
    },
    position: {
        type: String,
        required: [true, "Player Position is Required"]
    },
    game1: String,
    game2: String,
    game3: String
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;