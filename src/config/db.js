const mongoose = require('mongoose');

const MONGO_PORT = 27017;
const MONGO_DB = 'workout';

mongoose.set('strict', false);
mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false);

mongoose
  .connect(`mongodb://127.0.0.1:${MONGO_PORT}/${MONGO_DB}`)
  .then(() => {
    console.log('>> Connected to DB!');
  })
  .catch((err) => {
    console.log('Error connecting to DB: ', err);
    process.exit(1);
  });
