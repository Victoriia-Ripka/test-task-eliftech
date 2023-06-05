const { Schema, model } = require('mongoose');

const shopSchema = new Schema({
  title: String,
});

const Shops = model('shops', shopSchema);

module.exports = Shops;
