const Player = require('../models/player.model');

module.exports.addPlayer = (req, res) => {
    const player = req.body;
    Player.create(player)
        .then(newPlayer => res.json( {player: newPlayer} ))
        .catch(err=> res.status(400).json(err));
};

module.exports.findAllPlayers = (req, res) => {
    Player.find({})
        .then(players => res.json(players))
        .catch(err => res.json({message: "Error finding all players: ", error: err}));
};

module.exports.updatePlayer = (req, res) => {
    if(req.body.num === 1) {
        Player.updateOne({_id: req.params.id}, {game1: req.body.status}, {new: true})
            .then(newStatus => res.json(newStatus))
            .catch(err => res.json({message: "Error updating player status", error: err}));
    } else if (req.body.num === 2) {
        Player.updateOne({_id: req.params.id}, {game2: req.body.status}, {new: true})
            .then(newStatus => res.json(newStatus))
            .catch(err => res.json({message: "Error updating player status", error: err}));
    } else if (req.body.num == 3) {
        Player.updateOne({_id: req.params.id}, {game3: req.body.status}, {new: true})
            .then(newStatus => res.json(newStatus))
            .catch(err => res.json({message: "Error updating player status", error: err}));
    }  
};

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(deletedPlayer => res.json(deletedPlayer))
        .catch(err => res.json({message: "Error deleting player: ", error: err}));
};