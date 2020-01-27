const db = require('../connection.js');
const Sequelize = require('sequelize');

const User = db.define('user', {
    username: {
        type: Sequelize.STRING,
        defaultValue: 'sammy08',
    },
    password: {
        type: Sequelize.STRING,
        defaultValue: 'evolves',
    },
});

module.exports = User;