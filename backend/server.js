const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');

const DB_HOST = process.env.DB_HOST;
const PORT = process.env.PORT;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log('Server is running on ', PORT);
    });
  })
  .catch(err => {
    console.log(err.message);
    process.exit(1);
  });
