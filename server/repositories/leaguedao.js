const sqlite3 = require('sqlite3');

module.exports = class LeagueDao {
    constructor() {
        this.db = new sqlite3.Database('./server/db/project-e.db');
    }

    insertLeague(league) {
        this.db.run(`INSERT INTO league(name, owner, dateOfEvent, type) VALUES(?,?,?,?)`, [league.name, league.owner, league.dateOfEvent, league.type], function(err) {
       
            if (err) {
              return console.log(err.message);
            }
            console.log(`A row has been inserted with rowid ${this.lastID}`);
          });
        
        this.db.close();
    };
    
    toLeague(row) {
        return new League(
            row.id,
            row.name,
            row.owner,
            row.dateOfEvent,
            row.type
        )
    };
}


