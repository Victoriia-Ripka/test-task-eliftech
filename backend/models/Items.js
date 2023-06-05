const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  title: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  price: Number,
  description: String,
  quantity: Number,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'shops',
    required: true,
  },
});

const Items = model('items', itemSchema);

module.exports = Items;
