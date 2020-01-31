const chalk = require('chalk');
const models = require('../models');
const faker = require('faker');
const { User, Gram } = models;

const GENERATED_USERS = 5;
const POSTS_PER_USER = 1;

const seed = async() => {
    try {
        let userList = Array(GENERATED_USERS);
        for (let i = 0; i < GENERATED_USERS; i++) {
          userList[i] = {
            username: `${faker.name.firstName()}${Math.floor(Math.random()*100)}`,
            password: faker.random.alphaNumeric(16),
          }
        }
        const createdUsers = await Promise.all(
          userList.map(user => User.create({ ...user }))
        );

        for (let i = 0; i < GENERATED_USERS; i++) {
          for (let j = 0; j < POSTS_PER_USER; j++) {
            const offset = Math.floor((Math.random() * 17 )) % 9;
            await Gram.create({
              imageUrl: `http://placekitten.com/40${offset}/40${offset}`,
              userId: createdUsers[i].id,
              likes: Math.floor(Math.random() * 100),
            });
          }
        }
    } catch (e) {
        console.log(chalk.red('Error while seeding.'));
        console.error(e);
        process.exit(1);
    }
};

module.exports = seed;
