const { League } = require('../models/schema/schema.js');
var LeagueDTO = require('../models/league.js');

module.exports = class LeagueService {
    constructor() {}

    createLeague(leagueDto) {
        League.create(new LeagueDTO(null, leagueDto.name, leagueDto.owner, leagueDto.dateOfEvent, leagueDto.type))
    }


    async getLeagueById(leagueId) {
        return await League.findByPk(leagueId)
    }

    async getAllLeagues() {
        return await League.findAll()
    }
}