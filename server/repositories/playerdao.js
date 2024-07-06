const sqlite3 = require('sqlite3');

module.exports = class PlayerDao {
    constructor() {
        this.db = new sqlite3.Database('./server/db/project-e.db');
    }

    insertPlayer(player) {
        this.db.run(`INSERT INTO player(name, hittingHand, gender, primaryRole, secondaryRole) VALUES(?,?,?,?,?)`, [player.name, player.hittingHand, player.gender, player.primaryRole, player.secondaryRole], function(err) {
            if (err) {
              return console.log(err.message);
            }
            console.log(`A row has been inserted with rowid ${this.lastID}`);
          });
        
        this.db.close();
    };
    
    toLeague(row) {
        return new Player(
            row.id,
            row.name,
            row.hittingHand,
            row.gender,
            row.primaryRole,
            row.secondaryRole
        )
    };
}


