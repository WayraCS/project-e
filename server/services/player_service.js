const { Player } = require('../models/schema/schema.js');
var PlayerDTO = require('../models/player.js');

module.exports = class PlayerService {
    constructor() {}

    async createPlayer(playerDto) {
       return await Player.create(playerDto)
    }


    async getPlayerById(playerId) {
        return await Player.findByPk(playerId)
    }
}