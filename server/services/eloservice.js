var EloDao = require('../repositories/elodao.js');
var Elo = require("../models/elo.js")

module.exports = class EloService {
    constructor() {
        this.elodao = new EloDao()
    }

    insertElo(eloDto) {
        // var elo = new Elo(null, eloDto.leagueId, eloDto.playerId, eloDto.value)
        var elo = new Elo(null, 1, 1, 1500)
        this.elodao.insertElo(elo)
    }
}