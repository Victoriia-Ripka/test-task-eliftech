const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const ShopRouter = require('./routes/api/shop');
const UserRouter = require('./routes/api/user');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/shops', ShopRouter);
app.use('/api/user-cart', UserRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

module.exports = app;
