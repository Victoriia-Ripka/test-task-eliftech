const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema({
  id: String,
  cart: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'items',
    default: [],
  },
});

const Users = model('users', userSchema);

module.exports = Users;
