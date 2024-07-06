module.exports = class Elo {
    constructor(id, leagueId, playerId, value) {
      this.id = id;
      this.leagueId = leagueId;
      this.playerId = playerId;
      this.value = value;
    }
}