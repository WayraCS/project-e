const { Elo, Player} = require('../models/schema/schema.js');
var EloDTO = require('../models/elo.js');
var PlayerDTO = require('../models/player.js');

module.exports = class EloService {
    constructor() {}

    async createElo(eloDto) {
        await Elo.create(eloDto)
    }


    async getEloByPlayerId(playerId,) {
        return await Elo.findAll({
            where: {
              playerId: playerId
            }
          })
    }

    
    async getEloByPlayerIdAndLeagueId(playerId, leagueId) {
        return await Elo.findAll({
            where: {
              playerId: playerId,
              leagueId: leagueId
            }
          })
    }
}