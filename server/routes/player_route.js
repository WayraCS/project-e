const express = require("express");
const router = express.Router();
var PlayerService = require('../services/player_service.js');

router.get("/:playerId", async function (req, res) {
    var playerId = req.params.playerId

    var playerService = new PlayerService()
    const player = await playerService.getPlayerById(playerId);
    res.json(player);
});

router.post("/", async function (req, res) {
    var leagueId = req.params.leagueId

    var playerService = new PlayerService()
    const player = await playerService.createPlayer(req.body, leagueId);
    res.json(player);
});

module.exports = router;