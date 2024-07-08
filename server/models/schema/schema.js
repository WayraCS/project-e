const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './server/db/project-e.db'
  });

class League extends Model {}
    League.init({
        name: DataTypes.STRING,
        owner: DataTypes.STRING,
        dateOfEvent: DataTypes.STRING,
        type: DataTypes.STRING
}, { sequelize, modelName: 'League' });

class Elo extends Model {}
    Elo.init({
        leagueId: DataTypes.INTEGER,
        playerId: DataTypes.INTEGER,
        value: DataTypes.REAL,
}, { sequelize, modelName: 'Elo' });

class Player extends Model {}
    Player.init({
        name: DataTypes.STRING,
        hittingHand: DataTypes.STRING,
        gender: DataTypes.STRING,
        primaryRole: DataTypes.STRING,
        secondaryRole: DataTypes.STRING,
}, { sequelize, modelName: 'Player' });

Player.belongsToMany(League, { through: 'LeaguePlayers' });
Elo.belongsToMany(Player, { through: 'PlayerElos' });

sequelize.sync();


module.exports = { League, Elo, Player }