const { Types } = require('mongoose');
const Items = require('../models/Items');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const httpError = require('../helpers/httpError');

const getUserList = async (req, res) => {
  const items = req.query.items.split(',');
  if (items) {
    const itemIds = items.map(id => new Types.ObjectId(id));
    const data = await Items.find({ _id: { $in: itemIds } });
    if (!data) {
      throw httpError(400);
    }
    res.status(200).json(data);
  } else {
    res.status(200).json([]);
  }
};

module.exports = {
  getUserList: ctrlWrapper(getUserList),
};
