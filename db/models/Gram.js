const db = require('../connection.js');
const Sequelize = require('sequelize');

const Gram = db.define('gram', {
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: '',
    },
    likes: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
});

module.exports = Gram;