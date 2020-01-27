const db = require('./connection.js');
const models = require('./models');
const utils = require('./utils/index.js');

const { User, Gram } = models;

User.hasMany(Gram);
Gram.belongsTo(User);

module.exports = {
  db,
  utils,
  User,
  Gram
};