const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
const path = require('path');

var LeagueService = require('./server/services/leagueservice.js');
var EloService = require('./server/services/eloservice.js');
var PlayerService = require('./server/services/playerservice.js');


app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    league = new LeagueService()
    elo = new EloService()
    player = new PlayerService()
    league.insertLeague()
    player.insertPlayer()
    elo.insertElo()
    res.json({ message: "Project-E : Hello world!"});
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
}); 

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
