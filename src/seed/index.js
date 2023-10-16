require('dotenv').config();
require('../config/db');
const { Exercise } = require('../models/mongo');
const seed = require('./seed');

const main = async () => {
  await Exercise.collection.drop();
  console.log('>> Clean collection');
  await Exercise.insertMany(seed.exercises);
};

main()
  .then(() => {
    console.log('>> Populated seed in DB');
    process.exit();
  })
  .catch((err) => {
    console.log('>> There was an error populating seed in DB: ', err);
    process.exit(1);
  });
