const express = require("express");
const router = express.Router();
var EloService = require('../services/elo_service.js');

router.get("/leagues/:leagueId/players/:playerId/elos", async function (req, res) {
    var playerId = req.params.playerId
    var leagueId = req.params.leagueId

    console.log(req.params)

    var eloService = new EloService()
    const elo = await eloService.getEloByPlayerIdAndLeagueId(playerId, leagueId);
    res.json(elo);
});

module.exports = router;