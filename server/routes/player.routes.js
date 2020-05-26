const PlayerController = require("../controllers/player.controller");

module.exports = app => {
    app.post("/api/players", PlayerController.addPlayer);
    app.put("/api/players/:id", PlayerController.updatePlayer);
    app.get("/api/players", PlayerController.findAllPlayers);
    app.delete("/api/players/:id", PlayerController.deletePlayer);
}