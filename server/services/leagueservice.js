var LeagueDao = require('../repositories/leaguedao.js');
var League = require("../models/league.js")

module.exports = class LeagueService {
    constructor() {
        this.leaguedao = new LeagueDao()
    }

    insertLeague(leagueDto) {
        var league = new League(null, "league name", "league owner", new Date(), "tournament")
        this.leaguedao.insertLeague(league)
    }
}