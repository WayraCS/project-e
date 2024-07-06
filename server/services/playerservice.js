var PlayerDao = require('../repositories/playerdao.js');
var Player = require("../models/player.js")

module.exports = class PlayerService {
    constructor() {
        this.playerdao = new PlayerDao()
    }

    insertPlayer(playerDto) {
        // var player = new Player(null, playerDto.name, playerDto.hittingHand, playerDto.gender, playerDto.primaryRole, playerDto.secondaryRole)
        var player = new Player(null, "john smith", "M", "L", "RS", "OH")
        this.playerdao.insertPlayer(player)
    }
}