const express = require("express");
const router = express.Router();

var LeagueService = require('../services/league_service.js');


router.get("/:id", async function (req, res) {
    var leagueService = new LeagueService()
    const league = await leagueService.getLeagueById(req.params.id);
    res.json(league);
});

router.get("/", async function (req, res) {
    var leagueService = new LeagueService()
    const leagues = await leagueService.getAllLeagues();
    res.json(leagues);
});


router.post("/", async function (req, res) {
    var leagueService = new LeagueService()
    console.log(req.body)
    leagueService.createLeague(req.body);
});


module.exports = router;