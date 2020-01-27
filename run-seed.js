const chalk = require('chalk');
const { db, utils } = require('./db');

const { seed } = utils;

db.sync({force: true})
  .then(seed)
  .then(() => {
    console.log(chalk.green('Seed script ran successfully.'));
    process.exit(0);
  })
  .catch(e => {
    console.log(chalk.red('Seed script failed to run.'));
    console.error(e);
    process.exit(1);
  });
