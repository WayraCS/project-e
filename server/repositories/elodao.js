const sqlite3 = require('sqlite3');

module.exports = class EloDao {
    constructor() {
        this.db = new sqlite3.Database('./server/db/project-e.db');
    }
    
    insertElo(elo) {
        this.db.run(`INSERT INTO elo(leagueId, playerId, value) VALUES(?,?,?)`, [elo.leagueId, elo.playerId, elo.value], function(err) {
            if (err) {
              return console.log(err.message);
            }
            console.log(`A row has been inserted with rowid ${this.lastID}`);
          });
        
        this.db.close();
    };
    
    toElo(row) {
        return new Elo(
            row.id,
            row.name,
            row.hittingHand,
            row.gender,
            row.primaryRole,
            row.secondaryRole
        )
    };
}


