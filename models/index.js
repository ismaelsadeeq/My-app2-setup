const connection = require('./config');
const {Sequelize} = require('sequelize');
const User = require('./user.model');

const sequelize = new Sequelize(connection.db, connection.user, connection.password, {
  host:connection.host,
  dialect:connection.dialect
});

const db ={};

db.Sequelize= Sequelize;
db.sequelize =sequelize

db.user= User(sequelize,Sequelize);

module.exports = db;